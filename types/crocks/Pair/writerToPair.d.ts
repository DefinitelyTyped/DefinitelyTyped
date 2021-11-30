import Writer from '../Writer';
import Pair from './Pair';

/**
 * writerToPair :: Monoid m => Writer m a -> Pair m a
 * writerToPair :: Monoid m => (a -> Writer m b) -> a -> Pair m b
 */
declare function writerToPair(val: Writer): Pair;
declare function writerToPair(fn: (val: unknown) => Writer): (val: unknown) => Pair;

export default writerToPair;
