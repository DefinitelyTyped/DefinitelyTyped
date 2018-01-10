import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    onNotification: (notification) => {},
    onRegister: (token) => {},
    senderID: 'XXX',
    popInitialNotification: false,
    requestPermissions: true,
});

PushNotification.unregister();
PushNotification.localNotification = (details) => {};
PushNotification.localNotificationSchedule = (details) => {};
PushNotification.requestPermissions();
PushNotification.presentLocalNotification = (details) => {};
PushNotification.scheduleLocalNotification = (details) => {};
PushNotification.cancelLocalNotifications = (details) => {};
PushNotification.cancelAllLocalNotifications();
PushNotification.setApplicationIconBadgeNumber(1);
PushNotification.getApplicationIconBadgeNumber((badgeCount) => {});
PushNotification.popInitialNotification();
PushNotification.checkPermissions((checkPermissions) => {});
PushNotification.abandonPermissions();
PushNotification.registerNotificationActions(['Accept', 'Reject', 'Yes', 'No']);
PushNotification.clearAllNotifications();
