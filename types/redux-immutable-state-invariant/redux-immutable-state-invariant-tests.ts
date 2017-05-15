
import { applyMiddleware } from "redux";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";

applyMiddleware(immutableStateInvariantMiddleware());
