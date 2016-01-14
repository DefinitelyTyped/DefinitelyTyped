// Type definitions for i18next-sprintf-postProcessor
// Project: https://github.com/i18next/i18next-sprintf-postProcessor
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../express/express.d.ts"/>
///<reference path="../i18next/i18next.d.ts"/>

declare module "i18next-sprintf-postprocessor" {
    import i18next = require("i18next");

    export default interface i18nextSprintfPostProcessor {
        process(value: any, key: string, options: Object): void;
        overloadTranslationOptionHandler(args: Array<any>): void;
    }
    //export default function sprintf(): any;
}
