import { getLocation } from '../language';
import { ASTNode } from '../language/ast';
import { Source } from '../language/source';

/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
export class GraphQLError extends Error {

    /**
     * A message describing the Error for debugging purposes.
     *
     * Enumerable, and appears in the result of JSON.stringify().
     */
    message: string;

    /**
     * An array of { line, column } locations within the source GraphQL document
     * which correspond to this error.
     *
     * Errors during validation often contain multiple locations, for example to
     * point out two things with the same name. Errors during execution include a
     * single location, the field which produced the error.
     *
     * Enumerable, and appears in the result of JSON.stringify().
     */
    locations?: Array<{ line: number, column: number }> | undefined;

    /**
     * An array describing the JSON-path into the execution response which
     * corresponds to this error. Only included for errors during execution.
     *
     * Enumerable, and appears in the result of JSON.stringify().
     */
    path?: Array<string | number> | undefined;

    /**
     * An array of GraphQL AST Nodes corresponding to this error.
     */
    nodes?: Array<ASTNode> | undefined;

    /**
     * The source GraphQL document corresponding to this error.
     */
    source?: Source | undefined;

    /**
     * An array of character offsets within the source GraphQL document
     * which correspond to this error.
     */
    positions?: Array<number> | undefined;

    /**
     * The original error thrown from a field resolver during execution.
     */
    originalError?: Error;

    constructor(
        message: string,
        nodes?: Array<any>,
        source?: Source,
        positions?: Array<number>,
        path?: Array<string | number>,
        originalError?: Error,
    );
}
