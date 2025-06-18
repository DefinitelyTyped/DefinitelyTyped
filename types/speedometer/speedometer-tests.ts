import * as speedometer from "speedometer";

const _speedometer: speedometer.Speedometer = speedometer(10);
_speedometer(25);
_speedometer(600);
const _speedometerDefault: speedometer.Speedometer = speedometer();
_speedometerDefault(150);
