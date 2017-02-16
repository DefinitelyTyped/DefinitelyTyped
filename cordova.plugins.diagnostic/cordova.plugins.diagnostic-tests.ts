/// <reference types="cordova-plugin-device" />

cordova.plugins.diagnostic.isLocationAvailable(function(available){
    console.log("Location is " + (available ? "available" : "not available"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isWifiAvailable(function(available){
    console.log("WiFi is " + (available ? "available" : "not available"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isCameraAvailable(function(available){
    console.log("Camera is " + (available ? "available" : "not available"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isBluetoothAvailable(function(available){
    console.log("Bluetooth is " + (available ? "available" : "not available"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.switchToLocationSettings();
cordova.plugins.diagnostic.switchToMobileDataSettings();
cordova.plugins.diagnostic.switchToBluetoothSettings();
cordova.plugins.diagnostic.switchToWifiSettings();

cordova.plugins.diagnostic.isWifiEnabled(function(enabled){
    console.log("WiFi is " + (enabled ? "enabled" : "disabled"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.setWifiState(function(){
        console.log("Wifi was enabled");
    }, function(error){
        console.error("The following error occurred: "+error);
    }, true
);

cordova.plugins.diagnostic.setBluetoothState(function(){
        console.log("Bluetooth was enabled");
    }, function(error){
        console.error("The following error occurred: "+error);
    }, true
);

cordova.plugins.diagnostic.isLocationEnabled(function(enabled){
    console.log("Location setting is " + (enabled ? "enabled" : "disabled"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isLocationAuthorized(function(enabled){
    console.log("Location authorization is " + (enabled ? "enabled" : "disabled"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getLocationAuthorizationStatus(function(status){
    switch(status){
        case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
            console.log("Permission not requested");
            break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED:
            console.log("Permission denied");
            break;
        case cordova.plugins.diagnostic.permissionStatus.GRANTED:
            console.log("Permission granted always");
            break;
        case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
            console.log("Permission granted only when in use");
            break;
    }
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.requestLocationAuthorization(function(status){
    switch(status){
        case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
            console.log("Permission not requested");
            break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED:
            console.log("Permission denied");
            break;
        case cordova.plugins.diagnostic.permissionStatus.GRANTED:
            console.log("Permission granted always");
            break;
        case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
            console.log("Permission granted only when in use");
            break;
    }
}, function(error){
    console.error(error);
}, cordova.plugins.diagnostic.locationAuthorizationMode.ALWAYS);

cordova.plugins.diagnostic.isCameraPresent(function(present){
    console.log("Camera is " + (present ? "present" : "absent"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isCameraAuthorized(function(authorized){
    console.log("App is " + (authorized ? "authorized" : "denied") + " access to the camera");
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getCameraAuthorizationStatus(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
        console.log("Camera use is authorized");
    }
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.requestCameraAuthorization(function(status){
    console.log("Authorization request for camera use was " + (status == cordova.plugins.diagnostic.permissionStatus.GRANTED ? "granted" : "denied"));
}, function(error){
    console.error(error);
});

cordova.plugins.diagnostic.isMicrophoneAuthorized(function(authorized){
    console.log("App is " + (authorized ? "authorized" : "denied") + " access to the microphone");
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getMicrophoneAuthorizationStatus(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
        console.log("Microphone use is authorized");
    }
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.requestMicrophoneAuthorization(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
        console.log("Microphone use is authorized");
    }
}, function(error){
    console.error(error);
});

cordova.plugins.diagnostic.isContactsAuthorized(function(authorized){
    console.log("App is " + (authorized ? "authorized" : "denied") + " access to contacts");
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getContactsAuthorizationStatus(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
        console.log("Contacts use is authorized");
    }
}, function(error){
    console.error(error);
});

cordova.plugins.diagnostic.requestContactsAuthorization(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
        console.log("Contacts use is authorized");
    }
}, function(error){
    console.error(error);
});

cordova.plugins.diagnostic.isCalendarAuthorized(function(authorized){
    console.log("App is " + (authorized ? "authorized" : "denied") + " access to calendar");
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getCalendarAuthorizationStatus(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
        console.log("Calendar use is authorized");
    }
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.requestCalendarAuthorization(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
        console.log("Calendar use is authorized");
    }
}, function(error){
    console.error(error);
});

cordova.plugins.diagnostic.switchToSettings(function(){
    console.log("Successfully switched to Settings app");
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getBluetoothState(function(state){
    if(state === cordova.plugins.diagnostic.bluetoothState.POWERED_ON){
        console.log("Bluetooth is able to connect");
    }
}, function(error){
    console.error(error);
});

cordova.plugins.diagnostic.registerBluetoothStateChangeHandler(function(state){
    if(state === cordova.plugins.diagnostic.bluetoothState.POWERED_ON){
        console.log("Bluetooth is able to connect");
    }
});

cordova.plugins.diagnostic.registerLocationStateChangeHandler(function(state){
    if((device.platform === "Android" && state !== cordova.plugins.diagnostic.locationMode.LOCATION_OFF)
        || (device.platform === "iOS") && ( state === cordova.plugins.diagnostic.permissionStatus.GRANTED
            || state === cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE
        )){
        console.log("Location is available");
    }
});

cordova.plugins.diagnostic.getLocationMode(function(locationMode){
    switch(locationMode){
        case cordova.plugins.diagnostic.locationMode.HIGH_ACCURACY:
            console.log("High accuracy");
            break;
        case cordova.plugins.diagnostic.locationMode.BATTERY_SAVING:
            console.log("Battery saving");
            break;
        case cordova.plugins.diagnostic.locationMode.DEVICE_ONLY:
            console.log("Device only");
            break;
        case cordova.plugins.diagnostic.locationMode.LOCATION_OFF:
            console.log("Location off");
            break;
    }
},function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isGpsLocationAvailable(function(available){
    console.log("GPS location is " + (available ? "available" : "not available"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isGpsLocationEnabled(function(enabled){
    console.log("GPS location is " + (enabled ? "enabled" : "disabled"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isNetworkLocationAvailable(function(available){
    console.log("Network location is " + (available ? "available" : "not available"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isNetworkLocationEnabled(function(enabled){
    console.log("Network location is " + (enabled ? "enabled" : "disabled"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getLocationMode(function(locationMode){
    switch(locationMode){
        case cordova.plugins.diagnostic.locationMode.HIGH_ACCURACY:
            console.log("High accuracy");
            break;
        case cordova.plugins.diagnostic.locationMode.BATTERY_SAVING:
            console.log("Battery saving");
            break;
        case cordova.plugins.diagnostic.locationMode.DEVICE_ONLY:
            console.log("Device only");
            break;
        case cordova.plugins.diagnostic.locationMode.LOCATION_OFF:
            console.log("Location off");
            break;
    }
},function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getPermissionAuthorizationStatus(function(status){
    switch(status){
        case cordova.plugins.diagnostic.permissionStatus.GRANTED:
            console.log("Permission granted to use the camera");
            break;
        case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
            console.log("Permission to use the camera has not been requested yet");
            break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED:
            console.log("Permission denied to use the camera - ask again?");
            break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
            console.log("Permission permanently denied to use the camera - guess we won't be using it then!");
            break;
    }
}, function(error){
    console.error("The following error occurred: "+error);
}, cordova.plugins.diagnostic.permission.CAMERA);

cordova.plugins.diagnostic.getPermissionsAuthorizationStatus(function(statuses){
    for (var permission in statuses){
        switch(statuses[permission]){
            case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                console.log("Permission granted to use "+permission);
                break;
            case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                console.log("Permission to use "+permission+" has not been requested yet");
                break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED:
                console.log("Permission denied to use "+permission+" - ask again?");
                break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                console.log("Permission permanently denied to use "+permission+" - guess we won't be using it then!");
                break;
        }
    }
}, function(error){
    console.error("The following error occurred: "+error);
},[
    cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION,
    cordova.plugins.diagnostic.permission.ACCESS_COARSE_LOCATION
]);

cordova.plugins.diagnostic.requestRuntimePermission(function(status){
    switch(status){
        case cordova.plugins.diagnostic.permissionStatus.GRANTED:
            console.log("Permission granted to use the camera");
            break;
        case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
            console.log("Permission to use the camera has not been requested yet");
            break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED:
            console.log("Permission denied to use the camera - ask again?");
            break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
            console.log("Permission permanently denied to use the camera - guess we won't be using it then!");
            break;
    }
}, function(error){
    console.error("The following error occurred: "+error);
}, cordova.plugins.diagnostic.permission.CAMERA);

cordova.plugins.diagnostic.requestRuntimePermissions(function(statuses){
    for (var permission in statuses){
        switch(statuses[permission]){
            case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                console.log("Permission granted to use "+permission);
                break;
            case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                console.log("Permission to use "+permission+" has not been requested yet");
                break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED:
                console.log("Permission denied to use "+permission+" - ask again?");
                break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                console.log("Permission permanently denied to use "+permission+" - guess we won't be using it then!");
                break;
        }
    }
}, function(error){
    console.error("The following error occurred: "+error);
},[
    cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION,
    cordova.plugins.diagnostic.permission.ACCESS_COARSE_LOCATION
]);

if(!cordova.plugins.diagnostic.isRequestingPermission()){
    console.log("Request some permissions");
}else{
    cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(function(statuses){
        cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(null); // de-register handler after single call
        console.log("Request some permissions");
    });
}

function onPermissionRequestComplete(statuses:any){
    console.info("Permission request complete");
    for (var permission in statuses){
        switch(statuses[permission]){
            case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                console.log("Permission granted to use "+permission);
                break;
            case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                console.log("Permission to use "+permission+" has not been requested yet");
                break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED:
                console.log("Permission denied to use "+permission);
                break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                console.log("Permission permanently denied to use "+permission);
                break;
        }
    }
    cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(null); // de-register handler
}
cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(onPermissionRequestComplete)

cordova.plugins.diagnostic.isBluetoothEnabled(function(enabled){
    console.log("Bluetooth is " + (enabled ? "enabled" : "disabled"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.hasBluetoothSupport(function(supported){
    console.log("Bluetooth is " + (supported ? "supported" : "unsupported"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.hasBluetoothLESupport(function(supported){
    console.log("Bluetooth LE is " + (supported ? "supported" : "unsupported"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.hasBluetoothLEPeripheralSupport(function(supported){
    console.log("Bluetooth LE Peripheral Mode is " + (supported ? "supported" : "unsupported"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isCameraRollAuthorized(function(authorized){
    console.log("App is " + (authorized ? "authorized" : "denied") + " access to the camera roll");
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getCameraRollAuthorizationStatus(function(status){
    switch(status){
        case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
            console.log("Permission not requested");
            break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED:
            console.log("Permission denied");
            break;
        case cordova.plugins.diagnostic.permissionStatus.GRANTED:
            console.log("Permission granted");
            break;
    }
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.requestCameraRollAuthorization(function(status){
    console.log("Authorization request for camera roll was " + (status == cordova.plugins.diagnostic.permissionStatus.GRANTED ? "granted" : "denied"));
}, function(error){
    console.error(error);
});

cordova.plugins.diagnostic.isRemoteNotificationsEnabled(function(enabled){
    console.log("Remote notifications are " + (enabled ? "enabled" : "disabled"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isRegisteredForRemoteNotifications(function(registered){
    console.log("Device " + (registered ? "is" : "isn't") + " registered for remote notifications");
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getRemoteNotificationTypes(function(types){
    for(var type in types){
        console.log(type + " is " + (types[type] ? "enabled" : "disabled"));
    }
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isRemindersAuthorized(function(authorized){
    console.log("App is " + (authorized ? "authorized" : "denied") + " access to reminders");
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getRemindersAuthorizationStatus(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
        console.log("Reminders authorization allowed");
    }
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.requestRemindersAuthorization(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
        console.log("Reminders authorization allowed");
    }
}, function(error){
    console.error(error);
});

cordova.plugins.diagnostic.isBackgroundRefreshAuthorized(function(authorized){
    console.log("App is " + (authorized ? "authorized" : "not authorized") + " to perform background refresh");
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getBackgroundRefreshStatus(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
        console.log("Background refresh is allowed");
    }
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.requestBluetoothAuthorization(function(){
    console.log("Bluetooth authorization requested");
}, function(error){
    console.error(error);
});

cordova.plugins.diagnostic.isMotionAvailable(function(available){
    console.log("Motion tracking is " + (available ? "available" : "not available") + " on this device");
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isMotionRequestOutcomeAvailable(function(available){
    console.log("Motion tracking request outcome is " + (available ? "available" : "not available") + " on this device");
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.requestAndCheckMotionAuthorization(function(status){
    console.log("Motion authorization is " +status);
}, function(error){
    console.error(error);
});

cordova.plugins.diagnostic.isExternalStorageAuthorized(function(authorized){
    console.log("Location authorization is " + (authorized ? "authorized" : "unauthorized"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.getExternalStorageAuthorizationStatus(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
        console.log("External storage authorization allowed");
    }
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.requestExternalStorageAuthorization(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
        console.log("External storage authorization allowed");
    }
}, function(error){
    console.error(error);
});

cordova.plugins.diagnostic.getExternalSdCardDetails(function(details){
    console.log("External SD card details: " + JSON.stringify(details));
}, function(error){
    console.error(error);
});

cordova.plugins.diagnostic.isNFCPresent(function(present){
    console.log("NFC hardware is " + (present ? "present" : "absent"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isNFCEnabled(function(enabled){
    console.log("NFC is " + (enabled ? "enabled" : "disabled"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.isNFCAvailable(function(available){
    console.log("NFC is " + (available ? "available" : "not available"));
}, function(error){
    console.error("The following error occurred: "+error);
});

cordova.plugins.diagnostic.registerNFCStateChangeHandler(function(state){
    if(state === cordova.plugins.diagnostic.NFCState.POWERED_ON){
        console.log("NFC is ready to use");
    }
});