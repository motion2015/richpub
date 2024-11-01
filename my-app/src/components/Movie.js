import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Movie.css'
function Movie({ id, title, year, summary, poster, genres, posterBig }) {

    const data = { year, title, summary, poster, genres, posterBig }
    return (
        <div className='movie'>

            <Link to={"/movie-detail"} state={data}>
                <img src={poster} alt={title} title={title} />
                <div className='move__data'>
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>

                    <ul className='movie__genres'>
                        {genres.map((genre, index) => {
                            return <li key={index} className='movie__genre'>{genre}</li>
                        })}
                    </ul>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13.42" viewBox="0 0 8 13.42" class="PrevNextBtn-arrow-ez4" aria-hidden="true"><path d="M1.28,0a1.07,1.07,0,0,1,.25,0L1.77.1A.91.91,0,0,1,2,.21,1.2,1.2,0,0,1,2.2.38L7.62,5.8a1.52,1.52,0,0,1,.28.43,1.15,1.15,0,0,1,.1.48,1.16,1.16,0,0,1-.1.49,1.34,1.34,0,0,1-.28.42L2.2,13a1.42,1.42,0,0,1-.43.29,1.32,1.32,0,0,1-.48.09,1.37,1.37,0,0,1-.49-.09A1.1,1.1,0,0,1,.38,13a1.34,1.34,0,0,1-.28-.42,1.23,1.23,0,0,1,0-1,1.34,1.34,0,0,1,.28-.42L4.9,6.72.38,2.18A1.34,1.34,0,0,1,.1,1.76a1.23,1.23,0,0,1,0-1A1.34,1.34,0,0,1,.38.38L.58.21A.65.65,0,0,1,.8.1L1,0a1,1,0,0,1,.24,0Z"></path></svg> */}
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>

    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Movie