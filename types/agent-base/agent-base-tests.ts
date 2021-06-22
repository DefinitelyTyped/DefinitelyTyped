import agent = require('agent-base');

agent(); // $ExpectType Agent
agent({ timeout: 1000 }); // $ExpectType Agent

agent((req, opts) => {}); // $ExpectType Agent
agent((req, opts) => {}, { timeout: 1000 }); // $ExpectType Agent

agent(async (req, opts) => {}); // $ExpectType Agent
agent(async (req, opts) => {}, { timeout: 1000 }); // $ExpectType Agent

agent(0); // $ExpectError
agent(1); // $ExpectError
agent(''); // $ExpectError
agent(true); // $ExpectError
agent(null); // $ExpectError

agent((req, opts) => {}, 0); // $ExpectError
agent((req, opts) => {}, 1); // $ExpectError
agent((req, opts) => {}, ''); // $ExpectError
agent((req, opts) => {}, true); // $ExpectError
agent((req, opts) => {}, null); // $ExpectError
agent((req, opts) => {}, (req, opts) => {}); // $ExpectError
