﻿// Type definitions for windows-service 1.0.4
// Project: https://bitbucket.org/stephenwvickers/node-windows-service
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
declare module "windows-service" {
	import stream = require("stream");

	/**
	 * Options for the add() function.
	 */
	export interface AddOptions {
		/**
		 * The services display name, defaults to the name parameter
		 */
		displayName?: string;
		/**
		 * The fully qualified path to the node binary used to run the service (i.e. c:\Program Files\nodejs\node.exe, defaults to the value of process.execPath
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
	}

	/**
	 * The add() function adds a Windows service. The service will be set to automatically start at boot time, but not started.
	 * The service can be started using the net start "My Service" command. An exception will be thrown if the service could
	 * not be added. The error will be an instance of the Error class.
	 *
	 * @param name The name parameter specifies the name of the created service.
	 * @param opts Options
	 */
	export function add(name: string, opts?: AddOptions): void;


	/**
	 * The remove() function removes a Windows service.
	 * The name parameter specifies the name of the service to remove. This will be the same name parameter specified when adding the service.
	 * The service must be in a stopped state for it to be removed. The net stop "My Service" command can be used to stop the service before
	 * it is to be removed.
	 * An exception will be thrown if the service could not be removed. The error will be an instance of the Error class.
	 */
	export function remove(name: string): void;

	/**
	 * The run() function will connect the calling program to the Windows Service Control Manager, allowing the program to run as a Windows service.
	 * The programs process.stdout stream will be replaced with the stdoutLogStream parameter, and the programs process.stderr stream replaced with
	 * the stdoutLogStream parameter (this allows the redirection of all console.log() type calls to a service specific log file). If the stderrLogStream
	 * parameter is not specified the programs process.stderr stream will be replaced with the stdoutLogStream parameter. The callback function will be
	 * called when the service receives a stop request, e.g. because the Windows Service Controller was used to send a stop request to the service.
	 * The program should perform cleanup tasks and then call the service.stop() function.
	 */
	export function run(stdoutLogStream: stream.Writable, callback: () => void): void;
	export function run(stdoutLogStream: stream.Writable, stderrLogStream: stream.Writable, callback: () => void): void;

	/**
	 * The stop() function will cause the service to stop, and the calling program to exit.
	 * Once the service has been stopped this function will terminate the program by calling the process.exit() function, passing to it the rcode
	 * parameter which defaults to 0. Before calling this function ensure the program has finished performing cleanup tasks.
	 * BE AWARE, THIS FUNCTION WILL NOT RETURN.
	 */
	export function stop(rcode?: number): void;
}
