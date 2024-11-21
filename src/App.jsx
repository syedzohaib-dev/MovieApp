import './App.css'
import Moviedetail from './Components/Moviedetail'
import Movielist from './Components/Movielist'
import Nav from './Components/Nav'

function App() {


  return (
    <>
      <Nav />
      <div className="pappa">
        <Movielist />
        <Moviedetail />
      </div>
    </>
  )
}

export default App
