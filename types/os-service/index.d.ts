// Type definitions for os-service 2.2
// Project: https://github.com/nospaceships/node-os-service
// Definitions by: Magginichi <https://github.com/magginichi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Options for the add() function.
 */
export interface AddOptions {
    /**
     * The services display name, defaults to the name parameter. T
     * his parameter will be used on Windows platforms only
     */
    displayName?: string;

    /**
     * The fully qualified path to the node binary used to run the service
     * (i.e. c:\Program Files\nodejs\node.exe, defaults to the value of process.execPath
     */
    nodePath?: string;

    /**
     * An array of strings specifying parameters to pass to nodePath, defaults to []
     */
    nodeArgs?: string[];

    /**
     * The program to run using nodePath, defaults to the value of process.argv[1]
     */
    programPath?: string;

    /**
     * An array of strings specifying parameters to pass to programPath, defaults to []
     */
    programArgs?: string[];

    /**
     * An array of strings specifying other services this service depends on, this is optional
     */
    dependencies?: string[];

    /**
     * For Windows platforms a username and password can be specified,
     * the service will be run using these credentials when started,
     * see the CreateService() functions win32 API documentation for
     * details on the format of the username, on all other platforms this parameter is ignored
     */
    username?: string;

    /**
     * See the username parameter
     */
    password?: string;

    /**
     * An array of numbers specifying Linux run-levels at which the service should be started
     * for Linux platforms, defaults to [2, 3, 4, 5], this is only used when chkconfig or
     * update-rc.d is used to install a service
     */
    runLevels?: number[];

    /**
     * For when systemd will be used a target can be specified for the WantedBy
     * attribute under the [Install] section in the generated systemd unit file,
     * defaults to multi-user.target
     */
    systemdWantedBy?: string;
}

/**
 * The add() function adds a service.
 * @param name Specifies the name of the created service.
 * @param opts Additional options.
 * @param callback Is called once the service has been added. The following
 * arguments will be passed to the callback function:
 * error - Instance of the Error class, or null if no error occurred
 */
export function add(name: string, opts: AddOptions, callback: (error?: Error) => void): void;
export function add(name: string, callback?: (error?: Error) => void): void;

/**
 * The remove() function removes a service.
 * The service must be in a stopped state for it to be removed.
 * @param name Specifies the name of the service to remove.
 * This will be the same name parameter specified when adding the service.
 * @param callback Is called once the service has been removed. The following
 * arguments will be passed to the callback function:
 * error - Instance of the Error class, or null if no error occurred
 */
export function remove(name: string, callback: (error?: Error) => void): void;

/**
 * The run() function will attempt to run the program as a service.
 * @param stopCallback Will be called when the service receives a stop request,
 * e.g. because the Windows Service Controller was used to send a stop request to the service,
 * or a SIGTERM signal was received.
 */
export function run(stopCallback: () => void): void;

/**
 * The stop() function will cause the service to stop, and the calling program to exit.
 * Once the service has been stopped this function will terminate the program by calling
 * the process.exit() function, passing to it the rcode parameter which defaults to 0.
 * Before calling this function ensure the program has finished performing cleanup tasks.
 * @param rcode Return code defaults to 0
 */
export function stop(rcode?: number): void;
