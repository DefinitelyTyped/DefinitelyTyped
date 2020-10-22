import Memcached = require('memcached');
import assert = require('assert');

function isString(expected?: string): void {
    if (expected !== undefined && typeof expected !== 'string') {
        throw new Error();
    }
}
function isArray(expected?: any[]): void {
    if (expected !== undefined && !Array.isArray(expected)) {
        throw new Error();
    }
}
function isNumber(expected?: number): void {
    if (expected !== undefined && typeof expected !== 'number') {
        throw new Error();
    }
}
function isBoolean(expected?: boolean): void {
    if (expected !== undefined && typeof expected !== 'boolean') {
        throw new Error();
    }
}
function isFunction(expected?: (...args: any[]) => void): void {
    if (expected !== undefined && typeof expected !== 'function') {
        throw new Error();
    }
}
function isVoid(expected?: undefined): void {
    if (expected !== undefined) {
        throw new Error();
    }
}

function test_global_options() {
    Memcached.config.maxKeySize = 250;
    Memcached.config.maxExpiration = 2592000;
    Memcached.config.maxValue = 1048576;
    Memcached.config.poolSize = 10;
    Memcached.config.algorithm = 'md5';
    Memcached.config.reconnect = 1000;
    Memcached.config.timeout = 100;
    Memcached.config.retries = 1;
    Memcached.config.failures = 5;
    Memcached.config.retry = 100;
    Memcached.config.remove = false;
    Memcached.config.failOverServers = undefined;
    Memcached.config.keyCompression = true;
    Memcached.config.idle = 5000;
}

function test_constructor_with_string() {
    const location = '127.0.0.1:11211';

    const memcached = new Memcached(location);
    memcached.end();
}

function test_constructor_with_array() {
    const location = [
        '127.0.0.1:11211',
        '127.0.0.1:11212',
        '127.0.0.1:11213'
    ];

    const memcached = new Memcached(location);
    memcached.end();
}

function test_constructor_with_object() {
    const location = {
        '127.0.0.1:11211': 1,
        '127.0.0.1:11212': 2,
        '127.0.0.1:11213': 3
    };

    const memcached = new Memcached(location);
    memcached.end();
}

function test_constructor_with_options() {
    const location = '127.0.0.1:11211';
    const options: Memcached.options = {
        maxKeySize: 250,
        maxExpiration: 2592000,
        maxValue: 1048576,
        poolSize: 10,
        algorithm: 'md5',
        reconnect: 18000000,
        timeout: 5000,
        retries: 5,
        failures: 5,
        retry: 30000,
        remove: false,
        failOverServers: undefined,
        keyCompression: true,
        idle: 5000,
    };

    const memcached = new Memcached(location, options);
    memcached.end();
}

const memcached = new Memcached('127.0.0.1:11211');

function test_events() {
    function isIssue(expected: Memcached.IssueData) {
        isString(expected.server);
        isArray(expected.tokens);
        isArray(expected.messages);
        isNumber(expected.failures);
        isNumber(expected.totalFailures);
        isNumber(expected.totalReconnectsAttempted);
        isNumber(expected.totalReconnectsSuccess);
        isNumber(expected.totalReconnectsFailed);
        isNumber(expected.totalDownTime);
    }
    memcached.on('issue', isIssue);
    memcached.on('failure', isIssue);
    memcached.on('reconnecting', isIssue);
    memcached.on('reconnect', isIssue);
    memcached.on('remove', isIssue);
}

function isCommandData(expected: Memcached.CommandData) {
    isNumber(expected.start);
    isNumber(expected.execution);
    isFunction(expected.callback);
    isString(expected.type);
    isString(expected.command);
    isArray(expected.validate);
    isBoolean(expected.redundancyEnabled);
    isString(expected.key);
    isNumber(expected.lifetime);
    isString(expected.cas);
}
function test_set() {
    memcached.set('key', 'value', 3600, function(err) {
        isCommandData(this);
    });
}
function test_touch() {
    memcached.touch('key', 3600, function(err) {
        isCommandData(this);
    });
}
function test_get() {
    memcached.get('key', function(err, data) {
        isCommandData(this);
    });
}
function test_getMulti() {
    memcached.getMulti(['foo', 'bar'], function(err, data) {
        isVoid(this);
        assert(typeof data, 'object');
    });
}
function test_cas() {
    const promises = [];
    const key = 'caskey';
    const value = 'casvalue';

    Promise.resolve()
    .then(() => new Promise<void>(resolve => {
        memcached.set(key, value, 0, function() {
            isCommandData(this);
            resolve();
        });
    }))
    .then(() => new Promise<void>(resolve => {
        memcached.gets(key, function(err, data) {
            isCommandData(this);
            memcached.cas(key, value, data.cas, 0, function(err, result) {
                isCommandData(this);
                assert(result);
                resolve();
            });
        });
    }))
    .then(() => new Promise<void>(resolve => {
        memcached.cas(key, value, '99', 0, function(err, result) {
            isCommandData(this);
            assert(!result);
            resolve();
        });
    }))
    ;
}

