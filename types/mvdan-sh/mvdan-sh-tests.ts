import sh = require('mvdan-sh');
import { LangVariant, Node } from 'mvdan-sh';

// LangVariant isn't really exported by `mvdan-sh`.
// Therefore, it's value is expected to not be accessible.
// This statement should cause an error:
// @ts-expect-error
LangVariant;

// However, this statement should work:
const variant = LangVariant.LangBash;

const { syntax } = sh;

const node: Node = syntax
    .NewParser(syntax.KeepComments(true), syntax.StopAt('$$'), syntax.Variant(variant))
    .Parse(`yarn`);

syntax
    .NewPrinter(
        syntax.Indent(0),
        syntax.BinaryNextLine(true),
        syntax.SwitchCaseIndent(false),
        syntax.SpaceRedirects(false),
        syntax.KeepPadding(false),
        syntax.Minify(false),
        syntax.FunctionNextLine(false),
    )
    .Print(node);

// Test the methods of Parser.
// The following tests are ported from https://github.com/mvdan/sh/blob/master/_js/testmain.js
const parser = syntax.NewParser();
const lines = [
    "foo\n",
    "bar; baz\n"
];

// Test parser.InteractiveStep
for (const line of lines) {
    const stmts = parser.InteractiveStep(line); // $ExpectType Stmt[]
}

const src = {
    read: (size?: number): string | null => {
        if (lines.length === 0) {
            return null;
        }
        return lines.shift()!;
    }
};

// Test parser.Interactive && parser.Incomplete
parser.Interactive(src, (stmts: sh.Stmt[]) => {
    const incomplete = parser.Incomplete(); // $ExpectType boolean
    return true;
});

// Test syntax.IsIncomplete
try {
    parser.Parse("echo ${", "src");
} catch (err) {
    syntax.IsIncomplete(err); // $ExpectType boolean
}
