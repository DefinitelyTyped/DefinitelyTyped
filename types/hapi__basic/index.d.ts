// Type definitions for @hapi/basic 5.1
// Project: https://github.com/hapijs/basic
// Definitions by: AJP <https://github.com/AJamesPhillips>
//                 Rodrigo Saboya <https://github.com/saboya>
//                 Silas Rech <https://github.com/lenovouser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { Plugin, Request, ResponseToolkit, Lifecycle } from '@hapi/hapi';

declare namespace Basic {
    interface ValidateCustomResponse {
        response: Lifecycle.ReturnValue;
    }

    interface ValidateResponse {
        isValid: boolean;
        credentials?: unknown;
    }

    interface Validate {
        (request: Request, username: string, password: string, h: ResponseToolkit): Promise<ValidateResponse | ValidateCustomResponse>;
    }
}

declare var Basic: Plugin;

export = Basic;
