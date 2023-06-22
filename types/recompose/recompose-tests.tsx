import * as React from "react";
import * as PropTypes from 'prop-types';
import {
    // Higher-order components
    mapProps, withProps, withPropsOnChange, withHandlers,
    defaultProps, renameProp, renameProps, flattenProp,
    withState, withReducer, branch, renderComponent,
    renderNothing, shouldUpdate, pure, onlyUpdateForKeys,
    onlyUpdateForPropTypes, withContext, getContext,
    lifecycle, toClass, toRenderProps, fromRenderProps, withStateHandlers,
    // Static property helpers
    setStatic, setPropTypes, setDisplayName,
    // Utilities
    compose, getDisplayName, wrapDisplayName, shallowEqual,
    isClassComponent, createEagerElement, createEagerFactory,
    createSink, componentFromProp, nest, hoistStatics,
    // Observable utilities
    componentFromStream, mapPropsStream, createEventHandler,
    createEventHandlerWithConfig,
    componentFromStreamWithConfig, mapPropsStreamWithConfig,
    setObservableConfig,
    StateHandler,
    StateHandlerMap,
} from "recompose";
import rxjsconfig from "recompose/rxjsObservableConfig";
import rxjs4config from "recompose/rxjs4ObservableConfig";
import mostConfig from "recompose/mostObservableConfig";
import xstreamConfig from "recompose/xstreamObservableConfig";
import baconConfig from "recompose/baconObservableConfig";
import kefirConfig from "recompose/kefirObservableConfig";

import mapPropsStandalone from "recompose/mapProps";
import withPropsStandalone from "recompose/withProps";
import withPropsOnChangeStandalone from "recompose/withPropsOnChange";
import withHandlersStandalone from "recompose/withHandlers";
import defaultPropsStandalone from "recompose/defaultProps";
import renamePropStandalone from "recompose/renameProp";
import renamePropsStandalone from "recompose/renameProps";
import flattenPropStandalone from "recompose/flattenProp";
import withStateStandalone from "recompose/withState";
import withStateHandlersStandalone from "recompose/withStateHandlers";
import withReducerStandalone from "recompose/withReducer";
import branchStandalone from "recompose/branch";
import renderComponentStandalone from "recompose/renderComponent";
import renderNothingStandalone from "recompose/renderNothing";
import shouldUpdateStandalone from "recompose/shouldUpdate";
import pureStandalone from "recompose/pure";
import onlyUpdateForKeysStandalone from "recompose/onlyUpdateForKeys";
import onlyUpdateForPropTypesStandalone from "recompose/onlyUpdateForPropTypes";
import withContextStandalone from "recompose/withContext";
import getContextStandalone from "recompose/getContext";
import lifecycleStandalone from "recompose/lifecycle";
import toClassStandalone from "recompose/toClass";
import toRenderPropsStandalone from "recompose/toRenderProps";
import fromRenderPropsStandalone from "recompose/fromRenderProps";
import setStaticStandalone from "recompose/setStatic";
import setPropTypesStandalone from "recompose/setPropTypes";
import setDisplayNameStandalone from "recompose/setDisplayName";
import composeStandalone from "recompose/compose";
import getDisplayNameStandalone from "recompose/getDisplayName";
import wrapDisplayNameStandalone from "recompose/wrapDisplayName";
import shallowEqualStandalone from "recompose/shallowEqual";
import isClassComponentStandalone from "recompose/isClassComponent";
import createSinkStandalone from "recompose/createSink";
import componentFromPropStandalone from "recompose/componentFromProp";
import nestStandalone from "recompose/nest";
import hoistStaticsStandalone from "recompose/hoistStatics";
import componentFromStreamStandalone, { componentFromStreamWithConfig as componentFromStreamWithConfigStandalone } from "recompose/componentFromStream";
import mapPropsStreamStandalone, { mapPropsStreamWithConfig as mapPropsStreamWithConfigStandalone } from "recompose/mapPropsStream";
import createEventHandlerStandalone, { createEventHandlerWithConfig as createEventHandlerWithConfigStandalone } from "recompose/createEventHandler";
import setObservableConfigStandalone from "recompose/setObservableConfig";

