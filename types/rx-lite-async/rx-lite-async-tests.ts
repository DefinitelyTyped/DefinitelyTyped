// Tests for RxJS-Async TypeScript definitions
// Tests by Igor Oleinikov <https://github.com/Igorbek>

let obsNum: Rx.Observable<number>;
let obsStr: Rx.Observable<string>;
let sch: Rx.IScheduler;

function start() {
    obsNum = Rx.Observable.start(() => 10, obsStr, sch);
    obsNum = Rx.Observable.start(() => 10, obsStr);
    obsNum = Rx.Observable.start(() => 10);
}

function toAsync() {
    obsNum = Rx.Observable.toAsync(() => 1, sch)();
    obsNum = Rx.Observable.toAsync((a1: number) => a1)(1);
    obsStr = <any> Rx.Observable.toAsync((a1: string, a2: number) => a1 + a2.toFixed(0))("", 1);
    obsStr = <any> Rx.Observable.toAsync((a1: string, a2: number, a3: Date) => a1 + a2.toFixed(0) + a3.toDateString())("", 1, new Date());
    obsStr = <any> Rx.Observable.toAsync((a1: string, a2: number, a3: Date, a4: boolean) => a1 + a2.toFixed(0) + a3.toDateString() + (a4 ? 1 : 0))("", 1, new Date(), false);
}

function startAsync() {
    const o: Rx.Observable<string> = Rx.Observable.startAsync(() => <Rx.IPromise<string>> {});
}
