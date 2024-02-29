import ParserRuleContext from "../context/ParserRuleContext";
import ErrorNode from "./ErrorNode";
import TerminalNode from "./TerminalNode";

export default class ParseTreeListener {
    visitTerminal(node: TerminalNode): void;

    visitErrorNode(node: ErrorNode): void;

    enterEveryRule(ctx: ParserRuleContext): void;

    exitEveryRule(ctx: ParserRuleContext): void;
}
