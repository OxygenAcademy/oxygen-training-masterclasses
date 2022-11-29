import './App.css';
import Movie from "./components/Movie";
import { useState, useEffect } from 'react';
import UserContext from "./contexts/UserContext";

const initialCategories = [
  {
    id: 1,
    name: "Horror"
  },
  {
    id: 2,
    name: "Romance"
  }
];

const categoryReducer = (state, action) => {
  switch (action.type) {

    case "GET_CATEGORIES":
      return state;

    case "GET_CATEGORY":
      return state.filter(category => category.id === action.payload);

    case "POST_CATEGORY":
      return [ ...state, action.payload ];
      
    default:
      return state;
  }
};

function App() {
  const [user, setUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(0);

  const [categories, dispatchCategories] = useReducer(categoryReducer, initialCategories);

  // Mounting
  useEffect(() => {
    setUser({
      name: "david",
      age: 23
    });

    let timer = setTimeout(() => {
      setMovies([
        {
          title: "La guerra de las falacias",
          year: "1978"
        },
        {
          title: "El señor de los gramillos",
          year: "2001"
        }
      ]);
    }, 2000);

    // Cleanup action
    return () => clearTimeout(timer)
  }, []);

  useEffect(() => {
    setTotalMovies(movies.length)
  }, [movies]);
  
  const showCategories = () => {
    dispatchCategories({ type: "GET_CATEGORIES" })
  }

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        {
          movies.map((movie, index) => {
            return (
              <Movie title={movie.title} year={movie.year} key={index} />
            )
          })
        }
        <h2>{totalMovies}</h2>

        <h2>Categorías</h2>

        {
          categories.map((cat) => {
            return (
              <p>{cat.name}</p>
            )
          })
        }

        <button onClick={showCategories}>Ver categorías</button>
      </div>
    </UserContext.Provider>
  );
}

export default App;