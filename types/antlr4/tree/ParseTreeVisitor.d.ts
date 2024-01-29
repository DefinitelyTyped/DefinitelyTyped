import ErrorNode from "./ErrorNode";
import ParseTree from "./ParseTree";
import RuleNode from "./RuleNode";
import TerminalNode from "./TerminalNode";

export default class ParseTreeVisitor {
    visit(tree: ParseTree): any;

    visitChildren(node: RuleNode): any;

    visitTerminal(node: TerminalNode): void;

    visitErrorNode(node: ErrorNode): void;
}
