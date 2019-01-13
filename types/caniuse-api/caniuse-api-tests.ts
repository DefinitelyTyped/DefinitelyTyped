import * as caniuse from "caniuse-api";

caniuse.features; // $ExpectType string[]

caniuse.getSupport(""); // $ExpectType BrowserSupport

caniuse.isSupported("", ""); // $ExpectType boolean
caniuse.isSupported("", [""]); // $ExpectType boolean

caniuse.find(""); // $ExpectType string[]

caniuse.getLatestStableBrowsers(); // $ExpectType string[]

caniuse.setBrowserScope(""); // $ExpectType void
caniuse.setBrowserScope([""]); // $ExpectType void

caniuse.getBrowserScope(); // $ExpectType string[]
