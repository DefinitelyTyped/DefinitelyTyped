import React = require('react');
import NotificationSystem = require('react-notification-system');


class MyComponent extends React.Component<any, any> {
    private notificationSystem: NotificationSystem.System = null;

    private notification: NotificationSystem.Notification = {
        message: 'Notification message',
        level: 'success',
        action: {
            label: "Button inside this notification",
            callback: () => {
                this.notificationSystem.removeNotification(this.notification);
            }
        }
    };

    private addNotification() {
        this.notification = this.notificationSystem.addNotification(this.notification);
    }

    componentDidMount() {
        this.notificationSystem = this.refs['notificationSystem'] as NotificationSystem.System;
        this.addNotification();
    }

    render() {

        var style = {
            NotificationItem: { // Override the notification item
                DefaultStyle: { // Applied to every notification, regardless of the notification level
                    margin: '10px 5px 2px 1px'
                },

                success: { // Applied only to the success notification item
                    color: 'red'
                }
            }
        };

        var attributes: NotificationSystem.Attributes = {
            style: {
                Containers: {
                    DefaultStyle: {
                        margin: '10px 5px 2px 1px'
                    }
                },
                Title: {
                    success: {
                        color: 'green'
                    }
                }
            }
        };

        return React.createElement(NotificationSystem, { title: "NotificationTitile", style: style, } as NotificationSystem.Attributes);
    }
}
