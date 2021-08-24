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
    res[pinoHttp.startTime] = Date.now();
}

function handle_with_next(req: http.IncomingMessage, res: http.ServerResponse, next: () => void) {
    pinoHttp()(req, res, () => {
        // Do a thing.
        next();
    });
}

pinoHttp({ logger });
pinoHttp({ logger }).logger = logger;
pinoHttp({ genReqId: req => req.statusCode || 200 });
pinoHttp({ genReqId: req => 'foo' });
pinoHttp({ genReqId: req => Buffer.allocUnsafe(16) });
pinoHttp({ useLevel: 'error' });
pinoHttp({ prettyPrint: true });
pinoHttp({ autoLogging: false });
pinoHttp({ autoLogging: { ignore: req => req.headers['user-agent'] === 'ELB-HealthChecker/2.0' } });
pinoHttp({ autoLogging: { ignorePaths: ['/health'] } });
pinoHttp({ autoLogging: { ignorePaths: [/\/health/] } });
pinoHttp({ autoLogging: { ignorePaths: ['/health'], getPath: req => req.url } });
pinoHttp({ customSuccessMessage: res => 'Success' });
pinoHttp({ customErrorMessage: (error, res) => `Error - ${error}` });
pinoHttp({ customAttributeKeys: { req: 'req' } });
pinoHttp({ customAttributeKeys: { res: 'res' } });
pinoHttp({ customAttributeKeys: { err: 'err' } });
pinoHttp({ customAttributeKeys: { responseTime: 'responseTime' } });
pinoHttp({ customAttributeKeys: { req: 'req', res: 'res', err: 'err', responseTime: 'responseTime' } });
pinoHttp({ customLogLevel: (req, res) => 'info' });
pinoHttp({ reqCustomProps: (req, res) => ({ key1: 'value1', 'x-key-2': 'value2' }) });
pinoHttp({ wrapSerializers: false });
pinoHttp(new Writable());
