import {
	ERRNO,
	PATH,
	SCRIPT,
	N,
	FileFlags,
	LimFileFlags,
	TODOType,
	HTTPResponseObject,
	Json,
	FileHandle,
} from 'baseTypes';

declare module 'std' {
	/**
	 * Exit the process.
	 **/
	export function exit(n: ERRNO): never;

	/**
	 * Evaluate the string `str` as a script (global eval). `options` is an optional object containing the following optional properties:
	 *
	 * backtrace_barrier: boolean (default = false). If true, error backtraces do not list the stack frames below the evalScript.
	 */
	export function evalScript(
		str: SCRIPT,
		options?: Partial<{ backtrace_barrier: boolean }>
	): any;

	/**
	 * Evaluate the file `filename` as a script (global eval).
	 */
	export function loadScript(filename: PATH): any;

	/**
	 * Load the file `filename` and return it as a string assuming UTF-8 encoding. Return `null` in case of I/O error.
	 */
	export function loadFile(filename: PATH): string | null;

	/**
	 * Open a file (wrapper to the libc `fopen()`). Return the FILE object or `null` in case of I/O error. If `errorObj` is not undefined, set its `errno` property to the error code or to 0 if no error occured.
	 */
	export function open(
		filename: PATH,
		flags: FileFlags,
		errorObj?: Partial<{ errno: ERRNO }>
	): N<FILE>;

	/**
	 * Open a process by creating a pipe (wrapper to the libc `popen()`). Return the FILE object or `null` in case of I/O error. If `errorObj` is not undefined, set its `errno` property to the error code or to 0 if no error occured.
	 */
	export function popen(
		filename: PATH,
		flags: LimFileFlags,
		errorObj?: Partial<{ errno: ERRNO }>
	): N<FILE>;

	//TODO: figure out type of `fd`
	/**
	 * Open a file from a file handle (wrapper to the libc `fdopen()`). Return the FILE object or `null` in case of I/O error. If `errorObj` is not undefined, set its `errno` property to the error code or to 0 if no error occured.
	 */
	export function fdopen(
		fd: FileHandle,
		flags: FileFlags,
		errorObj?: Partial<{ errno: ERRNO }>
	): N<FILE>;

	/**
	 * Open a temporary file. Return the FILE object or `null` in case of I/O error. If `errorObj` is not undefined, set its `errno` property to the error code or to 0 if no error occured.
	 */
	export function tmpfile(errorObj?: Partial<{ errno: ERRNO }>): N<FILE>;

	/**
	 * Equivalent to `std.out.puts(str)`.
	 */
	export function puts(str: string): void;

	/**
	 * Equivalent to `std.out.printf(fmt, ...args)`.
	 */
	export function printf(fmt: string, ...args: string[]): void;

	/**
	 * Equivalent to the libc sprintf().
	 */
	export function sprintf(fmt: string, ...args: string[]): void;

	// /**
	//  * Wrappers to the libc file stdin, stdout, stderr.
	//  */
	// export const in: FILE;

	// export const out: FILE;

	// export const err: FILE;

	type SEEK_CONST = number;

	/**
	 * Constants for seek().
	 */
	export const SEEK_SET: SEEK_CONST & 0;
	/**
	 * Constants for seek().
	 */
	export const SEEK_CUR: SEEK_CONST & 1;
	/**
	 * Constants for seek().
	 */
	export const SEEK_END: SEEK_CONST & 2;

	/**
	 * Enumeration object containing the integer value of common errors (additional error codes may be defined)
	 */
	export enum Error {
		EINVAL = 22,
		EIO = 5,
		EACCES = 13,
		EEXIST = 17,
		ENOSPC = 28,
		ENOSYS = 38,
		EBUSY = 16,
		ENOENT = 2,
		EPERM = 1,
		EPIPE = 32,
	}

	/**
	 * Return a string that describes the error `errno`.
	 */
	export function strerror(errno: ERRNO): string;

	/**
	 * Manually invoke the cycle removal algorithm. The cycle removal algorithm is automatically started when needed, so this function is useful in case of specific memory constraints or for testing.
	 */
	export function gc(): void;

