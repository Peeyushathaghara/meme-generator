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

// import Board from './tic-tac-toe/Board'
// import "./style.css"

// api call
// import { getPosts, getRandomUser } from './api/index.js'
// import { useState , useEffect } from "react";
// import PostCard from './components/PostCard';
// import UserCard from './components/UserCard';

//context api
// import { useContext } from "react";
// import { CounterContext } from './context/Counter'

//add to Cart
import Item from './components/Item';
import Cart from './components/Cart';

import "./style.css"

const App = () => {

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   getPosts().then(posts =>{
  //     // console.log(posts);
  //     setData(posts);
  //   })
  // }, [])

  // useEffect(()=>{
  //   getRandomUser().then((user)=>{console.log(user)})
  // })

  //context use

  // const counterState = useContext(CounterContext);
  // console.log("Context", counterState)


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

    // <div className="App">
    //   <Board />
    // </div>

    

    <div className="App">

      <Item name='macbook' price={100000} />
      <Item name='pendrive' price={4000} />
      <Item name='mobile' price={35000} />
      <Cart />

      {/* <h1>Count is {counterState.count}</h1>
      <CounterComponent />
      <CounterComponent />
      <CounterComponent />
      <CounterComponent /> */}
      {/* <UserCard />
      {
        data? (
          data.map((e) =><PostCard title={e.title} body={e.body} />)
        ): ( 
        <p>No data</p>
      )} */}
    </div>


  )





}
export default App;
