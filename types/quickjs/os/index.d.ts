import { ERRNO, PATH, FileFlags, FileHandle, Dict } from '../baseTypes.js';
import { SEEK_SET, SEEK_CUR, SEEK_END } from 'std';

declare module 'os' {
	/**
	 * Open a file. Return a handle or < 0 if error.
	 */
	export function open(
		filename: PATH,
		flags: FileFlags | number,
		mode?: number
	): FileHandle;

	/** POSIX open flags.  */
	export const O_RDONLY = 0;
	/** POSIX open flags.  */
	export const O_WRONLY = 1;
	/** POSIX open flags.  */
	export const O_RDWR = 2;
	/** POSIX open flags.  */
	export const O_APPEND = 1024;
	/** POSIX open flags.  */
	export const O_CREAT = 64;
	/** POSIX open flags.  */
	export const O_EXCL = 128;
	/** POSIX open flags.  */
	export const O_TRUNC = 512;

	/** (Windows specific). Open the file in text mode. The default is binary mode.  */
	export const O_TEXT: number;

	/**
	 * Close the file handle `fd`.
	 */
	export function close(fd: FileHandle): ERRNO;

	/**
	 * Seek in the file. Use `std.SEEK_*` for `whence`. `offset` is either a number or a bigint. If `offset` is a bigint, a bigint is returned too.
	 */
	export function seek(
		fd: FileHandle,
		offset: number,
		whence: typeof SEEK_SET | typeof SEEK_CUR | typeof SEEK_END
	): number;
	export function seek(
		fd: FileHandle,
		offset: bigint,
		whence: typeof SEEK_SET | typeof SEEK_CUR | typeof SEEK_END
	): bigint;

	/**
	 * Read length bytes from the file handle fd to the ArrayBuffer buffer at byte position offset. Return the number of read bytes or < 0 if error.
	 */
	export function read(
		fd: FileHandle,
		buffer: ArrayBuffer,
		offset: number,
		length: number
	): number;

	/**
	 * Write length bytes to the file handle fd from the ArrayBuffer buffer at byte position offset. Return the number of written bytes or < 0 if error.
	 */
	export function write(
		fd: FileHandle,
		buffer: ArrayBuffer,
		offset: number,
		length: number
	): number;

	/**
	 * Return `true` is `fd` is a TTY (terminal) handle.
	 */
	export function isatty(fd: FileHandle): boolean;

	/**
	 * Return the TTY size as `[width, height]` or `null` if not available.
	 */
	export function ttyGetWinSize(
		fd: FileHandle
	): [width: number, height: number] | null;

	/**
	 * Set the TTY in raw mode.
	 */
	export function ttySetRaw(fd: FileHandle): void;

	/**
	 * Remove a file. Return 0 if OK or `-errno`.
	 */
	export function remove(filename: PATH): ERRNO;

	/**
	 * Rename a file. Return 0 if OK or `-errno`.
	 */
	export function rename(oldname: PATH, newname: PATH): ERRNO;

	/**
	 * Return `[str, err]` where `str` is the canonicalized absolute pathname of `path` and `err` the error code.
	 */
	export function realpath(path: PATH): [str: PATH, err: ERRNO];

	/**
	 * Return `[str, err]` where `str` is the current working directory and `err` the error code.
	 */
	export function getcwd(): [str: PATH, err: ERRNO];

	/**
	 * Change the current directory. Return 0 if OK or `-errno`.
	 */
	export function chdir(path: string): ERRNO;

	/**
	 * Create a directory at `path`. Return 0 if OK or `-errno`.
	 */
	export function mkdir(path: string, mode: number): ERRNO;

	/**
	 * Return `[obj, err]` where `obj` is an object containing the file status of `path`. `err` is the error code. The following fields are defined in `obj`: dev, ino, mode, nlink, uid, gid, rdev, size, blocks, atime, mtime, ctime. The times are specified in milliseconds since 1970.
	 */
	export function stat(
		path: PATH
	): [
		obj: {
			dev: number;
			ino: number;
			mode: STAT_MODE;
			nlink: number;
			uid: number;
			gid: number;
			rdev: number;
			size: number;
			blocks: number;
			atime: number;
			mtime: number;
			ctime: number;
		},
		err: ERRNO
	];

	/**
	 * `lstat()` is the same as `stat()` excepts that it returns information about the link itself.
	 */
	export function lstat(path: PATH): ReturnType<typeof stat>;

	/** Constants to interpret the `mode` property returned by `stat()`. They have the same value as in the C system header `sys/stat.h`.  */
	export const S_IFMT = 61440;
	export const S_IFIFO = 4096;
	export const S_IFCHR = 8192;
	export const S_IFDIR = 16384;
	export const S_IFBLK = 24576;
	export const S_IFREG = 32768;
	export const S_IFSOCK = 49152;
	export const S_IFLNK = 40960;
	export const S_ISGID = 1024;
	export const S_ISUID = 2048;

	type STAT_MODE =
		| typeof S_IFMT
		| typeof S_IFIFO
		| typeof S_IFCHR
		| typeof S_IFDIR
		| typeof S_IFBLK
		| typeof S_IFREG
		| typeof S_IFSOCK
		| typeof S_IFLNK
		| typeof S_ISGID
		| typeof S_ISUID;

	/**
	 * Change the access and modification times of the file `path`. The times are specified in milliseconds since 1970. Return 0 if OK or `-errno`.
	 */
	export function utimes(path: PATH, atime: number, mtime: number): ERRNO;

