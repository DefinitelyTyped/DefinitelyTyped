import { Fiber } from './ReactFiber';
import { ExpirationTime } from './ReactFiberExpirationTime';
import { Interaction } from './Tracking';

// TODO: This should be lifted into the renderer.
export interface Batch {
    _defer: boolean;
    _expirationTime: ExpirationTime;
    _onComplete: () => unknown;
    _next: Batch | null;
}

export type PendingInteractionMap = Map<ExpirationTime, Set<Interaction>>;

export interface BaseFiberRootProperties {
    // Any additional information from the host associated with this root.
    containerInfo: any;
    // Used only by persistent updates.
    pendingChildren: any;
    // The currently active root fiber. This is the mutable root of the tree.
    current: Fiber;

    // The following priority levels are used to distinguish between 1)
    // uncommitted work, 2) uncommitted work that is suspended, and 3) uncommitted
    // work that may be unsuspended. We choose not to track each individual
    // pending level, trading granularity for performance.
    //
    // The earliest and latest priority levels that are suspended from committing.
    earliestSuspendedTime: ExpirationTime;
    latestSuspendedTime: ExpirationTime;
    // The earliest and latest priority levels that are not known to be suspended.
    earliestPendingTime: ExpirationTime;
    latestPendingTime: ExpirationTime;
    // The latest priority level that was pinged by a resolved promise and can
    // be retried.
    latestPingedTime: ExpirationTime;

    // If an error is thrown, and there are no more updates in the queue, we try
    // rendering from the root one more time, synchronously, before handling
    // the error.
    didError: boolean;

    pendingCommitExpirationTime: ExpirationTime;
    // A finished work-in-progress HostRoot that's ready to be committed.
    finishedWork: Fiber | null;
    // Timeout handle returned by setTimeout. Used to cancel a pending timeout, if
    // it's superseded by a new one.
    timeoutHandle: any;
    // Top context object, used by renderSubtreeIntoContainer
    context: object | null;
    pendingContext: object | null;
    // Determines if we should attempt to hydrate on the initial mount
    readonly hydrate: boolean;
    // Remaining expiration time on this root.
    // TODO: Lift this into the renderer
    nextExpirationTimeToWorkOn: ExpirationTime;
    expirationTime: ExpirationTime;
    // List of top-level batches. This list indicates whether a commit should be
    // deferred. Also contains completion callbacks.
    // TODO: Lift this into the renderer
    firstBatch: Batch | null;
    // Linked-list of roots
    nextScheduledRoot: FiberRoot | null;
}

// The following attributes are only used by interaction tracking builds.
// They enable interactions to be associated with their async work,
// And expose interaction metadata to the React DevTools Profiler plugin.
// Note that these attributes are only defined when the enableSchedulerTracking flag is enabled.
export interface ProfilingOnlyFiberRootProperties {
    interactionThreadID: number;
    memoizedInteractions: Set<Interaction>;
    pendingInteractionMap: PendingInteractionMap;
}

export type FiberRoot = BaseFiberRootProperties & ProfilingOnlyFiberRootProperties;
