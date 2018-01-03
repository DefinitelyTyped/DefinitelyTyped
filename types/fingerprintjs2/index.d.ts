// Type definitions for fingerprintjs2 1.5
// Project: https://github.com/Valve/fingerprintjs2
// Definitions by: Curt Mullin <https://github.com/curtstate>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Fingerprint2 {
    static VERSION: string;
    constructor(options?: Fingerprint2Options);

    get(callback: (result: string, components: [{ key: string, value: string }]) => void): number;
}

interface Fingerprint2Options {
    swfContainerId?: string;
    swfPath?: string;
    userDefinedFonts?: string[];
    excludeUserAgent?: boolean;
    excludeLanguage?: boolean;
    excludeColorDepth?: boolean;
    excludeScreenResolution?: boolean;
    excludeTimezoneOffset?: boolean;
    excludeSessionStorage?: boolean;
    excludeIndexedDB?: boolean;
    excludeAddBehavior?: boolean;
    excludeOpenDatabase?: boolean;
    excludeCpuClass?: boolean;
    excludePlatform?: boolean;
    excludeDoNotTrack?: boolean;
    excludeCanvas?: boolean;
    excludeWebGL?: boolean;
    excludeAdBlock?: boolean;
    excludeHasLiedLanguages?: boolean;
    excludeHasLiedResolution?: boolean;
    excludeHasLiedOs?: boolean;
    excludeHasLiedBrowser?: boolean;
    excludeJsFonts?: boolean;
    excludeFlashFonts?: boolean;
    excludePlugins?: boolean;
    excludeIEPlugins?: boolean;
    excludeTouchSupport?: boolean;
    excludePixelRatio?: boolean;
    excludeHardwareConcurrency?: boolean;
}

export default Fingerprint2;

