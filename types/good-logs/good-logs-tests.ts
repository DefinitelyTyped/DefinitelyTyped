import goodlog from 'good-logs'

/**
 * Custom log
 */
goodlog.log('this is a default log message')

/**
 * log message in type info
 */
goodlog.info('this is an info message')

/**
 * log message in type warn
 */
goodlog.warn('this is a warning message')

/**
 * log message in type error
 */
goodlog.error('this is an error message')

/**
 * log message in type debug
 */
goodlog.debug('Hello World')

/**
 * log message in type array in a table
 */
goodlog.tbl({ hello: 'world' })

/**
 * Custom log with color
 */
goodlog.custom('red', 'Hello World')

/**
 * Preset: Server log for Express
 */
goodlog.server(3000, 'v1', true, true)

/**
 * Preset: Database log for Database connection
 */
goodlog.db('HOST', 'DATABASE', true)
