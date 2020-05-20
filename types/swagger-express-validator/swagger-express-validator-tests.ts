import { Request } from "express";
import { Options } from "swagger-express-validator";
import validator = require("swagger-express-validator");

const options: Options = {
    schema: 'string'
};
validator(options);

// minimal required parameter
validator({
    schema: 'string'
});

// all parameters
validator({
    schema: 'string',
    validateRequest: true,
    validateResponse: true,
    allowNullable: true,
    requestValidationFn: (req: Request, data: any, errors: any) => {
    },
    responseValidationFn: (req: Request, data: any, errors: any) => {
    }
});
