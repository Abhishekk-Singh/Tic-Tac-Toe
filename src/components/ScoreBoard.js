import React from 'react'
import "./ScoreBoard.css"

export default function ScoreBoard({scores, xPlaying}){
    const{xScore, oScore} = scores;
    return(
        <div className='scoreBoard'>
            <span className={`score x-score ${!xPlaying && "inactive"}`}>X-{xScore}</span>
            <span className={`score y-score ${xPlaying && "inactive"}`}>Y-{oScore}</span>
        </div>
    )

}