import { combineReducers, createStore } from "redux";
import { sessionReducer, sessionService } from "redux-react-session";

// add the session reducer

const reducers = {
    session: sessionReducer,
};

const reducer = combineReducers(reducers);

// initiate the session service

const store = createStore(reducer);

sessionService.initSessionService(store);

// TODO: Improve tests by testing the actions
