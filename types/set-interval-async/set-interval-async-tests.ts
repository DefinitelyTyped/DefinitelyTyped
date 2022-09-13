import {
  setIntervalAsync as setIntervalAsyncD1,
  clearIntervalAsync as clearIntervalAsyncD1,
  SetIntervalAsyncError as SetIntervalAsyncErrorD1
} from 'set-interval-async/dynamic';

import {
  setIntervalAsync as setIntervalAsyncF1,
  clearIntervalAsync as clearIntervalAsyncF1,
  SetIntervalAsyncError as SetIntervalAsyncErrorF1
} from 'set-interval-async/fixed';

import {
  setIntervalAsync as setIntervalAsyncL1,
  clearIntervalAsync as clearIntervalAsyncL1,
  SetIntervalAsyncError as SetIntervalAsyncErrorL1
} from 'set-interval-async/legacy';

import {
  dynamic,
  fixed,
  legacy,
  clearIntervalAsync,
  SetIntervalAsyncError,
  SetIntervalAsyncTimer
} from 'set-interval-async';
const { setIntervalAsync: setIntervalAsyncD2 } = dynamic;
const { setIntervalAsync: setIntervalAsyncF2 } = fixed;
const { setIntervalAsync: setIntervalAsyncL2 } = legacy;

const handler = (...args: any[]) => args[0];
const asyncHandler = async (...args: any[]) => args[0];
const interval = 10;
const args: any[] = ['', 0, {}, null];
let timer: SetIntervalAsyncTimer;

(async () => {
  timer = setIntervalAsyncD1(handler, interval, ...args);
  await clearIntervalAsyncD1(timer);
  timer = setIntervalAsyncD1(asyncHandler, interval, ...args);
  await clearIntervalAsyncD1(timer);
  try {
    setIntervalAsyncD1(asyncHandler, 0);
  } catch (err) {
    if (err instanceof SetIntervalAsyncErrorD1) {
      // As expected.
    } else {
      throw new SetIntervalAsyncErrorD1();
    }
  }
})();

(async () => {
  timer = setIntervalAsyncF1(handler, interval, ...args);
  await clearIntervalAsyncF1(timer);
  timer = setIntervalAsyncF1(asyncHandler, interval, ...args);
  await clearIntervalAsyncF1(timer);
  try {
    setIntervalAsyncF1(asyncHandler, 0);
  } catch (err) {
    if (err instanceof SetIntervalAsyncErrorF1) {
      // As expected.
    } else {
      throw new SetIntervalAsyncErrorF1();
    }
  }
})();

(async () => {
  timer = setIntervalAsyncL1(handler, interval, ...args);
  await clearIntervalAsyncL1(timer);
  timer = setIntervalAsyncL1(asyncHandler, interval, ...args);
  await clearIntervalAsyncL1(timer);
  try {
    setIntervalAsyncL1(asyncHandler, 0);
  } catch (err) {
    if (err instanceof SetIntervalAsyncErrorL1) {
      // As expected.
    } else {
      throw new SetIntervalAsyncErrorL1();
    }
  }
})();

(async () => {
  timer = setIntervalAsyncD2(handler, interval, ...args);
  await clearIntervalAsync(timer);
  timer = setIntervalAsyncD2(asyncHandler, interval, ...args);
  await clearIntervalAsync(timer);
  timer = setIntervalAsyncF2(handler, interval, ...args);
  await clearIntervalAsync(timer);
  timer = setIntervalAsyncF2(asyncHandler, interval, ...args);
  await clearIntervalAsync(timer);
  timer = setIntervalAsyncL2(handler, interval, ...args);
  await clearIntervalAsync(timer);
  timer = setIntervalAsyncL2(asyncHandler, interval, ...args);
  await clearIntervalAsync(timer);
  try {
    setIntervalAsyncD2(asyncHandler, 0);
  } catch (err) {
    if (err instanceof SetIntervalAsyncError) {
      // As expected.
    } else {
      throw new SetIntervalAsyncError();
    }
  }
})();
