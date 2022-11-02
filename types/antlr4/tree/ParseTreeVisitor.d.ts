import ParseTree from './ParseTree';
import RuleNode from './RuleNode';
import TerminalNode from './TerminalNode';
import ErrorNode from './ErrorNode';

export default class ParseTreeVisitor {
    visit(tree: ParseTree): any;

    visitChildren(node: RuleNode): any;

    visitTerminal(node: TerminalNode): void;

    visitErrorNode(node: ErrorNode): void;
}
