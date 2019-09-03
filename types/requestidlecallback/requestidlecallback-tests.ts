import { requestIdleCallback, cancelIdleCallback } from 'requestidlecallback';

// Test requestIdleCallback with default param
requestIdleCallback(() => console.log('test'));

// Test requestIdleCallback with default param and optional param
requestIdleCallback(() => console.log('test'), 1);

// Test cancelIdleCallback with default param
cancelIdleCallback(1);
