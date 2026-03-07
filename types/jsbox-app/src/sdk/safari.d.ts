// JSBox Safari API TypeScript Declaration

declare namespace SafariTypes {
    interface OpenOptions {
        url: string;
        entersReader?: boolean;
        height?: number;
        handler?: () => void; // callback to handle dismiss event
    }

    interface ReadingItemOptions {
        url: string;
        title?: string;
        preview?: string;
    }
}

interface JBSafari {
    open(options: SafariTypes.OpenOptions): void;
    items: any; // JSON format
    inject(script: string): void; // Deprecated
    addReadingItem(options: SafariTypes.ReadingItemOptions): void;
}

declare const $safari: JBSafari;
