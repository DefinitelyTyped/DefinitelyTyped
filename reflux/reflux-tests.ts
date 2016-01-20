/// <reference path="reflux.d.ts" />
/// <reference path="../react/react.d.ts" />

import Reflux = require("reflux");
import React = require("react");

var syncActions = Reflux.createActions([
    "statusUpdate",
    "statusEdited",
    "statusAdded"
]);


var asyncActions = Reflux.createActions({
    fireBall: {asyncResult: true}
});

asyncActions.fireBall.listen(function () {
    // Trigger async action
    setTimeout(() => this.completed(true), 1000);
});


// Creates a DataStore
var statusStore = Reflux.createStore({

    // Initial setup
    init: function () {

        // Register statusUpdate action
        this.listenTo(asyncActions.fireBall, this.onFireBall);
    },
    // Callback
    onFireBall: function (flag: boolean) {
        var status = flag ? 'ONLINE' : 'OFFLINE';

        // Pass on to listeners
        this.trigger(status);
    }
});

Reflux.createAction({
    children: ["progressed", "completed", "failed"]
});


var actions = Reflux.createActions(["fireBall", "magicMissile"]);

var Store = Reflux.createStore({
    init: function () {
        this.listenToMany(actions);
    },
    onFireBall: function () {
        // whoooosh!
    },
    onMagicMissile: function () {
        // bzzzzapp!
    }
});
