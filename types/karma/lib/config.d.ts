import { ConfigOptions } from '../';

export function parseConfig(configFilePath: string, cliOptions: ConfigOptions): Config;
export function parseConfig(
    configFilePath: string | null | undefined,
    cliOptions: ConfigOptions,
    parseOptions?: ParseOptions & { promiseConfig: true },
): Promise<Config>;
export function parseConfig(
    configFilePath: string | null | undefined,
    cliOptions: ConfigOptions,
    parseOptions?: ParseOptions,
): Config;

export class Config {
    set: (config: ConfigOptions) => void;
    LOG_DISABLE: string;
    LOG_ERROR: string;
    LOG_WARN: string;
    LOG_INFO: string;
    LOG_DEBUG: string;
}

export interface ParseOptions {
    /**
     * When true, the return value of the function is a Promise of Config instead of Config.
     * Should be set to true to support async Karma configuration file.
     *
     * @deprecated Will become a default in the next major release.
     */
    promiseConfig?: boolean;

    /**
     * When true, function will throw error or return rejected Promise instead of calling process.exit(1).
     *
     * @deprecated Will become a default in the next major release.
     */
    throwErrors?: boolean;
}
