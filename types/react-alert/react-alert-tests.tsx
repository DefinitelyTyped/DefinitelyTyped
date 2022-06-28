import * as React from 'react';

import {
    AlertOptions,
    Provider as AlertProvider,
    AlertTemplateProps,
    InjectedAlertProps,
    positions,
    transitions,
    useAlert,
    withAlert,
} from 'react-alert';

// the style contains only the margin given as offset
// options contains all alert given options
// message is the alert message
// close is a function that closes the alert
const AlertTemplate: React.FC<AlertTemplateProps> = ({ style, options, message, close }) => (
    <div style={style}>
        {options.type === 'info' && '!'}
        {options.type === 'success' && ':)'}
        {options.type === 'error' && ':('}
        {message}
        <button onClick={close}>X</button>
    </div>
);

// optional cofiguration
const options: AlertOptions = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE,
};

// @ts-expect-error
options.position = 'top';

const App = () => {
    const alert = useAlert();

    return (
        <button
            onClick={() => {
                alert.show('Oh look, an alert!');
            }}
        >
            Show Alert
        </button>
    );
};

const Root = () => (
    <AlertProvider template={AlertTemplate} {...options}>
        <App />
    </AlertProvider>
);

const AppWithInjectedAlert: React.FC<{} & InjectedAlertProps> = ({ alert }) => (
    <button
        onClick={() => {
            alert.show('Oh look, an alert!');
        }}
    >
        Show Alert
    </button>
);

const AppWithAlert = withAlert()(AppWithInjectedAlert);
