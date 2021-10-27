// Type definitions for cypress-dotenv 2.0
// Project: https://github.com/morficus/cypress-dotenv
// Definitions by: Daiki Ojima <https://github.com/daikiojm>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { DotenvConfigOptions } from 'dotenv';

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
