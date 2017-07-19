// Type definitions for ShellJS 0.7
// Project: http://shelljs.org
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import child = require("child_process");

/**
 * Changes to directory dir for the duration of the script
 * @param {string} dir Directory to change in.
 */
export function cd(dir: string): void;

/**
 * Returns the current directory.
 * @return {string} The current directory.
 */
export function pwd(): string;

/**
 * Returns array of files in the given path, or in current directory if no path provided.
 * @param  {string[]} ...paths Paths to search.
 * @return {string[]}          An array of files in the given path(s).
 */
export function ls(...paths: string[]): string[];

/**
 * Returns array of files in the given path, or in current directory if no path provided.
 * @param  {string}   options  Available options: -R (recursive), -A (all files, include files beginning with ., except for . and ..)
 * @param  {string[]} ...paths Paths to search.
 * @return {string[]}          An array of files in the given path(s).
 */
export function ls(options: string, ...paths: string[]): string[];

/**
 * Returns array of files in the given path, or in current directory if no path provided.
 * @param  {string[]} paths Paths to search.
 * @return {string[]}       An array of files in the given path(s).
 */
export function ls(paths: string[]): string[];

/**
 * Returns array of files in the given path, or in current directory if no path provided.
 * @param  {string}   options  Available options: -R (recursive), -A (all files, include files beginning with ., except for . and ..)
 * @param  {string[]} paths    Paths to search.
 * @return {string[]}          An array of files in the given path(s).
 */
export function ls(options: string, paths: string[]): string[];

/**
 * Returns array of all files (however deep) in the given paths.
 * @param {string[]} ...path   The path(s) to search.
 * @return {string[]}          An array of all files (however deep) in the given path(s).
 */
export function find(...path: string[]): string[];

/**
 * Returns array of all files (however deep) in the given paths.
 * @param {string[]} path   The path(s) to search.
 * @return {string[]}       An array of all files (however deep) in the given path(s).
 */
export function find(path: string[]): string[];

/**
 * Copies files. The wildcard * is accepted.
 * @param {string} source  The source.
 * @param {string}   dest  The destination.
 */
export function cp(source: string, dest: string): void;

/**
 * Copies files. The wildcard * is accepted.
 * @param {string[]} source  The source.
 * @param {string}   dest    The destination.
 */
export function cp(source: string[], dest: string): void;

/**
 * Copies files. The wildcard * is accepted.
 * @param {string}   options Available options: -f (force), -r, -R (recursive)
 * @param {strin]}   source  The source.
 * @param {string}   dest    The destination.
 */
export function cp(options: string, source: string, dest: string): void;

/**
 * Copies files. The wildcard * is accepted.
 * @param {string}   options Available options: -f (force), -r, -R (recursive)
 * @param {string[]} source  The source.
 * @param {string}   dest    The destination.
 */
export function cp(options: string, source: string[], dest: string): void;

/**
 * Removes files. The wildcard * is accepted.
 * @param {string[]} ...files Files to remove.
 */
export function rm(...files: string[]): void;

/**
 * Removes files. The wildcard * is accepted.
 * @param {string[]} files Files to remove.
 */
export function rm(files: string[]): void;

/**
 * Removes files. The wildcard * is accepted.
 * @param {string}   options  Available options: -f (force), -r, -R (recursive)
 * @param {string[]} ...files Files to remove.
 */
export function rm(options: string, ...files: string[]): void;

/**
 * Removes files. The wildcard * is accepted.
 * @param {string}   options  Available options: -f (force), -r, -R (recursive)
 * @param {string[]} ...files Files to remove.
 */
export function rm(options: string, files: string[]): void;

/**
 * Moves files. The wildcard * is accepted.
 * @param {string} source The source.
 * @param {string} dest   The destination.
 */
export function mv(source: string, dest: string): void;

/**
 * Moves files. The wildcard * is accepted.
 * @param {string[]} source The source.
 * @param {string}   dest   The destination.
 */