function testMapProps() {
    interface InnerProps {
        inn: number
        other: string
     }
    interface OutterProps { out: string }
    const InnerComponent = ({inn}: InnerProps) => <div>{inn}</div>;

    const enhancer = mapProps((props: OutterProps) => ({ inn: 123 }));
    const Enhanced = enhancer(InnerComponent);
    const rendered = (
        <Enhanced
            other='foo'
            out='bar'
        />
    )
}

function testWithProps() {
    interface InnerProps { inn: number }
    interface OutterProps { out: number }
    const InnerComponent = ({inn}: InnerProps) => <div>{inn}</div>;

    const enhancer = withProps((props: OutterProps) => ({ inn: props.out }));
    const Enhanced = enhancer(InnerComponent);
    const rendered = (
        <Enhanced out={123}/>
    )

    const enhancer2 = withProps({ inn: 123 });
    const Enhanced2 = enhancer2(InnerComponent);
    const Rendered2 = (
        <Enhanced2/>
    )
}

function testWithPropsOnChange() {
    interface InnerProps { inn: number }
    interface OutterProps { out: number }
    const InnerComponent = ({inn}: InnerProps) => <div>{inn}</div>;

    const enhancer = withProps((props: OutterProps) => ({ inn: props.out }));
    const Enhanced = enhancer(InnerComponent);
    const rendered = (
        <Enhanced out={123}/>
    )

    const enhancer2 = withProps({ inn: 123 });
    const Enhanced2 = enhancer2(InnerComponent);
    const Rendered2 = (
        <Enhanced2/>
    )
}

function testWithHandlers() {
    interface OutterProps {
        out: number;
    }
    interface InnerProps {
        foo: string;
    }
    interface HandlerProps {
        onSubmit: React.MouseEventHandler<HTMLDivElement>;
        onChange: Function;
    }
    const InnerComponent: React.FunctionComponent<InnerProps & HandlerProps & OutterProps> = ({onChange, onSubmit, foo}) =>
      <div onClick={onSubmit}>{foo}</div>;

    const enhancer = withHandlers<OutterProps & InnerProps, HandlerProps>({
      onChange: (props) => (e: any) => {},
      onSubmit: (props) => (e: React.MouseEvent<any>) => {},
    });
    const Enhanced = enhancer(InnerComponent);
    const rendered = (
        <Enhanced
            foo="bar"
            out={42}
        />
    )

    const enhancer2 = withHandlers<OutterProps & InnerProps, HandlerProps>((props) => ({
      onChange: (props) => (e: any) => {},
      onSubmit: (props) => (e: React.MouseEvent<any>) => {},
    }));
    const Enhanced2 = enhancer2(InnerComponent);
    const rendered2 = (
        <Enhanced2
            foo="bar"
            out={42}
        />
    )

    // @ts-expect-error
    const handlerNameTypecheckProof = withHandlers<OutterProps, HandlerProps>({
      onChange: () => () => {},
      notAKeyOnHandlerProps: () => () => {},
    });

    // The inner props should be fully inferrable
    const enhancer3 = withHandlers({
      onChange: (props: OutterProps) => (e: any) => {},
      onSubmit: (props: OutterProps) => (e: React.MouseEvent<any>) => {},
    });
    const Enhanced3 = enhancer3(({onChange, onSubmit, out}) =>
        <div onClick={onSubmit}>{out}</div>);
    const rendered3 = (
        <Enhanced3
            out={42}
        />
    )

    const enhancer4 = withHandlers((props: OutterProps) => ({
      onChange: (props) => (e: any) => {},
      onSubmit: (props) => (e: React.MouseEvent<any>) => {},
    }));
    const Enhanced4 = enhancer4(({onChange, onSubmit, out}) =>
        <div onClick={onSubmit}>{out}</div>);
    const rendered4 = (
        <Enhanced4
            out={42}
        />
    )
}

