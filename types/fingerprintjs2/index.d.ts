// Type definitions for fingerprintjs2 2.0.3
// Project: https://github.com/Valve/fingerprintjs2
// Definitions by: Curt Mullin <https://github.com/curtstate>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Fingerprint2 {
   static VERSION: string;
 
   static get(
     options: Fingerprint2Options,
     callback: (components: FingerPrint2Component[]) => void
   ): void;
 
   static get(callback: (components: FingerPrint2Component[]) => void): void;
 
   static x64hash128(value: string, num: number): string;
 }
 
 interface FingerPrint2Component {
   key: string;
   value: string;
 }
 interface Fingerprint2Options {
   preprocessor?: Function;
   audio?: {
     timeout: number;
     excludeIOS11: boolean;
   };
   fonts?: {
     swfContainerId: string;
     swfPath: string;
     userDefinedFonts: string[];
     extendedJsFonts: boolean;
   };
 
   screen?: {
     // To ensure consistent fingerprints when users rotate their mobile devices
     detectScreenOrientation: boolean;
   };
 
   plugins?: {
     sortPluginsFor: RegExp[];
     excludeIE: boolean;
   };
 
   extraComponents?: [{ key: string; getData: Function }];
 
   exludes?: {
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
   };
 }
 