/// <reference path="winston.d.ts" />

import winston = require('winston');

var str: string;
var bool: boolean;
var metadata: any;
var options: any;
var value: any;
var transport: winston.Transport;

transport = winston.transports.File;
transport = winston.transports.Console;
transport = winston.transports.Loggly;

winston.log(str, str);
winston.log(str, str, metadata);
winston.debug(str);
winston.debug(str, metadata);
winston.info(str);
winston.info(str, metadata);
winston.warn(str);
winston.warn(str, metadata);
winston.error(str);
winston.error(str, metadata);

winston.add(transport, options);
winston.remove(transport);

winston.profile(str);

winston.query(options, (err: any, results: any) => {

});

value = winston.stream(options);

winston.handleExceptions(transport);
winston.exitOnError = bool;

