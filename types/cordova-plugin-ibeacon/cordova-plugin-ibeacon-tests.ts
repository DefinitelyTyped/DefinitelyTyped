/// <reference types="cordova" />


function registerDelegates() {
	cordova.plugins.locationManager.enableDebugLogs();

	cordova.plugins.locationManager.delegate.didRangeBeaconsInRegion = (pluginResult) => didRangeBeaconsInRegion(pluginResult);
	cordova.plugins.locationManager.delegate.didEnterRegion = (pluginResult) => didEnterRegion(pluginResult);
	cordova.plugins.locationManager.delegate.didExitRegion = (pluginResult) => didExitRegion(pluginResult);
	cordova.plugins.locationManager.delegate.didDetermineStateForRegion = (pluginResult) => didDetermineStateForRegion(pluginResult);
	cordova.plugins.locationManager.delegate.didChangeAuthorizationStatus = (authorizationStatus) => didChangeAuthorizationStatus(authorizationStatus);
	cordova.plugins.locationManager.delegate.didStartMonitoringForRegion = (pluginResult) => didStartMonitoringForRegion(pluginResult);
	cordova.plugins.locationManager.delegate.monitoringDidFailForRegionWithError = (pluginResult) => monitoringDidFailForRegionWithError(pluginResult);

	cordova.plugins.locationManager.onDomDelegateReady();
}

function didRangeBeaconsInRegion(pluginResult: BeaconPlugin.PluginResult): void {
	for (var beacon of pluginResult.beacons) {
		console.log(beacon.uuid, beacon.major, beacon.minor, beacon.accuracy, beacon.proximity, beacon.rssi, beacon.tx);
	}
}

function didEnterRegion(pluginResult: BeaconPlugin.PluginResult): void {
	var region: BeaconPlugin.Region = new cordova.plugins.locationManager.BeaconRegion("identifier", "uuid", 1, 2);;
	cordova.plugins.locationManager.startRangingBeaconsInRegion(this.createBeaconRegionFromPluginResult(pluginResult))
		.then(() => {
			console.log("startRangingBeaconsInRegion succeeded");
		})
		.catch((reason: any) => {
			console.error("startRangingBeaconsInRegion failed: " + reason);
		});
}

function didExitRegion(pluginResult: BeaconPlugin.PluginResult): void {
	var region: BeaconPlugin.Region;
	cordova.plugins.locationManager.stopRangingBeaconsInRegion(region)
		.then(() => {
			console.log("stopRangingBeaconsInRegion succeeded");
		})
		.catch((reason: any) => {
			console.error("stopRangingBeaconsInRegion failed: " + reason);
		});
}

function didDetermineStateForRegion(pluginResult: BeaconPlugin.PluginResult): void {
	if (pluginResult.state === "CLRegionStateInside") {
		console.log(pluginResult.region.identifier);
	}
}

function didChangeAuthorizationStatus(authorizationStatus: string): void {
	console.log(authorizationStatus);
}

function didStartMonitoringForRegion(pluginResult: BeaconPlugin.PluginResult): void {
	console.log(pluginResult.region.identifier);
}

function monitoringDidFailForRegionWithError(pluginResult: BeaconPlugin.PluginResult): void {
	console.log(pluginResult.region.identifier);
}