import ATNState from '../state/ATNState';
import ATNConfig from './ATNConfig';
import LexerActionExecutor from './LexerActionExecutor';

export default class LexerATNConfig extends ATNConfig {
    readonly lexerActionExecutor: LexerActionExecutor | null;
    passedThroughNonGreedyDecision: any;

    constructor(params: ATNState, config: ATNConfig);

    checkNonGreedyDecision(source: ATNConfig, target: ATNState): any;
}
