
import { applyMiddleware } from "redux";
import * as immutableStateInvariantMiddleware from "redux-immutable-state-invariant";

applyMiddleware(immutableStateInvariantMiddleware());
