// Type definitions for codeflask 1.4
// Project: https://kazzkiq.github.io/CodeFlask/
// Definitions by: Joachim Holwech <https://github.com/holwech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Languages } from "prismjs";

declare class CodeFlask {
    constructor(selectorOrElement: string | HTMLElement, opts: CodeFlask.options);
    onUpdate(callback: (code: string) => void): void;
    updateCode(newCode: string): void;
    getCode(): string;
    addLanguage(name: string, options: Languages): void;
}

export = CodeFlask;

declare namespace CodeFlask {
    interface options {
        language?: string | undefined;
        rtl?: boolean | undefined;
        tabSize?: number | undefined;
        enableAutocorrect?: boolean | undefined;
        lineNumbers?: boolean | undefined;
        defaultTheme?: boolean | undefined;
        areaId?: string | undefined;
        ariaLabelledby?: string | undefined;
        readonly?: boolean | undefined;
        handleTabs?: boolean | undefined;
        handleSelfClosingCharacters?: boolean | undefined;
        handleNewLineIndentation?: boolean | undefined;
        styleParent?: ShadowRoot | undefined;
    }
}
