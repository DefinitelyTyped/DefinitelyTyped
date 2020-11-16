import { Request, Server } from '@hapi/hapi';
import * as pino from 'pino';
import * as HapiPino from 'hapi-pino';

const pinoLogger = pino();

const server = new Server();

function example1() {
    server
        .register({
            plugin: HapiPino,
            options: {
                logPayload: false,
                logRouteTags: false,
                stream: process.stdout,
                prettyPrint: process.env.NODE_ENV !== 'PRODUCTION',

                tags: {
                    trace: 'trace',
                    debug: 'debug',
                    info: 'info',
                    warn: 'warn',
                    error: 'error',
                    fatal: 'fatal',
                },
                allTags: 'info',
                serializers: {
                    req: (req: any) => console.log(req),
                },
                instance: pinoLogger,
                logEvents: false,
                mergeHapiLogData: false,
                ignorePaths: ['/testRoute'],
                level: 'debug',
                redact: ['test.property'],
            },
        })
        .then(() => {
            server.logger.debug('using logger object directly');

            server.route({
                method: 'GET',
                path: '/',
                handler: (request, h) => {
                    request.logger.debug('using logger directly');
                },
            });
        });
}

function example2() {
    server.register({
        plugin: HapiPino,
        options: {
            redact: {
                paths: ['test.property', 'another.property'],
                remove: true,
            },
            logRequestStart: true,
            logRequestComplete: true,
            prettyPrint: {
                levelFirst: true,
                colorize: true,
                translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
                ignore: 'hostname,pid',
            },
            getChildBindings: (req: Request) => ({
                'x-request-id': req.headers['x-request-id'],
            }),
        },
    });
}

function example3() {
    HapiPino.register(server, {
        ignorePaths: ['/testRoute'],
        level: 'debug',
        tags: {
            trace: 'trace',
            debug: 'debug',
        },
        redact: ['test.property'],
    });
}

function example4() {
    server.register({
        plugin: HapiPino,
        options: {
            logRequestStart: (req: Request) => req.path !== '/ping',
            logRequestComplete: (req: Request) => req.path !== '/ping',
            getChildBindings: (req: Request) => ({}),
        },
    });
}
