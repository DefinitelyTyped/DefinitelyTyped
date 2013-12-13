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
//ss = Rx.Observable.amb([ss, ss]);

ss = Rx.Observable.catch(ss, ss, ss);
ss = Rx.Observable.catchException(ss, ss, ss);
//ss = Rx.Observable.catch([ss, ss, ss]);
//ss = Rx.Observable.catchException([ss, ss, ss]);

ss = Rx.Observable.concat(ss, ss, ss);
//ss = Rx.Observable.concat([ss, ss, ss]);

ss = Rx.Observable.merge(ss, ss, ss);
//ss = Rx.Observable.merge([ss, ss, ss]);
ss = Rx.Observable.merge(s, ss, ss, ss);
//ss = Rx.Observable.merge(s, [ss, ss, ss]);

ss = Rx.Observable.onErrorResumeNext(ss, ss, ss);
//ss = Rx.Observable.onErrorResumeNext([ss, ss, ss]);

ns = Rx.Observable.zip(ss, bs, ns, (s, b, n) => s.length + (b ? 1 : 0) + n);


// Observable instance methods

var sss: Rx.Observable<Rx.Observable<string>>;
ss = sss.concatAll();