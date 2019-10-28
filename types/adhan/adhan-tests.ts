// import adhan from 'adhan';

// Get coordinates
const coordinates = new adhan.Coordinates(35.78056, -78.6389);
// Get date right now
const date = new Date();
// Calculation paramaters
const param = adhan.CalculationMethod.MuslimWorldLeague();
param.madhab = adhan.Madhab.Shafi;
param.fajrAngle = 13;
param.highLatitudeRule = adhan.HighLatitudeRule.TwilightAngle;
param.adjustments.dhuhr = 4;

// Get prayertimes
const prayerTimes = new adhan.PrayerTimes(coordinates, date, param);
adhan.Date.formattedTime(prayerTimes.fajr);
adhan.Date.formattedTime(prayerTimes.asr, 20, '24h');
