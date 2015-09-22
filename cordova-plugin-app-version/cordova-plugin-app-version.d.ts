// Type definitions for cordova-plugin-app-version v0.1.7
// Project: https://github.com/whiteoctober/cordova-plugin-app-version
// Definitions by: Markus Wagner <https://github.com/Ritzlgrmft/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../q/Q.d.ts" />

interface Cordova {
    getAppVersion: {
		getAppName: () => Q.IPromise<string>;
		getPackageName: () => Q.IPromise<string>;
		getVersionCode: () => Q.IPromise<string>;
		getVersionNumber: () => Q.IPromise<string>;
	};
}