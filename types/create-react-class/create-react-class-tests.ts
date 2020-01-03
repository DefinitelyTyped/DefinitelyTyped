import * as React from "react";
import * as ReactDOM from "react-dom";
import * as DOM from "react-dom-factories";
import createReactClass = require("create-react-class");

interface Props {
    foo: string;
}

interface State {
    bar: number;
}

const props: Props = {
    foo: "foo"
};

const container: Element = document.createElement("div");

//
// Top-Level API
// --------------------------------------------------------------------------

const ClassicComponent: React.ClassicComponentClass<Props> = createReactClass<Props, State>({
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
    reset() {
        this.replaceState(this.getInitialState!());
    },
    render() {
        return DOM.div(null,
            DOM.input({
                ref: input => this._input = input,
                value: this.state.bar
            }));
    }
});

const ClassicComponentNoProps: React.ClassicComponentClass = createReactClass({
    render() {
        return DOM.div();
    }
});

const ClassicComponentNoState: React.ClassicComponentClass<{ text: string }> = createReactClass<{ text: string }>({
    render() {
        return DOM.div(this.props.text);
    }
});

// React.createFactory
const classicFactory: React.ClassicFactory<Props> =
    React.createFactory(ClassicComponent);
const classicFactoryElement: React.ClassicElement<Props> =
    classicFactory(props);

// React.createElement
const classicElement: React.ClassicElement<Props> = React.createElement(ClassicComponent, props);
const classicElementNullProps: React.ClassicElement<{}> = React.createElement(ClassicComponentNoProps, null);

// React.cloneElement
const clonedClassicElement: React.ClassicElement<Props> =
    React.cloneElement(classicElement, props);

// ReactDOM.render
const classicComponent: React.ClassicComponent<Props> = ReactDOM.render(classicElement, container);

//
// React Components
// --------------------------------------------------------------------------

const displayName: string | undefined = ClassicComponent.displayName;
const defaultProps: Props = ClassicComponent.getDefaultProps ? ClassicComponent.getDefaultProps() : {} as Props;
const propTypes: React.ValidationMap<Props> | undefined = ClassicComponent.propTypes;

//
// Component API
// --------------------------------------------------------------------------

// classic
const isMounted: boolean = classicComponent.isMounted();
classicComponent.replaceState({ inputValue: "???", seconds: 60 });
