/// <reference types="node"/>

/**
 * Asynchronous flock(2). No arguments other than a possible error are passed to the callback.
 * @param fd File descriptor.
 * @param flags Flags can be 'sh', 'ex', 'shnb', 'exnb', 'un' and correspond to the various LOCK_SH,
 *      LOCK_EX, LOCK_SH | LOCK_NB, etc.
 */
export function flock(
    fd: number,
    flags: "sh" | "ex" | "shnb" | "exnb" | "un",
    callback: (err: NodeJS.ErrnoException | null) => void,
): void;
export function flock(fd: number, flags: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

/**
 * Synchronous flock(2). Throws an exception on error.
 * @param fd File descriptor.
 * @param flags Flags can be 'sh', 'ex', 'shnb', 'exnb', 'un' and correspond to the various LOCK_SH,
 *      LOCK_EX, LOCK_SH | LOCK_NB, etc.
 */
export function flockSync(fd: number, flags: "sh" | "ex" | "shnb" | "exnb" | "un"): void;
export function flockSync(fd: number, flags: number): void;

/**
 * Asynchronous fcntl(2).
 * @param fd File descriptor.
 * @param cmd The supported commands are: 'getfd' (F_GETFD), 'setfd' (F_SETFD), 'setlk' (F_SETLK),
 *      'setlkw' (F_SETLKW), 'getlk' (F_GETLK).
 * @param arg
 */
export function fcntl(
    fd: number,
    cmd: "getfd" | "setfd" | "setlk" | "setlkw" | "getlk",
    arg: number,
    callback: (err: NodeJS.ErrnoException | null, result: number) => void,
): void;
export function fcntl(
    fd: number,
    cmd: number,
    arg: number,
    callback: (err: NodeJS.ErrnoException | null, result: number) => void,
): void;
export function fcntl(
    fd: number,
    cmd: "getfd" | "setfd" | "setlk" | "setlkw" | "getlk",
    callback: (err: NodeJS.ErrnoException | null, result: number) => void,
): void;
export function fcntl(
    fd: number,
    cmd: number,
    callback: (err: NodeJS.ErrnoException | null, result: number) => void,
): void;

/**
 * Synchronous fcntl(2). Throws an exception on error.
 * @param fd File descriptor.
 * @param cmd The supported commands are:  'getfd' (F_GETFD), 'setfd' (F_SETFD), 'setlk' (F_SETLK),
 *      'setlkw' (F_SETLKW), 'getlk' (F_GETLK).
 * @param arg arg
 * @return For a successful call, the return value depends on the operation:
 *      F_GETFD
 *          Value of file descriptor flags.
 *      All other commands
 *          Zero.
 */
export function fcntlSync(fd: number, cmd: "getfd" | "setfd" | "setlk" | "setlkw" | "getlk", arg?: number): number;
export function fcntlSync(fd: number, cmd: number, arg?: number): number;

/**
 * Asynchronous lseek(2).
 * @param fd File descriptor.
 * @param offset Offset in bytes.
 * @param whence Whence can be 0 (SEEK_SET) to set the new position in bytes to offset, 1 (SEEK_CUR)
 *      to set the new position to the current position plus offset bytes (can be negative), or 2
 *      (SEEK_END) to set to the end of the file plus offset bytes (usually negative or zero to seek
 *      to the end of the file).
 */
export function seek(
    fd: number,
    offset: number,
    whence: number,
    callback: (err: NodeJS.ErrnoException | null, currFilePos: number) => void,
): void;

/**
 * Synchronous lseek(2). Throws an exception on error. Returns current file position.
 * @param fd File descriptor.
 * @param offset Offset in bytes.
 * @param whence Whence can be 0 (SEEK_SET) to set the new position in bytes to offset, 1 (SEEK_CUR)
 *      to set the new position to the current position plus offset bytes (can be negative), or 2
 *      (SEEK_END) to set to the end of the file plus offset bytes (usually negative or zero to seek
 *      to the end of the file).
 * @returns Returns current file position.
 */
export function seekSync(fd: number, offset: number, whence: number): number;

/**
 * Asynchronous/synchronous statvfs(2).
 * @param path Pathname of any file within the mounted file system. Default is `/`.
 */
export function statVFS(path: string, callback: (err: NodeJS.ErrnoException | null, stat: StatFVS) => void): void;
export function statVFS(callback: (err: NodeJS.ErrnoException | null, stat: StatFVS) => void): void;
export function statVFS(path?: string): StatFVS;

/**
 * Filesystem statistics.
 */
export interface StatFVS {
    /** File system block size. */
    f_bsize: number;
    /** Fragment size. */
    f_frsize: number;
    /** Size of fs in f_frsize units. */
    f_blocks: number;
    /** Number of free blocks. */
    f_bfree: number;
    /** Number of free blocks for unprivileged users. */
    f_bavail: number;
    /** Number of inodes. */
    f_files: number;
    /** Number of free inodes. */
    f_ffree: number;
    /** Number of free inodes for unprivileged users. */
    f_favail: number;
    /** Filesystem ID. */
    f_fsid: number;
    /** Mount flags. */
    f_flag: number;
    /** Maximum filename length. */
    f_namemax: number;
}

export namespace constants {
    /**
     * The file offset is set to offset bytes.
     */
    const SEEK_SET: number;
    /**
     * The file offset is set to its current location plus `offset` bytes.
     */
    const SEEK_CUR: number;
    /**
     * The file offset is set to the size of the file plus `offset` bytes.
     */
    const SEEK_END: number;

    /**
     * Place a shared lock. More than one process may hold a shared lock for a given file at a given
     * time.
     */
    const LOCK_SH: number;
    /**
     * Place an exclusive lock. Only one process may hold an exclusive lock for a given file at a
     * given time.
     */
    const LOCK_EX: number;
    /**
     * Remove an existing lock held by this process.
     */
    const LOCK_UN: number;
    /**
     * A call to flock() may block if an incompatible lock is held by another process. To make a
     * nonblocking request, include LOCK_NB (by ORing) with any of the above operations.
     */
    const LOCK_NB: number;

    /**
     * Return (as the function result) the file descriptor flags. `arg` is ignored.
     */
    const F_GETFD: number;
    /**
     * Set the file descriptor flags to the value specified by `arg`.
     */
    const F_SETFD: number;
    /**
     * The close-on-exec flag.
     */
    const FD_CLOEXEC: number;

    /**
     * A read lock on a file.
     */
    const F_RDLCK: number;
    /**
     * A write lock on a file.
     */
    const F_WRLCK: number;
    /**
     * Unlock a file.
     */
    const F_UNLCK: number;

    /**
     * Acquire a lock (when constants F_RDLCK or F_WRLCK are specified) or release a lock (when
     * constant F_UNLCK is specified).
     */
    const F_SETLK: number;
    /**
     * As for F_SETLK, but if a conflicting lock is held on the file, then wait for that lock to be
     * released.
     */
    const F_SETLKW: number;
    /**
     * Test for the existence locks.
     */
    const F_GETLK: number;
}
