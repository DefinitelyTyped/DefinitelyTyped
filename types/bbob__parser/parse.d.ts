import { Node } from "@bbob/plugin-helper";
import { createLexer } from "./lexer";

export function parse(input: string, opts?: {
    createTokenizer?(): typeof createLexer;
    onlyAllowTags?: ReadonlyArray<string>;
    contextFreeTags?: ReadonlyArray<string>;
    enableEscapeTags?: boolean;
    openTag?: string;
    closeTag?: string;
}): Node[];
export default parse;
