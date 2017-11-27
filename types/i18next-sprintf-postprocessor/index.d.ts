// Type definitions for i18next-sprintf-postProcessor
// Project: https://github.com/i18next/i18next-sprintf-postProcessor
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "i18next-sprintf-postprocessor" {
    import i18next = require("i18next");

    module "i18next" {
        interface I18n {
          t(key: string, ...args: any[]): string;
        }
    }
  
    interface I18nextSprintfPostProcessor {
        name: string;
        type: string;
        process(value: any, key: string, options: any): any;
        overloadTranslationOptionHandler(args: string[]): {
          postProcess: "sprintf",
          sprintf: string[]
        };
    }

    var sprintf: I18nextSprintfPostProcessor;
    export = sprintf;
}

declare module "i18next-sprintf-postprocessor/dist/commonjs" {
    import sprintf = require("i18next-sprintf-postprocessor");
    export default sprintf;
}
