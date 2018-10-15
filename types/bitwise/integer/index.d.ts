import integerGetBit from './get-bit';
import integerSetBit from './set-bit';
import integerToggleBit from './toggle-bit';

declare namespace integer {
  const getBit: typeof integerGetBit;
  const setBit: typeof integerSetBit;
  const toggleBit: typeof integerToggleBit;
}

export default integer;
