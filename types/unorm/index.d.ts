declare var unorm: unorm.Static;
export = unorm;
export as namespace unorm;

declare namespace unorm {
    interface Static {
        nfd(str: string): string;
        nfkd(str: string): string;
        nfc(str: string): string;
        nfkc(str: string): string;
    }
}
