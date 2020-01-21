import * as React from 'react';
import { DefaultToast, ToastProps, ToastProvider, useToasts, ToastConsumer } from 'react-toast-notifications';

const CustomToast: React.FC<ToastProps> = ({ children, ...props }) => (
    <DefaultToast {...props}>
        <div className="custom">{children}</div>
    </DefaultToast>
);

// ToastProvider Props

const MyApp: React.FC = () => (
    <ToastProvider
        autoDismiss
        autoDismissTimeout={6000}
        components={{ Toast: CustomToast }}
        placement="bottom-center"
        transitionDuration={2000}
    >
        <ToastConsumerTest />
        <AddToast />
        <RemoveAllToasts />
        <RemoveAllToasts />
        <ToastStack />
        <UpdateToast />
    </ToastProvider>
);

// ToastConsumer

const ToastConsumerTest: React.FC = () => (
    <ToastConsumer>
        {context => (
            <div>
                <button
                    onClick={() =>
                        context.add(
                            'Toast',
                            {
                                appearance: 'info',
                            },
                            () => {},
                        )
                    }
                >
                    Add Toast
                </button>
            </div>
        )}
    </ToastConsumer>
);

// Hooks

const AddToast: React.FC = () => {
    const { addToast } = useToasts();

    return (
        <div>
            <button
                onClick={() =>
                    addToast(
                        'Toast',
                        {
                            appearance: 'error',
                            autoDismiss: true,
                        },
                        () => {},
                    )
                }
            >
                Add Toast
            </button>
        </div>
    );
};

const RemoveAllToasts: React.FC = () => {
    const { removeAllToasts } = useToasts();

    return (
        <div>
            <button onClick={removeAllToasts}>Remove All Toasts</button>
        </div>
    );
};

const RemoveToast: React.FC = () => {
    const { removeToast } = useToasts();

    return (
        <div>
            <button onClick={() => removeToast('to-be-removed', () => {})}>Remove Toast</button>
        </div>
    );
};

const ToastStack: React.FC = () => {
    const { removeAllToasts, toastStack } = useToasts();

    const onSubmit = () => {
        if (toastStack.length > 0) {
            removeAllToasts();
        }
    };

    return <form onSubmit={onSubmit}>Save Form</form>;
};

const UpdateToast: React.FC = () => {
    const { updateToast } = useToasts();

    return (
        <div>
            <button
                onClick={() =>
                    updateToast(
                        'to-be-updated',
                        {
                            appearance: 'error',
                            autoDismiss: true,
                        },
                        () => {},
                    )
                }
            >
                Update Toast
            </button>
        </div>
    );
};
