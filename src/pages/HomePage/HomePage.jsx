import { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import MovieList from '../../components/MovieList/MovieList'
import './HomePage.css'

export default function HomePage() 
{
  const [query, setQuery] = useState(undefined)
  const [movies, setMovies] = useState()
  const [error, setError] = useState(null) 
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async () => 
  {
    if (!query.trim()) return
    try 
    {
      setError(null)
      setIsLoading(true)
      setMovies()
      const apiKey = import.meta.env.VITE_OMDB_API_KEY;
      const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`);
      const data = await res.json()
        
        if (data.Response === 'False')  
          {
            throw new Error(data.Error || "Фильмы не найдены")
          }
          setMovies(data.Search)
          }
          catch (error) 
          {
            console.error(error)
            setError(error.message)
          } finally 
          {
            setIsLoading(false)
          }
        }
  return (
    <main className="home-page">
      <div className="container home-page__inner">
        <SearchBar 
        query={query}
        onQueryChange={setQuery}
        onSearch={handleSearch}
        />

        <section className="home-page__section">
          <h2 className="home-page__section-title">Результат поиска</h2>
          <MovieList movies={movies} />
        </section>
      </div>
    </main>
  );
}