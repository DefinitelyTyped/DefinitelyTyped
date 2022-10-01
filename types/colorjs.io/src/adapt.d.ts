export type White = [number, number, number];

export const WHITES: Record<string, White>;

export function getWhite(name: string | White): White;

export default function adapt(
    w1: White,
    w2: White,
    xyz: [number, number, number],
    options?: { method?: string | undefined },
): void;
