import glossy = require('glossy');
import winston = require('winston');
import { Syslog, SyslogTransportOptions } from 'winston-syslog';

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
    customProducer: glossy.Produce
};

const syslogTransport = new Syslog(syslogOptions);

winston.add(syslogTransport);

const logger: winston.Logger = winston.createLogger({
  transports: [
    syslogTransport
  ]
});
