import utilModule = require('@node-red/util');
import { EventEmitter } from 'events';
import { NodeMessage, Node } from '@node-red/registry';

function i18nTests() {
    const i18n = utilModule.i18n;

    // $ExpectType string
    i18n._('my.key1');

    // $ExpectType string
    i18n._('my.key2', { dataKey: 'dataVal' });

    // $ExpectType string[]
    i18n.availableLanguages('editor');
}

function logTests() {
    const log = utilModule.log;

    // $ExpectType string
    log._('my.key1');
    // $ExpectType string
    log._('my.key2', { dataKey: 'dataVal' });

    const logHandler = new EventEmitter();
    log.addHandler(logHandler);
    log.removeHandler(logHandler);

    // $ExpectType boolean
    log.metric();
    // $ExpectError
    log.log({});
    log.log({ level: log.INFO, msg: 'log' });
    log.info('log info');
    log.warn('log warn');
    log.error('log error');
    log.trace('log trace');
    log.debug('log debug');
    log.audit({ level: log.INFO, msg: 'audit' });
}

function utilTests(someNode: Node) {
    const util = utilModule.util;

    // $ExpectType string
    util.generateId();

    // $ExpectType string
    util.ensureString(123);
    // $ExpectType string
    util.ensureString({});
    // $ExpectType string
    util.ensureString('abc');

    // $ExpectType Buffer
    util.ensureBuffer(123);
    // $ExpectType Buffer
    util.ensureBuffer({});
    // $ExpectType Buffer
    util.ensureBuffer('abc');

    interface SomeNodeMsg extends NodeMessage {
        key: string;
    }
    const msg: SomeNodeMsg = {
        key: 'value',
    };
    const msgClone = util.cloneMessage(msg);
    // $ExpectType string
    const msgKey = msgClone.key;
    // $ExpectError
    const msgWrongKey = msgClone.wrongKey;

    // $ExpectType boolean
    util.compareObjects({}, {});

    // $ExpectType (string | number)[]
    util.normalisePropertyExpression('a["b"].c');

    // $ExpectType any
    util.getMessageProperty({}, 'key');

    // $ExpectType any
    util.getObjectProperty({}, 'key');

    // $ExpectType boolean
    util.setMessageProperty({}, 'key', { dataKey: 'dataVal' });
    // $ExpectType boolean
    util.setMessageProperty({}, 'key', { dataKey: 'dataVal' }, true);

    // $ExpectType boolean
    util.setObjectProperty({}, 'key', { dataKey: 'dataVal' });
    // $ExpectType boolean
    util.setObjectProperty({}, 'key', { dataKey: 'dataVal' }, true);

    // $ExpectType string
    util.getSetting(someNode, 'name');

    // $ExpectType string
    util.evaluateEnvProperty('name', someNode);

    // $ExpectType any
    util.evaluateNodeProperty('value', 'type', someNode, {});
    // $ExpectType void
    util.evaluateNodeProperty('value', 'type', someNode, {}, (err: Error | null, res: any): void => {});

    const parsedStore = util.parseContextStore('#:(file)::foo');
    // $ExpectType string | undefined
    parsedStore.store;
    // $ExpectType string
    parsedStore.key;

    // $ExpectType Expression
    const jsonataExpr = util.prepareJSONataExpression('expr', someNode);

    // $ExpectType any
    util.evaluateJSONataExpression(jsonataExpr, {});
    // $ExpectType void
    util.evaluateJSONataExpression(jsonataExpr, {}, (err: Error | null, res: any): void => {});

    // $ExpectType string
    util.normaliseNodeTypeName('a-random node type');

    const encoded = util.encodeObject({ msg: 123 });
    // $ExpectType string
    encoded.format;
    // $ExpectType string
    encoded.msg;
}
