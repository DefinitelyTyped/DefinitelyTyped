// Type definitions for yog-bigpipe 0.4
// Project: https://github.com/fex-team/yog-bigpipe
// Definitions by: ssddi456 <https://github.com/ssddi456>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { EventEmitter } from 'events';
import { Readable } from 'stream';
import { RequestHandler } from 'express';

interface BigPipeOption {
    skipAnalysis?: boolean;
    tpl?: {
        _default?: string,
        quickling?: string
    };
}

type Callback = (done: (err: any, data: any) => any) => any;

interface AddPageletConfig {
    id: string;
    lazy?: boolean;
    mode?: yogBigpipe.Pagelet.mode;
}

declare function yogBigpipe(option?: BigPipeOption): RequestHandler;

export = yogBigpipe;
declare namespace yogBigpipe {
    class BigPipe extends Readable {
        constructor(option?: BigPipeOption)
        map: { [key: string]: Pagelet };
        pagelets: Pagelet[];
        pipelines: Pagelet[];
        rendered: Pagelet[];
        sources: {};
        state: Pagelet.status;
        quicklings: {};
        parentQuicklings: string[];
        Pagelet: PageletConstructor<Pagelet>;
        pageletData: {};

        bind(id: string, fn: Callback): BigPipe;

        bindPageOnly(fn: Callback): void;

        addQuicklingPagelets(pagelets: string[]): void;

        isQuicklingMode(): boolean;

        isQuickingMode(): boolean;

        addPagelet(obj: AddPageletConfig): void;

        isQuicklingWidget(item: { 'mode': Pagelet.mode, [key: string]: any }): void;

        render(): void;

        preparePageOnly(): Promise<any>;

        prepareAllSources(): Promise<any>;

        renderPagelet(pagelet: Pagelet): void;

        destroy(): void;

        _onPageletDone(pagelet: Pagelet): void;

        _checkFinish(): void;

        outputPagelet(pagelet: Pagelet): void;

        format(pagelet: Pagelet): string;

        _markPageletRendered(pagelet: Pagelet): void;
    }

    type PageletConstructor<T> = new (obj: PageletOption) => T;

    interface PageletOption {
        id: string;
        mode?: Pagelet.mode;
        lazy?: boolean;
        reqID: string;
        skipAnalysis: boolean;

        locals?: {};
        compiled?: boolean;
        container?: string;
        for?: string;
        model: {};
    }
    interface PageletData {
        container: string;
        reqID: string;
        id: string;
        html: string;
        js: string[];
        css: string[];
        styles: string[];
        scripts: string[];
    }
    class Pagelet extends EventEmitter {
        constructor(obj: PageletOption)

        model: {};
        container: string;
        mode: Pagelet.mode;
        id: string;
        locals: {};
        compiled: boolean;
        reqID: string;
        skipAnalysis: boolean;
        state: Pagelet.status;
        scripts: string[];
        styles: string[];
        js: string[];
        css: string[];
        html: string;

        addCss(css: string | string[]): void;
        addCsses(css: string | string[]): void;
        addJs(css: string | string[]): void;
        addJses(css: string | string[]): void;

        addScript(css: string | string[]): void;
        addScripts(css: string | string[]): void;
        addStyle(css: string | string[]): void;
        addStyles(css: string | string[]): void;

        destroy(): void;

        start(provider: Promise<any>, sync: boolean): void;
        toJson(): PageletData;
    }

    namespace Pagelet {
        type status = 'pending' | 'rendering' | 'fulfilled' | 'failed';
        type mode = 'async' | 'pipeline' | 'quickling';
    }
}
