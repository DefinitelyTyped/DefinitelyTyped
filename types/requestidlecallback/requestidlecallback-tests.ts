import * as requestIdleCallback from 'requestidlecallback';

const idleRequestHandle = requestIdleCallback.request((deadline: requestIdleCallback.IdleDeadline) => {
    while (deadline.timeRemaining() > 0) {
        // Do work if needed
    }
});

requestIdleCallback.cancel(idleRequestHandle);
