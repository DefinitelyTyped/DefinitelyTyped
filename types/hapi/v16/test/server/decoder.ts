// From https://hapijs.com/api/16.1.1#serverdecoderencoding-decoder

import Hapi = require("hapi");
import Zlib = require("zlib");
const server = new Hapi.Server();
server.connection({ port: 80, routes: { payload: { compression: { special: { chunkSize: 16 * 1024 } } } } });

server.decoder("special", (options) => Zlib.createGunzip(options));
