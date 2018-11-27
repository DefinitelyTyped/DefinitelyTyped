import OneSignal, { Permissions } from 'react-native-onesignal';

OneSignal.init('123');
OneSignal.sendTag('key1', 'value1');
OneSignal.sendTags({ key1: 'value1', key2: 'value2' });
OneSignal.getTags((receivedTags) => ({}));
OneSignal.getPermissionSubscriptionState((status) => ({}));
OneSignal.deleteTag('key1');
OneSignal.setEmail('user@email.com', 'emailAuthCode', (err) => ({}));
OneSignal.setEmail('user@email.com', (err) => ({}));
OneSignal.enableVibrate(true);
OneSignal.enableSound(true);
OneSignal.setSubscription(true);
OneSignal.promptLocation();
OneSignal.clearOneSignalNotifications();
OneSignal.setLocationShared(true);
OneSignal.inFocusDisplaying(1);
OneSignal.postNotification(
    { en: 'English Message', tr: 'Türkçe Mesaj' },
    ['data'],
    'playerId'
);
OneSignal.cancelNotification('notificationId');
OneSignal.checkPermissions((permissions: Permissions) => ({}));
OneSignal.requestPermissions({ alert: true, badge: true, sound: false });
OneSignal.registerForPushNotifications();
OneSignal.setRequiresUserPrivacyConsent(true);
OneSignal.provideUserConsent(true);
OneSignal.setLogLevel(4, 2);
OneSignal.addEventListener('received', () => {});
OneSignal.removeEventListener('received', () => {});
