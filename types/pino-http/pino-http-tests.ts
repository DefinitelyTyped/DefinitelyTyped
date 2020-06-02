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
pinoHttp({ genReqId: req => req.statusCode || 200 });
pinoHttp({ genReqId: req => 'foo' });
pinoHttp({ genReqId: req => Buffer.allocUnsafe(16) });
pinoHttp({ useLevel: 'error' });
pinoHttp({ prettyPrint: true });
pinoHttp({ autoLogging: false });
pinoHttp({ autoLogging: { ignorePaths: ['/health'] } });
pinoHttp({ autoLogging: { ignorePaths: ['/health'], getPath: (req) => req.url } });
pinoHttp({ customSuccessMessage: req => 'Success' });
pinoHttp({ customErrorMessage: req => 'Error' });
pinoHttp({ customAttributeKeys: { req: 'req' } });
pinoHttp({ customAttributeKeys: { res: 'res' } });
pinoHttp({ customAttributeKeys: { err: 'err' } });
pinoHttp({ customAttributeKeys: { responseTime: 'responseTime' } });
pinoHttp({ customAttributeKeys: { req: 'req', res: 'res', err: 'err', responseTime: 'responseTime' } });
pinoHttp({ customLogLevel: (req, res) => 'info' });
pinoHttp(new Writable());
