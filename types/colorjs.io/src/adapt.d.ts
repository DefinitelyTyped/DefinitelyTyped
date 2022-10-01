export type White = [number, number, number];

export const WHITES: Record<string, White>;

export function getWhite(name: string | White): White;

/** @todo double-check types and add types for options */
export default function adapt(w1: White, w2: White, xyz: [number, number, number], options?: Record<string, any>): void;
