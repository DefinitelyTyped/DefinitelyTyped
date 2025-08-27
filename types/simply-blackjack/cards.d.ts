export = Deck;

declare class Deck {
    constructor(amount: number);
    deck: Card[];
    dealt_cards: Card[];
    gen(): Card[];
    print(): void;
    shuffle(amount: number | null): void;
    deal(): Card[];
    replace(): void;
    clear_deck(): void;
}

interface Card {
    name: string;
    suit: string;
    value: number;
}
