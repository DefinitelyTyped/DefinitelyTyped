import SumoLogger = require('sumologic');
import expect = require('expect');

const logger = new SumoLogger("collectorCode");

expect(logger.replaceConsole).toExist();
expect(logger.restoreConsole).toExist();
expect(logger.augmentConsole).toExist();

expect(logger.log).toExist();
expect(logger.info).toExist();
expect(logger.error).toExist();
expect(logger.warn).toExist();
