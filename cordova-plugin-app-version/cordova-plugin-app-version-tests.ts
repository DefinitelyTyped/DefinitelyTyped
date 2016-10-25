/// <reference path="../cordova/cordova.d.ts" />
/// <reference path="./cordova-plugin-app-version.d.ts" />

cordova.getAppVersion.getAppName()
	.then(appName=> {
		console.log(appName)
	});
cordova.getAppVersion.getPackageName()
	.then(packageName=> {
		console.log(packageName);
	});
cordova.getAppVersion.getVersionCode()
	.then(versionCode=> {
		console.log(versionCode);
	});
cordova.getAppVersion.getVersionNumber()
	.then(versionNumber=> {
		console.log(versionNumber);
	});