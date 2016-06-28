/// <reference path="./mobservable.d.ts"/>
import mobservable = require('mobservable');
import {observable} from "mobservable";

var v = mobservable(3);
v.observe(() => {});

var a = mobservable([1,2,3]);

class Order {
    @observable price:number = 3;
    @observable amount:number = 2;
    @observable orders:string[] = [];

    @observable get total() {
        return this.amount * this.price * (1 + this.orders.length);
    }
}

export function testObservable() {
    var a = mobservable(3);
    var b = mobservable(() => a() * 2);
}

export function testAnnotations() {
    var order1totals:number[] = [];
    var order1 = new Order();
    var order2 = new Order();

    var disposer = mobservable.observe(() => {
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
    var ar:Mobservable.IObservableArray<number> = mobservable.makeReactive([1,2]);
    ar.observe((d:Mobservable.IArrayChange<number>|Mobservable.IArraySplice<number>) => {
        console.log(d.type);
    });

    var ar2:Mobservable.IObservableArray<number> = mobservable([1,2]);
    ar2.observe((d:Mobservable.IArrayChange<number>|Mobservable.IArraySplice<number>) => {
        console.log(d.type);
    });

    var x:Mobservable.IObservableValue<number> = mobservable(3);
}