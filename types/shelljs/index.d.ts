// Type definitions for ShellJS 0.8
// Project: http://shelljs.org
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee>
//                 Vojtech Jasny <https://github.com/voy>
//                 George Kalpakas <https://github.com/gkalpak>
//                 Paul Huynh <https://github.com/pheromonez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import child = require("child_process");
import glob = require("glob");

/**
 * Changes to directory dir for the duration of the script. Changes to home directory if no argument is supplied.
 * @param dir Directory to change in.
 */
export function cd(dir?: string): void;

/**
 * Returns the current directory.
 * @return The current directory.
 */
export function pwd(): ShellString;

/**
 * Returns array of files in the given path, or in current directory if no path provided.
 * @param  ...paths Paths to search.
 * @return          An array of files in the given path(s).
 */
export function ls(...paths: Array<string | string[]>): ShellArray;

/**
 * Returns array of files in the given path, or in current directory if no path provided.
 * @param    options  Available options:  -R: recursive -A: all files (include files beginning with ., except for . and ..) -L: follow symlinks -d: list directories themselves, not their contents -l: list objects representing each file, each with fields containing ls -l output fields. See fs.Stats for more info
 * @param  ...paths Paths to search.
 * @return          An array of files in the given path(s).
 */
export function ls(options: string, ...paths: Array<string | string[]>): ShellArray;

/**
 * Returns array of all files (however deep) in the given paths.
 * @param ...path   The path(s) to search.
 * @return          An array of all files (however deep) in the given path(s).
 */
export function find(...path: Array<string | string[]>): ShellArray;

/**
 * Copies files. The wildcard * is accepted.
 * @param source  The source.
 * @param   dest  The destination.
 */
export function cp(source: string | string[], dest: string): void;

/**
 * Copies files. The wildcard * is accepted.
 * @param options Available options: -f: force (default behavior) -n: no-clobber -u: only copy if source is newer than dest -r, -R: recursive -L: follow symlinks -P: don't follow symlinks
 * @param source  The source.
 * @param dest    The destination.
 */
export function cp(options: string, source: string | string[], dest: string): void;

/**
 * Removes files. The wildcard * is accepted.
 * @param ...files Files to remove.
 */
export function rm(...files: Array<string | string[]>): void;

/**
 * Removes files. The wildcard * is accepted.
 * @param   options  Available options: -f (force), -r, -R (recursive)
 * @param ...files Files to remove.
 */
export function rm(options: string, ...files: Array<string | string[]>): void;

/**
 * Moves files. The wildcard * is accepted.
 * @param source The source.
 * @param dest   The destination.
 */
export function mv(source: string | string[], dest: string): void;

/**
 * Moves files. The wildcard * is accepted.
 * @param options Available options: -f: force (default behavior) -n: no-clobber
 * @param source The source.
 * @param dest   The destination.
 */
export function mv(options: string, source: string | string[], dest: string): void;

/**
 * Creates directories.
 * @param ...dir Directories to create.
 */
export function mkdir(...dir: Array<string | string[]>): void;

/**
 * Creates directories.
 * @param   options Available options: p (full paths, will create intermediate dirs if necessary)
 * @param ...dir  The directories to create.
 */
export function mkdir(options: string, ...dir: Array<string | string[]>): void;

/**
 * Evaluates expression using the available primaries and returns corresponding value.
 * @param   option '-b': true if path is a block device; '-c': true if path is a character device; '-d': true if path is a directory; '-e': true if path exists; '-f': true if path is a regular file; '-L': true if path is a symboilc link; '-p': true if path is a pipe (FIFO); '-S': true if path is a socket
 * @param   path   The path.
 * @return        See option parameter.
 */
export function test(option: TestOptions, path: string): boolean;

export type TestOptions = "-b" | "-c" | "-d" | "-e" | "-f" | "-L" | "-p" | "-S";

/**
 * Returns a string containing the given file, or a concatenated string containing the files if more than one file is given (a new line character is introduced between each file). Wildcard * accepted.
 * @param  ...files Files to use.
 * @return            A string containing the given file, or a concatenated string containing the files if more than one file is given (a new line character is introduced between each file).
 */
export function cat(...files: Array<string | string[]>): ShellString;

/**
 * Reads an input string from file and performs a JavaScript replace() on the input using the given search regex and replacement string or function. Returns the new string after replacement.
 * @param  searchRegex The regular expression to use for search.
 * @param  replacement The replacement.
 * @param  file        The file to process.
 * @return             The new string after replacement.
 */
export function sed(searchRegex: string | RegExp, replacement: string, file: string): ShellString;

