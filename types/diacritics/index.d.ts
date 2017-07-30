// Type definitions for diacritics v1.3.0
// Project: https://github.com/andrewrk/node-diacritics
// Definitions by: Oto Ciulis <https://github.com/otociulis/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IReplacementListItem {
    base: string;
    chars: string;
}

declare module 'diacritics' {
    export function remove(str: String) : string;
    export const replacementList: IReplacementListItem[];
}