	/**
	 * Return the value of the environment variable `name` or `undefined` if it is not defined.
	 */
	export function getenv(name: string): string;

	/**
	 * 
		Download `url` using the `curl` command line utility. `options` is an optional object containing the following optional properties:
		
    binary - Boolean (default = false). If true, the response is an ArrayBuffer instead of a string. When a string is returned, the data is assumed to be UTF-8 encoded.
		
		full - Boolean (default = false). If true, returns an object contains the properties response (response content), responseHeaders (headers separated by CRLF), status (status code). response is null is case of protocol or network error. If full is false, only the response is returned if the status is between 200 and 299. Otherwise null is returned.
	 */
	export function urlGet(
		url: string,
		options?: Partial<{ binary: false; full: false }>
	): string;
	export function urlGet(
		url: string,
		options: Partial<{ binary: true; full: false }>
	): ArrayBuffer;
	export function urlGet(
		url: string,
		options: Partial<{ binary: false; full: true }>
	): HTTPResponseObject<string>;
	export function urlGet(
		url: string,
		options: Partial<{ binary: true; full: true }>
	): HTTPResponseObject<ArrayBuffer>;
	/**
	 * Parse str using a superset of JSON.parse. The following extensions are accepted:
	 * * Single line and multiline comments
	 * * unquoted properties (ASCII-only Javascript identifiers)
	 * * trailing comma in array and object definitions
	 * * single quoted strings
	 * * \f and \v are accepted as space characters
	 * * leading plus in numbers
	 * * octal (0o prefix) and hexadecimal (0x prefix) numbers
	 */
	export function parseExtJSON(str: string): Json;

	interface FILE {
		/**
		 * Close the file. Return 0 if OK or `-errno` in case of I/O error.
		 */
		close(): ERRNO;

		/**
		 * Outputs the string with the UTF-8 encoding.
		 */
		puts(str: string): void;

		/**
		 * Formatted printf.
		 *
		 * The same formats as the standard C library `printf` are supported. Integer format types (e.g. `%d`) truncate the Numbers or BigInts to 32 bits. Use the `l` modifier (e.g. `%ld`) to truncate to 64 bits.
		 */
		printf(fmt: string, ...args: string[]): void;

		/**
		 * Flush the buffered file.
		 */
		flush(): void;

		/**
		 * Seek to a given file position (whence is std.SEEK_*). offset can be a number or a bigint. Return 0 if OK or -errno in case of I/O error.
		 */
		seek(
			offset: number | bigint,
			whence: typeof SEEK_SET | typeof SEEK_CUR | typeof SEEK_END
		): ERRNO;

		/**
		 * Return the current file position.
		 */
		tell(): number;

		/**
		 * Return the current file position as a bigint.
		 */
		tello(): bigint;

		/**
		 * Return true if end of file.
		 */
		eof(): boolean;

		/**
		 * Return the associated OS handle.
		 */
		fileno(): number;

		/**
		 * Return true if there was an error.
		 */
		error(): boolean;

		/**
		 * Clear the error indication.
		 */
		clearerr(): void;

		/**
		 * Read `length` bytes from the file to the ArrayBuffer `buffer` at byte position `position` (wrapper to the libc `fread`).
		 *
		 * Returns number of bytes read.
		 */
		read(buffer: ArrayBuffer, position: number, length: number): number;

		/**
		 * Write `length` bytes from the file to the ArrayBuffer `buffer` at byte position `position` (wrapper to the libc `fread`).
		 *
		 * Returns number of bytes written.
		 */
		write(buffer: ArrayBuffer, position: number, length: number): number;

		/**
		 * Return the next line from the file, assuming UTF-8 encoding, excluding the trailing line feed.
		 */
		getline(): string;

		/**
		 * Read `max_size` bytes from the file and return them as a string assuming UTF-8 encoding. If `max_size` is not present, the file is read up its end.
		 */
		readAsString(max_size?: number): string;

		/**
		 * Return the next byte from the file. Return -1 if the end of file is reached.
		 */
		getByte(): number;
		/**
		 * Write one byte to the file.
		 */
		putByte(c: number): void;
	}
}
