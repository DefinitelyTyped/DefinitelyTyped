// Type definitions for @hapi/basic 5.1
// Project: https://github.com/hapijs/basic
// Definitions by: AJP <https://github.com/AJamesPhillips>
//                 Rodrigo Saboya <https://github.com/saboya>
//                 Silas Rech <https://github.com/lenovouser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Plugin, Request, ResponseToolkit } from '@hapi/hapi';

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
