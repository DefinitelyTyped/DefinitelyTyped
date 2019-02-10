import EmberObject, { computed, notifyPropertyChange } from "@ember/object";

const LifetimeHooks = EmberObject.extend({
    resource: null as {} | null,

    init() {
        this._super();
        this.resource = {};
    },

    willDestroy() {
        delete this.resource;
        this._super();
    }
});

class MyObject30 extends EmberObject {
    constructor() {
        super();
    }
}

class MyObject31 extends EmberObject {
    constructor(properties: object) {
        super(properties);
    }
}

class Foo extends EmberObject {
    a = computed({
        get() { return ''; },
        set(key: string, newVal: string) { return ''; }
    });
    b = 5;
    baz() {
        const y = this.b; // $ExpectType number
        const z = this.a; // $ExpectType ComputedProperty<string, string>
        this.b = 10;
        this.get('b').toFixed(4); // $ExpectType string
        this.set('a', 'abc').split(','); // $ExpectType string[]
        this.set('b', 10).toFixed(4); // $ExpectType string

        this.setProperties({ b: 11 });
        // this.setProperties({ b: '11' }); // $ExpectError
        this.setProperties({
            a: 'def',
            b: 11
        });
    }
    bar() {
        notifyPropertyChange(this, 'name');
        notifyPropertyChange(this); // $ExpectError
        notifyPropertyChange('name'); // $ExpectError
        notifyPropertyChange(this, 'name', 'bar'); // $ExpectError
    }
}

// TODO: enable after TS 3.0 https://github.com/typed-ember/ember-cli-typescript/issues/291
// class Foo extends EmberObject.extend({
//     a: computed({
//         get() { return ''; },
//         set(key: string, newVal: string) { return ''; }
//     })
// }) {
//     b = 5;
//     baz() {
//         const y = this.b; // $ExpectType number
//         const z = this.a; // $ExpectType ComputedProperty<string, string>
//         this.b = 10;
//         this.get('b').toFixed(4); // $ExpectType string
//         this.set('a', 'abc').split(','); // $ExpectType string[]
//         this.set('b', 10).toFixed(4); // $ExpectType string

//         this.setProperties({ b: 11 });
//         // this.setProperties({ b: '11' }); // $ExpectError
//         this.setProperties({
//             a: 'def',
//             b: 11
//         });
//     }
// }
