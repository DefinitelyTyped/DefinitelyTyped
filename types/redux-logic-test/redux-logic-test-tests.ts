import { createMockStore } from "redux-logic-test";

const store = createMockStore({
    initialState: {},
});
store.whenComplete(() => {});
console.log(store.actions);
store.resetActions();
