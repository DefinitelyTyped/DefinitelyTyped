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
        task: (ctx: any, task: ListrTaskWrapper) => void | string | Promise<any> | stream.Readable | Listr | Observable<any>;
        skip?: (ctx: any, task: ListrTaskWrapper) => boolean | Promise<boolean> | string | void | Observable<boolean>;
        enabled?: (ctx: any, task: ListrTaskWrapper) => boolean | Promise<boolean> | Observable<boolean>;
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