export function mv(source: string[], dest: string): void;

/**
 * Creates directories.
 * @param {string[]} ...dir Directories to create.
 */
export function mkdir(...dir: string[]): void;

/**
 * Creates directories.
 * @param {string[]} dir Directories to create.
 */
export function mkdir(dir: string[]): void;

/**
 * Creates directories.
 * @param {string}   options Available options: p (full paths, will create intermediate dirs if necessary)
 * @param {string[]} ...dir  The directories to create.
 */
export function mkdir(options: string, ...dir: string[]): void;

/**
 * Creates directories.
 * @param {string}   options Available options: p (full paths, will create intermediate dirs if necessary)
 * @param {string[]} dir     The directories to create.
 */
export function mkdir(options: string, dir: string[]): void;

/**
 * Evaluates expression using the available primaries and returns corresponding value.
 * @param  {string}  option '-b': true if path is a block device; '-c': true if path is a character device; '-d': true if path is a directory; '-e': true if path exists; '-f': true if path is a regular file; '-L': true if path is a symboilc link; '-p': true if path is a pipe (FIFO); '-S': true if path is a socket
 * @param  {string}  path   The path.
 * @return {boolean}        See option parameter.
 */
export function test(option: string, path: string): boolean;

/**
 * Returns a string containing the given file, or a concatenated string containing the files if more than one file is given (a new line character is introduced between each file). Wildcard * accepted.
 * @param  {string[]} ...files Files to use.
 * @return {string}            A string containing the given file, or a concatenated string containing the files if more than one file is given (a new line character is introduced between each file).
 */
export function cat(...files: string[]): string;

/**
 * Returns a string containing the given file, or a concatenated string containing the files if more than one file is given (a new line character is introduced between each file). Wildcard * accepted.
 * @param  {string[]} files Files to use.
 * @return {string}         A string containing the given file, or a concatenated string containing the files if more than one file is given (a new line character is introduced between each file).
 */
export function cat(files: string[]): string;

// Does not work yet.
export interface String {
    /**
     * Analogous to the redirection operator > in Unix, but works with JavaScript strings (such as those returned by cat, grep, etc). Like Unix redirections, to() will overwrite any existing file!
     * @param {string} file The file to use.
     */
    to(file: string): void;

    /**
     * Analogous to the redirect-and-append operator >> in Unix, but works with JavaScript strings (such as those returned by cat, grep, etc).
     * @param {string} file The file to append to.
     */
    toEnd(file: string): void;
}

/**
 * Reads an input string from file and performs a JavaScript replace() on the input using the given search regex and replacement string or function. Returns the new string after replacement.
 * @param  {RegExp} searchRegex The regular expression to use for search.
 * @param  {string} replacement The replacement.
 * @param  {string} file        The file to process.
 * @return {string}             The new string after replacement.
 */
export function sed(searchRegex: RegExp, replacement: string, file: string): string;

/**
 * Reads an input string from file and performs a JavaScript replace() on the input using the given search regex and replacement string or function. Returns the new string after replacement.
 * @param  {string} searchRegex The regular expression to use for search.
 * @param  {string} replacement The replacement.
 * @param  {string} file        The file to process.
 * @return {string}             The new string after replacement.
 */
export function sed(searchRegex: string, replacement: string, file: string): string;

/**
 * Reads an input string from file and performs a JavaScript replace() on the input using the given search regex and replacement string or function. Returns the new string after replacement.
 * @param  {string} options     Available options: -i (Replace contents of 'file' in-place. Note that no backups will be created!)
 * @param  {RegExp} searchRegex The regular expression to use for search.
 * @param  {string} replacement The replacement.
 * @param  {string} file        The file to process.
 * @return {string}             The new string after replacement.
 */
export function sed(options: string, searchRegex: RegExp, replacement: string, file: string): string;

