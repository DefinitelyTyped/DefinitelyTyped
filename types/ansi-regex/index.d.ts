// Type definitions for ansi-regex 4.0
// Project: https://github.com/chalk/ansi-regex#readme
// Definitions by: Manish Vachharajani <https://github.com/mvachhar>
//                 Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ansiRegex {
  interface Options {
    /** Match only the first ANSI escape. */
    onlyFirst?: boolean;
  }
}

declare function ansiRegex(options?: ansiRegex.Options): RegExp;

export = ansiRegex;
