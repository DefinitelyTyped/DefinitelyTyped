import sensor = require('node-dht-sensor');

// synchronous mode
sensor.initialize(11, 4);
sensor.initialize({ test: { fake: { humidity: 42, temperature: 13 } } });
sensor.read(11, 7, (err: Error | null, temperature: number, humidity: number) => {
    // results are there
});
sensor.setMaxRetries(10);

// asnyc promise mode
sensor.promises.initialize(11, 4);
sensor.promises.read(11, 4).then(({ temperature, humidity }) => {
    // async results
});
sensor.promises.readSync(11, 4, (err, temperature, humidity) => {
    // callback style results
});
sensor.promises.setMaxRetries(5);
