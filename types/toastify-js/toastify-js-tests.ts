import Toastify = require('toastify-js');

Toastify({
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
