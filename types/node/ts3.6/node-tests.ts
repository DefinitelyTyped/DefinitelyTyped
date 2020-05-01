import '../ts3.4/node-tests';
import '../test/globals';
import '../test/wasi';

import { Buffer } from 'buffer';
import * as process from 'process';
import { WASI } from 'wasi';

/////////////////////////////////////////////////////
/// WASI tests : https://nodejs.org/api/wasi.html ///
/////////////////////////////////////////////////////

const wasi = new WASI({
  args: process.argv,
  env: process.env,
  preopens: {
    '/sandbox': '/some/real/path/that/wasm/can/access'
  },
  returnOnExit: false,
});
const importObject = { wasi_unstable: wasi.wasiImport };
(async () => {
  const wasm = await WebAssembly.compile(Buffer.from('dummy'));
  const instance = await WebAssembly.instantiate(wasm, importObject);
  wasi.start(instance);
})();
