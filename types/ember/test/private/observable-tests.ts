// tslint-disable-next-line
import { assertType } from '../lib/assert';
import Ember from 'ember';
import {
    ExtractPropertyNamesOfType,
    UnwrapComputedPropertyGetter,
    UnwrapComputedPropertyGetters,
    UnwrapComputedPropertySetters,
} from '@ember/object/-private/types';
import Observable from '@ember/object/observable';

class OtherThing {
    observerOfDemo(target: DemoObservable, key: 'foo') {}
}

class DemoObservable implements Observable {
    foo: string;
    isFoo = true;
    bar: [boolean, boolean];
    baz?: number;
    constructor() {
        this.foo = 'hello';
        this.bar = [false, true];
        this.baz = 9;
        this.addObserver('foo', this, 'fooDidChange');
        this.addObserver('foo', this, 'fooDidChangeProtected'); // $ExpectError
        this.addObserver('foo', this, this.fooDidChange);
        this.addObserver('foo', this, this.fooDidChangeProtected);
        const ot = new OtherThing();
        this.addObserver('foo', ot, ot.observerOfDemo);
        Ember.addObserver(this, 'foo', this, 'fooDidChange');
        Ember.addObserver(this, 'foo', this, 'fooDidChangeProtected'); // $ExpectError
        Ember.addObserver(this, 'foo', this, this.fooDidChange);
        Ember.addObserver(this, 'foo', this, this.fooDidChangeProtected);
        this.removeObserver('foo', this, 'fooDidChange');
        this.removeObserver('foo', this, 'fooDidChangeProtected'); // $ExpectError
        this.removeObserver('foo', this, this.fooDidChange);
        this.removeObserver('foo', this, this.fooDidChangeProtected);
        Ember.removeObserver(this, 'foo', this, 'fooDidChange');
        Ember.removeObserver(this, 'foo', this, 'fooDidChangeProtected'); // $ExpectError
        Ember.removeObserver(this, 'foo', this, this.fooDidChange);
        const lambda = () => {
            this.fooDidChange(this, 'foo');
        };
        this.addObserver('foo', lambda);
        this.addObserver('foo', (sender, key, value, rev) => {
            assertType<DemoObservable>(sender);
            assertType<'foo'>(key);
            assertType<string>(value);
            assertType<number>(rev);
        });
        this.removeObserver('foo', lambda);
        Ember.addObserver(this, 'foo', lambda);
        Ember.removeObserver(this, 'foo', lambda);
    }

    fooDidChange(obj: this, propName: 'foo') {}
    protected fooDidChangeProtected(obj: this, propName: 'foo') {}
    get<K extends keyof this>(key: K): UnwrapComputedPropertyGetter<this[K]> {
        throw new Error('Method not implemented.');
    }
    getProperties<K extends keyof this>(list: K[]): Pick<UnwrapComputedPropertyGetters<this>, K>;
    getProperties<K extends keyof this>(...list: K[]): Pick<UnwrapComputedPropertyGetters<this>, K>;
    getProperties(...rest: any[]): any {
        throw new Error('Method not implemented.');
    }
    set<K extends keyof this>(key: K, value: this[K]): this[K] {
        throw new Error('Method not implemented.');
    }
    setProperties<K extends keyof this>(hash: Pick<this, K>): Pick<UnwrapComputedPropertySetters<this>, K> {
        throw new Error('Method not implemented.');
    }
    notifyPropertyChange(keyName: string): this {
        throw new Error('Method not implemented.');
    }
    addObserver<Target>(
        key: keyof this,
        target: Target,
        method: keyof Target | ((this: Target, sender: this, key: string, value: any, rev: number) => void),
    ): any;
    addObserver<K extends keyof this>(
        key: K,
        method: keyof this | ((this: this, sender: this, key: K, value: this[K], rev: number) => void),
    ): any;
    addObserver(key: any, target: any, method?: any) {
        throw new Error('Method not implemented.');
    }
    removeObserver<Target>(
        key: keyof this,
        target: Target,
        method: keyof Target | ((this: Target, sender: this, key: string, value: any, rev: number) => void),
    ): any;
    removeObserver(
        key: keyof this,
        method: keyof this | ((this: this, sender: this, key: string, value: any, rev: number) => void),
    ): any;
    removeObserver(key: any, target: any, method?: any): void {
        throw new Error('Method not implemented.');
    }
    getWithDefault<K extends keyof this>(
        key: K,
        defaultValue: UnwrapComputedPropertyGetter<this[K]>,
    ): UnwrapComputedPropertyGetter<this[K]> {
        throw new Error('Method not implemented.');
    }
    incrementProperty(keyName: ExtractPropertyNamesOfType<this, number | undefined>, increment?: number): number {
        throw new Error('Method not implemented.');
    }
    decrementProperty(keyName: ExtractPropertyNamesOfType<this, number | undefined>, decrement?: number): number {
        throw new Error('Method not implemented.');
    }
    toggleProperty(keyName: ExtractPropertyNamesOfType<this, boolean | undefined>): boolean {
        throw new Error('Method not implemented.');
    }
    cacheFor<K extends keyof this>(key: K): UnwrapComputedPropertyGetter<this[K]> | undefined {
        throw new Error('Method not implemented.');
    }
}
const o = new DemoObservable();

