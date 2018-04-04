import winston = require('winston');
import { SyslogTransportOptions } from 'winston-syslog';

const str = "";
const bool  = true;
const num = 1;
const obj: any = {};

const syslogOptions: SyslogTransportOptions = {
    host: str,
    port: num,
    path: str,
    protocol: str,
    pid: num,
    facility: str,
    localhost: str,
    type: str,
    app_name: str,
    eol: str,
    json: bool,
    colorize: bool,
    colors: str,
    prettyPrint: bool,
    showLevel: bool,
    label: str,
    depth: num,
};

winston.add(winston.transports.Syslog, syslogOptions);

const logger: winston.LoggerInstance = new (winston.Logger)({
  transports: [
    new (winston.transports.Syslog)(syslogOptions),
  ]
});
