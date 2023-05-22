// Type definitions for simply-blackjack 1.0
// Project: https://github.com/Townsy45/simply-blackjack#readme
// Definitions by: melosh101 <https://github.com/melosh101>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare module "simply-blackjack" {
    import Deck, {type Card, } from "simply-blackjack/cards"
    import { EventEmitter } from "events";

    export default Blackjack;

    class Blackjack extends EventEmitter {
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

    export function validate(): number;
    
    export function sumCards(cards: Card[]): number;

    export function formatCards(cards: Card[]): {
        total: number;
        cards: Card[];
    };

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
        'end': (table: {
            state: string;
            bet: number;
            winnings: number;
            player: Player;
            dealer: Player;
        }) => void;
    }
}
