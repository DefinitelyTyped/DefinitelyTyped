// Type definitions for typekit-webfontloader 1.6.28
// Project: https://github.com/typekit/webfontloader
// Definitions by: doskallemaskin <https://github.com/doskallemaskin>
//                SECT <https://github.com/sectsect>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = WebFont;
export as namespace WebFont;

declare namespace WebFont {
    export function load(config:WebFont.Config):void;
    export interface Config {
        /** Setting this to false will disable html classes (defaults to true) */
        classes?:boolean;
        /** Settings this to false will disable callbacks/events (defaults to true) */
        events?:boolean;
        /** Time (in ms) until the fontinactive callback will be triggered (defaults to 5000) */
        timeout?:number;
        /** This event is triggered when all fonts have been requested. */
        loading?():void;
        /** This event is triggered when the fonts have rendered. */
        active?():void;
        /** This event is triggered when the browser does not support linked fonts or if none of the fonts could be loaded. */
        inactive?():void;
        /** This event is triggered once for each font that's loaded. */
        fontloading?(familyName:string, fvd:string):void;
        /** This event is triggered once for each font that renders. */
        fontactive?(familyName:string, fvd:string):void;
        /** This event is triggered if the font can't be loaded. */
        fontinactive?(familyName:string, fvd:string):void;

        /** Child window or iframes to manage fonts for */
        context?:Array<string>;

        custom?:Custom;
        google?:Google;
        typekit?:Typekit;
        fontdeck?:Fontdeck;
        monotype?:Monotype;
    }
    export interface Google {
        api?: string;
        families:Array<string>;
        text?: string;
    }
    export interface Typekit {
        id?:string;
    }
    export interface Custom {
        families?:Array<string>;
        urls?:Array<string>;
        testStrings?:{[fontFamily:string]:string};
    }
    export interface Fontdeck {
        id?:string;
    }
    export interface Monotype {
        projectId?:string;
        version?:number;
        loadAllFonts?:boolean;
    }

}
