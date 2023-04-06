import Parser from "../Parser";
import ParseTree from "./ParseTree";
import Tree from "./Tree";

declare namespace Trees {
    /**
     * Print out a whole tree in LISP form.
     *
     * {@link getNodeText} is used on the node payloads to
     * get the text for the nodes.
     *
     * Detect parse trees and extract data appropriately.
     */
    function toStringTree(t: Tree, ruleNames?: string[], recog?: Parser): string;

    function getNodeText(t: Tree, ruleNames?: string[], recog?: Parser): string;

    /**
     * @return ordered list of all children of this node
     */
    function getChildren(t: Tree): Tree[];

    /**
     * @return a list of all ancestors of this node. The first node of
     * list is the root and the last is the parent of this node.
     */
    function getAncestors(t: Tree): Tree[];

    function findAllTokenNodes(t: ParseTree, ttype: number): ParseTree[];

    function findAllRuleNodes(t: ParseTree, ruleIndex: number): ParseTree[];

    function findAllNodes(t: ParseTree, index: number, findTokens: boolean): ParseTree[];

    function descendants(t: ParseTree): ParseTree[];
}

export default Trees;
