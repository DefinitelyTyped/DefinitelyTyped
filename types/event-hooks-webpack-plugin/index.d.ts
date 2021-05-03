// Type definitions for event-hooks-webpack-plugin 2.2
// Project: https://github.com/cascornelissen/event-hooks-webpack-plugin
// Definitions by: Pine Mizune <https://github.com/pine>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7
import { Compiler, WebpackPluginInstance } from 'webpack';

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

/**
 * This webpack plugin is similar to `webpack-shell-plugin`
 * but this allows you to execute arbitrary JavaScriptinstead of commands on any event hook that is exposed by the Webpack compile
 */
declare class EventHooksPlugin implements WebpackPluginInstance {
    constructor(options?: EventHooksPlugin.Options);
    apply(compiler: Compiler): void;
}
