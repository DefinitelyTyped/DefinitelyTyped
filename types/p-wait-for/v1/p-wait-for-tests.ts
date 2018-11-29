import pWaitFor = require('p-wait-for');

pWaitFor(() => Promise.resolve(false)).then(() => {});
pWaitFor(() => Promise.resolve(true), 1).then(() => {});
pWaitFor(() => false).then(() => {});
pWaitFor(() => true, 1).then(() => {});
