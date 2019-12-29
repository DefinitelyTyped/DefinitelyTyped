
import gcm = require('node-gcm');

// Create a message
// ... with default values
var message = new gcm.Message();

// ... or some given values
var message = new gcm.Message({
    collapseKey: 'demo',
    delayWhileIdle: true,
    timeToLive: 3,
    data: {
        key1: 'message1',
        key2: 'message2'
    }
});

// Change the message data
// ... as key-value
message.addData('key1','message1');
message.addData('key2','message2');

// ... or as a data object (overwrites previous data object)
message.addData({
    key1: 'message1',
    key2: 'message2'
});

// Change the message variables
message.collapseKey = 'demo';
message.delayWhileIdle = true;
message.timeToLive = 3;
message.dryRun = true;

// Set up the sender with you API key
var sender = new gcm.Sender('insert Google Server API Key here');

// Add the registration IDs of the devices you want to send to
var registrationIds: string[] = [];
registrationIds.push('regId1');
registrationIds.push('regId2');

// Send the message
// ... trying only once
sender.sendNoRetry(message, registrationIds, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

// ... or retrying
sender.send(message, registrationIds, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

// ... or retrying a specific number of times (10)
sender.send(message, registrationIds, 10, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});

