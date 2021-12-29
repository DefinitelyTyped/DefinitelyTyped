// Type definitions for react-native-share-menu 5.0
// Project: https://github.com/meedan/react-native-share-menu#readme
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
//                 Philippe Beaudoin <https://github.com/PhilBeaudoin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

export interface ShareData {
    mimeType: string;
    data: string | string[];
    extraData?: object | undefined;
}

export type ShareCallback = (share?: ShareData) => void;

export interface ShareListener {
    remove(): void;
}

interface ShareMenu {
    getSharedText(callback: ShareCallback): void;
    getInitialShare(callback: ShareCallback): void;
    addNewShareListener(callback: ShareCallback): ShareListener;
    clearSharedText(): void;
}

interface ShareMenuReactView {
    dismissExtension(error?: string): void;
    openApp(): void;
    continueInApp(extraData?: object): void;
    data(): Promise<{mimeType: string, data: string}>;
}

export const ShareMenuReactView: ShareMenuReactView;
declare const ShareMenu: ShareMenu;
export default ShareMenu;
