import { createDispatcher, Store } from 'dispatchr';
import createStore = require('fluxible/addons/createStore');
import BaseStore = require('fluxible/addons/BaseStore');
import { Fluxible } from 'fluxible';

const TestStore = createStore({
    storeName: 'TestStore',

    handlers: {
        ACTION_NAME: 'actionHandler'
    },

    statics: {
        staticMethod() {
        }
    },

    initialize() {},
});

class ExtendedStore extends BaseStore {
    static handlers = {
        ACTION_NAME: 'actionHandler'
    };

    actionHandler() {
        this.emitChange();
    }
}

const app = new Fluxible({
    component: {}
});

app.registerStore(TestStore);
app.registerStore(ExtendedStore);
