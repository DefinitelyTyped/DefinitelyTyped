import Async from './Async';

/**
 * race :: Async e a -> Async e a -> Async e a
 */
declare function race(val1: Async, val2: Async): Async;
declare function race(val1: Async): (val2: Async) => Async;

export default race;
