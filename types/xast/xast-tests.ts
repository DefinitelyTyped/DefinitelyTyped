import { Data, Node, Point, Position } from 'unist';
import { Parent, Attributes, Literal, Root, Element, Doctype, Comment, Text, Instruction, Cdata } from 'xast';

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

const literal: Literal = {
    type: 'text',
    data,
    point,
    value: 'value',
};

const comment: Comment = {
    type: 'comment',
    data,
    point,
    value: 'value',
};

const text: Text = {
    type: 'text',
    data,
    point,
    value: 'value',
};

const docType: Doctype = {
    type: 'doctype',
    data,
    point,
    name: 'name',
    public: 'public',
    system: 'system',
};

const cdata: Cdata = {
    type: 'cdata',
    data,
    point,
    value: 'value',
};

const instruction: Instruction = {
    type: 'instruction',
    data,
    point,
    name: 'name',
    value: 'value',
};

let element: Element = getElement();

const parent: Parent = {
    type: 'parent',
    data,
    position,
    children: [getElement(), docType, comment, text, instruction, cdata],
};

let root: Root = {
    type: 'root',
    data,
    position,
    children: [getElement(), docType, comment, text, instruction, cdata],
};

const attributes: Attributes = {
    attributeName1: 'attributeValue',
    attributeName2: null,
    attributeName3: undefined,
};

function getElement(): Element {
    return {
        type: 'element',
        name: 'name',
        attributes,
        children: [element, comment, text, cdata, instruction],
    };
}

// Test custom xast node registration
interface Custom extends Node {
    type: 'custom';
}

declare module 'xast' {
    interface RootChildMap {
        custom: Custom;
    }

    interface ElementChildMap {
        custom: Custom;
    }
}

root = {
    type: 'root',
    data,
    position,
    children: [{ type: 'custom' }],
};

element = {
    type: 'element',
    name: 'foo',
    data,
    position,
    children: [{ type: 'custom' }],
};

root = {
    type: 'root',
    data,
    position,
    // $ExpectError
    children: [{ type: 'invalid' }],
};

element = {
    type: 'element',
    name: 'foo',
    data,
    position,
    // $ExpectError
    children: [{ type: 'invalid' }],
};
