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
