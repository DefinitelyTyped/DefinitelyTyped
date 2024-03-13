/// <reference types="jquery" />

interface ClientSideLoggingClientInfoObject {
    location?: boolean | undefined; //  The url to the page on which the error occurred.
    screen_size?: boolean | undefined; //  The size of the user's screen (different to the window size because the window might not be maximized)
    user_agent?: boolean | undefined; //  The user agent string.
    window_size?: boolean | undefined; //  The window size.
}

interface ClientSideLoggingObject {
    error_url?: string | undefined; // The url to which errors logs are sent
    info_url?: string | undefined; // The url to which info logs are sent
    log_url?: string | undefined; // The url to which standard logs are sent
    log_level?: number | undefined; // The level at which to log. This allows you to keep the calls to the logging in your code and just change this variable to log varying degrees. 1 = only error, 2 = error & log, 3 = error, log & info
    native_error?: boolean | undefined; // Whether or not to send native js errors as well (using window.onerror).
    hijack_console?: boolean | undefined; // Hijacks the default console functionality (ie: all your console.error/info/log are belong to us).
    query_var?: string | undefined; // The variable to send the log message through as.
    client_info?: ClientSideLoggingClientInfoObject | undefined; // Configuration for what info about the client's browser is logged.
}

interface JQueryStatic {
    info: (what?: any) => any;
    error(what?: any): any;
    log: (what?: any) => any;
    clientSideLogging: (options: ClientSideLoggingObject) => any;
}
