/// <reference types="Push" />
/// <reference path="./cordova-plugin-insomnia.d.ts" />

window.plugins.insomnia.allowSleepAgain(
	() => { console.log("success"); },
	() => { console.log("fail"); }
);
window.plugins.insomnia.keepAwake(
	() => { console.log("success"); },
	() => { console.log("fail"); }
);
