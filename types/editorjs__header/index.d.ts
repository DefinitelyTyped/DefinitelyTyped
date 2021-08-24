// Type definitions for @editorjs/header 2.6
// Project: https://github.com/editor-js/header#readme (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Maykon Oliveira <https://github.com/maykon-oliveira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

interface HeaderData {
    text: string;
    level: number;
}

interface HeaderConfig {
    placeholder: string;
    levels: number[];
    defaultLevel: number;
}

interface Level {
    number: number;
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    svg: string;
}

declare class Header {
    constructor(config?: { data: HeaderData, config: HeaderConfig, api: object, readOnly: boolean })

    normalizeData(data: HeaderData): HeaderData;

    setLevel(level: number): void;

    merge(data: HeaderData): void;

    validate(blockData: HeaderData): boolean;

    save(toolsContent: HTMLElement): HeaderData;

    static get conversionConfig(): {export: string, import: string};

    static get sanitize(): {level: boolean, text: object};

    static get isReadOnlySupported(): boolean;

    get data(): HeaderData;

    set data(data: HeaderData);

    getTag(): HTMLElement;

    get currentLevel(): Level;

    get defaultLevel(): Level;

    get levels(): Level[];

    static get toolbox(): {
      icon: string,
      title: string,
    }
}

export default Header;
