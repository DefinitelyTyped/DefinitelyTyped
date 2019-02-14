import Nssm = require('nssm');

//  Examples from the https://github.com/alykoshin/nssm
let nssm = Nssm('AeLookupSvc', { nssmExe: 'nssm.exe' });

nssm.set('Start', 'manual', (error, result) => {
  if (error) {
    return;
  }
});

let svcName;
let options; // default

svcName = 'AeLookupSvc';
options = { nssmExe: 'nssm.exe' }; // default
nssm = Nssm(svcName, options);

const propertyName = 'Start';

nssm.get(propertyName)
  .then((stdout) => {
  })
  .catch((error) => {
  });

nssm.set('start', 'manual')
  .then((stdout) => {
    return nssm.get('start');
  })
  .then((stdout) => {
    return nssm.start();
  })
  .then((stdout) => {
    return nssm.stop();
  })
  .then((stdout) => {
  })
  .catch((error, stderr) => {
  });

 svcName = 'AeLookupSvc';
 options = { nssmExe: 'nssm.exe' }; // default
 nssm = Nssm(svcName, options);

nssm.restart((error, result) => {
  if (error) {
    return;
  }
});

 svcName = 'AeLookupSvc';
 options = { nssmExe: 'nssm.exe' }; // default
 nssm = Nssm(svcName, options);

nssm.get('Start', (error, result) => {
  if (error) {
    return;
  }
});

svcName = 'test';
options = { nssmExe: 'nssm.exe' }; // default
nssm = Nssm(svcName, options);

nssm.set('Start', 'manual', (error, result) => {
  if (error) {
    return;
  }
});
