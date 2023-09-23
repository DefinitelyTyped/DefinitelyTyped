// Type definitions for event-hooks-webpack-plugin 2.2
// Project: https://github.com/cascornelissen/event-hooks-webpack-plugin
// Definitions by: Pine Mizune <https://github.com/pine>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7
import { Compiler, WebpackPluginInstance } from "webpack";

export = EventHooksPlugin;

declare namespace EventHooksPlugin {
    interface Options {
        shouldEmit?: (() => void) | undefined;
        done?: (() => void) | undefined;
        additionalPass?: (() => void) | undefined;
        beforeRun?: (() => void) | undefined;
        run?: (() => void) | undefined;
        emit?: (() => void) | undefined;
        afterEmit?: (() => void) | undefined;
        thisCompilation?: (() => void) | undefined;
        compilation?: (() => void) | undefined;
        normalModuleFactory?: (() => void) | undefined;
        contextModuleFactory?: (() => void) | undefined;
        beforeCompile?: (() => void) | undefined;
        compile?: (() => void) | undefined;
        make?: (() => void) | undefined;
        afterCompile?: (() => void) | undefined;
        watchRun?: (() => void) | undefined;
        failed?: (() => void) | undefined;
        invalid?: (() => void) | undefined;
        watchClose?: (() => void) | undefined;
        environment?: (() => void) | undefined;
        afterEnvironment?: (() => void) | undefined;
        afterPlugins?: (() => void) | undefined;
        afterResolvers?: (() => void) | undefined;
        entryOption?: (() => void) | undefined;
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
