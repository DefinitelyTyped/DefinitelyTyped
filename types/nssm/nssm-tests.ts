// https://github.com/alykoshin/nssm/blob/master/examples/promise_chain.js

import nssm = require('nssm');

const svcName = 'test';
const options: nssm.NssmOptions = { nssmExe: 'nssm.exe' };
const testService = nssm(svcName, options);

const propertyName = 'Start';

const console: { log: (...message: any[]) => void } = { log: (...args) => void (args) };

testService.set('start', 'manual')
    .then((stdout) => {
        console.log(`stdout: ${stdout}`);
        return testService.get('start');
    })
    .then((stdout) => {
        console.log(`stdout: ${stdout}`);
        return testService.start();
    })
    .then((stdout) => {
        console.log(`stdout: ${stdout}`);
        return testService.stop();
    })
    .then((stdout) => {
        console.log(`stdout: ${stdout}`);
    })
    .catch((error, stdout) => {
        console.log(`error: ${error}, stdout: ${stdout}`);
    })
;

// https://github.com/alykoshin/nssm/blob/master/examples/get_callback.js

testService.get(propertyName, (error, stdout) => {
    if (error) {
        console.log('error:', error, ' stderr:', stdout);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
