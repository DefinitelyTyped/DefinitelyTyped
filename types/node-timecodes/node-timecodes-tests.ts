import timecode, { fromSeconds, toSeconds, TimecodeOptions } from 'node-timecodes';

type Option = TimecodeOptions;

timecode.fromSeconds(1);
timecode.fromSeconds(1, { frameRate: 30, ms: true });
fromSeconds(1);
timecode.toSeconds('00:01:00:00');
timecode.toSeconds('00:01:00:00', 30);
toSeconds('00:01:00:00', 30);
timecode.constants.framerate;
