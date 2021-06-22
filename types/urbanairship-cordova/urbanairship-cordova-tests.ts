

//#region Basic Example taken from http://docs.urbanairship.com/platform/phonegap.html#actions

// Register for any Urban Airship events
document.addEventListener("urbanairship.registration", function (event: UrbanAirshipPlugin.RegistrationEvent) {
    if (event.error) {
        console.log("There was an error registering for push notifications");
    } else {
        console.log("Registered with channel ID: " + event.channelID);
        console.log("Registered with device token: " + event.deviceToken);
    }
});

document.addEventListener("urbanairship.push", function (event: UrbanAirshipPlugin.PushEvent) {
    console.log("Incoming push: " + event.message);
});

// Set tags on a device, that you can push to
UAirship.setTags(["loves_cats", "shops_for_games"], function () {
    UAirship.getTags(function (tags: string[]) {
        tags.forEach(function (tag: string) {
            console.log("Tag: " + tag);
        });
    });
});

// Set an alias, this lets you tie a device to a user in your system
UAirship.setAlias("awesomeuser22", function () {
    UAirship.getAlias(function (alias: string) {
        console.log("The user formerly known as " + alias);
    });
});

// Enable user notifications (will prompt the user to accept push notifications)
UAirship.setUserNotificationsEnabled(true, function (status: string) {
    console.log("User notifications are enabled! Fire away!");
});

//#endregion

//#region Method signatures and parameter types

UAirship.setUserNotificationsEnabled(true, (status: string) => {});
UAirship.isUserNotificationsEnabled((enabled: boolean) => {});
UAirship.getChannelID((id: string) => {});

UAirship.getLaunchNotification(true, (push: UrbanAirshipPlugin.PushEvent) => {
    var message: string = push.message;
    var extras: { [key: string]: any; } = push.extras;
});

UAirship.setQuietTimeEnabled(true, () => {});
UAirship.isQuietTimeEnabled((enabled: boolean) => {});
UAirship.setQuietTime(1, 1, 1, 1, () => {});
UAirship.getQuietTime((quietTime: UrbanAirshipPlugin.QuietTimeTimeSpan) => {});
UAirship.isInQuietTime((inQuietTime: boolean) => {});

UAirship.setNotificationTypes(UAirship.notificationType.sound, () => {});
UAirship.setNotificationTypes(UAirship.notificationType.alert, () => {});
UAirship.setNotificationTypes(UAirship.notificationType.badge, () => {});
UAirship.setNotificationTypes(UAirship.notificationType.sound | UAirship.notificationType.badge, () => {});

UAirship.setAutobadgeEnabled(true, () => {});
UAirship.setBadgeNumber(1, () => {});
UAirship.getBadgeNumber((badgeNumber: number) => {});
UAirship.resetBadge(() => {});
UAirship.clearNotifications(() => {});
UAirship.setSoundEnabled(true, () => {});
UAirship.isSoundEnabled((enabled: boolean) => { var isEnabled: boolean = enabled; });
UAirship.setVibrateEnabled(true, () => {});
UAirship.isVibrateEnabled((enabled: boolean) => { var isEnabled: boolean = enabled; });
UAirship.setTags(["a", "b", "c"], () => {});
UAirship.getTags((tags: string[]) => { var results: string[] = tags; });
UAirship.setAlias("a", () => {});
UAirship.getAlias((alias: string) => { var result: string = alias; })
UAirship.setNamedUser("a", () => {});
UAirship.getNamedUser((namedUserId: string) => { var result: string = namedUserId; });

UAirship.editNamedUserTagGroups()
        .addTags("loyalty", ["platinum-member", "gold-member"])
        .removeTags("loyalty", ["silver-member", "bronze-member"])
        .apply();

UAirship.editChannelTagGroups()
        .addTags("loyalty", ["platinum-member", "gold-member"])
        .removeTags("loyalty", ["silver-member", "bronze-member"])
        .apply();

UAirship.setAnalyticsEnabled(true, () => {});
UAirship.isAnalyticsEnabled((enabled: boolean) => { var result: boolean = enabled; });

UAirship.runAction("a", "b", (result: UrbanAirshipPlugin.RunActionResult) => {
    var error: string = result.error;
    var value: any = result.value;
});

UAirship.setLocationEnabled(true, () => {});
UAirship.isLocationEnabled((enabled: boolean) => { var result: boolean = enabled; });
UAirship.setBackgroundLocationEnabled(true, () => {});
UAirship.isBackgroundLocationEnabled(() => {});
UAirship.recordCurrentLocation(() => {});

//#endregion
