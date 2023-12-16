import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { BrowserRouter, Routes, Route, useParams, NavLink} from 'react-router-dom'

import { WeatherProvider } from './context/Weather';
const root = ReactDOM.createRoot(document.getElementById('root'));

// const Home = () =>{
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     // fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then(response => response.json())
//     //   .then(json => console.log(json))
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( (data) => data.json())
//     // .then(json => console.log(json))
//     .then( (data) => setPosts(data))
//   }, []);

//   return(
//     <div className='post-container'>
//       {posts.map((post) => (
//         <NavLink style={{
//         display: 'block',
//         textDecoration: 'none',
//         color : 'black',
//         padding: '10px 5px',
//         boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
//         cursor: 'pointer'

//         }} to={`/post/${post.id}`}>{post.title}</NavLink>))}
//     </div>
//   )
// }

// const About = () =>{
//   return(
//     <div>
//       <h2>About Page</h2>
//     </div>
//   )
// }

// const Profile = () =>{
//   return(
//     <div>
//       <h2>Profile Page</h2>
//     </div>
//   )
// }

// const Setting = () =>{
//   return(
//     <div>
//       <h2>Setting Page</h2>
//     </div>
//   )
// }

// const User = () =>{
//   const params = useParams();
//   // console.log(params)
//   return(
//     <div>
//       <h2>Your name is {params.userId} </h2>
//     </div>
//   )
// }

// const Post = () =>{
//   const params = useParams();
//   const [post, setPost] = useState(null);
//   useEffect(() => {
//     // fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then(response => response.json())
//     //   .then(json => console.log(json))
//     fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
//     .then( (data) => data.json())
//     .then( data => setPost(data))

//   }, []);
//   // console.log(params)
//   if(post === null) return <p>Loading...</p>
//   return(
//     <div style={{
//       padding: '15px'
//     }}>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </div>
//   )
// }


root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/about" element ={<About />} />
        <Route path="/user/:userId" element ={<User />} />
        <Route path="/post/:postId" element ={<Post />} />
        <Route path="account">
          <Route path="profile" element = {<Profile />} />
          <Route path="setting" element = {<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    <WeatherProvider>
      <App />
    </WeatherProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
