import * as React from 'react';
import Notification, { notify } from 'react-notify-toast';

export class NotificationTest extends React.Component {
    render() {
        return(<Notification options={{zIndex: 200, top: '15px'}} />);
    }
}

function testNotify() {
    notify.show('show something');
    notify.show('show error', 'error');
    notify.show('show warning', 'warning', 100);

    const queue = notify.createShowQueue();
    queue.show('hi');
    queue.show('test');

    notify.hide();
}
