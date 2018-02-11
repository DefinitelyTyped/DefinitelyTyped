// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface MeanBy {
    /**
       * Computes the mean of the provided propties of the objects in the `array`
       *
       * @category Math
       * @param array The array to iterate over.
       * @param [iteratee=_.identity] The iteratee invoked per element.
       * @returns Returns the mean.
       * @example
       *
       * _.mean([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n');
       * // => 5
       */
    (): MeanBy;
    /**
       * Computes the mean of the provided propties of the objects in the `array`
       *
       * @category Math
       * @param array The array to iterate over.
       * @param [iteratee=_.identity] The iteratee invoked per element.
       * @returns Returns the mean.
       * @example
       *
       * _.mean([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n');
       * // => 5
       */
    <T>(iteratee: _.ValueIteratee<T>): MeanBy1x1<T>;
    /**
       * Computes the mean of the provided propties of the objects in the `array`
       *
       * @category Math
       * @param array The array to iterate over.
       * @param [iteratee=_.identity] The iteratee invoked per element.
       * @returns Returns the mean.
       * @example
       *
       * _.mean([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n');
       * // => 5
       */
    <T>(iteratee: _.ValueIteratee<T>, collection: _.List<T> | null | undefined): number;
}
interface MeanBy1x1<T> {
    /**
       * Computes the mean of the provided propties of the objects in the `array`
       *
       * @category Math
       * @param array The array to iterate over.
       * @param [iteratee=_.identity] The iteratee invoked per element.
       * @returns Returns the mean.
       * @example
       *
       * _.mean([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n');
       * // => 5
       */
    (): MeanBy1x1<T>;
    /**
       * Computes the mean of the provided propties of the objects in the `array`
       *
       * @category Math
       * @param array The array to iterate over.
       * @param [iteratee=_.identity] The iteratee invoked per element.
       * @returns Returns the mean.
       * @example
       *
       * _.mean([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n');
       * // => 5
       */
    (collection: _.List<T> | null | undefined): number;
}

declare const meanBy: MeanBy;
export = meanBy;
