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

Immutable.Map({ a: 1 });
Immutable.fromJS([5]);

// Callable with or without `new`.
new Reactor();
Reactor();
new Reactor({ debug: true });
Reactor({ debug: undefined });
// Make sure that type checking succeeds with or without `new`.
const r1: Reactor = new Reactor();
const r2: Reactor = Reactor();
r1.dispatch('FETCH_ENTITY_SUCCESS');
r1.dispatch('FETCH_ENTITY_SUCCESS', { data: 5 });
r1.batch(() => null);
r1.evaluate(['keyPath']);
r1.evaluate([['keyPath'], (dep1: any) => 5]);
r1.evaluateToJS(['keyPath']);
r1.evaluateToJS([['keyPath'], (dep1: any) => 5]);
r1.observe(() => null)();
r1.observe(['getter'], (x: any) => null)();
r1.observe(['getter'], () => null)();
r1.unobserve(['getter'], (x: any) => null);
r1.unobserve(['getter'], () => null);
r1.serialize();
r1.loadState({});
r1.registerStores({});
r1.registerStores({
    numberStore: new Store<number>({
        getInitialState() {
            return 5;
        },
        initialize() {},
    }),
});
r1.replaceStores({});
r1.replaceStores({
    numberStore: new Store<number>({
        getInitialState() {
            return 5;
        },
        initialize() {},
    }),
});
r1.prevReactorState;
r1.reactorState;
r1.observerState;
r1.ReactMixin.componentDidMount();
r1.ReactMixin.componentWillUnmount();
r1.ReactMixin.getInitialState();
r2.reset();
r2.dispatch('FETCH_ENTITY_SUCCESS');
r2.dispatch('FETCH_ENTITY_SUCCESS', { data: 5 });
r2.batch(() => null);
r2.evaluate(['keyPath']);
r2.evaluate([['keyPath'], (dep1: any) => 5]);
r2.evaluateToJS(['keyPath']);
r2.evaluateToJS([['keyPath'], (dep1: any) => 5]);
r2.observe(() => null)();
r2.observe(['getter'], (x: any) => null)();
r2.observe(['getter'], () => null)();
r2.unobserve(['getter'], (x: any) => null);
r2.unobserve(['getter'], () => null);
r2.serialize();
r2.loadState({});
r2.registerStores({});
r2.registerStores({
    numberStore: new Store<number>({
        getInitialState() {
            return 5;
        },
        initialize() {},
    }),
});
r2.replaceStores({});
r2.replaceStores({
    numberStore: new Store<number>({
        getInitialState() {
            return 5;
        },
        initialize() {},
    }),
});
r2.reset();
r2.prevReactorState;
r2.reactorState;
r2.observerState;
r2.ReactMixin.componentDidMount();
r2.ReactMixin.componentWillUnmount();
r2.ReactMixin.getInitialState();

// Callable with or without `new`.
new Store({
    getInitialState() {
        return {};
    },
    initialize() {},
});
Store({
    getInitialState() {
        return {};
    },
    initialize() {},
});
new Store({
    getInitialState() {
        return {};
    },
    initialize() {},
});
Store({
    getInitialState() {
        return {};
    },
    initialize() {},
});
// Make sure that type checking succeeds with or without `new`.
const s1: Store<number> = new Store<number>({
    getInitialState() {
        return 5;
    },
    initialize() {
        this.on('FETCH_THING', (s: number, x: any) => 5);
    },
});
const s2: Store<string> = Store<string>({
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
const s3: Store = new Store({
    getInitialState() {
        return {};
    },
    initialize() {},
});
const s4: Store = Store({
    getInitialState() {
        return {};
    },
    initialize() {},
});
s1.getInitialState();
s1.initialize();
s1.handleReset(5);
s1.serialize(15);
s1.deserialize({});
s1.handle(51, 'FETCH_THING', {});
s1.on('FETCH_THING', (x: number, y: any) => 15);
s2.getInitialState();
s2.initialize();
s2.handleReset('5');
s2.serialize('15');
s2.deserialize({});
s2.handle('51', 'FETCH_THING', {});
s2.on('FETCH_THING', (x: string, y: any) => '15');

isKeyPath({});
isKeyPath(['getter']);
isKeyPath('');
isKeyPath(5);

isGetter({});
isGetter(['getter']);
isGetter('');
isGetter(5);

toJS({});
toJS([]);
toJS('');
toJS(5);

toImmutable({});
toImmutable([]);
toImmutable('');
toImmutable(5);

isImmutable({});
isImmutable([]);
isImmutable('');
isImmutable(5);

createReactMixin(r1);
createReactMixin(r2);

// Test default export.
import Nuclear = require('nuclear-js');
Nuclear.Immutable.Map({ a: 1 });
Nuclear.Reactor({ debug: true });
Nuclear.Store({
    getInitialState() {
        return {};
    },
    initialize() {},
});
Nuclear.isKeyPath({});
Nuclear.isGetter({});
Nuclear.toJS({});
Nuclear.toImmutable({});
Nuclear.isImmutable({});
Nuclear.createReactMixin(r1);
