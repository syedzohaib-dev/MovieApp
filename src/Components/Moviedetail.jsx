import React, { useEffect, useState } from 'react'
import "./Moviedetail.css"
import ReactStars from 'react-stars'
// import { render } from 'react-dom'


function Moviedetail({ selectedId, onAddToWatchList }) {
    // console.log("me chala detail")
    // console.log("selectedid", selectedId)

    const [movie, setMovie] = useState(null)

    // const [newRating, setNewRating] = useState(0);


    const [countValue, setCountValue] = useState(0)
    const ratingChanged = (newRating) => {
        console.log(newRating)
        setCountValue(newRating);
    }

    // useEffect(() => {
    async function getMovieDetails(selectedId) {
        // console.log(selectedId)
        try {
            const res = await fetch(
                // `https://www.omdbapi.com/?i=tt3896198&apikey=b1ac9b05&i=${selectedId}`
                `https://www.omdbapi.com/?apikey=2a6626ef&i=${selectedId}`

            )
            const data = await res.json()
            console.log(data)
            setMovie(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        if (selectedId) {
            getMovieDetails(selectedId)
        }
    }, [selectedId])

    // }, [])
    // console.log(movie)

    if (!movie) return <p style={{ color: "white" }}>Movie Data Is Loading...</p>

    return (
        <>

            <div className="box2">
                <div className="movieDetail">
                    <div className="bigPoster">
                        {/* <img src="/inception.webp" alt="" /> */}
                        <img src={movie.Poster} alt="" />

                    </div>
                    <div className="bigData">
                        <p className="bigDataTitle">{movie.Title}</p>
                        <p className="timeDuration">{movie.Released} - {movie.Runtime}</p>
                        <p className="action">{movie.Genre}</p>
                        <p className="rating"> &#10029; {movie.imdbRating} IMDB rating</p>

                    </div>

                </div>
                <div className="detailDescription">
                    <div className="multiplestar">
                        <ReactStars
                            count={10}
                            onChange={ratingChanged}
                            size={34}
                            color2={'#ffd700'}
                        />
                        <h3 className='ratingNumber'>{countValue}</h3>
                    </div>
                    <div className="movieDescription">
                        <p>{movie.Plot}
                        </p>
                        <p><strong>Actors:</strong> {movie.Actors}</p>
                        <p><strong>Directed by:</strong> {movie.Director}</p>
                        <p><strong>Writer:</strong> {movie.Writer}</p>
                        <p><strong>Language:</strong> {movie.Language}</p>
                        <p><strong>Country:</strong> {movie.Country}</p>
                        <p><strong>Total Seasons:</strong> {movie.totalSeasons}</p>
                        <p><strong>Awards:</strong> {movie.Awards}</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Moviedetail