import { DotenvConfigOptions } from "dotenv";

// Cypress type
interface CypressConfig {
    [key: string]: any;
}

type EnhancedConfig<T extends CypressConfig> = T & {
    env?: {
        [key: string]: unknown;
    };
};

declare function dotenvPlugin<T extends CypressConfig>(
    cypressConfig: T,
    dotEnvConfig?: DotenvConfigOptions,
    all?: boolean,
): EnhancedConfig<T>;

export = dotenvPlugin;
