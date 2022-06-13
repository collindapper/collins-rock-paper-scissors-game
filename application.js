const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const computerScoreDisplay = document.getElementById('computer-score')
const userScoreDisplay = document.getElementById('user-score')
const resultDisplay = document.getElementById('result')
const rockBtn = document.querySelector('.rockButton')
const paperBtn = document.querySelector('.paperButton')
const scissorsBtn = document.querySelector('.scissorsButton')
const possibleChoices = [rockBtn, paperBtn, scissorsBtn]
let userChoice
let computerChoice
let result
let userScore = 0
let computerScore = 0


// Functions to run game start to end
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  showResults()
}))


// Random choice for computer
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
  console.log(randomNumber)

  if (randomNumber === 1) {
    computerChoice = 'Rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'Paper'
  }
  if (randomNumber === 3) {
    computerChoice = 'Scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}


// Print result each round after user choice
function getResult() {
  if (computerChoice === userChoice) {
    result = 'YOU TIED!'
  }

  if (computerChoice === 'Rock' && userChoice === 'Paper') {
    result = 'Computer chose rock, YOU WIN!'
    userScore++
    userScoreDisplay.innerHTML = userScore
  }

  if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    result = 'Computer chose rock, YOU LOSE!'
    computerScore++
    computerScoreDisplay.innerHTML = computerScore
  }

  if (computerChoice === 'Paper' && userChoice === 'Scissors') {
    result = 'Computer chose paper, YOU WIN!'
    userScore++
    userScoreDisplay.innerHTML = userScore
  }

  if (computerChoice === 'Paper' && userChoice === 'Rock') {
    result = 'Computer chose paper, YOU LOSE!'
    computerScore++
    computerScoreDisplay.innerHTML = computerScore
  }

  if (computerChoice === 'Scissors' && userChoice === 'Rock') {
    result = 'Computer chose scissors, YOU WIN!'
    userScore++
    userScoreDisplay.innerHTML = userScore
  }

  if (computerChoice === 'Scissors' && userChoice === 'Paper') {
    result = 'Computer chose scissors, YOU LOSE!'
    computerScore++
    computerScoreDisplay.innerHTML = computerScore
  }
  resultDisplay.innerHTML = result
}

// alerts user of games final result
function showResults() {
  if (document.getElementById('myCheckBox').checked === false) {
    if (userScore === 1) {
      window.alert('Congratulations, you won the game!')
      window.location.reload()
    }
    if (computerScore === 1) {
      window.alert('Uh Oh, you lost the game...')
      window.location.reload()
    }
  }
  else {
    if (userScore === 2) {
      window.alert('Congratulations, you won the game!')
      window.location.reload()
    }
    if (computerScore === 2) {
      window.alert('Uh Oh, you lost the game...')
      window.location.reload()
    }
  }
}
