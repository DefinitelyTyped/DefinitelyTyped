// Type definitions for i18next-sprintf-postProcessor
// Project: https://github.com/i18next/i18next-sprintf-postProcessor
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../express/express.d.ts"/>
///<reference path="../i18next/i18next.d.ts"/>

declare namespace I18next {
	interface I18nextOptions extends i18nextSprintfPostProcessor.I18nextOptions {}
}

declare namespace i18nextSprintfPostProcessor {
    interface I18nextOptions {
        overloadTranslationOptionHandler?(args: Array<any>): void;
        process?(value: any, key: string, options: Object): void;
    }
}

declare module "i18next-sprintf-postprocessor" {
    import i18next = require("i18next");

    interface i18nextSprintfPostProcessor {
        (): any;
        process(value: any, key: string, options: Object): void;
        overloadTranslationOptionHandler(args: Array<any>): void;
    }

    var sprintf: i18nextSprintfPostProcessor;
    export default sprintf;
}
