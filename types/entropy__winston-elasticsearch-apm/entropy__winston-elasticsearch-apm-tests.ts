import ElasticsearchApm from '@entropy/winston-elasticsearch-apm';
import Agent from 'elastic-apm-node';
import winston from 'winston';

// $ExpectType Agent
const apm = Agent.start({
    serviceName: 'app',
    serverUrl: 'http://localhost:8200',
});

// $ExpectType Logger
const logger = winston.createLogger({
    transports: [new ElasticsearchApm({ apm })] // $ExpectType ElasticsearchApm[]
});

// $ExpectType Logger
logger.log({ level: 'error', message: 'an error' });
