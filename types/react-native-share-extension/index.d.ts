// Type definitions for react-native-share-extension 2.0
// Project: https://github.com/alinz/react-native-share-extension
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ShareData {
    value: string;
    type: 'text/plain' | 'images/*';
}

interface ShareExtension {
    close(): void;
    data(): Promise<ShareData>;
    openURL(uri: string): void;
}

declare const RNShareExtension: ShareExtension;
export default RNShareExtension;
