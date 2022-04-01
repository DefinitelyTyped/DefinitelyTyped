import * as pirSensor from 'pi-pir-sensor';

//With default loop of 1500
const sensorConfiguration = new pirSensor.SensorConfiguration(12);
const sensor: pirSensor.PirSensor = new pirSensor.PirSensor(sensorConfiguration);

sensor.on('movement',  ()=> {
    // who's there?
});

sensor.start();
sensor.stop();

//With loop value 2000
const sensorConfigurationWithPir = new pirSensor.SensorConfiguration(12, 2000);

const lastMovement = sensor.lastMovement;
