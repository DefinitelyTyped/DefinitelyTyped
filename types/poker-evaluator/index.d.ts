/// <reference types="node" />

export const HANDTYPES: HandName[];
export const CARDS: Deck;
export const ranks: Buffer;

export function evalHand(cards: string[] | number[]): EvaluatedHand;

export type HandName =
    | "invalid hand"
    | "high card"
    | "one pair"
    | "two pairs"
    | "three of a kind"
    | "straight"
    | "flush"
    | "full house"
    | "four of a kind"
    | "straight flush";

export interface Deck {
    [key: string]: number;
}

export interface EvaluatedHand {
    handType: number; // Index of HANDTYPES array
    handRank: number;
    value: number;
    handName: HandName;
}
