import { useState } from "react";

function App() {
  const [count, update] = useState(0);
  let counts = 58;
  let name = "saad";
  return (
    <>
    <div className="flex justify-center h-screen items-center">{/* justify-center for horizontally center "items-center" for vertically center , height is important*/}
    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => update(count + 1)}>Increment</button>
    <h1 className="text-3xl font-bold underline">
      {count}
    </h1>
    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => update(count - 1)} >decrement</button>    
    </div>
    </>
  )
}
export default App;