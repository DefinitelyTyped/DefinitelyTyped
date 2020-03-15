import http = require('http');
import pino = require('pino');
import pinoHttp = require('pino-http');
import { Writable } from 'stream';

const logger = pino();
const httpLogger = pinoHttp();

function handle(req: http.IncomingMessage, res: http.ServerResponse) {
  httpLogger(req, res);
  req.log.info('something else: %s', req.id);
  const err: Error | undefined = res.err;
}

pinoHttp({ logger });
pinoHttp({ genReqId: (req) => req.statusCode || 200 });
pinoHttp({ genReqId: (req) => 'foo' });
pinoHttp({ genReqId: (req) => Buffer.allocUnsafe(16) });
pinoHttp({ useLevel: 'error' });
pinoHttp({ prettyPrint: true });
pinoHttp({ autoLogging: false });
pinoHttp(new Writable());
pinoHttp({ customLogLevel(req, res) { return 'info'; } });
