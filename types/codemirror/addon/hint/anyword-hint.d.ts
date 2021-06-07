import './show-hint';

declare module '../../' {
    interface HintHelpers {
        anyword: HintFunction;
    }

    interface ShowHintOptions {
        word?: RegExp;
        range?: number;
    }
}