/**
 * Reads an input string from file and performs a JavaScript replace() on the input using the given search regex and replacement string or function. Returns the new string after replacement.
 * @param  options     Available options: -i (Replace contents of 'file' in-place. Note that no backups will be created!)
 * @param  searchRegex The regular expression to use for search.
 * @param  replacement The replacement.
 * @param  file        The file to process.
 * @return             The new string after replacement.
 */
export function sed(options: string, searchRegex: string | RegExp, replacement: string, file: string): ShellString;

/**
 * Reads input string from given files and returns a string containing all lines of the file that match the given regex_filter. Wildcard * accepted.
 * @param    regex_filter The regular expression to use.
 * @param  ...files     The files to process.
 * @return                Returns a string containing all lines of the file that match the given regex_filter.
 */
export function grep(regex_filter: string | RegExp, ...files: Array<string | string[]>): ShellString;

/**
 * Reads input string from given files and returns a string containing all lines of the file that match the given regex_filter. Wildcard * accepted.
 * @param    options      Available options: -v (Inverse the sense of the regex and print the lines not matching the criteria.) -l: Print only filenames of matching files
 * @param    regex_filter The regular expression to use.
 * @param  ...files     The files to process.
 * @return                Returns a string containing all lines of the file that match the given regex_filter.
 */
export function grep(options: string, regex_filter: string | RegExp, ...files: Array<string | string[]>): ShellString;

/**
 * Searches for command in the system's PATH. On Windows looks for .exe, .cmd, and .bat extensions.
 * @param  command The command to search for.
 * @return         Returns string containing the absolute path to the command.
 */
export function which(command: string): ShellString;

/**
 * Prints string to stdout, and returns string with additional utility methods like .to().
 * @param  ...text The text to print.
 * @return           Returns the string that was passed as argument.
 */
export function echo(...text: string[]): ShellString;

/**
 * Prints string to stdout, and returns string with additional utility methods like .to().
 * @param options Available options: -e: interpret backslash escapes (default) -n: remove trailing newline from output
 * @param  ...text The text to print.
 * @return           Returns the string that was passed as argument.
 */
