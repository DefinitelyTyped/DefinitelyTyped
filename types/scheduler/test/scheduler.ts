import { unstable_scheduleCallback, unstable_cancelCallback, unstable_now } from 'scheduler';

// $ExpectType CallbackNode
const callbackNode = unstable_scheduleCallback(() => {}, { timeout: 100 });
unstable_cancelCallback(callbackNode);

// $ExpectType number
unstable_now();
