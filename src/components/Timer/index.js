import './index.css'

const Timer = ({timeLeft}) => {
  return (
    <div className="timer-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
        alt="timer"
        className="timer-image"
      />
      <p className="timer-text">{timeLeft} sec</p>
    </div>
  )
}

export default Timer