function test_replace() {
    const promises = [];
    const key = 'replacekey';
    const value = 'replacevalue';

    Promise.resolve()
    .then(() => new Promise<void>(resolve => {
        memcached.set(key, value, 0, () => {
            resolve();
        });
    }))
    .then(() => new Promise<void>(resolve => {
        memcached.replace(key, value, 0, function(err, result) {
            assert(result);
            isCommandData(this);
            resolve();
        });
    }))
    .then(() => new Promise<void>(resolve => {
        memcached.replace('noexistss', value, 0, function(err, result) {
            assert(!result);
            isCommandData(this);
            resolve();
        });
    }))
    ;
}
function test_add() {
    const promises = [];
    const key = 'addkey';
    const value = 'addvalue';

    Promise.resolve()
    .then(() => new Promise<void>(resolve => {
        memcached.add(key, value, 0, function(err, result) {
            assert(result);
            isCommandData(this);
            resolve();
        });
    }))
    .then(() => new Promise<void>(resolve => {
        memcached.add(key, value, 0, function(err, result) {
            assert(!result);
            isCommandData(this);
            resolve();
        });
    }))
    ;
}
function test_append() {
    const promises = [];
    const key = 'appendkey';
    const value = 'appendvalue';

    Promise.resolve()
    .then(() => new Promise<void>(resolve => {
        memcached.set(key, value, 0, (err, result) => {
            isBoolean(result);
            resolve();
        });
    }))
    .then(() => new Promise<void>(resolve => {
        memcached.append(key, value, (err, result) => {
            isBoolean(result);
            resolve();
        });
    }))
    ;
}
function test_prepend() {
    const promises = [];
    const key = 'prependkey';
    const value = 'prependvalue';
    Promise.resolve()
    .then(() => new Promise<void>(resolve => {
        memcached.set(key, value, 0, (err, result) => {
            isBoolean(result);
            resolve();
        });
    }))
    .then(() => new Promise<void>(resolve => {
        memcached.prepend(key, value, function(err, result) {
            isBoolean(result);
            isCommandData(this);
            resolve();
        });
    }))
    ;
}
function test_incr() {
    const promises = [];
    const key = 'incrkey';
    const value = 2;

    Promise.resolve()
    .then(() => new Promise<void>(resolve => {
        memcached.set(key, value, 0, (err, result) => {
            isBoolean(result);
            resolve();
        });
    }))
    .then(() => new Promise<void>(resolve => {
        memcached.incr(key, value, function(err, result) {
            assert.deepStrictEqual(result, 4);
            isCommandData(this);
            resolve();
        });
    }))
    .then(() => new Promise<void>(resolve => {
        memcached.incr('noexists', value, function(err, result) {
            assert.deepStrictEqual(result, false);
            isCommandData(this);
            resolve();
        });
    }))
    ;
}
function test_decr() {
    const promises = [];
    const key = 'decrkey';
    const value = 2;
    Promise.resolve()
    .then(() => new Promise<void>(resolve => {
        memcached.set(key, value, 0, function(err, result) {
            isCommandData(this);
            isBoolean(result);
            resolve();
        });
    }))
    .then(() => new Promise<void>(resolve => {
        memcached.decr(key, value, function(err, result) {
            assert.deepStrictEqual(result, 0);
            isCommandData(this);
            resolve();
        });
    }))
    .then(() => new Promise<void>(resolve => {
        memcached.decr('noexists', value, function(err, result) {
            assert.deepStrictEqual(result, false);
            isCommandData(this);
            resolve();
        });
    }))
    ;
}
function test_decr_2() {
    const promises = [];
    const key = 'delkey';
    const value = 'delvalue';
    Promise.resolve()
    .then(() => new Promise<void>(resolve => {
        memcached.set(key, value, 0, (err, result) => {
            isBoolean(result);
            resolve();
        });
    }))
    .then(() => new Promise<void>(resolve => {
        memcached.del(key, function(err, result) {
            isBoolean(result);
            isCommandData(this);
            resolve();
        });
    }))
    ;
}

function test_version() {
    memcached.version((err, data) => {
        for (const version of data) {
            isString(version.server);
            isString(version.version);
            isString(version.major);
            isString(version.minor);
            isString(version.bugfix);
        }
    });
}
function test_stats() {
    memcached.stats((err: any, data: Memcached.StatusData[]) => {
        isArray(data);
        for (const stat of data) {
            isString(stat.server);
        }
    });
}
function test_settings() {
    memcached.settings((err: any, data: Memcached.StatusData[]) => {
        isArray(data);
        for (const setting of data) {
            isString(setting.server);
        }
    });
}
function test_slabs() {
    memcached.slabs((err: any, data: Memcached.StatusData[]) => {
        isArray(data);
        for (const setting of data) {
            isString(setting.server);
        }
    });
}
let promise: Promise<any>;
function test_items() {
    promise = new Promise(resolve => {
        memcached.items((err, data) => {
            isArray(data);
            for (const setting of data) {
                isString(setting.server);
            }
            resolve(data);
        });
    });
}
function test_cachedump() {
    promise.then(data => {
        for (const node of data) {
            const server = node.server;
            delete node.server;
            Object.keys(node).forEach(slabid => {
                memcached.cachedump(server, Number(slabid), node[slabid].number, (err, data) => {
                    if (!Array.isArray(data)) data = [data];
                    data.forEach(cache => {
                        isNumber(cache.b);
                        isNumber(cache.s);
                        isString(cache.key);
                    });
                });
            });
        }
    });
}

function test_flush() {
    memcached.flush(function(err, results) {
        isVoid(this);
        isArray(results);
    });
}
