import byteRead from './read';
import byteWrite from './write';

declare namespace byte {
  const read: typeof byteRead;
  const write: typeof byteWrite;
}

export default byte;
