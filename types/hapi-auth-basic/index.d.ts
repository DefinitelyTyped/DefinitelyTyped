// Type definitions for hapi-bauth-basic 5.0.0
// Project: https://github.com/hapijs/hapi-auth-basic
// Definitions by: AJP <https://github.com/AJamesPhillips>
//                 Rodrigo Saboya <https://github.com/saboya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Plugin, Request, ResponseToolkit } from 'hapi';

declare namespace Basic {
    interface ValidateCustomResponse {
        response: any,
    }

    interface ValidateResponse {
        isValid: boolean,
        credentials?: any,
    }

    interface Validate {
        (request: Request, username: string, password: string, h: ResponseToolkit): Promise<ValidateResponse | ValidateCustomResponse>;
    }
}

declare var Basic: Plugin<{}>;

export = Basic;
