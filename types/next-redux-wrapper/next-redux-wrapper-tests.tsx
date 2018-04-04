import * as React from 'react';
import withRedux = require('next-redux-wrapper');
import { createStore, Reducer, Store, AnyAction } from 'redux';
import { StoreCreatorOptions } from 'next-redux-wrapper';

interface InitialState {
    foo: string;
}

const reducer: Reducer<InitialState> = (state: InitialState = {foo: ''}, action: AnyAction): InitialState => {
    switch (action.type) {
        case 'FOO':
            return {...state, foo: action.payload};
    default:
        return state;
    }
};

const makeStore = (initialState: InitialState): Store<InitialState> => {
    return createStore(reducer, initialState);
};

interface Props {
    foo: string;
    custom: string;
}

interface ReduxStore {
    foo: string;
}

class Page extends React.Component<Props> {
    static getInitialProps({store, isServer, pathname, query}: any) {
        store.dispatch({type: 'FOO', payload: 'foo'});
        return {custom: 'custom'};
    }
    render() {
        return (
            <div>
                <div>Prop from Redux {this.props.foo}</div>
                <div>Prop from getInitialProps {this.props.custom}</div>
            </div>
        );
    }
}

type ConnectStateProps = Props;
type DispatchProps = Props;
type OwnProps = Props;
type MergedProps = Props;

// Test various typings
const com1 = withRedux(makeStore, (state: ReduxStore) => ({foo: state.foo}))(Page);

const com2 = withRedux(makeStore, (state: ReduxStore) => ({foo: state.foo}))(Page);

const com3 = withRedux<InitialState>(makeStore, (state: ReduxStore) => ({foo: state.foo}))(Page);

const com4 = withRedux<InitialState, ConnectStateProps>(
    makeStore,
    (state: ReduxStore) => ({foo: state.foo, custom: 'hi'})
)(Page);

const com5 = withRedux<InitialState, ConnectStateProps, DispatchProps, OwnProps, MergedProps>(
    makeStore,
    (state: ReduxStore) => ({foo: state.foo, custom: 'hi'}),
    undefined,
    (state: Props) => ({foo: state.foo, custom: 'hi'})
)(Page);

const com6 = withRedux<InitialState, ConnectStateProps, DispatchProps, OwnProps, MergedProps>(
    (initialState: InitialState, options: StoreCreatorOptions<InitialState, ConnectStateProps, DispatchProps, OwnProps, MergedProps>) => {
        if (options.isServer || options.req || options.query || options.res) {
            const a = 1;
        }
        return createStore(reducer, initialState);
    },
    (state: ReduxStore) => ({foo: state.foo, custom: 'hi'}),
    undefined,
    (state: Props) => ({foo: state.foo, custom: 'hi'})
)(Page);

const com7 = withRedux({
    createStore: makeStore,
    mapStateToProps: (state: ReduxStore) => ({foo: state.foo})
})(Page);

withRedux.setPromise(Promise);
withRedux.setDebug(true);
