/// <reference path="./mobx.d.ts"/>
import {observable, autorun} from "mobx";

var v = observable(3);
v.autorun(() => {});

var a = observable([1,2,3]);

class Order {
    @observable price:number = 3;
    @observable amount:number = 2;
    @observable orders:string[] = [];

    @observable get total() {
        return this.amount * this.price * (1 + this.orders.length);
    }
}

export function testObservable() {
    var a = observable(3);
    var b = autorun(() => a() * 2);
}

export function testAnnotations() {
    var order1totals:number[] = [];
    var order1 = new Order();
    var order2 = new Order();

    var disposer = autorun(() => {
        order1totals.push(order1.total)
    });

    order2.price = 4;
    order1.amount = 1;

    order2.orders.push('bla');

    order1.orders.splice(0,0,'boe', 'hoi');

    disposer();
    order1.orders.pop();
};

export function testTyping() {
    var ar:Mobx.IObservableArray<number> = observable([1,2]);
    ar.autorun((d:Mobx.IArrayChange<number>|Mobx.IArraySplice<number>) => {
        console.log(d.type);
    });

    var ar2:Mobx.IObservableArray<number> = observable([1,2]);
    ar2.autorun((d:Mobx.IArrayChange<number>|Mobx.IArraySplice<number>) => {
        console.log(d.type);
    });

    var x:Mobx.IObservableValue<Object> = observable(3);
}
