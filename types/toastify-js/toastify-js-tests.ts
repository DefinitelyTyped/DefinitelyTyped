import { Options } from 'toastify-js';
import Toastify = require('toastify-js');

Toastify({
    avatar: 'https://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?s=200&r=pg&d=mp',
    text: 'This is a toast',
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top',
    position: 'left',
    backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
    stopOnFocus: true,
    onClick: () => {},
}).showToast();

Toastify({
    text: 'This is a toast',
    backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
    className: 'info',
}).showToast();

Toastify({
    text: 'This is a toast with offset',
    offset: {
        x: 50,
        y: 10,
    },
}).showToast();

Toastify.reposition(); // $ExpectType void

// Options for the toast
const options: Options = {
    text: 'Happy toasting!',
    duration: 2500,
    callback: () => {
        console.log('Toast hidden');
        Toastify.reposition();
    },
    close: true,
    backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
    style: {
        color: '#aabbcc',
    },
    escapeMarkup: true,
    oldestFirst: true,
};

Toastify(options);

// #60413
const toast = Toastify({
    text: 'Update is pending',
    duration: 3000,
    close: false,
    stopOnFocus: true,
    onClick: () => {
        toast.hideToast(); // see this line
    },
});
toast.options; // $ExpectType Options
toast.toastElement; // $ExpectType Element | null
