import http = require('http');
import pino = require('pino');
import pinoHttp = require('pino-http');

const logger = pino();
const httpLogger = pinoHttp();

function handle(req: http.IncomingMessage, res: http.ServerResponse) {
  httpLogger(req, res);
  req.log.info('something else');
}

pinoHttp({ logger });
pinoHttp({ genReqId: (req) => req.statusCode || 200 });
pinoHttp({ useLevel: 'error' });
pinoHttp({ prettyPrint: true });
