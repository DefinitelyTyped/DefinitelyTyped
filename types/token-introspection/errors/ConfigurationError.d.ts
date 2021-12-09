import IntrospectionError = require('./IntrospectionError');

declare class ConfigurationError extends IntrospectionError {
    constructor(message?: string);
}

export = ConfigurationError;
