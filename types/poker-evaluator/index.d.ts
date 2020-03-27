// Type definitions for poker-evaluator 0.3
// Project: http://github.com/chenosaurus/poker-evaluator
// Definitions by: Rory McGuinness <https://github.com/rorymcgit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export const HANDTYPES: HandName[];
export const CARDS: Deck;
export const ranks: Buffer;

export function evalHand(cards: string[]): EvaluatedHand;
export function evalCard(card: string): number;

export type HandName =
    'invalid hand' |
    'high card' |
    'one pair' |
    'two pairs' |
    'three of a kind' |
    'straight' |
    'flush' |
    'full house' |
    'four of a kind' |
    'straight flush';

export interface Deck {
    [key: string]: number;
}

export interface EvaluatedHand {
    handType: number; // Index of HANDTYPES array
    handRank: number;
    value: number;
    handName: HandName;
}
