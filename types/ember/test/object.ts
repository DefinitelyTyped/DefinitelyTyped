import Ember from 'ember';

const LifetimeHooks = Ember.Object.extend({
    resource: undefined as {} | undefined,

    init() {
        this._super();
        this.resource = {};
    },

    willDestroy() {
        this.resource = undefined;
        this._super();
    },
});

class MyObject30 extends Ember.Object {
    constructor() {
        super();
    }
}

class MyObject31 extends Ember.Object {
    constructor(properties: object) {
        super(properties);
    }
}

class Foo extends Ember.Object.extend({
    a: Ember.computed({
        get() {
            return '';
        },
        set(key: string, newVal: string) {
            return '';
        },
    }),
}) {
    b = 5;
    baz() {
        const y = this.b; // $ExpectType number
        const z = this.a; // $ExpectType ComputedProperty<string, string>
        this.b = 10;
        this.get('b').toFixed(4); // $ExpectType string
        this.set('a', 'abc').split(','); // $ExpectType string[]
        this.set('b', 10).toFixed(4); // $ExpectType string

        this.setProperties({ b: 11 });
        // this.setProperties({ b: '11' }); // @ts-expect-error
        this.setProperties({
            a: 'def',
            b: 11,
        });
    }
}

export class Foo2 extends Ember.Object {
    name!: string;

    changeName(name: string) {
        const a: string = this.set('name', name);
        // @ts-expect-error
        const b: number = this.set('name', name);
        const x: string = Ember.set(this, 'name', name);
        // @ts-expect-error
        const y: number = Ember.set(this, 'name', name);
        this.setProperties({
            name,
        });
        Ember.setProperties(this, {
            name,
        });
    }

    bar() {
        Ember.notifyPropertyChange(this, 'name');
        // @ts-expect-error
        Ember.notifyPropertyChange(this);
        // @ts-expect-error
        Ember.notifyPropertyChange('name');
        // @ts-expect-error
        Ember.notifyPropertyChange(this, 'name', 'bar');
    }
}
