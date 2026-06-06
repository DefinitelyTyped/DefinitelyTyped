import { unstable_cancelScheduledWork, unstable_now, unstable_scheduleWork } from "schedule";

// $ExpectType CallbackNode
const callbackNode = unstable_scheduleWork(() => 0, { timeout: 100 });
unstable_cancelScheduledWork(callbackNode);

// $ExpectType number
unstable_now();
