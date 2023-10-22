import {
    appendToNode,
    Attr,
    Attrs,
    attrsToString,
    attrValue,
    getNodeLength,
    getUniqAttr,
    isEOL,
    isStringNode,
    isTagNode,
    keysReduce,
    Node,
    TagNode,
} from "@bbob/plugin-helper";

const attrs: Attrs = {};

// TagNode.d.ts

// $ExpectType Attr | null
keysReduce<Attr | null>(
    attrs,
    (res, key) => (attrs[key] === key ? attrs[key] : null),
    null,
);

// $ExpectType string[]
keysReduce(
    attrs,
    (arr, key) => [...arr, attrValue(key, attrs[key])],
    [""],
);

// $ExpectType TagNode
const tagNode = TagNode.create("test", { test: 1 }, ["Hello"]);

// $ExpectType boolean
TagNode.isOf(tagNode, "test");

// helpers.d.ts

// $ExpectType TagNode
const node = new TagNode("a", {}, []);

// $ExpectType void
appendToNode(node, "test");

// $ExpectType Node | undefined
node.content?.pop();

// $ExpectType number
getNodeLength(node);

// $ExpectType boolean
isTagNode(node);

// $ExpectType boolean
isStringNode(node);

// $ExpectType string
attrValue("test", true);

// $ExpectType string
attrValue("test", 123);

// $ExpectType string
attrValue("test", "hello");

// $ExpectType string
attrValue("test", { tag: "test" });

// $ExpectType boolean
isEOL("\n");

// $ExpectType string
attrsToString({
    tag: "test",
    foo: "bar",
    disabled: true,
});

// $ExpectType string
attrsToString(null);

// $ExpectType Attr | null
getUniqAttr({ foo: true, "http://bar.com": "http://bar.com" });

// $ExpectType Attr | null
getUniqAttr({ foo: true });
