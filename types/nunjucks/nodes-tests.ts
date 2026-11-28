import { ExpressionNode, nodes, NodeType, parser } from "nunjucks";

const text: nodes.Literal = new nodes.Literal(0, 0, "hello");
const number: nodes.Literal = new nodes.Literal(0, 0, 42);
new nodes.Literal(0, 0, true);
new nodes.Literal(0, 0, null);
new nodes.Literal(0, 0, /hello/i);
// @ts-expect-error
new nodes.Literal(0, 0, {});
const symbol = new nodes.Symbol(0, 0, "name");
// @ts-expect-error
new nodes.Symbol(0, 0, 42);
const list: nodes.NodeList = new nodes.NodeList(0, 0, [text, symbol]);
list.addChild(number);
// $ExpectType "NodeList"
list.typename;
// $ExpectType number | undefined
list.lineno;
// $ExpectType "Literal"
text.typename;
// $ExpectType "value"[]
text.fields;
// $ExpectType LiteralValue
text.value;
text.iterFields((value, field) => {
    // $ExpectType LiteralValue
    value;
    // $ExpectType "value"
    field;
});
// $ExpectType Symbol[]
list.findAll(nodes.Symbol);
const results: nodes.Symbol[] = [];
list.findAll(nodes.Symbol, results);
list.findAll(nodes.Symbol, null);
list.findAll(nodes.Node);
// @ts-expect-error
list.findAll(nodes.Symbol, [text]);

// The base class has no field definition and cannot be instantiated directly.
// @ts-expect-error
new nodes.Node();
new nodes.Value();
new nodes.Root(0, 0, [list]);
new nodes.Group(0, 0, [number]);
new nodes.Array(0, 0, [number]);
const pair = new nodes.Pair(0, 0, symbol, number);
new nodes.Dict(0, 0, [pair]);
new nodes.KeywordArgs(0, 0, [pair]);
// @ts-expect-error
new nodes.Dict<"Dict">(0, 0, [symbol]);
new nodes.LookupVal(0, 0, symbol, text);
const conditional = new nodes.If(0, 0, symbol, list);
new nodes.If(0, 0, symbol, list, conditional);
new nodes.IfAsync(0, 0, symbol, list, list);
new nodes.InlineIf(0, 0, symbol, text, number);
new nodes.For(0, 0, symbol, symbol, list, list);
new nodes.AsyncEach(0, 0, symbol, new nodes.Array(), list);
new nodes.AsyncAll(0, 0, symbol, symbol, list);
new nodes.Macro(0, 0, symbol, list, list);
new nodes.Caller(0, 0, symbol, list, list);
new nodes.Import(0, 0, text, symbol, true);
const fromImport = new nodes.FromImport();
// $ExpectType NodeList<"NodeList", NodeType>
fromImport.names;
new nodes.FromImport(0, 0, text, list, false);
new nodes.FunCall(0, 0, symbol, list);
new nodes.Filter(0, 0, symbol, list);
new nodes.FilterAsync(0, 0, symbol, list, symbol);
// @ts-expect-error
new nodes.Filter(0, 0, number, list);
new nodes.Block(0, 0, symbol, list);
new nodes.Super(0, 0, symbol, symbol);
const extendsNode: nodes.TemplateRef<"Extends"> = new nodes.Extends(0, 0, text);
new nodes.Include(0, 0, text, true);
// @ts-expect-error
new nodes.Include(0, 0, text, symbol);
const set = new nodes.Set(0, 0, [symbol], number);
set.body = new nodes.Capture(0, 0, list);
new nodes.Switch(0, 0, symbol, [new nodes.Case(0, 0, number, list)], list);
new nodes.Output(0, 0, [text]);
new nodes.TemplateData(0, 0, "hello");
new nodes.BinOp(0, 0, number, number);
new nodes.In(0, 0, number, list);
new nodes.Is(0, 0, number, symbol);
new nodes.Or(0, 0, symbol, number);
new nodes.And(0, 0, symbol, number);
new nodes.Not(0, 0, symbol);
new nodes.Add(0, 0, number, number);
new nodes.Concat(0, 0, text, text);
new nodes.Sub(0, 0, number, number);
new nodes.Mul(0, 0, number, number);
new nodes.Div(0, 0, number, number);
new nodes.FloorDiv(0, 0, number, number);
new nodes.Mod(0, 0, number, number);
new nodes.Pow(0, 0, number, number);
new nodes.Neg(0, 0, number);
new nodes.Pos(0, 0, number);
new nodes.Compare(0, 0, number, [new nodes.CompareOperand(0, 0, number, "==")]);

const extension = {
    __name: "example",
    run() {
        return "hello";
    },
};
const call = new nodes.CallExtension(extension, "run", list, [list, null]);
// $ExpectType "run"
call.prop;
new nodes.CallExtension("example", "run");
new nodes.CallExtensionAsync(extension, "run", null, null);
// @ts-expect-error
new nodes.CallExtension(extension, "missing");
nodes.printNodes(list, 2);

function narrow(node: NodeType) {
    if (node.typename === "Symbol") {
        // $ExpectType Symbol
        node;
        // $ExpectType string | null
        node.value;
    }
    if (node.typename === "Include") {
        // $ExpectType boolean | null
        node.ignoreMissing;
    }
}
function expression(node: ExpressionNode) {
    if (node.typename === "Literal") {
        // $ExpectType Literal<"Literal", LiteralValue>
        node;
    }
}
const ast = parser.parse("Hello {{ name }}");
// $ExpectType Root
ast;
