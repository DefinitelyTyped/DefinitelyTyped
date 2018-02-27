import { createDispatcher, Store } from 'dispatchr';
import * as createStore from 'dispatchr/addons/createStore';

const TestStore = createStore({
    storeName: 'TestStore',

    handlers: {
        ACTION_NAME: 'actionHandler'
    },

    initialize() { },

    actionHandler() {
        this.emitChange();
    }
});

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
