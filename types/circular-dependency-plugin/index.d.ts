// Type definitions for circular-dependency-plugin 5.0
// Project: https://github.com/aackerman/circular-dependency-plugin
// Definitions by: Olegs Jeremejevs <https://github.com/jeremejevs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin, Module, compilation } from 'webpack';

export = CircularDependencyPlugin;

declare class CircularDependencyPlugin extends Plugin {
  constructor(options?: CircularDependencyPlugin.Options);
  // Not exposing `isCyclic` because it isn't meant to be public, I believe
}

declare namespace CircularDependencyPlugin {
  interface Options {
    allowAsyncCycles?: boolean;
    cwd?: string;
    exclude?: RegExp;
    failOnError?: boolean;
    onDetected?: (x: {
      module: Module;
      paths: string[];
      compilation: compilation.Compilation;
    }) => void;
    onEnd?: (x: { compilation: compilation.Compilation }) => void;
    onStart?: (x: { compilation: compilation.Compilation }) => void;
  }
}
