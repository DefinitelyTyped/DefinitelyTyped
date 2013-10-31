/// <reference path="knockout.es5.d.ts" />

var empty = {},
    obj = { a: 'string', b: 123, c: true, d: empty },
    observable = ko.observable(123),
    computed = ko.computed(function () { return observable() + 1; }),
    model = { prop: 100 },
    notifiedValues = [];


// Basic properties
ko.track(empty);
ko.track(null);
ko.track(obj);
ko.track({ a: 1 });
ko.track({ prop: observable });
ko.track({ prop: computed });
ko.track({ a: 1, b: 2, c: 3 }, null);
ko.track({ a: 1, b: 2, c: 3 }, []);
ko.track({ a: 1, b: 2, c: 3 }, ['a', 'c']);
ko.track({ prop: observable }, ['prop']);
ko.track({ prop: computed }, ['prop']);
ko.track(null, null);
ko.track(model);

// Computed properties
ko.defineProperty(model, 'propPlusOne', () => { return model.prop + 1; });
ko.defineProperty(model, 'propOne', { get: function () { return 1; } });
ko.defineProperty(model, 'propPlusOne', { get: () => model.prop++, set: (value) => model.prop = value - 1 });

// Utility functions
ko.getObservable(model, 'propPlusOne').subscribe((newValue) => notifiedValues.push(newValue));


// Simple usage example
class OrderLine {
    subtotal: string;

    constructor(public item: any, public price: number, public quantity: number) {
        // Instead of declaring ko.observable properties, we just have one call to ko.track 
        ko.track(this);

        // Computed property
        ko.defineProperty(model, 'subtotal', () => {
            return "$" + (this.price * this.quantity).toFixed(2);
        });

        // Accessing the observables
        ko.getObservable(this, "price").subscribe(function (newPrice) {
            console.log('The new price is ' + newPrice);
        });
    }

    public getSubtotal(): string {
        return "$" + (this.price * this.quantity).toFixed(2);
    }
}

class Order {
    lines: Array<OrderLine> = [];

    constructor() {
        ko.track(this, ["lines"]);
    }
}

var someOrderLine = new OrderLine(null, 0.445, 11), anOrder = new Order();

someOrderLine.item = "Test Item";
someOrderLine.quantity += 1;

anOrder.lines.push(someOrderLine);
anOrder.lines.push(someOrderLine);
anOrder.lines.shift();

console.log(someOrderLine.subtotal == someOrderLine.getSubtotal());     // true
console.log(anOrder.lines.length);                                      // 1

//Array methods
anOrder.lines.remove(someOrderLine);
anOrder.lines.removeAll([someOrderLine]);
anOrder.lines.removeAll();

anOrder.lines.destroy(someOrderLine);
anOrder.lines.destroyAll([someOrderLine]);
anOrder.lines.destroyAll();