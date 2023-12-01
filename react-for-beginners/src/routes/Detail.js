import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Detail() {

    // useParams
    const id = useParams().id

    // useState
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    // Function
    const getMovie = async() => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = await response.json();
        console.log(json.data.movie)
        setMovie(json.data.movie)
        setLoading(false)
    }

    // useEffect
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
            {
                loading ?
                <h1>Movie Loading ...</h1> :
                <div>
                    <h1>{movie.title} ({movie.year})</h1>
                    <img src={movie.medium_cover_image} alt={movie.title}/>
                    <p>Rating: {movie.rating}</p>
                    <p>Runtime: {movie.runtime}</p>
                </div>
            }
        </div>
    )
}

export default Detail