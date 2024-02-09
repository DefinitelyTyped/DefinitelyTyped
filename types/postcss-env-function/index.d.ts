import { PluginCreator } from "postcss";

declare namespace postcssEnvFunction {
    interface ImportObject {
        /** A mapping of variable names to their values */
        environmentVariables: Record<string, string>;
    }
    type ImportFunction = () => ImportObject;
    /**
     * Import locations that can be specified.
     * A string is a path to either a JS or JSON file to load values from
     */
    type ImportLocation = string | ImportObject | ImportFunction;

    interface Options {
        /**
         * Sources where environment variables can be imported from,
         * such as JS files, JSON files, functions, and directly passed objects
         * @see {@link <https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-env-function#importfrom>}
         */
        importFrom?: ImportLocation | readonly ImportLocation[] | undefined;
    }
}

declare const postcssEnvFunction: PluginCreator<postcssEnvFunction.Options>;

export = postcssEnvFunction;
