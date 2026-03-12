import {
    unstable_cancelCallback,
    unstable_forceFrameRate,
    unstable_NormalPriority,
    unstable_Profiling,
    unstable_requestPaint,
    unstable_scheduleCallback,
} from "./unstable_post_task"; // eslint-disable-line @definitelytyped/no-relative-import-in-test

unstable_forceFrameRate(60);
unstable_requestPaint();

// $ExpectType CallbackNode
const callbackNode = unstable_scheduleCallback(unstable_NormalPriority, () => {}, { delay: 100 });
unstable_cancelCallback(callbackNode);

// $ExpectType { readonly signal: unknown; abort(reason?: unknown): void; }
callbackNode._controller;
// $ExpectType unknown
callbackNode._controller.signal;
callbackNode._controller.abort();
callbackNode._controller.abort("reason");

// $ExpectType null
unstable_Profiling;

// @ts-expect-error timeout is no longer part of the public options bag
unstable_scheduleCallback(unstable_NormalPriority, () => {}, { timeout: 100 });
