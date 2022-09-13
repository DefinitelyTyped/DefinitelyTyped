import './xml-hint';

declare module '../../' {
    interface HintHelpers {
        html: HintFunction;
    }

    const htmlSchema: any;
}
