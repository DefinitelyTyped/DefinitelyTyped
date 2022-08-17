// Type definitions for redux-persist-expire 1.1
// Project: https://github.com/kamranahmedse/redux-persist-expire
// Definitions by: bill <https://github.com/0529bill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript 4.9

import { Transform } from 'redux-persist';
interface ConfigType {
    persistedAtKey?: string;
    expireSeconds?: null | number;
    expiredState?: unknown;
    autoExpire?: boolean;
}

declare function expireReducer(reducerKey: string, config: ConfigType): Transform<any, any>;

export = expireReducer;
