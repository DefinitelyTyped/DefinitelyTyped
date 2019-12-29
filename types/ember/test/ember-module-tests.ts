import Ember from 'ember';

// $
Ember.$; // $ExpectType JQueryStatic

const top = (<T>(x?: T): T => x!)();
type Top = typeof top;
declare function expectTypeNativeArrayTop(x: Ember.NativeArray<Top>): void;
// A
expectTypeNativeArrayTop(Ember.A());
Ember.A([1, 2]); // $ExpectType NativeArray<number>
// addListener
Ember.addListener({ a: 'foo' }, 'a', {}, () => {});
Ember.addListener({ a: 'foo' }, 'a', null, () => {});
// addObserver
Ember.addObserver({ a: 'foo' }, 'a', null, () => {});
Ember.addObserver({ a: 'foo' }, 'a', {}, () => {});
// aliasMethod
Ember.aliasMethod('init');
// assert
Ember.assert('2+2 should always be 4', 2 + 2 === 4);
// assign
const o1 = Ember.assign({ a: 1 }, { b: 2 });
o1.a; // $ExpectType number
o1.b; // $ExpectType number
o1.c; // $ExpectError
// Ember.bind // $ExpectError
// cacheFor
Ember.cacheFor({ a: 123 }, 'a'); // $ExpectType number | undefined
Ember.cacheFor({ a: 123 }, 'x'); // $ExpectError
// compare
Ember.compare('31', '114'); // $ExpectType number
// copy
Ember.copy({ a: 12 }, true).a; // $ExpectType number
Ember.copy({ a: 12 }); // $ExpectType any
Ember.copy({ a: 12 }).a; // $ExpectType any
Ember.copy({ a: 12 }).b; // $ExpectType any
// debug
Ember.debug('some info for developers');
// deprecate
Ember.deprecate("you shouldn't use this anymore", 3 === 3, {
    id: 'no-longer-allowed',
    until: '99.0.0'
});
// get
Ember.get({ z: 23 }, 'z'); // $ExpectType number
Ember.get({ z: 23 }, 'zz'); // $ExpectError
// getEngineParent
Ember.getEngineParent(new Ember.EngineInstance()); // $ExpectType EngineInstance
// getOwner
Ember.getOwner(new Ember.Component());
// getProperties
Ember.getProperties({ z: 23 }, 'z').z; // $ExpectType number
Ember.getProperties({ z: 23 }, 'z', 'z').z; // $ExpectType number
Ember.getProperties({ z: 23 }, 'z', 'a').z; // $ExpectError
Ember.getProperties({ z: 23 }, ['z', 'z']).z; // $ExpectType number
Ember.getProperties({ z: 23 }, ['z', 'a']).z; // $ExpectError
// getWithDefault
Ember.getWithDefault({ z: 23 }, 'z', 43); // $ExpectType number
Ember.getWithDefault({ a: undefined as number | undefined, z: 23 }, 'a', 99); // $ExpectType number | undefined

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
// merge
Ember.merge({ a: 12 }, { b: 34 }).a; // $ExpectType number
// observer
const o2 = Ember.Object.extend({
    name: 'foo',
    age: 3,
    nameWatcher: Ember.observer('name', () => {}),
    nameWatcher2: Ember.observer('name', 'fullName', () => {})
});
// on
const o3 = Ember.Object.extend({
    name: 'foo',
    nameWatcher: Ember.on('init', () => {}),
    nameWatcher2: Ember.on('destroy', () => {})
});
// removeListener
Ember.addListener(o2, 'create', () => {});
Ember.addListener({}, 'create', () => {}); // $ExpectError
// removeObserver
Ember.removeObserver(o2, 'create', () => {});
Ember.removeObserver({}, 'create', () => {}); // $ExpectError
// runInDebug
Ember.runInDebug(() => {});
// sendEvent
Ember.sendEvent(o2, 'clicked', [1, 2]); // $ExpectType boolean
// set
Ember.set(o2.create(), 'name', 'bar'); // $ExpectType string
Ember.set(o2.create(), 'age', 4); // $ExpectType number
Ember.set(o2.create(), 'nam', 'bar'); // $ExpectError
// setOwner
Ember.setOwner(o2.create(), {});
// setProperties
Ember.setProperties(o2.create(), { name: 'bar' }).name; // $ExpectType string
// tryInvoke
Ember.tryInvoke(o2, 'init');
Ember.tryInvoke(o2, 'init', [441]);
// trySet
Ember.trySet(o2, 'nam', ''); // $ExpectType any
// typeOf
Ember.typeOf(''); // $ExpectType "string"
Ember.typeOf(Ember.A()); // $ExpectType "array"
// warn
Ember.warn('be caseful!');
// VERSION
Ember.VERSION; // $ExpectType string

