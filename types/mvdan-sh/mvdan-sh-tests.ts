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
