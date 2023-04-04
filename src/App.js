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
  const computerChoice = choicesList[randomOption]
  console.log(randomOption)
  console.log(computerChoice)

  const getWinningCard = () => {
    setGameStatus('You Win')
  }

  const getLoseCard = () => {
    setGameStatus('You Lose')
  }

  const getDrawCard = () => {
    setGameStatus('Draw')
  }

  //   const getGameResults = () => {
  //     switch (currentChoice === 'ROCK') {
  //       case choicesList[0].id:
  //         return getDrawCard()
  //       case choicesList[1].id:
  //         return getLoseCard()
  //       case choicesList[2].id:
  //         return getWinningCard()

  //       default:
  //         return null
  //     }

  //     // if (currentChoice === 'ROCK') {
  //     //   if (computerChoice === 'SCISSORS') {
  //     //     getWinningCard()
  //     //   } else if (computerChoice === 'PAPER') {
  //     //     getLoseCard()
  //     //   } else {
  //     //     getDrawCard()
  //     //   }
  //     // } else if (currentChoice === 'PAPER') {
  //     //   if (computerChoice === 'SCISSORS') {
  //     //     getLoseCard()
  //     //   } else if (computerChoice === 'PAPER') {
  //     //     getDrawCard()
  //     //   } else {
  //     //     getLoseCard()
  //     //   }
  //     // } else if (currentChoice === 'SCISSORS') {
  //     //   if (computerChoice === 'SCISSORS') {
  //     //     getDrawCard()
  //     //   } else if (computerChoice === 'PAPER') {
  //     //     getWinningCard()
  //     //   } else {
  //     //     getLoseCard()
  //     //   }
  //     // }

  //     // if (currentChoice === 'SCISSORS' && computerChoice === 'ROCK') {
  //     //   getLoseCard()
  //     // } else if (currentChoice === 'SCISSORS' && computerChoice === 'PAPER') {
  //     //   getWinningCard()
  //     // } else if (currentChoice === 'SCISSORS' && computerChoice === 'SCISSORS') {
  //     //   getDrawCard()
  //     // }
  //     // if (currentChoice === 'PAPER' && computerChoice === 'SCISSORS') {
  //     //   getLoseCard()
  //     // } else if (currentChoice === 'PAPER' && computerChoice === 'PAPER') {
  //     //   getDrawCard()
  //     // } else if (currentChoice === 'PAPER' && computerChoice === 'ROCK') {
  //     //   getWinningCard()
  //     // }
  //   }

  const getResultsFromRock = () => {
    switch (computerChoice.id) {
      case choicesList[0].id:
        return getDrawCard()
      case choicesList[1].id:
        return getLoseCard()
      case choicesList[2].id:
        return getWinningCard()

      default:
        return null
    }
  }

  const getResultsFromScissors = () => {
    switch (computerChoice.id) {
      case choicesList[0].id:
        return getWinningCard()
      case choicesList[1].id:
        return getDrawCard()
      case choicesList[2].id:
        return getLoseCard()

      default:
        return null
    }
  }
  const getResultsFromPaper = () => {
    switch (computerChoice.id) {
      case choicesList[0].id:
        return getLoseCard()
      case choicesList[1].id:
        return getWinningCard()
      case choicesList[2].id:
        return getDrawCard()

      default:
        return null
    }
  }

  const getResult = () => (
    <>
      {currentChoice === choicesList[0].id && getResultsFromRock()}
      {currentChoice === choicesList[1].id && getResultsFromScissors()}
      {currentChoice === choicesList[2].id && getResultsFromPaper()}
    </>
  )

  const getByResultsById = id => {
    setCurrentChoice(id)
    getResult()
  }

  const getBackToTheGame = () => setRunning(true)

  const isGameRunning = () => {
    const currentObject = choicesList.filter(
      eachItem => eachItem.id === currentChoice,
    )

    console.log(randomOption)
    console.log(computerChoice)
    console.log(computerChoice.imageUrl)

    return (
      <>
        <h1>{gameStatus}</h1>
        <ul className="images-container">
          <li className="each-list-image">
            <p>your choice</p>
            <img
              src={currentObject[0].imageUrl}
              alt={currentObject.id}
              width={120}
            />
          </li>
          <li className="each-list-image">
            <p>opponent choice</p>
            <img
              src={computerChoice.imageUrl}
              alt={computerChoice.id}
              width={120}
            />
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
          gameRunningStatus={setRunning}
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
