import "./App.css";
import { Cart } from "./Components/Cart";

function App() {
  return (
    <div className="App">

      <Cart></Cart>
    </div>
  );
}

export default App;



// import React from "react"
// import { useEffect} from "react";
// import { useState } from "react";
// // import "./styles.css";

// export default function App() {

//   const [count, setCount] = useState(0)

// //   const setTimer = ()=>{
// // setInterval(() => {
// //   setCount(count + 1)
// // }, 1000);
// //   }

// // useEffect(()=>{
// //   setTimer();
// // })


// useEffect(()=>{
//   setTimeout(()=>{
//     setCount((count) => count +1)

//   }, 1000)


// }, [count])

//   return (
//     <div className="App">
//       <h1>count: {count}</h1>
      
//     </div>
//   );
// }
