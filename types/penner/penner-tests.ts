import * as penner from 'penner';

const t = 0; // current time (ms, s, frames, ...)
const b = 10; // initial value
const c = 100; // change in value (final value - initial value)
const d = 2; // duration (same units as t)
const value: number = penner.easeOutQuad(t, b, c, d);
