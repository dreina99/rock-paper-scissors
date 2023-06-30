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

let game = () => {
    let userScore = 0
    let computerScore = 0
    let round = 1
    let computerChoice = ""
    let userChoice = ""

    while (userScore != 5 && computerScore != 5) {
        computerChoice = getComputerChoice()
        userChoice = getUserChoice()
        printChoices(round, computerChoice, userChoice)

        if(computerChoice === "ROCK") {
            switch (userChoice) {
                case "ROCK":
                    console.log("Tie!")
                    break;
                case "SCISSORS":
                    console.log("You lost this round!")
                    computerScore += 1
                    break;
                case "PAPER":
                    console.log("You won this round!")
                    userScore += 1
                    break;
            }
        } else if (computerChoice === "PAPER") {
            switch (userChoice) {
                case "ROCK":
                    console.log("You lost this round!")
                    computerScore += 1
                    break;
                case "SCISSORS":
                    console.log("You won this round!")
                    userScore += 1
                    break;
                case "PAPER":
                    console.log("Tie!")
                    break;
            }
        } else if (computerChoice == "SCISSORS") {
            switch (userChoice) {
                case "ROCK":
                    console.log("You won this round!")
                    userScore += 1
                    break;
                case "SCISSORS":
                    console.log("Tie!")
                    break;
                case "PAPER":
                    console.log("You lost this round!")
                    computerScore += 1
                    break;
            }
        }
        round += 1
    }

    if (userScore == 5)
        console.log("Woohoo! You won!")
    else   
        console.log("You lost. Better luck next time")
    
    return
}

game()