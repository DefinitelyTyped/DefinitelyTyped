import { ChildProcess } from 'child_process';
import { Disposable, HandleableErrorEvent } from '../index';

/**
 *  A wrapper which provides standard error/output line buffering for
 *  Node's ChildProcess.
 */
export class BufferedProcess {
    readonly process?: ChildProcess;

    constructor(options: ProcessOptions);

    // Event Subscription
    /**
     *  Will call your callback when an error will be raised by the process. Usually
     *  this is due to the command not being available or not on the PATH. You can
     *  call handle() on the object passed to your callback to indicate that you
     *  have handled this error.
     */
    onWillThrowError(callback: (errorObject: HandleableErrorEvent) => void): Disposable;

    // Helper Methods
    /** Terminate the process. */
    kill(): void;

    /** Runs the process. */
    start(): void;
}

export interface NodeProcessOptions {
    /** The command to execute. */
    command: string;

    /** The array of arguments to pass to the command. */
    args?: ReadonlyArray<string>;

    /** The options object to pass to Node's ChildProcess.spawn method. */
    options?: SpawnProcessOptions;

    /**
     *  The callback that receives a single argument which contains the standard
     *  output from the command.
     */
    stdout?(data: string): void;

    /**
     *  The callback that receives a single argument which contains the standard
     *  error output from the command.
     */
    stderr?(data: string): void;

    /** The callback which receives a single argument containing the exit status. */
    exit?(code: number): void;
}

export interface ProcessOptions extends NodeProcessOptions {
    /**
     *  Whether the command will automatically start when this BufferedProcess is
     *  created.
     */
    autoStart?: boolean;
}

export interface SpawnProcessOptions {
    /** Current working directory of the child process. */
    cwd?: string;

    /** Environment key-value pairs. */
    env?: { [key: string]: string };

    /** The child's stdio configuration. */
    stdio?: string | Array<string | number>;

    /** Prepare child to run independently of its parent process. */
    detached?: boolean;

    /** Sets the user identity of the process. */
    uid?: number;

    /** Sets the group identity of the process. */
    gid?: number;

    /**
     *  If true, runs command inside of a shell. Uses "/bin/sh" on UNIX, and process.env.ComSpec
     *  on Windows. A different shell can be specified as a string.
     */
    shell?: boolean | string;
}
