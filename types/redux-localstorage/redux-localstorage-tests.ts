import { Reducer, compose, combineReducers, createStore } from "redux";
import {
    default as persistState,
    mergePersistedState,
    transformState,
    actionTypes
} from "redux-localstorage";
import * as adapterAsyncStorage from "redux-localstorage/lib/adapters/AsyncStorage";
import * as adapterLocalStorage from "redux-localstorage/lib/adapters/localStorage";
import * as adapterSessionStorage from "redux-localstorage/lib/adapters/sessionStorage";

const AsyncStorage: any = {};

const rootReducer: Reducer<any> = (state: any, action: any) => state;

const reducer = compose(
    mergePersistedState()
)(rootReducer);

const storageAsyncStorage = adapterAsyncStorage(AsyncStorage);
const storageLocalStorage = adapterLocalStorage(window.localStorage);
const storageSessionStorage = adapterSessionStorage(window.sessionStorage);

const createStoreAsyncStorage = compose(
    persistState(storageAsyncStorage, "foo")
)(createStore)(reducer);

const createStoreLocalStorage = compose(
    persistState(storageLocalStorage, "foo")
)(createStore)(reducer);

const createStoreSessionStorage = compose(
    persistState(storageSessionStorage, "foo")
)(createStore)(reducer);

const storage = compose(
    transformState([JSON.stringify, btoa], [atob, JSON.parse])
)(storageLocalStorage);
