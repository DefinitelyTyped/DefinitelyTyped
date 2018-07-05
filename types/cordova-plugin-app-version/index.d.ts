// Type definitions for cordova-plugin-app-version v0.1.7
// Project: https://github.com/whiteoctober/cordova-plugin-app-version
// Definitions by: Markus Wagner <https://github.com/Ritzlgrmft>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Cordova {
	getAppVersion: {
		getAppName: () => Promise<string>;
		getPackageName: () => Promise<string>;
		getVersionCode: () => Promise<string>;
		getVersionNumber: () => Promise<string>;
	};
}
