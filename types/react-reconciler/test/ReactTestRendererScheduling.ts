interface Deadline {
    timeRemaining: () => number;
    didTimeout: boolean;
}

// Current virtual time
export let nowImplementation = () => 0;
export let scheduledCallback: ((deadline: Deadline) => any) | null = null;
export let yieldedValues: any[] = [];

export function scheduleDeferredCallback(
    callback: (deadline: Deadline) => any,
    options?: { timeout: number },
): number {
    scheduledCallback = callback;
    const fakeCallbackId = 0;
    return fakeCallbackId;
}

export function cancelDeferredCallback(timeoutID: number): void {
    scheduledCallback = null;
}

export function setNowImplementation(implementation: () => number): void {
    nowImplementation = implementation;
}

export function flushAll(): any[] {
    yieldedValues = [];
    while (scheduledCallback !== null) {
        const cb = scheduledCallback;
        scheduledCallback = null;
        cb({
            timeRemaining() {
                // Keep rendering until there's no more work
                return 999;
            },
            // React's scheduler has its own way of keeping track of expired
            // work and doesn't read this, so don't bother setting it to the
            // correct value.
            didTimeout: false,
        });
    }
    return yieldedValues;
}

export function flushNumberOfYields(count: number): any[] {
    let didStop = false;
    yieldedValues = [];
    while (scheduledCallback !== null && !didStop) {
        const cb = scheduledCallback;
        scheduledCallback = null;
        cb({
            timeRemaining() {
                if (yieldedValues.length >= count) {
                    // We at least as many values as expected. Stop rendering.
                    didStop = true;
                    return 0;
                }
                // Keep rendering.
                return 999;
            },
            // React's scheduler has its own way of keeping track of expired
            // work and doesn't read this, so don't bother setting it to the
            // correct value.
            didTimeout: false,
        });
    }
    return yieldedValues;
}

export function yieldValue(value: any): void {
    yieldedValues.push(value);
}

export function clearYields(): any[] {
    const values = yieldedValues;
    yieldedValues = [];
    return values;
}
