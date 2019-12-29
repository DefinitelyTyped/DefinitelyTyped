// Type definitions for react-native-share-extension 2.0
// Project: https://github.com/alinz/react-native-share-extension
// Definitions by: Haseeb Majid <https://github.com/hmajid230>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ShareData {
    value: string;
    type: 'text/plain' | 'images/*';
}

declare class ShareExtension {
    data(): ShareData;
    openURL(uri: string): void;
}

export default ShareExtension;
