import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    onNotification: (notification) => {
        notification.finish("UIBackgroundFetchResultNoData");
    },
    onRegister: (token) => {},
    senderID: 'XXX',
    permissions: { alert: true, badge: true, sound: true },
    popInitialNotification: false,
    requestPermissions: true,
});

PushNotification.unregister();
PushNotification.localNotification = (details) => {};
PushNotification.localNotificationSchedule = (details) => {};
PushNotification.requestPermissions();
PushNotification.subscribeToTopic("topic");
PushNotification.presentLocalNotification = (details) => {};
PushNotification.scheduleLocalNotification = (details) => {};
PushNotification.cancelLocalNotifications = (details) => {};
PushNotification.cancelAllLocalNotifications();
PushNotification.setApplicationIconBadgeNumber(1);
PushNotification.getApplicationIconBadgeNumber((badgeCount) => {});
PushNotification.popInitialNotification((notification) => {});
PushNotification.checkPermissions((checkPermissions) => {});
PushNotification.abandonPermissions();
PushNotification.registerNotificationActions(['Accept', 'Reject', 'Yes', 'No']);
PushNotification.clearAllNotifications();
