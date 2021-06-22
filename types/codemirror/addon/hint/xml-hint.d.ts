import './show-hint';

declare module '../../' {
    interface HintHelpers {
        xml: HintFunction;
    }

    interface ShowHintOptions {
        schemaInfo?: any;
        quoteChar?: string;
        matchInMiddle?: boolean;
    }
}
