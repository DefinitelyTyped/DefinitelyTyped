// eslint-disable-next-line @definitelytyped/no-relative-import-in-test
import {
    log,
    reset,
    unstable_Profiling,
    unstable_advanceTime,
    unstable_cancelCallback,
    unstable_clearLog,
    unstable_flushAll,
    unstable_flushAllWithoutAsserting,
    unstable_flushExpired,
    unstable_flushNumberOfYields,
    unstable_flushUntilNextPaint,
    unstable_forceFrameRate,
    unstable_hasPendingWork,
    unstable_NormalPriority,
    unstable_requestPaint,
    unstable_scheduleCallback,
    unstable_setDisableYieldValue,
} from "./unstable_mock";

log("yield");
reset();
unstable_advanceTime(5);
unstable_flushAll();
unstable_flushExpired();
unstable_flushNumberOfYields(1);
unstable_forceFrameRate(60);
unstable_requestPaint();
unstable_setDisableYieldValue(true);

// $ExpectType unknown[]
unstable_clearLog();
// $ExpectType boolean
unstable_flushAllWithoutAsserting();
// $ExpectType boolean
unstable_flushUntilNextPaint();
// $ExpectType boolean
unstable_hasPendingWork();
// $ExpectType null
unstable_Profiling;

// $ExpectType CallbackNode
const callbackNode = unstable_scheduleCallback(unstable_NormalPriority, () => {}, { delay: 100 });
unstable_cancelCallback(callbackNode);

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
