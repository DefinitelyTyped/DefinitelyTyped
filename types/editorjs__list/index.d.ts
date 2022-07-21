// Type definitions for @editorjs/list 1.7
// Project: https://github.com/editor-js/list#readme
// Definitions by: Benjamin Wenzel <https://github.com/BenjaminWenzel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

type ListStyle = 'unordered' | 'ordered';

interface ListData {
    style: ListStyle;
    items: HTMLLIElement[];
}

interface ListConfig {
    defaultStyle: ListStyle;
}

interface ConversionConfig {
    export: (data: ListData) => string;
    import: (data: string) => ListData;
}

declare class List {
    static get isReadOnlySupported(): boolean;

    static get enableLineBreaks(): boolean;

    static get toolbox(): {
        icon: string;
        title: string;
    };

    static get conversionConfig(): ConversionConfig;

    static get sanitize(): {
        items: {
            br: boolean;
        };
    };

    static get pasteConfig(): {
        tags: string[];
    };

    get data(): ListData;
    set data(value: ListData);

    get currentItem(): HTMLElement;

    constructor({ data, config, api, readOnly }: {
        data?: ListData;
        config?: ListConfig;
        api: unknown;
        readOnly?: boolean;
    });

    render(): HTMLElement;

    save(): ListData;

    renderSettings(): HTMLElement;

    onPaste(event: Event): void;

    toggleTune(style: ListStyle): void;

    getOutofList(event: Event): void;

    backspace(event: Event): void;

    selectItem(event: Event): void;

    pasteHandler(element: HTMLUListElement | HTMLOListElement | HTMLLIElement): ListData;
}

export default List;
