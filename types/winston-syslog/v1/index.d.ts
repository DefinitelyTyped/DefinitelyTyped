// Type definitions for winston-syslog 1.0
// Project: https://github.com/indexzero/winston-syslog#readme
// Definitions by: Chris Barth <https://github.com/cjbarth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as winston from "winston";
export interface SyslogTransportOptions extends winston.GenericTextTransportOptions {
	host?: string;
	port?: number;
	path?: string;
	protocol?: string;
	pid?: number;
	facility?: string;
	localhost?: string;
	type?: string;
	app_name?: string;
	eol?: string;
}
export class Syslog extends winston.Transport implements winston.TransportInstance {
}
declare module "winston" {
	interface Transports {
		Syslog: Syslog;
	}
}
