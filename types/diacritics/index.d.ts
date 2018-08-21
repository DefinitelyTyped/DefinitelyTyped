// Type definitions for diacritics 1.3
// Project: https://github.com/andrewrk/node-diacritics
// Definitions by: Oto Ciulis <https://github.com/otociulis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function remove(str: string): string;
export const replacementList: Array<{
    base: string;
    chars: string;
}>;

export const diacriticsMap: {
    [key: string]: string;
};
