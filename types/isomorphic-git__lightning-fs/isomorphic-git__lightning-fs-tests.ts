import LightningFS from '@isomorphic-git/lightning-fs';

const FS = new LightningFS('FS');

const originalData = new Uint8Array([138, 132]);

FS.writeFile('/sample.txt', originalData, undefined, () => {
  FS.readFile('./sample.txt', undefined, (_err: Error, data: string | Uint8Array) => {
    console.assert(data[0] === originalData[0]);
  });
});
