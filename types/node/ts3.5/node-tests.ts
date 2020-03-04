// tslint:disable-next-line:no-bad-reference
import '../ts3.2/node-tests';
import '../assert';
import '../buffer';
import '../child_process';
import '../cluster';
import '../crypto';
import '../dgram';
import '../ts3.2/fs';
import '../ts3.2/global';
import '../http';
import '../http2';
import '../net';
import '../os';
import '../path';
import '../perf_hooks';
import '../process';
import '../querystring';
import '../readline';
import '../repl';
import '../stream';
import '../tls';
import '../tty';
import '../ts3.2/util';
import '../worker_threads';
import '../zlib';

/////////////////////////////////////////////////////
/// WASI tests : https://nodejs.org/api/wasi.html ///
/////////////////////////////////////////////////////

import { WASI } from 'wasi';

const wasi = new WASI({
  args: process.argv,
  env: process.env,
  preopens: {
    '/sandbox': '/some/real/path/that/wasm/can/access'
  }
});
const importObject = { wasi_unstable: wasi.wasiImport };
(async () => {
  const wasm = await WebAssembly.compile(Buffer.from('dummy'));
  const instance = await WebAssembly.instantiate(wasm, importObject);
  wasi.start(instance);
})();
