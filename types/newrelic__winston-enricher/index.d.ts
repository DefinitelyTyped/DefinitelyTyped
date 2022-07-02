// Type definitions for @newrelic/winston-enricher 0.1
// Project: https://github.com/newrelic/newrelic-winston-logenricher-node
// Definitions by: wrumsby <https://github.com/wrumsby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Format } from 'logform';

declare function newrelicFormatter(): Format;

export = newrelicFormatter;
