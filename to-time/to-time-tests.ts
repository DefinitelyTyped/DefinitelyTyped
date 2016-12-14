/// <reference path="index.d.ts" />

import * as toTime from 'to-time';

const framed: toTime.TimeFrame = toTime('36930 hours');
const framedArray: toTime.TimeFrame[] = [1,2,3,4,5,6,7,8,9].map(toTime.fromYears);

const humanized: string = toTime('36930 hours').addDays(5).humanize();
const humanized2: string = toTime('5000 years').addWeeks(10).addHours(50).humanize();

const initializedWithSeconds: toTime.TimeFrame = toTime.fromSeconds(365*24*60*60);
const initializedWithMinutes: toTime.TimeFrame = toTime.fromMinutes(365*24*60);
const initializedWithHours: toTime.TimeFrame = toTime.fromHours(365*24);
const initializedWithDays: toTime.TimeFrame = toTime.fromDays(365);
const initializedWithWeeks: toTime.TimeFrame = toTime.fromWeeks(365/7);
const initializedWithYears: toTime.TimeFrame = toTime.fromYears(1);