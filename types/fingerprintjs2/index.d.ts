// Type definitions for fingerprintjs2 2.0
// Project: https://github.com/Valve/fingerprintjs2
// Definitions by: Curt Mullin <https://github.com/curtstate>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Fingerprint2Js {
   interface Fingerprint2Interface {
     VERSION: string;
     get(
       options: Fingerprint2Options,
       callback: (components: FingerPrint2Component[]) => void
     ): void;

     get(callback: (components: FingerPrint2Component[]) => void): void;

     x64hash128(value: string, num: number): string;
   }
}

interface FingerPrint2Component {
   key: string;
   value: string;
}
interface Fingerprint2Options {
   preprocessor?: (key: string, value: string) => void;
   audio?: {
     timeout: number;
     excludeIOS11: boolean;
   };
   fonts?: {
     swfContainerId?: string;
     swfPath?: string;
     userDefinedFonts?: string[];
     extendedJsFonts?: boolean;
   };

   screen?: {
     // To ensure consistent fingerprints when users rotate their mobile devices
     detectScreenOrientation: boolean;
   };

   plugins?: {
     sortPluginsFor: RegExp[];
     excludeIE: boolean;
   };

   extraComponents?: [
     { key: string; getData: (done: any, options: any) => void }
   ];

   excludes?: {
     userAgent?: boolean;
     language?: boolean;
     colorDepth?: boolean;
     deviceMemory?: boolean;
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
     enumerateDevices?: boolean;
   };
 }

declare var Fingerprint2: Fingerprint2Js.Fingerprint2Interface;
