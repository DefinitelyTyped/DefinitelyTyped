// Type definitions for hapi-bauth-basic 5.0.0
// Project: https://github.com/hapijs/hapi-auth-basic
// Definitions by: AJP <https://github.com/AJamesPhillips>
//                 Rodrigo Saboya <https://github.com/saboya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as Hapi from 'hapi';

declare namespace Basic {
    interface ValidateCustomResponse {
        response: any,
    }

    interface ValidateResponse {
        isValid: boolean,
        credentials?: any,
    }

    interface Validate {
        (request: Hapi.Request, username: string, password: string, h: object): Promise<ValidateResponse | ValidateCustomResponse>;
    }
}

declare var Basic: Hapi.PluginFunction<{}>;

export = Basic;
