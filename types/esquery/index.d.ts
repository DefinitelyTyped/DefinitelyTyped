// Type definitions for esquery 1.0
// Project: https://github.com/jrfeenst/esquery
// Definitions by: cherryblossom000 <https://github.com/cherryblossom000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Node } from 'estree';

export as namespace esquery;

export = query;

interface Atom { type: string; }

interface Literal extends Atom {
    type: 'literal';
    value: string | number;
}
interface StringLiteral extends Literal { value: string; }
interface NumericLiteral extends Literal { value: number; }
interface RegExpSelector extends Atom {
    type: 'regexp';
    value: RegExp;
}

interface Nth extends query.Selector { index: NumericLiteral; }
interface BinarySelector extends query.Selector {
    type: 'child' | 'sibling' | 'adjacent' | 'descendant';
    left: query.Selector;
    right: query.Selector;
}
interface MultiSelector extends query.Selector {
    selectors: query.Selector[];
}

/** Query the code AST using the selector string. */
declare function query(ast: Node, selector: string): Node[];

declare namespace query {
    /** Parse a selector and return its AST. */
    function parse(selector: string): Selector | undefined;
    /** From a JS AST and a selector AST, collect all JS AST nodes that match the selector. */
    function match(ast: Node, selector: Selector): Node[];
    /** Given a `node` and its ancestors, determine if `node` is matched by `selector`. */
    function matches(node: Node, selector: Selector, ancestry: Node[]): boolean;
    /** Query the code AST using the selector string. */
    function query(ast: Node, selector: string): Node[];

    interface Selector extends Atom { subject?: boolean; }

    interface Field extends Atom {
        type: 'field';
        name: string;
    }
    interface Type extends Atom {
        type: 'type';
        value: string;
    }
    interface Sequence extends MultiSelector { type: 'compound'; }
    interface Identifier extends Selector {
        type: 'identifier';
        value: string;
    }
    interface Wildcard extends Selector {
        type: 'wildcard';
        value: '*';
    }
    interface Attribute extends Selector {
        type: 'attribute';
        name: string;
        operator?: '=' | '!=' | '>' | '<' | '>=' | '<=';
        value?: Literal | RegExpSelector | Type;
    }
    interface NthChild extends Nth { type: 'nth-child'; }
    interface NthLastChild extends Nth { type: 'nth-last-child'; }
    interface Descendant extends BinarySelector { type: 'descendant'; }
    interface Child extends BinarySelector { type: 'child'; }
    interface Sibling extends BinarySelector { type: 'sibling'; }
    interface Adjacent extends BinarySelector { type: 'adjacent'; }
    interface Negation extends MultiSelector { type: 'not'; }
    interface Matches extends MultiSelector { type: 'matches'; }
    interface Has extends MultiSelector { type: 'has'; }
    interface Class extends Atom {
        type: 'class';
        name: 'declaration' | 'expression' | 'function' | 'pattern' | 'statement';
    }
}
