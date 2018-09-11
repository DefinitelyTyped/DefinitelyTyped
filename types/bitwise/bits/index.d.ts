import bitsAnd from './and';
import bitsNor from './nor';
import bitsNot from './not';
import bitsOr from './or';
import bitsReduceAnd from './reduce-and';
import bitsReduceNand from './reduce-nand';
import bitsReduceNor from './reduce-nor';
import bitsReduceOr from './reduce-or';
import bitsReduceXnor from './reduce-xnor';
import bitsReduceXor from './reduce-xor';
import bitsToBoolean from './to-boolean';
import bitsToString from './to-string';
import bitsXnor from './xnor';
import bitsXor from './xor';

declare namespace bits {
  const and: typeof bitsAnd;
  const nor: typeof bitsNor;
  const not: typeof bitsNot;
  const or: typeof bitsOr;
  const reduceAnd: typeof bitsReduceAnd;
  const reduceNand: typeof bitsReduceNand;
  const reduceNor: typeof bitsReduceNor;
  const reduceOr: typeof bitsReduceOr;
  const reduceXnor: typeof bitsReduceXnor;
  const reduceXor: typeof bitsReduceXor;
  const toBoolean: typeof bitsToBoolean;
  const toString: typeof bitsToString;
  const xnor: typeof bitsXnor;
  const xor: typeof bitsXor;
}

export default bits;
