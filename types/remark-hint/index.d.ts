import { Root } from "mdast";
import { Plugin } from "unified";

declare const remarkHint: Plugin<[], Root, Root>;
export = remarkHint;
