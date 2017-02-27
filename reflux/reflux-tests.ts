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

asyncActions.fireBall.listen(function() {
    // Trigger async action
    setTimeout(() => this.completed(true), 1000);
});


// Creates a DataStore
var statusStore = Reflux.createStore({

    // Initial setup
    init() {
        // Register statusUpdate action
        this.listenTo(asyncActions.fireBall, this.onFireBall);
    },
    // Callback
    onFireBall(flag: boolean) {
        var status = flag ? 'ONLINE' : 'OFFLINE';

        // Pass on to listeners
        this.trigger(status);
    }
});

Reflux.createAction({
    children: ["progressed", "completed", "failed"]
});

var action = Reflux.createAction();

var actions = Reflux.createActions(["fireBall", "magicMissile"]);

var Store = Reflux.createStore({
    init() {
        this.listenToMany(actions);
    },
    onFireBall() {
        // whoooosh!
    },
    onMagicMissile() {
        // bzzzzapp!
    }
});

var ReactComponent = {
    mixins: [Reflux.ListenerMixin]
};