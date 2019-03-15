// Type definitions for event-hooks-webpack-plugin 2.0
// Project: https://github.com/cascornelissen/event-hooks-webpack-plugin
// Definitions by: Pine Mizune <https://github.com/pine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

export = EventHooksPlugin;

declare namespace EventHooksPlugin {
    interface Options {
        shouldEmit?: () => void;
        done?: () => void;
        additionalPass?: () => void;
        beforeRun?: () => void;
        run?: () => void;
        emit?: () => void;
        afterEmit?: () => void;
        thisCompilation?: () => void;
        compilation?: () => void;
        normalModuleFactory?: () => void;
        contextModuleFactory?: () => void;
        beforeCompile?: () => void;
        compile?: () => void;
        make?: () => void;
        afterCompile?: () => void;
        watchRun?: () => void;
        failed?: () => void;
        invalid?: () => void;
        watchClose?: () => void;
        environment?: () => void;
        afterEnvironment?: () => void;
        afterPlugins?: () => void;
        afterResolvers?: () => void;
        entryOption?: () => void;
    }
}

declare class EventHooksPlugin extends Plugin {
    constructor(options?: EventHooksPlugin.Options);
}
