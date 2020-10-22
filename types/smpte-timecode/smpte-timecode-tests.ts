import * as Timecode from 'smpte-timecode';

let t: Timecode.TimecodeInstance;
let t2: Timecode.TimecodeInstance;

// https://github.com/CrystalComputerCorp/smpte-timecode#usage
t = Timecode('00:15:10;03');
t.add('00:02:30;00');
t.subtract(100);

// https://github.com/CrystalComputerCorp/smpte-timecode#creating-timecode-objects
t = new Timecode('00:01:00:00');
t = new Timecode(800, 29.97, true);
t = new Timecode(new Date());

// https://github.com/CrystalComputerCorp/smpte-timecode/blob/master/test/smpte-timecode-test.js
Timecode(100);
Timecode(3);
Timecode(15);
Timecode(323.443);

t = new Timecode('12:33:44;12');
t.hours;
t.minutes;
t.seconds;
t.frames;
t.dropFrame;
t.frameRate;

t = new Timecode({ hours: 12, minutes: 34, seconds: 56, frames: 2 });
Timecode(1);
Timecode(1, 29.97);
Timecode(1, 59.94);
Timecode(1, 25);

// https://github.com/CrystalComputerCorp/smpte-timecode/blob/84cfe22eb217f1a60cb7a7dfc1dde0353121073c/test/smpte-timecode-test.js#L75
Timecode('00:10:00;00').frameCount;
Timecode('00:10:00;00', 59.94).frameCount;
Timecode('10:00:00;00').frameCount;
Timecode('10:00:00;00', 59.94).frameCount;
Timecode('00:02:00;02');
Timecode('00:02:00;04', 59.94);
Timecode('00:01:59;29').frameCount;
Timecode('00:01:59;59', 59.94).frameCount;
Timecode(17982, 29.97, true).toString();
Timecode(1078920, 29.97, true).toString();
Timecode(3597, 29.97, true).toString();
Timecode(17982 * 2, 59.94, true).toString();
Timecode(1078920 * 2, 59.94, true).toString();
Timecode(3597 * 2 + 1, 59.94, true).toString();

// https://github.com/CrystalComputerCorp/smpte-timecode/blob/84cfe22eb217f1a60cb7a7dfc1dde0353121073c/test/smpte-timecode-test.js#L94
Timecode('00:10:00:00', 25).frameCount;
Timecode('10:00:00:00', 25).frameCount;
Timecode('00:02:00:00', 25).frameCount;
Timecode('00:01:59:24', 25).frameCount;
Timecode(15000, 25).toString();
Timecode(900000, 25).toString();
Timecode(2999, 25).toString();

// https://github.com/CrystalComputerCorp/smpte-timecode/blob/84cfe22eb217f1a60cb7a7dfc1dde0353121073c/test/smpte-timecode-test.js#L105
Timecode('12:34:56;23').toString();
Timecode('01:02:03;04').toString();
Timecode('12:34:56;57', 59.94).toString();
Timecode('01:02:03;04', 59.94).toString();
Timecode('12:34:56;23').toString('field');
Timecode('01:02:03;04').toString('field');
Timecode('12:34:56;57', 59.94).toString('field');
Timecode('01:02:03;04', 59.94).toString('field');

// https://github.com/CrystalComputerCorp/smpte-timecode/blob/84cfe22eb217f1a60cb7a7dfc1dde0353121073c/test/smpte-timecode-test.js#L139
t = Timecode('01:23:45;06');
t.add(60).toString();
Timecode('23:59:40;00')
  .add(Timecode('00:00:21;00'))
  .toString();

t = Timecode('01:23:45;06');
t.subtract(60).toString();

Timecode('01:23:45;06')
  .add('01:23:13;01')
  .toString();

t = Timecode('00:01:15;00');
t2 = Timecode('00:01:15;00');
t2.add(0);
t.frameCount;
t2.add(12345);
t.frameCount;

new Timecode().subtract(new Timecode('23:30:00;00'), 1).toString();
new Timecode('01:00:00;00').subtract(new Timecode('23:30:00;00'), 2).toString();
new Timecode('00:00:00:00', 25, false).add('00:01:00:00').frameCount;

// https://github.com/CrystalComputerCorp/smpte-timecode/blob/84cfe22eb217f1a60cb7a7dfc1dde0353121073c/test/smpte-timecode-test.js#L170
t = new Timecode(new Date(0, 0, 0, 1, 2, 13, 200), 29.97, true);
t.frameCount;
t.toString();

t2 = new Timecode(new Date(0, 0, 0, 10, 40, 15, 520), 25, false);
t2.frameCount;
t2.toString();

const d: Date = Timecode('01:23:45;10').toDate();
d.getHours();
d.getMinutes();
d.getSeconds();
d.getMilliseconds();
