import WAAClock = require('waaclock');
import { Event } from 'waaclock';

const ctx = new AudioContext();

// Base constructor
const clock = new WAAClock(ctx);
const eventCallback = (event: Event) => {};

clock.start();

const timeoutEvent = clock.setTimeout(eventCallback, 1000);
timeoutEvent.tolerance({ early: 3 }).repeat(2).schedule(3000);
timeoutEvent.isRepeated();
timeoutEvent.clear();

const scheduledEvent = clock.callbackAtTime(eventCallback, 1000);
scheduledEvent.tolerance({ early: 3 }).repeat(2).schedule(3000);
scheduledEvent.isRepeated();
scheduledEvent.timeStretch(2, 1.3);
scheduledEvent.clear();

clock.timeStretch(2, [timeoutEvent, scheduledEvent], 1.3);

clock.stop();

// constructor with options
new WAAClock(ctx, { toleranceEarly: 10, toleranceLate: 8 });
