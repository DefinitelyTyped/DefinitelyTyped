// Type definitions for css-selector-tokenizer 0.7
// Project: https://github.com/css-modules/css-selector-tokenizer
// Definitions by: Avi Vahl <https://github.com/AviVahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace cssSelectorTokenizer {
    interface BaseNode {
        name?: string;
        before?: string;
        after?: string;
    }

    /** Any node returned by `parse`. Useful for `walk` implementations. */
    type AnySelectorNode = SelectorsNode | SelectorNode | SelectorNodeType;

    interface SelectorsNode extends BaseNode {
        type: 'selectors';
        nodes: SelectorNode[];
    }

    interface SelectorNode extends BaseNode {
        type: 'selector';
        nodes: Array<SelectorNodeType>;
    }

    /** Any node that can be child of `SelectorNode`. */
    type SelectorNodeType =
        | ElementNode
        | ClassNode
        | SpacingNode
        | IdNode
        | PseudoClassNode
        | NestedPseudoClassNode
        | UniversalNode
        | AttributeNode
        | CommentNode
        | OperatorNode
        | InvalidNode
        | PseudoElementNode;

    interface ElementNode extends BaseNode {
        type: 'element';
        name: string;
        namespace?: string;
    }

    interface PseudoElementNode extends BaseNode {
        type: 'pseudo-element';
        name: string;
    }

    interface ClassNode extends BaseNode {
        type: 'class';
        name: string;
    }

    interface PseudoClassNode extends BaseNode {
        type: 'pseudo-class';
        name: string;
        content?: string;
    }

    interface AttributeNode extends BaseNode {
        type: 'attribute';
        content: string;
    }

    interface CommentNode extends BaseNode {
        type: 'comment';
        content: string;
    }

    interface NestedPseudoClassNode extends BaseNode {
        type: 'nested-pseudo-class';
        name: string;
        nodes: SelectorNode[];
    }

    interface IdNode extends BaseNode {
        type: 'id';
        name: string;
    }

    interface SpacingNode extends BaseNode {
        type: 'spacing';
        value: string;
    }

    interface UniversalNode extends BaseNode {
        type: 'universal';
        namespace?: string;
    }

    interface OperatorNode extends BaseNode {
        type: 'operator';
        operator: string;
    }

    interface InvalidNode extends BaseNode {
        type: 'invalid';
        value: string;
    }

    /** Any node returned by `parseValues`. Useful for `walk` implementations. */
    type AnyValueNode = ValuesNode | ValueNode | ValueNodeType;

    interface ValuesNode extends BaseNode {
        type: 'values';
        nodes: ValueNode[];
    }

    interface ValueNode extends BaseNode {
        type: 'value';
        nodes: ValueNodeType[];
    }

    /** Any node that can be child of `ValueNode`. */
    type ValueNodeType = ItemNode | NestedItemNode | StringNode | CommentNode | UrlNode | InvalidNode;

    interface ItemNode extends BaseNode {
        type: 'item';
        name: string;
    }

    interface NestedItemNode extends BaseNode {
        type: 'nested-item';
        name: string;
        nodes: ValueNode[];
    }

    interface UrlNode extends BaseNode {
        type: 'url';
        url: string;
        stringType?: string;
        innerSpacingBefore?: string;
        innerSpacingAfter?: string;
    }

    interface StringNode extends BaseNode {
        type: 'string';
        value: string;
        stringType: string;
    }

    function parse(selectors: string): SelectorsNode;
    function stringify(node: SelectorsNode): string;
    function parseValues(values: string): ValuesNode;
    function stringifyValues(node: ValuesNode): string;
}

export = cssSelectorTokenizer;
