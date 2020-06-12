import * as convict from 'convict';
import validator from 'validator';
import { safeLoad } from 'js-yaml';

// define a schema

// straight from the convict tests
const format: convict.Format = {
    name: 'float-percent',
    validate(val) {
        if (val !== 0 && (!val || val > 1 || val < 0)) {
            throw new Error('must be a float between 0 and 1, inclusive');
        }
    },
    coerce(val) {
        return parseFloat(val);
    }
};

convict.addFormat(format);
convict.addFormats({
    prime: {
        validate(val) {
            function isPrime(n: number) {
                if (n <= 1) return false; // zero and one are not prime
                for (let i = 2; i * i <= n; i++) {
                    if (n % i === 0) return false;
                }
                return true;
            }
            if (!isPrime(val)) throw new Error('must be a prime number');
        },
        coerce(val) {
            return parseInt(val, 10);
        }
    }
});

convict.addParser({ extension: 'json', parse: JSON.parse });
convict.addParser([
    { extension: 'json', parse: JSON.parse },
    { extension: ['yml', 'yaml'], parse: safeLoad }
]);

const conf = convict({
    env: {
        doc: 'The applicaton environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
        arg: 'node-env',
    },
    ip: {
        doc: 'The IP address to bind.',
        format: 'ipaddress',
        default: '127.0.0.1',
        env: 'IP_ADDRESS',
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 0,
        env: 'PORT',
        arg: 'port',
    },
    key: {
        doc: "API key",
        format: (val: string) => {
            if (!validator.isUUID(val)) {
                throw new Error('must be a valid UUID');
            }
        },
        default: '01527E56-8431-11E4-AF91-47B661C210CA'
    },
    db: {
        ip: {
            doc: 'The IP address to bind.',
            format: 'ipaddress',
            default: '127.0.0.1',
            env: 'IP_ADDRESS',
        },
        port: {
            doc: 'The port to bind.',
            format: 'port',
            default: 0,
            env: 'PORT',
            arg: 'port',
        },
        password: {
            doc: 'The database password.',
            default: 'secret',
            format: String,
            sensitive: true,
        },
    },
    primeNumber: {
        format: 'prime',
        default: 17
    },
    percentNumber: {
        format: 'float-percent',
        default: 0.5
    },
});

// load environment dependent configuration

interface LoadType {
    primeNumber: number;
    isPrime: boolean;
}

const env = conf.get('env');
conf.loadFile(`./config/${env}.json`);
conf.loadFile(['./configs/always.json', './configs/sometimes.json']);

// tslint:disable-next-line:no-invalid-template-strings
conf.loadFile<LoadType>('./config/${env}.yaml');

// perform validation

conf.validate({ strict: true });
conf.validate({ allowed: 'strict' });
conf.validate({ allowed: 'warn' });

// Chaining

conf
    .loadFile(['./configs/always.json', './configs/sometimes.json'])
    .loadFile<{ envVar: any }>(`./config/${env}.json`)
    .load({ jsonKey: 'jsonValue' })
    .set('key', 'value')
    .validate({ allowed: 'warn' })
    .toString();

const port = conf.default('port');

if (conf.has('key')) {
    conf.set('the.awesome', true);
    conf.load({
        thing: {
            a: 'b'
        }
    });
}

conf.has('unknow.key');
conf.has<'db', 'ip'>('db.ip');

const schema = conf.getSchema();

const schemaVal = conf.getSchema().properties.db.properties.port.default;

conf.get();
conf.get('unknownkey');
conf.get('db');
conf.get('db.ip');
conf.get<'db', 'ip'>('db.ip');
conf.default('env');
conf.default('db.ip');
conf.default<'db', 'ip'>('db.ip');
conf.getSchema();
conf.getProperties();
conf.getSchemaString();
conf.toString();

const conf2 = convict(
    {
        port: {
            doc: 'The port to bind.',
            format: 'port',
            default: 0,
            env: 'PORT',
            arg: 'port',
        }
    },
    {
        env: {
            PORT: '12345'
        },
        args: []
    }
);

const port2 = conf2.get('port');
if (port2 !== 12345) {
    throw new Error(`Test failed. Expected injected environment variable to be reflected in config.`);
}

// vim:et:sw=2:ts=2
