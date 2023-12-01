import { useEffect, useState } from "react";
import Movie from "../components/Movie.js"

function Home() {

    // useState
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
    // Function
    const getMovies = async() => {
      const RATING = 8.5
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=${RATING}&sort_by=year`)
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    
    // useEffect
    useEffect(() => {
      getMovies();
    }, []);
    
    // Debug
    
    // JSX
    return (
      <div>
        { 
          loading ? 
          <h1>Movie List Loading ...</h1> : 
          <div>
            {
              movies.map(
                (movie) => 
                <Movie
                  key={movie.id} 
                  id={movie.id}
                  medium_cover_image={movie.medium_cover_image} 
                  title={movie.title} 
                  summary={movie.summary} 
                  genres={movie.genres}
                />
              )
            } 
          </div>
        }
      </div>
    )
}

export default Home;