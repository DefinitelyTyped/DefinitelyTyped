import { DeviceEventEmitter, NativeModules } from 'react-native'

const SensorManager = NativeModules.SensorManager

let num: number;
let bool: boolean;

SensorManager.startAccelerometer(num);
SensorManager.stopAccelerometer();

SensorManager.startGyroscope(num);
SensorManager.stopGyroscope();

SensorManager.startMagnetometer(num);
SensorManager.stopMagnetometer();

SensorManager.startStepCounter(num);
SensorManager.stopStepCounter();

SensorManager.startThermometer(num);
SensorManager.stopThermometer();

SensorManager.startMotionValue(num);
SensorManager.stopMotionValue();

SensorManager.startOrientation(num);
SensorManager.stopOrientation();

SensorManager.startProximity(num);
SensorManager.stopProximity();

SensorManager.startLightSensor(num);
SensorManager.stopLightSensor();


DeviceEventEmitter.addListener('Accelerometer', (data) => {
    num = data.x;
    num = data.y;
    num = data.z;
});


DeviceEventEmitter.addListener('Gyroscope', (data) => {
    num = data.x;
    num = data.y;
    num = data.z;
});

DeviceEventEmitter.addListener('Magnetometer', (data) => {
    num = data.x;
    num = data.y;
    num = data.z;
});

DeviceEventEmitter.addListener('Orientation', (data) => {
    num = data.azimuth;
    num = data.pitch;
    num = data.roll;
});

DeviceEventEmitter.addListener('Thermometer', (data) => {
    num = data.temp;
});

DeviceEventEmitter.addListener('LightSensor', (data) => {
    num = data.light;
});

DeviceEventEmitter.addListener('Proximity', (data) => {
    bool = data.isNear;
    num = data.value;
    num = data.value;
});
