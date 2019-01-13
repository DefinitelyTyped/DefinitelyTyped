import * as React from 'react';
import {
    Provider as AlertProvider,
    Alert,
    withAlert,
    AlertPosition,
    AlertTransition,
    ProviderOptions,
    InjectedAlertProp
} from 'react-alert';

class AppWithoutAlert extends React.Component<{ alert: InjectedAlertProp }> {
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

const App = withAlert(AppWithoutAlert);

class AppAlert extends React.Component {
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

class AlertTemplate extends React.Component<any> {
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

const options: ProviderOptions = {
    position: 'bottom center' as AlertPosition,
    timeout: 5000,
    offset: '30px',
    transition: 'scale' as AlertTransition
};

class Root extends React.Component {
    render() {
        return (
            <AlertProvider template={AlertTemplate} {...options}>
                <App />
            </AlertProvider>
        );
    }
}

class RootAlert extends React.Component {
    render() {
        return (
            <AlertProvider template={AlertTemplate} {...options}>
                <AppAlert />
            </AlertProvider>
        );
    }
}
