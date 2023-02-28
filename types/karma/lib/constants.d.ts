/** The current version of karma */
export const VERSION: string;
/** The default port used for the karma server */
export const DEFAULT_PORT: string | number;
/** The default hostname used for the karma server */
export const DEFAULT_HOSTNAME: string;
/** The default listen address used for the karma server */
export const DEFAULT_LISTEN_ADDR: string;
/** The value for disabling logs */
export const LOG_DISABLE: 'OFF';
/** The value for the log `error` level */
export const LOG_ERROR: 'ERROR';
/** The value for the log `warn` level */
export const LOG_WARN: 'WARN';
/** The value for the log `info` level */
export const LOG_INFO: 'INFO';
/** The value for the log `debug` level */
export const LOG_DEBUG: 'DEBUG';
export const LOG_LOG: 'LOG';
/** An array of log levels in descending order, i.e. LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_LOG, LOG_INFO, and LOG_DEBUG */
export const LOG_PRIORITIES: [
    typeof LOG_DISABLE,
    typeof LOG_ERROR,
    typeof LOG_WARN,
    typeof LOG_LOG,
    typeof LOG_INFO,
    typeof LOG_DEBUG,
];

/** The default color pattern for log output */
export const COLOR_PATTERN: string;
/** The default pattern for log output without color */
export const NO_COLOR_PATTERN: string;
/** The default console appender */
export const CONSOLE_APPENDER: {
    type: string;
    layout: {
        type: string;
        pattern: string;
    };
};
/** The exit code */
export const EXIT_CODE: string;
