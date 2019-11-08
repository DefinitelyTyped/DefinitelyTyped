import BunyanFormatWritable = require('bunyan-format');

const formatOut = new BunyanFormatWritable({ outputMode: 'short' });

const formatOut2 = new BunyanFormatWritable({ outputMode: 'bunyan', levelInString: true });

const formatOut3 = BunyanFormatWritable({ outputMode: 'short' });

const formatOut4 = BunyanFormatWritable({ outputMode: 'bunyan', levelInString: true });