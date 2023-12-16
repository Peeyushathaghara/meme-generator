// // import React, { useState } from "react";
// import React, { useContext } from "react";
// import { CounterContext } from '../context/Counter'

// const  CounterComponent = () =>{
//     // const [count, setCount] = useState(1);
//     // const [value, setValue] = useState("even")

//     // console.log("hello", count)
//     const counterContext = useContext(CounterContext)
//     // console.log('Counter', counterContext )
    
//     return(
//         // <div>
//         //     <p>Counter Component - {count}</p>
//         //     <h6>Number is { count % 2 === 0 ? "Even" : "Odd"}</h6> 
//         //     {/* <button onClick= {() => count % 2 ? setValue("odd") : setValue("even") }>Check</button>            */}
//         //     <button onClick={() => setCount(count + 1)}> Increment </button>
//         //     <button onClick={() => setCount(count - 1)}> Decrement </button>
//         // </div>

//         <div>
//             <button onClick={() => counterContext.setCount(counterContext.count + 1)}> Increment </button>
//             <button onClick={() => counterContext.setCount(counterContext.count - 1)}> Decrement </button>
//         </div>

//     )
// }

// export default CounterComponent;