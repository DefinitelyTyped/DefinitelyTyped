import op = require('overload-protection');

const config1: op.ProtectionConfig = {
    production: true,
    clientRetrySecs: 2,
    sampleInterval: 1,
    maxEventLoopDelay: 40,
    maxHeapUsedBytes: 25,
    maxRssBytes: 321,
    errorPropagationMode: true,
    logging: console.log,
    logStatsOnReq: false,
};

const config2: op.ProtectionConfig = {
    logging: false,
};

const config3: op.ProtectionConfig = {
    logging: 'warn',
};

const instance = op('koa');

console.log(instance);
console.log(instance({ foo: 'bar' }, () => 'Hello'));
console.log(instance.overload);
console.log(instance.eventLoopOverload);
console.log(instance.heapUsedOverload);
console.log(instance.rssOverload);
console.log(instance.eventLoopDelay);
console.log(instance.maxEventLoopDelay);
console.log(instance.maxHeapUsedBytes);
console.log(instance.maxRssBytes);

const instance2 = op('express', config1);
console.log(instance2({ foo: 'bar' }, { hello: 'world' }, () => 'World'));

op('http', config2);
op('restify', config3);
