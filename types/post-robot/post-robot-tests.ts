import postRobot = require('post-robot');

postRobot.on('getUser', function (event) {
    return {
        id: 1234,
        name: 'Zippy the Pinhead',
    };
});

postRobot.once('getUser', function (event) {
    return {
        name: 'Noggin the Nog',
    };
});

const listener = postRobot.on('getUser', function (event) {
    return {
        id: event.data.id,
        name: 'Zippy the Pinhead',
    };
});
listener.cancel();

const someWindow = window.open('url', 'windowName');
postRobot
    .send(someWindow, 'getUser', { id: 1337 })
    .then(function (event) {
        var user = event.data;

        console.log(event.source, event.origin, 'Got user:', user);
        user.logout();
    })
    .catch(function (err) {
        console.error(err);
    });
