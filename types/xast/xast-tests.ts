import {
    Attributes,
    Cdata,
    Comment,
    Data,
    Doctype,
    Element,
    Instruction,
    Literal,
    Node,
    Parent,
    Root,
    Text,
} from "xast";

const data: Data = {};

const position = {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 2, offset: 1 },
};

const literal: Literal = {
    type: "whatever",
    value: "value",
    position,
    data,
};

const comment: Comment = {
    type: "comment",
    value: "value",
    position,
    data,
};

const text: Text = {
    type: "text",
    value: "value",
    position,
    data,
};

const doctype: Doctype = {
    type: "doctype",
    name: "name",
    public: "public",
    system: "system",
    position,
    data,
};

const cdata: Cdata = {
    type: "cdata",
    value: "value",
    position,
    data,
};

const instruction: Instruction = {
    type: "instruction",
    name: "name",
    value: "value",
    position,
    data,
};

const attributes: Attributes = {
    attributeName1: "attributeValue",
    attributeName2: null,
    attributeName3: undefined,
    // @ts-expect-error: only nullish strings are allowed.
    attributeName4: 1,
};

const element: Element = {
    type: "element",
    name: "x",
    attributes,
    children: [{ type: "element", name: "y", attributes: {}, children: [] }, comment, text, cdata, instruction],
};

const elementWithWrongChild: Element = {
    type: "element",
    name: "z",
    attributes: {},
    children: [
        // @ts-expect-error: doctypes are not valid in elements.
        doctype,
    ],
};

const parent: Parent = {
    type: "whatever",
    data,
    position,
    children: [element, doctype, comment, text, instruction, cdata],
};

const root: Root = {
    type: "root",
    data,
    position,
    children: [element, doctype, comment, text, instruction, cdata],
};

// Test custom xast node registration.
interface Custom extends Node {
    type: "custom";
}

declare module "xast" {
    interface RootContentMap {
        custom: Custom;
    }

    interface ElementContentMap {
        custom: Custom;
    }
}

const rootOther: Root = {
    type: "root",
    data,
    position,
    children: [{ type: "custom" }],
};

const elementOther: Element = {
    type: "element",
    name: "foo",
    attributes: { key: "value" },
    data,
    position,
    children: [{ type: "custom" }],
};

const rootAnother: Root = {
    type: "root",
    data,
    position,
    children: [
        // @ts-expect-error: node not registered in `RootContentMap`.
        { type: "invalid" },
    ],
};

const elementAnother: Element = {
    type: "element",
    name: "foo",
    data,
    position,
    children: [
        // @ts-expect-error: node not registered in `ElementContentMap`.
        { type: "invalid" },
    ],
};

// Register a field on `Data`, which will be available on all nodes.
declare module "xast" {
    interface Data {
        someField?: string | undefined;
    }

    interface CommentData {
        someOtherField?: number | undefined;
    }
}

const textWithData: Text = {
    type: "text",
    value: "value",
    data: {
        someField: "a",
        // @ts-expect-error: not registered on all xast nodes.
        someOtherField: 1,
    },
};

const textWithOtherData: Text = {
    type: "text",
    value: "value",
    data: {
        someField: "a",
        // @ts-expect-error: not registered on text nodes.
        someUnknownField: true,
    },
};

const commentWithData: Comment = {
    type: "comment",
    value: "value",
    data: {
        someField: "a",
        someOtherField: 1,
        // @ts-expect-error: not registered.
        someUnknownField: true,
    },
};
