import * as LogProcessErrors from 'log-process-errors';

/**
 * Initialize log-process-errors with example options.
 */
const reset = LogProcessErrors({
    log(error, level) {
        const someErr: Error = error;
        const someLogLevel: LogProcessErrors.LogLevel = level;
    },

    level: { multipleResolves: 'debug' },

    exitOn: ['uncaughtException', 'unhandledRejection'],

    testing: 'ava',

    colors: false,
});

/**
 * Restore default Node.js error handling functionality.
 */
reset();
