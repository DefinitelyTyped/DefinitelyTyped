import bufferAnd from './and';
import bufferCreate from './create';
import bufferModify from './modify';
import bufferNand from './nand';
import bufferNor from './nor';
import bufferNot from './not';
import bufferOr from './or';
import bufferRead from './read';
import bufferReadCInt from './read-c-int';
import bufferReadInt from './read-int';
import bufferReadUInt from './read-u-int';
import bufferXnor from './xnor';
import bufferXor from './xor';

declare namespace buffer {
  const and: typeof bufferAnd;
  const create: typeof bufferCreate;
  const modify: typeof bufferModify;
  const nand: typeof bufferNand;
  const nor: typeof bufferNor;
  const not: typeof bufferNot;
  const or: typeof bufferOr;
  const read: typeof bufferRead;
  const readCInt: typeof bufferReadCInt;
  const readInt: typeof bufferReadInt;
  const readUInt: typeof bufferReadUInt;
  const xnor: typeof bufferXnor;
  const xor: typeof bufferXor;
}

export default buffer;
