import * as React from "react";
import {
    // Higher-order components
    mapProps, withProps, withPropsOnChange, withHandlers,
    defaultProps, renameProp, renameProps, flattenProp,
    withState, withReducer, branch, renderComponent,
    renderNothing, shouldUpdate, pure, onlyUpdateForKeys,
    onlyUpdateForPropTypes, withContext, getContext,
    lifecycle, toClass,
    // Static property helpers
    setStatic, setPropTypes, setDisplayName,
    // Utilities
    compose, getDisplayName, wrapDisplayName, shallowEqual,
    isClassComponent, createEagerElement, createEagerFactory,
    createSink, componentFromProp, nest, hoistStatics,
    // Observable utilities
    componentFromStream, mapPropsStream, createEventHandler,
    componentFromStreamWithConfig, mapPropsStreamWithConfig,
    setObservableConfig,
} from "recompose";
import rxjsconfig from "recompose/rxjsObservableConfig";
import rxjs4config from "recompose/rxjs4ObservableConfig";
import mostConfig from "recompose/mostObservableConfig";
import xstreamConfig from "recompose/xstreamObservableConfig";
import baconConfig from "recompose/baconObservableConfig";
import kefirConfig from "recompose/kefirObservableConfig";

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
    interface InnerProps {
        onSubmit: React.MouseEventHandler<HTMLDivElement>;
        onChange: Function;
        foo: string;
    }
    interface HandlerProps {
        onSubmit: React.MouseEventHandler<HTMLDivElement>;
        onChange: Function;
    }
    interface OutterProps { out: number; }
    const InnerComponent: React.StatelessComponent<InnerProps> = ({onChange, onSubmit}) =>
      <div onClick={onSubmit}></div>;

    const enhancer = withHandlers<OutterProps, HandlerProps>({
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

    const enhancer2 = withHandlers<OutterProps, HandlerProps>((props) => ({
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
    const innerComponent: React.StatelessComponent<InnerProps> = ({c, b}: InnerProps) => <div>{c}, {b}</div>;

    const enhancer = renameProp("a", "c");
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);
}

function testRenameProps() {
    interface InnerProps { c: string; d: number; }
    interface OutterProps { a: string; b: number; }
    const innerComponent: React.StatelessComponent<InnerProps> = ({c, d}: InnerProps) => <div>{c}, {d}</div>;

    const enhancer = renameProps({ a:"c", b: "d" });
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);
}

function testFlattenProp() {
    interface InnerProps { a: string; b: string; y: {c: string; d: number;} }
    interface OutterProps { x: {a: string; b: number;}; y: {c: string; d: number;} }
    const innerComponent: React.StatelessComponent<InnerProps> = (props: InnerProps) => <div></div>;

    const enhancer = flattenProp("x");
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);
}

function testWithState() {
    interface InnerProps { count: number; setCount: (count: number) => number }
    interface OutterProps { title: string }
    const InnerComponent: React.StatelessComponent<InnerProps> = (props) =>
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
}

function testWithReducer() {
    interface State { count: number }
    interface Action { type: string }
    interface InnerProps { title: string; count: number; dispatch: (a: Action) => void; }
    interface OutterProps { title: string; bar: number; }
    const InnerComponent: React.StatelessComponent<InnerProps> = (props) =>
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

    const innerComponent: React.StatelessComponent<InnerProps> = (props: InnerProps) =>
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
}
