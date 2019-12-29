import lolex = require("lolex");

const global: lolex.LolexWithContext = lolex.withGlobal({});
const timers: lolex.GlobalTimers<lolex.TimerId> = lolex.timers;

const lolexTimeout: lolex.TimerId = timers.setTimeout(() => {}, 42);
const lolexInterval: lolex.TimerId = timers.setInterval(() => {}, 42);
const lolexImmediate: lolex.TimerId = timers.setImmediate(() => {});
const lolexDate: Date = new timers.Date();

timers.clearTimeout(lolexTimeout);
timers.clearInterval(lolexInterval);
timers.clearImmediate(lolexImmediate);

let browserClock: lolex.BrowserClock = lolex.createClock() as lolex.BrowserClock;
let nodeClock: lolex.NodeClock = lolex.createClock() as lolex.NodeClock;

browserClock = lolex.createClock<lolex.BrowserClock>();
nodeClock = lolex.createClock<lolex.NodeClock>();

lolex.createClock<lolex.BrowserClock>(7);
lolex.createClock<lolex.BrowserClock>(new Date());
lolex.createClock<lolex.BrowserClock>(7, 9001);
lolex.createClock<lolex.BrowserClock>(new Date(), 9001);

lolex.createClock<lolex.NodeClock>(7);
lolex.createClock<lolex.NodeClock>(new Date());
lolex.createClock<lolex.NodeClock>(7, 9001);
lolex.createClock<lolex.NodeClock>(new Date(), 9001);

const browserInstalledClock = lolex.install<lolex.BrowserClock>({
	advanceTimeDelta: 20,
	loopLimit: 10,
	now: 0,
	shouldAdvanceTime: true,
	target: {},
	toFake: ["setTimeout", "nextTick", "hrtime"]
});

const nodeInstalledClock = lolex.install<lolex.NodeClock>({
	advanceTimeDelta: 20,
	loopLimit: 10,
	now: new Date(0),
	shouldAdvanceTime: true,
	target: {},
	toFake: ["setTimeout", "nextTick", "hrtime"]
});

const browserNow: number = browserClock.now;
const browserTimeouts: Object = browserClock.timeouts;
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
const nodeTimeout: lolex.NodeTimer = nodeClock.setTimeout(() => {}, 7);
const nodeInterval: lolex.NodeTimer = nodeClock.setInterval(() => {}, 7);
const nodeImmediate: lolex.NodeTimer = nodeClock.setImmediate(() => {});
const nodeAnimationFrame: lolex.NodeTimer = nodeClock.requestAnimationFrame(() => {});
const nodeIdleCallback: lolex.NodeTimer = nodeClock.requestIdleCallback(() => {});
const nodeIdleCallbackWithTimeout: lolex.NodeTimer = nodeClock.requestIdleCallback(() => {}, 7);

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
browserClock.tick("08");

nodeClock.tick(7);
nodeClock.tick("08:03");

browserClock.tickAsync(7).then(() => {});
browserClock.tickAsync("08").then(() => {});

nodeClock.tickAsync(7).then(() => {});
nodeClock.tickAsync("08:03").then(() => {});

browserClock.next();
nodeClock.next();

browserClock.nextAsync().then(() => {});
nodeClock.nextAsync().then(() => {});

browserClock.reset();
nodeClock.reset();

browserClock.runAll();
nodeClock.runAll();

browserClock.runAllAsync().then(() => {});
nodeClock.runAllAsync().then(() => {});

nodeClock.runMicrotasks();

browserClock.runToFrame();
nodeClock.runToFrame();

browserClock.runToLast();
nodeClock.runToLast();

browserClock.runToLastAsync().then(() => {});
nodeClock.runToLastAsync().then(() => {});

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
let installedClock: lolex.InstalledClock;
installedClock = nodeInstalledClock;
installedClock = browserInstalledClock;
