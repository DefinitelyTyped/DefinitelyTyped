interface ShareData {
    value: string;
    type: "text/plain" | "images/*";
}

interface ShareExtension {
    close(): void;
    data(): Promise<ShareData>;
    openURL(uri: string): void;
}

declare const RNShareExtension: ShareExtension;
export default RNShareExtension;
