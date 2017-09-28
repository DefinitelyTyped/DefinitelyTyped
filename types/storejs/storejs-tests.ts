// Tests for storagejs.d.ts
import * as store from 'store';
import * as engine from 'store/src/store-engine';

// https://github.com/marcuswestin/store.js/#api

// Store current user
store.set('user', { name:'Marcus' });

// Get current user
store.get('user');

// Remove current user
store.remove('user');

// Clear all keys
store.clearAll();

// Loop over all stored values
store.each(function(value, key) {
    console.log(key, '==', value)
});

// https://github.com/marcuswestin/store.js/#write-your-own-plugin

// Example plugin that stores a version history of every value
declare global {
    interface StoreJsAPI {
        getHistory(key: string): any[];
    }
}

const versionHistoryPlugin = function(this: StoreJsAPI) {
    const historyStore = this.namespace('history');
    return {
        set: function(super_fn: () => any, key: string, value: any) {
            const history = historyStore.get(key) || [];
            history.push(value);
            historyStore.set(key, history);
            return super_fn();
        },
        getHistory: function(key: string) {
            return historyStore.get(key);
        }
    }
};
store.addPlugin(versionHistoryPlugin);
store.set('foo', 'bar 1');
store.set('foo', 'bar 2');
store.getHistory('foo');

// https://github.com/marcuswestin/store.js/#make-your-own-build

// Example custom build usage:
declare global {
    interface StoreJsAPI {
        // expirePlugin
        set(key: string, value: any, expiration: number): any;
    }
}

var storages: any[] = [
    //require('store/storages/localStorage'),
    //require('store/storages/cookieStorage')
];
var plugins: any[] = [
    //require('store/plugins/defaults'),
    //require('store/plugins/expire')
];
var myStore = engine.createStore(storages, plugins);
myStore.set('foo', 'bar', new Date().getTime() + 3000); // Using expire plugin to expire in 3 seconds
