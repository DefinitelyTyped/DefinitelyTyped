export namespace Enums {
    const enum CVAR {
        FALSE = 0,
        TRUE = 1,
        INT32 = 2,
        string = 3,
    }

    const enum DIRECTION {
        FETCH = 0,
        PUSH = 1,
    }

    const enum FEATURE {
        THREADS = 1,
        HTTPS = 2,
        SSH = 4,
    }

    const enum IDXENTRY_EXTENDED_FLAG {
        IDXENTRY_INTENT_TO_ADD = 8192,
        IDXENTRY_SKIP_WORKTREE = 16384,
        IDXENTRY_EXTENDED2 = 32768,
        S = 24576,
        IDXENTRY_UPDATE = 1,
        IDXENTRY_REMOVE = 2,
        IDXENTRY_UPTODATE = 4,
        IDXENTRY_ADDED = 8,
        IDXENTRY_HASHED = 16,
        IDXENTRY_UNHASHED = 32,
        IDXENTRY_WT_REMOVE = 64,
        IDXENTRY_CONFLICTED = 128,
        IDXENTRY_UNPACKED = 256,
        IDXENTRY_NEW_SKIP_WORKTREE = 512,
    }

    const enum INDXENTRY_FLAG {
        IDXENTRY_EXTENDED = 16384,
        IDXENTRY_VALID = 32768,
    }
}
