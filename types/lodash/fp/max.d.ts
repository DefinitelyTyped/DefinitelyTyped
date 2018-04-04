// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type Max =
    /**
      * Computes the maximum value of `array`. If `array` is empty or falsey
      * `undefined` is returned.
      *
      * @category Math
      * @param array The array to iterate over.
      * @returns Returns the maximum value.
      */
    <T>(collection: _.List<T> | null | undefined) => T | undefined;

declare const max: Max;
export = max;
