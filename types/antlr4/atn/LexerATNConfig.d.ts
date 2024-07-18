import ATNState from "../state/ATNState";
import ATNConfig from "./ATNConfig";
import LexerActionExecutor from "./LexerActionExecutor";

export default class LexerATNConfig extends ATNConfig {
    readonly lexerActionExecutor: LexerActionExecutor | null;
    readonly passedThroughNonGreedyDecision: boolean;

    constructor(params: ATNState, config: ATNConfig);

    checkNonGreedyDecision(source: ATNConfig, target: ATNState): boolean;
}
