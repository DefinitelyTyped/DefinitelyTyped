export type CardType = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";

/**
 * Represents a French-suited playing card.
 *
 * @author {@link https://github.com/Mugen87|Mugen87}
 */
export class Card {
    suit: string;
    type: CardType;

    constructor(suit: string, type: CardType) {
        this.suit = suit;
        this.type = type;
    }

    getColor() {
        return (this.suit === "♣" || this.suit === "♠") ? "black" : "red";
    }

    getMarkup() {
        const cardDiv = document.createElement("div");
        cardDiv.innerText = this.suit;
        cardDiv.classList.add("card", this.getColor());
        cardDiv.dataset.value = `${this.type} ${this.suit}`;
        return cardDiv;
    }

    getValue() {
        return TYPE_VALUE_MAPPING[this.type];
    }

    isAce() {
        return this.type === "A";
    }
}

// this mapping is Blackjack specific

const TYPE_VALUE_MAPPING = Object.freeze({
    A: 1, // or 11
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
});
