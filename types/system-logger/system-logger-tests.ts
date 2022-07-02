import * as SystemLogger from 'system-logger';

const { Logger } = SystemLogger;

const logConfig = { level: SystemLogger.level.silly };
const logger = new Logger(logConfig);

logger.log('error', `Fail Log Message`, { error: 'err message' });
logger.log('error', `Fail Log Message`, new Error('Timeout'));
logger.log('error', `Fail Log Message`, [1, '1234']);
logger.log('warn', `Warn Log Message`, { warn: 'Should not happening' });
logger.log('info', `Information Log Message`, 'test message');
logger.log('info', `Information Log Message`, { cId: '34a343a3-7cd0-4d88-a8ed-733ba36d3a3c', action: { id: 879 } });
logger.log('verbose', `Verbose Log Message`, { event: { type: 'open', message: 'test' } });
logger.log('debug', `Debug Log Message`, { action: { id: 123, name: 'tester' } });
logger.log('silly', `Silly Log Message`);