/**
 * Reads an input string from file and performs a JavaScript replace() on the input using the given search regex and replacement string or function. Returns the new string after replacement.
 * @param  {string} options     Available options: -i (Replace contents of 'file' in-place. Note that no backups will be created!)
 * @param  {string} searchRegex The regular expression to use for search.
 * @param  {string} replacement The replacement.
 * @param  {string} file        The file to process.
 * @return {string}             The new string after replacement.
 */
export function sed(options: string, searchRegex: string, replacement: string, file: string): string;

/**
 * Reads input string from given files and returns a string containing all lines of the file that match the given regex_filter. Wildcard * accepted.
 * @param  {RegExp}   regex_filter The regular expression to use.
 * @param  {string[]} ...files     The files to process.
 * @return {string}                Returns a string containing all lines of the file that match the given regex_filter.
 */
export function grep(regex_filter: RegExp, ...files: string[]): string;

/**
 * Reads input string from given files and returns a string containing all lines of the file that match the given regex_filter. Wildcard * accepted.
 * @param  {RegExp}   regex_filter The regular expression to use.
 * @param  {string[]} ...files     The files to process.
 * @return {string}                Returns a string containing all lines of the file that match the given regex_filter.
 */
export function grep(regex_filter: RegExp, files: string[]): string;

/**
 * Reads input string from given files and returns a string containing all lines of the file that match the given regex_filter. Wildcard * accepted.
 * @param  {string}   options      Available options: -v (Inverse the sense of the regex and print the lines not matching the criteria.)
 * @param  {string}   regex_filter The regular expression to use.
 * @param  {string[]} ...files     The files to process.
 * @return {string}                Returns a string containing all lines of the file that match the given regex_filter.
 */
export function grep(options: string, regex_filter: string, ...files: string[]): string;

/**
 * Reads input string from given files and returns a string containing all lines of the file that match the given regex_filter. Wildcard * accepted.
 * @param  {string}   options      Available options: -v (Inverse the sense of the regex and print the lines not matching the criteria.)
 * @param  {string}   regex_filter The regular expression to use.
 * @param  {string[]} files        The files to process.
 * @return {string}                Returns a string containing all lines of the file that match the given regex_filter.
 */
export function grep(options: string, regex_filter: string, files: string[]): string;

/**
 * Searches for command in the system's PATH. On Windows looks for .exe, .cmd, and .bat extensions.
 * @param  {string} command The command to search for.
 * @return {string}         Returns string containing the absolute path to the command.
 */
export function which(command: string): string;

/**
 * Prints string to stdout, and returns string with additional utility methods like .to().
 * @param  {string[]} ...text The text to print.
 * @return {string}           Returns the string that was passed as argument.
 */