function testDefaultProps() {
    interface Props { a: string; b: number; c: number; }
    const innerComponent = ({a, b}: Props) => <div>{a}, {b}</div>;

    const enhancer = defaultProps({ a: "answer", b: 42 });
    const Enhanced = enhancer(innerComponent);
    const rendered = (
        <Enhanced c={42} />
    )
}

function testRenameProp() {
    interface InnerProps { c: string; b: number; }
    interface OutterProps { a: string; b: number; }
    const innerComponent: React.FunctionComponent<InnerProps> = ({c, b}: InnerProps) => <div>{c}, {b}</div>;

    const enhancer = renameProp("a", "c");
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);
}

function testRenameProps() {
    interface InnerProps { c: string; d: number; }
    interface OutterProps { a: string; b: number; }
    const innerComponent: React.FunctionComponent<InnerProps> = ({c, d}: InnerProps) => <div>{c}, {d}</div>;

    const enhancer = renameProps({ a:"c", b: "d" });
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);
}

function testFlattenProp() {
    interface InnerProps { a: string; b: string; y: {c: string; d: number;} }
    interface OutterProps { x: {a: string; b: number;}; y: {c: string; d: number;} }
    const innerComponent: React.FunctionComponent<InnerProps> = (props: InnerProps) => <div></div>;

    const enhancer = flattenProp("x");
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);
}

function testWithState() {
    interface InnerProps { count: number; setCount: (count: number) => number }
    interface OutterProps { title: string }
    const InnerComponent: React.FunctionComponent<InnerProps> = (props) =>
      <div onClick={() => props.setCount(0)}></div>;

    // We can't infer types for TOutter with this form because
    // Typescript only allows all or nothing
    // when defining generics. You can't infer some and define other.
    // For TOutter to be defined as not "{}" we would have to define
    // all the generics.
    const enhancer = withState("count", "setCount", 0);
    const Enhanced = enhancer(InnerComponent);
    const rendered = (
        <Enhanced />
    );

    // Here we're able to infer TOutter since it's defined in the initial state
    // function and Typescript is able to infer it from there.
    const enhancer2 = withState("count", "setCount",
      (p: OutterProps) => p.title.length);
    const Enhanced2 = enhancer2(InnerComponent);
    const rendered2 = (
        <Enhanced2 title="foo" />
    );

    // We can also actually provide the generic necessary
    const enhancer3 = withState<OutterProps, number, "count", "setCount">("count", "setCount", 1);
    const Enhanced3 = enhancer3(props => {
        return <div>{props.count}</div>;
    });
    const rendered3 = (
        <Enhanced3 title="foo" />
    );
}

function testWithStateHandlers() {
    interface State { counter: number; }
    interface Updaters extends StateHandlerMap<State> {
      add: StateHandler<State>;
    }
    interface OutterProps { initialCounter: number, power: number }
    type InnerProps = State & Updaters & OutterProps;
    const InnerComponent: React.FunctionComponent<InnerProps> = (props) =>
        <div>
            <div>{`Initial counter: ${props.initialCounter}`}</div>
            <div>{`Counter: ${props.counter}`}</div>
            <div onClick={() => props.add(2)}></div>
        </div>;

    const enhancer = withStateHandlers<State, Updaters, OutterProps>(
        (props: OutterProps) => ({ counter: props.initialCounter }),
        {
            add: (state, props) => n => ({ ...state, counter: state.counter + n ** props.power }),
        },
    );
    const Enhanced = enhancer(InnerComponent);
    const rendered = (
        <Enhanced initialCounter={4} power={2} />
    );

    const updateNameTypecheckProof = withStateHandlers<State, Updaters, OutterProps>(
        (props: OutterProps) => ({ counter: props.initialCounter }),
        // @ts-expect-error
        { notAKeyOfUpdaters: (state, props) => n => ({ ...state, counter: state.counter + n ** props.power }), },
    );

    // The inner props should be fully inferrable
    const enhancer2 = withStateHandlers(
        (props: OutterProps) => ({ counter: props.initialCounter }),
        {
            add: (state, props) => n => ({ ...state, counter: state.counter + n ** props.power }),
        },
    );
    const Enhanced2 = enhancer((props) =>
        <div>
            <div>{`Counts from: ${props.initialCounter}`}</div>
            <div>{`Counter: ${props.counter}`}</div>
            <div onClick={() => props.add(2)}></div>
        </div>);
    const rendered2 = (
        <Enhanced initialCounter={4} power={2} />
    );
}

