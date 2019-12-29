// Type definitions for swagger-express-validator 0.0
// Project: https://github.com/gargol/swagger-express-validator
// Definitions by: Pinguet62 <https://github.com/pinguet62>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Request, RequestHandler } from "express";

declare function SwaggerExpressValidator(options: SwaggerExpressValidator.Options): RequestHandler;

declare namespace SwaggerExpressValidator {
    interface Options {
        schema: string;
        validateRequest?: boolean;
        validateResponse?: boolean;
        allowNullable?: boolean;
        requestValidationFn?: (req: Request, data: any, errors: any) => void;
        responseValidationFn?: (req: Request, data: any, errors: any) => void;
    }

    function validator(options: Options): RequestHandler;
}

export = SwaggerExpressValidator;
