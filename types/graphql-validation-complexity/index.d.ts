import type { ASTNode, GraphQLError, ValidationContext } from "graphql";

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
    constructor(context: any, { scalarCost, objectCost, listFactor, introspectionListFactor }: {
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
