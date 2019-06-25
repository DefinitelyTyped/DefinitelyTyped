import * as React from 'react';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { createStore, Reducer, Store, AnyAction } from 'redux';

interface InitialState {
    foo: string;
}

const reducer: Reducer<InitialState> = (state: InitialState = { foo: '' }, action: AnyAction): InitialState => {
    switch (action.type) {
        case 'FOO':
            return { ...state, foo: action.payload };
        default:
            return state;
    }
};

const makeStore = (initialState: InitialState): Store<InitialState> => {
    return createStore<InitialState>(reducer, initialState);
};

interface OwnProps {
    bar: string;
}

interface Props {
    foo: string;
    custom: string;
}

class Page extends React.Component<OwnProps & Props> {
    static getInitialProps({ store, isServer, pathname, query }: any) {
        store.dispatch({ type: 'FOO', payload: 'foo' });
        return { custom: 'custom' };
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
type MergedProps = Props;

// Test various typings

const Com1 = withRedux<InitialState, ConnectStateProps, DispatchProps, OwnProps, MergedProps>(
    (initialState: InitialState, options) => {
        if (options.isServer || options.req || options.query || options.res) {
            const a = 1;
        }
        return createStore(reducer, initialState);
    },
)(withReduxSaga<OwnProps & Props>({ async: true })(Page));

const Com2 = withRedux(makeStore)(withReduxSaga(Page));

const com1Instance = (<Com1 bar="foo" />);
const com2Instance = (<Com2 />);
