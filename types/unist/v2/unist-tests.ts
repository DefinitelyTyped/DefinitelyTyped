import { Data, Point, Position, Node, Literal, Parent, NodeData } from 'unist';

const data: Data = {
    string: 'string',
    number: 1,
    object: {
        key: 'value',
    },
    array: [],
    boolean: true,
    null: null,
};

const point: Point = {
    line: 1,
    column: 1,
    offset: 0,
};

const position: Position = {
    start: point,
    end: point,
    indent: [1],
};

const node: Node = {
    type: 'node',
    data,
    position,
};

const text: Literal = {
    type: 'text',
    data,
    position,
    value: 'value',
};

const parent: Parent = {
    type: 'parent',
    data,
    position,
    children: [node, text],
};

const noExtraKeysInNode: Node = {
    type: 'noExtraKeysInNode',
    // @ts-expect-error
    extra: 'extra',
};

const noChildrenInNode: Node = {
    type: 'noChildrenInNode',
    // @ts-expect-error
    children: [],
};

const stringLiteral: Literal<string> = {
    type: 'text',
    data,
    position,
    value: 'value',
};

const literalParent: Parent<Literal<string>> = {
    type: 'literalParent',
    data,
    position,
    children: [stringLiteral],
};

const nodeData: Node<{ key: string }> = {
    type: 'nodeData',
    data: {
        key: 'value',
    },
};

const nodeData2: Node<{ key: string }> = {
    type: 'nodeData',
    // @ts-expect-error
    data: {},
};

// @ts-expect-error
type DataType = NodeData<Node<string>>;

const literalData: Literal<string, { key: string }> = {
    type: 'literalData',
    data: {
        key: 'value',
    },
    value: 'value',
};

const literalParentData: Parent<Literal<string>, Data> = {
    type: 'literalParent',
    data,
    position,
    children: [stringLiteral],
};

const data1 = {
    key1: 'value1',
};

const data2 = {
    key2: 'value2',
};

const nestedliteralParentData: Parent<Literal<string, typeof data1>, typeof data2> = {
    type: 'literalParent',
    data: data2,
    position,
    children: [
        {
            ...stringLiteral,
            data: data1,
        },
    ],
};

function exampleNodeUtil(node: Node) {}

const inferredNode = { type: 'example' };
const inferredNotNode = { notType: 'whoops' };

exampleNodeUtil(inferredNode);
// @ts-expect-error
exampleNodeUtil(inferredNotNode);

function exampleLiteralUtil(node: Literal) {}

const inferredLiteral = { type: 'example', value: 'value' };
const inferredNotLiteral = { type: 'example' };

exampleLiteralUtil(inferredLiteral);
// @ts-expect-error
exampleLiteralUtil(inferredNotLiteral);

function exampleParentUtil(node: Parent) {}

const inferredParent = { type: 'example', children: [inferredNode] };
const inferredNotParent = { type: 'example', children1: [] };

exampleParentUtil(inferredParent);
// @ts-expect-error
exampleParentUtil(inferredNotParent);
