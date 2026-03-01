// JSBox Clipboard API TypeScript Declaration

declare namespace ClipboardTypes {
    interface ClipboardItem {
        type: string;
        value: string;
    }

    interface ClipboardCopyOptions {
        text?: string;
        image?: NSData;
        data?: NSData;
        ttl?: number;
        locally?: boolean;
    }
}

interface JBClipboard {
    text?: string;
    image?: NSData; // Note: The return value is binary data, not image.
    items: any[];
    phoneNumbers: string[];
    phoneNumber?: string;
    links: string[];
    link?: string;
    emails: string[];
    email?: string;
    dates: Date[];
    date?: Date;

    setTextLocalOnly(text: string): void;
    set(item: ClipboardTypes.ClipboardItem): void;
    copy(options: ClipboardTypes.ClipboardCopyOptions): void;
    clear(): void;
}

declare const $clipboard: JBClipboard;
