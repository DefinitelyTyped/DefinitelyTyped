// Type definitions for graphql-errors 2.1
// Project: https://github.com/kadirahq/graphql-errors
// Definitions by: Matías Olivera <https://github.com/MatiasOlivera>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { GraphQLSchema } from 'graphql';

export type handlerFunction = (err: Error) => Error;

export function setDefaultHandler(fn: handlerFunction): void;

export function maskErrors(schema: GraphQLSchema, fn?: handlerFunction): void;

export class UserError extends Error {
    constructor(message: string);
}
