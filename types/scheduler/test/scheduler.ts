import { unstable_scheduleCallback, unstable_cancelCallback, unstable_now, unstable_NormalPriority } from 'scheduler';

// $ExpectType CallbackNode
const callbackNode = unstable_scheduleCallback(unstable_NormalPriority, () => {}, { delay: 100 });
unstable_cancelCallback(callbackNode);

// $ExpectType number
unstable_now();
