import Snapdragon = require("snapdragon");

// Constructor
const snapdragon = new Snapdragon();
const snapdragonWithOpts = new Snapdragon({ source: "test.js" });

// Properties
const isSD: boolean = snapdragon.isSnapdragon;

// use
snapdragon.use(sd => {
    sd.define("custom", true);
});

// define
snapdragon.define("foo", "bar");

// Parser
const parser = snapdragon.parser;
const isParser: boolean = parser.isParser;

parser.set("text", function() {
    const match = this.match(/^[^{}]+/);
    if (match) {
        return this.node(match[0], "text");
    }
});

parser.set("open", function() {
    const match = this.match(/^\{/);
    if (match) {
        return this.node(match[0], "open");
    }
});

parser.set("close", function() {
    const match = this.match(/^\}/);
    if (match) {
        return this.node(match[0], "close");
    }
});

// Parser methods
const ast = snapdragon.parse("{foo}");
const rootType: string = ast.type;

// Parser instance methods
const prevNode: Snapdragon.Node | undefined = parser.prev();
const prevN: Snapdragon.Node | undefined = parser.prev(2);
const isInside: boolean = parser.isInside("brace");
parser.consume(3);
const matched: RegExpMatchArray | null = parser.match(/test/);

// Compiler
const compiler = snapdragon.compiler;
const isCompiler: boolean = compiler.isCompiler;

compiler.set("text", node => {
    compiler.emit(node.value);
});

compiler.set("open", node => {
    compiler.emit(node.value, node);
});

compiler.set("close", node => {
    compiler.emit(node.value, node);
});

// Compile
const result = snapdragon.compile(ast);
const output: string = result.output;

// Render
const rendered: string = snapdragon.render("{foo}", { source: "test" });

// Compiler methods
compiler.define("helper", true);
const fn: Snapdragon.CompilerFn = compiler.get("text");
compiler.visit(ast);
compiler.mapVisit(ast);
const emitted: string = compiler.emit("test");
const errObj: Error = compiler.error("bad node");

// Node API
const node = parser.node("test", "text");
const nodeIsNode: boolean = node.isNode;
const nodeType: string = node.type;
const nodeVal: string = node.value;

node.push(parser.node("child", "text"));
node.unshift(parser.node("first", "text"));
const popped: Snapdragon.Node | undefined = node.pop();
const shifted: Snapdragon.Node | undefined = node.shift();

const found: Snapdragon.Node | null = node.find("text");
const cloned: Snapdragon.Node = node.clone();
const str: string = node.stringify();

const nodeIsType: boolean = node.isType("text");
const nodeHasType: boolean = node.hasType("text");
const nodeIsEmpty: boolean = node.isEmpty();
const nodeIsInsideType: boolean = node.isInside("brace");

const siblings: Snapdragon.Node[] | null = node.siblings;
const idx: number = node.index;
const prevSibling: Snapdragon.Node | null = node.prev;
const nextSibling: Snapdragon.Node | null = node.next;
const firstChild: Snapdragon.Node | null = node.first;
const lastChild: Snapdragon.Node | null = node.last;
const depth: number = node.depth;
const size: number = node.size;

// Parsers and compilers access
const parsersObj: { [type: string]: Snapdragon.ParserFn } = snapdragon.parsers;
const compilersObj: { [type: string]: Snapdragon.CompilerFn } = snapdragon.compilers;

// Static classes
const customCompiler = new Snapdragon.Compiler({ source: "test" }, { inside: {} });
const customParser = new Snapdragon.Parser({ source: "test" });
