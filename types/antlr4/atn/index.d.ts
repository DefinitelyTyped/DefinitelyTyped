import ATN from "./ATN";
import ATNDeserializer from "./ATNDeserializer";
import LexerATNSimulator from "./LexerATNSimulator";
import ParserATNSimulator from "./ParserATNSimulator";
import PredictionMode from "./PredictionMode";

declare namespace atn {
    export { ATN };
    export { ATNDeserializer };
    export { LexerATNSimulator };
    export { ParserATNSimulator };
    export { PredictionMode };
}
export default atn;
