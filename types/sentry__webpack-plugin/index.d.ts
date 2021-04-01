// Type definitions for @sentry/webpack-plugin 1.9
// Project: https://github.com/getsentry/sentry-webpack-plugin
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

declare class SentryPlugin extends Plugin {
    constructor(options?: SentryPlugin.Options);
}

declare namespace SentryPlugin {
    type EntriesFunction = (key: string) => boolean;
    type ErrorHandlerFunction = (err: Error, invokeErr: () => void) => void;

    interface SetCommitsOptions {
        repo: string;
        commit?: string;
        previousCommit?: string;
        auto?: boolean;
    }

    interface Options {
        release?: string;
        include: string | string[];
        entries?: any[] | RegExp | EntriesFunction;
        ignoreFile?: string;
        ignore?: string | string[];
        configFile?: string;
        ext?: string[];
        urlPrefix?: string;
        urlSuffix?: string;
        validate?: boolean;
        stripPrefix?: [];
        stripCommonPrefix?: boolean;
        sourceMapReference?: boolean;
        rewrite?: boolean;
        dryRun?: boolean;
        debug?: boolean;
        silent?: boolean;
        errorHandler?: ErrorHandlerFunction;
        setCommits?: SetCommitsOptions;
    }
}

export = SentryPlugin;
