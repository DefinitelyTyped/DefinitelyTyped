import Reflux = require("reflux");

const syncActions = Reflux.createActions([
    "statusUpdate",
    "statusEdited",
    "statusAdded"
]);

const asyncActions = Reflux.createActions({
    fireBall: {asyncResult: true}
});

asyncActions.fireBall.listen(function() {
    // Trigger async action
    setTimeout(() => this.completed(true), 1000);
});

// Creates a DataStore
const statusStore = Reflux.createStore({
    // Initial setup
    init() {
        // Register statusUpdate action
        this.listenTo(asyncActions.fireBall, this.onFireBall);
    },
    // Callback
    onFireBall(flag: boolean) {
        const status = flag ? 'ONLINE' : 'OFFLINE';

        // Pass on to listeners
        this.trigger(status);
    }
});

Reflux.createAction({
    children: ["progressed", "completed", "failed"]
});

const action = Reflux.createAction();

const actions = Reflux.createActions(["fireBall", "magicMissile"]);

const Store = Reflux.createStore({
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

const ReactComponent = {
    mixins: [Reflux.ListenerMixin]
};
