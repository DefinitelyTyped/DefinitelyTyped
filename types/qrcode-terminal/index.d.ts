// Type definitions for qrcode-terminal 0.12
// Project: https://github.com/gtanner/qrcode-terminal
// Definitions by: Benjamin Altpeter <https://github.com/baltpeter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const error: 0 | 1 | 2 | 3;
export function generate(input: string, opts?: { small: boolean }, callback?: (qrcode: string) => void): void;
export function setErrorLevel(error: "L" | "M" | "Q" | "H"): void;
