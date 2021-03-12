import core = require("./core");

export = template;

declare const template: typeof withParser;

declare function withParser(parser: core.Parser): template.Template;

declare namespace template {
    interface Template {
        /** Tagged template function. Parses the string as source and returns an array of Statement AST nodes. */
        statements(...args: any[]): any;
        /** Tagged template function. Parses the string as source and returns an Statement AST node. */
        statement(...args: any[]): any;
        /** Tagged template function. Parses the string as source and returns an Expression AST node. */
        expression(...args: any[]): any;
    }
}
