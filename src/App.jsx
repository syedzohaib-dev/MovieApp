import { useEffect, useState } from 'react'
import './App.css'
import Moviedetail from './Components/Moviedetail'
import Movielist from './Components/Movielist'
import Nav from './Components/Nav'
import Watchlist from './Components/Watchlist'

function App() {

  const [search, setSearch] = useState('tom')
  const [movie, setMovie] = useState([])
  const [selecteId, setSelectedId] = useState(null)
  const [watchList, setWatchList] = useState([])


  function mySearch(val) {
    setSearch(val)
  }
  function handelMovieSelect(id) {
    setSelectedId(id)
    // console.log(id)
  }

  function addToWatchlist(movie) {
    setWatchList((prev) => [...prev, movie])
    setWatchList(null)
  }

  async function getMovieDataSearch(search) {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=b1ac9b05&s=${search}`

      );
      const data = await res.json();
      if (data.Response === 'True') {
        console.log(data)
        setMovie(data.Search)
      } else {
        setMovie([])
      }
    }
    catch (error) {
      console.error(error)
      console.log(error.message)
      setMovie([])

    }
  }


  useEffect(() => {
    if (search) {
      console.log(search)
      getMovieDataSearch(search)
    }
  }, [search])

  return (
    <>
      <Nav search={search} mySearch={mySearch} movie={movie} />
      <div className="pappa">
        <Movielist movie={movie} onSelectMovie={handelMovieSelect} />
        {
          selecteId ? (
            <Moviedetail selectedId={selecteId} onAddToWatchList={addToWatchlist} />
          ) : (
            <Watchlist />
          )
        }

      </div>
    </>
  )
}

export default App
