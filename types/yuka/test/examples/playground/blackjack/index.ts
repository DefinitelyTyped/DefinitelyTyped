import { AI } from "./game/AI";
import { Deck } from "./game/Deck";
import { Player } from "./game/Player";
import { ACTIONS } from "./monteCarloSimulation/BlackjackEnvironment";

const PLAYERS = Object.freeze({
    HUMAN: 0,
    AI: 1,
    DEALER: 2,
});

let activePlayer: number = PLAYERS.HUMAN;
let gameOver = false;

let humanWins = 0;
let aiWins = 0;

const deck: Deck = new Deck();
deck.shuffle();

const dealer: Player = new Player();
const ai: AI = new AI(dealer);
const human: Player = new Player();

dealCards();

const querySelectorSave = (selector: string): HTMLDivElement => {
    const element = document.querySelector(selector);
    if (!(element instanceof HTMLDivElement)) {
        throw new Error("Not found");
    }

    return element;
};

const buttonStick: Element = querySelectorSave("#button-stick");
const buttonHit: Element = querySelectorSave("#button-hit");
const buttonRestart: Element = querySelectorSave("#button-restart");
const status = querySelectorSave("#status");
const dealerCards = querySelectorSave("#dealer-cards");
const aiCards = querySelectorSave("#ai-cards");
const humanCards = querySelectorSave("#human-cards");
const aiWinsElement = querySelectorSave("#ai-wins");
const humanWinsElement = querySelectorSave("#human-wins");

buttonStick.addEventListener("pointerup", () => {
    activePlayer = PLAYERS.AI;

    updateGame();
});

buttonHit.addEventListener("pointerup", () => {
    human.addCard(deck.nextCard());

    updateGame();
});

buttonRestart.addEventListener("pointerup", () => {
    gameOver = false;
    activePlayer = PLAYERS.HUMAN;
    dealCards();
    updateGame();
});

updateGame();

function dealCards() {
    deck.shuffle();

    dealer.reset();
    ai.reset();
    human.reset();

    dealer.addCard(deck.nextCard());

    ai.addCard(deck.nextCard());
    ai.addCard(deck.nextCard());

    human.addCard(deck.nextCard());
    human.addCard(deck.nextCard());
}

function updateGame() {
    // human
    if (activePlayer === PLAYERS.HUMAN) {
        if (human.isBust() || human.getSum() === 21) {
            activePlayer = PLAYERS.AI;
        }
    }

    // ai
    if (activePlayer === PLAYERS.AI) {
        while (true) {
            const action = ai.getAction();
            if (action === ACTIONS.STICK) {
                activePlayer = PLAYERS.DEALER;
                break;
            } else if (action === ACTIONS.HIT) {
                ai.addCard(deck.nextCard());
            }

            if (ai.isBust()) {
                activePlayer = PLAYERS.DEALER;
                break;
            }
        }
    }

    // dealer
    if (activePlayer === PLAYERS.DEALER) {
        while (dealer.getSum() < 17) {
            dealer.addCard(deck.nextCard());
        }
        gameOver = true;
    }

    updateUI();
}

function updateUI() {
    updateCards(dealer, dealerCards);
    updateCards(ai, aiCards);
    updateCards(human, humanCards);

    switch (activePlayer) {
        case PLAYERS.HUMAN:
            buttonStick.classList.remove("disabled");
            buttonHit.classList.remove("disabled");
            status.innerText = "Your turn!";
            break;
        case PLAYERS.AI:
            buttonStick.classList.add("disabled");
            buttonHit.classList.add("disabled");
            status.innerText = "AI turn!";
            break;
        case PLAYERS.DEALER:
            buttonStick.classList.add("disabled");
            buttonHit.classList.add("disabled");
            status.innerText = "Dealer turn!";
            break;
    }

    //
    if (gameOver) {
        // human
        if (human.isBust()) {
            status.innerText = "You loose!";
        } else if (human.getSum() === dealer.getSum()) {
            status.innerText = "Draw!";
        } else if (human.getSum() > dealer.getSum() || dealer.isBust()) {
            status.innerText = "You win!";
            humanWins++;
        } else {
            status.innerText = "You loose!";
        }

        // ai

        if (ai.isBust()) {
            status.innerText += " AI looses!";
        } else if (ai.getSum() === dealer.getSum()) {
            status.innerText += " AI Draw!";
        } else if (ai.getSum() > dealer.getSum() || dealer.isBust()) {
            status.innerText += " AI wins!";
            aiWins++;
        } else {
            status.innerText += " AI looses!";
        }
    }

    aiWinsElement.innerText = aiWins.toString();
    humanWinsElement.innerText = humanWins.toString();
}

function updateCards(player: Player, domElement: Element) {
    domElement.innerHTML = "";
    const cards = player.getCards();
    for (const card of cards) {
        domElement.appendChild(card.getMarkup());
    }
}
