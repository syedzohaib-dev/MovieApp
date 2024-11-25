import React, { useEffect, useState } from 'react'
import "./Moviedetail.css"
import ReactStars from 'react-stars'
// import { render } from 'react-dom'


function Moviedetail({ selectedId, onAddToWatchList }) {

    const [movie, setMovie] = useState(null)

    // const [newRating, setNewRating] = useState(0);

    // const [countValue, setCountValue] = useState(0)
    // const ratingChanged = (newRating) => {
    //     console.log(newRating)
    //     setCountValue(newRating);
    // }

    useEffect(() => {
        async function getMovieDetails() {
            const res = await fetch(
                // `https://www.omdbapi.com/?i=tt3896198&apikey=b1ac9b05&i=${selectedId}`
                `https://www.omdbapi.com/?apikey=2a6626ef&i=${tt5057054}`

            )
            const data = await res.json()
            console.log(data)
            setMovie(data)

        }
        if (selectedId) {
            getMovieDetails()
        }
    }, [selectedId])


    // if (!movie) return <p style={{ color: "white" }}>Movie Data Is Loading...</p>

    return (
        <>
            <div className="box2">
                <div className="movieDetail">
                    <div className="bigPoster">
                        <img src="/inception.webp" alt="" />
                        {/* <img src={movie.Poster} alt="" /> */}
                    </div>
                    <div className="bigData">
                        <p className="bigDataTitle">Inception</p>
                        <p className="timeDuration">16 july 2010 - 148 min</p>
                        <p className="action">Action Adventure Sci - Fi</p>
                        <p className="rating">* 8.8 IMDB rating</p>

                    </div>

                </div>
                <div className="detailDescription">
                    <div className="multiplestar">
                        {/* <ReactStars
                            count={10}
                            onChange={ratingChanged}
                            size={34}
                            color2={'#ffd700'}
                        /> */}
                        {/* <h3 className='ratingNumber'>{countValue}</h3> */}
                    </div>
                    <div className="movieDescription">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus repellat, minus sunt eos nesciunt id  minima maiores facere itaque aperiam praesentium iste  asperiores atque nihil sapiente libero aspernatur!
                        </p>
                        <p>Directed by: Charm John</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Moviedetail