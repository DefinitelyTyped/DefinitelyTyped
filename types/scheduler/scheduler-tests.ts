import {
    unstable_cancelCallback,
    unstable_forceFrameRate,
    unstable_next,
    unstable_NormalPriority,
    unstable_now,
    unstable_Profiling,
    unstable_requestPaint,
    unstable_scheduleCallback,
} from "."; // eslint-disable-line @definitelytyped/no-relative-import-in-test

// $ExpectType CallbackNode
const callbackNode = unstable_scheduleCallback(unstable_NormalPriority, () => {}, { delay: 100 });
unstable_cancelCallback(callbackNode);
unstable_forceFrameRate(60);
unstable_requestPaint();

// $ExpectType number
callbackNode.id;
// $ExpectType FrameCallbackType | null
callbackNode.callback;
// $ExpectType number
callbackNode.priorityLevel;
// $ExpectType number
callbackNode.startTime;
// $ExpectType number
callbackNode.expirationTime;
// $ExpectType number
callbackNode.sortIndex;

// $ExpectType null
unstable_Profiling;

// $ExpectType number
unstable_now();

// $ExpectType number
const nextNumberResult = unstable_next(() => 42);
// $ExpectType string
const nextStringResult = unstable_next(() => "Hello");

// @ts-expect-error timeout is no longer part of the public options bag
unstable_scheduleCallback(unstable_NormalPriority, () => {}, { timeout: 100 });
// @ts-expect-error removed in scheduler 0.27
callbackNode.next;
