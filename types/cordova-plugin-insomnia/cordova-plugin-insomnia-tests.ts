window.plugins.insomnia.allowSleepAgain(
	() => { console.log("success"); },
	() => { console.log("fail"); }
);
window.plugins.insomnia.keepAwake(
	() => { console.log("success"); },
	() => { console.log("fail"); }
);
