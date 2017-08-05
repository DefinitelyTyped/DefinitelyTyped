import JPush from 'jpush-react-native';

JPush.initPush();

JPush.stopPush();

JPush.resumePush();

JPush.notifyJSDidLoad(() => {});

JPush.clearAllNotifications();

JPush.clearNotificationById('id');

JPush.getInfo((map) => {});

JPush.getConnectionState(() => {});

JPush.setTags(
    ['tag1', 'tag2'],
    () => {},
);

JPush.addTags(
    ['tag1', 'tag2'],
    () => {},
);

JPush.deleteTags(
    ['tag1', 'tag2'],
    () => {},
);

JPush.cleanTags(() => {});

JPush.getAllTags(() => {});

JPush.checkTagBindState('tag', () => {});

JPush.setAlias('alias', () => {});

JPush.deleteAlias(() => {});

JPush.getAlias(() => {});

JPush.setStyleBasic();

JPush.setStyleCustom();

JPush.jumpToPushActivity('activityName');

JPush.finishActivity();

JPush.addReceiveCustomMsgListener(() => {});

JPush.removeReceiveCustomMsgListener(() => {});

JPush.addOpenNotificationLaunchAppListener(() => {});

JPush.removeOpenNotificationLaunchAppEventListener(() => {});

JPush.addnetworkDidLoginListener(() => {});

JPush.removenetworkDidLoginListener(() => {});

JPush.addReceiveNotificationListener(() => {});

JPush.removeReceiveNotificationListener(() => {});

JPush.addReceiveOpenNotificationListener(() => {});

JPush.removeReceiveOpenNotificationListener(() => {});

JPush.addGetRegistrationIdListener(() => {});

JPush.removeGetRegistrationIdListener(() => {});

JPush.addConnectionChangeListener(() => {});

JPush.removeConnectionChangeListener(() => {});

JPush.getRegistrationID((registrationId) => {});

JPush.setupPush();

JPush.getAppkeyWithcallback((appKey) => {});

JPush.setLocalNotification(
    new Date(),
    'body',
);

JPush.setLocalNotification(
    new Date(),
    'body',
    2,
    'action',
    'key',
    {
        name: 'name',
    },
    'sound',
);

JPush.setBadge(1, () => {});
