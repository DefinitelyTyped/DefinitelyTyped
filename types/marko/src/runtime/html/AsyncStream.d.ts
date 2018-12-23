import Async from '../Async';

export default interface AsyncStream extends Async {
    DEFAULT_TIMEOUT: number;
    INCLUDE_STACK: boolean;

    (global: any, writer?: any, parentOut?: any, shouldBuffer?: boolean): this;
    enableAsyncStackTrace(): void;
    text(str: any): void;
    element(tagName: string, elementAttrs: any, openTagOnly: boolean): void;
    beginElement(name: string, elementAttrs: any): void;
    end(data?: any): this;
    /** @deprecated */
    getOutput(): string;
}
