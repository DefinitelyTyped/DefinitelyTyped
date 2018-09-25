/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { Exception } from "typescript-dotnet-commonjs/System/Exception";
import { LogFlagsEnum } from "./LogFlagsEnum";
/**
 * Engine uses this interface to perform logging.
 */
export interface ILogger {
    /**
     * Determines whether debug mode is enabled.
     */
    IsDebugEnabled: boolean;
    /**
     * Logging flags.
     * @remarks By default Engine does not log GET response body and PUT request body.
     */
    LogFlags: LogFlagsEnum;
    /**
     * Logs message in debug mode.
     * @param message Message to be logged.
     */
    LogDebug(message: string): void;
    /**
     * Logs message in error mode.
     * @param message Message to be logged.
     * @param exception Exception to be logged.
     */
    LogError(message: string, exception?: Exception): void;
}
