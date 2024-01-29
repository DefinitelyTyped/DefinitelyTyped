import ErrorNode from "./ErrorNode";
import ParseTreeListener from "./ParseTreeListener";
import ParseTreeVisitor from "./ParseTreeVisitor";
import ParseTreeWalker from "./ParseTreeWalker";
import RuleNode from "./RuleNode";
import TerminalNode from "./TerminalNode";
import { default as Trees } from "./Trees";

declare namespace tree {
    export { Trees };
    export { RuleNode };
    export { ErrorNode };
    export { TerminalNode };
    export { ParseTreeListener };
    export { ParseTreeVisitor };
    export { ParseTreeWalker };
}
export default tree;
