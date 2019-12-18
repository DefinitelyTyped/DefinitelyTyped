// https://github.com/hapijs/hapi/blob/master/API.md#-serverencoderencoding-encoder
import { Server } from "@hapi/hapi";
import * as Zlib from "zlib";

const server = new Server({ port: 80, routes: { payload: { compression: { special: { chunkSize: 16 * 1024 } } } } });
server.encoder('special', (options) => Zlib.createGzip(options));

server.start();
