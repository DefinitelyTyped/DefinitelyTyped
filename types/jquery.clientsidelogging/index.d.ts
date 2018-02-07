// Type definitions for jquery.clientSideLogging
// Project: https://github.com/remybach/jQuery.clientSideLogging
// Definitions by: Diullei Gomes <https://github.com/diullei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface ClientSideLoggingClientInfoObject {
    location?: boolean;	//  The url to the page on which the error occurred.
    screen_size?: boolean;	//  The size of the user's screen (different to the window size because the window might not be maximized)
    user_agent?: boolean;	//  The user agent string.
    window_size?: boolean;	//  The window size.
}

interface ClientSideLoggingObject {
	error_url?: string;		// The url to which errors logs are sent
    info_url?: string;		// The url to which info logs are sent
    log_url?: string;		// The url to which standard logs are sent
    log_level?: number;		// The level at which to log. This allows you to keep the calls to the logging in your code and just change this variable to log varying degrees. 1 = only error, 2 = error & log, 3 = error, log & info
    native_error?: boolean;	// Whether or not to send native js errors as well (using window.onerror).
    hijack_console?: boolean;	// Hijacks the default console functionality (ie: all your console.error/info/log are belong to us).
    query_var?: string;		// The variable to send the log message through as.
    client_info?: ClientSideLoggingClientInfoObject;	// Configuration for what info about the client's browser is logged.
}

interface JQueryStatic {
    info: (what?: any) => any;
    error(what?: any): any;
    log: (what?: any) => any;
    clientSideLogging: (options: ClientSideLoggingObject) => any;
}
