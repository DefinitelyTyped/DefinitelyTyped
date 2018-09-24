/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { Exception } from "typescript-dotnet-commonjs/System/Exception";
import { ILogger } from "../ILogger";
import { LogFlagsEnum } from "../LogFlagsEnum";
/**
 * Default logger implementation.
 */
export declare class DefaultLoggerImpl implements ILogger {
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
     * Initializes new instance.
     */
    constructor();
    /**
     * Logs in debug mode.
     * @param message Message.
     */
    LogDebug(message: string): void;
    /**
     * Logs message in error mode.
     * @param message Message to be logged.
     * @param exception Exception to be logged.
     */
    LogError(message: string, exception: Exception): void;
    /**
     * Log file path.
     */
    LogFile: string;
    /**
     * Gets and sets maximum log file size in bytes.
     * @value Maximum log file size in bytes. Default is 1048576 bytes.
     * @remarks When the file exceeds the size specified by FileSize the new log file is created. The old file is renamed to &lt;filename&gt;.&lt;number&gt;.
     */
    FileSize: number;
    /**
     * Gets and sets Maximum number of log file backups.
     * @value Amount of log file backups. Default is 1.
     * @remarks If the amount of the backup files created is higher than MaxBackups the oldest file is automatically deleted.
     */
    MaxBackups: number;
}
