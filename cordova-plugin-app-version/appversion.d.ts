interface Cordova {
    getAppVersion: {
		getAppName: () => ng.IPromise<string>;
		getPackageName: () => ng.IPromise<string>;
		getVersionCode: () => ng.IPromise<string>;
		getVersionNumber: () => ng.IPromise<string>;
	};
}