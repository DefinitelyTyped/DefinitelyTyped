
export interface ASTNode {
    type: string;
    operator?: string;
    field?: string;
    value?: any;
    left?: ASTNode;
    right?: ASTNode;
    args?: ASTNode[];
    name?: string;
}

/**
 * Represents the result of the parse function.
 */
export interface ParseResult {
    ast: ASTNode;
    variables: string[];
}

/**
 * The main parse function that converts SQL-like queries into AST.
 * 
 * @param input - The SQL-like string to be parsed.
 * @param variables - The list of extracted variables during parsing.
 * @returns ParseResult - The resulting AST and extracted variables.
 */
export function parse(input: string, variables?: string[]): ParseResult;
