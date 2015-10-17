/// <reference path="reflux.d.ts" />


var Reflux: RefluxCore;

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
    onFireBall: function (flag) {
        var status = flag ? 'ONLINE' : 'OFFLINE';

        // Pass on to listeners
        this.trigger(status);
    }
});
