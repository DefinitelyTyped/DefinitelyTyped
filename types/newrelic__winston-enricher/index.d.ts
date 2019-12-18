// Type definitions for @newrelic/winston-enricher 0.1
// Project: https://github.com/newrelic/newrelic-winston-logenricher-node
// Definitions by: wrumsby <https://github.com/wrumsby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as winston from 'winston';

declare function newrelicFormatter(opts?: any): winston.format;

export = newrelicFormatter;
