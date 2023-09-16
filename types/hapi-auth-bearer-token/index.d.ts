// Type definitions for hapi-auth-bearer-token 6.1
// Project: https://github.com/johnbrett/hapi-auth-bearer-token
// Definitions by: Rodrigo Saboya <https://github.com/saboya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.9

import { AuthenticationData, Plugin, Request, ResponseToolkit } from "@hapi/hapi";

type ValidateReturn = AuthenticationData & { isValid: boolean };

declare module "@hapi/hapi" {
    interface ServerAuth {
        strategy(name: string, scheme: "bearer-access-token", options: BearerToken.SchemaOptions): void;
    }
}

declare namespace BearerToken {
    interface SchemaOptions {
        validate: Validate;
        accessTokenName?: string | undefined;
        allowQueryToken?: boolean | undefined;
        allowCookieToken?: boolean | undefined;
        allowMultipleHeaders?: boolean | undefined;
        allowChaining?: boolean | undefined;
        tokenType?: string | undefined;
        unauthorized?: ((message: string | null, scheme: string) => any) | undefined;
    }

    type Validate = (request: Request, token: string, h: ResponseToolkit) => Promise<ValidateReturn> | ValidateReturn;
}

declare var BearerToken: Plugin<{}>;

export = BearerToken;
