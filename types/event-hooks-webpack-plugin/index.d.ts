// Type definitions for event-hooks-webpack-plugin 2.1
// Project: https://github.com/cascornelissen/event-hooks-webpack-plugin
// Definitions by: Pine Mizune <https://github.com/pine>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'webpack';
import webpack = require('webpack');
import { Task, CallbackTask, PromiseTask } from './lib/tasks';

declare namespace EventHooksPlugin {
    type CompilerHooks = keyof webpack.compilation.CompilerHooks;

    type Options = {
        [K in CompilerHooks]?: Task | CallbackTask | PromiseTask | ((...args: any[]) => void);
    };
}

declare class EventHooksPlugin extends Plugin {
    readonly hooks?: EventHooksPlugin.Options;
    constructor(hooks?: EventHooksPlugin.Options);

    /**
     * @throws InvalidHookNameError
     */
    apply(compiler: webpack.Compiler): void;
}

export = EventHooksPlugin;
