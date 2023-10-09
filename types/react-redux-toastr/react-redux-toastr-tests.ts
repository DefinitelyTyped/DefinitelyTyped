import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { actions, reducer as toastrReducer, toastr } from "react-redux-toastr";
import ReduxToastr from "react-redux-toastr";
import { bindActionCreators, combineReducers, createStore } from "redux";

function test() {
    const store = createStore(combineReducers({ toastr: toastrReducer }));
    var toastrFactory = React.createFactory(ReduxToastr);
    var element = toastrFactory({ timeOut: 1000, newestOnTop: false });
    var providerFactory = React.createFactory(Provider);
    var root = providerFactory({ store: store }, element);

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
