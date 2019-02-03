import { Parser } from "recast";

export interface Template {
    /** Tagged template function. Parses the string as source and returns an array of Statement AST nodes. */
    statements(...args: any[]): any;
    /** Tagged template function. Parses the string as source and returns an Statement AST node. */
    statement(...args: any[]): any;
    /** Tagged template function. Parses the string as source and returns an Expression AST node. */
    expression(...args: any[]): any;
}

export default function withParser(parser: Parser): Template;

export { }; // to shut off automatic exporting
