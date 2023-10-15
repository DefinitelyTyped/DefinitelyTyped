/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *     build info:                                                               *
 *       - fibjs    : 0.25.0                                                   *
 *       - date    : Jun 12 2018 07:22:40                                     *
 *                                                                         *
 ***************************************************************************/

/**
 * @author Richard <richardo2016@gmail.com>
 *
 */



/// <reference path="console.d.ts" />
/// <reference path="coroutine.d.ts" />
/// <reference path="global.d.ts" />
/// <reference path="gui.d.ts" />
/// <reference path="os.d.ts" />
/// <reference path="process.d.ts" />
/// <reference path="registry.d.ts" />
/// <reference path="timers.d.ts" />
/// <reference path="tty.d.ts" />
/// <reference path="fs.d.ts" />
/// <reference path="io.d.ts" />
/// <reference path="path.d.ts" />
/// <reference path="path_posix.d.ts" />
/// <reference path="path_win32.d.ts" />
/// <reference path="dgram.d.ts" />
/// <reference path="dns.d.ts" />
/// <reference path="http.d.ts" />
/// <reference path="mq.d.ts" />
/// <reference path="net.d.ts" />
/// <reference path="punycode.d.ts" />
/// <reference path="querystring.d.ts" />
/// <reference path="ssl.d.ts" />
/// <reference path="url.d.ts" />
/// <reference path="ws.d.ts" />
/// <reference path="zmq.d.ts" />
/// <reference path="base32.d.ts" />
/// <reference path="base64.d.ts" />
/// <reference path="base64vlq.d.ts" />
/// <reference path="bson.d.ts" />
/// <reference path="encoding.d.ts" />
/// <reference path="hex.d.ts" />
/// <reference path="iconv.d.ts" />
/// <reference path="json.d.ts" />
/// <reference path="string_decoder.d.ts" />
/// <reference path="crypto.d.ts" />
/// <reference path="hash.d.ts" />
/// <reference path="zip.d.ts" />
/// <reference path="zlib.d.ts" />
/// <reference path="assert.d.ts" />
/// <reference path="profiler.d.ts" />
/// <reference path="test.d.ts" />
/// <reference path="db.d.ts" />
/// <reference path="gd.d.ts" />
/// <reference path="util.d.ts" />
/// <reference path="uuid.d.ts" />
/// <reference path="vm.d.ts" />
/// <reference path="xml.d.ts" />
/// <reference path="constants.d.ts" />

import _Global = require('global');
import _Process = require('process');

type GlobalExportsType = any;
interface ModuleType {
    exports: GlobalExportsType;
}

declare global {
    var exports: GlobalExportsType;
    const module: ModuleType;

    const Buffer: typeof _Global.Buffer
    const Int64: typeof _Global.Int64
    /** const console: console; */
    const process: typeof _Global.process
    const Master: typeof _Global.Master
    const global: typeof _Global.global
    /** const run: null; */
    const require: typeof _Global.require
    const argv: typeof _Global.argv
    const __filename: typeof _Global.__filename
    const __dirname: typeof _Global.__dirname
    /** const setTimeout: Timer; */
    /** const clearTimeout: null; */
    /** const setInterval: Timer; */
    /** const clearInterval: null; */
    const setHrInterval: typeof _Global.setHrInterval
    const clearHrInterval: typeof _Global.clearHrInterval
    /** const setImmediate: Timer; */
    /** const clearImmediate: null; */
    const GC: typeof _Global.GC
    const repl: typeof _Global.repl
} /** end of `declare global` */


