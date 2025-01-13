export default function FormEntry({ index, partakers, setPartakers, removePartaker }) {

  const changePartakerName = (e) => {
    const newPartakers = [...partakers];
    newPartakers[index].name = e.target.value;
    setPartakers(newPartakers);
  };

  const changeExcluded = (e) => {
    const newPartakers = [...partakers];
    newPartakers[index].excluded = e.target.value;
    setPartakers(newPartakers);
  };

  return (
    <div className="flex gap-4 bg-slate-900 py-5 px-4 rounded-lg">
      <label htmlFor="textInput" className="text-white text-xl flex items-center justify-center gap-2">
        {" Participant " + (index + 1) + " : "}
        <input type="text" id="textInput" onChange={(e) => changePartakerName(e)} value={partakers[index].name ?? ""} />
      </label>

      <label htmlFor={"select" + index} className="text-white text-xl flex items-center justify-center gap-2">
        Exclusion :
        <select name={"select" + index} id={"select" + index} className="w-44" onChange={(e) => changeExcluded(e)}>
          <option></option>
          {partakers.map((partaker, i) => partaker.name !== partakers[index].name && partaker.name.length > 0 && <option key={i}>{partaker.name}</option>)}
        </select>
      </label>
      {index > 2 && (
        <button className="p-4 font-bold text-2xl shadow-sm shadow-white hover:shadow-none hover:bg-slate-700" onClick={() => removePartaker(index)}>
          {" "}
          ❌{" "}
        </button>
      )}
    </div>
  );
}
