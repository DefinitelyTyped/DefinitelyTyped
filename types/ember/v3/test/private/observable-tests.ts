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
    observerOfDemo(target: DemoObservable, key: string) {}
}

class DemoObservable implements Observable {
    foo: string;
    isFoo = true;
    bar: [boolean, boolean];
    baz?: number | undefined;
    constructor() {
        this.foo = 'hello';
        this.bar = [false, true];
        this.baz = 9;
        this.addObserver('foo', this, 'fooDidChange');
        // @ts-expect-error
        this.addObserver('foo', this, 'fooDidChangeProtected');
        this.addObserver('foo', this, this.fooDidChange);
        this.addObserver('foo', this, this.fooDidChangeProtected);
        const ot = new OtherThing();
        this.addObserver('foo', ot, ot.observerOfDemo);
        Ember.addObserver(this, 'foo', this, 'fooDidChange');
        // @ts-expect-error
        Ember.addObserver(this, 'foo', this, 'fooDidChangeProtected');
        Ember.addObserver(this, 'foo', this, this.fooDidChange);
        Ember.addObserver(this, 'foo', this, this.fooDidChangeProtected);
        this.removeObserver('foo', this, 'fooDidChange');
        // @ts-expect-error
        this.removeObserver('foo', this, 'fooDidChangeProtected');
        this.removeObserver('foo', this, this.fooDidChange);
        this.removeObserver('foo', this, this.fooDidChangeProtected);
        Ember.removeObserver(this, 'foo', this, 'fooDidChange');
        // @ts-expect-error
        Ember.removeObserver(this, 'foo', this, 'fooDidChangeProtected');
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

    fooDidChange(obj: this, propName: string) {}
    protected fooDidChangeProtected(obj: this, propName: string) {}
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
// @ts-expect-error
assertType<number>(o.incrementProperty('bar'));
// @ts-expect-error
assertType<number>(o.decrementProperty('bar'));
// empty case
// @ts-expect-error
assertType<number>(o.incrementProperty());
// @ts-expect-error
assertType<number>(o.decrementProperty());

/**
 * toggleProperty
 */
o.toggleProperty('isFoo'); // $ExpectType boolean
// @ts-expect-error
o.toggleProperty();

/**
 * getWithDefault
 */
assertType<string>(o.getWithDefault('foo', 'zzz')); // $ExpectType string
assertType<[boolean, boolean]>(o.getWithDefault('bar', [false, false])); // $ExpectType [boolean, boolean]
assertType<number | undefined>(o.getWithDefault('baz', 10)); // $ExpectType number | undefined
// improper arguments cases
// @ts-expect-error
assertType<number | undefined>(o.getWithDefault('baz', '10'));
// @ts-expect-error
assertType<number | undefined>(o.getWithDefault('baz'));
// @ts-expect-error
assertType<number | undefined>(o.getWithDefault());

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
// @ts-expect-error
assertType<any>(o.getProperties('jeanShorts', 'foo'));
// @ts-expect-error
assertType<any>(o.getProperties(['foo', 'jeanShorts']));

/**
 * set
 */
assertType<string>(o.set('foo', 'abc')); // $ExpectType string
assertType<[boolean, boolean]>(o.set('bar', [false, false])); // $ExpectType [boolean, boolean]
assertType<number | undefined>(o.set('baz', undefined)); // $ExpectType number | undefined
assertType<number | undefined>(o.set('baz', 10)); // $ExpectType number | undefined
// property that doesn't exist
// @ts-expect-error
assertType<any>(o.set('jeanShorts', 10));

/**
 * setProperties
 */
assertType<{ foo: string; bar: [boolean, boolean] }>(o.setProperties({ foo: 'abc', bar: [true, true] })); // $ExpectType { foo: string; bar: [boolean, boolean]; }
// empty case
assertType<{}>(o.setProperties({})); // $ExpectType {}
// property that doesn't exist
// @ts-expect-error
assertType<any>(o.setProperties({ jeanShorts: 'under the pants' }));

/**
 * notifyPropertyChange
 */
assertType<DemoObservable>(o.notifyPropertyChange('foo')); // $ExpectType DemoObservable
// @ts-expect-error
assertType<Observable>(o.notifyPropertyChange('jeanShorts'));
