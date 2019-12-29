import bunyan = require('bunyan');
import BunyanFormatWritable = require('bunyan-format');
import { Writable } from 'stream';

const formatOut: Writable = new BunyanFormatWritable({ outputMode: 'short' });

const logger1 = bunyan.createLogger({
  name: 'formatOut',
  stream: formatOut,
});

const formatOut2: NodeJS.WritableStream = new BunyanFormatWritable({ outputMode: 'bunyan', levelInString: true });

const logger2 = bunyan.createLogger({
  name: 'formatOut2',
  stream: formatOut2,
});

const formatOut3: Writable = BunyanFormatWritable({ outputMode: 'short' });

const logger3 = bunyan.createLogger({
  name: 'formatOut3',
  stream: formatOut3,
});

const formatOut4: NodeJS.WritableStream = BunyanFormatWritable({ outputMode: 'bunyan', levelInString: true });

const logger4 = bunyan.createLogger({
  name: 'formatOut4',
  stream: formatOut4,
});
