// Cards

const cardsBaseURL = 'http://deckofcardsapi.com/api/deck'
const cardBtn = document.getElementById("draw-card")
const cardsDiv = document.getElementById("cards")

let deckId

document.addEventListener('DOMContentLoaded', getDeck)

function getDeck() {
    let newDeck = axios.get(`${cardsBaseURL}/new/shuffle`)
    newDeck
        .then(data => {
            deckId = data.data.deck_id
            console.log(deckId)
        })
}

cardBtn.addEventListener("click", () => {
    axios.get(`${cardsBaseURL}/${deckId}/draw/?count=1`)
        .then(data => {
            // let img = data.data.cards[0].image
            let card = document.createElement("img")
            card.src = data.data.cards[0].image
            cardsDiv.prepend(card)
        })
})