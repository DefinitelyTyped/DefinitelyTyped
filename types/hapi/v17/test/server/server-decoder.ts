// https://github.com/hapijs/hapi/blob/master/API.md#-serverdecoderencoding-decoder
import {Server} from "hapi";
import * as Zlib from "zlib";

const server = new Server({ port: 80, routes: { payload: { compression: { special: { chunkSize: 16 * 1024 } } } } });
server.decoder('special', (options) => Zlib.createGunzip(options));

server.start();
