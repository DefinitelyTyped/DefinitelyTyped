// Type definitions for json-to-ast 2.1
// Project: https://github.com/vtrushin/json-to-ast
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace parse {
    interface Options {
        /**
         * Appends location information.
         *
         * @default true
         */
        loc?: boolean;

        /**
         * Appends source information to node’s location.
         *
         * @default null
         */
        source?: string;
    }

    type ValueNode = ObjectNode | ArrayNode | LiteralNode;

    interface Position {
        line: number;
        column: number;
        offset: number;
    }

    interface Location {
        start: Position;
        end: Position;
        source: string | null;
    }

    interface ASTNode {
        type: string;
        loc?: Location;
    }

    interface ObjectNode extends ASTNode {
        type: "Object";
        children: PropertyNode[];
    }

    interface PropertyNode extends ASTNode {
        type: "Property";
        key: IdentifierNode;
        value: ValueNode;
    }

    interface IdentifierNode extends ASTNode {
        type: "Identifier";
        value: string;
        raw: string;
    }

    interface ArrayNode extends ASTNode {
        type: "Array";
        children: ValueNode[];
    }

    interface LiteralNode extends ASTNode {
        type: "Literal";
        value: string | number | boolean | null;
        raw: string;
    }
}

declare function parse(json: string, settings?: parse.Options): parse.ValueNode;

export = parse;
export as namespace jsonToAst;
