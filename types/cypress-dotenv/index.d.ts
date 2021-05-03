// Type definitions for cypress-dotenv 1.2
// Project: https://github.com/morficus/cypress-dotenv
// Definitions by: Daiki Ojima <https://github.com/daikiojm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DotenvConfigOptions } from 'dotenv';

declare function dotenvPlugin<T = any>(cypressConfig: T, dotEnvConfig?: DotenvConfigOptions, all?: boolean): T;

export = dotenvPlugin;
