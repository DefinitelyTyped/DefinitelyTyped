import RuleContext from "../context/RuleContext";
import ParseTree from "./ParseTree";

export default class RuleNode extends ParseTree {
    /**
     * Not implemented, throws error.
     */
    getRuleContext(): RuleContext;
}
