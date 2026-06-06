import { Plugin } from "esbuild";

export interface IgnoreOption {
    /**
     * A regular expression to match the resource paths to ignore.
     * @example `/pg-native$/`
     */
    resourceRegExp: RegExp;

    /**
     * A regular expression to match the context (directory or module path).
     * @example `/node_modules\\/sequelize|node_modules\\/pg/`
     */
    contextRegExp: RegExp;
}

export interface IgnorePluginInstance {
    name: "ignore";
    setup: Plugin["setup"];
}
