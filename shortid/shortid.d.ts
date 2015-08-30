// Type definitions for shortid
// Project: https://github.com/dylang/shortid
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "shortid" {
	export function generate(): string;
	export function characters(string: string): string;
	export function isValid(id: any): boolean;
	export function worker(integer: number): void;
	export function seed(float: number): void;
}
