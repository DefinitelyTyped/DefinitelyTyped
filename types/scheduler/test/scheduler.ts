import { unstable_scheduleCallback, unstable_cancelCallback, unstable_now, unstable_NormalPriority, unstable_next } from 'scheduler';

// $ExpectType CallbackNode
const callbackNode = unstable_scheduleCallback(unstable_NormalPriority, () => {}, { timeout: 100 });
unstable_cancelCallback(callbackNode);
unstable_scheduleCallback(unstable_NormalPriority, () => {}, { delay: 100 });

// $ExpectType number
unstable_now();

// $ExpectType number
const nextNumberResult = unstable_next(() => 42);
// $ExpectType string
const nextStringResult = unstable_next(() => 'Hello');
