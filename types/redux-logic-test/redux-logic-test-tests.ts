import { createMockStore } = require('redux-logic-test');

const store = createMockStore({
    initialState: {}
});
store.dispatch('TEST');
store.whenComplete(() => {});
console.log(store.actions);
store.resetActions();
