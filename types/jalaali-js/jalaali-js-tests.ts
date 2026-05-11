import {
    d2g,
    d2j,
    g2d,
    isLeapJalaaliYear,
    isValidJalaaliDate,
    j2d,
    jalaaliMonthLength,
    jalaaliToDateObject,
    jalaaliWeek,
    jalCal,
    toGregorian,
    toJalaali,
} from "jalaali-js";

toJalaali(2016, 4, 11); // { jy: 1395, jm: 1, jd: 23 }

toJalaali(new Date(2016, 3, 11)); // { jy: 1395, jm: 1, jd: 23 }

toGregorian(1395, 1, 23); // { gy: 2016, gm: 4, gd: 11 }

isValidJalaaliDate(1394, 12, 30); // false
isValidJalaaliDate(1395, 12, 30); // true

isLeapJalaaliYear(1394); // false
isLeapJalaaliYear(1395); // true

jalaaliMonthLength(1394, 12); // 29
jalaaliMonthLength(1395, 12); // 30

jalCal(1390); // { leap: 3, gy: 2011, march: 21 }
jalCal(1391); // { leap: 0, gy: 2012, march: 20 }
jalCal(1392); // { leap: 1, gy: 2013, march: 21 }
jalCal(1393); // { leap: 2, gy: 2014, march: 21 }
jalCal(1394); // { leap: 3, gy: 2015, march: 21 }
jalCal(1395); // { leap: 0, gy: 2016, march: 20 }

j2d(1395, 1, 23); // 2457490

d2j(2457490); // { jy: 1395, jm: 1, jd: 23 }

g2d(2016, 4, 11); // 2457490

d2g(2457490); // { gy: 2016, gm: 4, gd: 11 }

jalaaliToDateObject(1400, 4, 30, 0, 0, 0, 0); // new Date(2021, 6, 21)

jalaaliWeek(1400, 4, 30); // { saturday: { jy: 1400, jm: 4, jd: 26 }, friday: { jy: 1400, jm: 5, jd: 1 } }
