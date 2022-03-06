import EmberObject from "@ember/object";

/**
 * Ember Helpers are functions that can compute values, and are used in templates.
 * For example, this code calls a helper named `format-currency`:
 */
export default class Helper extends EmberObject {
    /**
     * In many cases, the ceremony of a full `Ember.Helper` class is not required.
     * The `helper` method create pure-function helpers without instances. For
     * example:
     */
    static helper(helper: (params: any, hash: any) => any): Helper;
    /**
     * Override this function when writing a class-based helper.
     */
    compute(params: any[], hash: object): any;
    /**
     * On a class-based helper, it may be useful to force a recomputation of that
     * helpers value. This is akin to `rerender` on a component.
     */
    recompute(): any;
}

/**
 * In many cases, the ceremony of a full `Helper` class is not required.
 * The `helper` method create pure-function helpers without instances. For
 * example:
 * ```app/helpers/format-currency.js
 * import { helper } from '@ember/component/helper';
 * export default helper(function(params, hash) {
 *   let cents = params[0];
 *   let currency = hash.currency;
 *   return `${currency}${cents * 0.01}`;
 * });
 * ```
 */
export function helper(helperFn: (params: any, hash: any) => any): any;
