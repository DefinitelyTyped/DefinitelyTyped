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
        // $ExpectError
        somethingRandom: 'Wonderful!',
        animationOut: ['animated', 'fadeOut'],
    });
};

const ComponentTest: React.SFC = () => {
    return (
        <div>
            <ReactNotification />
        </div>
    );
};

const WrongPropTest: React.SFC = () => {
    // $ExpectError
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
    // $ExpectError
    container: 'center-full',
    touchSlidingExit: {
        // $ExpectError
        notValid: 1,
    }
};
