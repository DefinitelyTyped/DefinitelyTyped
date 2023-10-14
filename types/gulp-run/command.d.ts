import GulpRunner = require(".");
import Vinyl = require("vinyl");

/** A `gulp-run` command. */
declare class Command {
    constructor(command: string, options?: GulpRunner.Options);

    /** Spawn a subshell and execute the command. */
    exec(stdin?: any, callback?: (error: (Error & { status: number }) | null) => void): Vinyl;
}

export = Command;
