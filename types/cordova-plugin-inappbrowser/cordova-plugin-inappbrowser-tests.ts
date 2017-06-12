/// <reference path="../cordova-plugin-battery-status/index.d.ts" />
// InAppBrowser plugin
//----------------------------------------------------------------------

// signature of window.open() added by InAppBrowser plugin
// is similar to native window.open signature, so the compiler can's
// select proper overload, but we cast result to InAppBrowser manually.
var iab = <InAppBrowser>window.open('google.com', '_self');
iab.addEventListener('loadstart', (ev) => { console.log('loadstart' + ev.url); });
iab.addEventListener('loadstop', (ev) => { console.log('loadstop' + ev.code); });
iab.addEventListener('loaderror', (ev) => { console.log('loaderror' + ev.code); });
iab.addEventListener('exit', (ev) => { console.log('exit' + ev.code); });

iab.removeEventListener('loadstart', (ev) => { console.log('Remove loadstart' + ev.url); });
iab.removeEventListener('loadstop', (ev) => { console.log('Remove loadstop ' + ev.code); });
iab.removeEventListener('loaderror', (ev) => { console.log('Remove loaderror ' + ev.code); });
iab.removeEventListener('exit', (ev) => { console.log('Remove exit ' + ev.code); });
iab.show();
iab.executeScript(
    { code: "console.log('Injected script in action')" },
    ()=> { console.log('Script is executed'); }
);