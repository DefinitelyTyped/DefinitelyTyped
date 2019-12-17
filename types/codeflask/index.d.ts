// Type definitions for codeflask 1.4
// Project: https://kazzkiq.github.io/CodeFlask/
// Definitions by: Joachim Holwech <https://github.com/holwech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Languages } from 'prismjs';

export default class CodeFlask {
    constructor(selectorOrElement: string | HTMLElement, opts: options);
    onUpdate(callback: (code: string) => void): void;
    updateCode(newCode: string): void;
    getCode(): string;
    addLanguage(name: string, options: Languages): void;
}

export interface options {
    language?: string;
    rtl?: boolean;
    tabSize?: number;
    enableAutocorrect?: boolean;
    lineNumbers?: boolean;
    defaultTheme?: boolean;
    areaId?: string;
    ariaLabelledby?: string;
    readonly?: boolean;
    handleTabs?: boolean;
    handleSelfClosingCharacters?: boolean;
    handleNewLineIndentation?: boolean;
}
