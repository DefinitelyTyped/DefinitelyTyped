import * as Unist from 'unist';

const data: Unist.Data = {
    string: 'string',
    number: 1,
    object: {
        key: 'value',
    },
    array: [],
    boolean: true,
    null: null,
};

const point: Unist.Point = {
    line: 1,
    column: 1,
    offset: 0,
};

const position: Unist.Position = {
    start: point,
    end: point,
    indent: [
        1,
    ],
};

const node: Unist.Node = {
    type: 'node',
    data,
    position,
};

const text: Unist.Text = {
    type: 'text',
    data,
    position,
    value: 'value',
};

const parent: Unist.Parent = {
    type: 'parent',
    data,
    position,
    children: [
        node,
        text,
    ],
};