// onerror

Ember.onerror = (err: Error) => console.error(err);
Ember.onerror = (num: number, err: Error) => console.error(err); // $ExpectError

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
const a2: Ember.Array<string> = {}; // $ExpectError
// Ember.ArrayProxy
new Ember.ArrayProxy<number>([3, 3, 2]); // $ExpectType ArrayProxy<number>
// Ember.Checkbox
const cb = new Ember.Checkbox(); // $ExpectType Checkbox
cb.tagName; // $ExpectType string
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
    }
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
// Ember.DefaultResolver
const dr = new Ember.DefaultResolver();
dr.resolve('route:index');
dr.resolve(); // $ExpectError
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
oe1.on('bar', { foo() {}}, () => {});
// Ember.HashLocation
const hl = new Ember.HashLocation(); // $ExpectType HashLocation
// Ember.Helper
const h1 = Ember.Helper.extend({
    compute() {
        this.recompute();
        return '';
    }
});
// Ember.HistoryLocation
const hil = new Ember.HistoryLocation(); // $ExpectType HistoryLocation
// Ember.LinkComponent
Ember.LinkComponent.create(); // $ExpectType LinkComponent
// Ember.Mixin
Ember.Object.extend(Ember.Mixin.create({ foo: 'bar' }), {
    baz() {
        this.foo; // $ExpectType string
    }
});
// Ember.MutableArray
const ma1: Ember.MutableArray<string> = [
    'money',
    'in',
    'the',
    'bananna',
    'stand'
];
ma1.addObject('!'); // $ExpectType string
ma1.filterBy(''); // $ExpectType NativeArray<string>
// Ember.MutableEnumerable
// tslint:disable-next-line:prefer-const
let me1: Ember.MutableEnumerable<[string]> = null as any;
me1.compact(); // $ExpectType NativeArray<[string]>
// Ember.Namespace
const myNs = Ember.Namespace.extend({});
// Ember.NativeArray
const na: Ember.NativeArray<number> = Ember.A([2, 3, 4]);
na; // $ExpectType NativeArray<number>
na.clear(); // $ExpectType NativeArray<number>
// Ember.NoneLocation
new Ember.NoneLocation();  // $ExpectType NoneLocation
// Ember.Object
new Ember.Object();
// Ember.ObjectProxy
new Ember.ObjectProxy(); // $ExpectType ObjectProxy
// Ember.Observable
Ember.Object.extend(Ember.Observable, {});
// Ember.PromiseProxyMixin
Ember.Object.extend(Ember.PromiseProxyMixin, {
    foo() {
        this.reason; // $ExpectType any
        this.isPending; // $ExpectType boolean
    }
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
// Ember.TextArea
new Ember.TextArea();
// Ember.TextField
new Ember.TextField();
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

 Ember.bind; // $ExpectError
 Ember.deprecate('foo', 'bar'); // $ExpectError
 Ember.K; // $ExpectError
 Ember.Binding; // $ExpectError
 Ember.Transition; // $ExpectError
 Ember.create; // $ExpectError
 Ember.reset; // $ExpectError
 Ember.unsubscribe; // $ExpectError
 Ember.subscribe; // $ExpectError
 Ember.instrument; // $ExpectError
 Ember.Instrumentation; // $ExpectError
