import { Card } from "./Card";

/**
 * Base class for Blackjack players.
 *
 * @author {@link https://github.com/Mugen87|Mugen87}
 */
export class Player {
    cards: Card[];

    constructor() {
        this.cards = [];
    }

    addCard(card: Card): void {
        this.cards.push(card);
    }

    getCards(): Card[] {
        return [...this.cards];
    }

    getSum(): number {
        const cards = this.cards;
        let sum = 0;
        let hasAce = false;

        for (const card of cards) {
            sum += card.getValue();

            if (card.isAce()) hasAce = true;
        }

        const usableAce = hasAce && sum + 10 <= 21;

        return usableAce ? sum + 10 : sum;
    }

    hasUsableAce(): boolean {
        let hasAce = false;

        for (const card of this.cards) {
            if (card.isAce()) hasAce = true;
        }

        return hasAce && this.getSum() + 10 <= 21;
    }

    isBust(): boolean {
        return this.getSum() > 21;
    }

    reset(): void {
        this.cards.length = 0;
    }
}
