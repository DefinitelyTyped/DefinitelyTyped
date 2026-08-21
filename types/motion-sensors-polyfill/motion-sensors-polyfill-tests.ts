import {
    AbsoluteOrientationSensor,
    Accelerometer,
    GravitySensor,
    Gyroscope,
    LinearAccelerationSensor,
    RelativeOrientationSensor,
    // Magnetometer,
    // GeolocationSensor,
} from "motion-sensors-polyfill";

const accelerometer = new Accelerometer({
    frequency: 60,
    referenceFrame: "device",
});
accelerometer.timestamp;
accelerometer.x;
accelerometer.y;
accelerometer.z;

const linearAccelerationSensor = new LinearAccelerationSensor({
    frequency: 60,
    referenceFrame: "device",
});
linearAccelerationSensor.timestamp;
linearAccelerationSensor.x;
linearAccelerationSensor.y;
linearAccelerationSensor.z;

const gravitySensor = new GravitySensor({
    frequency: 60,
    referenceFrame: "screen",
});
gravitySensor.timestamp;
gravitySensor.x;
gravitySensor.y;
gravitySensor.z;

const gyroscope = new Gyroscope({
    frequency: 60,
    referenceFrame: "device",
});
gyroscope.x;
gyroscope.y;
gyroscope.z;

const absoluteOrientation = new AbsoluteOrientationSensor({
    frequency: 60,
    referenceFrame: "device",
});
absoluteOrientation.timestamp;
absoluteOrientation.quaternion;

const relativeOrientation = new RelativeOrientationSensor({
    frequency: 60,
    referenceFrame: "screen",
});
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
