import { useState } from "react";
import backgroundImage from "./assets/background.webp";
import FormEntry from "./components/FormEntry";

export default function App() {
  const [started, setStarted] = useState(true);
    
  return (
    <div className="bg-attachment-local bg-cover bg-center h-screen w-screen flex flex-col items-center p-10 font-bold" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {!started && (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <button className="p-10 font-bold text-2xl shadow-xl shadow-white hover:shadow-none hover:bg-slate-700" onClick={() => setStarted(true)}>
            ❄️ COMMENCER ❄️
          </button>
        </div>
      )}

      {started && (
        <div className="w-full max-w-4xl bg-black p-6 m-10 flex flex-col rounded-lg shadow-xl shadow-white gap-8">
          <p className="text-xl text-white">
            🎅 Bienvenue sur Secret Santa ! 🎁 La magie des fêtes commence ici ! <br /> Découvrez votre destinataire mystère, et préparez-vous à offrir un cadeau qui illuminera leur journée. ✨{" "}
          </p>
          <p>
            Comment ça marche ? Remplissez le formulaire des participants, et cliquez sur melanger ! Les paires se formerons aléatoirement et un code sera donné pour chaque participant, lui permettant de découvrir la personne à qu'il il offrira son cadeau en toute confidentialité. <br /> Préparez un cadeau spécial et attendez la grande révélation ! 🎄 C'est simple, amusant et parfait pour partager la joie des fêtes avec vos proches, vos collègues ou vos amis, même à distance. Alors, qu'attendez-vous ? 🎁 Lancez-vous et faites de cette saison un moment inoubliable !
          </p>
        </div>
      )}
    </div>
  );
}
