// Type definitions for react-notify-toast 0.5.0
// Project: https://github.com/jesusoterogomez/react-notify-toast
// Definitions by: Klaas Cuvelier <https://github.com/klaascuvelier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

type reactNotifyToastType = 'success' | 'error' | 'warning' | 'custom';
type reactNotifyToastColor = {
    background: string;
    text: string;
};

declare module 'react-notify-toast' {
    class reactNotifyToast {
        show(
            text: string,
            type?: reactNotifyToastType,
            timeout?: number,
            color?: reactNotifyToastColor
        ): void;

        hide(): void;
        createShowQueue(): reactNotifyToast;
    }

    import * as React from 'react';

    type NotificationProps = {
        options: any;
    };

    export class Notification extends React.Component<NotificationProps, any> {}

    export const notify: reactNotifyToast;
    export default Notification;
}
