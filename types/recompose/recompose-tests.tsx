import * as React from "react";
import {
    Component,
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
    interface InnerProps { inn: number }
    interface OutterProps { out: string }
    const innerComponent = ({inn}: InnerProps) => <div>{inn}</div>;

    const enhancer = mapProps((props: OutterProps) => ({ inn: 123 } as InnerProps));
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);
}

function testWithProps() {
    interface InnerProps { inn: number }
    interface OutterProps { out: string }
    const innerComponent = ({inn}: InnerProps) => <div>{inn}</div>;

    const enhancer = withProps((props: OutterProps) => ({ inn: 123 } as InnerProps));
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);

    const enhancer2 = withProps<InnerProps, OutterProps>({ inn: 123 } as InnerProps);
    const enhanced2: React.ComponentClass<OutterProps> = enhancer2(innerComponent);
}

function testWithPropsOnChange() {
    interface InnerProps { inn: number }
    interface OutterProps { out: string }
    const innerComponent = ({inn}: InnerProps) => <div>{inn}</div>;

    const enhancer = withPropsOnChange(
      (props: OutterProps, nextProps: OutterProps) => true,
      (props: OutterProps) => ({ inn: 123 } as InnerProps));
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);

    const enhancer2 = withPropsOnChange(
      [ "out" ],
      (props: OutterProps) => ({ inn: 123 } as InnerProps));
    const enhanced2: React.ComponentClass<OutterProps> = enhancer2(innerComponent);
}

function testWithHandlers() {
    interface InnerProps { onSubmit: React.MouseEventHandler<HTMLDivElement>; onChange: Function; }
    interface OutterProps { out: string }
    const innerComponent = ({onChange, onSubmit}: InnerProps) =>
      <div onClick={onSubmit}></div>;

    const enhancer = withHandlers<InnerProps, OutterProps>({
      onChange: (props: OutterProps) => (e: any) => {},
      onSubmit: (props: OutterProps) => (e: any) => {},
    });
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);

    const enhancer2 = withHandlers<InnerProps, OutterProps>((props: OutterProps) => ({
      onChange: (props: OutterProps) => (e: any) => {},
      onSubmit: (props: OutterProps) => (e: any) => {},
    }));
    const enhanced2: React.ComponentClass<OutterProps> = enhancer2(innerComponent);
}

function testDefaultProps() {
    interface Props { a?: string; b?: number; }
    const innerComponent = ({a, b}: Props) => <div>{a}, {b}</div>;

    const enhancer = defaultProps({ a: "answer", b: 42 });
    const enhanced: React.StatelessComponent<Props> = enhancer<Props, ({a, b}: Props) => JSX.Element>(innerComponent);
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
    interface InnerProps { count: number; setCount: (count: number) => void }
    interface OutterProps { title: string }
    const innerComponent: React.StatelessComponent<OutterProps & InnerProps> = (props) =>
      <div onClick={() => props.setCount(0)}></div>;

    const enhancer = withState<OutterProps>("count", "setCount", 0);
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);

    const enhancer2 = withState<OutterProps>("count", "setCount",
      (p: OutterProps) => p.title.length);
    const enhanced2: React.ComponentClass<OutterProps> = enhancer2(innerComponent);
}

function testWithReducer() {
    interface State { count: number }
    interface Action { type: string }
    interface InnerProps { title: string; count: number; dispatch: (a: Action) => void; }
    interface OutterProps { title: string; }
    const innerComponent: React.StatelessComponent<InnerProps> = (props: InnerProps) =>
      <div onClick={() => props.dispatch({type: "INCREMENT"})}></div>;

    const enhancer = withReducer("count", "dispatch",
      (s: number, a: Action) => s + 1, 0);
    const enhanced: React.ComponentClass<OutterProps> = enhancer(innerComponent);

    const enhancer2 = withReducer("count", "dispatch",
      (s: number, a: Action) => s + 1,
      (props: OutterProps) => props.title.length);
    const enhanced2: React.ComponentClass<OutterProps> = enhancer2(innerComponent);
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
