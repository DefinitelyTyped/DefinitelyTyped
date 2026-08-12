// JSBox Safari API TypeScript Declaration

declare namespace SafariTypes {
    interface OpenOptions {
        url: string;
        entersReader?: boolean;
        height?: number;
        /** callback to handle dismiss event */
        handler?: () => void;
    }

    interface ReadingItemOptions {
        url: string;
        title?: string;
        preview?: string;
    }
}

interface JBSafari {
    open(options: SafariTypes.OpenOptions): void;
    /** JSON format */
    items: Record<string, any>;
    /** @deprecated */
    inject(script: string): void;
    addReadingItem(options: SafariTypes.ReadingItemOptions): void;
}

declare const $safari: JBSafari;
