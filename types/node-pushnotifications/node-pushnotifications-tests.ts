import PushNotifications = require("node-pushnotifications");
import { supportedContentEncodings } from "web-push";

const settings = {
    gcm: {
        id: "null",
    },
    apn: {
        token: {
            key: "./certs/key.p8",
            keyId: "ABCD",
            teamId: "EFGH",
        },
    },
    adm: {
        client_id: "null",
        client_secret: "null",
    },
    wns: {
        client_id: "null",
        client_secret: "null",
        notificationMethod: "sendTileSquareBlock",
    },
    web: {
        vapidDetails: {
            subject: "< 'mailto' Address or URL >",
            publicKey: "< URL Safe Base64 Encoded Public Key >",
            privateKey: "< URL Safe Base64 Encoded Private Key >",
        },
        gcmAPIKey: "gcmkey",
        TTL: 2419200,
        contentEncoding: supportedContentEncodings.AES_128_GCM,
        headers: {},
    },
};
const push = new PushNotifications(settings);

const registrationIds = [];
registrationIds.push("INSERT_YOUR_DEVICE_ID");
registrationIds.push("INSERT_OTHER_DEVICE_ID");
registrationIds.push({
    endpoint: "https://fcm.googleapis.com/fcm/send/...",
    keys: {
        auth: "...",
        p256dh: "...",
    },
});

const data = {
    title: "New push notification",
    body: "Powered by AppFeel",
};

function assertResultTypes(result: PushNotifications.Result) {
    // $ExpectType MethodValue
    result.method;

    result.method === "apn";
    result.method === "gcm";
    result.method === "adm";
    result.method === "wns";
    result.method === "webPush";
    result.method === "unknown";
    result.method === "none";
    // @ts-expect-error
    result.method === "any_other_string";

    // $ExpectType number
    result.success;

    // $ExpectType number
    result.failure;

    // $ExpectType Message[]
    result.message;

    // $ExpectType string
    result.message[0].regId;

    // $ExpectType string | undefined
    result.message[0].originalRegId;

    // $ExpectType string | undefined
    result.message[0].messageId;

    // $ExpectType Error | null | undefined
    result.message[0].error;

    // $ExpectType string | undefined
    result.message[0].errorMsg;
}

// You can use it in node callback style
push.send(registrationIds, data, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        // $ExpectType Result[]
        results;
        results.forEach(assertResultTypes);
        console.log(results);
    }
});

// Or you could use it as a promise and send only a single notifications:
push.send(registrationIds[0], data)
    .then((results) => {
        // $ExpectType Result[]
        results;
        results.forEach(assertResultTypes);
        console.log(results);
    })
    .catch((err) => {
        console.log(err);
    });
