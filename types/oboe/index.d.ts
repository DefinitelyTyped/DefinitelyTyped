/// <reference types="node" />

declare namespace oboe {
    interface OboeFunction extends Function {
        drop: Object;
        (url: string): Oboe; // simple fetch the url
        (options: Options): Oboe; // fetch with full parameters
        (stream: NodeJS.ReadableStream): Oboe; // read data from the given Node stream
        (): Oboe; // parse data given by the emit() calls
    }

    interface Oboe {
        done(callback: (result: any) => void): Oboe;

        fail(callback: (result: FailReason) => void): Oboe;

        node(pattern: string, callback: CallbackSignature): Oboe;
        node(patterns: PatternMap): Oboe;

        on(event: string, pattern: string, callback: CallbackSignature): Oboe;
        on(eventPattern: string, callback: CallbackSignature): Oboe;

        path(pattern: string, callback: CallbackSignature): Oboe;
        path(listeners: any): Oboe;

        removeListener(eventPattern: string, callback: CallbackSignature): Oboe;
        removeListener(event: string, pattern: string, callback: CallbackSignature): Oboe;

        start(callback: (status: number, headers: Object) => void): Oboe;

        abort(): void;

        emit(message: "data" | "end", data?: string): void;

        source: string;
    }

    interface CallbackSignature {
        (node: any, pathOrHeaders: any, ancestors: Object[]): any;
    }

    interface Options {
        url: string;
        method?: string | undefined;
        headers?: Object | undefined;
        body?: any;
        cached?: boolean | undefined;
        withCredentials?: boolean | undefined;
    }

    interface FailReason {
        thrown?: Error | undefined;
        statusCode?: number | undefined;
        body?: string | undefined;
        jsonBody?: Object | undefined;
    }

    interface PatternMap {
        [pattern: string]: CallbackSignature;
    }
}

declare var oboe: oboe.OboeFunction;

export = oboe;
export as namespace oboe;
