// Type definitions for circular-dependency-plugin 5.0
// Project: https://github.com/aackerman/circular-dependency-plugin
// Definitions by: Olegs Jeremejevs <https://github.com/jeremejevs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="node" />
import { Compiler, WebpackPluginInstance, Module, Compilation } from 'webpack';

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
    onDetected?: false | ((x: {
      module: Module;
      paths: string[];
      compilation: Compilation;
    }) => void) | undefined;
    onEnd?: ((x: { compilation: Compilation }) => void) | undefined;
    onStart?: ((x: { compilation: Compilation }) => void) | undefined;
  }
}
