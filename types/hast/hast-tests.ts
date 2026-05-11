import { Comment, Data, Doctype, Element, Literal, Node, Parent, Properties, Root, Text } from "hast";

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
    position,
    data,
};

const properties: Properties = {
    propertyName1: "propertyValue1",
    propertyName2: ["propertyValue2", "propertyValue3"],
    propertyName3: true,
    propertyName4: 47,
    propertyName5: [4, "4"],
    propertyName6: null,
    propertyName7: undefined,
};

const element: Element = {
    type: "element",
    tagName: "x",
    properties,
    children: [{ type: "element", tagName: "y", properties: {}, children: [] }, comment, text],
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
    children: [element, doctype, comment, text],
};

const root: Root = {
    type: "root",
    data,
    position,
    children: [element, doctype, comment, text],
};

// Test custom hast node registration.
interface Custom extends Node {
    type: "custom";
}

declare module "hast" {
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
    tagName: "foo",
    properties: { key: "value" },
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
declare module "hast" {
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
        // @ts-expect-error: registered on comments, not on texts.
        someOtherField: 1,
    },
};

const textWithOtherData: Text = {
    type: "text",
    value: "value",
    data: {
        someField: "a",
        // @ts-expect-error: not registered.
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
