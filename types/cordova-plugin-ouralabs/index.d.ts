declare namespace OuralabsPlugin {
    interface OuralabsStatic {
        /**
         * Log levels designate the severity of the log; used with the log() function.
         * Log levels are ordered from least severe to most severe.
         */
        LogLevel: {
            TRACE: number;
            DEBUG: number;
            INFO: number;
            WARN: number;
            ERROR: number;
            FATAL: number;
        };

        /**
         * Initialize the Ourlabs plugin with the given channel ID string value.
         * You can obtain your channel ID from the Ouralabs dashboard.
         *
         * @param channelId The ID of the channel that logs will be written to.
         * @param successCallback The success callback for this asynchronous function.
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        init(channelId: string, successCallback?: () => void, failureCallback?: (error: string) => void): void;

        /**
         * Used to ensure values logged via the plugin are also displayed in the browser's console.
         *
         * @param enable True to enable logs to show up in the browser's console, false  to disable.
         */
        setLogToBrowserConsole(enable: boolean): void;

        /**
         * Used to enable hooking of the browser's console logging functions (eg console.log,
         * console.error, etc) to ensure that these logs get logged via Ouralabs.
         *
         * @param enable True to enable hooking of the console log functions, false to disable.
         */
        setHookBrowserConsole(enable: boolean): void;

        /**
         * Allows setting of the three arbitrary attribute values that are stored with the device information.
         *
         * @param [string] attribute1 - The (optional) attribute value to set for the first attribute.
         * @param [string] attribute2 - The (optional) attribute value to set for the first attribute.
         * @param [string] attribute3 - The (optional) attribute value to set for the first attribute.
         * @param [function] successCallback - The success callback for this asynchronous function.
         * @param [function] failureCallback - The failure callback for this asynchronous function; receives an error string.
         */
        setAttributes(
            attribute1?: string,
            attribute2?: string,
            attribute3?: string,
            successCallback?: () => void,
            errorCallback?: (error: string) => void,
        ): void;

        /**
         * Logs a log message of level TRACE with the given information.
         *
         * @param tag The tag for the log entry.
         * @param message The body of the log message.
         * @param metadata An optional object to be appended to the log message in JSON format. If the object cannot be serialized into JSON it will be flattened into key/value pairs.
         * @param successCallback The success callback for this asynchronous function.
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        logTrace(
            tag: string,
            message: string,
            metadata?: any,
            successCallback?: () => void,
            failureCallback?: (error: string) => void,
        ): void;

        /**
         * Logs a log message of level DEBUG with the given information.
         *
         * @param tag The tag for the log entry.
         * @param message The body of the log message.
         * @param metadata An optional object to be appended to the log message in JSON format. If the object cannot be serialized into JSON it will be flattened into key/value pairs.
         * @param successCallback The success callback for this asynchronous function.
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        logDebug(
            tag: string,
            message: string,
            metadata?: any,
            successCallback?: () => void,
            failureCallback?: (error: string) => void,
        ): void;

        /**
         * Logs a log message of level INFO with the given information.
         *
         * @param tag The tag for the log entry.
         * @param message The body of the log message.
         * @param metadata An optional object to be appended to the log message in JSON format. If the object cannot be serialized into JSON it will be flattened into key/value pairs.
         * @param successCallback The success callback for this asynchronous function.
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        logInfo(
            tag: string,
            message: string,
            metadata?: any,
            successCallback?: () => void,
            failureCallback?: (error: string) => void,
        ): void;

        /**
         * Logs a log message of level WARN with the given information.
         *
         * @param tag The tag for the log entry.
         * @param message The body of the log message.
         * @param metadata An optional object to be appended to the log message in JSON format. If the object cannot be serialized into JSON it will be flattened into key/value pairs.
         * @param successCallback The success callback for this asynchronous function.
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        logWarn(
            tag: string,
            message: string,
            metadata?: any,
            successCallback?: () => void,
            failureCallback?: (error: string) => void,
        ): void;

        /**
         * Logs a log message of level ERROR with the given information.
         *
         * @param tag The tag for the log entry.
         * @param message The body of the log message.
         * @param metadata An optional object to be appended to the log message in JSON format. If the object cannot be serialized into JSON it will be flattened into key/value pairs.
         * @param successCallback The success callback for this asynchronous function.
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        logError(
            tag: string,
            message: string,
            metadata?: any,
            successCallback?: () => void,
            failureCallback?: (error: string) => void,
        ): void;

        /**
         * Logs a log message of level FATAL with the given information.
         *
         * @param tag The tag for the log entry.
         * @param message The body of the log message.
         * @param metadata An optional object to be appended to the log message in JSON format. If the object cannot be serialized into JSON it will be flattened into key/value pairs.
         * @param successCallback The success callback for this asynchronous function.
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        logFatal(
            tag: string,
            message: string,
            metadata?: any,
            successCallback?: () => void,
            failureCallback?: (error: string) => void,
        ): void;

        /**
         * Logs a message with the given information.
         *
         * @param logLevel The level of the log; see OuralabsPlugin.LogLevels for possible values.
         * @param tag The tag for the log entry.
         * @param message The body of the log message.
         * @param metadata An optional object to be appended to the log message in JSON format. If the object cannot be serialized into JSON it will be flattened into key/value pairs.
         * @param successCallback The success callback for this asynchronous function.
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        log(
            logLevel: number,
            tag: string,
            message: string,
            metadata?: any,
            successCallback?: () => void,
            failureCallback?: (error: string) => void,
        ): void;
    }
}

declare var OuralabsPlugin: OuralabsPlugin.OuralabsStatic;
