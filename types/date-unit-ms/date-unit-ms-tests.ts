import * as dateUnitMs from "date-unit-ms";

dateUnitMs.ms; // $ExpectType 1
dateUnitMs.second; // $ExpectType 1000
dateUnitMs.minute; // $ExpectType 60000
dateUnitMs.hour; // $ExpectType 3600000
dateUnitMs.day; // $ExpectType 86400000
dateUnitMs.week; // $ExpectType 604800000
