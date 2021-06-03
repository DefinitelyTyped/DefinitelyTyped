import { BufferedProcess, NodeProcessOptions } from '../index';

/**
 *  Like BufferedProcess, but accepts a Node script as the command to run.
 *  This is necessary on Windows since it doesn't support shebang #! lines.
 */
export class BufferedNodeProcess extends BufferedProcess {
    /** Runs the given Node script by spawning a new child process. */
    constructor(options: NodeProcessOptions);
}
