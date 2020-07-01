import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    connectWithLifecycle,
    LifecycleDispatchProps,
    applyLifecycle,
    LifecycleStateProps,
    LifecycleComponent,
} from 'react-lifecycle-component';

interface State {
    stateFoo: number;
}

interface Props extends StateProps, DispatchProps {
}

interface StateProps {
    propsFoo: number;
}

interface DispatchProps {
    bar(): void;
}

class ComponentFoo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            stateFoo: 0,
        };
    }
    render() {
        return (
            <div>
                <div>Props Foo: {this.props.propsFoo}</div>
                <div>State Foo: {this.state.stateFoo}</div>
                <button onClick={this.props.bar}>Bar</button>
            </div>
        );
    }
}

type MapStateProps = StateProps & LifecycleStateProps<Props>;

function mapStateToProps(): MapStateProps {
    return {
        component: ComponentFoo,
        propsFoo: 8675309,
    };
}

type MapDispatchProps = DispatchProps & LifecycleDispatchProps<Props, State>;

function mapDispatchToProps(dispatch: Dispatch): MapDispatchProps {
    return {
        bar() {
            dispatch({ type: 'Bar'});
        },
        componentWillMount() {
            dispatch({ type: 'ComponentWillMount'});
        },
        componentDidMount() {
            dispatch({ type: 'ComponentDidMount'});
        },
        componentWillUpdate(nextProps, nextState, nextContext) {
            const fooIsEqual: boolean = nextProps.propsFoo === nextState.stateFoo;
            const hasNextContext: boolean = !!nextContext;
            dispatch({ type: 'ComponentWillUpdate'});
        },
        componentDidUpdate(nextProps, nextState, nextContext) {
            const fooIsEqual: boolean = nextProps.propsFoo === nextState.stateFoo;
            const hasNextContext: boolean = !!nextContext;
            dispatch({ type: 'ComponentDidUpdate'});
        },
        componentWillReceiveProps(nextProps, nextContext) {
            const fooIsGreaterThanZero: boolean = nextProps.propsFoo > 0;
            const hasNextContext: boolean = !!nextContext;
            dispatch({ type: 'ComponentWillReceiveProps'});
        },
        componentWillUnmount() {
            dispatch({ type: 'ComponentWillUnmount'});
        },
        shouldComponentUpdate(nextProps, nextState, nextContext) {
            const fooIsEqual: boolean = nextProps.propsFoo === nextState.stateFoo;
            const hasNextContext: boolean = !!nextContext;
            return !fooIsEqual;
        },
    };
}

const connectWithLifecylceContainer =
    connectWithLifecycle<StateProps, MapDispatchProps>(mapStateToProps, mapDispatchToProps)(ComponentFoo);
const applyLifecycleContainer =
    connect<StateProps, MapDispatchProps>(mapStateToProps, mapDispatchToProps)(applyLifecycle(ComponentFoo));
const lifecycleContainer =
    connect<MapStateProps, MapDispatchProps>(mapStateToProps, mapDispatchToProps)(LifecycleComponent);
