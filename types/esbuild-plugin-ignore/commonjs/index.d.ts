import { Plugin } from 'esbuild';

interface IgnoreOption {
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

interface IgnorePluginInstance {
    name: 'ignore';
    setup: Plugin['setup'];
}

declare function ignore(options: IgnoreOption[]): IgnorePluginInstance;

export = ignore;
