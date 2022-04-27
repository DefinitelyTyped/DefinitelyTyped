// Type definitions for non-npm package Node.js 12.20
// Project: https://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// NOTE: These definitions support NodeJS and TypeScript 3.7.
// This isn't strictly needed since 3.7 has the assert module, but this way we're consistent.
// Typically type modifications should be made in base.d.ts instead of here

// Reference required types from the default lib:
/// <reference lib="es2018" />
/// <reference lib="esnext.asynciterable" />
/// <reference lib="esnext.intl" />
/// <reference lib="esnext.bigint" />

/// <reference path="assert.d.ts" />
/// <reference path="globals.d.ts" />
/// <reference path="async_hooks.d.ts" />
/// <reference path="buffer.d.ts" />
/// <reference path="child_process.d.ts" />
/// <reference path="cluster.d.ts" />
/// <reference path="console.d.ts" />
/// <reference path="constants.d.ts" />
/// <reference path="crypto.d.ts" />
/// <reference path="dgram.d.ts" />
/// <reference path="dns.d.ts" />
/// <reference path="domain.d.ts" />
/// <reference path="events.d.ts" />
/// <reference path="fs.d.ts" />
/// <reference path="http.d.ts" />
/// <reference path="http2.d.ts" />
/// <reference path="https.d.ts" />
/// <reference path="inspector.d.ts" />
/// <reference path="module.d.ts" />
/// <reference path="net.d.ts" />
/// <reference path="os.d.ts" />
/// <reference path="path.d.ts" />
/// <reference path="perf_hooks.d.ts" />
/// <reference path="process.d.ts" />
/// <reference path="punycode.d.ts" />
/// <reference path="querystring.d.ts" />
/// <reference path="readline.d.ts" />
/// <reference path="repl.d.ts" />
/// <reference path="stream.d.ts" />
/// <reference path="string_decoder.d.ts" />
/// <reference path="timers.d.ts" />
/// <reference path="tls.d.ts" />
/// <reference path="trace_events.d.ts" />
/// <reference path="tty.d.ts" />
/// <reference path="url.d.ts" />
/// <reference path="util.d.ts" />
/// <reference path="v8.d.ts" />
/// <reference path="vm.d.ts" />
/// <reference path="wasi.d.ts" />
/// <reference path="worker_threads.d.ts" />
/// <reference path="zlib.d.ts" />
/// <reference path="globals.global.d.ts" />
