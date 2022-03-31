import { useState } from 'React'
import { getMovie } from "../lib/services/movieService"

const movies = () => {
     const [movies, setMovies] = useState([])

const movie = async () => {
    const getMovieData = await getMovie()
    console.log(getMovieData)
}
return(
    <main>
        <button type = "button" onclick={movie}>
        heihei
        </button>
    </main>
)
}


export default movies