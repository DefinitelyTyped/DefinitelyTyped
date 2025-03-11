import { ASTNode } from "./parser.js";


export interface ResultObject {
    [key: string]: any;
}

export type DevExpressFilter = any[] | null;

export interface ConvertOptions {
    ast: ASTNode;
    resultObject?: ResultObject;
    enableShortCircuit?: boolean;
}

/**
 * Converts an abstract syntax tree (AST) to DevExpress filter format.
 * This function uses short-circuit evaluation for optimization.
 *
 * @param options - The conversion options containing AST, result object, and short-circuit flag.
 * @returns DevExpressFilter - The DevExpress compatible filter array or null.
 */
export function convertToDevExpressFormat(options: ConvertOptions): DevExpressFilter;
