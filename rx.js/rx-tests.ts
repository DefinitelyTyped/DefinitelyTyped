///<reference path="rx.js.d.ts"/>

// Disposable
var d: Rx.IDisposable = new Rx.Disposable(() => { });
d = Rx.Disposable.create(() => { });
d = Rx.Disposable.empty;
d.dispose();

// CompositeDisposable
var cd = new Rx.CompositeDisposable(d, d, d);
d = cd;
cd = new Rx.CompositeDisposable([d, d]);
cd.add(d);
cd.clear();
var b: boolean = cd.contains(d);
var da: Rx.IDisposable[] = cd.toArray();
cd.remove(d);

// SingleAssignmentDisposable
var sad = new Rx.SingleAssignmentDisposable();
d = sad;
sad.setDisposable(d);
d = sad.getDisposable();
b = sad.isDisposed;

// SerialDisposable
var sd = new Rx.SerialDisposable();
d = sd;
sd.setDisposable(d);
d = sd.getDisposable();
b = sd.isDisposed;

// RefCountDisposable
var rcd = new Rx.RefCountDisposable(d);
d = rcd;
d = rcd.getDisposable();
b = rcd.isDisposed;

// IScheduler
var s: Rx.IScheduler;
var n: number = s.now();
s = s.catch(ex => true);
s = s.catchException(ex => true);
d = s.schedule(() => { });
d = s.scheduleWithState(1,
	(sh, s) => sh.scheduleWithAbsoluteAndState(s + 1, 100,
		(sh, s) => sh.scheduleWithRelativeAndState(s + 1, 200,
			(sh, s) => sh.scheduleRecursiveWithState(s + 1,
				(s, self) => self(s + 1)))));
d = s.scheduleWithAbsolute(100, () => { });
d = s.scheduleWithRelative(100, () => { });
d = s.scheduleRecursive(self => self());
d = s.scheduleRecursiveWithAbsolute(100, self => self(200));
d = s.scheduleRecursiveWithRelative(100, self => self(200));
d = s.schedulePeriodic(100, () => { });
d = s.schedulePeriodicWithState('a', 100, s => s + 'b');

// ICurrentThreadScheduler
Rx.Scheduler.currentThread.scheduleRequired();
Rx.Scheduler.currentThread.ensureTrampoline(() => Rx.Disposable.empty);

// Observer
var o: Rx.Observer<number> = Rx.Observer.create<number>();
o = Rx.Observer.create<number>(i => { });
o = Rx.Observer.create<number>(i => { }, err => { });
o = Rx.Observer.create<number>(i => { }, err => { }, () => { });
o = Rx.Observer.fromNotifier<number>(n => { });

o.onNext(10);
o.onError(new Error());
o.onCompleted();

// Observable static methods tests

var ns: Rx.Observable<number> = Rx.Observable.create<number>(observer => { });
var ss: Rx.Observable<string> = Rx.Observable.create<string>(observer => (() => { }));
var bs: Rx.Observable<boolean> = Rx.Observable.createWithDisposable<boolean>(observer => Rx.Disposable.empty);

ns = Rx.Observable.defer(() => ns);

ss = Rx.Observable.empty<string>();
bs = Rx.Observable.empty<boolean>(Rx.Scheduler.currentThread);

ns = Rx.Observable.fromArray([0, 3, -7, 18]);
ss = Rx.Observable.fromArray(['a', 'ab', 'abc'], Rx.Scheduler.timeout);

ns = Rx.Observable.generate(0, i => i < 100, i => i + 1, i => i * i);
ns = Rx.Observable.generate(0, i => i < 100, i => i + 1, i => i * i, Rx.Scheduler.timeout);

bs = Rx.Observable.never<boolean>();

ns = Rx.Observable.range(0, 100);
ns = Rx.Observable.range(0, 100, Rx.Scheduler.timeout);

ns = Rx.Observable.repeat(0, 100);
ns = Rx.Observable.repeat(0, 100, Rx.Scheduler.timeout);

ss = Rx.Observable.return('a');
ss = Rx.Observable.return('a', Rx.Scheduler.timeout);
ss = Rx.Observable.returnValue('a');
ss = Rx.Observable.returnValue('a', Rx.Scheduler.timeout);

