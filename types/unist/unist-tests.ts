import { Data, Point, Position, Node, Literal, Parent } from 'unist';

const data: Data = {
    string: 'string',
    number: 1,
    object: {
        key: 'value'
    },
    array: [],
    boolean: true,
    null: null
};

const point: Point = {
    line: 1,
    column: 1,
    offset: 0
};

const position: Position = {
    start: point,
    end: point,
    indent: [1]
};

const node: Node = {
    type: 'node',
    data,
    position
};

const text: Literal = {
    type: 'text',
    data,
    position,
    value: 'value'
};

const parent: Parent = {
    type: 'parent',
    data,
    position,
    children: [node, text]
};
