import { useEffect, useState } from 'react'
import './App.css'
import Moviedetail from './Components/Moviedetail'
import Movielist from './Components/Movielist'
import Nav from './Components/Nav'

function App() {

  const [search, setSearch] = useState('')
  const [movie, setMovie] = useState([])
  const [selecteId, setSelectedId] = useState(null)

  function mySearch(val) {
    setSearch(val)
  }
  function handelMovieSelect(id) {
    setSelectedId(id)
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
      <Nav search={search} mySearch={mySearch} />
      <div className="pappa">
        <Movielist movie={movie} onSelectMovie={handelMovieSelect} />
        <Moviedetail />
      </div>
    </>
  )
}

export default App
