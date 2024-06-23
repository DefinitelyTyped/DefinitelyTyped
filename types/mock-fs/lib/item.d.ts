export = Item;

/**
 * A filesystem item.
 */
declare class Item {
    /** Returns whether the current user has read permission. */
    canRead(): boolean;
    /** Returns whether the current user has write permission. */
    canWrite(): boolean;
    /**  Returns whether the current user has execute permission. */
    canExecute(): boolean;
    /** Get access time. */
    getATime(): Date;
    /** Set access time. */
    setATime(atime: Date): void;
    /** Get change time. */
    getCTime(): Date;
    /** Set change time. */
    setCTime(ctime: Date): void;
    /** Get birth time. */
    getBirthtime(): Date;
    /** Set birth time. */
    setBirthtime(birthtime: Date): void;
    /** Get modification time. */
    getMTime(): Date;
    /** Set modification time. */
    setMTime(mtime: Date): void;
    /** Get mode (permission only, e.g 0666). */
    getMode(): number;
    /** Set mode (permission only, e.g 0666). */
    setMode(mode: number): void;
    /** Get user id. */
    getUid(): number;
    /** Set user id. */
    setUid(uid: number): void;
    /** Get group id. */
    getGid(): number;
    /** Set group id. */
    setGid(gid: number): void;
    /** Get item stats. */
    getStats(): Item.Stats;
}

declare namespace Item {
    interface Stats {
        dev: number;
        nlink: number;
        uid: number;
        gid: number;
        rdev: number;
        blksize: number;
        ino: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
        birthtime: Date;
    }

    interface ExtendedStats extends Stats {
        mode: number;
        size: number;
        blocks: number;
    }
}
