import pWaitFor = require('p-wait-for');

pWaitFor(() => Promise.resolve(false)).then(() => {});
pWaitFor(() => Promise.resolve(true), { interval: 1 }).then(() => {});
pWaitFor(() => Promise.resolve(true), { timeout: 1 }).then(() => {});
pWaitFor(() => false).then(() => {});
pWaitFor(() => true, { interval: 1 }).then(() => {});
pWaitFor(() => true, { timeout: 1 }).then(() => {});
