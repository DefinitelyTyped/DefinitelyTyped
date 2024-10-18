import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { reducer as toastrReducer, toastr } from "react-redux-toastr";
import ReduxToastr from "react-redux-toastr";
import { AnyAction, combineReducers, legacy_createStore } from "redux";

function test() {
    const reducers = combineReducers({ toastr: toastrReducer });
    const store = legacy_createStore<ReturnType<typeof reducers>, AnyAction>(reducers);
    const element = React.createElement(ReduxToastr, { timeOut: 1000, newestOnTop: false });
    const root = React.createElement(Provider, { store: store }, element);

    function callback() {}

    toastr.clean();
    toastr.confirm("Test", {
        onOk: callback,
        onCancel: callback,
        okText: "Ok text message",
        cancelText: "Cancel text message",
    });
    toastr.error("Error", "Error message");
    toastr.info("Info", "Info test", { timeOut: 1000, removeOnHover: true, onShowComplete: callback });
    toastr.success("Test", "Test message", { component: new React.Component({}) });
}

test();
