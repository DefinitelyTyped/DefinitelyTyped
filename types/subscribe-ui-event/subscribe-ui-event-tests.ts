import {
    subscribe,
    unsubscribe,
    listen,
    UIEventCallback,
} from 'subscribe-ui-event';

const callback: UIEventCallback = (event, paylaod) => {
    const target = event.target;
    console.log(paylaod);
};

const subscription = subscribe('resize', callback);

unsubscribe('touchend', (event, paylaod) => {
    const target = event.currentTarget;
    console.log(paylaod.type);
});

subscription.unsubscribe();

const {remove} = listen(document, 'onclick', console.log);

remove();

// allow to pass target as event option
subscribe('resize', callback, {
    target: document.getElementById('foobar')
});
