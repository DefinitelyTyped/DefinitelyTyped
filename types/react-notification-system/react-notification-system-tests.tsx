import * as React from 'react';
import * as NotificationSystem from 'react-notification-system';

class MyComponent extends React.Component {
    private notificationSystem: NotificationSystem.System = null;

    private notification: NotificationSystem.Notification = {
        title: 'Notification title',
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
        this.addNotification();
    }

    render() {

        const style: NotificationSystem.Style = {
            NotificationItem: { // Override the notification item
                DefaultStyle: { // Applied to every notification, regardless of the notification level
                    margin: '10px 5px 2px 1px'
                },

                success: { // Applied only to the success notification item
                    color: 'red'
                }
            }
        };

        const attributes: NotificationSystem.Attributes = {
            style: {
                ...style,
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

        const ref = (instance: NotificationSystem.System) => {
            this.notificationSystem = instance
        }

        return (
            <NotificationSystem style={style} ref={ref}/>
        )
    }
}
