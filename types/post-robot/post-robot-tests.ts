import postRobot = require('post-robot');

postRobot.on('getUser', event => {
    return new Promise(resolve => {
        resolve(event);
    });
});

postRobot.once('getUser', event => {
    return new Promise(resolve => {
        resolve(event);
    });
});

const listener = postRobot.on('getUser', event => {
    return new Promise(resolve => {
        resolve(event);
    });
});
listener.cancel();

const someWindow = window.open('url', 'windowName');
postRobot
    .send(someWindow, 'getUser', { id: 1337 })
    .then(event => {
        const user = event.data;

        console.log(event.source, event.origin, 'Got user:', user);
    })
    .catch((err: Error) => {
        console.error(err);
    });
