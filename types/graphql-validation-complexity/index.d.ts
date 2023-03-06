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

export function complexityLimitExceededErrorMessage(): string;

declare class ComplexityVisitor {
    constructor(context: any, { scalarCost, objectCost, listFactor, introspectionListFactor, }: {
        scalarCost?: number;
        objectCost?: number;
        listFactor?: number;
        introspectionListFactor?: number;
    });
    context: any;
    scalarCost: number;
    objectCost: number;
    listFactor: number;
    introspectionListFactor: number;
    costFactor: number;
    cost: number;
    Field: {
        enter: () => void;
        leave: () => void;
    };
    FragmentDefinition: () => boolean;
    SelectionSet: (selectionSet: any) => any;
    flattenFragmentSpreads(selectionSet: any): any;
    enterField(): void;
    leaveField(): void;
    getFieldCostFactor(): any;
    getTypeCostFactor(type: any): any;
    isIntrospectionList({ ofType }: {
        ofType: any;
    }): boolean;
    getFieldCost(): any;
    getTypeCost(type: any): any;
    getDirectiveValue(directiveName: any): number;
    getCost(): number;
}

export { ComplexityVisitor };
