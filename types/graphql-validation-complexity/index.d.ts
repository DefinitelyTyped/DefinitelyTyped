// Type definitions for graphql-validation-complexity 0.4
// Project: https://github.com/4Catalyzer/graphql-validation-complexity (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Krunal G <https://github.com/krunalg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ASTNode, GraphQLError, ValidationContext } from 'graphql';

export interface Options {
    onCost?: (cost: number, context: ValidationContext) => void;
    createError?: (cost: number, node: ASTNode) => GraphQLError;
    formatErrorMessage?: (cost: number) => string;

    scalarCost?: number;
    objectCost?: number;
    listFactor?: number;
    introspectionListFactor?: number;
}

export function createComplexityLimitRule(
    maxCost: number,
    options?: Options,
): (ctx: ValidationContext) => any;
