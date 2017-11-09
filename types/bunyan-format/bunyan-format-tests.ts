import bunyan = require('bunyan');
import BunyanFormatWritable = require('bunyan-format');

const formatOut = new BunyanFormatWritable({ outputMode: 'short' });

const log = bunyan.createLogger({ name: 'app', stream: formatOut, level: 'debug' });

const formatOut2 = new BunyanFormatWritable({ outputMode: 'bunyan', levelInString: true });
