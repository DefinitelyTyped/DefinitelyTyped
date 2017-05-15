import JPush from 'jpush-react-native';

JPush.initPush();

JPush.stopPush();

JPush.resumePush();

JPush.clearAllNotifications();

JPush.clearNotificationById('id');

JPush.getInfo((map) => {});

JPush.setTags(
    ['tag1', 'tag2'],
    () => {},
    () => {},
);

JPush.setAlias(
    'alias',
    () => {},
    () => {},
);

JPush.setAliasAndTags(
    'alias',
    ['tag1', 'tag2'],
    () => { },
    () => { },
);

JPush.setStyleBasic();

JPush.setStyleCustom();

JPush.addReceiveCustomMsgListener(() => {});

JPush.removeReceiveCustomMsgListener(() => {});

JPush.addReceiveNotificationListener(() => {});

JPush.removeReceiveNotificationListener(() => {});

JPush.addReceiveOpenNotificationListener(() => {});

JPush.removeReceiveOpenNotificationListener(() => {});

JPush.addGetRegistrationIdListener((registrationId) => {});

JPush.removeGetRegistrationIdListener(() => {});

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
