import { FunctionExpression, MemberExpression, Program } from "estree";
import { Stream } from "stream";
import { baseGenerator, generate } from "..";

const ast: Program = null;
const functionE: FunctionExpression = null;
const memberE: MemberExpression = null;

//should accept different nodes
generate(ast);
generate(functionE);
generate(memberE);

//options without output option should generate string
let string: string;
string = generate(ast, {
    comments: true,
    generator: baseGenerator,
    indent: "\t",
    lineEnd: "\n",
    startingIndentLevel: 42,
    sourceMap: null
});

//options with output option should return Stream
let stream: Stream;
stream = generate(ast, {
    output: new Stream()
});

//Generator should map node types to functions whose first parameter is same node type
baseGenerator.Program(ast, { write: function (s: string) { return; } });
baseGenerator.FunctionExpression(functionE, { write: function (s: string) { return; } });
baseGenerator.MemberExpression(memberE, { write: function (s: string) { return; } });
