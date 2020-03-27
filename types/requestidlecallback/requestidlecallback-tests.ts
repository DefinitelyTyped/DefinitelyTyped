// Test requestIdleCallback with default param
requestIdleCallback(() => '1');

// Test requestIdleCallback with default param and optional param
requestIdleCallback(() => '2', { timeout: 2000 });

// Test cancelIdleCallback with default param
cancelIdleCallback(1);
