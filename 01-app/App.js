// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React from "react";

// import Header from './components/Header';
// import TodoItem from './components/TodoItem';
// import AddItem from './components/AddItem';
// import CounterComponent from './components/CounterComponent';
// import "./style.css"

// Tic Tac Toe imports

import Board from './tic-tac-toe/Board'
import "./style.css"



const App = () => {
  return (

    // < div className="todo-container" >
    //   <CounterComponent />
    //   <Header title="Todoie App" />
    //   <TodoItem text="Eat"/>
    //   <TodoItem text="Sleep"/>
    //   <TodoItem text="Code"/>
    //   <TodoItem text="Repeat"/>
    //   <TodoItem text="Eat"/>
    //   <AddItem />

    // </div >

    <div className="App">
      <Board />
    </div>
  )





}
export default App;
