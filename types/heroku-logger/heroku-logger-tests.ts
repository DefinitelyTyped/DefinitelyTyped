import * as logger from 'heroku-logger';
// tslint:disable-next-line:no-duplicate-imports
import { Logger, LoggerConfig } from 'heroku-logger';

logger.trace(''); // $ExpectType void
logger.debug(''); // $ExpectType void
logger.info(''); // $ExpectType void
logger.warn(''); // $ExpectType void
logger.error(''); // $ExpectType void
logger.fatal(''); // $ExpectType void
new logger.Logger({}); // $ExpectType Logger
