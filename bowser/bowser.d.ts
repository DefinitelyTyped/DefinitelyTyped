// Type definitions for Bowser 1.x
// Project: https://github.com/ded/bowser
// Definitions by: Paulo Cesar <https://github.com/pocesar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'bowser' {
    var def: BowserModule.IBowser;
    export = def;
}

declare module BowserModule {

    export interface IBowserUA {
        msie: boolean;
        chrome: boolean;
        webkit: boolean;
        phantom: boolean;
        opera: boolean;
        safari: boolean;
        android: boolean;
        ios: boolean;
        webos: boolean;
        msedge: boolean;
        seamonkey: boolean;
        firefox: boolean;
        yandexbrowser: boolean;
        blackberry: boolean;
        tablet: boolean;
        mobile: boolean;
        silk: boolean;
        bada: boolean;
        tizen: boolean;
        windowsphone: boolean;
        firefoxos: boolean;
        gecko: boolean;
        sailfish: boolean;
        chromeBook: boolean;
        /** Grade A browser */
        a: boolean;
        /** Grade C browser */
        c: boolean;
        /** Grade X browser */
        x: boolean;
        name: string;
        version: string|number;
        osversion: string|number;
    }

    export interface IBowser extends IBowserUA {
        test(browserList: string[]): boolean;
        _detect(ua: string): IBowser;
    }

}
