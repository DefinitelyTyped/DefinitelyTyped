const webApp = window.Telegram.WebApp;

webApp.expand();
webApp.ready();

webApp.onEvent("accelerometerChanged", () => {
    console.log("accelerometerChanged");
});

webApp.onEvent("accelerometerFailed", () => {
    console.log("accelerometerFailed");
});

webApp.onEvent("accelerometerStopped", () => {
    console.log("accelerometerStopped");
});

webApp.onEvent("accelerometerStarted", () => {
    console.log("accelerometerStarted");
});

if (webApp.isVersionAtLeast("8.0")) {
    webApp.Accelerometer.start({ refresh_rate: 1_000 }, (success: boolean) => {
        console.log(`Is Accelerometer started? - ${success}`);
    });
}

if (!webApp.BiometricManager.isInited) {
    webApp.BiometricManager.init(() => {
        console.log("Biometric Manager inited");
    });
} else if (webApp.BiometricManager.isBiometricAvailable) {
    if (!webApp.BiometricManager.isAccessRequested) {
        webApp.BiometricManager.requestAccess({ reason: "Please, give me access" }, (success: boolean) => {
            console.log(`Is access of mine? - ${success}}`);
        });
    } else if (!webApp.BiometricManager.isAccessGranted) {
        webApp.BiometricManager.openSettings();
    } else {
        webApp.BiometricManager.authenticate({ reason: "Please, authenticate" }, (success: boolean, token?: string) => {
            console.log(`Is authenticated? - ${success}, newToken - ${token} `);
        });
    }
}

webApp.CloudStorage.getItems(["token", "login", "password", "money"] as const, (error: string | null, values) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`All values - ${values}`);
    }
});

webApp.HapticFeedback.impactOccurred("rigid");

webApp.MainButton.show().onClick(() => {
    if (!webApp.isFullscreen) {
        webApp.requestFullscreen();
    } else {
        webApp.exitFullscreen();
    }
});

webApp.BackButton.show().onClick(() => {
    console.log("click");
});

webApp.SecondaryButton.show()
    .setParams({
        position: "left",
        text: "Push me now",
    })
    .onClick(() => {
        webApp.checkHomeScreenStatus((status) => {
            if (status === "missed") {
                webApp.addToHomeScreen();
            }
        });
    });

if (webApp.initDataUnsafe.user?.photo_url) {
    webApp.downloadFile({ file_name: "tg-avatar", url: webApp.initDataUnsafe.user.photo_url }, (success: boolean) => {
        console.log(`Is avatar downloaded? - ${success}`);
    });
}

if (!webApp.LocationManager.isInited) {
    webApp.LocationManager.init(() => {
        console.log("location manager inited");
    });
} else if (webApp.LocationManager.isLocationAvailable && webApp.LocationManager.isAccessRequested) {
    if (!webApp.LocationManager.isAccessGranted) {
        webApp.LocationManager.openSettings();
    } else {
        webApp.LocationManager.getLocation((locationData) => {
            if (locationData === null) {
                console.log("there is not locationData");
            } else {
                console.log(locationData);
            }
        });
    }
}

webApp.close();
