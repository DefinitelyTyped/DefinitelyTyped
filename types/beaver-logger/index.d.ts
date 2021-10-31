// Type definitions for beaver-logger 4.0
// Project: https://github.com/krakenjs/beaver-logger
// Definitions by: ispedals <https://github.com/ispedals>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export { Logger } from './logger';
export { LOG_LEVEL, PROTOCOL } from './constants';
export { canUseSendBeacon, extendIfDefined, isAmplitude, sendBeacon } from './util';
export { getHTTPTransport } from './http';
