// Type definitions for serve-index 1.9
// Project: https://github.com/expressjs/serve-index
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Handler } from 'express';
import { Stats } from 'fs';

/** Serves pages that contain directory listings for a given path. */
declare function serveIndex(path: string, options?: serveIndex.Options): Handler;

declare namespace serveIndex {
    interface File {
        name: string;
        stat: Stats;
    }

    interface Locals {
        directory: string;
        displayIcons: boolean;
        fileList: File[];
        name: string;
        stat: Stats;
        path: string;
        style: string;
        viewName: string;
    }

    type TemplateCallback = (error: Error | null, htmlString?: string) => void;

    interface Options {
        filter?: ((filename: string, index: number, files: File[], dir: string) => boolean) | undefined;
        hidden?: boolean | undefined;
        icons?: boolean | undefined;
        stylesheet?: string | undefined;
        template?: string | ((locals: Locals, callback: TemplateCallback) => void) | undefined;
        view?: string | undefined;
    }
}

export = serveIndex;
