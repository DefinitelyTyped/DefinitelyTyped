import concat = require("concat-stream");

import { Readable } from "stream";

class MyReadable extends Readable {
  i: number = 1;
  _read() {
    if (this.i <= 100) {
      this.push(this.i.toString());
      this.i++;
    } else {
      this.push(null);
    }
  }
}

const myReadable = new MyReadable();

myReadable.pipe(concat((buf) => console.log(buf.toString())));
myReadable.pipe(concat({}, (buf) => console.log(buf.toString())));
