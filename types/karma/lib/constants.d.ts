declare const constants: Constants;

interface Constants {
    /** The current version of karma */
    VERSION: string;
    /** The default port used for the karma server */
    DEFAULT_PORT: string | number;
    /** The default hostname used for the karma server */
    DEFAULT_HOSTNAME: string;
    /** The default listen address used for the karma server */
    DEFAULT_LISTEN_ADDR: string;
    /** The value for disabling logs */
    LOG_DISABLE: 'OFF';
    /** The value for the log `error` level */
    LOG_ERROR: 'ERROR';
    /** The value for the log `warn` level */
    LOG_WARN: 'WARN';
    /** The value for the log `info` level */
    LOG_INFO: 'INFO';
    /** The value for the log `debug` level */
    LOG_DEBUG: 'DEBUG';
    LOG_LOG: 'LOG';
    /** An array of log levels in descending order, i.e. LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_LOG, LOG_INFO, and LOG_DEBUG */
    LOG_PRIORITIES: ['OFF', 'ERROR', 'WARN', 'LOG', 'INFO', 'DEBUG'];

    /** The default color pattern for log output */
    COLOR_PATTERN: string;
    /** The default pattern for log output without color */
    NO_COLOR_PATTERN: string;
    /** The default console appender */
    CONSOLE_APPENDER: {
        type: string;
        layout: {
            type: string;
            pattern: string;
        };
    };
    /** The exit code */
    EXIT_CODE: string;
}

export = constants;
