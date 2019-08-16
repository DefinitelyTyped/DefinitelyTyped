// Type definitions for redux-persist-expire 1.1
// Project: https://github.com/kamranahmedse/redux-persist-expire
// Definitions by: Taiju Muto <https://github.com/tai2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1
import { Transform } from "redux-persist";

export = expireReducer;

declare function expireReducer(
    key: string,
    config: expireReducer.Config
): Transform<any, any>;

declare namespace expireReducer {
    interface Config {
        persistedAtKey?: string;
        expireSeconds: number | null;
        expiredState?: any;
        autoExpire?: boolean;
    }
}
