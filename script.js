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

let computerChoice = getComputerChoice()
let userChoice = getUserChoice()
console.log(userChoice)