function testWithReducer() {
    interface State { count: number }
    interface Action { type: string }
    interface InnerProps { title: string; count: number; dispatch: (a: Action) => void; }
    interface OutterProps { title: string; bar: number; }
    const InnerComponent: React.FunctionComponent<InnerProps> = (props) =>
      <div onClick={() => props.dispatch({type: "INCREMENT"})}></div>;

    // Same issue here inferring TOutter as with the "withState" form.
    const enhancer = withReducer("count", "dispatch",
      (s: number, a: Action) => s + 1, 0);
    const Enhanced = enhancer(InnerComponent);
    const rendered = (
        <Enhanced title="foo"/>
    );

    // Here we successfully infer TOutter from the initial state function
    const enhancer2 = withReducer("count", "dispatch",
      (s: number, a: Action) => s + 1,
      (props: OutterProps) => props.title.length);
    const Enhanced2 = enhancer2(InnerComponent);
    const rendered2 = (
        <Enhanced2
            title="foo"
            bar={42}
        />
    );
}

function testBranch() {
    interface InnerProps { count: number; update: () => void; }
    interface OutterProps { toggled: boolean }

    const innerComponent: React.FunctionComponent<InnerProps> = (props: InnerProps) =>
      <div onClick={() => props.update()}>{props.count}</div>;
    const innerComponent2 = () => <div>Hello</div>;

    const enhancer = branch(
      (props: OutterProps) => props.toggled,
      withState("count", "update", 0),
      withState("count", "update", 100)
    );
    const enhancer2 = branch(
      (props: OutterProps) => props.toggled,
      renderComponent(innerComponent),
    )
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);
    const enhanced2: React.ComponentClass<OutterProps> = enhancer2(innerComponent);
}

function testRenderComponent() {
    interface InnerProps { count: number; update: () => void; }
    interface OutterProps { toggled: boolean }

    const innerComponent = () => <div>Hello</div>;

    const enhancer = renderComponent(() => <span>Nop!</span>);
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);
}

function testWithObservableConfig() {
  let componentFromStreamMost = componentFromStreamWithConfig(mostConfig)
  componentFromStreamMost = componentFromStream

  let mapPropsStreamMost = mapPropsStreamWithConfig(mostConfig)
  mapPropsStreamMost = mapPropsStream

  let createEventHandlerMost = createEventHandlerWithConfig(mostConfig)
  let { handler: handler, stream: stream } = createEventHandler()
  createEventHandlerMost = createEventHandler
}

function testOnlyUpdateForKeys() {
    interface Props {
        foo: number;
        bar: string;
    }
    const component: React.FunctionComponent<Props> = (props) => <div>{props.foo} {props.bar}</div>
    onlyUpdateForKeys<Props>(['foo'])(component)
    // This should be a compile error
    // onlyUpdateForKeys<Props>(['fo'])(component)
}

function testLifecycle() {
    interface Props {
        foo: number;
        bar: string;
    }
    interface State {}
    interface Instance {
        instanceValue: number
    }
    const component: React.FunctionComponent<Props> = (props) => <div>{props.foo} {props.bar}</div>
    lifecycle<Props, State, Instance>({
        instanceValue: 1,
        componentDidMount() {
            this.instanceValue = 2
        }
    })(component)
}

