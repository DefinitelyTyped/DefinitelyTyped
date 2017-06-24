import { compose } from "redux";
import {
    default as persistState
} from "redux-localstorage";
import * as adapter from "redux-localstorage/lib/adapters/localStorage";
import { default as debounce } from "redux-localstorage-debounce";

const storageWait = compose(
    debounce(100)
)(adapter(window.localStorage));
const enhancerWait = persistState(storageWait, "test");

const storageMax = compose(
    debounce(100, 200)
)(adapter(window.localStorage));
const enhancerMax = persistState(storageMax, "test");

const storageOpts = compose(
    debounce(100, { maxWait : 200, foo : "bar" })
)(adapter(window.localStorage));
const enhancerOpts = persistState(storageOpts, "test");
