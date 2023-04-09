import React from 'react'
import "./ResetButton.css"

export default function ResetButton({resetGame, playAgain}){
    return(
        <div className="button">
            <button className="reset-btn" onClick={resetGame}>Reset</button>
            <button className="reset-btn" onClick={playAgain}>Play Again</button>
        </div>
    )
}