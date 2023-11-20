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
