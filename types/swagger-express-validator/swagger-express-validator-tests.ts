import { Request } from 'express';
import { Options } from 'swagger-express-validator';
import validator = require('swagger-express-validator');

const options: Options = {
    schema: 'string',
};
validator(options);

// minimal required parameter
validator({
    schema: 'string',
});

const complexOpts = {
    swagger: '2.0',
    info: {
        title: 'Basic API',
        version: '1.0.0',
    },
    host: 'localhost',
    schemes: ['https'],
    consumes: ['application/json'],
    produces: ['application/json'],
};

validator({ schema: complexOpts });

// all parameters
validator({
    schema: 'string',
    validateRequest: true,
    validateResponse: true,
    allowNullable: true,
    requestValidationFn: (req: Request, data: any, errors: any) => {},
    responseValidationFn: (req: Request, data: any, errors: any) => {},
});
