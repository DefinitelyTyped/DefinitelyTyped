// Type definitions for swagger-express-validator 1.0
// Project: https://github.com/gargol/swagger-express-validator
// Definitions by: Pinguet62 <https://github.com/pinguet62>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Request, RequestHandler } from "express";

declare function SwaggerExpressValidator(options: SwaggerExpressValidator.Options): RequestHandler;

declare namespace SwaggerExpressValidator {
    interface Options {
        schema: any;
        validateRequest?: boolean | undefined;
        validateResponse?: boolean | undefined;
        allowNullable?: boolean | undefined;
        requestValidationFn?: ((req: Request, data: any, errors: any) => void) | undefined;
        responseValidationFn?: ((req: Request, data: any, errors: any) => void) | undefined;
    }

    function validator(options: Options): RequestHandler;
}

export = SwaggerExpressValidator;
