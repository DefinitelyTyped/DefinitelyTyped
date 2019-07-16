// Type definitions for listr 0.14
// Project: https://github.com/samverschueren/listr#readme
// Definitions by: Dusan Radovanovic <https://github.com/durad>
//                 Vladislav Polyakov <https://github.com/polRk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import * as stream from "stream";
import { Observable } from "rxjs";

declare namespace Listr {
    type ListrRendererValue = "silent" | "default" | "verbose" | ListrRendererClass;

    interface ListrOptions {
        concurrent?: boolean | number;
        exitOnError?: boolean;
        renderer?: ListrRendererValue;
        nonTTYRenderer?: ListrRendererValue;
    }

    type ListrContext = any;

    interface ListrEvent {
        type: string
    }

    type ListrTaskResult = void | string | Promise<any> | Listr | Observable<any>;

    interface ListrRawTask {
        title: string;
        task: (ctx: ListrContext, task: ListrTaskWrapper) => ListrTaskResult;
        skip?: (ctx: ListrContext) => boolean | string | Promise<boolean>;
        enabled?: () => boolean | Promise<boolean> | Observable<boolean>;
    }

    interface ListrTask extends Observable<ListrEvent> {
        title: string;
        output?: string;
        task: (ctx: ListrContext, task: ListrTaskWrapper) => ListrTaskResult;
        skip: (ctx: ListrContext) => boolean | string | Promise<boolean>;
        subtasks: ReadonlyArray<Listr.ListrTaskWrapper>;
        state: string;
        check: (ctx: ListrContext) => void;
        hasSubtasks: boolean;
        isPending: boolean;
        isSkipped: boolean;
        isCompleted: boolean;
        isEnabled: boolean;
        hasFailed: boolean;
        run: (ctx: ListrContext, wrapper: ListrTaskWrapper) => Promise<void>
    }

    interface ListrTaskWrapper {
        title: string;
        output: string;
        report(error: Error): void;
        skip(message: string): void;
        run(ctx?: ListrContext): Promise<void>;
    }

    interface ListrError extends Error {
        context: ListrContext
    }

    interface ListrRenderer {
        render(): void;
        end(err: Error): void;
    }
    interface ListrRendererClass {
        nonTTY: boolean;
        new(tasks: ReadonlyArray<Listr.ListrTask>, options: Listr.ListrOptions): ListrRenderer
    }
}

declare class Listr {
    constructor(tasks?: ReadonlyArray<Listr.ListrRawTask>, options?: Listr.ListrOptions);
    constructor(options?: Listr.ListrOptions);
    tasks: ReadonlyArray<Listr.ListrTaskWrapper>;
    setRenderer(value: Listr.ListrRendererValue): void;
    add(tasks: Listr.ListrRawTask | ReadonlyArray<Listr.ListrRawTask>): void;
    render(): void;
    run(ctx?: Listr.ListrContext): Promise<Listr.ListrContext>;
}

export = Listr;
