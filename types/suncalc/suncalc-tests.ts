import * as SunCalc from 'suncalc';

let d: Date;
let x: number;
let b: boolean;

const date = new Date();
const latitude = 0.0;
const longitude = 0.0;

const times = SunCalc.getTimes(date, latitude, longitude);
d = times.dawn;
d = times.dusk;
d = times.goldenHour;
d = times.goldenHourEnd;
d = times.nadir;
d = times.nauticalDawn;
d = times.nauticalDusk;
d = times.night;
d = times.nightEnd;
d = times.solarNoon;
d = times.sunrise;
d = times.sunriseEnd;
d = times.sunset;
d = times.sunsetStart;

SunCalc.addTime(0.0, 'customTime', 'customTimeEnd');

const pos = SunCalc.getPosition(date, latitude, longitude);
x = pos.altitude;
x = pos.azimuth;

const mp = SunCalc.getMoonPosition(date, latitude, longitude);
x = mp.altitude;
x = mp.azimuth;
x = mp.distance;
x = mp.parallacticAngle;

const mi = SunCalc.getMoonIllumination(date);
x = mi.fraction;
x = mi.phase;
x = mi.angle;

const mt = SunCalc.getMoonTimes(date, latitude, longitude, true);
d = mt.rise;
d = mt.set;
b = mt.alwaysUp;
b = mt.alwaysDown;
