/// <reference types="node" />

import Deck = require("./cards");
import { EventEmitter } from "events";

export = Blackjack;

declare class Blackjack extends EventEmitter {
    constructor(options: BlackjackOptions);

    deckAmount: number;
    payouts: {
        blackjack: number;
        default: number;
    };
    state: string;
    dealer: Player[];
    player: Player[];
    table: Table;
    betAmount: number;
    cards: Deck;

    bet(amount: number): void;
    start(): Table;
    hit(): Card;
    stand(): void;
}

interface Blackjack {
    on<u extends keyof BlackjackEvents>(event: u, listener: BlackjackEvents[u]): this;
    emit<u extends keyof BlackjackEvents>(event: u, listener: BlackjackEvents[u]): boolean;
}

interface Player {
    total: number;
    hand: Card[];
}

interface BlackjackOptions {
    decks: number;
    payouts: {
        blackjack: number | null;
        default: number | null;
    };
}

interface Table {
    dealer: Player;
    player: Player;
}

interface BlackjackEvents {
    end: (result: { state: string; bet: number; winnings: number; player: Player; dealer: Player }) => void;
}

interface Card {
    name: string;
    suit: string;
    value: number;
}
