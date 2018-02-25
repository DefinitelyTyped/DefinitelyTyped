import SumoLogger = require('sumo-logger');
import expect = require('expect');

const onErrorSpy = expect.createSpy();
const onSuccessSpy = expect.createSpy();

const logger = new SumoLogger({
    endpoint: 'http://example.com/',
    onSuccess() {
        console.log('success');
    },
    onError: onErrorSpy,
});

expect(logger.flushLogs).toExist();
expect(logger.log).toExist();

logger.log('message');
logger.log({ json: 'object' });

expect(onErrorSpy).toHaveBeenCalled();
expect(onErrorSpy.calls.length).toBe(2);
expect(onSuccessSpy).toNotHaveBeenCalled();
