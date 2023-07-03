const choices = ["ROCK", "PAPER", "SCISSORS"]
let userScore = 0
let computerScore = 0
let round = 0

const btns = document.querySelectorAll('button')
const resultDiv = document.querySelector('.results')
const dataDiv = document.querySelector('.round-data')
const roundDiv = document.querySelector('.round-results')
const gameDiv = document.querySelector('.game-results')

btns.forEach(btn => btn.addEventListener
    ('click', 
    (e) => {
        if (round === 0)
            gameDiv.innerHTML = ""
        round += 1
        roundWinner = playRound(e.target.id.toUpperCase(), round)
        if (roundWinner == "user")
            userScore += 1
        else if (roundWinner == "computer")
            computerScore += 1
        roundResults(computerScore, userScore)

        if(userScore == 5 || computerScore == 5) {
            displayResults(userScore)
            resetGame()
        }
    })
)

let resetGame = () => {
    userScore = 0
    computerScore = 0
    round = 0
}

let getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

let printChoices = (round, computerChoice, userChoice) => {
    dataDiv.innerHTML = ""
    let roundHeader = document.createElement('h3')
    roundHeader.classList.add('round')

    let para = document.createElement('p')
    para.setAttribute('style', 'white-space:pre') // allow for \n line breaks
    para.classList.add('choices')

    roundHeader.textContent += `Round ${round}.\n`
    dataDiv.appendChild(roundHeader)
    
    para.textContent += `Computer choice: ${computerChoice[0] + computerChoice.slice(1).toLowerCase()}\r\n`
    para.textContent += `User choice: ${userChoice[0] + userChoice.slice(1).toLowerCase()}\n`
    dataDiv.appendChild(para)
    return
}

let displayResults = (userScore) => {
    gameDiv.internalHTML = ""
    let para = document.createElement('p')
    para.setAttribute('style', 'white-space:pre') // allow for \n line breaks

    if (userScore == 5)
        para.textContent += "Woohoo! You won!\n"
    else   
        para.textContent += "You lost. Better luck next time.\n"
    
    para.textContent += "Click any option to play again."
    gameDiv.appendChild(para)
    return
}

let determineRound = (computerChoice, userChoice) => {
    roundDiv.innerHTML = ""
    let para = document.createElement('p')
    para.setAttribute('style', 'white-space:pre')
    if(computerChoice === "ROCK") {
        switch (userChoice) {
            case "ROCK":
                para.textContent += "Tie!"
                roundDiv.appendChild(para)
                return "tie" 
            case "SCISSORS":
                para.textContent = "You lost this round!"
                roundDiv.appendChild(para)
                return "computer"
            case "PAPER":
                para.textContent = "You won this round!"
                roundDiv.appendChild(para)
                return "user"
        }
    } else if (computerChoice === "PAPER") {
        switch (userChoice) {
            case "ROCK":
                para.textContent += "You lost this round!"
                roundDiv.appendChild(para)
                return "computer"
            case "SCISSORS":
                para.textContent = "You won this round!"
                roundDiv.appendChild(para)
                return "user"
            case "PAPER":
                para.textContent = "Tie!"
                roundDiv.appendChild(para)
                return "tie"
        }
    } else if (computerChoice == "SCISSORS") {
        switch (userChoice) {
            case "ROCK":
                para.textContent = "You won this round!"
                roundDiv.appendChild(para)
                return "user"
            case "SCISSORS":
                para.textContent = "Tie!"
                roundDiv.appendChild(para)
                return "tie"
            case "PAPER":
                para.textContent = "You lost this round!"
                roundDiv.appendChild(para)
                return "computer"
        }
    }
}

let roundResults = (computerScore, userScore) => {
    let para = document.createElement('p')
    para.setAttribute('style', 'white-space:pre')

    para.textContent += `Computer score: ${computerScore}\n`
    para.textContent += `User Score ${userScore}\n` 

    roundDiv.appendChild(para)
}

let playRound = (userChoice, roundNumber) => {
    let computerChoice = ""
    let winner = ""
    
    computerChoice = getComputerChoice()
    printChoices(roundNumber, computerChoice, userChoice)

    winner = determineRound(computerChoice, userChoice)
    return winner
}