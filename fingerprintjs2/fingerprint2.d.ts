// Type definitions for fingerprintjs2 1.0.0-rc3
// Project: https://github.com/Valve/fingerprintjs2
// Definitions by: Sam Vloeberghs <https://github.com/samvloeberghs>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Fingerprint2Js {

    interface Fingerprint2Static {
        new(option?:Fingerprint2Option): Fingerprint2;
    }

    interface Fingerprint2 {
        get(func:(result:string, components:Array<string>) => void): void;
    }

    interface Fingerprint2Option {
        swfContainerId?: string;
        swfPath?: string;
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
        excludeTouchSupport?: boolean;
    }

}

declare var Fingerprint2:Fingerprint2Js.Fingerprint2Static;

declare module "Fingerprint2" {
    export = Fingerprint2;
}
