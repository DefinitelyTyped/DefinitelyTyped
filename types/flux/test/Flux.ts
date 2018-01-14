import { Dispatcher } from "flux";

enum ActionSource {
    Server,
    View
}
enum ActionType {
    Create,
    Update,
    Delete
}

interface Action {
    source: ActionSource;
    type: ActionType;
    data: {};
}

function dispatcherCallback(payload: Action) {
    const source: ActionSource = payload.source;
    const type: ActionType = payload.type;
    const data: {} = payload.data;
}

let dispatcherIsDispatching: boolean;
let dispatcherToken: string;

const actionPayload = {
    data: {},
    source: ActionSource.Server,
    type: ActionType.Create
};

/**
 * Basic dispatcher
 */
const basicDispatcher: Dispatcher<Action> = new Dispatcher<Action>();
dispatcherToken = basicDispatcher.register(dispatcherCallback);
basicDispatcher.unregister(dispatcherToken);
basicDispatcher.waitFor([dispatcherToken]);
basicDispatcher.dispatch(actionPayload);
dispatcherIsDispatching = basicDispatcher.isDispatching();

/**
 * Custom dispatcher
 */
class CustomDispatcher extends Dispatcher<Action> {
    // Dispatch an action with server as source
    handleServerAction(type: ActionType, data: {}) {
        this.dispatch({
            source: ActionSource.Server,
            type,
            data
        });
    }
    // Dispatch an action with view as source
    handleViewAction(type: ActionType, data: {}) {
        this.dispatch({
            source: ActionSource.View,
            type,
            data
        });
    }
}

const customDispatcher: CustomDispatcher = new CustomDispatcher();
dispatcherToken = customDispatcher.register(dispatcherCallback);
customDispatcher.unregister(dispatcherToken);
customDispatcher.dispatch(actionPayload);
customDispatcher.waitFor([dispatcherToken]);
dispatcherIsDispatching = customDispatcher.isDispatching();
