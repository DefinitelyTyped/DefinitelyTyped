export namespace Error {
    const enum ERROR {
        GITERR_NONE = 0,
        GITERR_NOMEMORY = 1,
        GITERR_OS = 2,
        GITERR_INVALID = 3,
        GITERR_REFERENCE = 4,
        GITERR_ZLIB = 5,
        GITERR_REPOSITORY = 6,
        GITERR_CONFIG = 7,
        GITERR_REGEX = 8,
        GITERR_ODB = 9,
        GITERR_INDEX = 10,
        GITERR_OBJECT = 11,
        GITERR_NET = 12,
        GITERR_TAG = 13,
        GITERR_TREE = 14,
        GITERR_INDEXER = 15,
        GITERR_SSL = 16,
        GITERR_SUBMODULE = 17,
        GITERR_THREAD = 18,
        GITERR_STASH = 19,
        GITERR_CHECKOUT = 20,
        GITERR_FETCHHEAD = 21,
        GITERR_MERGE = 22,
        GITERR_SSH = 23,
        GITERR_FILTER = 24,
        GITERR_REVERT = 25,
        GITERR_CALLBACK = 26,
        GITERR_CHERRYPICK = 27,
        GITERR_DESCRIBE = 28,
        GITERR_REBASE = 29,
        GITERR_FILESYSTEM = 30
    }

    const enum CODE {
        OK = 0,
        ERROR = -1,
        ENOTFOUND = -3,
        EEXISTS = -4,
        EAMBIGUOUS = -5,
        EBUFS = -6,
        EUSER = -7,
        EBAREREPO = -8,
        EUNBORNBRANCH = -9,
        EUNMERGED = -10,
        ENONFASTFORWARD = -11,
        EINVALIDSPEC = -12,
        ECONFLICT = -13,
        ELOCKED = -14,
        EMODIFIED = -15,
        EAUTH = -16,
        ECERTIFICATE = -17,
        EAPPLIED = -18,
        EPEEL = -19,
        EEOF = -20,
        EINVALID = -21,
        EUNCOMMITTED = -22,
        EDIRECTORY = -23,
        PASSTHROUGH = -30,
        ITEROVER = -31
    }
}

export class Error {
    /**
     *
     *
     * @type {string}
     * @memberof Error
     */
    message: string;
    /**
     *
     *
     * @type {number}
     * @memberof Error
     */
    klass: number;
}
