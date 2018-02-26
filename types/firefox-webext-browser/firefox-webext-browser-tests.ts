browser.nonexistentNS; // $ExpectError
browser.nonexistentNS.unknownMethod(); // $ExpectError

// Test that out overwritten things at least worked
browser.runtime.getManifest(); // $ExpectType WebExtensionManifest
browser.test; // $ExpectError
browser.manifest; // $ExpectError
browser._manifest; // $ExpectType typeof _manifest
browser._manifest.WebExtensionLangpackManifest; // $ExpectError
browser._manifest.NativeManifest; // $ExpectError
