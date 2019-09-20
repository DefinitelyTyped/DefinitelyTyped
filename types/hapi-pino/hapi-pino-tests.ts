import { Server } from '@hapi/hapi';
import * as pino from 'pino';
import * as HapiPino from 'hapi-pino';

const pinoLogger = pino();

const server = new Server();

server.register({
    plugin: HapiPino,
    options: {
        logPayload: false,
        logRouteTags: false,
        stream: process.stdout,
        prettyPrint: process.env.NODE_ENV !== 'PRODUCTION',
        levelTags: {
            trace: 'trace',
            debug: 'debug',
            info: 'info',
            warn: 'warn',
            error: 'error'
        },
        allTags: 'info',
        serializers: {
            req: (req: any) => console.log(req)
        },
        instance: pinoLogger,
        logEvents: false,
        mergeHapiLogData: false,
        ignorePaths: ['/testRoute'],
        level: 'debug',
        redact: ['test.property']
    }
}).then(() => {
    server.logger().debug('using logger object directly');

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            request.logger.debug('using logger directly');
        }
    });
});
