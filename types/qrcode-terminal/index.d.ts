export const error: 0 | 1 | 2 | 3;
export function generate(input: string, opts?: { small: boolean }, callback?: (qrcode: string) => void): void;
export function setErrorLevel(error: "L" | "M" | "Q" | "H"): void;
