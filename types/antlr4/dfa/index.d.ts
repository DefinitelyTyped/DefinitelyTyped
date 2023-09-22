import DFA from "./DFA";
import DFASerializer from "./DFASerializer";
import LexerDFASerializer from "./LexerDFASerializer";
import PredPrediction from "./PredPrediction";

declare namespace dfa {
    export { DFA };
    export { DFASerializer };
    export { LexerDFASerializer };
    export { PredPrediction };
}
export default dfa;
