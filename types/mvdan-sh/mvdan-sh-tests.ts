import sh, { LangVariant, Node } from 'mvdan-sh';

const { syntax } = sh;

const node: Node = syntax
    .NewParser(syntax.KeepComments(true), syntax.StopAt('$$'), syntax.Variant(LangVariant.LangBash))
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
