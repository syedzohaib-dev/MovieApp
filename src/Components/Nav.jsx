import React from 'react'
import "./Nav.css"

function Nav(props) {

    const { search = '', mySearch = () => { }, movie = [] } = props || ''

    function handelSearch(e) {
        const val = e.target.value
        mySearch(val)
    }


    return (

        <>
            <div className="navbar">
                <div className="heading"><img src="/Popcorn.png" alt="" />usePopcorn</div>
                <div className="inputDiv"><input onChange={handelSearch} type="text" name="" id="" placeholder='inception' /></div>
                <div className="found">Found {movie.length} top results </div>
            </div>
        </>
    )
}

export default Nav