	/**
	 * Create a link at `linkpath` containing the string `target`. Return 0 if OK or `-errno`.
	 */
	export function symlink(target: PATH, linkpath: PATH): ERRNO;

	/**
	 * Return `[str, err]` where `str` is the link target and `err` the error code.
	 */
	export function readlink(path: PATH): [str: PATH, err: ERRNO];

	/**
	 * Return `[array, err]` where array is an array of strings containing the filenames of the directory `path`. `err` is the error code.
	 */
	export function readdir(path: PATH): [array: PATH[], err: ERRNO];

	/**
	 * Add a read handler to the file handle `fd`. `func` is called each time there is data pending for `fd`. A single read handler per file handle is supported. Use `func = null` to remove the handler.
	 */
	export function setReadHandler(fd: FileHandle, func: Function): void;

	/**
	 * Add a write handler to the file handle `fd`. `func` is called each time data can be written to `fd`. A single write handler per file handle is supported. Use `func = null` to remove the handler.
	 */
	export function setWriteHandler(fd: FileHandle, func: Function): void;

	/**
	 * Call the function `func` when the signal `signal` happens. Only a single handler per signal number is supported. Use `null` to set the default handler or `undefined` to ignore the signal. Signal handlers can only be defined in the main thread.
	 */
	export function signal(signal: POSIXSIG, func: Function): void;

	/** POSIX signal numbers. */
	export const SIGINT = 2;
	/** POSIX signal numbers. */
	export const SIGABRT = 6;
	/** POSIX signal numbers. */
	export const SIGFPE = 8;
	/** POSIX signal numbers. */
	export const SIGILL = 4;
	/** POSIX signal numbers. */
	export const SIGSEGV = 11;
	/** POSIX signal numbers. */
	export const SIGTERM = 15;

	type POSIXSIG =
		| typeof SIGINT
		| typeof SIGABRT
		| typeof SIGFPE
		| typeof SIGILL
		| typeof SIGSEGV
		| typeof SIGTERM;

	type ExecOptions = {
		/** Boolean (default = true). If true, wait until the process is terminated. In this case, `exec` return the exit code if positive or the negated signal number if the process was interrupted by a signal. If false, do not block and return the process id of the child.  */
		block: boolean;

		/** Boolean (default = true). If true, the file is searched in the `PATH` environment variable. */
		usePath: boolean;

		/** String (default = `args[0]`). Set the file to be executed. */
		file: PATH;

		/** String. If present, set the working directory of the new process. */
		cwd: PATH;

		/** If present, set the handle in the child for stdin, stdout or stderr. */
		stdin: FileHandle;
		/** If present, set the handle in the child for stdin, stdout or stderr. */
		stdout: FileHandle;
		/** If present, set the handle in the child for stdin, stdout or stderr. */
		stderr: FileHandle;

		/** Object. If present, set the process environment from the object key-value pairs. Otherwise use the same environment as the current process. */
		env: Dict<string>;

		/** Integer. If present, the process uid with `setuid`. */
		uid: number;

		/** Integer. If present, the process gid with `setgid`. */
		gid: number;
	};

	/**
	 * Execute a process with the arguments `args`. i.e. `['echo', 'hi']`
	 */
	export function exec(args: string[], options?: Partial<ExecOptions>): ERRNO;

	/** `waitpid` Unix system call. Return the array `[ret, status]`. `ret` contains `-errno` in case of error. */
	export function waitpid(
		pid: number,
		options: typeof WNOHANG
	): [ret: ERRNO, status: number];

	/** Constant for the options argument of waitpid. */
	export const WNOHANG: number;

	/** `dup` Unix system call. */
	export function dup(fd: FileHandle): FileHandle | ERRNO;

	/** `dup2` Unix system call. */
	export function dup2(
		oldfd: FileHandle,
		newfd: FileHandle
	): FileHandle | ERRNO;

	/** `pipe` Unix system call. Return two handles as `[read_fd, write_fd]` or `null` in case of error. */
	export function pipe(): [read_fd: FileHandle, write_fd: FileHandle] | null;

	/** Sleep during `delay_ms` milliseconds. */
	export function sleep(delay_ms: number): ERRNO;

	/** Call the function `func` after delay `ms`. Return a handle to the timer. */
	export function setTimeout(func: Function, delay: number): {};

	/** Cancel a timer. */
	export function clearTimeout(handle: {}): void;

	/** Return a string representing the platform: "linux", "darwin", "win32" or "js". */
	export const platform: 'linux' | 'darwin' | 'win32' | 'js';

	export class Worker {
		/**
		 * Constructor to create a new thread (worker) with an API close to the `WebWorkers`. `module_filename` is a string specifying the module filename which is executed in the newly created thread. As for dynamically imported module, it is relative to the current script or module path. Threads normally don’t share any data and communicate between each other with messages. Nested workers are not supported. An example is available in `tests/test_worker.js`.
		 */
		constructor(module_filename: PATH);

		/** In the created worker, Worker.parent represents the parent worker and is used to send or receive messages.  */
		static parent: Worker;

		/**
		 * Send a message to the corresponding worker. msg is cloned in the destination worker using an algorithm similar to the HTML structured clone algorithm. SharedArrayBuffer are shared between workers.
		 *
		 * Current limitations: `Map` and `Set` are not supported yet.
		 * */
		postMessage(msg: any): void;

		/**
		 * Getter and setter. Set a function which is called each time a message is received. The function is called with a single argument. It is an object with a `data` property containing the received message. The thread is not terminated if there is at least one non `null` `onmessage` handler.
		 */
		onmessage: ({ data: any }) => any;
	}
}
