import "./App.css"
import Movie from "./components/Movie"
import { useState, useEffect } from "react"

const data = [
  {
    title: "La guerra de las falacias",
    year: "1978"
  },
  {
    title: "El señor de los gramillos",
    year: "2001"
  }
]

const App = () => {
  const [title, setTitle] = useState("Mi super aplicación")
  const [user, setUser] = useState({})
  const [movies, setMovies] = useState([])
  const [totalMovies, setTotalMovies] = useState(0)

  // Mounting
  useEffect(() => {
    setUser({
      name: "Goku",
      level: 9000
    })

    let timer = setTimeout(() => {
      setMovies(data)
    }, 2000)

    // Cleanup action
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setTotalMovies(movies.length)
  }, [movies])

  return (
    <div className="App">
      <h1>{title}</h1>

      <h2>Datos de usuario</h2>
      <div>
        <p>Usuario: {user.name}</p>
        <p>Nivel: {user.level}</p>
      </div>

      <h2>Mis películas</h2>
      <div>
      {
        movies.map((movie, index) => {
          return (
            <Movie title={movie.title} year={movie.year} key={index} />
          )
        })
      }
      </div>
      
      <p>Total: {totalMovies}</p>
    </div>
  )
}

export default App