import { default as Trees } from './Trees';
import RuleNode from './RuleNode';
import ErrorNode from './ErrorNode';
import TerminalNode from './TerminalNode';
import ParseTreeListener from './ParseTreeListener';
import ParseTreeVisitor from './ParseTreeVisitor';
import ParseTreeWalker from './ParseTreeWalker';

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
