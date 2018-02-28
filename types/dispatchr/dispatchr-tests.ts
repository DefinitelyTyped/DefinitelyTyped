import { createDispatcher, Store } from 'dispatchr';
import * as createStore from 'dispatchr/addons/createStore';
import * as BaseStore from 'dispatchr/addons/BaseStore';

const TestStore = createStore({
    storeName: 'TestStore',

    handlers: {
        ACTION_NAME: 'actionHandler'
    },

    initialize() { },

    actionHandler() {
        this.emitChange();
        this.additionalMethod();
    },

    additionalMethod() {}
});

class ExtendedStore extends BaseStore<{}> {
    static handlers = {
        ACTION_NAME: 'actionHandler'
    };

    actionHandler() {
        this.emitChange();
    }
}

const dispatcher = createDispatcher({
    errorHandler(e, context) {
        e.meta;
        e.type;
        e.message;
    },
    stores: [TestStore]
});

const context = dispatcher.createContext({});
context.dispatch('ACTION_NAME', {});
