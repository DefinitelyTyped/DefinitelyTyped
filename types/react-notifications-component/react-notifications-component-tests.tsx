import * as React from 'react';
import ReactNotification, { ReactNotificationOptions, store } from 'react-notifications-component';

const SampleNotification = () => {
    store.addNotification({
        title: 'Wonderful!',
        message: 'Configurable',
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
    });
};

const WrongSampleNotification = () => {
    store.addNotification({
        // @ts-expect-error
        somethingRandom: 'Wonderful!',
        animationOut: ['animated', 'fadeOut'],
    });
};

const ComponentTest: React.FC = () => {
    return (
        <div>
            <ReactNotification />
        </div>
    );
};

const WrongPropTest: React.FC = () => {
    // @ts-expect-error
    return <ReactNotification randomProp={false} />;
};

const OptionsTest: ReactNotificationOptions = {
    container: 'bottom-full',
    touchSlidingExit: {
        fade: {
            duration: 3,
            timingFunction: 'ease',
            delay: 10
        }
    }
};

const WrongOptionsTest: ReactNotificationOptions = {
    // @ts-expect-error
    container: 'center-full',
    touchSlidingExit: {
        // @ts-expect-error
        notValid: 1,
    }
};
