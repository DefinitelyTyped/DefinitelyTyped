import newrelicFormatter = require('@newrelic/winston-enricher');
import * as winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    transports: new winston.transports.Console(),
    format: winston.format.combine(
        winston.format.label({label: 'test'}),
        newrelicFormatter()
    )
});

logger.debug('test');
