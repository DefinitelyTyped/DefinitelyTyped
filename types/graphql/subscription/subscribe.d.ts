import { GraphQLSchema } from "../type/schema";
import { DocumentNode } from "../language/ast";
import { GraphQLFieldResolver } from "../type/definition";
import { ExecutionResult } from "../execution/execute";

export function subscribe(
    schema: GraphQLSchema,
    document: DocumentNode,
    rootValue?: any,
    contextValue?: any,
    variableValues?: {
        [key: string]: any;
    },
    operationName?: string,
    fieldResolver?: GraphQLFieldResolver<any, any>,
    subscribeFieldResolver?: GraphQLFieldResolver<any, any>
): Promise<AsyncIterator<ExecutionResult> | ExecutionResult>;

export function createSourceEventStream(
    schema: GraphQLSchema,
    document: DocumentNode,
    rootValue?: any,
    contextValue?: any,
    variableValues?: {
        [key: string]: any;
    },
    operationName?: string,
    fieldResolver?: GraphQLFieldResolver<any, any>
): Promise<AsyncIterable<any>>;
