import * as Pumpify from 'pumpify';
import { Duplex, Transform, PassThrough, Writable } from 'stream';

new Pumpify();
new Pumpify(new Writable(), new Writable());
const pumpify = new Pumpify([new Writable(), new Writable()]);

class Pumpy extends Pumpify {
  constructor() {
    super();
    const dup1 = new Duplex();
    const dup2 = new Transform();
    this.setPipeline(dup1, dup2);
  }
}

const pumpy = new Pumpy();
pumpy.pipe(new PassThrough());

pumpify.setPipeline(pumpy);
