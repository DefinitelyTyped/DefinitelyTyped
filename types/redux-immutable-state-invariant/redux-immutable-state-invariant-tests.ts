import { applyMiddleware } from "redux";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";

// without options
applyMiddleware(immutableStateInvariantMiddleware());

// with an empty options object
applyMiddleware(immutableStateInvariantMiddleware({}));

// with isImmutable option
applyMiddleware(immutableStateInvariantMiddleware({
    isImmutable: (val) => val === 'something'
}));

// with ignore option
applyMiddleware(immutableStateInvariantMiddleware({
    ignore: [
        'foo',
        'bar.thingsToIgnore'
    ]
}));

// with all options
applyMiddleware(immutableStateInvariantMiddleware({
    isImmutable: (val) => val === 'something',
    ignore: [
        'foo',
        'bar.thingsToIgnore'
    ]
}));
