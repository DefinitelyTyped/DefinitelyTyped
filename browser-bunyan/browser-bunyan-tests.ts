import * as bunyan from "browser-bunyan";

var log = bunyan.createLogger({
        name: 'play',
        serializers: bunyan.stdSerializers
});
log.debug({foo: 'bar'}, 'hi at debug');
log.trace('hi at trace');
