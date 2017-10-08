import * as createReactClass from "create-react-class";
import * as DOM from "react-dom-factories";

interface Props {
    foo: string;
}

interface State {
    bar: number;
}

createReactClass<Props, State>({
    childContextTypes: {},
    componentDidCatch(err, errorInfo) {
        const msg: string = err.message;
        const name: string = err.name;
        const stack: string | undefined = err.stack;
        const componentStack: string = errorInfo.componentStack;
    },
    componentDidMount() {},
    componentDidUpdate(props, state) {
        const foo: string = props.foo;
        const bar: number = state.bar;
    },
    componentWillMount() {},
    componentWillReceiveProps(nextProps) {
        const oldFoo: string = nextProps.foo;
    },
    componentWillUnmount() {},
    componentWillUpdate(props, state) {
        const foo: string = props.foo;
        const bar: number = state.bar;
    },
    contextTypes: {},
    displayName: "Test",
    getDefaultProps() {
        return { foo: "f" };
    },
    getInitialState() {
        return { bar: 1 };
    },
    mixins: [],
    propTypes: {},
    shouldComponentUpdate(this: React.ClassicComponent<Props, State>, nextProps, nextState) {
        const newFoo: string = nextProps.foo;
        const newBar: number = nextState.bar;
        return newFoo !== this.props.foo && newBar !== this.state.bar;
    },
    statics: {
        test: 1
    },
    render() {
        return DOM.div({}, "test");
    }
});
