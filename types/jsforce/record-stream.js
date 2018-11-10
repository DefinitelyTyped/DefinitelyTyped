import { Transform } from 'stream';

export class RecordStream extends Transform {
  map(): Transform;
  filter(): Transform;
  stream(): Transform;
}
