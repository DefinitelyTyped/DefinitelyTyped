export = merge;
/**
 * Augments `target` with properties in `options`. Does not override
 * target's properties if they are defined and matches expected type in
 * options
 *
 * @returns {Object} merged object
 */
declare function merge(target: any, options: any): Object;
