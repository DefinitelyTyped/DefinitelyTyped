
import Buffers = require('buffers');

var any: any;
var num: number;
var str: string;
var buf = new Buffer([1, 2, 3]);
var bufs: Buffers = new Buffers(); // with new, as type

bufs = Buffers(); // no new

// with self
bufs = Buffers(bufs);
bufs = new Buffers(bufs);

// with array of buffers.
bufs = Buffers([buf, buf]);
bufs = new Buffers([buf, buf]);

num = bufs.push(buf);
num = bufs.push(buf, buf);

num = bufs.unshift(buf);
num = bufs.unshift(buf, buf);

buf = bufs.slice();
buf = bufs.slice(num);
buf = bufs.slice(num, num);

bufs = bufs.splice(num);
bufs = bufs.splice(num, num);
bufs = bufs.splice(num, num, buf);
bufs = bufs.splice(num, num, buf, buf);

num = bufs.copy(buf);
num = bufs.copy(buf, num, num, num);

any = bufs.get(num);
bufs.set(num, any);

num = bufs.indexOf(str);
num = bufs.indexOf(str, num);
num = bufs.indexOf(buf);
num = bufs.indexOf(buf, num);

buf = bufs.toBuffer();

str = buf.toString();
str = buf.toString(any, num, num);
