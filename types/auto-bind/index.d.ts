// Type definitions for auto-bind 1.2
// Project: https://github.com/sindresorhus/auto-bind#readme
// Definitions by: Sindre Seppola <https://github.com/sseppola>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "auto-bind" {
    namespace autoBind {
        export interface AutoBindOptions {
            include?: Array<string | RegExp>;
            exclude?: Array<string | RegExp>;
        }

        export type AutoBindFunction<selfT = object> = (
            self: selfT,
            options?: AutoBindOptions
        ) => selfT;
    }

    interface AutoBindModule<selfT = object>
        extends autoBind.AutoBindFunction<selfT> {
        react: autoBind.AutoBindFunction<selfT>;
    }

    const autoBind: AutoBindModule;
    export = autoBind;
}
