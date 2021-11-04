import IDLEObserver = require('user-idle-observer');

const observer = IDLEObserver({
    idleTime: 5000,
    cb: time => {
        console.log(`User was innactive for ${time}ms`);
    },
    listeners: ['mousemove', 'mousedown', 'keydown'],
});

IDLEObserver();
IDLEObserver({});
IDLEObserver({
    cb: console.log,
});
