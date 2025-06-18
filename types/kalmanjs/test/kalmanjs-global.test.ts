const kalmanFilter = new KalmanFilter(); // $ExpectType KalmanFilter

kalmanFilter.filter(0); // $ExpectType number
kalmanFilter.predict(); // $ExpectType number
kalmanFilter.uncertainty(); // $ExpectType number
kalmanFilter.lastMeasurement(); // $ExpectType number
kalmanFilter.setMeasurementNoise(0); // $ExpectType void
kalmanFilter.setProcessNoise(0); // $ExpectType void
