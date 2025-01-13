import { useState } from "react";
import backgroundImage from "./assets/background.webp";
import FormEntry from "./components/FormEntry";

export default function App() {
  
  const [started, setStarted] = useState(false);
  const [shuffled, setShuffled] = useState(false);

  const [partakers, setPartakers] = useState([
    { name: "", excluded: "" },
    { name: "", excluded: "" },
    { name: "", excluded: "" },
  ]);
  const [finalArray, setFinalArray] = useState([{}]);
  const [codeInputValue, setCodeInputValue] = useState("");
  const [receiver, setReceiver] = useState("");

  // Fonction pour ajouter un participant
  const addPartaker = () => {
    const newPartakers = [...partakers];
    newPartakers.push({ name: "", excluded: "" });
    setPartakers(newPartakers);
  };

  // Fonction pour retirer un participant
  const removePartaker = (index) => {
    if (index > 2) {
      const newPartakers = [...partakers];
      newPartakers.splice(index, 1);
      setPartakers(newPartakers);
    }
  };

  // Fonction pour vérifier que tous les participants ont un nom
  const verifyPartakers = () => {
    let valid = true;
    partakers.forEach((partaker) => {
      if (partaker.name.length === 0) {
        valid = false;
      }
    });
    return valid;
  };

  // Fonction pour mélanger les participants
  const shuffle = () => {
    if (!verifyPartakers()) {
      alert("Veuillez remplir tous les champs pour continuer.");
      return;
    }

    let wasGivenArray = [];
    let finalresult = [];

    // on trie les participants pour que ceux qui ont des exclusions soient en premier
    const sortedArray = partakers.sort((a, b) => {
      if (a.excluded !== "" && b.excluded === "") {
        return -1;
      }
      if (a.excluded === "" && b.excluded !== "") {
        return 1;
      }
      return 0;
    });


    // on attribue un participant à un autre
    sortedArray.forEach((partaker) => {
      const potentialGivers = sortedArray.filter((p) => p.name !== partaker.name && p.name !== partaker.excluded && !wasGivenArray.includes(p.name));

      if (potentialGivers.length === 0) {
        alert("Les exclusions actuelles ne permettent pas de former toutes les paire.");
        return;
      }

      const randomIndex = Math.floor(Math.random() * potentialGivers.length);
      const randomGiver = potentialGivers[randomIndex];
      wasGivenArray.push(randomGiver.name);
      finalresult.push({ giver: randomGiver.name, receiver: partaker.name, code: Math.floor(10000 + Math.random() * 90000).toString() });
    });

    setFinalArray(finalresult);
    setShuffled(true);
  };

  // Fonction pour afficher le destinataire
  const showReceiver = () => {
    const result = finalArray.find((res) => res.code === codeInputValue);
    if (!result) {
      alert("Code invalide.");
      return;
    }
    setReceiver(result.receiver);
  };

  return (
    <div className="bg-attachment-local bg-cover bg-center h-screen w-screen flex flex-col items-center p-10 font-bold" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {!started && (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <button className="p-10 font-bold text-2xl shadow-xl shadow-white hover:shadow-none hover:bg-slate-700" onClick={() => setStarted(true)}>
            ❄️ COMMENCER ❄️
          </button>
        </div>
      )}

      {started && !shuffled && (
        <div className="w-full max-w-4xl bg-black p-6 m-10 flex flex-col rounded-lg shadow-xl shadow-white gap-8">
          <p className="text-xl text-white">
            🎅 Bienvenue sur Secret Santa ! 🎁 La magie des fêtes commence ici ! <br /> Découvrez votre destinataire mystère, et préparez-vous à offrir un cadeau qui illuminera leur journée. ✨{" "}
          </p>
          <p>
            Comment ça marche ? Remplissez le formulaire des participants, et cliquez sur melanger ! Les paires se formerons aléatoirement et un code sera donné pour chaque participant, lui permettant de découvrir la personne à qu'il il offrira son cadeau en toute confidentialité. <br /> Préparez un cadeau spécial et attendez la grande révélation ! 🎄 C'est simple, amusant et parfait pour partager la joie des fêtes avec vos proches, vos collègues ou vos amis, même à distance. Alors, qu'attendez-vous ? 🎁 Lancez-vous et faites de cette saison un moment inoubliable !
          </p>

          <h1 className="text-3xl underline mt-5">FORMULAIRE DES PARTICIPANTS</h1>

          {partakers.map((partaker, i) => (
            <FormEntry key={i} index={i} partakers={partakers} setPartakers={setPartakers} />
          ))}

          <button className="p-4 w-64 mx-auto font-bold text-2xl shadow-sm shadow-white hover:shadow-none hover:bg-slate-700" onClick={addPartaker}>
            Ajouter un participant
          </button>

          <button className="p-4 w-64 mx-auto font-bold text-2xl shadow-sm shadow-white hover:shadow-none hover:bg-slate-700" onClick={shuffle}>
            Lancer le tirage !
          </button>
        </div>
      )}

      {shuffled && (
        <div className="w-full max-w-4xl bg-black p-6 m-10 flex flex-col rounded-lg shadow-xl shadow-white gap-8">
          <h1 className="text-3xl underline mt-5">RESULTATS</h1>
          {finalArray.map((result, i) => (
            <div>
              <p className="text-white text-xl">
                🎁🎄 Partipant "<span className="text-red-800">{result.giver}</span>" reçoit le code: {result.code} 🔒
              </p>
            </div>
          ))}

          <label htmlFor="textInput" className="text-white text-xl flex flex-col items-center justify-center gap-2">
            Entrez votre code secret pour découvrir votre destinataire mystère :
            <input type="text" id="textInput" onChange={(e) => setCodeInputValue(e.target.value)} value={codeInputValue} />
          </label>

          <button onClick={showReceiver}>🎁 Découvrir 🎁</button>
          {receiver && <p className="text-white text-xl">🎄🎅 Votre destinataire mystère est : " <span className="text-red-800">{receiver}</span> " 🎅🎄</p>}
          
        </div>
      )}
    </div>
  );
}
