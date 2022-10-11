
// import './App.css';
// import { useEffect, useState } from 'react';
// const Person = (props) => {
//    return  (
//        <>
//          <h1>FirstName : {props.name}</h1>
//          <h1>LastName : {props.lastname}</h1>
//          <h1>Age : {props.age}</h1>
//        </>
//    )
// }
// const  App = () => {
//   const [counter , setCounter ] = useState(0);
//   useEffect(() => {
//      //setCounter(100)
//      //alert("you have changed the counter to" + counter)
//   },[counter]);
//   const name = 'joan';
//   const isNameShowing = true;

//   return (
//     <div className="App">
//     <button onClick={() => setCounter((prevCount) => prevCount-1)} > - </button>
//      <h1> { counter } </h1>
//     <button onClick={() => setCounter((prevCount) => prevCount+ 1 )}> + </button>

//       <Person name={'john'} lastname={'rhehe'} age={'46'}/>
//     <h1> hello React {isNameShowing ? name : "someone"}</h1>
//       { name ? (
//           <>
//             {name}
//           </>
//         ): (
//           <>
//             <h1> test</h1>
//             <h1> no name</h1>
//           </>
//         )}
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=2afa63ef'

const App = () => {
  const [ movies , setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async(title) => {
     const response = await fetch(`${API_URL}&s=${title}`);
     const data = await response.json();
     setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Spiderman')
  },[]);
  return (
     <div className="app">
         <h1> Movie Management </h1>
         <div className="search">
            <input placeholder="Search for movies" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
             />  
             <img src={SearchIcon} 
             onClick={() => searchMovies(searchTerm)}
             alt="search"/>
         </div>

         {
          movies?.length > 0
          ? (
            <div className="container">
               { movies.map((movie) => (
                 <MovieCard movie={movie}/>
                ))
               }
            </div>
           ) : (
            <div className="empty">
               <h1> No Movies Found</h1>
            </div>
          )
         }
    </div>
  )
}

export default App;