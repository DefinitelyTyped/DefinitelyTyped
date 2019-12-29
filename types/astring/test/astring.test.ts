import { baseGenerator, generate } from "astring";
import { FunctionExpression, MemberExpression, Program } from "estree";
import { Stream } from "stream";

const ast: Program = null;
const functionE: FunctionExpression = null;
const memberE: MemberExpression = null;

// should accept different nodes
generate(ast);
generate(functionE);
generate(memberE);

// options without output option should generate string
const string: string = generate(ast, {
    comments: true,
    generator: baseGenerator,
    indent: "\t",
    lineEnd: "\n",
    startingIndentLevel: 42,
    sourceMap: null
});

// options with output option should return Stream
const stream: Stream = generate(ast, {
    output: new Stream()
});

// Generator should map node types to functions whose first parameter is same node type
baseGenerator.Program(ast, { write(s: string) { return; } });
baseGenerator.FunctionExpression(functionE, { write(s: string) { return; } });
baseGenerator.MemberExpression(memberE, { write(s: string) { return; } });
