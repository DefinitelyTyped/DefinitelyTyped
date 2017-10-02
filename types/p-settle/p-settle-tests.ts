import pSettle = require('p-settle');

async function f() {
    const promises: Array<Promise<string>> = [];
    for (let index = 0; index < 10; ++index) {
        if (index % 3 === 0) {
          promises.push(Promise.reject(new Error('i reject you')));
        } else {
          promises.push(Promise.resolve('🦄'));
        }
    }
    const results = await pSettle(promises);
}
