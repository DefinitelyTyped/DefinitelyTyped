import stream = require('stream');
import multipipe = require('multipipe');

let rws: stream.Duplex;

const rs = new stream.Readable();
const ws = new stream.Writable();
const ts = new stream.Transform();

rws = multipipe(rs, ws);
rws = multipipe(rs, ws, { objectMode: true });
rws = multipipe(rs, ws, err => {
  console.error(err);
});
rws = multipipe(rs, ws, { objectMode: true }, err => {
  console.error(err);
});
rws = multipipe(rs, ts, ws);
rws = multipipe();
rws = multipipe(ts);

// with an array of streams
rws = multipipe([rs, ts, ws]);
rws = multipipe([rs, ts, ws], { objectMode: true });
rws = multipipe([rs, ts, ws], err => {
  console.error(err);
});
rws = multipipe([rs, ts, ws], { objectMode: true }, err => {
  console.error(err);
});
rws = multipipe([]);
rws = multipipe([ts]);
