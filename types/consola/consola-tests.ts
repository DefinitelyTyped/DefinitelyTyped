import * as consola from 'consola';

consola.start('TEST');
consola.info('TEST');
consola.success('TEST');
consola.error('TEST');

const logger = new consola.Consola({
    level: 30,
});

logger.start('TEST');
logger.info('TEST');
logger.success('TEST');
logger.error('TEST');
