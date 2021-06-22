import LogStub = require('logstub');

// Ensure type compatability with bunyan
// tslint:disable-next-line: no-object-literal-type-assertion
const bunyanStub: Pick<LogStub, Extract<keyof import('bunyan'), keyof LogStub>> = {} as import('bunyan');

// Ensure type compatability with console
const consoleStub: Pick<Console, Extract<keyof Console, keyof LogStub>> = console;
