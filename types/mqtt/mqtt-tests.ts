import mqtt = require('mqtt');

var client: mqtt.Client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
    client.subscribe('presence');
    client.publish('presence', 'Hello mqtt');
});

client.on('message', (topic: string, message: Buffer) => {
    // message is Buffer
    console.log(message.toString());
    client.end();
});
