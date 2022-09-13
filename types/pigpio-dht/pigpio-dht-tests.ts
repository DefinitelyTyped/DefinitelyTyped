import * as dht from 'pigpio-dht';

const dhtReadPin = 2;
const sensor: dht.Dht = dht(dhtReadPin, 11);
sensor.on('start', () => console.log("start"));
sensor.on('end', () => console.log("end"));
sensor.on('result', (result: dht.DhtResult) => console.log(`result: ${result.temperature} degC, ${result.humidity}% relative humidity`));
sensor.on('badChecksum', () => console.log("bad checksum!"));
sensor.read();
