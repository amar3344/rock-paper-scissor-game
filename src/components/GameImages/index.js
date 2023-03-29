import './index.css'

const GameImages = props => {
  const {details, gameResults} = props

  const getGameResultsById = () => {
    gameResults(details.id)
  }

  return (
    <li>
      <button
        type="button"
        data-testid={details.id}
        onClick={getGameResultsById}
        className="each-button"
      >
        <img src={details.imageUrl} alt={details.id} className="game-images" />
      </button>
    </li>
  )
}

export default GameImages
