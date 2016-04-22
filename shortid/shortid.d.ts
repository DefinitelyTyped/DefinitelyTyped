// Type definitions for shortid
// Project: https://github.com/dylang/shortid
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare export function generate(): string;
declare export function characters(string: string): string;
declare export function isValid(id: any): boolean;
declare export function worker(integer: number): void;
declare export function seed(float: number): void;
