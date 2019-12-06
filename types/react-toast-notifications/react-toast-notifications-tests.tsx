import * as React from 'react';
import { DefaultToast, ToastProps, ToastProvider, useToasts, ToastConsumer } from 'react-toast-notifications';

const CustomToast: React.FC<ToastProps> = ({ children, ...props }) => (
    <DefaultToast {...props}>
        <div className="custom">{children}</div>
    </DefaultToast>
);

const MyApp: React.FC = () => (
    <ToastProvider>
        <Main1 />
        <Main2 />
    </ToastProvider>
);

const Main1: React.FC = () => (
    <ToastConsumer>
        {context => (
            <div>
                <button onClick={() => context.add('Toast')}>Add</button>
            </div>
        )}
    </ToastConsumer>
);

const Main2: React.FC = () => {
    const { addToast, removeToast, toastStack } = useToasts();

    return (
        <div>
            <button onClick={() => addToast('Toast')}>Add</button>
        </div>
    );
};
