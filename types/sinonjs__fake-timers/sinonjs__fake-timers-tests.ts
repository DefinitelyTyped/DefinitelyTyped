import * as FakeTimers from '@sinonjs/fake-timers';

const global: FakeTimers.FakeTimerWithContext = FakeTimers.withGlobal({});
const timers: FakeTimers.GlobalTimers<FakeTimers.TimerId> = FakeTimers.timers;

const fakeTimeout: FakeTimers.TimerId = timers.setTimeout(() => {}, 42);
const fakeInterval: FakeTimers.TimerId = timers.setInterval(() => {}, 42);
const fakeImmediate: FakeTimers.TimerId = timers.setImmediate(() => {});
const fakeDate: Date = new timers.Date();

timers.clearTimeout(fakeTimeout);
timers.clearInterval(fakeInterval);
timers.clearImmediate(fakeImmediate);

let browserClock: FakeTimers.BrowserClock = FakeTimers.createClock() as FakeTimers.BrowserClock;
let nodeClock: FakeTimers.NodeClock = FakeTimers.createClock() as FakeTimers.NodeClock;

browserClock = FakeTimers.createClock() as FakeTimers.BrowserClock;
nodeClock = FakeTimers.createClock() as FakeTimers.NodeClock;

FakeTimers.createClock(7);
FakeTimers.createClock(new Date());
FakeTimers.createClock(7, 9001);
FakeTimers.createClock(new Date(), 9001);

const browserInstalledClock = FakeTimers.install({
    advanceTimeDelta: 20,
    loopLimit: 10,
    now: 0,
    shouldAdvanceTime: true,
    target: {},
    toFake: ['setTimeout', 'nextTick', 'hrtime'],
}) as FakeTimers.BrowserClock & FakeTimers.InstalledClock;

const nodeInstalledClock = FakeTimers.install({
    advanceTimeDelta: 20,
    loopLimit: 10,
    now: new Date(0),
    shouldAdvanceTime: true,
    target: {},
    toFake: ['setTimeout', 'nextTick', 'hrtime'],
}) as FakeTimers.NodeClock & FakeTimers.InstalledClock;

const browserNow: number = browserClock.now;
const browserTimeouts: object = browserClock.timeouts;
const browserLoopLimit: number = browserClock.loopLimit;
const browserDate: Date = new browserClock.Date();
const browserPerformanceNow: number = browserClock.performance.now();

const nodeNow: number = nodeClock.now;
const nodeDate: Date = new nodeClock.Date();

const browserTimeout: number = browserClock.setTimeout(() => {}, 7);
const browserInterval: number = browserClock.setInterval(() => {}, 7);
const browserImmediate: number = browserClock.setImmediate(() => {});
const browserAnimationFrame: number = browserClock.requestAnimationFrame(() => {});
const browserIdleCallback: number = browserClock.requestIdleCallback(() => {});
const browserIdleCallbackWithTimeout: number = browserClock.requestIdleCallback(() => {}, 7);
const nodeTimeout: FakeTimers.NodeTimer = nodeClock.setTimeout(() => {}, 7);
const nodeInterval: FakeTimers.NodeTimer = nodeClock.setInterval(() => {}, 7);
const nodeImmediate: FakeTimers.NodeTimer = nodeClock.setImmediate(() => {});
const nodeAnimationFrame: FakeTimers.NodeTimer = nodeClock.requestAnimationFrame(() => {});
const nodeIdleCallback: FakeTimers.NodeTimer = nodeClock.requestIdleCallback(() => {});
const nodeIdleCallbackWithTimeout: FakeTimers.NodeTimer = nodeClock.requestIdleCallback(() => {}, 7);

nodeTimeout.ref();
nodeTimeout.unref();

browserClock.clearTimeout(browserTimeout);
browserClock.clearInterval(browserInterval);
browserClock.clearImmediate(browserImmediate);
browserClock.cancelAnimationFrame(browserAnimationFrame);
browserClock.cancelIdleCallback(browserIdleCallback);
browserClock.cancelIdleCallback(browserIdleCallbackWithTimeout);

nodeClock.clearTimeout(nodeTimeout);
nodeClock.clearInterval(nodeInterval);
nodeClock.clearImmediate(nodeImmediate);
nodeClock.cancelAnimationFrame(nodeAnimationFrame);
nodeClock.cancelIdleCallback(nodeIdleCallback);
nodeClock.cancelIdleCallback(nodeIdleCallbackWithTimeout);

browserClock.tick(7);
browserClock.tick('08');

nodeClock.tick(7);
nodeClock.tick('08:03');

browserClock.tickAsync(7).then(val => val.toExponential());
browserClock.tickAsync('08').then(val => val.toExponential());

nodeClock.tickAsync(7).then(val => val.toExponential());
nodeClock.tickAsync('08:03').then(val => val.toExponential());

browserClock.next();
nodeClock.next();

browserClock.nextAsync().then(val => val.toExponential());
nodeClock.nextAsync().then(val => val.toExponential());

browserClock.reset();
nodeClock.reset();

browserClock.runAll();
nodeClock.runAll();

browserClock.runAllAsync().then(val => val.toExponential());
nodeClock.runAllAsync().then(val => val.toExponential());

nodeClock.runMicrotasks();

browserClock.runToFrame();
nodeClock.runToFrame();

browserClock.runToLast();
nodeClock.runToLast();

browserClock.runToLastAsync().then(val => val.toExponential());
nodeClock.runToLastAsync().then(val => val.toExponential());

browserClock.setSystemTime();
browserClock.setSystemTime(7);
browserClock.setSystemTime(new Date());

nodeClock.setSystemTime();
nodeClock.setSystemTime(7);
nodeClock.setSystemTime(new Date());

nodeClock.nextTick(() => undefined);
nodeClock.queueMicrotask(() => {});

const browserTimersCount: number = browserClock.countTimers();
const nodeTimersCount: number = nodeClock.countTimers();

let [secs, nanos] = nodeClock.hrtime([0, 0]);
[secs, nanos] = nodeClock.hrtime();

// shows that typescript successfully infer the return values as numbers.
secs.toFixed();
nanos.toExponential();

browserInstalledClock.performance.now();
nodeInstalledClock.nextTick(() => {});

browserInstalledClock.uninstall();
nodeInstalledClock.uninstall();

// Clocks should be typed to have unbound method signatures that can be passed around
const { clearTimeout } = browserClock;
clearTimeout(0);

// TClock of InstalledClock<TClock> is optional.
let installedClock: FakeTimers.InstalledClock;
installedClock = nodeInstalledClock;
installedClock = browserInstalledClock;
