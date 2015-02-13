/// <reference path='convict.d.ts' />
/// <reference path='../validator/validator.d.ts' />

import convict = require('convict');
import validator = require('validator');

// define a schema

var conf = convict({
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
    format: (val: string) => validator.isUUID(val),
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
    }
  }

});


// load environment dependent configuration

var env = conf.get('env');
var dbip = conf.get('db.ip');
conf.loadFile('./config/' + env + '.json');
conf.loadFile(['./configs/always.json', './configs/sometimes.json']);

// perform validation

conf.validate();

var port: number = conf.default('port');

if (conf.has('key')) {
  conf.set('the.awesome', true);
  conf.load({
    thing: {
      a: 'b'
    }
  });
}
// vim:et:sw=2:ts=2
