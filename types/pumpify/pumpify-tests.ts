import pumpify from 'pumpify';
import { Duplex, Transform, PassThrough } from 'stream';

class Pumpy extends pumpify {
  constructor() {
    super();
    const dup1 = new Duplex();
    const dup2 = new Transform();
    this.setPipeline(dup1, dup2);
  }
}

const pumpy = new Pumpy();
pumpy.pipe(new PassThrough());
