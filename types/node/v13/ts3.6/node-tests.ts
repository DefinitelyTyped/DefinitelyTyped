// tslint:disable-next-line:no-bad-reference
import '../ts3.4/node-tests';
import '../ts3.1/assert';
import '../ts3.1/buffer';
import '../ts3.1/child_process';
import '../ts3.1/cluster';
import '../ts3.1/crypto';
import '../ts3.1/dgram';
import '../ts3.1/ts3.2/fs';
import '../ts3.1/ts3.2/global';
import '../ts3.1/http';
import '../ts3.1/http2';
import '../ts3.1/net';
import '../ts3.1/os';
import '../ts3.1/path';
import '../ts3.1/perf_hooks';
import '../ts3.1/process';
import '../ts3.1/querystring';
import '../ts3.1/readline';
import '../ts3.1/repl';
import '../ts3.1/stream';
import '../ts3.1/tls';
import '../ts3.1/tty';
import '../ts3.1/ts3.2/util';
import '../ts3.1/worker_threads';
import '../ts3.1/zlib';

/////////////////////////////////////////////////////
/// WASI tests : https://nodejs.org/api/wasi.html ///
/////////////////////////////////////////////////////

import { WASI } from 'wasi';

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
