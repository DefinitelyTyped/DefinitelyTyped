import * as React from 'react';
import * as Reflux from "reflux";

// Action Tests
const syncActions = Reflux.createActions([
    "statusUpdate",
    "statusEdited",
    "statusAdded"
]);

const asyncActions = Reflux.createActions({
    fireBall: { asyncResult: true }
});

const completed = (isCompleted: boolean) => {
    // do something
};

asyncActions.fireBall.listen(() => {
    // Trigger async action
    setTimeout(() => completed(true), 1000);
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

const asyncActionsFromObject = Reflux.createActions({
    loadData: { sync: false, asyncResult: true }
});

Reflux.createAction({
    children: ["progressed", "completed", "failed"]
});

let action = Reflux.createAction();
action = Reflux.createAction({ children: ['delayComplete'] });
action = Reflux.createAction({ actionName: 'load' });
action = Reflux.createAction({ preEmit: (id: number) => { console.log(id); return undefined; }, shouldEmit: (id: number) => { console.log(id); return id > 0; } });

let actions = Reflux.createActions([{ actionName: 'fireBall' }, { actionName: 'magicMissile', sync: false }]);
actions = Reflux.createActions({ fireBall: { sync: false } });
actions = Reflux.createActions({
    load: { children: ['completed', 'failed'] }
});
actions = Reflux.createActions(['load']);
actions = Reflux.createActions(["fireBall", "magicMissile"]);

const someAsyncOperation = async () => Promise.resolve();

actions.magicMissile.listen(async () => someAsyncOperation());

// Store Tests

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

// Reflux ActionMethods Tests
Reflux.ActionMethods.exampleMethod = () => console.log("test");

// ES6 Component and Store and Tests
const actionsForES6Test = Reflux.createActions(['loadData']);

class ES6Store1 extends Reflux.Store {
    constructor() {
        super();
        this.listenables = actionsForES6Test;
        this.state = {
            error: false,
            store1Data: null
        };
    }

    onLoadData(recordId: number) {
        this.setState({ error: false, store1Data: "Test Data from Store1: " + recordId.toString() });
    }
}

const es6Store1Singleton = Reflux.initStore(ES6Store1);

class ES6Store2 extends Reflux.Store {
    constructor() {
        super();
        this.listenables = actionsForES6Test;
        this.state = {
            error: false,
            store2Data: null
        };
    }

    onLoadData(recordId: number) {
        this.setState({ error: false, store2Data: "Test Data from Store2: " + recordId.toString() });
    }
}

interface State {
    id: number;
    data?: any;
}

class ES6ComponentWithSingleStore extends Reflux.Component<any, any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            id: 1
        };
        this.store = ES6Store1;
    }

    componentDidMount() {
        actionsForES6Test.loadData(100);
    }

    render() {
        return <div>{this.state.data}</div>;
    }

    redirect() {
        this.props.history.push("/home");
    }
}

class ES6ComponentWithMultipleStores extends Reflux.Component<any, any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            id: 1
        };
        this.stores = [ES6Store1, ES6Store2];
        this.storeKeys = ['store1Data'];
    }

    componentDidMount() {
        actionsForES6Test.loadData(this.state.id);
    }

    render() {
        return <div>{this.state.data}</div>;
    }
}

class MyComponentWithMapStoreToState extends Reflux.Component {
    constructor(props: any) {
        super(props);

        this.mapStoreToState(ES6Store1, (fromStore) => {
            const obj: any = {};
            if (fromStore.color)
                obj.color = fromStore.color;
            if (fromStore.data && fromStore.data.classToUse)
                obj.class = fromStore.data.classToUse;
            return obj;
        });
    }

    render() {
        return <p className={this.state.class}>The color is: {this.state.color}</p>;
    }
}
