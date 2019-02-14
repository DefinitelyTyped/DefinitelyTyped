import Nssm from 'nssm'


//  Examples from the https://github.com/alykoshin/nssm
var nssm = Nssm('AeLookupSvc', { nssmExe: 'nssm.exe' });

nssm.set('Start', 'manual', function(error, result) {
  if (error) {
    console.log('*** error:', error, ' stderr:', result);
    return;
  }
  console.log('*** stdout: \'' + result + '\'');
});


var svcName = 'AeLookupSvc';
var options = { nssmExe: 'nssm.exe' }; // default
var nssm = Nssm(svcName, options);

var propertyName = 'Start';

nssm.get(propertyName)
  .then(function(stdout) {
    console.log('then(): stdout: \'' + stdout + '\'');
  })
  .catch(function(error) {
    console.log('catch(): error:', error);
  })
  ;


nssm.set('start', 'manual')
  .then(function(stdout) {
    return nssm.get('start')
  })
  .then(function(stdout) {
    return nssm.start()
  })
  .then(function(stdout) {
    return nssm.stop()
  })
  .then(function(stdout) {
    console.log('DONE');
  })
  .catch(function(error, stderr) {
    console.log('ERROR:', error);
  })
  ;

var svcName = 'AeLookupSvc';
var options = { nssmExe: 'nssm.exe' }; // default
var nssm = Nssm(svcName, options);

nssm.restart(function(error, result) {
  if (error) {
    console.log('*** error:', error, ' stderr:', result);
    return;
  }
  console.log('*** stdout: \'' + result + '\'');
});


var svcName = 'AeLookupSvc';
var options = { nssmExe: 'nssm.exe' }; // default
var nssm = Nssm(svcName, options);

nssm.get('Start', function(error, result) {
  if (error) {
    console.log('*** error:', error, ' stderr:', result);
    return;
  }
  console.log('*** stdout: \'' + result + '\'');
});


var svcName = 'test';
var options = { nssmExe: 'nssm.exe' }; // default
var nssm = Nssm(svcName, options);

nssm.set('Start', 'manual', function(error, result) {
  if (error) {
    console.log('*** error:', error, ' stderr:', result);
    return;
  }
  console.log('*** stdout: \'' + result + '\'');
});