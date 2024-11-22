import React, { useState } from 'react'
import "./Movielist.css"

function Movielist({ movie, onSelectMovie }) {
    const [loader, setLoader] = useState(false)

    return (
        <>
            <div className="box1">

                {movie.map((movieS, index) => (
                    loader ? ('https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700')
                        :
                        (
                            < div className="list" key={index} onClick={() => onSelectMovie(movieS.imdbID)}>
                                <div className="listPoster"><img src={movieS.Poster} alt="" /></div>
                                <div className="listData">
                                    <p className='listTitle'>{movieS.Title}</p>
                                    <p className='listYear'>{movieS.Year} -- {movieS.Type}</p>
                                    {/* <p className='listYear'>{movieS.Type}</p> */}
                                </div>
                            </div>)


                ))

                }



            </div >

        </>
    )
}

export default Movielist
