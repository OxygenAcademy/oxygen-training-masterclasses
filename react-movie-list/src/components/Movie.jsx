import { useState } from "react"
 
const Movie = ({title, year}) => {
  const [titleMovie, setTitleMovie] = useState(title)

  const changeTitle = e => setTitleMovie(e.target.value)

  return (
    <div>
      <h3>{title}</h3>
      <p>Año: {year}</p>
      
      <div>
        <input type="text" value={titleMovie} onChange={e => changeTitle(e)} />
      </div>
    </div>
  )
}

export default Movie