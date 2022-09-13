import Ember from 'ember';

const top = (<T>(x?: T): T => x!)();
type Top = typeof top;
declare function expectTypeNativeArrayTop(x: Ember.NativeArray<Top>): void;
// A
expectTypeNativeArrayTop(Ember.A());
Ember.A([1, 2]); // $ExpectType NativeArray<number>
// addListener
Ember.addListener({ a: 'foo' }, 'event', {}, () => {});
Ember.addListener({ a: 'foo' }, 'event', {}, 'a');
// @ts-expect-error
Ember.addListener({ a: 'foo' }, 'event', {}, 'b');
Ember.addListener({ a: 'foo' }, 'event', null, () => {});
// addObserver
Ember.addObserver({ a: 'foo' }, 'a', null, () => {});
Ember.addObserver({ a: 'foo' }, 'a', {}, () => {});
// assert
Ember.assert('2+2 should always be 4', 2 + 2 === 4);
// assign
const o1 = Ember.assign({ a: 1 }, { b: 2 });
o1.a; // $ExpectType number
o1.b; // $ExpectType number
// @ts-expect-error
o1.c;
// Ember.bind // @ts-expect-error
// cacheFor
Ember.cacheFor({ a: 123 }, 'a'); // $ExpectType number | undefined
// @ts-expect-error
Ember.cacheFor({ a: 123 }, 'x');
// compare
Ember.compare('31', '114'); // $ExpectType number
// debug
Ember.debug('some info for developers');
// deprecate
Ember.deprecate("you shouldn't use this anymore", 3 === 3, {
    id: 'no-longer-allowed',
    until: '99.0.0',
});
// get
Ember.get({ z: 23 }, 'z'); // $ExpectType number
Ember.get({ z: 23 }, 'zz'); // $ExpectType unknown
// getEngineParent
Ember.getEngineParent(new Ember.EngineInstance()); // $ExpectType EngineInstance
// getOwner
Ember.getOwner(new Ember.Component()); // $ExpectType Owner
// getProperties
Ember.getProperties({ z: 23 }, 'z').z; // $ExpectType number
Ember.getProperties({ z: 23 }, 'z', 'z').z; // $ExpectType number
// @ts-expect-error
Ember.getProperties({ z: 23 }, 'z', 'a').z;
Ember.getProperties({ z: 23 }, ['z', 'z']).z; // $ExpectType number
// @ts-expect-error
Ember.getProperties({ z: 23 }, ['z', 'a']).z;

// guidFor
Ember.guidFor({}); // $ExpectType string
Ember.guidFor(''); // $ExpectType string
// isArray
Ember.isArray(''); // $ExpectType boolean
Ember.isArray([]); // $ExpectType boolean
// isBlank
Ember.isBlank(''); // $ExpectType boolean
Ember.isBlank([]); // $ExpectType boolean
// isEmpty
Ember.isEmpty(''); // $ExpectType boolean
Ember.isEmpty([]); // $ExpectType boolean
// isEqual
Ember.isEqual('', 'foo'); // $ExpectType boolean
Ember.isEqual([], ''); // $ExpectType boolean
// isNone
Ember.isNone(''); // $ExpectType boolean
Ember.isNone([]); // $ExpectType boolean
// isPresent
Ember.isPresent(''); // $ExpectType boolean
Ember.isPresent([]); // $ExpectType boolean
// observer
const o2 = Ember.Object.extend({
    name: 'foo',
    age: 3,
    nameWatcher: Ember.observer('name', () => {}),
    nameWatcher2: Ember.observer('name', 'fullName', () => {}),
});
// on
const o3 = Ember.Object.extend({
    name: 'foo',
    nameWatcher: Ember.on('init', () => {}),
    nameWatcher2: Ember.on('destroy', () => {}),
});
// removeListener
Ember.removeListener(o2, 'create', null, () => {});
Ember.removeListener(o2, 'create', null, 'create');
// @ts-expect-error
Ember.removeListener({}, 'create', null, 'blah');
// removeObserver
Ember.removeObserver(o2, 'create', () => {});
// @ts-expect-error
Ember.removeObserver({}, 'create', () => {});
// runInDebug
Ember.runInDebug(() => {});
// sendEvent
Ember.sendEvent(o2, 'clicked', [1, 2]); // $ExpectType boolean
// set
Ember.set(o2.create(), 'name', 'bar'); // $ExpectType string
Ember.set(o2.create(), 'age', 4); // $ExpectType number
// @ts-expect-error
Ember.set(o2.create(), 'nam', 'bar');
// setOwner
declare let app: Ember.ApplicationInstance;
Ember.setOwner(o2.create(), app);
// setProperties
Ember.setProperties(o2.create(), { name: 'bar' }).name; // $ExpectType string
// trySet
Ember.trySet(o2, 'nam', ''); // $ExpectType any
// typeOf
Ember.typeOf(''); // $ExpectType "string"
Ember.typeOf(Ember.A()); // $ExpectType "array"
// warn
// @ts-expect-error
Ember.warn('be caseful!');
Ember.warn('be caseful!', { id: 'some-warning' });
// VERSION
Ember.VERSION; // $ExpectType string

// onerror

Ember.onerror = (err: Error) => console.error(err);
// @ts-expect-error
Ember.onerror = (num: number, err: Error) => console.error(err);
Ember.onerror = undefined;

