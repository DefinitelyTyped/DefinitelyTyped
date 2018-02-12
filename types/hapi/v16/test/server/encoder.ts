
// From https://hapijs.com/api/16.1.1#serverencoderencoding-encoder

import * as Hapi from '../../';
import * as Zlib from 'zlib';
const server = new Hapi.Server();
server.connection({ port: 80, routes: { compression: { special: { chunkSize: 16 * 1024 } } } });

server.encoder('special', (options) => Zlib.createGzip(options));
