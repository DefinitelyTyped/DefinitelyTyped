/// <reference path='../cordova/cordova.d.ts'  />
/// <reference path='./de.appplant.cordova.plugin.local-notification.d.ts' />

cordova.plugins.notification.local.schedule({
    id: 1,
    text: "Single Notification",
});
cordova.plugins.notification.local.schedule([{
    id: 1,
    text: "Multi Notification 1",
},{
    id: 2,
    title: "Local Notification Example",
}]);

cordova.plugins.notification.local.on("schedule", (notification) => {});

cordova.plugins.notification.local.update({
    id: 1,
    title: "Updated Notification"
});
cordova.plugins.notification.local.update([{
    id: 1,
    title: "Updated Notification 1"
},{
    id: 2,
    title: "Updated Notification 2"
}]);

cordova.plugins.notification.local.clear(1, () => {});
cordova.plugins.notification.local.clear([1, 2], () => {});
cordova.plugins.notification.local.clearAll(() => {}, this);

cordova.plugins.notification.local.cancel(1, () => {});
cordova.plugins.notification.local.cancel([1, 2], () => {});
cordova.plugins.notification.local.cancelAll(() => {}, this);

cordova.plugins.notification.local.isPresent(1, (present: boolean) => {});
cordova.plugins.notification.local.isScheduled(1, (present: boolean) => {});
cordova.plugins.notification.local.isTriggered(1, (present: boolean) => {});

cordova.plugins.notification.local.get(1, (notifications: CordovaPluginLocalNotification.NotificationData) => {});
cordova.plugins.notification.local.get([1, 2], (notifications: Array<CordovaPluginLocalNotification.NotificationData>) => {});
cordova.plugins.notification.local.getAll((notifications: Array<CordovaPluginLocalNotification.NotificationData>) => {});
cordova.plugins.notification.local.getScheduled(1, (notifications: CordovaPluginLocalNotification.NotificationData) => {});
cordova.plugins.notification.local.getTriggered(1, (notifications: CordovaPluginLocalNotification.NotificationData) => {});