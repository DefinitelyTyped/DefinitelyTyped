import * as snappy from 'snappy';

snappy.compress('beep boop', (err, compressed) => {
  if (err) {
    throw err;
  }
  console.log(compressed.slice(0, 1));
});

const data = snappy.compressSync('beep boop');
const otherData = snappy.compressSync(Buffer.from('beep boop'));
snappy.uncompress(data, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString('UTF8'));
});
snappy.uncompress(otherData, { asBuffer: false }, (err, original) => {
  if (err) {
    throw err;
  }
  console.log('the original String', original);
});

snappy.uncompressSync(data);
snappy.uncompressSync(data, { asBuffer: false });
snappy.isValidCompressed(data, (err, valid) => {
  if (err) {
    throw err;
  }
  console.log(valid);
});
if (snappy.isValidCompressedSync(data)) {
  console.log('valid!');
}
