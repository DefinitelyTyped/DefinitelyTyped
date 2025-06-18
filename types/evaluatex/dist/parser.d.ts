import { AbstractSyntaxTreeNode, Token } from "../index";

declare function parse(token: Token[]): AbstractSyntaxTreeNode;

export = parse;
