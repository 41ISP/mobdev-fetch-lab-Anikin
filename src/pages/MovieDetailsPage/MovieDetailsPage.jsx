import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './MovieDetailsPage.css'

export default function MovieDetailsPage() 
{
  const { imdbID } = useParams()
  const [movie, setMovie] = useState(undefined)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => 
  {
    const loadMovie = async () => 
    {
      try 
      {
        setIsLoading(true)
        setError(null)
        
        const apiKey = import.meta.env.VITE_OMDB_API_KEY;
        const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);        
        const data = await res.json()
        
        if (data.Response === 'False')  
        {
          throw new Error(data.Error)
        }
        setMovie(data)
        }
        catch (error) 
        {
          console.error(error)
          setError(error.message)
        } 
        finally 
        {
            setIsLoading(false)
        }
      }
      loadMovie() 
    }, [imdbID])
    if(movie) 
    {
      return (
        <main className='movie-details-page'>
        <div className='container'>
        <MovieDetails movie={movie} />
        </div>
        </main>
    )
  }
}