declare module "i18next-sprintf-postprocessor" {
    import i18next = require("i18next");

    module "i18next" {
        interface TFunction {
            (key: string, ...args: any[]): string;
        }
    }

    interface I18nextSprintfPostProcessor extends i18next.PostProcessorModule {
        name: string;
        type: "postProcessor";
        process(value: any, key: string, options: any): any;
        overloadTranslationOptionHandler(args: string[]): {
            postProcess: "sprintf";
            sprintf: string[];
        };
    }

    var sprintf: I18nextSprintfPostProcessor;
    export = sprintf;
}

declare module "i18next-sprintf-postprocessor/dist/commonjs" {
    import sprintf = require("i18next-sprintf-postprocessor");
    export default sprintf;
}
