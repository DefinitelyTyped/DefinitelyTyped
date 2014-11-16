/// <reference path="es6-promises.d.ts" />

// This is a makeshift definition because the project was renamed to es6-promise
// This file may be deleted at some point. Please use es6-promise package in future projects
// This test simply makes sure that the reference from es6-promises -> es6-promise works fine

// constructor test
var constructResult = new Promise<string>((resolve, reject) => {
	resolve('a string');
});
