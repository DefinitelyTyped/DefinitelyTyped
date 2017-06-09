// Type definitions for hapi 4.2
// Project: https://github.com/hapijs/hapi-auth-basic
// Definitions by: AJP <https://github.com/AJamesPhillips>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Hapi from 'hapi';

declare namespace Basic {
    interface ValidateFuncCallback {
        (err: Error | null, isValid: boolean, userCredentials?: any): void;
    }

    interface ValidateFunc {
        (request: Hapi.Request, username: string, password: string, callback: ValidateFuncCallback): void;
    }
}

declare var Basic: Hapi.PluginFunction<{}>;

export = Basic;
