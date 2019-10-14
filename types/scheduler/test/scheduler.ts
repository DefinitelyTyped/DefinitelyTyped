import { unstable_scheduleCallback, unstable_cancelCallback, unstable_now, unstable_NormalPriority, unstable_next } from 'scheduler';

// $ExpectType CallbackNode
const callbackNode = unstable_scheduleCallback(unstable_NormalPriority, () => {}, { timeout: 100 });
unstable_cancelCallback(callbackNode);
unstable_scheduleCallback(unstable_NormalPriority, () => {}, { delay: 100 });

// $ExpectType number
unstable_now();

// $ExpectType number | undefined
const nextNumberResult = unstable_next(() => 42);
// $ExpectType string | undefined
const nextStringResult = unstable_next(() => 'Hello');
