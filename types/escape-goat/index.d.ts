// Type definitions for escape-goat 1.3
// Project: https://github.com/sindresorhus/escape-goat#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function escape(input: string): string;
export function unescape(input: string): string;
export function escapeTag(template: TemplateStringsArray, ...substitutions: any[]): string;
export function unescapeTag(template: TemplateStringsArray, ...substitutions: any[]): string;
