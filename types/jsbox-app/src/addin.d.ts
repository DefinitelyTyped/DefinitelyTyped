// JSBox Addin API TypeScript Declaration

declare namespace AddinTypes {
    interface AddinItem {
        name: string;
        category?: string;
        url?: string;
        data: NSData;
        id?: string;
        version?: string;
        icon?: string;
        readonly iconImage?: UIImage;
        module?: boolean;
        author?: string;
        website?: string;
    }
}

interface JBAddin {
    list: AddinTypes.AddinItem[];
    categories: string[];
    readonly current: AddinTypes.AddinItem;

    save(addin: { name: string; data: NSData; handler?: (success: boolean) => void }): void;

    delete(name: string): void;
    run(name: string | { name: string; query?: any }): void;
    restart(): void;
    replay(): void;
    compile(script: string): string;
    eval(script: string): void;
}

declare const $addin: JBAddin;
