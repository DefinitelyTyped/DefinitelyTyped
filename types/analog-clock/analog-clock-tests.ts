import { AnalogClock } from "analog-clock";

// Create an AnalogClock instance
const analogClockInstance = new AnalogClock();

// Append the instance to the document body
document.body.appendChild(analogClockInstance);

// Start and stop the clock
analogClockInstance.start();
analogClockInstance.stop();

// Set and get time, offset, and dark properties
analogClockInstance.time = 0;
analogClockInstance.offset = 0;
analogClockInstance.dark = true;

// $ExpectType number
const time = analogClockInstance.time || 0;

// $ExpectType number
const offset = analogClockInstance.offset || 0;

// Set invalid types for time, offset, and dark properties
// @ts-expect-error
analogClockInstance.time = "invalid";

// @ts-expect-error
analogClockInstance.offset = "invalid";

// @ts-expect-error
analogClockInstance.dark = "invalid";
