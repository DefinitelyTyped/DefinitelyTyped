import Holidays from 'date-holidays';

const hd = new Holidays('');
hd.init('US');

hd.isHoliday(new Date('2019-06-04')); // $ExpectType Holiday
