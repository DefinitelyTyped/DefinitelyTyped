import KalmanFilter from "kalmanjs";

const kalmanFilter = new KalmanFilter();

kalmanFilter.filter(0);
kalmanFilter.predict();
kalmanFilter.uncertainty();
kalmanFilter.lastMeasurement();
kalmanFilter.setMeasurementNoise(0);
kalmanFilter.setProcessNoise(0);