bs = Rx.Observable.throw<boolean>(new Error("error"));
bs = Rx.Observable.throw<boolean>(new Error("error"), Rx.Scheduler.timeout);
bs = Rx.Observable.throwException<boolean>(new Error("error"));
bs = Rx.Observable.throwException<boolean>(new Error("error"), Rx.Scheduler.timeout);

bs = Rx.Observable.using(() => d, d => Rx.Observable.return(true));

ss = Rx.Observable.amb(ss, ss);
//ss = Rx.Observable.amb([ss, ss]);	// TypeScript bug https://typescript.codeplex.com/workitem/2011

ss = Rx.Observable.catch(ss, ss, ss);
ss = Rx.Observable.catchException(ss, ss, ss);
//ss = Rx.Observable.catch([ss, ss, ss]);	// TypeScript bug https://typescript.codeplex.com/workitem/2011
//ss = Rx.Observable.catchException([ss, ss, ss]);	// TypeScript bug https://typescript.codeplex.com/workitem/2011

ss = Rx.Observable.concat(ss, ss, ss);
//ss = Rx.Observable.concat([ss, ss, ss]);	// TypeScript bug https://typescript.codeplex.com/workitem/2011

ss = Rx.Observable.merge(ss, ss, ss);
//ss = Rx.Observable.merge([ss, ss, ss]);	// TypeScript bug https://typescript.codeplex.com/workitem/2011
ss = Rx.Observable.merge(s, ss, ss, ss);
//ss = Rx.Observable.merge(s, [ss, ss, ss]);	// TypeScript bug https://typescript.codeplex.com/workitem/2011

ss = Rx.Observable.onErrorResumeNext(ss, ss, ss);
//ss = Rx.Observable.onErrorResumeNext([ss, ss, ss]);	// TypeScript bug https://typescript.codeplex.com/workitem/2011

ns = Rx.Observable.zip(ss, [ss, ss, ss], (s, ss2) => { ss = ss2; return s.charCodeAt(0); });
ns = Rx.Observable.zip(ss, bs, (s, b) => s.length + (b ? 1 : 0));
ns = Rx.Observable.zip(ss, bs, ns, (s, b, n) => s.length + (b ? 1 : 0) + n);
ns = Rx.Observable.zip(ss, bs, ns, ns, (s, b, n, n2) => s.length + (b ? 1 : 0) + n + n2);
ns = Rx.Observable.zip(ss, bs, ns, ns, ss, (s, b, n, n2, s2) => s.length + (b ? 1 : 0) + n + n2 + s2.charCodeAt(0));

var sas: Rx.Observable<string[]> = Rx.Observable.zipArray(ss, ss);


// Observable instance methods

d = ns.subscribe(o);
d = ns.subscribe(n => n + 1, err => { }, () => { });
d = ns.subscribe(n => n + 1, err => { });
d = ns.subscribe();

sas = ss.toArray();

ss.observeOn(s);
ns.subscribeOn(s);

ss = ss.amb(ss);

ss = ss.catch(err => ss);
ss = ss.catchException(err => ss);
ss = ss.catch(ss);
ss = ss.catchException(ss);

ns = ss.combineLatest([ns, ns, ns], (s, ...ns) => s.charCodeAt(0) + ns[0]);
ns = ss.combineLatest(ns, (s, n) => s.charCodeAt(0) + n);
ns = ss.combineLatest(ns, ns, (s, n, n2) => s.charCodeAt(0) + n + n2);
ns = ss.combineLatest(ns, ns, bs, (s, n, n2, b) => s.charCodeAt(0) + n + n2 + (b ? 1 : 0));
ns = ss.combineLatest(ns, ns, bs, ss, (s, n, n2, b, s2) => s.charCodeAt(0) + n + n2 + (b ? 1 : 0) + s2.charCodeAt(0));

ss = ss.concat(ss, ss);
ss = ss.concat([ss, ss]);

var sss: Rx.Observable<Rx.Observable<string>>;
ss = sss.concatAll();
ss = sss.concatObservable();

ss = ss.merge(2);
ss = ss.merge(ss);

ss = sss.mergeAll();
ss = sss.mergeObservable();

ss = ss.onErrorResumeNext(ss);

ss = ss.skipUntil(ns);

ss = ss.takeUntil(ns);

ss = sss.switchLatest();

ns = ss.zip([ns, ns], (s, ns2) => { ns = ns2; return s.charCodeAt(0); });

