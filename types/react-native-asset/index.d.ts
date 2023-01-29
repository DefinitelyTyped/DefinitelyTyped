// Type definitions for react-native-asset 2.0
// Project: https://github.com/unimonkiez/react-native-asset#readme
// Definitions by: Armaan A <https://github.com/Armster15>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function ReactNativeAsset(args: {
    /**
     * Root path of where to search for the `assets` folders
     * @default process.cwd()
     */
    rootPath?: string;
    /**
     * @default true
     */
    shouldUnlink?: boolean;
    platforms: {
        ios: {
            enabled: boolean;
            /** Array of folder paths that point to the location of assets  */
            assets: string[];
        };
        android: {
            enabled: boolean;
            /** Array of folder paths that point to the location of assets  */
            assets: string[];
        };
    };
}): void;

export = ReactNativeAsset;
