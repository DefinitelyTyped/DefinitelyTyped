import timeConstants = require('es-abstract/helpers/timeConstants');

timeConstants.HoursPerDay; // $ExpectType 24
timeConstants.MinutesPerHour; // $ExpectType 60
timeConstants.SecondsPerMinute; // $ExpectType 60
timeConstants.msPerDay; // $ExpectType 86400000
timeConstants.msPerHour; // $ExpectType 3600000
timeConstants.msPerMinute; // $ExpectType 60000
timeConstants.msPerSecond; // $ExpectType 1000
