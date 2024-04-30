import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const [password,setPassword] = useState("");
  const passwordGenerator = useCallback(()=>{
    let password = "";
    let string = "ABCDEGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) string+="1234567890";
    if(characterAllowed) string+="[]!@#$%{}";

    for(let index=1;index<=length;index++){
      const ind = Math.floor((Math.random()*string.length)+1);
      password+=(string.charAt(ind)|| 'A');
    }
    setPassword(password);
  },[numberAllowed,characterAllowed,length]);
  
  useEffect(()=>{
    passwordGenerator();
  },[characterAllowed,numberAllowed,length]);
  
  const passwordValueRef = useRef(null);
  const copyValueToClipBoard = useCallback(()=>{
    passwordValueRef.current?.select(0,2);
    passwordValueRef.current?.setSelectionRange(0,2);
    window.navigator.clipboard.writeText(password)
  },[password]);
  return (
    <>
    <h1 className="text-white m-auto text-center text-4xl">Password Generator</h1>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg  px-4 my-8 text-center text-orange-700">
      <div className="flex items-center">
        <input 
        type="text"
        value={password}
        readOnly
        className="w-full outline-none my-4 px-4 py-3 rounded-xl"
        ref = {passwordValueRef}
        />
        <button type="button" className="bg-blue-500 outline-none rounded-md px-2 py-3 h-fit text-white text-xl"
        onClick={copyValueToClipBoard}
        >Copy</button>
      </div>
      <div className="flex text-sm">
        <input
        type="range" 
        name=""
        id=""
        value={length} 
        min = {1}
        max = {100}
        onChange={(e)=>{setLength(e.target.value)}}
        className="cursor-pointer"
        />
        <label htmlFor="" className="text-white px-2 ">Length({length})</label>
        <label htmlFor="numberInput" className="text-white text-sm mx-2">Number</label>
        <input type="checkbox" name="number" id="numberInput" value={numberAllowed} onChange={(e)=>{setNumberAllowed(e.target.checked)}}/>
        <label htmlFor="characterInput" className="text-white text-sm mx-2">Character</label>
        <input type="checkbox" name="character" id="characterInput" value={characterAllowed} onChange={(e)=>setCharacterAllowed(e.target.checked)}/>
      </div>
    </div>
    </>
  )
}

export default App
