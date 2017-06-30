// Type definitions for fs-ext
// Project: https://github.com/baudehlo/node-fs-ext
// Definitions by: Oguzhan Ergin <https://github.com/OguzhanE>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="node"/>


export * from "fs";

/**
* Asynchronous flock(2). No arguments other than a possible error are passed to the callback. 
* @param fd File Descriptor
* @param flags Flags can be 'sh', 'ex', 'shnb', 'exnb', 'un' and correspond to the various LOCK_SH, LOCK_EX, LOCK_SH|LOCK_NB, etc.
**/
export declare function flock(fd: number, flags: string, callback: (err: Error) => void): void;

/**
* Synchronous flock(2). Throws an exception on error.
* @param fd File Descriptor
* @param flags Flags can be 'sh', 'ex', 'shnb', 'exnb', 'un' and correspond to the various LOCK_SH, LOCK_EX, LOCK_SH|LOCK_NB, etc.
  **/
export declare function flockSync(fd: number, flags: string): void;

/**
* Asynchronous fcntl(2).
* @param fd File Descriptor
* @param cmd The supported commands are: 'getfd' ( F_GETFD ) , 'setfd' ( F_SETFD )
* Requiring this module adds FD_CLOEXEC to the constants module, for use with F_SETFD.
* @param arg arg
**/
export declare function fcntl(fd: number, cmd: string, arg: number, callback: (err: Error, result: number) => void): void;

/**
* Asynchronous fcntl(2).
* @param fd File Descriptor
* @param cmd The supported commands are: 'getfd' ( F_GETFD ) , 'setfd' ( F_SETFD )
* Requiring this module adds FD_CLOEXEC to the constants module, for use with F_SETFD.
**/
export declare function fcntl(fd: number, cmd: string, callback: (err: Error, result: number) => void): void;

/**
* Synchronous fcntl(2). Throws an exception on error.
* @param fd File Descriptor
* @param cmd The supported commands are: 'getfd' ( F_GETFD ) , 'setfd' ( F_SETFD )
* Requiring this module adds FD_CLOEXEC to the constants module, for use with F_SETFD.
* @param arg arg
* @return Returns flags
**/
export declare function fcntlSync(fd: number, cmd: string, arg?: number): number;

/**
* Asynchronous lseek(2).
* @param fd File Descriptor
* @param offset Offset
* @param whence 
* Whence can be 0 (SEEK_SET) to set the new position in bytes to offset, 1 (SEEK_CUR) to set the new 
* position to the current position plus offset bytes (can be negative), or 2 (SEEK_END) to set to the end 
* of the file plus offset bytes (usually negative or zero to seek to the end of the file).
**/
export declare function seek(fd: number, offset: number, whence: number, callback: (err: Error, currFilePos: number) => void): void;

/**
* Synchronous lseek(2). Throws an exception on error. Returns current file position.
* @param fd File Descriptor
* @param offset Offset
* @param whence 
* Whence can be 0 (SEEK_SET) to set the new position in bytes to offset, 1 (SEEK_CUR) to set the new 
* position to the current position plus offset bytes (can be negative), or 2 (SEEK_END) to set to the end 
* of the file plus offset bytes (usually negative or zero to seek to the end of the file).
* @returns Returns current file position.
**/
export declare function seekSync(fd: number, offset: number, whence: number): number;

/**
* Asynchronous utime(2).
* @param path File path
* @param atime
* Arguments atime and mtime are in seconds as for the system call.Note that the number value of Date() is in milliseconds,
* so to use the 'now' value with fs.utime() you would have to divide by 1000 first, e.g. Date.now()/1000
* Just like for utime(2), the absence of the atime and mtime means 'now'.
* @param mtime
* Arguments atime and mtime are in seconds as for the system call.Note that the number value of Date() is in milliseconds,
* so to use the 'now' value with fs.utime() you would have to divide by 1000 first, e.g. Date.now()/1000
* Just like for utime(2), the absence of the atime and mtime means 'now'.
**/
export declare function utime(path: string, atime: number, mtime: number, callback: (err: Error) => void): void;

/**
* Synchronous version of utime(). Throws an exception on error.
* @param path File path
* @param atime
* Arguments atime and mtime are in seconds as for the system call.Note that the number value of Date() is in milliseconds,
* so to use the 'now' value with fs.utime() you would have to divide by 1000 first, e.g. Date.now()/1000
* Just like for utime(2), the absence of the atime and mtime means 'now'.
* @param mtime
* Arguments atime and mtime are in seconds as for the system call.Note that the number value of Date() is in milliseconds,
* so to use the 'now' value with fs.utime() you would have to divide by 1000 first, e.g. Date.now()/1000
* Just like for utime(2), the absence of the atime and mtime means 'now'.
**/
export declare function utimeSync(path: string, atime: number, mtime: number): void;
