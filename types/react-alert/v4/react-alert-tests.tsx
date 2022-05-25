import * as React from 'react';

import {
    Alert,
    AlertOptions,
    Provider as AlertProvider,
    AlertTemplateProps,
    InjectedAlertProps,
    withAlert,
} from 'react-alert';

class AlertTemplate extends React.Component<AlertTemplateProps> {
    render() {
        // the style contains only the margin given as offset
        // options contains all alert given options
        // message is the alert message...
        // close is a function that closes the alert
        const { style, options, message, close } = this.props;

        return (
            <div style={style}>
                {options.type === 'info' && '!'}
                {options.type === 'success' && ':)'}
                {options.type === 'error' && ':('}
                {message}
                <button onClick={close}>X</button>
            </div>
        );
    }
}

const options: AlertOptions = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale',
};

class App extends React.Component<{} & InjectedAlertProps> {
    render() {
        return (
            <button
                onClick={() => {
                    this.props.alert.show('Oh look, an alert!');
                }}
            >
                Show Alert
            </button>
        );
    }
}

const AppWithAlert = withAlert(App);

class Root extends React.Component {
    render() {
        return (
            <AlertProvider template={AlertTemplate} {...options}>
                <AppWithAlert />
            </AlertProvider>
        );
    }
}

class AppUseAlertConsumer extends React.Component {
    render() {
        return (
            <Alert>
                {alert => (
                    <button
                        onClick={() => {
                            alert.show('Oh look, an alert!');
                        }}
                    >
                        Show Alert
                    </button>
                )}
            </Alert>
        );
    }
}
