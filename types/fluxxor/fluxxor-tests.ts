import * as React from 'react';
import * as Fluxxor from 'fluxxor';

class DispatcherTest {
    v: Fluxxor.Dispatcher;

    constructor() {
        var stores: Fluxxor.Store[];
        this.v = new Fluxxor.Dispatcher(stores);
    }

    addStore() {
        var store: Fluxxor.Store;
        var v1: void = this.v.addStore('mystore', store);
    }

    dispatch() {
        var fn = () => console.log(1);
        var v1: void = this.v.dispatch(fn);
    }

    doDispatchLoop() {
        var fn = () => console.log(1);
        var v1: void = this.v.doDispatchLoop(fn);
    }

    waitForStores() {
        var store: Fluxxor.Store;
        var fn = () => console.log(1);
        var v1: void = this.v.waitForStores(store, ['mystore1', 'mystore2'], fn);
    }
}

class FluxTest {
    v: Fluxxor.Flux;

    constructor() {
        var stores: any;
        var actions: any;
        this.v = new Fluxxor.Flux(stores, actions);
    }

    props() {
        var stores: any = this.v.stores;
        var actions: any = this.v.actions;
    }

    addActions() {
        var actions: any;
        var v1: void = this.v.addActions(actions);
    }

    addAction() {
        var fn = () => console.log(1);

        // first form
        var v1: void = this.v.addAction('action1', fn);
        var v2: void = this.v.addAction('action1', 'action2', fn);

        // second form
        var v3: void = this.v.addAction(['action1'], fn);
        var v4: void = this.v.addAction(['action1','action2'], fn);
    }

    store() {
        var store1: any = this.v.store('mystore');
    }

    addStore() {
        var store: Fluxxor.Store;
        var v1: void = this.v.addStore('mystore', store);
    }

    addStores() {
        var stores: any;
        var v1: void = this.v.addStores(stores);
    }
}

class StoreTest {
    v: Fluxxor.Store;

    bindActions() {
        var fn = () => console.log(1);

        // first form
        var v1: void = this.v.bindActions('action1', fn);
        var v2: void = this.v.bindActions(
            'action1', fn,
            'action2', fn
        );

        // second form
        var v3: void = this.v.bindActions([
            'action1', fn,
            'action2', fn,
        ]);
    }

    waitFor() {
        var fn = () => console.log(1);
        var v1: void = this.v.waitFor(['mystore1','mystore2'], fn);
    }
}

class ContextTest {
    v: Fluxxor.Context;

    props() {
        var v1: Fluxxor.Flux = this.v.flux;
    }
}

class FluxMixinTest {
    v: Fluxxor.FluxMixin;

    constructor() {
        this.v = Fluxxor.FluxMixin(React);
    }

    getFlux() {
        var v1: Fluxxor.Flux = this.v.getFlux();
    }
}

class FluxChildMixinTest {
    v: Fluxxor.FluxChildMixin;

    constructor() {
        this.v = Fluxxor.FluxChildMixin(React);
    }

    getFlux() {
        var v1: Fluxxor.Flux = this.v.getFlux();
    }
}

class StoreWatchMixinTest<StoreState> {
    v: Fluxxor.StoreWatchMixin<StoreState>;

    constructor() {
        this.v = Fluxxor.StoreWatchMixin<StoreState>('store1');
        this.v = Fluxxor.StoreWatchMixin<StoreState>('store1','store2');
        this.v = Fluxxor.StoreWatchMixin<StoreState>('store1','store2','store3');
    }

    getStateFromFlux() {
        var v1: StoreState = this.v.getStateFromFlux();
    }
}
new StoreWatchMixinTest();
new StoreWatchMixinTest<{ a: Fluxxor.Store; }>();
new StoreWatchMixinTest<{ b: Fluxxor.Store; }>();

function createStoreTest() {
    var spec: Fluxxor.StoreSpec;
    var Class: Fluxxor.StoreClass = Fluxxor.createStore(spec);
    var store1: any = new Class();
    var store2: any = new Class({value: 1});
}

var versionTest: string = Fluxxor.version;
