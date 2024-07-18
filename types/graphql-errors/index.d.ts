import { GraphQLSchema } from "graphql";

export type HandlerFunction = (err: Error) => Error;

export function setDefaultHandler(fn: HandlerFunction): void;

export function maskErrors(schema: GraphQLSchema, fn?: HandlerFunction): void;

export class UserError extends Error {
    constructor(message: string);
}
