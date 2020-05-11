import PushNotifications = require('node-pushnotifications');
import { supportedContentEncodings } from 'web-push';

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
    },
    web: {
        vapidDetails: {
            subject: '< \'mailto\' Address or URL >',
            publicKey: '< URL Safe Base64 Encoded Public Key >',
            privateKey: '< URL Safe Base64 Encoded Private Key >',
        },
        gcmAPIKey: 'gcmkey',
        TTL: 2419200,
        contentEncoding: supportedContentEncodings.AES_128_GCM,
        headers: {},
    }
};
const push = new PushNotifications(settings);

const registrationIds = [];
registrationIds.push('INSERT_YOUR_DEVICE_ID');
registrationIds.push('INSERT_OTHER_DEVICE_ID');
registrationIds.push({
    endpoint: 'https://fcm.googleapis.com/fcm/send/...',
    keys: {
        auth: '...',
        p256dh: '...'
    }
});

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

// Or you could use it as a promise and send only a single notifications:
push.send(registrationIds[0], data)
    .then((results) => {
        results.forEach((result) => {
            console.log(result.success);
            console.log(result.failure);
        });
        console.log(results);
    })
    .catch((err) => {
        console.log(err);
    });