export function echo(...text: string[]): string;

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param  {"+N"}     dir Brings the Nth directory (counting from the left of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 * @return {string[]}     Returns an array of paths in the stack.
 */
export function pushd(dir: "+N"): string[];

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param  {"-N"}     dir Brings the Nth directory (counting from the right of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 * @return {string[]}     Returns an array of paths in the stack.
 */
export function pushd(dir: "-N"): string[];

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param  {string}     dir Makes the current working directory be the top of the stack, and then executes the equivalent of cd dir.
 * @return {string[]}       Returns an array of paths in the stack.
 */
export function pushd(dir: string): string[];

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param  {string}   options Available options: -n (Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated)
 * @param  {"+N"}     dir Brings the Nth directory (counting from the left of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 * @return {string[]}     Returns an array of paths in the stack.
 */
export function pushd(options: string, dir: "+N"): string[];

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param  {string}   options Available options: -n (Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated)
 * @param  {"-N"}     dir Brings the Nth directory (counting from the right of the list printed by dirs, starting with zero) to the top of the list by rotating the stack.
 * @return {string[]}     Returns an array of paths in the stack.
 */
export function pushd(options: string, dir: "-N"): string[];

/**
 * Save the current directory on the top of the directory stack and then cd to dir. With no arguments, pushd exchanges the top two directories. Returns an array of paths in the stack.
 * @param  {string}   options Available options: -n (Suppresses the normal change of directory when adding directories to the stack, so that only the stack is manipulated)
 * @param  {string}   dir     Makes the current working directory be the top of the stack, and then executes the equivalent of cd dir.
 * @return {string[]}         Returns an array of paths in the stack.
 */
export function pushd(options: string, dir: string): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param  {"+N"}     dir Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.
 * @return {string[]}     Returns an array of paths in the stack.
 */
export function popd(dir: "+N"): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @return {string[]}     Returns an array of paths in the stack.
 */
export function popd(): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param  {"-N"}     dir Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.
 * @return {string[]}     Returns an array of paths in the stack.
 */
export function popd(dir: "-N"): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param  {string}     dir You can only use -N and +N.
 * @return {string[]}       Returns an array of paths in the stack.
 */
export function popd(dir: string): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param  {string}   options Available options: -n (Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated)
 * @param  {"+N"}     dir     Removes the Nth directory (counting from the left of the list printed by dirs), starting with zero.
 * @return {string[]}         Returns an array of paths in the stack.
 */
export function popd(options: string, dir: "+N"): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param  {string}   options Available options: -n (Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated)
 * @param  {"-N"}     dir     Removes the Nth directory (counting from the right of the list printed by dirs), starting with zero.
 * @return {string[]}         Returns an array of paths in the stack.
 */
export function popd(options: string, dir: "-N"): string[];

/**
 * When no arguments are given, popd removes the top directory from the stack and performs a cd to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. Returns an array of paths in the stack.
 * @param  {string}   options Available options: -n (Suppresses the normal change of directory when removing directories from the stack, so that only the stack is manipulated)
 * @param  {string}   dir     You can only use -N and +N.
 * @return {string[]}         Returns an array of paths in the stack.
 */
export function popd(options: string, dir: string): string[];

/**
 * Clears the directory stack by deleting all of the elements.
 * @param  {"-c"}     options Clears the directory stack by deleting all of the elements.
 * @return {string[]}         Returns an array of paths in the stack, or a single path if +N or -N was specified.
 */
export function dirs(options: "-c"): string[];

/**
 * Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if +N or -N was specified.
 * @param  {"+N"}   options Displays the Nth directory (counting from the left of the list printed by dirs when invoked without options), starting with zero.
 * @return {string[]}       Returns an array of paths in the stack, or a single path if +N or -N was specified.
 */
export function dirs(options: "+N"): string;

/**
 * Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if +N or -N was specified.
 * @param  {"-N"}   options Displays the Nth directory (counting from the right of the list printed by dirs when invoked without options), starting with zero.
 * @return {string[]}       Returns an array of paths in the stack, or a single path if +N or -N was specified.
 */
export function dirs(options: "-N"): string;

/**
 * Display the list of currently remembered directories. Returns an array of paths in the stack, or a single path if +N or -N was specified.
 * @param  {string} options Available options: -c, -N, +N. You can only use those.
 * @return {any}            Returns an array of paths in the stack, or a single path if +N or -N was specified.
 */
export function dirs(options: string): any;

/**
 * Links source to dest. Use -f to force the link, should dest already exist.
 * @param {string} source The source.
 * @param {string} dest   The destination.
 */
export function ln(source: string, dest: string): void;

/**
 * Links source to dest. Use -f to force the link, should dest already exist.
 * @param {string} options Available options: s (symlink), f (force)
 * @param {string} source The source.
 * @param {string} dest   The destination.
 */
export function ln(options: string, source: string, dest: string): void;

/**
 * Exits the current process with the given exit code.
 * @param {number} code The exit code.
 */
export function exit(code: number): void;

/**
 * Object containing environment variables (both getter and setter). Shortcut to process.env.
 */
export const env: { [key: string]: string };

/**
 * Executes the given command synchronously.
 * @param  {string}                 command The command to execute.
 * @return {ExecOutputReturnValue}          Returns an object containing the return code and output as string.
 */
export function exec(command: string): ExecOutputReturnValue;
/**
 * Executes the given command synchronously.
 * @param  {string}                                     command The command to execute.
 * @param  {ExecOptions}                                options Silence and synchronous options.
 * @return {ExecOutputReturnValue | child.ChildProcess}         Returns an object containing the return code and output as string, or if {async:true} was passed, a ChildProcess.
 */
export function exec(command: string, options: ExecOptions): ExecOutputReturnValue | child.ChildProcess;
/**
 * Executes the given command synchronously.
 * @param  {string}          command  The command to execute.
 * @param  {ExecOptions}     options  Silence and synchronous options.
 * @param  {ExecCallback}    callback Receives code and output asynchronously.
 */
export function exec(command: string, options: ExecOptions, callback: ExecCallback): child.ChildProcess;
/**
 * Executes the given command synchronously.
 * @param  {string}          command  The command to execute.
 * @param  {ExecCallback}    callback Receives code and output asynchronously.
 */
export function exec(command: string, callback: ExecCallback): child.ChildProcess;

export type ExecCallback = (code: number, stdout: string, stderr: string) => any;

export interface ExecOptions extends child.ExecOptions {
    silent?: boolean;
    async?: boolean;
}

export interface ExecOutputReturnValue {
    code: number;
    stdout: string;
    stderr: string;
}

/**
 * Alters the permissions of a file or directory by either specifying the absolute permissions in octal form or expressing the changes in symbols. This command tries to mimic the POSIX behavior as much as possible. Notable exceptions:
 * - In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
 * - There is no "quiet" option since default behavior is to run silent.
 * @param {number} octalMode The access mode. Octal.
 * @param {string} file      The file to use.
 */
export function chmod(octalMode: number, file: string): void;

/**
 * Alters the permissions of a file or directory by either specifying the absolute permissions in octal form or expressing the changes in symbols. This command tries to mimic the POSIX behavior as much as possible. Notable exceptions:
 * - In symbolic modes, 'a-r' and '-r' are identical. No consideration is given to the umask.
 * - There is no "quiet" option since default behavior is to run silent.
 * @param {string} mode      The access mode. Can be an octal string or a symbolic mode string.
 * @param {string} file      The file to use.
 */
export function chmod(mode: string, file: string): void;

// Non-Unix commands

/**
 * Searches and returns string containing a writeable, platform-dependent temporary directory. Follows Python's tempfile algorithm.
 * @return {string} The temp file path.
 */
export function tempdir(): string;

/**
 * Tests if error occurred in the last command.
 * @return {string} Returns null if no error occurred, otherwise returns string explaining the error
 */
export function error(): string;

export type TouchOptionsLiteral = "-a" | "-c" | "-m" | "-d" | "-r";

/**
 * Update the access and modification times of each FILE to the current time. A FILE argument that does not exist is created empty, unless -c is supplied
 */
export interface touchOptionsArray {
    '-d'?: string;
    '-r'?: string;
}

export function touch(...files: string[]): void;
export function touch(files: string[]): void;
export function touch(options: TouchOptionsLiteral, ...files: string[]): void;
export function touch(options: TouchOptionsLiteral, files: string[]): void;
export function touch(options: touchOptionsArray, ...files: string[]): void;
export function touch(options: touchOptionsArray, files: string[]): void;

// Configuration

export interface ShellConfig {
    /**
     * Suppresses all command output if true, except for echo() calls. Default is false.
     * @type {boolean}
     */
    silent: boolean;

    /**
     * If true the script will die on errors. Default is false.
     * @type {boolean}
     */
    fatal: boolean;

    /**
     * Absolute path of the Node binary. Default is null (inferred).
     * @type {string|null}
     */
    execPath: string | null;
}

/**
 * The shelljs configuration.
 * @type {ShellConfig}
 */
export const config: ShellConfig;
