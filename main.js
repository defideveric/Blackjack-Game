let player = {
    name: "Eric",
    chips: "222"
}
let cards = []
let sum =  0


//To keep track of wins and losses
let hasBlackJack = false
let isAlive = false


//Log win or loss
let message = ""


//Log winning or losing message
let messageEl = document.getElementById("message")


//Log sum on screen
let sumEL = document.getElementById("sum")


//Log cards on screen
let cardsEl = document.getElementById("cards")


let playerEl = document.getElementById("player")
playerEl.textContent = player.name + ": $" + player.chips



//Getting a random card
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 11) {
        return 11
    } else {
        return randomNumber
    }
}


//Function for starting a new game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


//Function to running a game
function renderGame() {
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEL.textContent = "Sum:" + " " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}



//New card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let cardVar = getRandomCard()
    sum += cardVar
    cards.push(cardVar)
    console.log(cards)
    renderGame()
    }
    
}
