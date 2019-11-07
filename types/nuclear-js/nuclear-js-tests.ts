import {
    Immutable,
    Reactor,
    Store,
    isKeyPath,
    isGetter,
    toJS,
    toImmutable,
    isImmutable,
    createReactMixin,
} from 'nuclear-js';

Immutable.Map({ a: 1 }) as Immutable.Map<any, any>;
Immutable.fromJS([5]);

// Callable with or without `new`.
new Reactor();
Reactor();
new Reactor({ debug: true });
Reactor({ debug: undefined });
// Make sure that type checking succeeds with or without `new`.
const r1 = new Reactor();
const r2 = Reactor();
r1.dispatch('FETCH_ENTITY_SUCCESS') as void;
r1.dispatch('FETCH_ENTITY_SUCCESS', { data: 5 }) as void;
r1.batch(() => null) as void;
r1.evaluate(['keyPath']);
r1.evaluate([['keyPath'], (dep1: any) => 5]);
r1.evaluateToJS(['keyPath']);
r1.evaluateToJS([['keyPath'], (dep1: any) => 5]);
r1.observe(() => null)() as void;
r1.observe(['getter'], (x: any) => null)() as void;
r1.observe(['getter'], () => null)() as void;
r1.unobserve(['getter'], (x: any) => null) as void;
r1.unobserve(['getter'], () => null) as void;
r1.serialize();
r1.loadState({}) as void;
r1.registerStores({}) as void;
r1.registerStores({
    numberStore: new Store<number>({
        getInitialState() {
            return 5;
        },
        initialize() {},
    }),
}) as void;
r1.replaceStores({}) as void;
r1.replaceStores({
    numberStore: new Store<number>({
        getInitialState() {
            return 5;
        },
        initialize() {},
    }),
}) as void;
r1.prevReactorState;
r1.reactorState;
r1.observerState;
r1.ReactMixin.componentDidMount() as void;
r1.ReactMixin.componentWillUnmount() as void;
r1.ReactMixin.getInitialState();
r2.reset() as void;
r2.dispatch('FETCH_ENTITY_SUCCESS') as void;
r2.dispatch('FETCH_ENTITY_SUCCESS', { data: 5 }) as void;
r2.batch(() => null) as void;
r2.evaluate(['keyPath']);
r2.evaluate([['keyPath'], (dep1: any) => 5]);
r2.evaluateToJS(['keyPath']);
r2.evaluateToJS([['keyPath'], (dep1: any) => 5]);
r2.observe(() => null)() as void;
r2.observe(['getter'], (x: any) => null)() as void;
r2.observe(['getter'], () => null)() as void;
r2.unobserve(['getter'], (x: any) => null) as void;
r2.unobserve(['getter'], () => null) as void;
r2.serialize();
r2.loadState({}) as void;
r2.registerStores({}) as void;
r2.registerStores({
    numberStore: new Store<number>({
        getInitialState() {
            return 5;
        },
        initialize() {},
    }),
}) as void;
r2.replaceStores({}) as void;
r2.replaceStores({
    numberStore: new Store<number>({
        getInitialState() {
            return 5;
        },
        initialize() {},
    }),
}) as void;
r2.reset() as void;
r2.prevReactorState;
r2.reactorState;
r2.observerState;
r2.ReactMixin.componentDidMount() as void;
r2.ReactMixin.componentWillUnmount() as void;
r2.ReactMixin.getInitialState();

// Callable with or without `new`.
new Store({ getInitialState() {}, initialize() {} });
Store({ getInitialState() {}, initialize() {} });
new Store({ getInitialState() {}, initialize() {} });
Store({ getInitialState() {}, initialize() {} });
// Make sure that type checking succeeds with or without `new`.
const s1 = new Store<number>({
    getInitialState() {
        return 5;
    },
    initialize() {
        this.on('FETCH_THING', (s: number, x: any) => 5);
    },
});
const s2 = Store<string>({
    getInitialState() {
        return '';
    },
    initialize() {
        this.on('FETCH_THING', (s: string) => '5');
    },
    handleReset(s: string) {
        return '15';
    },
});
s1.getInitialState() as number;
s1.initialize() as void;
s1.handleReset(5) as number;
s1.serialize(15);
s1.deserialize({}) as number;
s1.handle(51, 'FETCH_THING', {}) as number;
s1.on('FETCH_THING', (x: number, y: any) => 15);
s2.getInitialState() as string;
s2.initialize() as void;
s2.handleReset('5') as string;
s2.serialize('15');
s2.deserialize({}) as string;
s2.handle('51', 'FETCH_THING', {}) as string;
s2.on('FETCH_THING', (x: string, y: any) => '15');

isKeyPath({}) as boolean;
isKeyPath(['getter']) as boolean;
isKeyPath('') as boolean;
isKeyPath(5) as boolean;

isGetter({}) as boolean;
isGetter(['getter']) as boolean;
isGetter('') as boolean;
isGetter(5) as boolean;

toJS({});
toJS([]);
toJS('');
toJS(5);

toImmutable({});
toImmutable([]);
toImmutable('');
toImmutable(5);

isImmutable({}) as boolean;
isImmutable([]) as boolean;
isImmutable('') as boolean;
isImmutable(5) as boolean;

createReactMixin(r1);
createReactMixin(r2);

// Test default export.
import Nuclear = require('nuclear-js');
Nuclear.Immutable.Map({ a: 1 });
Nuclear.Reactor({ debug: true });
Nuclear.Store({ getInitialState() {}, initialize() {} });
Nuclear.isKeyPath({});
Nuclear.isGetter({});
Nuclear.toJS({});
Nuclear.toImmutable({});
Nuclear.isImmutable({});
Nuclear.createReactMixin(r1);
