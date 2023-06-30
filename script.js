choices = ["ROCK", "PAPER", "SCISSORS"]

let getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

computerChoice = getComputerChoice()
console.log(computerChoice)