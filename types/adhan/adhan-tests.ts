const Adhan = adhan;

// Get coordinates
const coordinates = new Adhan.Coordinates(35.78056, -78.6389);
// Get date right now
const date = new Date();
// Calculation paramaters
const param = Adhan.CalculationMethod.MuslimWorldLeague();
param.madhab = Adhan.Madhab.Shafi;
param.fajrAngle = 13;
param.highLatitudeRule = Adhan.HighLatitudeRule.TwilightAngle;
param.adjustments.dhuhr = 4;

// Get prayertimes
const prayerTimes = new Adhan.PrayerTimes(coordinates, date, param);
Adhan.Date.formattedTime(prayerTimes.fajr);
Adhan.Date.formattedTime(prayerTimes.asr, 20, '24h');
