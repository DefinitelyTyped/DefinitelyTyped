// Type definitions for non-npm package w3c Screen Wake Lock API 1.0
// Project: https://w3c.github.io/screen-wake-lock/
// Definitions by: Chris Milson <https://github.com/chrismilson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type WakeLockType = 'screen';

/**
 * A WakeLockSentinel provides a handle to a platform wake lock, and it holds on
 * to it until it is either manually released or until the underlying platform
 * wake lock is released. Its existence keeps a platform wake lock for a given
 * wake lock type active, and releasing all WakeLockSentinel instances of a
 * given wake lock type will cause the underlying platform wake lock to be
 * released.
 */
interface WakeLockSentinel extends EventTarget {
    /** Whether the WakeLockSentinel's handle has been released. */
    readonly released: boolean;
    /** The WakeLockSentinel's wake lock type. */
    readonly type: WakeLockType;
    /** Releases the WakeLockSentinel's lock on the screen. */
    release(): Promise<undefined>;
    /**
     * Called when the WakeLockSentinel's handle is released. Note that the
     * WakeLockSentinel's handle being released does not necessarily mean that
     * the underlying wake lock has been released.
     */
    onrelease: EventListener;
}

/**
 * Allows a document to acquire a screen wake lock.
 */
interface WakeLock {
    /**
     * The request method will attempt to obtain a wake lock, and will return
     * a promise that will resolve with a sentinel to the obtained lock if
     * successful.
     *
     * If unsuccessful, the promise will reject with a "NotAllowedError"
     * DOMException. There are multiple different situations that may cause the
     * request to be unsucessful, including:
     *
     * 1. The _document_ is not allowed to use the wake lock feature.
     * 2. The _user-agent_ denied the specific type of wake lock.
     * 3. The _document_'s browsing context is `null`.
     * 4. The _document_ is not fully active.
     * 5. The _document_ is hidden.
     * 6. The request was aborted.
     *
     * @param type The type of wake lock to be requested.
     */
    request(type: WakeLockType): Promise<WakeLockSentinel>;
}

interface Navigator {
    readonly wakeLock: WakeLock;
}
