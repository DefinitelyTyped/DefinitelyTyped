import stream = require('stream');
import map = require('through2-map');

const stripTags = map({wantStrings: true}, (str) => {
  return str.replace(/<.*?>/g, "");
});

process.stdin.pipe(stripTags);

const truncate = map((chunk) => {
  return chunk.slice(0, 10);
});

process.stdin.pipe(truncate);

const Ctor = map.ctor((chunk) => {
  return chunk.slice(0, 10);
});

new Ctor();
new Ctor({ objectMode: true, allowHalfOpen: true });

const Obj = map.obj((chunk) => {
  return chunk.slice(0, 10);
});

new Obj();
new Obj({ objectMode: true, allowHalfOpen: true });

const Objctor = map.objCtor((chunk) => {
  return chunk.slice(0, 10);
});

new Objctor();
new Objctor({ objectMode: true, allowHalfOpen: true });
