// InAppBrowser plugin
// ----------------------------------------------------------------------

// signature of window.open() added by InAppBrowser plugin
// is similar to native window.open signature, so the compiler can's
// select proper overload, but we cast result to InAppBrowser manually.
const iab = <InAppBrowser> window.open('google.com', '_self');

iab.addEventListener('loadstart', (ev: InAppBrowserEvent) => { console.log('Start opening ' + ev.url); });
iab.addEventListener('loadstart', (ev) => { console.log('loadstart' + ev.url); });
iab.addEventListener('loadstop', (ev) => { console.log('loadstop' + ev.code); });
iab.addEventListener('loaderror', (ev) => { console.log('loaderror' + ev.code); });
iab.addEventListener('exit', (ev) => { console.log('exit' + ev.code); });

function inAppBrowserCallBack(ev: InAppBrowserEvent) {
    console.log('InAppBrowser callback ' + ev.url);
}

iab.addEventListener('loadstart', inAppBrowserCallBack);
iab.addEventListener('loadstart', inAppBrowserCallBack);
iab.addEventListener('loadstop', inAppBrowserCallBack);
iab.addEventListener('loaderror', inAppBrowserCallBack);
iab.addEventListener('exit', inAppBrowserCallBack);

iab.removeEventListener('loadstart', inAppBrowserCallBack);
iab.removeEventListener('loadstop', inAppBrowserCallBack);
iab.removeEventListener('loaderror', inAppBrowserCallBack);
iab.removeEventListener('exit', inAppBrowserCallBack);

iab.show();
iab.executeScript(
    { code: "console.log('Injected script in action')" },
    () => { console.log('Script is executed'); }
);
