import LoggerService from 'lesgo/services/LoggerService';

// $ExpectType LoggerService
const logger = new LoggerService({
    defaultMeta: {},
    transports: [
        {
            logType: 'console',
            level: 'debug',
            config: {
                getCreatedAt: true,
                tags: [
                    {
                        env: 'local',
                        service: 'lesgo',
                    },
                ],
            },
        },
    ],
});
logger.log('warn', 'SAVED TO DB', { data: { name: 'Leo' } }); // $ExpectType void
logger.error('SAVED TO DB', { data: { name: 'Leo' } }); // $ExpectType void
logger.warn('SAVED TO DB', { data: { name: 'Leo' } }); // $ExpectType void
logger.info('SAVED TO DB', { data: { name: 'Leo' } }); // $ExpectType void
logger.debug('SAVED TO DB', { data: { name: 'Leo' } }); // $ExpectType void
// $ExpectType void
logger.addMeta({
    ip: '127.0.0.1',
    userData: {
        name: 'Leo',
    },
});
logger.consoleLogger('debug', {
    ip: '127.0.0.1',
    extra: {
        name: 'Leo',
    },
    tags: [
        {
            env: 'local',
            service: 'lesgo',
        },
    ],
});
