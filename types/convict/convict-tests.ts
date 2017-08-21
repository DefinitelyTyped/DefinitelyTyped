import convict = require('convict');
import validator = require('validator');

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

const env = conf.get('env');
const dbip = conf.get('db.ip');
conf.loadFile(`./config/${env}.json`);
conf.loadFile(['./configs/always.json', './configs/sometimes.json']);

// perform validation

conf.validate({ strict: true });
conf.validate({ allowed: 'strict' });
conf.validate({ allowed: 'warn' });

// Chaining

conf
  .loadFile(['./configs/always.json', './configs/sometimes.json'])
  .loadFile(`./config/${env}.json`)
  .load({ jsonKey: 'jsonValue' })
  .set('key', 'value')
  .validate({ allowed: 'warn' })
  .toString();

const port: number = conf.default('port');

if (conf.has('key')) {
  conf.set('the.awesome', true);
  conf.load({
    thing: {
      a: 'b'
    }
  });
}

conf.get();
conf.getSchema();
conf.getProperties();
conf.getSchemaString();
conf.toString();

// vim:et:sw=2:ts=2
