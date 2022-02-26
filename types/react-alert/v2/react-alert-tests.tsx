import * as React from 'react';

import AlertContainer, { AlertContainerProps, AlertShowOptions } from 'react-alert';

export default class ReactAlertTests extends React.Component {
    private _alert: AlertContainer;

    render() {
        const partialProps: AlertContainerProps = {
            offset: 14,
        };

        const props: AlertContainerProps = {
            offset: 14,
            position: 'bottom left',
            theme: 'dark',
            time: 5000,
            transition: 'scale',
        };

        return <AlertContainer ref={a => (this._alert = a!)} {...props} />;
    }

    testMethods() {
        const options: AlertShowOptions = {
            type: 'info',
            time: 5000,
            icon: <img src="path/to/some/image/32x32.png" />,
            onClose: () => {},
        };

        let alertId: string;
        alertId = this._alert.show('show without options');
        alertId = this._alert.show('show with options', options);

        alertId = this._alert.info('info without options');
        alertId = this._alert.info('info with options', options);

        alertId = this._alert.success('success without options');
        alertId = this._alert.success('success with options', options);

        alertId = this._alert.error('error without options');
        alertId = this._alert.error('error with options', options);

        alertId = this._alert.show(<div />, options);

        this._alert.removeAlert(alertId);
        this._alert.removeAll();
    }
}
