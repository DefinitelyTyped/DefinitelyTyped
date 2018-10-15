import nibbleRead from './read';
import nibbleWrite from './write';

declare namespace nibble {
  const read: typeof nibbleRead;
  const write: typeof nibbleWrite;
}

export default nibble;
