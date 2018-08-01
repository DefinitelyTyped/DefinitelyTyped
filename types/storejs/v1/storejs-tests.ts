// Tests for storagejs.d.ts
import * as store from 'store';

// Store 'marcus' at 'username'
store.set('username', 'marcus');

// Get 'username'
store.get('username');

// Remove 'username'
store.remove('username');

// Clear all keys
store.clear();

// Store an object literal - store.js uses JSON.stringify under the hood
store.set('user', { name: 'marcus', likes: 'javascript' });

// Get the stored object - store.js uses JSON.parse under the hood
var user = store.get('user');
alert(user.name + ' likes ' + user.likes);

// Get all stored values
store.getAll().user.name == 'marcus';

// Loop over all stored values
store.forEach(function(key, val) {
    console.log(key, '==', val)
});
