import { DevExpressFilter, ResultObject } from "./core/converter.js";
import { ASTNode, ParseResult } from "./core/parser.js";

/**
 * Converts an SQL-like filter string into an Abstract Syntax Tree (AST).
 * It also extracts variables from placeholders like `{CustomerID}` or pipe-separated sections.
 * Optionally logs the conversion process if `enableConsoleLogs` is `true`.
 *
 * Example:
 * ```
 * const { ast, variables } = convertSQLToAst("ID = {CustomerID} AND Status = {OrderStatus}");
 * console.log(ast);
 * console.log(variables);
 * ```
 *
 * @param filterString - The raw SQL-like filter string.
 * @param enableConsoleLogs - Whether to log the parsing and sanitization process.
 * @returns ParseResult - The AST and extracted variables.
 */
export function convertSQLToAst(filterString: string, enableConsoleLogs?: boolean): ParseResult;


/**
 * Converts an Abstract Syntax Tree (AST) into a DevExpress-compatible filter format.
 * Optionally supports a result object for dynamic value resolution and short-circuit evaluation.
 *
 * Example:
 * ```
 * const filter = convertAstToDevextreme(ast, state, true);
 * console.log(filter);
 * ```
 *
 * @param ast - The parsed AST from `convertSQLToAst`.
 * @param state - An optional result object to resolve placeholders to actual values.
 * @param enableShortCircuit - Whether to apply short-circuit evaluation.
 * @returns DevExpressFilter - The DevExpress-compatible filter array or null.
 */
export function convertAstToDevextreme(
    ast: ASTNode,
    state?: ResultObject | null,
    enableShortCircuit?: boolean
): DevExpressFilter;
