import * as HashRing from "hashring";

const ring = new HashRing([
  '127.0.0.1',
  '127.0.0.2',
  '127.0.0.3',
  '127.0.0.4'
], 'md5', {
  'max cache size': 10000
});

ring.get('foo bar banana');

ring.range('foo bar banana', 2);

ring.add('127.0.0.7').remove('127.0.0.1');
