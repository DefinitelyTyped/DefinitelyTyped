import * as React from "react";
import { createStore, Store } from "redux";
import { Notification } from "react-notification-system";
import * as Notifications from "react-notification-system-redux";
import { reducer, removeAll, show, hide, info, error, warning, success, NotificationLevel } from "react-notification-system-redux";

class Test extends React.Component {
    private test() {
        const notification: Notification = {
            message : "Test"
        };
        info(notification);
        error(notification);
        warning(notification);
        success(notification);
        show(notification, "info");
        show(notification, "error");
        show(notification, "warning");
        show(notification, "success");
        hide(notification);
        hide("uid");
        hide(123);
        removeAll();
    }

    render() {
        const notifications: Notification[] = [];
        return (<Notifications notifications={ notifications } />);
    }
}

const store: Store<any> = createStore(reducer);