/**
 * get
 */
assertType<string>(o.get('foo')); // $ExpectType string
assertType<[boolean, boolean]>(o.get('bar')); // $ExpectType [boolean, boolean]
assertType<number | undefined>(o.get('baz')); // $ExpectType number | undefined

/**
 * incrementProperty, decrementProperty
 */
assertType<number>(o.incrementProperty('baz')); // $ExpectType number
assertType<number>(o.decrementProperty('baz')); // $ExpectType number
assertType<number>(o.incrementProperty('baz', 3)); // $ExpectType number
assertType<number>(o.decrementProperty('baz', 12)); // $ExpectType number
// non-numeric property case
assertType<number>(o.incrementProperty('bar')); // $ExpectError
assertType<number>(o.decrementProperty('bar')); // $ExpectError
// empty case
assertType<number>(o.incrementProperty()); // $ExpectError
assertType<number>(o.decrementProperty()); // $ExpectError

/**
 * toggleProperty
 */
o.toggleProperty('isFoo'); // $ExpectType boolean
o.toggleProperty(); // $ExpectError

/**
 * getWithDefault
 */
assertType<string>(o.getWithDefault('foo', 'zzz')); // $ExpectType string
assertType<[boolean, boolean]>(o.getWithDefault('bar', [false, false])); // $ExpectType [boolean, boolean]
assertType<number | undefined>(o.getWithDefault('baz', 10)); // $ExpectType number | undefined
// improper arguments cases
assertType<number | undefined>(o.getWithDefault('baz', '10')); // $ExpectError
assertType<number | undefined>(o.getWithDefault('baz')); // $ExpectError
assertType<number | undefined>(o.getWithDefault()); // $ExpectError

/**
 * getProperties
 */
// ('foo', 'bar')
assertType<{ foo: string; bar: [boolean, boolean] }>(o.getProperties('foo', 'bar')); // $ExpectType { foo: string; bar: [boolean, boolean]; }
// ['foo', 'bar']
assertType<{ foo: string; bar: [boolean, boolean] }>(o.getProperties(['foo', 'bar'])); // $ExpectType { foo: string; bar: [boolean, boolean]; }
// empty cases
assertType<{}>(o.getProperties()); // $ExpectType {}
assertType<{}>(o.getProperties([])); // $ExpectType {}
// property that doesn't exist
assertType<any>(o.getProperties('jeanShorts', 'foo')); // $ExpectError
assertType<any>(o.getProperties(['foo', 'jeanShorts'])); // $ExpectError

/**
 * set
 */
assertType<string>(o.set('foo', 'abc')); // $ExpectType string
assertType<[boolean, boolean]>(o.set('bar', [false, false])); // $ExpectType [boolean, boolean]
assertType<number | undefined>(o.set('baz', undefined)); // $ExpectType number | undefined
assertType<number | undefined>(o.set('baz', 10)); // $ExpectType number | undefined
// property that doesn't exist
assertType<any>(o.set('jeanShorts', 10)); // $ExpectError

/**
 * setProperties
 */
assertType<{ foo: string; bar: [boolean, boolean] }>(o.setProperties({ foo: 'abc', bar: [true, true] })); // $ExpectType { foo: string; bar: [boolean, boolean]; }
// empty case
assertType<{}>(o.setProperties({})); // $ExpectType {}
// property that doesn't exist
assertType<any>(o.setProperties({ jeanShorts: 'under the pants' })); // $ExpectError

/**
 * notifyPropertyChange
 */
assertType<DemoObservable>(o.notifyPropertyChange('foo')); // $ExpectType DemoObservable
assertType<Observable>(o.notifyPropertyChange('jeanShorts')); // $ExpectError
