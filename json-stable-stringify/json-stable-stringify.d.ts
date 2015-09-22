// Type definitions for json-stable-stringify 1.0.0
// Project: https://github.com/substack/json-stable-stringify
// Definitions by: Matt Frantz <https://github.com/mhfrantz/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'json-stable-stringify' {

  function stringify(obj: any, opts?: stringify.Comparator | stringify.Options): string;

  module stringify {

    interface Element {
      key: string;
      value: any;
    }

    interface Comparator {
      (a: Element, b: Element): number;
    }

    interface Replacer {
      (key: string, value: any): any;
    }

    interface Options {
      cmp?: Comparator;
      space?: number | string;
      replacer?: Replacer;
    }
  }

  export = stringify;
}
