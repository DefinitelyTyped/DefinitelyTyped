import sh = require("mvdan-sh");
import { LangVariant, Node, ParNamesOperator } from "mvdan-sh";
import assert = require("assert");

// LangVariant/Token/RedirOperator/... isn't really exported by `mvdan-sh`.
// Therefore, it's value is expected to not be accessible.
// These statements should cause an error:
// @ts-expect-error
LangVariant;
// @ts-expect-error
Token;
// @ts-expect-error
RedirOperator;

// However, these statements should work:
const variant = LangVariant.LangBash;
const operator = ParNamesOperator.NamesPrefix;

const { syntax } = sh;

const node: Node = syntax
    .NewParser(syntax.KeepComments(true), syntax.StopAt("$$"), syntax.Variant(variant))
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
    "bar; baz\n",
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
    },
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

// Test Commands
// The shell commands are ported from https://github.com/mvdan/sh/blob/master/syntax/canonical.sh
const commands = [
    "! foo bar >a &",
    "foo() { bar; }",
    `{
        var1="some long value" # var1 comment
        var2=short             # var2 comment
    }`,
    "if foo; then bar; fi",
    `for foo in a b c; do
        bar
    done`,
    `case $foo in
    a) A ;;
    b)
        B
        ;;
    esac`,
    "foo | bar",
    `foo &&
        $(bar) &&
        (more)`,
    "foo 2>&1",
    "$((3 + 4))",
];

const expect = [
    "CallExpr",
    "FuncDecl",
    "Block",
    "IfClause",
    "ForClause",
    "CaseClause",
    "BinaryCmd",
    "BinaryCmd",
    "CallExpr",
    "CallExpr",
];

for (let i = 0; i < commands.length; i++) {
    const stmt = parser.Parse(commands[i]).Stmts[0]!.Cmd;
    assert.strictEqual(syntax.NodeType(stmt), expect[i]);
}

// Test operators
assert.strictEqual(operator, 0x26);
