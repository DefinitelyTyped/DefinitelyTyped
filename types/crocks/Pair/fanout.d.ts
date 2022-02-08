import Arrow from '../Arrow';
import { UnaryFunction } from '../internal/types';
import Star from '../Star';
import Pair from './Pair';

/**
 * fanout :: (a -> b) -> (a -> c) -> (a -> Pair b c)
 * fanout :: Arrow a b -> Arrow a c -> Arrow a (Pair b c)
 * fanout :: Monad m => Star a (m b) -> Star a (m c) -> Star a (m (Pair b c))
 */
declare function fanout(fn1: UnaryFunction, fn2: UnaryFunction): (val: unknown) => Pair;
declare function fanout(fn1: UnaryFunction): (fn2: UnaryFunction) => (val: unknown) => Pair;
declare function fanout(fn1: Arrow, fn2: Arrow): Pair;
declare function fanout(fn1: Arrow): (fn2: Arrow) => Pair;
declare function fanout(fn1: Star, fn2: Star): Pair;
declare function fanout(fn1: Star): (fn2: Star) => Pair;

export default fanout;
