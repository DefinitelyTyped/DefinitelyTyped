declare module 'aurelia-logging-console/index' {
	export class ConsoleAppender {
	    constructor();
	    debug(logger: any, message: any, ...rest: any[]): void;
	    info(logger: any, message: any, ...rest: any[]): void;
	    warn(logger: any, message: any, ...rest: any[]): void;
	    error(logger: any, message: any, ...rest: any[]): void;
	}

}
declare module 'aurelia-logging-console' {
	export * from 'aurelia-logging-console/index';
}
