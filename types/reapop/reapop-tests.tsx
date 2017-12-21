import * as React from 'react';
import NotificationSystem, {
    addNotification,
    updateNotification,
    removeNotification,
    removeNotifications,
    POSITIONS,
    reducer,
    Notification,
    STATUS
} from 'reapop';

const theme = {
    smallScreenMin: 1000
};

const filter = (notification: Notification) =>
    notification.title !== 'super-title';

const test = (
    <NotificationSystem
        theme={theme}
        filter={filter}
    />
);

const notification: Notification = {
    title: 'some-title',
    message: 'message',
    status: STATUS.info,
    position: POSITIONS.top,
    onAdd: () => console.log('on add')
};

addNotification(notification);
updateNotification(notification);
removeNotification(notification);
removeNotifications();

reducer(notification);
