// Type definitions for fingerprintjs2 2.0
// Project: https://github.com/Valve/fingerprintjs2
// Definitions by: Curt Mullin <https://github.com/curtstate>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Fingerprint2;
export = Fingerprint2;

declare var Fingerprint2: Fingerprint2.Static;

declare namespace Fingerprint2 {
    interface Static {
        VERSION: string;

        get(options: Options, callback: (components: Component[]) => void): void;
        get(callback: (components: Component[]) => void): void;
        getPromise(options?: Options): Promise<Component[]>;
        getV18(
            options: Options,
            callback: (murmur: string, components: V18Component[]) => void
        ): void;
        getV18(callback: (murmur: string, components: V18Component[]) => void): void;

        x64hash128(value: string, num: number): string;
    }

    interface Component {
        key: string;
        value: any;
    }

    interface V18Component {
        key: string;
        value: string;
    }

    interface Options {
        preprocessor?: (key: string, value: any) => any;

        audio?: {
            timeout: number;
            /**
             * On iOS 11, audio context can only be used in response to user interaction.
             * We require users to explicitly enable audio fingerprinting on iOS 11.
             * See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
             */
            excludeIOS11: boolean;
        };

        fonts?: {
            swfContainerId: string;
            swfPath: string;
            userDefinedFonts: string[];
            extendedJsFonts: boolean;
        };

        screen?: {
            /**
             * To ensure consistent fingerprints when users rotate their mobile devices
             */
            detectScreenOrientation: boolean;
        };

        plugins?: {
            sortPluginsFor: RegExp[];
            excludeIE: boolean;
        };

        extraComponents?: Array<{
            key: string;
            getData(done: (value: any) => void, options: Options): void;
            pauseBefore?: boolean;
        }>;

        excludes?: {
            userAgent?: boolean;
            language?: boolean;
            colorDepth?: boolean;
            deviceMemory?: boolean;
            /**
             * devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
             */
            pixelRatio?: boolean;
            hardwareConcurrency?: boolean;
            screenResolution?: boolean;
            availableScreenResolution?: boolean;
            timezoneOffset?: boolean;
            timezone?: boolean;
            sessionStorage?: boolean;
            localStorage?: boolean;
            indexedDb?: boolean;
            addBehavior?: boolean;
            openDatabase?: boolean;
            cpuClass?: boolean;
            platform?: boolean;
            /**
             * DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
             */
            doNotTrack?: boolean;
            plugins?: boolean;
            canvas?: boolean;
            webgl?: boolean;
            webglVendorAndRenderer?: boolean;
            adBlock?: boolean;
            hasLiedLanguages?: boolean;
            hasLiedResolution?: boolean;
            hasLiedOs?: boolean;
            hasLiedBrowser?: boolean;
            touchSupport?: boolean;
            fonts?: boolean;
            fontsFlash?: boolean;
            audio?: boolean;
            /**
             * Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
             */
            enumerateDevices?: boolean;
        };

        NOT_AVAILABLE?: string;
        ERROR?: string;
        EXCLUDED?: string;
    }
}
