// https://github.com/alykoshin/nssm/blob/master/examples/promise_chain.js

import nssm from 'nssm'

const svcName = 'test';
const options = { nssmExe: 'nssm.exe' };
const testService = nssm(svcName, options);

const propertyName = 'Start';

let console: {
    log: (...message: any[]) => void
};

testService.set('start', 'manual')
  .then(function(stdout) {
    console.log('\n*** Parameter set ok');
    console.log('stdout: \'' + stdout + '\'');
    return testService.get('start')
  })
  .then(function(stdout) {
    console.log('\n*** Parameter retrieved ok');
    console.log('stdout: \'' + stdout + '\'');
    return testService.start()
  })
  .then(function(stdout) {
    console.log('\n*** Service started ok');
    console.log('stdout: \'' + stdout + '\'');
    return testService.stop()
  })
  .then(function(stdout) {
    console.log('\n*** Service stopped ok');
    console.log('stdout: \'' + stdout + '\'');
    console.log('DONE');
  })
  .catch(function(error) {
    console.log('\n*** catch(): error:', error);
    console.log('ERROR:', error);
  })
  ;

// https://github.com/alykoshin/nssm/blob/master/examples/get_callback.js

testService.get(propertyName, function(error, result) {
    if (error) {
        console.log('error:', error, ' stderr:', result);
        return;
    }
    console.log('stdout: \'' + result + '\'');
});
