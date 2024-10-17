import { Plugin } from 'esbuild';

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

/**
 * Creates an esbuild plugin that ignores certain modules based on the given RegExp patterns.
 * @param options An array of IgnoreOption objects specifying the patterns to ignore.
 * @returns A valid esbuild plugin.
*/
declare function ignore(options: IgnoreOption[]): Plugin;

export default ignore;
