// Type definitions for react-native-share-menu 2.2
// Project: https://github.com/meedan/react-native-share-menu#readme
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ShareMenu {
    getSharedText(callback: (text: string) => void): void;
    clearSharedText(): void;
}

export const ShareMenu: ShareMenu;
export default ShareMenu;
