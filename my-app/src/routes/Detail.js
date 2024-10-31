import React from 'react'
import './Detail.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
const Detail = (props) => {
    const { state } = useLocation();     // 현재 위치 정보
    const navigate = useNavigate();     // 네비게이트 함수
    //const params = useParams();
    console.log("Location:", state);

    setTimeout(() => {
        if (state === undefined) {
            navigate('/')
        }
    }, 3000)


    return (
        state ? (
            <div className='container'>
                <div className='contents'>
                    <h3>{state.title}</h3>
                    <img src={state.posterBig} alt={state.title} />

                    <ul className='movie__genres'>
                        {state.genres.map((genre, index) => {
                            return <li key={index} className='movie__genre'>{genre}</li>
                        })}
                    </ul>
                    <p>{state.summary}</p>
                </div>
            </div >
        ) : <div>홈으로 이동합니다.</div>
    )

}

export default Detail