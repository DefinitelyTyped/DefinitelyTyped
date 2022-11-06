// Type definitions for gulp-live-server 0.0
// Project: https://github.com/gimm/gulp-live-server
// Definitions by: robertmaier <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { spawn } from 'child_process';
import type { createServer } from 'https';
import type { Handler, Application } from 'express';

declare namespace gls {
    interface LivereloadParams {
        livereload?: string;
        port?: number;
        errorListener?: (error: Error) => void;
        handler?: Handler;
        app?: Application;
        key?: NonNullable<Parameters<typeof createServer>[0]>['key'];
        cert?: NonNullable<Parameters<typeof createServer>[0]>['cert'];
        pfx?: NonNullable<Parameters<typeof createServer>[0]>['pfx'];
        liveCSS?: boolean;
        liveImg?: boolean;
        prefix?: boolean;
        dashboard?: boolean;
    }
    type Livereload = boolean | number | LivereloadParams;

    interface GLSStatic {
        start: (execPath?: string) => void;
        notify: (event: { path: string }) => void;
        stop: () => void;
        static: (folder: string, port?: number) => GLSStatic;
        new: (script: string) => GLSStatic;
    }

    type GLS = {
        (args: Parameters<typeof spawn>[1], options?: Parameters<typeof spawn>[2], livereload?: Livereload): GLSStatic;
    } & GLSStatic;
}

declare var gls: gls.GLS;
export = gls;
