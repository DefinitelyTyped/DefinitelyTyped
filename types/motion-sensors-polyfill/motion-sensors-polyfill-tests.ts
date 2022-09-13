import {
    Accelerometer,
    LinearAccelerationSensor,
    GravitySensor,
    Gyroscope,
    AbsoluteOrientationSensor,
    RelativeOrientationSensor,
    // Magnetometer,
    // GeolocationSensor,
} from 'motion-sensors-polyfill';

const accelerometer = new Accelerometer();
accelerometer.timestamp;
accelerometer.x;
accelerometer.y;
accelerometer.z;

const linearAccelerationSensor = new LinearAccelerationSensor();
linearAccelerationSensor.timestamp;
linearAccelerationSensor.x;
linearAccelerationSensor.y;
linearAccelerationSensor.z;

const gravitySensor = new GravitySensor();
gravitySensor.timestamp;
gravitySensor.x;
gravitySensor.y;
gravitySensor.z;

const gyroscope = new Gyroscope();
gyroscope.x;
gyroscope.y;
gyroscope.z;

const absoluteOrientation = new AbsoluteOrientationSensor();
absoluteOrientation.timestamp;
absoluteOrientation.quaternion;

const relativeOrientation = new RelativeOrientationSensor();
relativeOrientation.timestamp;
relativeOrientation.quaternion;

// Missing Properties
/*
const properties = {
    'Magnetometer' : ['timestamp', 'x', 'y', 'z'],
    'GeolocationSensor' : [
      'timestamp',
      'latitude',
      'longitude'
    ]
  };
*/
