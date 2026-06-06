import { clockIsAccurate, getGlobalMonotonicClockMS, Performance } from "w3c-hr-time";

const performance = new Performance();

performance.timeOrigin; // $ExpectType number
performance.now(); // $ExpectType number

const json = performance.toJSON(); // $ExpectType PerformanceJSON
json.timeOrigin; // $ExpectType number

getGlobalMonotonicClockMS(); // $ExpectType number
clockIsAccurate; // $ExpectType boolean
