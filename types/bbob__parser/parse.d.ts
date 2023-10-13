import { Node } from "@bbob/plugin-helper";
import { createLexer } from "./lexer";

export function parse(input: string, opts?: {
    createTokenizer?(): typeof createLexer;
    onlyAllowTags?: string[];
    contextFreeTags?: string[];
    enableEscapeTags?: boolean;
    openTag?: string;
    closeTag?: string;
}): Node[];
