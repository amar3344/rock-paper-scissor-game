import {useState} from 'react'

import GameImages from './components/GameImages'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => {
  const [score, setScore] = useState(0)
  const [currentChoice, setCurrentChoice] = useState('')
  const [isRunning, setRunning] = useState(true)
  const [gameStatus, setGameStatus] = useState('')
  const randomOption = Math.ceil(Math.random() * choicesList.length) - 1
  const computerChoice = choicesList[randomOption].id

  const getWinningCard = () => {
    setGameStatus('You Win')
    setRunning(false)
  }

  const getLoseCard = () => {
    setGameStatus('You Lose')
    setRunning(false)
  }

  const getDrawCard = () => {
    setGameStatus('Draw')
    setRunning(false)
  }

  const getGameResults = () => {
    if (currentChoice === 'ROCK') {
      if (computerChoice === 'SCISSORS') {
        getWinningCard()
      } else if (computerChoice === 'PAPER') {
        getLoseCard()
      } else {
        getDrawCard()
      }
    } else if (currentChoice === 'PAPER') {
      if (computerChoice === 'SCISSORS') {
        getLoseCard()
      } else if (computerChoice === 'PAPER') {
        getDrawCard()
      } else {
        getLoseCard()
      }
    } else if (currentChoice === 'SCISSORS') {
      if (computerChoice === 'SCISSORS') {
        getDrawCard()
      } else if (computerChoice === 'PAPER') {
        getWinningCard()
      } else {
        getLoseCard()
      }
    }

    // if (currentChoice === 'SCISSORS' && computerChoice === 'ROCK') {
    //   getLoseCard()
    // } else if (currentChoice === 'SCISSORS' && computerChoice === 'PAPER') {
    //   getWinningCard()
    // } else if (currentChoice === 'SCISSORS' && computerChoice === 'SCISSORS') {
    //   getDrawCard()
    // }
    // if (currentChoice === 'PAPER' && computerChoice === 'SCISSORS') {
    //   getLoseCard()
    // } else if (currentChoice === 'PAPER' && computerChoice === 'PAPER') {
    //   getDrawCard()
    // } else if (currentChoice === 'PAPER' && computerChoice === 'ROCK') {
    //   getWinningCard()
    // }
  }

  const getByResultsById = id => {
    setCurrentChoice(id)
    getGameResults(id)
  }

  const getBackToTheGame = () => setRunning(true)

  const isGameRunning = () => {
    const currentObject = choicesList.filter(
      eachItem => eachItem.id === currentChoice,
    )

    const opponentObject = choicesList[randomOption]
    // console.log(currentObject[0].imageUrl)
    // console.log(opponentObject.imageUrl)

    return (
      <>
        <h1>{gameStatus}</h1>
        <ul className="images-container">
          <li className="each-list-image">
            <p>your choice</p>
            <img src={currentObject[0].imageUrl} alt="" width={120} />
          </li>
          <li className="each-list-image">
            <p>opponent choice</p>
            <img src={opponentObject.imageUrl} alt="" width={120} />
          </li>
        </ul>
        <button type="button" onClick={getBackToTheGame}>
          PLAY AGAIN
        </button>
      </>
    )
  }

  const gameIsNotRunning = () => (
    <ul className="images-container">
      {choicesList.map(eachItem => (
        <GameImages
          key={eachItem.id}
          details={eachItem}
          gameResults={getByResultsById}
        />
      ))}
    </ul>
  )

  return (
    <div className="react-app">
      <div className="rock-paper-scissor">
        <div className="header-container">
          <div>
            <h1>ROCK</h1>
            <h1>PAPER</h1>
            <h1>SCISSORS</h1>
          </div>
          <div className="score-container">
            <p className="score-text">Score</p>
            <p className="score">{score}</p>
          </div>
        </div>
        {!isRunning ? isGameRunning() : gameIsNotRunning()}

        <div className="button-container">
          <button type="button" className="rules-button">
            Rules
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