function testSetStatic() {
    interface Props {
        foo: string;
    }

    let SfcResult: React.FC<Props>;
    const SfcComp: React.FC<Props> = (props) => (<div>{props.foo}</div>);

    let ClassResult: React.ComponentClass<Props, {}>;
    class ClassComp extends React.Component<Props> {
        render() {
            return (<div>{this.props.foo}</div>);
        }
    }

    const hoc1 = setStatic('bar', 'a string');
    const hoc2 = setStatic('bar', 5);
    const hoc3 = setStatic('bar', { a: 'b' });

    SfcResult = hoc1(SfcComp);
    SfcResult = hoc2(SfcComp);
    SfcResult = hoc3(SfcComp);
    // @ts-expect-error
    SfcResult = hoc1(ClassComp);

    ClassResult = hoc1(ClassComp);
    ClassResult = hoc2(ClassComp);
    ClassResult = hoc3(ClassComp);
    // @ts-expect-error
    ClassResult = hoc1(SfcComp);
}

function testSetPropTypes() {
    interface Props {
        foo: string;
    }
    const validationMap = {
        foo: PropTypes.string.isRequired
    }

    let SfcResult: React.FC<Props>;
    const SfcComp: React.FC<Props> = (props) => (<div>{props.foo}</div>);

    let ClassResult: React.ComponentClass<Props, {}>;
    class ClassComp extends React.Component<Props> {
        render() {
            return (<div>{this.props.foo}</div>);
        }
    }

    const hoc = setPropTypes(validationMap);

    SfcResult = hoc(SfcComp);
    // @ts-expect-error
    SfcResult = hoc(ClassComp);

    ClassResult = hoc(ClassComp);
    // @ts-expect-error
    ClassResult = hoc(SfcComp);

    // @ts-expect-error
    SfcResult = setPropTypes({ bar: PropTypes.string })(SfcComp);
}

function testSetDisplayName() {
    interface Props {
        foo: string;
    }

    let SfcResult: React.FC<Props>;
    const SfcComp: React.FC<Props> = (props) => (<div>{props.foo}</div>);

    let ClassResult: React.ComponentClass<Props, {}>;
    class ClassComp extends React.Component<Props> {
        render() {
            return (<div>{this.props.foo}</div>);
        }
    }

    const hoc = setDisplayName('NewDisplayName');

    SfcResult = hoc(SfcComp);
    // @ts-expect-error
    SfcResult = hoc(ClassComp);

    ClassResult = hoc(ClassComp);
    // @ts-expect-error
    ClassResult = hoc(SfcComp);
}

function testToRenderProps() {
    interface OutterProps {
        foo: number;
    }

    interface InnerProps {
        fooPlusOne: number;
    }

    const enhance = withProps<InnerProps, OutterProps>(({ foo }) => ({ fooPlusOne: foo + 1 }));
    const Enhanced = toRenderProps<InnerProps, OutterProps>(enhance);

    return <Enhanced foo={1}>{({ fooPlusOne }) => <h1>{fooPlusOne}</h1>}</Enhanced>;
}

function testFromRenderProps() {
    interface RenderProps {
        value: string;
    }

    interface InnerProps {
        renderValue: string;
    }

    interface OutterProps {
        outterValue: number;
    }

    interface ComponentProps {
        renderValue: string;
        outterValue: number;
    }

    interface RenderComponentProps {
        render: (renderProps: RenderProps) => React.ReactElement;
    }

    class RenderPropComponent extends React.Component<RenderComponentProps> {
        render () {
            return this.props.render({ value: 'test' });
        }
    }

    const component: React.FunctionComponent<ComponentProps> = ({ outterValue, renderValue }) => (
        <div>{outterValue}{renderValue}</div>
    );

    const Enhanced = fromRenderProps<InnerProps, OutterProps, RenderProps>(
        RenderPropComponent,
        ({ value }) => ({ renderValue: value }),
        'render'
    )(component);

    return <Enhanced outterValue={1} />;
}

function testToClass() {
    type Props = { foo: 1; };
    const MyComponent: React.FC<Props> = () => null;

    const MyComponentClass: React.ComponentClass<Props> = toClass(MyComponent);

    // @ts-expect-error
    <MyComponentClass />;
    // @ts-expect-error
    <MyComponentClass foo={2} />;
    <MyComponentClass foo={1} />;
}
