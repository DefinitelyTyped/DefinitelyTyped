import {
    request as requestIdleCallback,
    cancel as cancelIdleCallback,
    IdleRequestOptions,
    IdleCallbackHandle,
} from 'requestidlecallback';

// Test requestIdleCallback with default param
requestIdleCallback(() => '1');

// Test requestIdleCallback with default param and optional param
const option: IdleRequestOptions = { timeout: 2000 };
requestIdleCallback(() => '2', option);

// Test cancelIdleCallback with default param
const handle: IdleCallbackHandle = 1;
cancelIdleCallback(handle);
