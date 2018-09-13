import Ember from 'ember';

export default class Helper extends Ember.Helper { }
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
export function helper(helperFn: (params: any[], hash?: any) => any): any;
