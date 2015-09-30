// Type definitions for cordova-plugin-ouralabs 1.0.0
// Project: https://github.com/Justin-Credible/cordova-plugin-ouralabs
// Definitions by: Justin Unterreiner <https://github.com/Justin-Credible>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module OuralabsPlugin {

    interface OuralabsStatic {

        LogLevel: {
            TRACE: number,
            DEBUG: number,
            INFO: number,
            WARN: number,
            ERROR: number,
            FATAL: number
        }

        init(channelId: string, successCallback?: () => void, failureCallback?: (error: string) => void): void;

        setAttributes(attribute1?: string, attribute2?: string, attribute3?: string, successCallback?: () => void, errorCallback?: (error: string) => void): void;

        logTrace(tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void): void;

        logDebug(tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void): void;

        logInfo(tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void): void;

        logWarn(tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void): void;

        logError(tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void): void;

        logFatal(tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void): void;

        log(logLevel: number, tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void): void;
    }
}

declare var OuralabsPlugin: OuralabsPlugin.OuralabsStatic