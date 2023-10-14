import { Card, CardType } from "./Card";

/**
 * Represents a deck of French-suited playing cards.
 *
 * @author {@link https://github.com/Mugen87|Mugen87}
 */
export class Deck {
    cards: Card[];
    index: number;

    constructor() {
        this.cards = init();
        this.index = 0;
    }

    shuffle(): this {
        const cards = this.cards;
        for (let i = cards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];

            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }

        this.index = 0;

        return this;
    }

    nextCard() {
        const card = this.cards[this.index++];

        return card;
    }
}

const SUITS = ["♣", "♠", "♥", "♦"];
const TYPES: CardType[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function init(): Card[] {
    // 4 (suits) * 13 (card types) * 6 (decks) = 312 cards
    const decks = [];

    for (let i = 0; i < 6; i++) {
        const deck: Card[] = [];
        SUITS.map(suit => {
            return TYPES.map(type => {
                deck.push(new Card(suit, type));
            });
        });

        decks.push(...deck);
    }

    return decks;
}
