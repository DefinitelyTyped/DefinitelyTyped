import sensor = require('node-dht-sensor');

// normal mode
sensor.initialize(11, 4);
sensor.initialize({ test: { fake: { humidity: 42, temperature: 13 } } });
sensor.read(11, 4, (err: Error | null, temperature: number, humidity: number) => {
    // async callback results
});
sensor.read(11, 4);
sensor.read();
sensor.setMaxRetries(10);

// promise mode
sensor.promises.initialize(11, 4);
sensor.promises.initialize({ test: { fake: { humidity: 42, temperature: 13 } } });
sensor.promises.read(11, 4).then(({ temperature, humidity }) => {
    // async promise results
});
sensor.promises.readSync(11, 4);
sensor.promises.setMaxRetries(10);
