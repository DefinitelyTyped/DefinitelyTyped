import LightningFS from '@isomorphic-git/lightning-fs';

const FS = new LightningFS('FS');

const originalData = new Uint8Array([138, 132]);

FS.writeFile('/sample.txt', originalData).then(() => {
  FS.readFile('./sample.txt').then((data: Uint8Array) => {
    console.assert(data[0] === originalData[0]);
  });
});
