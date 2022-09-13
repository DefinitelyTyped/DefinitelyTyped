import * as React from 'react';
import { useNotification, NotificationsProvider } from 'rr-notifications';

useNotification().showNotification({ text: 'hi!' });
useNotification().removeNotification('2020-04-06T21:31:29.000Z')();

const node = NotificationsProvider({
    renderNotification({ removeNotification, payload }) {
        return React.createElement('span', { onClick: removeNotification }, `<pre>${JSON.stringify(payload)}</pre>`);
    },
});

node; // $ExpectType ReactElement<any, any> | null
