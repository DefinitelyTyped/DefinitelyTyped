import * as React from 'react';
import {
    AlertComponentPropsWithStyle,
    AlertManager,
    Provider as AlertProvider,
    AlertProviderProps,
    useAlert,
    withAlert,
} from 'react-alert';

class AppWithoutAlert extends React.Component<{ alert: AlertManager }> {
    render() {
        return (
            <button
                onClick={() => {
                    this.props.alert.show(
                        'Oh look, an alert!',
                        {
                            type: 'info',
                            timeout: 1000,
                            onOpen(): void {
                            },
                            onClose(): void {
                            }
                        });
                }}
            >
                Show Alert
            </button>
        );
    }
}

const customContext = React.createContext<AlertManager | undefined>(undefined);

const App = withAlert(customContext)(AppWithoutAlert);

const AlertHook = (): JSX.Element => {
    const alert = useAlert();
    return (
        <button
            onClick={() => {
                alert.info(
                    <div style={{ color: 'blue' }}>Some Message</div>,
                    {
                        timeout: 1000,
                        onOpen(): void {
                        },
                        onClose(): void {
                        }
                    });
            }}
        >
            Show Alert
        </button>
    );
};

class AlertTemplate extends React.Component<AlertComponentPropsWithStyle> {
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

const options: AlertProviderProps = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale',
    context: customContext,
    className: 'cssClass',
    template: AlertTemplate,
    containerStyle: {
        margin: 5,
    },
};

class Root extends React.Component {
    render() {
        return (
            <AlertProvider {...options}>
                <App />
                <AlertHook />
            </AlertProvider>
        );
    }
}