ns = ss.zip(ns, (s, n) => s.charCodeAt(0) + n);
ns = ss.zip(ns, bs, (s, n, b) => s.charCodeAt(0) + n + (b?1:0));
ns = ss.zip(ns, bs, ss, (s, n, b, s2) => s.charCodeAt(0) + n + (b?1:0) + s2.charCodeAt(0));
ns = ss.zip(ns, bs, ss, ns, (s, n, b, s2, n2) => s.charCodeAt(0) + n + (b?1:0) + s2.charCodeAt(0) + n2);

ss = ss.asObservable();

sas = ss.bufferWithCount(2);
sas = ss.bufferWithCount(2, 1);

var notifications: Rx.Observable<Rx.Notification<number>>;

ns = notifications.dematerialize<number>();

ns = ns.distinctUntilChanged();
ns = ns.distinctUntilChanged(n => (n + 1).toString());
ns = ns.distinctUntilChanged(n => (n + 1).toString(), (s1, s2) => s1.charCodeAt(0) === s2.charCodeAt(0));
ns = ns.distinctUntilChanged(undefined, (n1, n2) => (n1 + 1) === (n2 + 1));

ns = ns.do(o);
ns = ns.doAction(o);
ns = ns.do(n => n + 1, err => { }, () => { });
ns = ns.doAction(n => n + 1, err => { }, () => { });
ns = ns.do(n => n + 1, err => { });
ns = ns.doAction(n => n + 1, err => { });
ns = ns.do();
ns = ns.doAction();

ns = ns.finally(() => { });
ns = ns.finallyAction(() => { });

ss = ss.ignoreElements();

notifications = ns.materialize();

ss = ss.repeat();
ss = ss.repeat(10);

ss = ss.retry();
ss = ss.retry(10);

ns = ss.scan(0, (sum, s) => sum + s.charCodeAt(0));
ns = ns.scan((sum, n) => sum + n);

ns = ns.skipLast(10);

ns = ns.startWith(10, 20);
ns = ns.startWith(s, 10, 20);

ns = ns.takeLast(2);
ns = ns.takeLast(2, s);

sas = ss.takeLastBuffer(5);

sss = ss.windowWithCount(2);
sss = ss.windowWithCount(2, 3);

ns = ns.defaultIfEmpty();
ns = ns.defaultIfEmpty(0);

ns = ns.distinct(n => (n + 1), n => (n + 1).toString());
ns = ns.distinct(undefined, n => (n + 1).toString());
ns = ns.distinct(n => (n + 1).toString());
ns = ns.distinct();

var gnss: Observable<GroupedObservable<number, string>>;
var group: GroupedObservable<number, string>;
ss = group;
n = group.key;

gnss = ss.groupBy(s => s.charCodeAt(0));
gnss = ss.groupBy(s => s.charCodeAt(0), s => s + "!");
gnss = ss.groupBy(s => s.charCodeAt(0), s => s + "!", k => (k + 1).toString());
gnss = ss.groupBy(s => s.charCodeAt(0), undefined, k => (k + 1).toString());

gnss = ss.groupByUntil(s => s.charCodeAt(0), s => s + "!", g => ns, k => (k + 1).toString());
gnss = ss.groupByUntil(s => s.charCodeAt(0), undefined, g => ns, k => (k + 1).toString());

ns = ss.select(s => s.charCodeAt(0), ns);
ns = ss.map(s => s.charCodeAt(0), ns);
ns = ss.select(s => s.charCodeAt(0));
ns = ss.map(s => s.charCodeAt(0));
ns = ss.select((s, index) => s.charCodeAt(0) + index);
ns = ss.map((s, index) => s.charCodeAt(0) + index);
ns = ss.select((s, index) => s.charCodeAt(0) + index, ns);
ns = ss.map((s, index) => s.charCodeAt(0) + index, ns);
ns = ss.select((s, index, source) => { ss = source; return; s.charCodeAt(0) + index; });
ns = ss.map((s, index, source) => { ss = source; return; s.charCodeAt(0) + index; });
ns = ss.select((s, index, source) => { ss = source; return; s.charCodeAt(0) + index; }, ns);
ns = ss.map((s, index, source) => { ss = source; return; s.charCodeAt(0) + index; }, ns);

ss = ss.selectMany(s => ns, (s, n) => s + n.toString());
ns = ss.selectMany(s => ns);
ns = ss.selectMany(ns);

ns = ns.skip(10);
