// Type definitions for starwars-names 1.6
// Project: https://github.com/kentcdodds/starwars-names#readme
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace starwarsNames;
export const all: string[];
export function random(): string;
export function random(number: number): string[];
