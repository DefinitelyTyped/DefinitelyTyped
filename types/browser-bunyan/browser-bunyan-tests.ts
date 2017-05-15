import * as bunyan from "browser-bunyan";

const log = bunyan.createLogger({
        name: 'play',
        serializers: bunyan.stdSerializers
});
log.debug({foo: 'bar'}, 'hi at debug');
log.trace('hi at trace');
