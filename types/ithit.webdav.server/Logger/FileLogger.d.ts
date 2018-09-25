/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { LogLevel } from "./LogLevel";
/**
 * Provides static methods for writing to a log file.
 * @remarks By default the log file is not created if you did not specify log file name.
 * You can specify the folder and file name setting {@link LogFile}  property.
 * Amount of output and maximum file size are controlled via {@link Level}  and {@link FileSize}  properties.
 * @remarks Important! If you host your server in IIS/ASP.NET make sure your log file is created outside of the \bin folder. If your logfile will be created in a \bin folder, your server will restart each time the logfile is updated, recycling application and session state.
 */
export declare class FileLogger {
    private static logFileName;
    private static logLevel;
    private static logFileSize;
    private static logBackups;
    private static logWriter;
    /**
     * Gets and sets log file name and path.
     * @value Log file name and path.
     * @remarks By default the log file is created in the folder where the calling assembly
     * resides. The folder in which you plan store your log files must exist and
     * your web application must have enough permission for writing and creating
     * files in this folder. Note that if you are creating HttpHandler-based server usually on Windows XP your web application
     * runs under ASPNET account while on Windows 2003 it runs under Network Service account.
     * @remarks If you are requesting your server with a WebDAV client and log file is not
     * created, most likely there is no permissions for creating file or the web
     * requests simply does not reach your application.
     */
    static LogFile: string;
    /**
     * Gets and sets how much information is written to log file.
     * @value  Logging level. Default is Info
     * @remarks Provides the method of limiting amount of logging output. During the
     * development you will usually set @c  LogLevel to {@link LogLevel.All}  or {@link LogLevel.Debug}  level, while
     * deploying you can set it to {@link LogLevel.Error}  or {@link LogLevel.Fatal} .
     */
    static Level: LogLevel;
    /**
     * Gets and sets maximum log file size in bytes.
     * @value Maximum log file size in bytes. Default is 1048576 bytes.
     * @remarks When the file exceeds the size specified by FileSize the new log file is created. The old file is renamed to &lt;filename&gt;.&lt;number&gt;.
     */
    static FileSize: number;
    /**
     * Gets and sets Maximum number of log file backups.
     * @value Amount of log file backups. Default is 1.
     * @remarks If the amount of the backup files created is higher than MaxBackups the oldest file is automatically deleted.
     */
    static MaxBackups: number;
    /**
     * Wrights a message to a log file with a specified log level.
     * @param message Message to be logged.
     * @param level Logging level.
     */
    static WriteMessage(message: string, level?: LogLevel): void;
}
