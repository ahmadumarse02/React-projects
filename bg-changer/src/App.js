import { useState } from "react";

function App() {
  const [color, setColor] = useState("chocolate");
  return (
    <div
      className="w-full h-screen duration-700 transition-all"
      style={{ backgroundColor: color }}
      >
      <div className="fixed flex justify-center bottom-14 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-4 py-2 rounded-3xl shadow-black">
          <button
          onClick={()=> setColor("red")}
          className="outline-none px-4 py-1 rounded-3xl"
          style={{ backgroundColor: "Red" }}>Red</button>

            <button
            onClick={()=> setColor("yellow")}
            className="outline-none px-4 py-1 rounded-3xl"
            style={{ backgroundColor: "yellow"}}>yellow</button>
            <button
            onClick={()=> setColor("orange")}
            className="outline-none px-4 py-1 rounded-3xl"
            style={{ backgroundColor: "Orange" }}>Orange</button>

            <button
            onClick={()=> setColor("blue")}
            className="outline-none px-4 py-1 rounded-3xl"
            style={{ backgroundColor: "Blue" }}>Blue</button>

            <button
            onClick={()=> setColor("green")}
            className="outline-none px-4 py-1 rounded-3xl"
            style={{ backgroundColor: "Green" }}>Green</button>

            <button
            onClick={()=> setColor("white")}
            className="outline-none px-4 py-1 rounded-3xl"
            style={{ backgroundColor: "White" }}>White</button>

            <button
            onClick={()=> setColor("pink")}
            className="outline-none px-4 py-1 rounded-3xl"
            style={{ backgroundColor: "Pink" }}>Pink</button>

<button
            onClick={()=> setColor("black")}
            className="outline-none px-4 py-1 rounded-3xl text-white"
            style={{ backgroundColor: "black" }}>black</button>

        </div>
      </div>
    </div>
  );
}

export default App;
