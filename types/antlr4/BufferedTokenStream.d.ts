import { Token } from './Token';
import { Interval } from './IntervalSet';

export class BufferedTokenStream {
    tokenSource: any;
    tokens: Token[];
    index: number;
    fetchEOF: boolean;

    mark(): number;

    release(marker: number): number;

    reset(): void;

    seek(index: number): void;

    get(index: number): Token;

    consume(): void;

    sync(i: number): boolean;

    fetch(n: number): number;

    getTokens(start: number, stop: number, types: any): Token[];

    LA(i: number): any;

    LB(k: number): Token;

    LT(k: number): Token;

    adjustSeekIndex(i: number): number;

    lazyInit(): void;

    setup(): void;

    setTokenSource(tokenSource: any): void;

    nextTokenOnChannel(i: number, channel: any): number;

    previousTokenOnChannel(i: number, channel: any): number;

    getHiddenTokensToRight(tokenIndex: number, channel: any): Token[];

    getSourceName(): any;

    getText(interval: Interval): any;

    fill(): void;
}
