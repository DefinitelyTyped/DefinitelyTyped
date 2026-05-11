import * as React from "react";
import { Notification } from "react-notification-system";
import { createStore, Store } from "redux";
import Notifications = require("react-notification-system-redux");
import {
    error,
    hide,
    info,
    NotificationLevel,
    reducer,
    removeAll,
    show,
    success,
    warning,
} from "react-notification-system-redux";

class Test extends React.Component {
    private test() {
        const notification: Notification = {
            message: "Test",
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
        return <Notifications notifications={notifications} />;
    }
}

const store: Store<any> = createStore(reducer);
