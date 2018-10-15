// Type definitions for bitwise 1.5
// Project: https://github.com/dodekeract/bitwise
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import bitwiseBits from './bits';
import bitwiseBuffer from './buffer';
import bitwiseByte from './byte';
import bitwiseInteger from './integer';
import bitwiseNibble from './nibble';
import bitwiseString from './string';

declare namespace bitwise {
  const bits: typeof bitwiseBits;
  const buffer: typeof bitwiseBuffer;
  const byte: typeof bitwiseByte;
  const integer: typeof bitwiseInteger;
  const nibble: typeof bitwiseNibble;
  const string: typeof bitwiseString;
}

export default bitwise;
