import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    onNotification: (notification) => {
        notification.finish("UIBackgroundFetchResultNoData");
    },
    onRegister: (token) => {},
    onAction: (notification) => {},
    onRegistrationError: (err) => {},
    onRemoteFetch: (notificationData) => {},
    permissions: { alert: true, badge: true, sound: true },
    popInitialNotification: false,
    requestPermissions: true,
});

PushNotification.unregister();
PushNotification.localNotification({ message: '' });
PushNotification.localNotificationSchedule({ date: new Date(), message: '' });
PushNotification.requestPermissions();
PushNotification.subscribeToTopic("topic");
PushNotification.presentLocalNotification({ message: '' });
PushNotification.scheduleLocalNotification({ date: new Date(), message: '' });
PushNotification.cancelLocalNotifications({ id: '123' });
PushNotification.cancelAllLocalNotifications();
PushNotification.setApplicationIconBadgeNumber(1);
PushNotification.getApplicationIconBadgeNumber((badgeCount) => {});
PushNotification.popInitialNotification((notification) => {});
PushNotification.checkPermissions((checkPermissions) => {});
PushNotification.abandonPermissions();
PushNotification.clearAllNotifications();
PushNotification.removeAllDeliveredNotifications();
PushNotification.getDeliveredNotifications((notifications) => {});
PushNotification.getScheduledLocalNotifications((notifications) => {});
PushNotification.removeDeliveredNotifications(['id']);
PushNotification.invokeApp({ message: '' });
PushNotification.getChannels((channels) => {});
PushNotification.channelExists('chanel_id', (exists) => {});
PushNotification.createChannel({ channelId: 'id', channelName: 'name' }, (created) => {});
PushNotification.channelBlocked('chanel_id', (blocked) => {});
PushNotification.deleteChannel('id');
