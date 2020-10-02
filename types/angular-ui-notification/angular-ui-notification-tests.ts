
function TestNotifications(NotificationProvider: angular.uiNotification.INotificationProvider, Notification: angular.uiNotification.INotificationService) {
    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'left',
        positionY: 'bottom'
    });

    Notification.primary('Primary notification');
    Notification('Primary notification');

    Notification.success('Success notification');

    Notification({message: 'Warning notification'}, 'warning');

    Notification({message: 'Primary notification', title: 'Primary notification'});

    Notification.error({message: 'Error notification 1s', delay: 1000});

    Notification.success({message: 'Success notification<br>Some other <b>content</b><br><a href="https://github.com/alexcrack/angular-ui-notification">This is a link</a><br><img src="https://angularjs.org/img/AngularJS-small.png">', title: 'Html content'});

    Notification.error({message: 'Error Bottom Right', positionY: 'bottom', positionX: 'right'});

    Notification.error({message: 'Error notification 1s', replaceMessage: true});
}