export function echo(options: string, ...text: string[]): ShellString;

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param      dir Brings the Nth directory (counting from the left of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 * @return     Returns an array of paths in the stack.
 */
export function pushd(dir: "+N"): ShellArray;

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param      dir Brings the Nth directory (counting from the right of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 * @return     Returns an array of paths in the stack.
 */
export function pushd(dir: "-N"): ShellArray;

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param      dir Makes the current working directory be the top of the stack, and then executes the equivalent of cd dir.
 * @return       Returns an array of paths in the stack.
 */
export function pushd(dir: string): ShellArray;

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param    options Available options: -n (Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated) -q: Supresses output to the console.
 * @param      dir Brings the Nth directory (counting from the left of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 * @return     Returns an array of paths in the stack.
 */
export function pushd(options: string, dir: "+N"): ShellArray;

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param    options Available options: -n (Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated)
 * @param      dir Brings the Nth directory (counting from the right of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 * @return     Returns an array of paths in the stack.
 */
export function pushd(options: string, dir: "-N"): ShellArray;

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param    options Available options: -n (Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated)
 * @param    dir     Makes the current working directory be the top of the stack, and then executes the equivalent of cd dir.
 * @return         Returns an array of paths in the stack.
 */
export function pushd(options: string, dir: string): ShellArray;

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param      dir Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.
 * @return     Returns an array of paths in the stack.
 */
export function popd(dir: "+N"): ShellArray;

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @return     Returns an array of paths in the stack.
 */
export function popd(): ShellArray;

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param      dir Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.
 * @return     Returns an array of paths in the stack.
 */
export function popd(dir: "-N"): ShellArray;

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param      dir You can only use -N and +N.
 * @return       Returns an array of paths in the stack.
 */
export function popd(dir: string): ShellArray;

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param    options Available options: -n (Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated) -q: Supresses output to the console.
 * @param      dir     Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.
 * @return         Returns an array of paths in the stack.
 */
export function popd(options: string, dir: "+N"): ShellArray;

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param    options Available options: -n (Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated) -q: Supresses output to the console.
 * @param      dir     Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.
 * @return         Returns an array of paths in the stack.
 */
export function popd(options: string, dir: "-N"): ShellArray;

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param    options Available options: -n (Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated) -q: Supresses output to the console.
 * @param    dir     You can only use -N and +N.
 * @return         Returns an array of paths in the stack.
 */
export function popd(options: string, dir: string): ShellArray;

/**
 * Clears the directory stack by deleting all of the elements.
 * @param      options Clears the directory stack by deleting all of the elements.
 * @return         Returns an array of paths in the stack, or a single path if +N or -N was specified.
 */
export function dirs(options: "-c"): ShellArray;

/**
 * Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if +N or -N was specified.
 * @param    options Displays the Nth directory (counting from the left of the list printed by dirs when invoked without options), starting with zero.
 * @return       Returns an array of paths in the stack, or a single path if +N or -N was specified.
 */
export function dirs(options: "+N"): ShellString;

/**
 * Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if +N or -N was specified.
 * @param    options Displays the Nth directory (counting from the right of the list printed by dirs when invoked without options), starting with zero.
 * @return       Returns an array of paths in the stack, or a single path if +N or -N was specified.
 */
export function dirs(options: "-N"): ShellString;

/**
 * Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if +N or -N was specified.
 * @param  options Available options: -c, -N, +N. You can only use those.
 * @return            Returns an array of paths in the stack, or a single path if +N or -N was specified.
 */
export function dirs(options: string): any;

/**
 * Links source to dest. Use -f to force the link, should dest already exist.
 * @param source The source.
 * @param dest   The destination.
 */
export function ln(source: string, dest: string): void;

/**
 * Links source to dest. Use -f to force the link, should dest already exist.
 * @param options Available options: s (symlink), f (force)
 * @param source The source.
 * @param dest   The destination.
 */
export function ln(options: string, source: string, dest: string): void;

/**
 * Exits the current process with the given exit code.
 * @param code The exit code.
 */
export function exit(code: number): void;

/**
 * Object containing environment variables (both getter and setter). Shortcut to process.env.
 */
export const env: { [key: string]: string };

/**
 * Executes the given command synchronously.
 * @param                  command The command to execute.
 * @return          Returns an object containing the return code and output as string.
 */
export function exec(command: string): ExecOutputReturnValue;
/**
 * Executes the given command synchronously.
 * @param                                      command The command to execute.
 * @param                                 options Silence and synchronous options.
 * @return         Returns an object containing the return code and output as string, or if {async:true} was passed, a ChildProcess.
 */
export function exec(command: string, options: ExecOptions): ExecOutputReturnValue | child.ChildProcess;
/**
 * Executes the given command synchronously.
 * @param           command  The command to execute.
 * @param      options  Silence and synchronous options.
 * @param     callback Receives code and output asynchronously.
 */
export function exec(command: string, options: ExecOptions, callback: ExecCallback): child.ChildProcess;
/**
 * Executes the given command synchronously.
 * @param           command  The command to execute.
 * @param     callback Receives code and output asynchronously.
 */
export function exec(command: string, callback: ExecCallback): child.ChildProcess;

export type ExecCallback = (code: number, stdout: string, stderr: string) => any;

export interface ExecOptions extends child.ExecOptions {
    /** Do not echo program output to console (default: false). */
    silent?: boolean;
    /** Asynchronous execution. If a callback is provided, it will be set to true, regardless of the passed value (default: false). */
    async?: boolean;
    /** Character encoding to use. Affects the values returned to stdout and stderr, and what is written to stdout and stderr when not in silent mode (default: 'utf8'). */
    encoding?: string;
}

export interface ExecOutputReturnValue {
    code: number;
    stdout: string;
    stderr: string;
}

export interface ShellReturnValue extends ExecOutputReturnValue {
    /**
     * Analogous to the redirection operator > in Unix, but works with JavaScript strings (such as those returned by cat, grep, etc). Like Unix redirections, to() will overwrite any existing file!
     * @param file The file to use.
     */
    to(file: string): void;

    /**
     * Analogous to the redirect-and-append operator >> in Unix, but works with JavaScript strings (such as those returned by cat, grep, etc).
     * @param file The file to append to.
     */
    toEnd(file: string): void;

    cat(...files: string[]): ShellString;
    exec(callback: ExecCallback): child.ChildProcess;
    exec(): ExecOutputReturnValue;
    grep(...files: Array<string | string[]>): ShellString;
    sed(replacement: string, file: string): ShellString;
}

export type ShellString = string & ShellReturnValue;

export type ShellArray = string[] & ShellReturnValue;

/**
 * Alters the permissions of a file or directory by either specifying the absolute permissions in octal form or expressing the changes in symbols. This command tries to mimic the POSIX behavior as much as possible. Notable exceptions:
 * - In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
 * - There is no "quiet" option since default behavior is to run silent.
 * @param octalMode The access mode. Octal.
 * @param file      The file to use.
 */
export function chmod(octalMode: number, file: string): void;

/**
 * Alters the permissions of a file or directory by either specifying the absolute permissions in octal form or expressing the changes in symbols. This command tries to mimic the POSIX behavior as much as possible. Notable exceptions:
 * - In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
 * - There is no "quiet" option since default behavior is to run silent.
 * @param options   Available options: -v (output a diagnostic for every file processed), -c (like -v but report only when a change is made), -R (change files and directories recursively)
 * @param octalMode The access mode. Octal.
 * @param file      The file to use.
 */
export function chmod(options: string, octalMode: number, file: string): void;

/**
 * Alters the permissions of a file or directory by either specifying the absolute permissions in octal form or expressing the changes in symbols. This command tries to mimic the POSIX behavior as much as possible. Notable exceptions:
 * - In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
 * - There is no "quiet" option since default behavior is to run silent.
 * @param mode      The access mode. Can be an octal string or a symbolic mode string.
 * @param file      The file to use.
 */
export function chmod(mode: string, file: string): void;

/**
 * Alters the permissions of a file or directory by either specifying the absolute permissions in octal form or expressing the changes in symbols. This command tries to mimic the POSIX behavior as much as possible. Notable exceptions:
 * - In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
 * - There is no "quiet" option since default behavior is to run silent.
 * @param options   Available options: -v (output a diagnostic for every file processed), -c (like -v but report only when a change is made), -R (change files and directories recursively)
 * @param mode      The access mode. Can be an octal string or a symbolic mode string.
 * @param file      The file to use.
 */
export function chmod(options: string, mode: string, file: string): void;

// Non-Unix commands

/**
 * Searches and returns string containing a writeable, platform-dependent temporary directory. Follows Python's tempfile algorithm.
 * @return The temp file path.
 */
export function tempdir(): ShellString;

/**
 * Tests if error occurred in the last command.
 * @return Returns null if no error occurred, otherwise returns string explaining the error
 */
export function error(): ShellString;

export type TouchOptionsLiteral = "-a" | "-c" | "-m" | "-d" | "-r";

/**
 * Update the access and modification times of each FILE to the current time. A FILE argument that does not exist is created empty, unless -c is supplied
 */
export interface TouchOptionsArray {
    '-d'?: string;
    '-r'?: string;
}

export function touch(...files: string[]): void;
export function touch(files: string[]): void;
export function touch(options: TouchOptionsLiteral, ...files: Array<string | string[]>): void;
export function touch(options: TouchOptionsArray, ...files: Array<string | string[]>): void;

export interface HeadOptions {
    /** Show the first <num> lines of the files. */
    '-n': number;
}

/** Read the start of a file. */
export function head(...files: Array<string | string[]>): ShellString;
/** Read the start of a file. */
export function head(options: HeadOptions, ...files: Array<string | string[]>): ShellString;

/**
 * Return the contents of the files, sorted line-by-line. Sorting multiple files mixes their content (just as unix sort does).
 */
export function sort(...files: Array<string | string[]>): ShellString;

/**
 * Return the contents of the files, sorted line-by-line. Sorting multiple files mixes their content (just as unix sort does).
 * @param options Available options: -r: Reverse the results -n: Compare according to numerical value
 */
export function sort(options: string, ...files: Array<string | string[]>): ShellString;

export interface TailOptions {
    /** Show the last <num> lines of files. */
    '-n': number;
}

/** Read the end of a file. */
export function tail(...files: Array<string | string[]>): ShellString;
/** Read the end of a file. */
export function tail(options: TailOptions, ...files: Array<string | string[]>): ShellString;

/**
 * Filter adjacent matching lines from input.
 */
export function uniq(input: string, output?: string): ShellString;
/**
 * Filter adjacent matching lines from input.
 * @param options Available options: -i: Ignore case while comparing -c: Prefix lines by the number of occurrences -d: Only print duplicate lines, one for each group of identical lines
 */
export function uniq(options: string, input: string, output?: string): ShellString;

/**
 * Sets global configuration variables
 * @param options Available options: `+/-e`: exit upon error (`config.fatal`), `+/-v`: verbose: show all commands (`config.verbose`), `+/-f`: disable filename expansion (globbing)
 */
export function set(options: string): void;

// Configuration

export interface ShellConfig {
    /**
     * Suppresses all command output if true, except for echo() calls. Default is false.
     */
    silent: boolean;

    /**
     * If true the script will die on errors. Default is false.
     */
    fatal: boolean;

    /**
     * Will print each executed command to the screen. Default is true.
     */
    verbose: boolean;

    /**
     * Passed to glob.sync() instead of the default options ({}).
     */
    globOptions: glob.IOptions;

    /**
     * Absolute path of the Node binary. Default is null (inferred).
     */
    execPath: string | null;

    /**
     * Reset shell.config to the defaults.
     */
    reset(): void;
}

/**
 * The shelljs configuration.
 */
export const config: ShellConfig;
