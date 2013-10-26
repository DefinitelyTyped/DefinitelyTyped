///<reference path="ix.d.ts"/>

var ec_ns = (a: number, b: string) => a.toString() == b;	//equality comparer on number,string
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
