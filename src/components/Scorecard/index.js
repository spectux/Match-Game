import './index.css'

const Scorecard = ({score, playAgain}) => {
  return (
    <div className="scorecard-container" alt="scorecard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <h1 className="score-heading">Your Score</h1>
      <p className="score-text">{score}</p>
      <button type="button" className="play-again-button" onClick={playAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default Scorecard
