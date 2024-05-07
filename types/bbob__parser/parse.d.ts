import { Node } from "@bbob/plugin-helper";
import { createLexer } from "./lexer";

export function parse(input: string, opts?: {
    createTokenizer?(): typeof createLexer;
    onlyAllowTags?: readonly string[];
    contextFreeTags?: readonly string[];
    enableEscapeTags?: boolean;
    openTag?: string;
    closeTag?: string;
}): Node[];
export default parse;
