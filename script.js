const choices = ["ROCK", "PAPER", "SCISSORS"]

let getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

let getUserChoice = () => {
    let userChoice = prompt("Rock, paper, or scissors?")

    while (true) {
        if (choices.includes(userChoice.toUpperCase())) {
            break
        }
        alert("Please enter rock, paper, or scissors")
        userChoice = prompt("Rock, paper, or scissors?")
    }
    return userChoice.toUpperCase()
}

let printChoices = (round, computerChoice, userChoice) => {
    console.log(`Round ${round}.`)
    console.log(`Computer choice: ${computerChoice[0] + computerChoice.slice(1).toLowerCase()}`)
    console.log(`User choice: ${userChoice[0] + userChoice.slice(1).toLowerCase()}`)
    return
}

let displayResults = (userScore) => {
    if (userScore == 5)
        console.log("Woohoo! You won!")
    else   
        console.log("You lost. Better luck next time")
    
    return
}

let determineRound = (computerChoice, userChoice) => {
    if(computerChoice === "ROCK") {
        switch (userChoice) {
            case "ROCK":
                console.log("Tie!")
                return "tie" 
            case "SCISSORS":
                console.log("You lost this round!")
                return "computer"
            case "PAPER":
                console.log("You won this round!")
                return "user"
        }
    } else if (computerChoice === "PAPER") {
        switch (userChoice) {
            case "ROCK":
                console.log("You lost this round!")
                return "computer"
            case "SCISSORS":
                console.log("You won this round!")
                return "user"
            case "PAPER":
                console.log("Tie!")
                return "tie"
        }
    } else if (computerChoice == "SCISSORS") {
        switch (userChoice) {
            case "ROCK":
                console.log("You won this round!")
                return "user"
            case "SCISSORS":
                console.log("Tie!")
                return "tie"
            case "PAPER":
                console.log("You lost this round!")
                return "computer"
        }
    }
}

let roundResults = (computerScore, userScore) => {
    console.log(`Computer score: ${computerScore}`)
    console.log(`User Score ${userScore}`)
}

let game = () => {
    let userScore = 0
    let computerScore = 0
    let round = 1
    let computerChoice = ""
    let userChoice = ""
    let winner = ""

    while (userScore != 3 && computerScore != 3) {
        computerChoice = getComputerChoice()
        userChoice = getUserChoice()
        printChoices(round, computerChoice, userChoice)

        winner = determineRound(computerChoice, userChoice)
        if (winner == "user")
            userScore += 1
        else if (winner == "computer")
            computerScore += 1

        round += 1
        roundResults(computerScore, userScore)
        console.log("\n")
    }
    
    displayResults(userScore)
    return
}