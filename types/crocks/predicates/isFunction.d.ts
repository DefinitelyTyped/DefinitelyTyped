type Fn = () => any;

/**
 * isFunction :: a -> Boolean
 */
declare function isFunction(val: unknown): val is Fn;

export default isFunction;
