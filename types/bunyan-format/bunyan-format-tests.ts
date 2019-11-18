import BunyanFormatWritable = require('bunyan-format');
import { Writable } from 'stream';

const formatOut: Writable = new BunyanFormatWritable({ outputMode: 'short' });

const formatOut2: NodeJS.WritableStream = new BunyanFormatWritable({ outputMode: 'bunyan', levelInString: true });

const formatOut3: Writable = BunyanFormatWritable({ outputMode: 'short' });

const formatOut4: NodeJS.WritableStream = BunyanFormatWritable({ outputMode: 'bunyan', levelInString: true });
