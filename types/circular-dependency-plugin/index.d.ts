/// <reference types="node" />
import { Compilation, Compiler, Module, WebpackPluginInstance } from "webpack";

export = CircularDependencyPlugin;

/**
 * Detect modules with circular dependencies when bundling with webpack.
 */
declare class CircularDependencyPlugin implements WebpackPluginInstance {
    constructor(options?: CircularDependencyPlugin.Options);

    apply(compiler: Compiler): void;
    // Not exposing `isCyclic` because it isn't meant to be public, I believe
}

declare namespace CircularDependencyPlugin {
    interface Options {
        /**
         * @default false
         */
        allowAsyncCycles?: boolean | undefined;
        /**
         * @default process.cwd()
         */
        cwd?: string | undefined;
        /**
         * @default /$^/
         */
        exclude?: RegExp | undefined;
        /**
         * @default /.*\/
         */
        include?: RegExp | undefined;
        /**
         * @default false
         */
        failOnError?: boolean | undefined;
        /**
         * @default false
         */
        onDetected?:
            | false
            | ((x: {
                module: Module;
                paths: string[];
                compilation: Compilation;
            }) => void)
            | undefined;
        onEnd?: ((x: { compilation: Compilation }) => void) | undefined;
        onStart?: ((x: { compilation: Compilation }) => void) | undefined;
    }
}
