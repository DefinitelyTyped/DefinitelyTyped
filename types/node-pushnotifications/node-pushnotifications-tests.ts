import PushNotifications = require('node-pushnotifications');

const settings = {
    gcm: {
        id: "null"
    },
    apn: {
        token: {
            key: './certs/key.p8',
            keyId: 'ABCD',
            teamId: 'EFGH',
        }
    },
    adm: {
        client_id: "null",
        client_secret: "null"
    },
    wns: {
        client_id: "null",
        client_secret: "null",
        notificationMethod: 'sendTileSquareBlock',
    }
};
const push = new PushNotifications(settings);

const registrationIds = [];
registrationIds.push('INSERT_YOUR_DEVICE_ID');
registrationIds.push('INSERT_OTHER_DEVICE_ID');

const data = {
    title: 'New push notification',
    body: 'Powered by AppFeel'
};

// You can use it in node callback style
push.send(registrationIds, data, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

// Or you could use it as a promise:
push.send(registrationIds, data)
    .then((results) => {
        console.log(results);
    })
    .catch((err) => {
        console.log(err);
    });