// Classes
// TODO ContainerProxyMixin
// Ember
// Ember.Application
new Ember.Application(); // $ExpectType Application
Ember.Application.create(); // $ExpectType Application
// Ember.ApplicationInstance
new Ember.ApplicationInstance(); // $ExpectType ApplicationInstance
Ember.ApplicationInstance.create(); // $ExpectType ApplicationInstance
// TODO: Ember.ApplicationInstance.BootOptions
// Ember.Array
const a1: Ember.Array<string> = [];
// @ts-expect-error
const a2: Ember.Array<string> = {};
// Ember.ArrayProxy
new Ember.ArrayProxy<number>([3, 3, 2]); // $ExpectType ArrayProxy<number>
// Ember.Component
const C1 = Ember.Component.extend({ classNames: ['foo'] });
class C2 extends Ember.Component {
    classNames = ['foo'];
}
const c1 = new C1();
const c2 = new C2();
C1.create();
C2.create();
c1.didInsertElement();
c2.didInsertElement();
// Ember.ComputedProperty
const cp: Ember.ComputedProperty<string, string> = Ember.computed('foo', {
    get(): string {
        return '';
    },
    set(_key: string, newVal: string): string {
        return '';
    },
});
// Ember.ContainerDebugAdapter
const cda = new Ember.ContainerDebugAdapter(); // $ExpectType ContainerDebugAdapter
// Ember.Controller
const con = new Ember.Controller(); // $ExpectType Controller
// Ember.CoreObject
const co = new Ember.CoreObject(); // $ExpectType CoreObject
// Ember.DataAdapter
const da = new Ember.DataAdapter(); // $ExpectType DataAdapter
// Ember.Debug
Ember.Debug.registerDeprecationHandler(() => {});
Ember.Debug.registerWarnHandler(() => {});
// Ember.Engine
const e1 = new Ember.Engine();
e1.register('data:foo', {}, { instantiate: false });
// Ember.EngineInstance
const ei1 = new Ember.EngineInstance();
ei1.lookup('data:foo');
// Ember.Error
new Ember.Error('Halp!');
// Ember.Evented
const oe1 = Ember.Object.extend(Ember.Evented).create();
oe1.trigger('foo');
oe1.on('bar', () => {});
oe1.on('bar', { foo() {} }, () => {});
// Ember.HashLocation
const hl = new Ember.HashLocation(); // $ExpectType HashLocation
// Ember.Helper
const h1 = Ember.Helper.extend({
    compute() {
        this.recompute();
        return '';
    },
});
// Ember.HistoryLocation
const hil = new Ember.HistoryLocation(); // $ExpectType HistoryLocation
// Ember.Mixin
Ember.Object.extend(Ember.Mixin.create({ foo: 'bar' }), {
    baz() {
        this.foo; // $ExpectType string
    },
});
// Ember.MutableArray
const ma1: Ember.MutableArray<string> = ['money', 'in', 'the', 'bananna', 'stand'];
ma1.addObject('!'); // $ExpectType string
// @ts-expect-error
ma1.filterBy('');
ma1.firstObject; // $ExpectType string | undefined
ma1.lastObject; // $ExpectType string | undefined
const ma2: Ember.MutableArray<{ name: string }> = [{ name: 'chris' }, { name: 'dan' }, { name: 'james' }];
ma2.filterBy('name', 'chris'); // $ExpectType NativeArray<{ name: string; }>
// Ember.MutableEnumerable
const me1: Ember.MutableEnumerable<string | null | undefined> = ['foo', undefined, null];
me1.compact(); // $ExpectType NativeArray<string>
// Ember.Namespace
const myNs = Ember.Namespace.extend({});
// Ember.NativeArray
const na: Ember.NativeArray<number> = Ember.A([2, 3, 4]);
na; // $ExpectType NativeArray<number>
na.clear(); // $ExpectType NativeArray<number>
// Ember.NoneLocation
new Ember.NoneLocation(); // $ExpectType NoneLocation
// Ember.Object
new Ember.Object();
// Ember.ObjectProxy
new Ember.ObjectProxy(); // $ExpectType ObjectProxy
// Ember.Observable
Ember.Object.extend(Ember.Observable, {});
// Ember.PromiseProxyMixin
Ember.Object.extend(Ember.PromiseProxyMixin, {
    foo() {
        this.reason; // $ExpectType unknown
        this.isPending; // $ExpectType boolean
    },
});
// Ember.Route
new Ember.Route();
// Ember.Router
new Ember.Router();
// Ember.Service
new Ember.Service();
// Ember.Test
Ember.Test;
// Ember.Test.Adapter
new Ember.Test.Adapter();
// Ember.Test.QUnitAdapter
new Ember.Test.QUnitAdapter();
// Ember.Helper
// helper
Ember.Helper.helper(([a, b]: [number, number]) => a + b);
// Ember.String
Ember.String;
// htmlSafe
Ember.String.htmlSafe('foo'); // $ExpectType SafeString
// isHTMLSafe
Ember.String.isHTMLSafe('foo'); // $ExpectType boolean
// Ember.Test
Ember.Test.checkWaiters(); // $ExpectType boolean
// checkWaiters

/**
 * == REMOVED FEATURES ==
 * These are deprecated and/or private things that have been removed from the
 * Ember.* namespace. These tests asserts that the types of these things
 * stay gone
 */

// @ts-expect-error
Ember.bind;
// @ts-expect-error
Ember.deprecate('foo', 'bar');
// @ts-expect-error
Ember.K;
// @ts-expect-error
Ember.Binding;
// @ts-expect-error
Ember.Transition;
// @ts-expect-error
Ember.create;
// @ts-expect-error
Ember.reset;
// @ts-expect-error
Ember.unsubscribe;
// @ts-expect-error
Ember.subscribe;
// @ts-expect-error
Ember.instrument;
// @ts-expect-error
Ember.Instrumentation;
