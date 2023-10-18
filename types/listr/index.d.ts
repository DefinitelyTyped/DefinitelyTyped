/// <reference types="node" />

import { Observable } from "rxjs";
import * as stream from "stream";

declare namespace Listr {
    type ListrContext = any;
    type ListrRendererValue<Ctx> = "silent" | "default" | "verbose" | ListrRendererClass<Ctx>;
    type ListrTaskResult<Ctx> = string | Promise<any> | Listr<Ctx> | stream.Readable | Observable<any>;

    interface ListrOptions<Ctx = ListrContext> {
        concurrent?: boolean | number | undefined;
        exitOnError?: boolean | undefined;
        renderer?: ListrRendererValue<Ctx> | undefined;
        nonTTYRenderer?: ListrRendererValue<Ctx> | undefined;
    }

    interface ListrEvent {
        type: string;
        data?: string | boolean | undefined;
    }

    interface ListrTask<Ctx = ListrContext> {
        title: string;
        task: (ctx: Ctx, task: ListrTaskWrapper<Ctx>) => void | ListrTaskResult<Ctx>;
        skip?: ((ctx: Ctx) => void | boolean | string | Promise<undefined | boolean | string>) | undefined;
        enabled?: ((ctx: Ctx) => boolean | Promise<boolean> | Observable<boolean>) | undefined;
    }

    interface ListrTaskObject<Ctx> extends Observable<ListrEvent> {
        title: string;
        output?: string | undefined;
        task: (ctx: Ctx, task: ListrTaskWrapper<Ctx>) => void | ListrTaskResult<Ctx>;
        skip: (ctx: Ctx) => void | boolean | string | Promise<undefined | boolean | string>;
        subtasks: ReadonlyArray<ListrTaskWrapper<Ctx>>;
        state: string;
        check: (ctx: Ctx) => void;
        hasSubtasks(): boolean;
        isPending(): boolean;
        isSkipped(): boolean;
        isCompleted(): boolean;
        isEnabled(): boolean;
        hasFailed(): boolean;
        run: (ctx: Ctx, wrapper: ListrTaskWrapper<Ctx>) => Promise<void>;
    }

    interface ListrTaskWrapper<Ctx = ListrContext> {
        title: string;
        output: string;
        report(error: Error): void;
        skip(message: string): void;
        run(ctx?: Ctx): Promise<void>;
    }

    interface ListrError<Ctx> extends Error {
        context: Ctx;
    }

    interface ListrRenderer {
        render(): void;
        end(err: Error): void;
    }
    interface ListrRendererClass<Ctx> {
        nonTTY: boolean;
        new(tasks: ReadonlyArray<ListrTaskObject<Ctx>>, options: ListrOptions<Ctx>): ListrRenderer;
    }
}

declare class Listr<Ctx = Listr.ListrContext> {
    constructor(tasks?: ReadonlyArray<Listr.ListrTask<Ctx>>, options?: Listr.ListrOptions<Ctx>);
    constructor(options?: Listr.ListrOptions<Ctx>);
    tasks: ReadonlyArray<Listr.ListrTaskWrapper<Ctx>>;
    setRenderer(value: Listr.ListrRendererValue<Ctx>): void;
    add(tasks: Listr.ListrTask<Ctx> | ReadonlyArray<Listr.ListrTask<Ctx>>): void;
    render(): void;
    run(ctx?: Ctx): Promise<Ctx>;
}

export = Listr;
