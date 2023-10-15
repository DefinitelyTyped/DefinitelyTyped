// Type definitions for antlr4 4.11
// Project: https://github.com/antlr/antlr4
// Definitions by: Marlon Chatman <https://github.com/mcchatman8009>
//                 Matteo Mortari <https://github.com/tarilabs>
//                 Jon Gellin <https://github.com/jgellin-sf>
//                 Alex Miller <https://github.com/codex->
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { default as atn } from "./atn/index";
import { default as LL1Analyzer } from "./atn/LL1Analyzer";
import { default as PredictionContextCache } from "./atn/PredictionContextCache";
import { default as CharStreams } from "./CharStreams";
import { default as CommonToken } from "./CommonToken";
import { default as CommonTokenStream } from "./CommonTokenStream";
import { default as ParserRuleContext } from "./context/ParserRuleContext";
import { default as dfa } from "./dfa/index";
import { default as error } from "./error/index";
import { default as FileStream } from "./FileStream";
import { default as InputStream } from "./InputStream";
import { default as Lexer } from "./Lexer";
import { default as Interval } from "./misc/Interval";
import { default as IntervalSet } from "./misc/IntervalSet";
import { default as Parser } from "./Parser";
import { default as Token } from "./Token";
import { default as tree } from "./tree/index";
import { default as Utils } from "./utils/index";

declare namespace antlr4 {
    export { atn };
    export { dfa };
    export { tree };
    export { error };
    export { Token };
    export { CommonToken };
    export { CharStreams };
    export { InputStream };
    export { FileStream };
    export { CommonTokenStream };
    export { Lexer };
    export { Parser };
    export { PredictionContextCache };
    export { ParserRuleContext };
    export { Interval };
    export { IntervalSet };
    export { LL1Analyzer };
    export { Utils };
}

export default antlr4;
