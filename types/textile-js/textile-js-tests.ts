import textile = require("textile-js");

const txt = "h1. Hello World";
const opt: textile.Options = { breaks: true };

const rendered: string = textile(txt, opt);

const parsed: string = textile.parse(txt, opt);
const converted: string = textile.convert(txt, opt);

const doc: textile.JMLDocument = textile.jsonml(txt, opt);
const serializedDoc: string = textile.serialize(doc);

const node: textile.JMLElement = ["p", { class: "intro", "data-id": 1 }, "Hello"];
const serializedNode: string = textile.serialize(node);

const textOnlySerialized: string = textile.serialize("plain text");

const defaults: textile.Options = textile.defaults;
const chained: typeof textile = textile.setOptions(defaults).setoptions({ breaks: false });

const tokens: textile.Token[] = [
    { type: "OPEN", tag: "p", pos: 0, src: "<p>" },
    { type: "TEXT", data: "Hello", pos: 3, src: "Hello" },
    { type: "CLOSE", tag: "p", pos: 8, src: "</p>" },
];

const parsedNode: textile.JMLNode = textile.html_parser(tokens);
const parsedNodeLazy: textile.JMLNode = textile.html_parser(tokens, true);

void rendered;
void parsed;
void converted;
void serializedDoc;
void serializedNode;
void textOnlySerialized;
void chained;
void parsedNode;
void parsedNodeLazy;
