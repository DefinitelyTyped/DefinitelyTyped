var ec_ns = (a: number, b: string) => a.toString() == b;	//equality comparer on number,string
var ec_ss = (a: string, b: string) => a == b;				//equality comparer on string,string
var ec_nn = (a: number, b: number) => a === b;				//equality comparer on number,number
var c_nn = (a: number, b: number) => a - b;					//comparer on number,number

// static

Ix.Enumerable.throw(new Error("error"));
Ix.Enumerable.throwException(new Error("error"));

var ax = Ix.Enumerable.generate(-100, a => a < 100, a=> a + 10, a=> a * 2);

Ix.Enumerable.defer(() => ax);

Ix.Enumerable.using(() => ax.getEnumerator(), e => Ix.Enumerable.return(e.getCurrent()));

Ix.Enumerable.catch(ax, ax, ax);
Ix.Enumerable.catchException(ax, ax, ax);
Ix.Enumerable.catch<string>();
Ix.Enumerable.catchException<string>();

Ix.Enumerable.onErrorResumeNext(ax, ax, ax);
Ix.Enumerable.onErrorResumeNext<string>();

Ix.Enumerable.while(x => x.count() > 0, ax);
Ix.Enumerable.whileDo(x => x.count() > 0, ax);

Ix.Enumerable.if(() => true, ax, ax);
Ix.Enumerable.ifThen(() => true, ax, ax);
Ix.Enumerable.if(() => true, ax);
Ix.Enumerable.ifThen(() => true, ax);

Ix.Enumerable.doWhile(ax, x => x.count() > 0);

Ix.Enumerable.case(() => 42, { 42: ax }, ax);
Ix.Enumerable.switchCase(() => 42, { 42: ax }, ax);
Ix.Enumerable.case(() => 42, { 42: ax });
Ix.Enumerable.switchCase(() => 42, { 42: ax });
Ix.Enumerable.case(() => "42", { "42": ax }, ax);
Ix.Enumerable.switchCase(() => "42", { "42": ax }, ax);
Ix.Enumerable.case(() => "42", { "42": ax });
Ix.Enumerable.switchCase(() => "42", { "42": ax });

Ix.Enumerable.for(ax, a => ax);
Ix.Enumerable.forIn(ax, a => ax);

// instance

var bx: Ix.Enumerable<string>;

ax.isEmpty();

bx.minBy(b => b.length, c_nn);
bx.minBy(b => b.length);
bx.maxBy(b => b.length, c_nn);
bx.maxBy(b => b.length);

ax.share(ax => bx);
ax.share();

ax.publish(ax => bx);
ax.publish();

ax.memoize();

ax.do({ onNext: (a: number) => console.log(a), onError: err => console.log(err), onCompleted: () => console.log("completed") });
ax.do(a => console.log(a), err => console.log(err), () => console.log("completed"));
ax.do(a => console.log(a), err => console.log(err));
ax.do((a: number) => console.log(a));
ax.doAction({ onNext: (a: number) => console.log(a), onError: err => console.log(err), onCompleted: () => console.log("completed") });
ax.doAction(a => console.log(a), err => console.log(err), () => console.log("completed"));
ax.doAction(a => console.log(a), err => console.log(err));
ax.doAction((a: number) => console.log(a));

ax.bufferWithCount(10, 20);
ax.bufferWithCount(10);

ax.ignoreElements();

bx.distinctBy(b => b.length, ec_nn);
bx.distinctBy(b => b.length);

bx.distinctUntilChanged(b => b.length, ec_nn);
bx.distinctUntilChanged(b => b.length);
bx.distinctUntilChanged();
bx.distinctUntilChanged(false, ec_ss);

ax.expand(a => ax);

ax.startWith(10, 20);

ax.scan(0, (acc, a) => acc + a);
ax.scan((acc, a) => acc + a);

ax.takeLast(10);
ax.skipLast(10);

ax.repeat(10);
ax.repeat();

ax.catch(ax, ax, ax);
ax.catchException(ax, ax, ax);
ax.catch(ax);
ax.catchException(ax);
ax.catch(err => ax);
ax.catchException(err => ax);

ax.finally(() => { });
ax.finallyDo(() => { });

ax.onErrorResumeNext(ax);

ax.retry(10);
ax.retry();
