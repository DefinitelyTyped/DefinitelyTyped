import type { Linter } from "eslint";

/**
 * A compatibility class for working with configs.
 */
export class FlatCompat {
    constructor({
        baseDirectory,
        resolvePluginsRelativeTo,
        recommendedConfig,
        allConfig,
    }?: {
        /**
         * default: process.cwd()
         */
        baseDirectory?: string;
        resolvePluginsRelativeTo?: string;
        recommendedConfig?: Linter.Config;
        allConfig?: Linter.Config;
    });

    /**
     * Translates an ESLintRC-style config into a flag-config-style config.
     * @param eslintrcConfig The ESLintRC-style config object.
     * @returns A flag-config-style config object.
     */
    config(eslintrcConfig: Linter.Config): Linter.FlatConfig[];

    /**
     * Translates the `env` section of an ESLintRC-style config.
     * @param envConfig The `env` section of an ESLintRC config.
     * @returns An array of flag-config objects representing the environments.
     */
    env(envConfig: { [name: string]: boolean }): Linter.FlatConfig[];

    /**
     * Translates the `extends` section of an ESLintRC-style config.
     * @param configsToExtend The names of the configs to load.
     * @returns An array of flag-config objects representing the config.
     */
    extends(...configsToExtend: string[]): Linter.FlatConfig[];

    /**
     * Translates the `plugins` section of an ESLintRC-style config.
     * @param plugins The names of the plugins to load.
     * @returns An array of flag-config objects representing the plugins.
     */
    plugins(...plugins: string[]): Linter.FlatConfig[];
}
