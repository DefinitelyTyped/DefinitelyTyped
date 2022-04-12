import * as pirSensor from 'pi-pir-sensor';

// With default loop of 1500
const sensor: pirSensor.Sensor = new pirSensor.Sensor({pin: 12});

sensor.on('movement', () => {
    // who's there?
});

sensor.start();
sensor.stop();

// With loop value 2000
const secondSensor: pirSensor.Sensor = new pirSensor.Sensor({pin: 12, loop: 2000});
secondSensor.start((error)=>console.error(error));

// Get the last movement
const lastMovement = sensor.lastMovement;
