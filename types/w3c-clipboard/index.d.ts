// Type definitions for non-npm package w3c-clipboard-api 1.0
// Project: https://www.w3.org/TR/clipboard-apis/
// Definitions by: William Furr <https://github.com/wffurr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type PresentationStyle = 'attachment' | 'inline' | 'unspecified';

interface ClipboardItem {
    readonly delayed: boolean;
    readonly lastModified: number;
    readonly presentationStyle: PresentationStyle;

    readonly types: string[];

    getType(mimeType: string): Promise<Blob>;
}

declare var ClipboardItem: {
    prototype: ClipboardItem;
    new (
        items: { [key: string]: string | Blob | Promise<string | Blob> },
        options?: {
            presentationStyle?: 'unspecified' | 'inline' | 'attachment';
        },
    ): ClipboardItem;
    createDelayed(
        items: { [key: string]: () => string | Blob | Promise<string | Blob> },
        options?: { presentationStyle?: 'unspecified' | 'inline' | 'attachment' },
    ): ClipboardItem;
};

interface Clipboard {
    read(): Promise<ClipboardItem[]>;
    write(data: ClipboardItem[]): Promise<void>;
}
