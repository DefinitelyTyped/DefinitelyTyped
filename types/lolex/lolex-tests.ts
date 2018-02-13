import lolex = require("lolex");

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

lolex.install<lolex.BrowserClock>({
	advanceTimeDelta: 20,
	loopLimit: 10,
	now: 0,
	shouldAdvanceTime: true,
	target: {},
	toFake: ["setTimeout", "nextTick", "hrtime"]
});

const browserNow: number = browserClock.now;
const browserDate: Date = new browserClock.Date();

const nodeNow: number = nodeClock.now;
const nodeDate: Date = new nodeClock.Date();

const browserTimeout: number = browserClock.setTimeout(() => {}, 7);
const browserInterval: number = browserClock.setInterval(() => {}, 7);
const browserImmediate: number = browserClock.setImmediate(() => {});
const nodeTimeout: lolex.NodeTimer = nodeClock.setTimeout(() => {}, 7);
const nodeInterval: lolex.NodeTimer = nodeClock.setInterval(() => {}, 7);
const nodeImmediate: lolex.NodeTimer = nodeClock.setImmediate(() => {});

browserClock.clearTimeout(browserTimeout);
browserClock.clearInterval(browserInterval);
browserClock.clearImmediate(browserImmediate);

nodeClock.clearTimeout(nodeTimeout);
nodeClock.clearInterval(nodeInterval);
nodeClock.clearImmediate(nodeImmediate);

browserClock.tick(7);
browserClock.tick("08");

nodeClock.tick(7);
nodeClock.tick("08");

browserClock.next();
nodeClock.next();

browserClock.runAll();
nodeClock.runAll();

browserClock.runToLast();
nodeClock.runToLast();

browserClock.setSystemTime();
browserClock.setSystemTime(7);
browserClock.setSystemTime(new Date());

nodeClock.setSystemTime();
nodeClock.setSystemTime(7);
nodeClock.setSystemTime(new Date());

nodeClock.nextTick(() => undefined);

browserClock.uninstall();
nodeClock.uninstall();
