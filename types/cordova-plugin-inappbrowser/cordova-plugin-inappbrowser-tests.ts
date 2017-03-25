// InAppBrowser plugin
//----------------------------------------------------------------------

// signature of window.open() added by InAppBrowser plugin
// is similar to native window.open signature, so the compiler can's
// select proper overload, but we cast result to InAppBrowser manually.
var iab = <InAppBrowser>window.open('google.com', '_self');
iab.addEventListener('loadstart', (ev: InAppBrowserEvent) => { console.log('Start opening ' + ev.url); });
iab.show();
iab.executeScript(
    { code: "console.log('Injected script in action')" },
    ()=> { console.log('Script is executed'); }
);