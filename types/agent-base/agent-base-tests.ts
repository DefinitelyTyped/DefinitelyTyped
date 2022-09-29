import agent = require('agent-base');

agent(); // $ExpectType Agent
agent({ timeout: 1000 }); // $ExpectType Agent

agent((req, opts) => {}); // $ExpectType Agent
agent((req, opts) => {}, { timeout: 1000 }); // $ExpectType Agent

agent(async (req, opts) => {}); // $ExpectType Agent
agent(async (req, opts) => {}, { timeout: 1000 }); // $ExpectType Agent

// @ts-expect-error
agent(0);
// @ts-expect-error
agent(1);
// @ts-expect-error
agent('');
// @ts-expect-error
agent(true);
// @ts-expect-error
agent(null);

// @ts-expect-error
agent((req, opts) => {}, 0);
// @ts-expect-error
agent((req, opts) => {}, 1);
// @ts-expect-error
agent((req, opts) => {}, '');
// @ts-expect-error
agent((req, opts) => {}, true);
// @ts-expect-error
agent((req, opts) => {}, null);
// @ts-expect-error
agent((req, opts) => {}, (req, opts) => {});
