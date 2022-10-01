import { White } from './adapt';

export interface CAT {
    id: string;
    toCone_M: number[][];
    fromCone_M: number[][];
}

export const CATs: Record<string, CAT>;

export function defineCAT(cat: CAT): void;

export function adapt(W1: White, W2: White, id?: string): number[];
