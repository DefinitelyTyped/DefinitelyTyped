// Type definitions for listr 0.13
// Project: https://github.com/samverschueren/listr#readme
// Definitions by: Dusan Radovanovic <https://github.com/durad>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from "stream";

declare namespace Listr {
    interface ListrRenderer {
        nonTTY: boolean;
        render(): void;
        end(): void;
    }

    interface ListrOptions {
        concurrent?: boolean | number;
        exitOnError?: boolean;
        renderer?: "silent" | "default" | "verbose" | ListrRenderer;
        nonTTYRenderer?: "silent" | "default" | "verbose" | ListrRenderer;
    }

    interface ListrTask {
        title: string;
        output?: string;
        task: (ctx: any, task: ListrTaskWrapper) => void | string | Promise<any> | stream.Readable | Listr;
        skip?: (ctx: any, task: ListrTaskWrapper) => boolean | Promise<boolean> | string | void;
        enabled?: (ctx: any, task: ListrTaskWrapper) => boolean | Promise<boolean>;
    }

    interface ListrTaskWrapper {
        title: string;
        output: any;
        report(error: Error): void;
        skip(message: string): void;
        run(ctx?: any): Promise<any>;
    }
}

declare class Listr {
    constructor(tasks?: ReadonlyArray<Listr.ListrTask>, options?: Listr.ListrOptions);
    constructor(options?: Listr.ListrOptions);
    add(tasks: Listr.ListrTask | ReadonlyArray<Listr.ListrTask>): void;
    run(ctx?: any): Promise<any>;
}

export = Listr;
