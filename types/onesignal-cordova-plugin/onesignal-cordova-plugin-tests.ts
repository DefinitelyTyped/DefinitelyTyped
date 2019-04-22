window.plugins.OneSignal
    .startInit("YOUR_APPID")
    .handleNotificationReceived((jsonData) => {
        console.log("Notification received:\n" + JSON.stringify(jsonData));
    })
    .handleNotificationOpened((jsonData) => {
        console.log("Notification opened:\n" + JSON.stringify(jsonData));
    })
    .inFocusDisplaying(OneSignalCordovaPlugin.OSDisplayType.Notification)
    .iOSSettings({
        kOSSettingsKeyAutoPrompt: true,
        kOSSettingsKeyInAppLaunchURL: false,
    })
    .endInit();

window.plugins.OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
    console.log("User accepted notifications: " + accepted);
});

window.plugins.OneSignal.addPermissionObserver((state) => {
    console.log("Notification permission state changed: " + JSON.stringify(state));
});

window.plugins.OneSignal.addSubscriptionObserver((state) => {
    if (!state.subscribed) {
        console.log("Subscribed for OneSignal push notifications!");
    }
    console.log("Push Subscription state changed: " + JSON.stringify(state));
});

window.plugins.OneSignal.getTags((tags) => {
    console.log('Tags Received: ' + JSON.stringify(tags));
});

window.plugins.OneSignal.sendTag("key", "value");

window.plugins.OneSignal.deleteTag("key");

window.plugins.OneSignal.sendTags({ key1: "value", key2: "value2" });

window.plugins.OneSignal.deleteTags(["key1", "key2"]);

window.plugins.OneSignal.promptLocation();

window.plugins.OneSignal.syncHashedEmail("John.Smith@example.com");

window.plugins.OneSignal.getIds((ids) => {
    const notificationObj = {
        contents: { en: "message body" },
        include_player_ids: [ids.userId]
    };
    window.plugins.OneSignal.postNotification(notificationObj,
        (successResponse) => {
            console.log("Notification Post Success:", successResponse);
        },
        (failedResponse) => {
            console.log("Notification Post Failed: ", failedResponse);
        }
    );
});

window.plugins.OneSignal.clearOneSignalNotifications();

window.plugins.OneSignal.setSubscription(false);

window.plugins.OneSignal.enableVibrate(false);

window.plugins.OneSignal.enableSound(false);

window.plugins.OneSignal.setLogLevel({ logLevel: 4, visualLevel: 4 });
