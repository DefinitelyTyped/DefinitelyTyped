browser.nonexistentNS; // $ExpectError
browser.nonexistentNS.unknownMethod(); // $ExpectError

// Test that out overwritten things at least worked
browser.runtime.getManifest(); // $ExpectType WebExtensionManifest
browser.test; // $ExpectError
browser.manifest; // $ExpectError
browser._manifest; // $ExpectError

// browser.runtime
const port = browser.runtime.connect();
port.postMessage(); // $ExpectError

browser.bookmarks.getTree();
