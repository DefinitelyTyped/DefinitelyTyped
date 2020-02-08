import { Data, Point, Position } from 'unist';
import { Parent, Properties, Literal, Root, Element, DocType, Comment, Text } from 'hast';

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

const docType: DocType = {
    type: 'doctype',
    name: 'name',
    public: 'public',
    system: 'system',
};

const element: Element = getElement();

const parent: Parent = {
    type: 'parent',
    data,
    position,
    children: [getElement(), docType, comment, text],
};

const root: Root = {
    type: 'root',
    data,
    position,
    children: [getElement(), docType, comment, text],
};

const properties: Properties = {
    propertyName1: 'propertyValue1',
    propertyName2: ['propertyValue2', 'propertyValue3'],
    propertyName3: true,
    propertyName4: 47,
};

function getElement(): Element {
    return {
        type: 'element',
        tagName: 'tagName',
        properties,
        content: root,
        children: [element, comment, text],
    };
}
