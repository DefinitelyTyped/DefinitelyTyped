// Type definitions for Rax 1.0.0
// Project: https://rax.js.org
// Definitions by: Solo Jiang <https://github.com/solojiang>
//                 chenjun1011 <https://github.com/chenjun1011>
//                 imsobear <https://github.com/imsobear>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// for reference and documentation on how exactly to do it.

/// <reference path="global.d.ts" />

import * as CSS from 'csstype';
import * as PropTypes from 'prop-types';

type NativeAnimationEvent = AnimationEvent;
type NativeClipboardEvent = ClipboardEvent;
type NativeCompositionEvent = CompositionEvent;
type NativeDragEvent = DragEvent;
type NativeFocusEvent = FocusEvent;
type NativeKeyboardEvent = KeyboardEvent;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent;
type NativePointerEvent = PointerEvent;
type NativeTransitionEvent = TransitionEvent;
type NativeUIEvent = UIEvent;
type NativeWheelEvent = WheelEvent;
type Booleanish = boolean | 'true' | 'false';

/**
 * defined in scheduler/tracing
 */
interface SchedulerInteraction {
  id: number;
  name: string;
  timestamp: number;
}

// eslint-disable-next-line export-just-namespace
export = Rax;
export as namespace Rax;

declare namespace Rax {
  export const shared: {
    Host: any;
    Instance: RaxInstance;
    Element: RaxElement;
    flattenChildren: any;
  };
  /**
   * ======================================================================
   * Rax Elements
   * ======================================================================
   */
  type ElementType<P = any> =
    | {
        [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never
      }[keyof JSX.IntrinsicElements]
    | ComponentType<P>;

  type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

  type JSXElementConstructor<P> =
    | ((props: P) => RaxElement | null)
    | (new (props: P) => Component<P, any>);

  type Key = string | number;

  interface RefObject<T> {
    readonly current: T | null;
  }

  type Ref<T> =
    | { bivarianceHack(instance: T | null): void }['bivarianceHack']
    | RefObject<T>
    | null;
  type LegacyRef<T> = string | Ref<T>;

  /**
   * Gets the instance type for a Rax element. The instance will be different for various component types:
   *
   * - Rax class components will be the class instance. So if you had `class Foo extends Component<{}> {}`
   *   and used `ElementRef<typeof Foo>` then the type would be the instance of `Foo`.
   * - Rax stateless functional components do not have a backing instance and so `ElementRef<typeof Bar>`
   *   (when `Bar` is `function Bar() {}`) will give you the `undefined` type.
   * - JSX intrinsics like `div` will give you their DOM instance. For `ElementRef<'div'>` that would be
   *   `HTMLDivElement`. For `ElementRef<'input'>` that would be `HTMLInputElement`.
   * - Rax stateless functional components that forward a `ref` will give you the `ElementRef` of the forwarded
   *   to component.
   *
   * `C` must be the type _of_ a Rax component so you need to use typeof as in `ElementRef<typeof MyComponent>`.
   */
  type ElementRef<
      C extends
          | ForwardRefExoticComponent<any>
          | { new (props: any): Component<any> }
          | ((props: any, context?: any) => RaxElement | null)
          | keyof JSX.IntrinsicElements
  > =
      // need to check first if `ref` is a valid prop for ts@3.0
      // otherwise it will infer `{}` instead of `never`
      "ref" extends keyof ComponentPropsWithRef<C>
          ? NonNullable<ComponentPropsWithRef<C>["ref"]> extends Ref<
              infer Instance
          >
              ? Instance
              : never
          : never;

  type ComponentState = any;

  interface Attributes {
    key?: Key | null | undefined;
  }

  interface RefAttributes<T> extends Attributes {
    ref?: Ref<T> | undefined;
  }

  interface ClassAttributes<T> extends Attributes {
    ref?: LegacyRef<T> | undefined;
  }

  interface RaxElement<
    P = any,
    T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>
  > {
    type: T;
    props: P;
    key: Key | null;
  }

  interface RaxComponentElement<
    T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
    P = Pick<ComponentProps<T>, Exclude<keyof ComponentProps<T>, 'key' | 'ref'>>
  > extends RaxElement<P, T> {}

  interface FunctionComponentElement<P> extends RaxElement<P, FunctionComponent<P>> {
    ref?: 'ref' extends keyof P ? (P extends { ref?: infer R | undefined } ? R : never) : never | undefined;
  }

  type CElement<P, T extends Component<P, ComponentState>> = ComponentElement<P, T>;
  interface ComponentElement<P, T extends Component<P, ComponentState>>
    extends RaxElement<P, ComponentClass<P>> {
    ref?: LegacyRef<T> | undefined;
  }

  type ClassicElement<P> = CElement<P, ClassicComponent<P, ComponentState>>;

  // string fallback for custom web-components
  interface DOMElement<P extends HTMLAttributes<T> | SVGAttributes<T>, T extends Element>
    extends RaxElement<P, string> {
    ref: LegacyRef<T>;
  }

  // RaxHTML for RaxHTMLElement
  interface RaxHTMLElement<T extends HTMLElement>
    extends DetailedRaxHTMLElement<AllHTMLAttributes<T>, T> {}

  interface DetailedRaxHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement>
    extends DOMElement<P, T> {
    type: keyof RaxHTML;
  }

  // RaxSVG for RaxSVGElement
  interface RaxSVGElement extends DOMElement<SVGAttributes<SVGElement>, SVGElement> {
    type: keyof RaxSVG;
  }

  interface RaxPortal extends RaxElement {
    key: Key | null;
    children: RaxNode;
  }

  /**
   * ======================================================================
   * Rax Factories
   * ======================================================================
   */

  type Factory<P> = (props?: Attributes & P, ...children: RaxNode[]) => RaxElement<P>;

  type FunctionComponentFactory<P> = (
    props?: Attributes & P,
    ...children: RaxNode[]
  ) => FunctionComponentElement<P>;

  type ComponentFactory<P, T extends Component<P, ComponentState>> = (
    props?: ClassAttributes<T> & P,
    ...children: RaxNode[]
  ) => CElement<P, T>;

  type CFactory<P, T extends Component<P, ComponentState>> = ComponentFactory<P, T>;
  type ClassicFactory<P> = CFactory<P, ClassicComponent<P, ComponentState>>;

  type DOMFactory<P extends DOMAttributes<T>, T extends Element> = (
    props?: ClassAttributes<T> & P | null,
    ...children: RaxNode[]
  ) => DOMElement<P, T>;

  interface HTMLFactory<T extends HTMLElement>
    extends DetailedHTMLFactory<AllHTMLAttributes<T>, T> {}

  interface DetailedHTMLFactory<P extends HTMLAttributes<T>, T extends HTMLElement>
    extends DOMFactory<P, T> {
    (props?: ClassAttributes<T> & P | null, ...children: RaxNode[]): DetailedRaxHTMLElement<P, T>;
  }

  interface SVGFactory extends DOMFactory<SVGAttributes<SVGElement>, SVGElement> {
    (
      props?: ClassAttributes<SVGElement> & SVGAttributes<SVGElement> | null,
      ...children: RaxNode[]
    ): RaxSVGElement;
  }

  /**
   * ======================================================================
   * Rax Nodes
   * ======================================================================
   */

  type RaxText = string | number;
  type RaxChild = RaxElement | RaxText;

  interface RaxNodeArray extends Array<RaxNode> {}
  type RaxFragment = {} | RaxNodeArray;
  type RaxNode = RaxChild | RaxFragment | RaxPortal | boolean | null | undefined;

  /**
   * ======================================================================
   * Rax Top Level API
   * ======================================================================
   */

  // DOM Elements
  // TODO: generalize this to everything in `keyof RaxHTML`, not just "input"
  function createElement(
    type: 'input',
    props?: InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> | null,
    ...children: RaxNode[]
  ): DetailedRaxHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  function createElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
    type: keyof RaxHTML,
    props?: ClassAttributes<T> & P | null,
    ...children: RaxNode[]
  ): DetailedRaxHTMLElement<P, T>;
  function createElement<P extends SVGAttributes<T>, T extends SVGElement>(
    type: keyof RaxSVG,
    props?: ClassAttributes<T> & P | null,
    ...children: RaxNode[]
  ): RaxSVGElement;
  function createElement<P extends DOMAttributes<T>, T extends Element>(
    type: string,
    props?: ClassAttributes<T> & P | null,
    ...children: RaxNode[]
  ): DOMElement<P, T>;

  // Custom components

  function createElement<P extends {}>(
    type: FunctionComponent<P>,
    props?: Attributes & P | null,
    ...children: RaxNode[]
  ): FunctionComponentElement<P>;
  function createElement<P extends {}>(
    type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>,
    props?: ClassAttributes<ClassicComponent<P, ComponentState>> & P | null,
    ...children: RaxNode[]
  ): CElement<P, ClassicComponent<P, ComponentState>>;
  function createElement<
    P extends {},
    T extends Component<P, ComponentState>,
    C extends ComponentClass<P>
  >(
    type: ClassType<P, T, C>,
    props?: ClassAttributes<T> & P | null,
    ...children: RaxNode[]
  ): CElement<P, T>;
  function createElement<P extends {}>(
    type: FunctionComponent<P> | ComponentClass<P> | string,
    props?: Attributes & P | null,
    ...children: RaxNode[]
  ): RaxElement<P>;

  // Context via RenderProps
  interface ProviderProps<T> {
    value: T;
    children?: RaxNode | undefined;
  }

  interface ConsumerProps<T> {
    children: (value: T) => RaxNode;
    unstable_observedBits?: number | undefined;
  }

  interface ExoticComponent<P = {}> {
    /**
     * **NOTE**: Exotic components are not callable.
     */
    (props: P): RaxElement | null;
    readonly $$typeof: symbol;
  }

  interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
    displayName?: string | undefined;
  }

  interface ProviderExoticComponent<P> extends ExoticComponent<P> {
    propTypes?: WeakValidationMap<P> | undefined;
  }

  type ContextType<C extends Context<any>> = C extends Context<infer T> ? T : never;

  type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;
  type Consumer<T> = ExoticComponent<ConsumerProps<T>>;
  interface Context<T> {
    Provider: Provider<T>;
    Consumer: Consumer<T>;
    displayName?: string | undefined;
  }
  function createContext<T>(
    defaultValue: T,
    calculateChangedBits?: (prev: T, next: T) => number
  ): Context<T>;

  const Children: RaxChildren;
  const Fragment: ExoticComponent<{ children?: RaxNode | undefined }>;

  const version: string;

  interface RenderOption {
    driver: any;
    hydrate?: boolean;
  }
  export const render: Renderer;

  export interface Renderer {
    <T extends Element>(
        element: DOMElement<DOMAttributes<T>, T>,
        container: Element | DocumentFragment | null,
        options?: RenderOption,
        callback?: () => void
    ): T;

    (
        element: Array<DOMElement<DOMAttributes<any>, any>>,
        container: Element | DocumentFragment | null,
        options?: RenderOption,
        callback?: () => void
    ): Element;

    (
        element: FunctionComponentElement<any> | Array<FunctionComponentElement<any>>,
        container: Element | DocumentFragment | null,
        options?: RenderOption,
        callback?: () => void
    ): void;

    <P, T extends Component<P, ComponentState>>(
        element: CElement<P, T>,
        container: Element | DocumentFragment | null,
        options?: RenderOption,
        callback?: () => void
    ): T;

    (
        element: Array<CElement<any, Component<any, ComponentState>>>,
        container: Element | DocumentFragment | null,
        options?: RenderOption,
        callback?: () => void
    ): Component<any, ComponentState>;

    <P>(
        element: RaxElement<P>,
        container: Element | DocumentFragment | null,
        options?: RenderOption,
        callback?: () => void
    ): Component<P, ComponentState> | Element | void;

    (
        element: RaxElement[],
        container: Element | DocumentFragment | null,
        options?: RenderOption,
        callback?: () => void
    ): Component<any, ComponentState> | Element | void;
  }

  /**
   * ======================================================================
   * Rax Component API
   * ======================================================================
   */
  type RaxInstance = Component<any> | Element;

  // Base component for plain JS classes
  interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> {}
  class Component<P, S> {
    readonly props: Readonly<P> & Readonly<{ children?: RaxNode | undefined }>;
    state: Readonly<S>;

    constructor(props: Readonly<P>);

    setState<K extends keyof S>(
      state:
        | ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null)
        | (Pick<S, K> | S | null),
      callback?: () => void
    ): void;

    forceUpdate(callBack?: () => void): void;

    render(): RaxNode;

    refs: {
      [key: string]: RaxInstance
    };

    context: any;
  }

  class PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {}

  interface ClassicComponent<P = {}, S = {}> extends Component<P, S> {
    replaceState(nextState: S, callback?: () => void): void;
    isMounted(): boolean;
    getInitialState?(): S;
  }

  interface ChildContextProvider<CC> {
    getChildContext(): CC;
  }

  type FC<P = {}> = FunctionComponent<P>;

  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): RaxElement | null;
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
  }

  type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

  interface ForwardRefRenderFunction<T, P = {}> {
      (props: PropsWithChildren<P>, ref: ForwardedRef<T>): RaxElement | null;
      displayName?: string | undefined;
      // explicit rejected with `never` required due to
      // https://github.com/microsoft/TypeScript/issues/36826
      /**
       * defaultProps are not supported on render functions
       */
      defaultProps?: never | undefined;
      /**
       * propTypes are not supported on render functions
       */
      propTypes?: never | undefined;
  }

  /**
   * @deprecated Use ForwardRefRenderFunction. forwardRef doesn't accept a
   *             "real" component.
   */
  interface RefForwardingComponent <T, P = {}> extends ForwardRefRenderFunction<T, P> {}

  interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
    new (props: P, context?: any): Component<P, S>;
    propTypes?: WeakValidationMap<P> | undefined;
    contextType?: Context<any> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    childContextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
  }

  interface ClassicComponentClass<P = {}> extends ComponentClass<P> {
    new (props: P, context?: any): ClassicComponent<P, ComponentState>;
    getDefaultProps?(): P;
  }

  /**
   * We use an intersection type to infer multiple type parameters from
   * a single argument, which is useful for many top-level API defs.
   * See https://github.com/Microsoft/TypeScript/issues/7234 for more info.
   */
  type ClassType<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>> = C &
    (new (props: P, context?: any) => T);

  /**
   * ======================================================================
   * Rax Component Specs and Lifecycle
   * ======================================================================
   */

  // This should actually be something like `Lifecycle<P, S> | DeprecatedLifecycle<P, S>`,
  // as Rax will _not_ call the deprecated lifecycle methods if any of the new lifecycle
  // methods are present.
  interface ComponentLifecycle<P, S, SS = any> {
    /**
     * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
     */
    componentDidMount?(): void;
    /**
     * Called to determine whether the change in props and state should trigger a re-render.
     *
     * `Component` always returns true.
     * `PureComponent` implements a shallow comparison on props and state and returns true if any
     * props or states have changed.
     *
     * If false is returned, `Component#render`, `componentWillUpdate`
     * and `componentDidUpdate` will not be called.
     */
    shouldComponentUpdate?(
      nextProps: Readonly<P>,
      nextState: Readonly<S>,
      nextContext: any
    ): boolean;
    /**
     * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
     * cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.
     */
    componentWillUnmount?(): void;
    /**
     * Catches exceptions generated in descendant components. Unhandled exceptions will cause
     * the entire component tree to unmount.
     */
    componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;

    /**
     * Runs before Rax applies the result of `render` to the document, and
     * returns an object to be given to componentDidUpdate. Useful for saving
     * things such as scroll position before `render` causes changes to it.
     *
     * Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
     * lifecycle events from running.
     */
    getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
    /**
     * Called immediately after updating occurs. Not called for the initial render.
     *
     * The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.
     */
    componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
    componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
  }

  // Unfortunately, we have no way of declaring that the component constructor must implement this
  interface StaticLifecycle<P, S> {
    getDerivedStateFromProps?: GetDerivedStateFromProps<P, S> | undefined;
    getDerivedStateFromError?: GetDerivedStateFromError<P, S> | undefined;
  }

  type GetDerivedStateFromProps<P, S> =
    /**
     * Returns an update to a component's state based on its new props and old state.
     *
     * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
     */
    (nextProps: Readonly<P>, prevState: S) => Partial<S> | null;

  type GetDerivedStateFromError<P, S> =
    /**
     * This lifecycle is invoked after an error has been thrown by a descendant component.
     * It receives the error that was thrown as a parameter and should return a value to update state.
     *
     * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
     */
    (error: any) => Partial<S> | null;

    interface Mixin<P, S> extends ComponentLifecycle<P, S> {
        mixins?: Array<Mixin<P, S>> | undefined;
        statics?: {
            [key: string]: any;
        } | undefined;

        displayName?: string | undefined;
        propTypes?: ValidationMap<any> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        childContextTypes?: ValidationMap<any> | undefined;

        getDefaultProps?(): P;
        getInitialState?(): S;
    }

  interface ComponentSpec<P, S> extends Mixin<P, S> {
    render(): RaxNode;

    [propertyName: string]: any;
  }

  function createRef<T>(): RefObject<T>;

  // will show `ForwardRef(${Component.displayName || Component.name})` in devtools by default,
  // but can be given its own specific name
  interface ForwardRefExoticComponent<P> extends NamedExoticComponent<P> {
    defaultProps?: Partial<P> | undefined;
  }

  function forwardRef<T, P = {}>(render: ForwardRefRenderFunction<T, P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

  /** Ensures that the props do not include ref at all */
  type PropsWithoutRef<P> =
    // Just Pick would be sufficient for this, but I'm trying to avoid unnecessary mapping over union types
    // https://github.com/Microsoft/TypeScript/issues/28339
    'ref' extends keyof P ? Pick<P, Exclude<keyof P, 'ref'>> : P;
  /** Ensures that the props do not include string ref, which cannot be forwarded */
  type PropsWithRef<P> =
    // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
    'ref' extends keyof P
      ? P extends { ref?: infer R | undefined }
        ? string extends R
          ? PropsWithoutRef<P> & { ref?: Exclude<R, string> | undefined }
          : P
        : P
      : P;

  type PropsWithChildren<P> = P & { children?: RaxNode | undefined };

  /**
   * NOTE: prefer ComponentPropsWithRef, if the ref is forwarded,
   * or ComponentPropsWithoutRef when refs are not supported.
   */
  type ComponentProps<
    T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
  > = T extends JSXElementConstructor<infer P>
    ? P
    : T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : {};
  type ComponentPropsWithRef<T extends ElementType> = T extends ComponentClass<infer P>
    ? PropsWithoutRef<P> & RefAttributes<InstanceType<T>>
    : PropsWithRef<ComponentProps<T>>;
  type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<ComponentProps<T>>;

  type ComponentRef<T extends ElementType> = T extends NamedExoticComponent<
      ComponentPropsWithoutRef<T> & RefAttributes<infer Method>
  >
      ? Method
      : ComponentPropsWithRef<T> extends RefAttributes<infer Method>
          ? Method
          : never;

  // will show `Memo(${Component.displayName || Component.name})` in devtools by default,
  // but can be given its own specific name
  type MemoExoticComponent<T extends ComponentType<any>> = NamedExoticComponent<
    ComponentPropsWithRef<T>
  > & {
    readonly type: T;
  };

  function memo<P extends object>(
    Component: FC<P>,
    propsAreEqual?: (
      prevProps: Readonly<PropsWithChildren<P>>,
      nextProps: Readonly<PropsWithChildren<P>>
    ) => boolean
  ): NamedExoticComponent<P>;
  function memo<T extends ComponentType<any>>(
    Component: T,
    propsAreEqual?: (
      prevProps: Readonly<ComponentProps<T>>,
      nextProps: Readonly<ComponentProps<T>>
    ) => boolean
  ): MemoExoticComponent<T>;

  /**
   * ======================================================================
   * Rax Hooks
   * ======================================================================
   */

  // Unlike the class component setState, the updates are not allowed to be partial
  type SetStateAction<S> = S | ((prevState: S) => S);
  // this technically does accept a second argument, but it's already under a deprecation warning
  // and it's not even released so probably better to not define it.
  type Dispatch<A> = (value: A) => void;
  // Unlike redux, the actions _can_ be anything
  type Reducer<S, A> = (prevState: S, action: A) => S;
  // types used to try and prevent the compiler from reducing S
  // to a supertype common with the second argument to useReducer()
  type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
  type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A> ? A : never;
  // The identity check is done with the SameValue algorithm (Object.is), which is stricter than ===
  // TODO (TypeScript 3.0): ReadonlyArray<unknown>
  type DependencyList = ReadonlyArray<any>;

  // NOTE: callbacks are _only_ allowed to return either void, or a destructor.
  // The destructor is itself only allowed to return void.
  type EffectCallback = () => void | (() => void | undefined);

  interface MutableRefObject<T> {
    current: T;
  }

  // This will technically work if you give a Consumer<T> or Provider<T> but it's deprecated and warns
  /**
   * Accepts a context object (the value returned from `Rax.createContext`) and returns the current
   * context value, as given by the nearest context provider for the given context.
   */
  function useContext<T>(
    context: Context<T> /* , (not public API) observedBits?: number|boolean */
  ): T;
  /**
   * Returns a stateful value, and a function to update it.
   */
  function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  // convenience overload when first argument is ommitted
  /**
   * Returns a stateful value, and a function to update it.
   */
  function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
  /**
   * An alternative to `useState`.
   *
   * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
   * multiple sub-values. It also lets you optimize performance for components that trigger deep
   * updates because you can pass `dispatch` down instead of callbacks.
   */
  // overload where "I" may be a subset of ReducerState<R>; used to provide autocompletion.
  // If "I" matches ReducerState<R> exactly then the last overload will allow initializer to be ommitted.
  // the last overload effectively behaves as if the identity function (x => x) is the initializer.
  function useReducer<R extends Reducer<any, any>, I>(
    reducer: R,
    initializerArg: I & ReducerState<R>,
    initializer: (arg: I & ReducerState<R>) => ReducerState<R>
  ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
  /**
   * An alternative to `useState`.
   *
   * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
   * multiple sub-values. It also lets you optimize performance for components that trigger deep
   * updates because you can pass `dispatch` down instead of callbacks.
   */
  // overload for free "I"; all goes as long as initializer converts it into "ReducerState<R>".
  function useReducer<R extends Reducer<any, any>, I>(
    reducer: R,
    initializerArg: I,
    initializer: (arg: I) => ReducerState<R>
  ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
  /**
   * An alternative to `useState`.
   *
   * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
   * multiple sub-values. It also lets you optimize performance for components that trigger deep
   * updates because you can pass `dispatch` down instead of callbacks.
   */

  // I'm not sure if I keep this 2-ary or if I make it (2,3)-ary; it's currently (2,3)-ary.
  // The Flow types do have an overload for 3-ary invocation with undefined initializer.

  // NOTE: without the ReducerState indirection, TypeScript would reduce S to be the most common
  // supertype between the reducer's return type and the initialState (or the initializer's return type),
  // which would prevent autocompletion from ever working.

  // TODO: double-check if this weird overload logic is necessary. It is possible it's either a bug
  // in older versions, or a regression in newer versions of the typescript completion service.
  function useReducer<R extends Reducer<any, any>>(
    reducer: R,
    initialState: ReducerState<R>,
    initializer?: undefined
  ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
  /**
   * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
   * (`initialValue`). The returned object will persist for the full lifetime of the component.
   *
   * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
   * value around similar to how you’d use instance fields in classes.
   */
  // TODO (TypeScript 3.0): <T extends unknown>
  function useRef<T>(initialValue: T): MutableRefObject<T>;
  // convenience overload for refs given as a ref prop as they typically start with a null value
  /**
   * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
   * (`initialValue`). The returned object will persist for the full lifetime of the component.
   *
   * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
   * value around similar to how you’d use instance fields in classes.
   *
   * Usage note: if you need the result of useRef to be directly mutable, include `| null` in the type
   * of the generic argument.
   */
  // TODO (TypeScript 3.0): <T extends unknown>
  function useRef<T>(initialValue: T | null): RefObject<T>;
  // convenience overload for potentially undefined initialValue / call with 0 arguments
  // has a default to stop it from defaulting to {} instead
  /**
   * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
   * (`initialValue`). The returned object will persist for the full lifetime of the component.
   *
   * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
   * value around similar to how you’d use instance fields in classes.
   */
  // TODO (TypeScript 3.0): <T extends unknown>
  function useRef<T = undefined>(): MutableRefObject<T | undefined>;
  /**
   * The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations.
   * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
   * `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.
   *
   * Prefer the standard `useEffect` when possible to avoid blocking visual updates.
   *
   * If you’re migrating code from a class component, `useLayoutEffect` fires in the same phase as
   * `componentDidMount` and `componentDidUpdate`.
   */
  function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
  /**
   * Accepts a function that contains imperative, possibly effectful code.
   *
   * @param effect Imperative function that can return a cleanup function
   * @param deps If present, effect will only activate if the values in the list change.
   */
  function useEffect(effect: EffectCallback, deps?: DependencyList): void;
  // NOTE: this does not accept strings, but this will have to be fixed by removing strings from type Ref<T>
  /**
   * `useImperativeHandle` customizes the instance value that is exposed to parent components when using
   * `ref`. As always, imperative code using refs should be avoided in most cases.
   *
   * `useImperativeHandle` should be used with `Rax.forwardRef`.
   */
  function useImperativeHandle<T, R extends T>(
    ref: Ref<T> | undefined,
    init: () => R,
    deps?: DependencyList
  ): void;
  // I made 'inputs' required here and in useMemo as there's no point to memoizing without the memoization key
  // useCallback(X) is identical to just using X, useMemo(() => Y) is identical to just using Y.
  /**
   * `useCallback` will return a memoized version of the callback that only changes if one of the `inputs`
   * has changed.
   */
  // TODO (TypeScript 3.0): <T extends (...args: never[]) => unknown>
  function useCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T;
  /**
   * `useMemo` will only recompute the memoized value when one of the `deps` has changed.
   *
   * Usage note: if calling `useMemo` with a referentially stable function, also give it as the input in
   * the second argument.
   *
   * ```ts
   * function expensive () { ... }
   *
   * function Component () {
   *   const expensiveResult = useMemo(expensive, [expensive])
   *   return ...
   * }
   * ```
   */
  // allow undefined, but don't make it optional as that is very likely a mistake
  function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;

  /**
   * ======================================================================
   * Rax Event System
   * ======================================================================
   */

  // TODO: change any to unknown when moving to TS v3
  interface BaseSyntheticEvent<E = object, C = any, T = any> {
    nativeEvent: E;
    currentTarget: C;
    target: T;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    preventDefault(): void;
    isDefaultPrevented(): boolean;
    stopPropagation(): void;
    isPropagationStopped(): boolean;
    persist(): void;
    timeStamp: number;
    type: string;
  }

  /**
   * currentTarget - a reference to the element on which the event listener is registered.
   *
   * target - a reference to the element from which the event was originally dispatched.
   * This might be a child element to the element on which the event listener is registered.
   * If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
   */
  interface SyntheticEvent<T = Element, E = Event>
    extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}

  interface ClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> {
    clipboardData: DataTransfer;
  }

  interface CompositionEvent<T = Element> extends SyntheticEvent<T, NativeCompositionEvent> {
    data: string;
  }

  interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
    dataTransfer: DataTransfer;
  }

  interface PointerEvent<T = Element> extends MouseEvent<T, NativePointerEvent> {
    pointerId: number;
    pressure: number;
    tiltX: number;
    tiltY: number;
    width: number;
    height: number;
    pointerType: 'mouse' | 'pen' | 'touch';
    isPrimary: boolean;
  }

  interface FocusEvent<T = Element> extends SyntheticEvent<T, NativeFocusEvent> {
    relatedTarget: EventTarget | null;
    target: EventTarget & T;
  }

  interface FormEvent<T = Element> extends SyntheticEvent<T> {}

  interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
  }

  interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
  }

  interface KeyboardEvent<T = Element> extends SyntheticEvent<T, NativeKeyboardEvent> {
    altKey: boolean;
    /** @deprecated */
    charCode: number;
    ctrlKey: boolean;
    code: string;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: string): boolean;
    /**
     * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
     */
    key: string;
    /** @deprecated */
    keyCode: number;
    locale: string;
    location: number;
    metaKey: boolean;
    repeat: boolean;
    shiftKey: boolean;
    /** @deprecated */
    which: number;
  }

  interface MouseEvent<T = Element, E = NativeMouseEvent> extends SyntheticEvent<T, E> {
    altKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: string): boolean;
    metaKey: boolean;
    movementX: number;
    movementY: number;
    pageX: number;
    pageY: number;
    relatedTarget: EventTarget;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
  }

  interface TouchEvent<T = Element> extends SyntheticEvent<T, NativeTouchEvent> {
    altKey: boolean;
    changedTouches: TouchList;
    ctrlKey: boolean;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: string): boolean;
    metaKey: boolean;
    shiftKey: boolean;
    targetTouches: TouchList;
    touches: TouchList;
  }

  interface UIEvent<T = Element> extends SyntheticEvent<T, NativeUIEvent> {
    detail: number;
    view: AbstractView;
  }

  interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
    deltaMode: number;
    deltaX: number;
    deltaY: number;
    deltaZ: number;
  }

  interface AnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> {
    animationName: string;
    elapsedTime: number;
    pseudoElement: string;
  }

  interface TransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
    elapsedTime: number;
    propertyName: string;
    pseudoElement: string;
  }

  interface AppearEvent<T = Element> extends SyntheticEvent<T> {
    direction: 'up' | 'down';
  }

  //
  // Event Handler Types
  // ----------------------------------------------------------------------

  type EventHandler<E extends SyntheticEvent<any>> = {
    bivarianceHack(event: E): void;
  }['bivarianceHack'];

  type RaxEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;

  type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
  type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
  type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
  type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
  type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
  type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
  type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
  type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
  type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
  type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
  type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
  type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
  type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
  type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;
  type AppearEventHandler<T = Element> = EventHandler<AppearEvent<T>>;

  //
  // Props / DOM Attributes
  // ----------------------------------------------------------------------

  interface HTMLProps<T> extends AllHTMLAttributes<T>, ClassAttributes<T> {}

  type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

  interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}

  interface DOMAttributes<T> {
    children?: RaxNode | undefined;
    dangerouslySetInnerHTML?: {
      __html: string;
    } | undefined;

    // weex
    [key: string]: any;

    // Clipboard Events
    onCopy?: ClipboardEventHandler<T> | undefined;
    onCopyCapture?: ClipboardEventHandler<T> | undefined;
    onCut?: ClipboardEventHandler<T> | undefined;
    onCutCapture?: ClipboardEventHandler<T> | undefined;
    onPaste?: ClipboardEventHandler<T> | undefined;
    onPasteCapture?: ClipboardEventHandler<T> | undefined;

    // Composition Events
    onCompositionEnd?: CompositionEventHandler<T> | undefined;
    onCompositionEndCapture?: CompositionEventHandler<T> | undefined;
    onCompositionStart?: CompositionEventHandler<T> | undefined;
    onCompositionStartCapture?: CompositionEventHandler<T> | undefined;
    onCompositionUpdate?: CompositionEventHandler<T> | undefined;
    onCompositionUpdateCapture?: CompositionEventHandler<T> | undefined;

    // Focus Events
    onFocus?: FocusEventHandler<T> | undefined;
    onFocusCapture?: FocusEventHandler<T> | undefined;
    onBlur?: FocusEventHandler<T> | undefined;
    onBlurCapture?: FocusEventHandler<T> | undefined;

    // Form Events
    onChange?: FormEventHandler<T> | undefined;
    onChangeCapture?: FormEventHandler<T> | undefined;
    onBeforeInput?: FormEventHandler<T> | undefined;
    onBeforeInputCapture?: FormEventHandler<T> | undefined;
    onInput?: FormEventHandler<T> | undefined;
    onInputCapture?: FormEventHandler<T> | undefined;
    onReset?: FormEventHandler<T> | undefined;
    onResetCapture?: FormEventHandler<T> | undefined;
    onSubmit?: FormEventHandler<T> | undefined;
    onSubmitCapture?: FormEventHandler<T> | undefined;
    onInvalid?: FormEventHandler<T> | undefined;
    onInvalidCapture?: FormEventHandler<T> | undefined;

    // Image Events
    onLoad?: RaxEventHandler<T> | undefined;
    onLoadCapture?: RaxEventHandler<T> | undefined;
    onError?: RaxEventHandler<T> | undefined; // also a Media Event
    onErrorCapture?: RaxEventHandler<T> | undefined; // also a Media Event

    // Keyboard Events
    onKeyDown?: KeyboardEventHandler<T> | undefined;
    onKeyDownCapture?: KeyboardEventHandler<T> | undefined;
    onKeyPress?: KeyboardEventHandler<T> | undefined;
    onKeyPressCapture?: KeyboardEventHandler<T> | undefined;
    onKeyUp?: KeyboardEventHandler<T> | undefined;
    onKeyUpCapture?: KeyboardEventHandler<T> | undefined;

    // Media Events
    onAbort?: RaxEventHandler<T> | undefined;
    onAbortCapture?: RaxEventHandler<T> | undefined;
    onCanPlay?: RaxEventHandler<T> | undefined;
    onCanPlayCapture?: RaxEventHandler<T> | undefined;
    onCanPlayThrough?: RaxEventHandler<T> | undefined;
    onCanPlayThroughCapture?: RaxEventHandler<T> | undefined;
    onDurationChange?: RaxEventHandler<T> | undefined;
    onDurationChangeCapture?: RaxEventHandler<T> | undefined;
    onEmptied?: RaxEventHandler<T> | undefined;
    onEmptiedCapture?: RaxEventHandler<T> | undefined;
    onEncrypted?: RaxEventHandler<T> | undefined;
    onEncryptedCapture?: RaxEventHandler<T> | undefined;
    onEnded?: RaxEventHandler<T> | undefined;
    onEndedCapture?: RaxEventHandler<T> | undefined;
    onLoadedData?: RaxEventHandler<T> | undefined;
    onLoadedDataCapture?: RaxEventHandler<T> | undefined;
    onLoadedMetadata?: RaxEventHandler<T> | undefined;
    onLoadedMetadataCapture?: RaxEventHandler<T> | undefined;
    onLoadStart?: RaxEventHandler<T> | undefined;
    onLoadStartCapture?: RaxEventHandler<T> | undefined;
    onPause?: RaxEventHandler<T> | undefined;
    onPauseCapture?: RaxEventHandler<T> | undefined;
    onPlay?: RaxEventHandler<T> | undefined;
    onPlayCapture?: RaxEventHandler<T> | undefined;
    onPlaying?: RaxEventHandler<T> | undefined;
    onPlayingCapture?: RaxEventHandler<T> | undefined;
    onProgress?: RaxEventHandler<T> | undefined;
    onProgressCapture?: RaxEventHandler<T> | undefined;
    onRateChange?: RaxEventHandler<T> | undefined;
    onRateChangeCapture?: RaxEventHandler<T> | undefined;
    onSeeked?: RaxEventHandler<T> | undefined;
    onSeekedCapture?: RaxEventHandler<T> | undefined;
    onSeeking?: RaxEventHandler<T> | undefined;
    onSeekingCapture?: RaxEventHandler<T> | undefined;
    onStalled?: RaxEventHandler<T> | undefined;
    onStalledCapture?: RaxEventHandler<T> | undefined;
    onSuspend?: RaxEventHandler<T> | undefined;
    onSuspendCapture?: RaxEventHandler<T> | undefined;
    onTimeUpdate?: RaxEventHandler<T> | undefined;
    onTimeUpdateCapture?: RaxEventHandler<T> | undefined;
    onVolumeChange?: RaxEventHandler<T> | undefined;
    onVolumeChangeCapture?: RaxEventHandler<T> | undefined;
    onWaiting?: RaxEventHandler<T> | undefined;
    onWaitingCapture?: RaxEventHandler<T> | undefined;

    // MouseEvents
    onAuxClick?: MouseEventHandler<T> | undefined;
    onAuxClickCapture?: MouseEventHandler<T> | undefined;
    onClick?: MouseEventHandler<T> | undefined;
    onClickCapture?: MouseEventHandler<T> | undefined;
    onContextMenu?: MouseEventHandler<T> | undefined;
    onContextMenuCapture?: MouseEventHandler<T> | undefined;
    onDoubleClick?: MouseEventHandler<T> | undefined;
    onDoubleClickCapture?: MouseEventHandler<T> | undefined;
    onDrag?: DragEventHandler<T> | undefined;
    onDragCapture?: DragEventHandler<T> | undefined;
    onDragEnd?: DragEventHandler<T> | undefined;
    onDragEndCapture?: DragEventHandler<T> | undefined;
    onDragEnter?: DragEventHandler<T> | undefined;
    onDragEnterCapture?: DragEventHandler<T> | undefined;
    onDragExit?: DragEventHandler<T> | undefined;
    onDragExitCapture?: DragEventHandler<T> | undefined;
    onDragLeave?: DragEventHandler<T> | undefined;
    onDragLeaveCapture?: DragEventHandler<T> | undefined;
    onDragOver?: DragEventHandler<T> | undefined;
    onDragOverCapture?: DragEventHandler<T> | undefined;
    onDragStart?: DragEventHandler<T> | undefined;
    onDragStartCapture?: DragEventHandler<T> | undefined;
    onDrop?: DragEventHandler<T> | undefined;
    onDropCapture?: DragEventHandler<T> | undefined;
    onMouseDown?: MouseEventHandler<T> | undefined;
    onMouseDownCapture?: MouseEventHandler<T> | undefined;
    onMouseEnter?: MouseEventHandler<T> | undefined;
    onMouseLeave?: MouseEventHandler<T> | undefined;
    onMouseMove?: MouseEventHandler<T> | undefined;
    onMouseMoveCapture?: MouseEventHandler<T> | undefined;
    onMouseOut?: MouseEventHandler<T> | undefined;
    onMouseOutCapture?: MouseEventHandler<T> | undefined;
    onMouseOver?: MouseEventHandler<T> | undefined;
    onMouseOverCapture?: MouseEventHandler<T> | undefined;
    onMouseUp?: MouseEventHandler<T> | undefined;
    onMouseUpCapture?: MouseEventHandler<T> | undefined;

    // Selection Events
    onSelect?: RaxEventHandler<T> | undefined;
    onSelectCapture?: RaxEventHandler<T> | undefined;

    // Touch Events
    onTouchCancel?: TouchEventHandler<T> | undefined;
    onTouchCancelCapture?: TouchEventHandler<T> | undefined;
    onTouchEnd?: TouchEventHandler<T> | undefined;
    onTouchEndCapture?: TouchEventHandler<T> | undefined;
    onTouchMove?: TouchEventHandler<T> | undefined;
    onTouchMoveCapture?: TouchEventHandler<T> | undefined;
    onTouchStart?: TouchEventHandler<T> | undefined;
    onTouchStartCapture?: TouchEventHandler<T> | undefined;

    // Pointer Events
    onPointerDown?: PointerEventHandler<T> | undefined;
    onPointerDownCapture?: PointerEventHandler<T> | undefined;
    onPointerMove?: PointerEventHandler<T> | undefined;
    onPointerMoveCapture?: PointerEventHandler<T> | undefined;
    onPointerUp?: PointerEventHandler<T> | undefined;
    onPointerUpCapture?: PointerEventHandler<T> | undefined;
    onPointerCancel?: PointerEventHandler<T> | undefined;
    onPointerCancelCapture?: PointerEventHandler<T> | undefined;
    onPointerEnter?: PointerEventHandler<T> | undefined;
    onPointerEnterCapture?: PointerEventHandler<T> | undefined;
    onPointerLeave?: PointerEventHandler<T> | undefined;
    onPointerLeaveCapture?: PointerEventHandler<T> | undefined;
    onPointerOver?: PointerEventHandler<T> | undefined;
    onPointerOverCapture?: PointerEventHandler<T> | undefined;
    onPointerOut?: PointerEventHandler<T> | undefined;
    onPointerOutCapture?: PointerEventHandler<T> | undefined;
    onGotPointerCapture?: PointerEventHandler<T> | undefined;
    onGotPointerCaptureCapture?: PointerEventHandler<T> | undefined;
    onLostPointerCapture?: PointerEventHandler<T> | undefined;
    onLostPointerCaptureCapture?: PointerEventHandler<T> | undefined;

    // UI Events
    onScroll?: UIEventHandler<T> | undefined;
    onScrollCapture?: UIEventHandler<T> | undefined;

    // Wheel Events
    onWheel?: WheelEventHandler<T> | undefined;
    onWheelCapture?: WheelEventHandler<T> | undefined;

    // Animation Events
    onAnimationStart?: AnimationEventHandler<T> | undefined;
    onAnimationStartCapture?: AnimationEventHandler<T> | undefined;
    onAnimationEnd?: AnimationEventHandler<T> | undefined;
    onAnimationEndCapture?: AnimationEventHandler<T> | undefined;
    onAnimationIteration?: AnimationEventHandler<T> | undefined;
    onAnimationIterationCapture?: AnimationEventHandler<T> | undefined;

    // Transition Events
    onTransitionEnd?: TransitionEventHandler<T> | undefined;
    onTransitionEndCapture?: TransitionEventHandler<T> | undefined;

    // Weex Common Events
    onLongpress?: MouseEventHandler<T> | undefined;
    onAppear?: AppearEventHandler<T> | undefined;
    onDisappear?: AppearEventHandler<T> | undefined;
  }

  export interface CSSProperties extends CSS.Properties<string | number> {
    /**
     * The index signature was removed to enable closed typing for style
     * using CSSType. You're able to use type assertion or module augmentation
     * to add properties or an index signature of your own.
     *
     * For examples and more information, visit:
     * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
     */
    [key: string]: any;
  }

  // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
  interface AriaAttributes {
    /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
    'aria-activedescendant'?: string | undefined;
    /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
    'aria-atomic'?: boolean | 'false' | 'true' | undefined;
    /**
     * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
     * presented if they are made.
     */
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both' | undefined;
    /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
    'aria-busy'?: boolean | 'false' | 'true' | undefined;
    /**
     * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
     * @see aria-pressed @see aria-selected.
     */
    'aria-checked'?: boolean | 'false' | 'mixed' | 'true' | undefined;
    /**
     * Defines the total number of columns in a table, grid, or treegrid.
     * @see aria-colindex.
     */
    'aria-colcount'?: number | undefined;
    /**
     * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
     * @see aria-colcount @see aria-colspan.
     */
    'aria-colindex'?: number | undefined;
    /**
     * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-colindex @see aria-rowspan.
     */
    'aria-colspan'?: number | undefined;
    /**
     * Identifies the element (or elements) whose contents or presence are controlled by the current element.
     * @see aria-owns.
     */
    'aria-controls'?: string | undefined;
    /** Indicates the element that represents the current item within a container or set of related elements. */
    'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time' | undefined;
    /**
     * Identifies the element (or elements) that describes the object.
     * @see aria-labelledby
     */
    'aria-describedby'?: string | undefined;
    /**
     * Identifies the element that provides a detailed, extended description for the object.
     * @see aria-describedby.
     */
    'aria-details'?: string | undefined;
    /**
     * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
     * @see aria-hidden @see aria-readonly.
     */
    'aria-disabled'?: boolean | 'false' | 'true' | undefined;
    /**
     * Indicates what functions can be performed when a dragged object is released on the drop target.
     * @deprecated in ARIA 1.1
     */
    'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup' | undefined;
    /**
     * Identifies the element that provides an error message for the object.
     * @see aria-invalid @see aria-describedby.
     */
    'aria-errormessage'?: string | undefined;
    /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
    'aria-expanded'?: boolean | 'false' | 'true' | undefined;
    /**
     * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
     * allows assistive technology to override the general default of reading in document source order.
     */
    'aria-flowto'?: string | undefined;
    /**
     * Indicates an element's "grabbed" state in a drag-and-drop operation.
     * @deprecated in ARIA 1.1
     */
    'aria-grabbed'?: boolean | 'false' | 'true' | undefined;
    /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
    'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | undefined;
    /**
     * Indicates whether the element is exposed to an accessibility API.
     * @see aria-disabled.
     */
    'aria-hidden'?: boolean | 'false' | 'true' | undefined;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @see aria-errormessage.
     */
    'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling' | undefined;
    /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
    'aria-keyshortcuts'?: string | undefined;
    /**
     * Defines a string value that labels the current element.
     * @see aria-labelledby.
     */
    'aria-label'?: string | undefined;
    /**
     * Identifies the element (or elements) that labels the current element.
     * @see aria-describedby.
     */
    'aria-labelledby'?: string | undefined;
    /** Defines the hierarchical level of an element within a structure. */
    'aria-level'?: number | undefined;
    /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
    'aria-live'?: 'off' | 'assertive' | 'polite' | undefined;
    /** Indicates whether an element is modal when displayed. */
    'aria-modal'?: boolean | 'false' | 'true' | undefined;
    /** Indicates whether a text box accepts multiple lines of input or only a single line. */
    'aria-multiline'?: boolean | 'false' | 'true' | undefined;
    /** Indicates that the user may select more than one item from the current selectable descendants. */
    'aria-multiselectable'?: boolean | 'false' | 'true' | undefined;
    /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
    'aria-orientation'?: 'horizontal' | 'vertical' | undefined;
    /**
     * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
     * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
     * @see aria-controls.
     */
    'aria-owns'?: string | undefined;
    /**
     * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
     * A hint could be a sample value or a brief description of the expected format.
     */
    'aria-placeholder'?: string | undefined;
    /**
     * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-setsize.
     */
    'aria-posinset'?: number | undefined;
    /**
     * Indicates the current "pressed" state of toggle buttons.
     * @see aria-checked @see aria-selected.
     */
    'aria-pressed'?: boolean | 'false' | 'mixed' | 'true' | undefined;
    /**
     * Indicates that the element is not editable, but is otherwise operable.
     * @see aria-disabled.
     */
    'aria-readonly'?: boolean | 'false' | 'true' | undefined;
    /**
     * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
     * @see aria-atomic.
     */
    'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text' | undefined;
    /** Indicates that user input is required on the element before a form may be submitted. */
    'aria-required'?: boolean | 'false' | 'true' | undefined;
    /** Defines a human-readable, author-localized description for the role of an element. */
    'aria-roledescription'?: string | undefined;
    /**
     * Defines the total number of rows in a table, grid, or treegrid.
     * @see aria-rowindex.
     */
    'aria-rowcount'?: number | undefined;
    /**
     * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
     * @see aria-rowcount @see aria-rowspan.
     */
    'aria-rowindex'?: number | undefined;
    /**
     * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-rowindex @see aria-colspan.
     */
    'aria-rowspan'?: number | undefined;
    /**
     * Indicates the current "selected" state of various widgets.
     * @see aria-checked @see aria-pressed.
     */
    'aria-selected'?: boolean | 'false' | 'true' | undefined;
    /**
     * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-posinset.
     */
    'aria-setsize'?: number | undefined;
    /** Indicates if items in a table or grid are sorted in ascending or descending order. */
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
    /** Defines the maximum allowed value for a range widget. */
    'aria-valuemax'?: number | undefined;
    /** Defines the minimum allowed value for a range widget. */
    'aria-valuemin'?: number | undefined;
    /**
     * Defines the current value for a range widget.
     * @see aria-valuetext.
     */
    'aria-valuenow'?: number | undefined;
    /** Defines the human readable text alternative of aria-valuenow for a range widget. */
    'aria-valuetext'?: string | undefined;
  }

  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Rax-specific Attributes
    defaultChecked?: boolean | undefined;
    defaultValue?: string | string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;

    // Standard HTML Attributes
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: boolean | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: boolean | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: boolean | undefined;
    style?: CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;

    // Unknown
    inputMode?: string | undefined;
    is?: string | undefined;
    radioGroup?: string | undefined; // <command>, <menuitem>

    // WAI-ARIA
    role?: string | undefined;

    // RDFa Attributes
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;

    // Non-standard Attributes
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: 'on' | 'off' | undefined;
  }

  interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
    // Standard HTML Attributes
    accept?: string | undefined;
    acceptCharset?: string | undefined;
    action?: string | undefined;
    allowFullScreen?: boolean | undefined;
    allowTransparency?: boolean | undefined;
    alt?: string | undefined;
    as?: string | undefined;
    async?: boolean | undefined;
    autoComplete?: string | undefined;
    autoFocus?: boolean | undefined;
    autoPlay?: boolean | undefined;
    capture?: boolean | string | undefined;
    cellPadding?: number | string | undefined;
    cellSpacing?: number | string | undefined;
    charSet?: string | undefined;
    challenge?: string | undefined;
    checked?: boolean | undefined;
    cite?: string | undefined;
    classID?: string | undefined;
    cols?: number | undefined;
    colSpan?: number | undefined;
    content?: string | undefined;
    controls?: boolean | undefined;
    coords?: string | undefined;
    crossOrigin?: string | undefined;
    data?: string | undefined;
    dateTime?: string | undefined;
    default?: boolean | undefined;
    defer?: boolean | undefined;
    disabled?: boolean | undefined;
    download?: any;
    encType?: string | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    frameBorder?: number | string | undefined;
    headers?: string | undefined;
    height?: number | string | undefined;
    high?: number | undefined;
    href?: string | undefined;
    hrefLang?: string | undefined;
    htmlFor?: string | undefined;
    httpEquiv?: string | undefined;
    integrity?: string | undefined;
    keyParams?: string | undefined;
    keyType?: string | undefined;
    kind?: string | undefined;
    label?: string | undefined;
    list?: string | undefined;
    loop?: boolean | undefined;
    low?: number | undefined;
    manifest?: string | undefined;
    marginHeight?: number | undefined;
    marginWidth?: number | undefined;
    max?: number | string | undefined;
    maxLength?: number | undefined;
    media?: string | undefined;
    mediaGroup?: string | undefined;
    method?: string | undefined;
    min?: number | string | undefined;
    minLength?: number | undefined;
    multiple?: boolean | undefined;
    muted?: boolean | undefined;
    name?: string | undefined;
    nonce?: string | undefined;
    noValidate?: boolean | undefined;
    open?: boolean | undefined;
    optimum?: number | undefined;
    pattern?: string | undefined;
    placeholder?: string | undefined;
    playsInline?: boolean | undefined;
    poster?: string | undefined;
    preload?: string | undefined;
    readOnly?: boolean | undefined;
    rel?: string | undefined;
    required?: boolean | undefined;
    reversed?: boolean | undefined;
    rows?: number | undefined;
    rowSpan?: number | undefined;
    sandbox?: string | undefined;
    scope?: string | undefined;
    scoped?: boolean | undefined;
    scrolling?: string | undefined;
    seamless?: boolean | undefined;
    selected?: boolean | undefined;
    shape?: string | undefined;
    size?: number | undefined;
    sizes?: string | undefined;
    span?: number | undefined;
    src?: string | undefined;
    srcDoc?: string | undefined;
    srcLang?: string | undefined;
    srcSet?: string | undefined;
    start?: number | undefined;
    step?: number | string | undefined;
    summary?: string | undefined;
    target?: string | undefined;
    type?: string | undefined;
    useMap?: string | undefined;
    value?: string | string[] | number | undefined;
    width?: number | string | undefined;
    wmode?: string | undefined;
    wrap?: string | undefined;
  }

  interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    download?: any;
    href?: string | undefined;
    hrefLang?: string | undefined;
    media?: string | undefined;
    rel?: string | undefined;
    target?: string | undefined;
    type?: string | undefined;
    referrerPolicy?: string | undefined;
  }

  interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

  interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: string | undefined;
    coords?: string | undefined;
    download?: any;
    href?: string | undefined;
    hrefLang?: string | undefined;
    media?: string | undefined;
    rel?: string | undefined;
    shape?: string | undefined;
    target?: string | undefined;
  }

  interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
    href?: string | undefined;
    target?: string | undefined;
  }

  interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string | undefined;
  }

  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    autoFocus?: boolean | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    name?: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    value?: string | string[] | number | undefined;
  }

  interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
    height?: number | string | undefined;
    width?: number | string | undefined;
  }

  interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
    span?: number | undefined;
    width?: number | string | undefined;
  }

  interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
    span?: number | undefined;
  }

  interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
    open?: boolean | undefined;
  }

  interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string | undefined;
    dateTime?: string | undefined;
  }

  interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
    open?: boolean | undefined;
  }

  interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
    height?: number | string | undefined;
    src?: string | undefined;
    type?: string | undefined;
    width?: number | string | undefined;
  }

  interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean | undefined;
    form?: string | undefined;
    name?: string | undefined;
  }

  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    acceptCharset?: string | undefined;
    action?: string | undefined;
    autoComplete?: string | undefined;
    encType?: string | undefined;
    method?: string | undefined;
    name?: string | undefined;
    noValidate?: boolean | undefined;
    target?: string | undefined;
  }

  interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
    manifest?: string | undefined;
  }

  interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
    allow?: string | undefined;
    allowFullScreen?: boolean | undefined;
    allowTransparency?: boolean | undefined;
    frameBorder?: number | string | undefined;
    height?: number | string | undefined;
    marginHeight?: number | undefined;
    marginWidth?: number | undefined;
    name?: string | undefined;
    referrerPolicy?: string | undefined;
    sandbox?: string | undefined;
    scrolling?: string | undefined;
    seamless?: boolean | undefined;
    src?: string | undefined;
    srcDoc?: string | undefined;
    width?: number | string | undefined;
  }

  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: string | undefined;
    crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined;
    decoding?: 'async' | 'auto' | 'sync' | undefined;
    height?: number | string | undefined;
    sizes?: string | undefined;
    src?: string | undefined;
    srcSet?: string | undefined;
    useMap?: string | undefined;
    width?: number | string | undefined;
  }

  interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string | undefined;
    dateTime?: string | undefined;
  }

  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    accept?: string | undefined;
    alt?: string | undefined;
    autoComplete?: string | undefined;
    autoFocus?: boolean | undefined;
    capture?: boolean | string | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    checked?: boolean | undefined;
    crossOrigin?: string | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    height?: number | string | undefined;
    list?: string | undefined;
    max?: number | string | undefined;
    maxLength?: number | undefined;
    min?: number | string | undefined;
    minLength?: number | undefined;
    multiple?: boolean | undefined;
    name?: string | undefined;
    pattern?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    size?: number | undefined;
    src?: string | undefined;
    step?: number | string | undefined;
    type?: string | undefined;
    value?: string | string[] | number | undefined;
    width?: number | string | undefined;

    onChange?: ChangeEventHandler<T> | undefined;
  }

  interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
    autoFocus?: boolean | undefined;
    challenge?: string | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    keyType?: string | undefined;
    keyParams?: string | undefined;
    name?: string | undefined;
  }

  interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string | undefined;
    htmlFor?: string | undefined;
  }

  interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
    value?: string | string[] | number | undefined;
  }

  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    as?: string | undefined;
    crossOrigin?: string | undefined;
    href?: string | undefined;
    hrefLang?: string | undefined;
    integrity?: string | undefined;
    media?: string | undefined;
    rel?: string | undefined;
    sizes?: string | undefined;
    type?: string | undefined;
  }

  interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
    name?: string | undefined;
  }

  interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
    type?: string | undefined;
  }

  interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
    autoPlay?: boolean | undefined;
    controls?: boolean | undefined;
    controlsList?: string | undefined;
    crossOrigin?: string | undefined;
    loop?: boolean | undefined;
    mediaGroup?: string | undefined;
    muted?: boolean | undefined;
    playsinline?: boolean | undefined;
    preload?: string | undefined;
    src?: string | undefined;
  }

  interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
    charSet?: string | undefined;
    content?: string | undefined;
    httpEquiv?: string | undefined;
    name?: string | undefined;
  }

  interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string | undefined;
    high?: number | undefined;
    low?: number | undefined;
    max?: number | string | undefined;
    min?: number | string | undefined;
    optimum?: number | undefined;
    value?: string | string[] | number | undefined;
  }

  interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: string | undefined;
  }

  interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
    classID?: string | undefined;
    data?: string | undefined;
    form?: string | undefined;
    height?: number | string | undefined;
    name?: string | undefined;
    type?: string | undefined;
    useMap?: string | undefined;
    width?: number | string | undefined;
    wmode?: string | undefined;
  }

  interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
    reversed?: boolean | undefined;
    start?: number | undefined;
    type?: '1' | 'a' | 'A' | 'i' | 'I' | undefined;
  }

  interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean | undefined;
    label?: string | undefined;
  }

  interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: boolean | undefined;
    label?: string | undefined;
    selected?: boolean | undefined;
    value?: string | string[] | number | undefined;
  }

  interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: string | undefined;
    htmlFor?: string | undefined;
    name?: string | undefined;
  }

  interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
    name?: string | undefined;
    value?: string | string[] | number | undefined;
  }

  interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
    max?: number | string | undefined;
    value?: string | string[] | number | undefined;
  }

  interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
    async?: boolean | undefined;
    /** @deprecated */
    charSet?: string | undefined;
    crossOrigin?: string | undefined;
    defer?: boolean | undefined;
    integrity?: string | undefined;
    noModule?: boolean | undefined;
    nonce?: string | undefined;
    src?: string | undefined;
    type?: string | undefined;
  }

  interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    autoComplete?: string | undefined;
    autoFocus?: boolean | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    multiple?: boolean | undefined;
    name?: string | undefined;
    required?: boolean | undefined;
    size?: number | undefined;
    value?: string | string[] | number | undefined;
    onChange?: ChangeEventHandler<T> | undefined;
  }

  interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
    media?: string | undefined;
    sizes?: string | undefined;
    src?: string | undefined;
    srcSet?: string | undefined;
    type?: string | undefined;
  }

  interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
    media?: string | undefined;
    nonce?: string | undefined;
    scoped?: boolean | undefined;
    type?: string | undefined;
  }

  interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
    cellPadding?: number | string | undefined;
    cellSpacing?: number | string | undefined;
    summary?: string | undefined;
  }

  interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    autoComplete?: string | undefined;
    autoFocus?: boolean | undefined;
    cols?: number | undefined;
    dirName?: string | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    name?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    rows?: number | undefined;
    value?: string | string[] | number | undefined;
    wrap?: string | undefined;

    onChange?: ChangeEventHandler<T> | undefined;
  }

  interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
    align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined;
    colSpan?: number | undefined;
    headers?: string | undefined;
    rowSpan?: number | undefined;
    scope?: string | undefined;
  }

  interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
    align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined;
    colSpan?: number | undefined;
    headers?: string | undefined;
    rowSpan?: number | undefined;
    scope?: string | undefined;
  }

  interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
    dateTime?: string | undefined;
  }

  interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
    default?: boolean | undefined;
    kind?: string | undefined;
    label?: string | undefined;
    src?: string | undefined;
    srcLang?: string | undefined;
  }

  interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
    height?: number | string | undefined;
    playsInline?: boolean | undefined;
    poster?: string | undefined;
    width?: number | string | undefined;
  }

  // this list is "complete" in that it contains every SVG attribute
  // that Rax supports, but the types can be improved.
  // Full list here: https://facebook.github.io/rax/docs/dom-elements.html
  //
  // The three broad type categories are (in order of restrictiveness):
  //   - "number | string"
  //   - "string"
  //   - union of string literals
  interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Attributes which also defined in HTMLAttributes
    // See comment in SVGDOMPropertyConfig.js
    className?: string | undefined;
    color?: string | undefined;
    height?: number | string | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    max?: number | string | undefined;
    media?: string | undefined;
    method?: string | undefined;
    min?: number | string | undefined;
    name?: string | undefined;
    style?: CSSProperties | undefined;
    target?: string | undefined;
    type?: string | undefined;
    width?: number | string | undefined;

    // Other HTML properties supported by SVG elements in browsers
    role?: string | undefined;
    tabIndex?: number | undefined;

    // SVG Specific attributes
    accentHeight?: number | string | undefined;
    accumulate?: 'none' | 'sum' | undefined;
    additive?: 'replace' | 'sum' | undefined;
    alignmentBaseline?:
      | 'auto'
      | 'baseline'
      | 'before-edge'
      | 'text-before-edge'
      | 'middle'
      | 'central'
      | 'after-edge'
      | 'text-after-edge'
      | 'ideographic'
      | 'alphabetic'
      | 'hanging'
      | 'mathematical'
      | 'inherit' | undefined;
    allowReorder?: 'no' | 'yes' | undefined;
    alphabetic?: number | string | undefined;
    amplitude?: number | string | undefined;
    arabicForm?: 'initial' | 'medial' | 'terminal' | 'isolated' | undefined;
    ascent?: number | string | undefined;
    attributeName?: string | undefined;
    attributeType?: string | undefined;
    autoReverse?: number | string | undefined;
    azimuth?: number | string | undefined;
    baseFrequency?: number | string | undefined;
    baselineShift?: number | string | undefined;
    baseProfile?: number | string | undefined;
    bbox?: number | string | undefined;
    begin?: number | string | undefined;
    bias?: number | string | undefined;
    by?: number | string | undefined;
    calcMode?: number | string | undefined;
    capHeight?: number | string | undefined;
    clip?: number | string | undefined;
    clipPath?: string | undefined;
    clipPathUnits?: number | string | undefined;
    clipRule?: number | string | undefined;
    colorInterpolation?: number | string | undefined;
    colorInterpolationFilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined;
    colorProfile?: number | string | undefined;
    colorRendering?: number | string | undefined;
    contentScriptType?: number | string | undefined;
    contentStyleType?: number | string | undefined;
    cursor?: number | string | undefined;
    cx?: number | string | undefined;
    cy?: number | string | undefined;
    d?: string | undefined;
    decelerate?: number | string | undefined;
    descent?: number | string | undefined;
    diffuseConstant?: number | string | undefined;
    direction?: number | string | undefined;
    display?: number | string | undefined;
    divisor?: number | string | undefined;
    dominantBaseline?: number | string | undefined;
    dur?: number | string | undefined;
    dx?: number | string | undefined;
    dy?: number | string | undefined;
    edgeMode?: number | string | undefined;
    elevation?: number | string | undefined;
    enableBackground?: number | string | undefined;
    end?: number | string | undefined;
    exponent?: number | string | undefined;
    externalResourcesRequired?: number | string | undefined;
    fill?: string | undefined;
    fillOpacity?: number | string | undefined;
    fillRule?: 'nonzero' | 'evenodd' | 'inherit' | undefined;
    filter?: string | undefined;
    filterRes?: number | string | undefined;
    filterUnits?: number | string | undefined;
    floodColor?: number | string | undefined;
    floodOpacity?: number | string | undefined;
    focusable?: number | string | undefined;
    fontFamily?: string | undefined;
    fontSize?: number | string | undefined;
    fontSizeAdjust?: number | string | undefined;
    fontStretch?: number | string | undefined;
    fontStyle?: number | string | undefined;
    fontVariant?: number | string | undefined;
    fontWeight?: number | string | undefined;
    format?: number | string | undefined;
    from?: number | string | undefined;
    fx?: number | string | undefined;
    fy?: number | string | undefined;
    g1?: number | string | undefined;
    g2?: number | string | undefined;
    glyphName?: number | string | undefined;
    glyphOrientationHorizontal?: number | string | undefined;
    glyphOrientationVertical?: number | string | undefined;
    glyphRef?: number | string | undefined;
    gradientTransform?: string | undefined;
    gradientUnits?: string | undefined;
    hanging?: number | string | undefined;
    horizAdvX?: number | string | undefined;
    horizOriginX?: number | string | undefined;
    href?: string | undefined;
    ideographic?: number | string | undefined;
    imageRendering?: number | string | undefined;
    in2?: number | string | undefined;
    in?: string | undefined;
    intercept?: number | string | undefined;
    k1?: number | string | undefined;
    k2?: number | string | undefined;
    k3?: number | string | undefined;
    k4?: number | string | undefined;
    k?: number | string | undefined;
    kernelMatrix?: number | string | undefined;
    kernelUnitLength?: number | string | undefined;
    kerning?: number | string | undefined;
    keyPoints?: number | string | undefined;
    keySplines?: number | string | undefined;
    keyTimes?: number | string | undefined;
    lengthAdjust?: number | string | undefined;
    letterSpacing?: number | string | undefined;
    lightingColor?: number | string | undefined;
    limitingConeAngle?: number | string | undefined;
    local?: number | string | undefined;
    markerEnd?: string | undefined;
    markerHeight?: number | string | undefined;
    markerMid?: string | undefined;
    markerStart?: string | undefined;
    markerUnits?: number | string | undefined;
    markerWidth?: number | string | undefined;
    mask?: string | undefined;
    maskContentUnits?: number | string | undefined;
    maskUnits?: number | string | undefined;
    mathematical?: number | string | undefined;
    mode?: number | string | undefined;
    numOctaves?: number | string | undefined;
    offset?: number | string | undefined;
    opacity?: number | string | undefined;
    operator?: number | string | undefined;
    order?: number | string | undefined;
    orient?: number | string | undefined;
    orientation?: number | string | undefined;
    origin?: number | string | undefined;
    overflow?: number | string | undefined;
    overlinePosition?: number | string | undefined;
    overlineThickness?: number | string | undefined;
    paintOrder?: number | string | undefined;
    panose1?: number | string | undefined;
    pathLength?: number | string | undefined;
    patternContentUnits?: string | undefined;
    patternTransform?: number | string | undefined;
    patternUnits?: string | undefined;
    pointerEvents?: number | string | undefined;
    points?: string | undefined;
    pointsAtX?: number | string | undefined;
    pointsAtY?: number | string | undefined;
    pointsAtZ?: number | string | undefined;
    preserveAlpha?: number | string | undefined;
    preserveAspectRatio?: string | undefined;
    primitiveUnits?: number | string | undefined;
    r?: number | string | undefined;
    radius?: number | string | undefined;
    refX?: number | string | undefined;
    refY?: number | string | undefined;
    renderingIntent?: number | string | undefined;
    repeatCount?: number | string | undefined;
    repeatDur?: number | string | undefined;
    requiredExtensions?: number | string | undefined;
    requiredFeatures?: number | string | undefined;
    restart?: number | string | undefined;
    result?: string | undefined;
    rotate?: number | string | undefined;
    rx?: number | string | undefined;
    ry?: number | string | undefined;
    scale?: number | string | undefined;
    seed?: number | string | undefined;
    shapeRendering?: number | string | undefined;
    slope?: number | string | undefined;
    spacing?: number | string | undefined;
    specularConstant?: number | string | undefined;
    specularExponent?: number | string | undefined;
    speed?: number | string | undefined;
    spreadMethod?: string | undefined;
    startOffset?: number | string | undefined;
    stdDeviation?: number | string | undefined;
    stemh?: number | string | undefined;
    stemv?: number | string | undefined;
    stitchTiles?: number | string | undefined;
    stopColor?: string | undefined;
    stopOpacity?: number | string | undefined;
    strikethroughPosition?: number | string | undefined;
    strikethroughThickness?: number | string | undefined;
    string?: number | string | undefined;
    stroke?: string | undefined;
    strokeDasharray?: string | number | undefined;
    strokeDashoffset?: string | number | undefined;
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit' | undefined;
    strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit' | undefined;
    strokeMiterlimit?: number | string | undefined;
    strokeOpacity?: number | string | undefined;
    strokeWidth?: number | string | undefined;
    surfaceScale?: number | string | undefined;
    systemLanguage?: number | string | undefined;
    tableValues?: number | string | undefined;
    targetX?: number | string | undefined;
    targetY?: number | string | undefined;
    textAnchor?: string | undefined;
    textDecoration?: number | string | undefined;
    textLength?: number | string | undefined;
    textRendering?: number | string | undefined;
    to?: number | string | undefined;
    transform?: string | undefined;
    u1?: number | string | undefined;
    u2?: number | string | undefined;
    underlinePosition?: number | string | undefined;
    underlineThickness?: number | string | undefined;
    unicode?: number | string | undefined;
    unicodeBidi?: number | string | undefined;
    unicodeRange?: number | string | undefined;
    unitsPerEm?: number | string | undefined;
    vAlphabetic?: number | string | undefined;
    values?: string | undefined;
    vectorEffect?: number | string | undefined;
    version?: string | undefined;
    vertAdvY?: number | string | undefined;
    vertOriginX?: number | string | undefined;
    vertOriginY?: number | string | undefined;
    vHanging?: number | string | undefined;
    vIdeographic?: number | string | undefined;
    viewBox?: string | undefined;
    viewTarget?: number | string | undefined;
    visibility?: number | string | undefined;
    vMathematical?: number | string | undefined;
    widths?: number | string | undefined;
    wordSpacing?: number | string | undefined;
    writingMode?: number | string | undefined;
    x1?: number | string | undefined;
    x2?: number | string | undefined;
    x?: number | string | undefined;
    xChannelSelector?: string | undefined;
    xHeight?: number | string | undefined;
    xlinkActuate?: string | undefined;
    xlinkArcrole?: string | undefined;
    xlinkHref?: string | undefined;
    xlinkRole?: string | undefined;
    xlinkShow?: string | undefined;
    xlinkTitle?: string | undefined;
    xlinkType?: string | undefined;
    xmlBase?: string | undefined;
    xmlLang?: string | undefined;
    xmlns?: string | undefined;
    xmlnsXlink?: string | undefined;
    xmlSpace?: string | undefined;
    y1?: number | string | undefined;
    y2?: number | string | undefined;
    y?: number | string | undefined;
    yChannelSelector?: string | undefined;
    z?: number | string | undefined;
    zoomAndPan?: string | undefined;
  }

  interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
    allowFullScreen?: boolean | undefined;
    allowpopups?: boolean | undefined;
    autoFocus?: boolean | undefined;
    autosize?: boolean | undefined;
    blinkfeatures?: string | undefined;
    disableblinkfeatures?: string | undefined;
    disableguestresize?: boolean | undefined;
    disablewebsecurity?: boolean | undefined;
    guestinstance?: string | undefined;
    httpreferrer?: string | undefined;
    nodeintegration?: boolean | undefined;
    partition?: string | undefined;
    plugins?: boolean | undefined;
    preload?: string | undefined;
    src?: string | undefined;
    useragent?: string | undefined;
    webpreferences?: string | undefined;
  }

  //
  // Rax.DOM
  // ----------------------------------------------------------------------

  interface RaxHTML {
    a: DetailedHTMLFactory<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    abbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    address: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    area: DetailedHTMLFactory<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
    article: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    aside: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    audio: DetailedHTMLFactory<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
    b: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    base: DetailedHTMLFactory<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
    bdi: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    bdo: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    big: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    blockquote: DetailedHTMLFactory<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
    body: DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
    br: DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
    button: DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    canvas: DetailedHTMLFactory<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
    caption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    cite: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    code: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    col: DetailedHTMLFactory<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
    colgroup: DetailedHTMLFactory<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
    data: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    datalist: DetailedHTMLFactory<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
    dd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    del: DetailedHTMLFactory<DelHTMLAttributes<HTMLElement>, HTMLElement>;
    details: DetailedHTMLFactory<DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
    dfn: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    dialog: DetailedHTMLFactory<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
    div: DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    dl: DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
    dt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    em: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    embed: DetailedHTMLFactory<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
    fieldset: DetailedHTMLFactory<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
    figcaption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    figure: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    footer: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    form: DetailedHTMLFactory<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
    h1: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h2: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h3: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h4: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h5: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h6: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    head: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>;
    header: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    hgroup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    hr: DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
    html: DetailedHTMLFactory<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
    i: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    iframe: DetailedHTMLFactory<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
    img: DetailedHTMLFactory<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    input: DetailedHTMLFactory<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    ins: DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
    kbd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    keygen: DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
    label: DetailedHTMLFactory<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
    legend: DetailedHTMLFactory<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
    li: DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
    link: DetailedHTMLFactory<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
    main: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    map: DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
    mark: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    menu: DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
    menuitem: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    meta: DetailedHTMLFactory<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
    meter: DetailedHTMLFactory<MeterHTMLAttributes<HTMLElement>, HTMLElement>;
    nav: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    noscript: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    object: DetailedHTMLFactory<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
    ol: DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
    optgroup: DetailedHTMLFactory<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
    option: DetailedHTMLFactory<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
    output: DetailedHTMLFactory<OutputHTMLAttributes<HTMLElement>, HTMLElement>;
    p: DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
    param: DetailedHTMLFactory<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
    picture: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    pre: DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
    progress: DetailedHTMLFactory<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
    q: DetailedHTMLFactory<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
    rp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    rt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    ruby: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    s: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    samp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    script: DetailedHTMLFactory<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
    section: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    select: DetailedHTMLFactory<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
    small: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    source: DetailedHTMLFactory<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
    span: DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    strong: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    style: DetailedHTMLFactory<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
    sub: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    summary: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    sup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    table: DetailedHTMLFactory<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
    tbody: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    td: DetailedHTMLFactory<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
    textarea: DetailedHTMLFactory<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
    tfoot: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    th: DetailedHTMLFactory<
      ThHTMLAttributes<HTMLTableHeaderCellElement>,
      HTMLTableHeaderCellElement
    >;
    thead: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    time: DetailedHTMLFactory<TimeHTMLAttributes<HTMLElement>, HTMLElement>;
    title: DetailedHTMLFactory<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
    tr: DetailedHTMLFactory<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
    track: DetailedHTMLFactory<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
    u: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    ul: DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
    var: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    video: DetailedHTMLFactory<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
    wbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
    webview: DetailedHTMLFactory<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
  }

  interface RaxSVG {
    animate: SVGFactory;
    circle: SVGFactory;
    clipPath: SVGFactory;
    defs: SVGFactory;
    desc: SVGFactory;
    ellipse: SVGFactory;
    feBlend: SVGFactory;
    feColorMatrix: SVGFactory;
    feComponentTransfer: SVGFactory;
    feComposite: SVGFactory;
    feConvolveMatrix: SVGFactory;
    feDiffuseLighting: SVGFactory;
    feDisplacementMap: SVGFactory;
    feDistantLight: SVGFactory;
    feDropShadow: SVGFactory;
    feFlood: SVGFactory;
    feFuncA: SVGFactory;
    feFuncB: SVGFactory;
    feFuncG: SVGFactory;
    feFuncR: SVGFactory;
    feGaussianBlur: SVGFactory;
    feImage: SVGFactory;
    feMerge: SVGFactory;
    feMergeNode: SVGFactory;
    feMorphology: SVGFactory;
    feOffset: SVGFactory;
    fePointLight: SVGFactory;
    feSpecularLighting: SVGFactory;
    feSpotLight: SVGFactory;
    feTile: SVGFactory;
    feTurbulence: SVGFactory;
    filter: SVGFactory;
    foreignObject: SVGFactory;
    g: SVGFactory;
    image: SVGFactory;
    line: SVGFactory;
    linearGradient: SVGFactory;
    marker: SVGFactory;
    mask: SVGFactory;
    metadata: SVGFactory;
    path: SVGFactory;
    pattern: SVGFactory;
    polygon: SVGFactory;
    polyline: SVGFactory;
    radialGradient: SVGFactory;
    rect: SVGFactory;
    stop: SVGFactory;
    svg: SVGFactory;
    switch: SVGFactory;
    symbol: SVGFactory;
    text: SVGFactory;
    textPath: SVGFactory;
    tspan: SVGFactory;
    use: SVGFactory;
    view: SVGFactory;
  }

  interface RaxDOM extends RaxHTML, RaxSVG {}

  //
  // Rax.PropTypes
  // ----------------------------------------------------------------------

  type Validator<T> = PropTypes.Validator<T>;

  type Requireable<T> = PropTypes.Requireable<T>;

  type ValidationMap<T> = PropTypes.ValidationMap<T>;

  type WeakValidationMap<T> = {
    [K in keyof T]?: null extends T[K]
      ? Validator<T[K] | null | undefined>
      : undefined extends T[K]
      ? Validator<T[K] | null | undefined>
      : Validator<T[K]>
  };

  interface RaxPropTypes {
    any: typeof PropTypes.any;
    array: typeof PropTypes.array;
    bool: typeof PropTypes.bool;
    func: typeof PropTypes.func;
    number: typeof PropTypes.number;
    object: typeof PropTypes.object;
    string: typeof PropTypes.string;
    node: typeof PropTypes.node;
    element: typeof PropTypes.element;
    instanceOf: typeof PropTypes.instanceOf;
    oneOf: typeof PropTypes.oneOf;
    oneOfType: typeof PropTypes.oneOfType;
    arrayOf: typeof PropTypes.arrayOf;
    objectOf: typeof PropTypes.objectOf;
    shape: typeof PropTypes.shape;
    exact: typeof PropTypes.exact;
  }

  //
  // Rax.Children
  // ----------------------------------------------------------------------

  interface RaxChildren {
    map<T, C>(children: C | C[], fn: (child: C, index: number) => T):
        C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
    forEach<C>(children: C | C[], fn: (child: C, index: number) => void): void;
    count(children: any): number;
    only<C>(children: C): C extends any[] ? never : C;
    toArray<C>(children: C | C[]): C[];
  }

  //
  // Browser Interfaces
  // https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
  // ----------------------------------------------------------------------

  interface AbstractView {
    styleMedia: StyleMedia;
    document: Document;
  }

  interface Touch {
    identifier: number;
    target: EventTarget;
    screenX: number;
    screenY: number;
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
  }

  interface TouchList {
    [index: number]: Touch;
    length: number;
    item(index: number): Touch;
    identifiedTouch(identifier: number): Touch;
  }

  //
  // Error Interfaces
  // ----------------------------------------------------------------------
  interface ErrorInfo {
    /**
     * Captures which component contained the exception, and its ancestors.
     */
    componentStack: string;
  }
}

// naked 'any' type in a conditional type will short circuit and union both the then/else branches
// so boolean is only resolved for T = any
type IsExactlyAny<T> = boolean extends (T extends never ? true : false) ? true : false;

type ExactlyAnyPropertyKeys<T> = {
  [K in keyof T]: IsExactlyAny<T[K]> extends true ? K : never
}[keyof T];
type NotExactlyAnyPropertyKeys<T> = Exclude<keyof T, ExactlyAnyPropertyKeys<T>>;

// Try to resolve ill-defined props like for JS users: props can be any, or sometimes objects with properties of type any
type MergePropTypes<P, T> =
  // Distribute over P in case it is a union type
  P extends any // If props is type any, use propTypes definitions
    ? IsExactlyAny<P> extends true
      ? T // If declared props have indexed properties, ignore inferred props entirely as keyof gets widened
      : string extends keyof P
      ? P // Prefer declared types which are not exactly any
      : Pick<P, NotExactlyAnyPropertyKeys<P>> &
          // For props which are exactly any, use the type inferred from propTypes if present
          Pick<T, Exclude<keyof T, NotExactlyAnyPropertyKeys<P>>> &
          // Keep leftover props not specified in propTypes
          Pick<P, Exclude<keyof P, keyof T>>
    : never;

// Any prop that has a default prop becomes optional, but its type is unchanged
// Undeclared default props are augmented into the resulting allowable attributes
// If declared props have indexed properties, ignore default props entirely as keyof gets widened
// Wrap in an outer-level conditional type to allow distribution over props that are unions
type Defaultize<P, D> = P extends any
  ? string extends keyof P
    ? P
    : Pick<P, Exclude<keyof P, keyof D>> &
        Partial<Pick<P, Extract<keyof P, keyof D>>> &
        Partial<Pick<D, Exclude<keyof D, keyof P>>>
  : never;

type RaxManagedAttributes<C, P> = C extends { propTypes: infer T; defaultProps: infer D }
  ? Defaultize<MergePropTypes<P, PropTypes.InferProps<T>>, D>
  : C extends { propTypes: infer T }
  ? MergePropTypes<P, PropTypes.InferProps<T>>
  : C extends { defaultProps: infer D }
  ? Defaultize<P, D>
  : P;

declare global {
  namespace JSX {
    interface Element extends Rax.RaxElement<any, any> {}
    interface ElementClass extends Rax.Component<any> {
      render(): Rax.RaxNode;
    }
    interface ElementAttributesProperty {
      props: {};
    }
    interface ElementChildrenAttribute {
      children: {};
    }

    // We can't recurse forever because `type` can't be self-referential;
    // let's assume it's reasonable to do a single Rax.lazy() around a single Rax.memo() / vice-versa
    type LibraryManagedAttributes<C, P> = C extends Rax.MemoExoticComponent<infer T>
      ? T extends Rax.MemoExoticComponent<infer U>
        ? RaxManagedAttributes<U, P>
        : RaxManagedAttributes<T, P>
      : RaxManagedAttributes<C, P>;

    interface IntrinsicAttributes extends Rax.Attributes {}
    interface IntrinsicClassAttributes<T> extends Rax.ClassAttributes<T> {}

    interface IntrinsicElements {
      // HTML
      a: Rax.DetailedHTMLProps<Rax.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
      abbr: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      address: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      area: Rax.DetailedHTMLProps<Rax.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
      article: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      aside: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      audio: Rax.DetailedHTMLProps<Rax.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
      b: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      base: Rax.DetailedHTMLProps<Rax.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
      bdi: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      bdo: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      big: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      blockquote: Rax.DetailedHTMLProps<Rax.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
      body: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
      br: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
      button: Rax.DetailedHTMLProps<Rax.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      canvas: Rax.DetailedHTMLProps<Rax.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
      caption: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      cite: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      code: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      col: Rax.DetailedHTMLProps<Rax.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
      colgroup: Rax.DetailedHTMLProps<
        Rax.ColgroupHTMLAttributes<HTMLTableColElement>,
        HTMLTableColElement
      >;
      data: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      datalist: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
      dd: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      del: Rax.DetailedHTMLProps<Rax.DelHTMLAttributes<HTMLElement>, HTMLElement>;
      details: Rax.DetailedHTMLProps<Rax.DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
      dfn: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      dialog: Rax.DetailedHTMLProps<Rax.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
      div: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      dl: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
      dt: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      em: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      embed: Rax.DetailedHTMLProps<Rax.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
      fieldset: Rax.DetailedHTMLProps<
        Rax.FieldsetHTMLAttributes<HTMLFieldSetElement>,
        HTMLFieldSetElement
      >;
      figcaption: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      figure: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      footer: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      form: Rax.DetailedHTMLProps<Rax.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
      h1: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h2: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h3: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h4: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h5: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      h6: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      head: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
      header: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      hgroup: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      hr: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
      html: Rax.DetailedHTMLProps<Rax.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
      i: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      iframe: Rax.DetailedHTMLProps<Rax.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
      img: Rax.DetailedHTMLProps<Rax.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
      input: Rax.DetailedHTMLProps<Rax.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
      ins: Rax.DetailedHTMLProps<Rax.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
      kbd: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      keygen: Rax.DetailedHTMLProps<Rax.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
      label: Rax.DetailedHTMLProps<Rax.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
      legend: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
      li: Rax.DetailedHTMLProps<Rax.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
      link: Rax.DetailedHTMLProps<Rax.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
      main: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      map: Rax.DetailedHTMLProps<Rax.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
      mark: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      menu: Rax.DetailedHTMLProps<Rax.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
      menuitem: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      meta: Rax.DetailedHTMLProps<Rax.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
      meter: Rax.DetailedHTMLProps<Rax.MeterHTMLAttributes<HTMLElement>, HTMLElement>;
      nav: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      noindex: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      noscript: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      object: Rax.DetailedHTMLProps<Rax.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
      ol: Rax.DetailedHTMLProps<Rax.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
      optgroup: Rax.DetailedHTMLProps<
        Rax.OptgroupHTMLAttributes<HTMLOptGroupElement>,
        HTMLOptGroupElement
      >;
      option: Rax.DetailedHTMLProps<Rax.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
      output: Rax.DetailedHTMLProps<Rax.OutputHTMLAttributes<HTMLElement>, HTMLElement>;
      p: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      param: Rax.DetailedHTMLProps<Rax.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
      picture: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      pre: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
      progress: Rax.DetailedHTMLProps<
        Rax.ProgressHTMLAttributes<HTMLProgressElement>,
        HTMLProgressElement
      >;
      q: Rax.DetailedHTMLProps<Rax.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
      rp: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      rt: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      ruby: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      s: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      samp: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      script: Rax.DetailedHTMLProps<Rax.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
      section: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      select: Rax.DetailedHTMLProps<Rax.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
      small: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      source: Rax.DetailedHTMLProps<Rax.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
      span: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      strong: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      style: Rax.DetailedHTMLProps<Rax.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
      sub: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      summary: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      sup: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      table: Rax.DetailedHTMLProps<Rax.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
      tbody: Rax.DetailedHTMLProps<
        Rax.HTMLAttributes<HTMLTableSectionElement>,
        HTMLTableSectionElement
      >;
      td: Rax.DetailedHTMLProps<
        Rax.TdHTMLAttributes<HTMLTableDataCellElement>,
        HTMLTableDataCellElement
      >;
      textarea: Rax.DetailedHTMLProps<
        Rax.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      >;
      tfoot: Rax.DetailedHTMLProps<
        Rax.HTMLAttributes<HTMLTableSectionElement>,
        HTMLTableSectionElement
      >;
      th: Rax.DetailedHTMLProps<
        Rax.ThHTMLAttributes<HTMLTableHeaderCellElement>,
        HTMLTableHeaderCellElement
      >;
      thead: Rax.DetailedHTMLProps<
        Rax.HTMLAttributes<HTMLTableSectionElement>,
        HTMLTableSectionElement
      >;
      time: Rax.DetailedHTMLProps<Rax.TimeHTMLAttributes<HTMLElement>, HTMLElement>;
      title: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
      tr: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
      track: Rax.DetailedHTMLProps<Rax.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
      u: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      ul: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
      var: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      video: Rax.DetailedHTMLProps<Rax.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
      wbr: Rax.DetailedHTMLProps<Rax.HTMLAttributes<HTMLElement>, HTMLElement>;
      webview: Rax.DetailedHTMLProps<
        Rax.WebViewHTMLAttributes<HTMLWebViewElement>,
        HTMLWebViewElement
      >;

      // SVG
      svg: Rax.SVGProps<SVGSVGElement>;

      animate: Rax.SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
      animateMotion: Rax.SVGProps<SVGElement>;
      animateTransform: Rax.SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
      circle: Rax.SVGProps<SVGCircleElement>;
      clipPath: Rax.SVGProps<SVGClipPathElement>;
      defs: Rax.SVGProps<SVGDefsElement>;
      desc: Rax.SVGProps<SVGDescElement>;
      ellipse: Rax.SVGProps<SVGEllipseElement>;
      feBlend: Rax.SVGProps<SVGFEBlendElement>;
      feColorMatrix: Rax.SVGProps<SVGFEColorMatrixElement>;
      feComponentTransfer: Rax.SVGProps<SVGFEComponentTransferElement>;
      feComposite: Rax.SVGProps<SVGFECompositeElement>;
      feConvolveMatrix: Rax.SVGProps<SVGFEConvolveMatrixElement>;
      feDiffuseLighting: Rax.SVGProps<SVGFEDiffuseLightingElement>;
      feDisplacementMap: Rax.SVGProps<SVGFEDisplacementMapElement>;
      feDistantLight: Rax.SVGProps<SVGFEDistantLightElement>;
      feDropShadow: Rax.SVGProps<SVGFEDropShadowElement>;
      feFlood: Rax.SVGProps<SVGFEFloodElement>;
      feFuncA: Rax.SVGProps<SVGFEFuncAElement>;
      feFuncB: Rax.SVGProps<SVGFEFuncBElement>;
      feFuncG: Rax.SVGProps<SVGFEFuncGElement>;
      feFuncR: Rax.SVGProps<SVGFEFuncRElement>;
      feGaussianBlur: Rax.SVGProps<SVGFEGaussianBlurElement>;
      feImage: Rax.SVGProps<SVGFEImageElement>;
      feMerge: Rax.SVGProps<SVGFEMergeElement>;
      feMergeNode: Rax.SVGProps<SVGFEMergeNodeElement>;
      feMorphology: Rax.SVGProps<SVGFEMorphologyElement>;
      feOffset: Rax.SVGProps<SVGFEOffsetElement>;
      fePointLight: Rax.SVGProps<SVGFEPointLightElement>;
      feSpecularLighting: Rax.SVGProps<SVGFESpecularLightingElement>;
      feSpotLight: Rax.SVGProps<SVGFESpotLightElement>;
      feTile: Rax.SVGProps<SVGFETileElement>;
      feTurbulence: Rax.SVGProps<SVGFETurbulenceElement>;
      filter: Rax.SVGProps<SVGFilterElement>;
      foreignObject: Rax.SVGProps<SVGForeignObjectElement>;
      g: Rax.SVGProps<SVGGElement>;
      image: Rax.SVGProps<SVGImageElement>;
      line: Rax.SVGProps<SVGLineElement>;
      linearGradient: Rax.SVGProps<SVGLinearGradientElement>;
      marker: Rax.SVGProps<SVGMarkerElement>;
      mask: Rax.SVGProps<SVGMaskElement>;
      metadata: Rax.SVGProps<SVGMetadataElement>;
      mpath: Rax.SVGProps<SVGElement>;
      path: Rax.SVGProps<SVGPathElement>;
      pattern: Rax.SVGProps<SVGPatternElement>;
      polygon: Rax.SVGProps<SVGPolygonElement>;
      polyline: Rax.SVGProps<SVGPolylineElement>;
      radialGradient: Rax.SVGProps<SVGRadialGradientElement>;
      rect: Rax.SVGProps<SVGRectElement>;
      stop: Rax.SVGProps<SVGStopElement>;
      switch: Rax.SVGProps<SVGSwitchElement>;
      symbol: Rax.SVGProps<SVGSymbolElement>;
      text: Rax.SVGProps<SVGTextElement>;
      textPath: Rax.SVGProps<SVGTextPathElement>;
      tspan: Rax.SVGProps<SVGTSpanElement>;
      use: Rax.SVGProps<SVGUseElement>;
      view: Rax.SVGProps<SVGViewElement>;

      // weex
      list: any;
      cell: any;
      loading: any;
      refresh: any;
      'recycle-list': any;
      scroller: any;
      slider: any;
      indicator: any;
      waterfall: any;
      web: any;
      richtext: any;

      // MiniApp
      slot: any;
      swiper: any;
      'swiper-item': any;
      'scroll-view': any;
      'cover-view': any;
      'cover-image': any;
      'camera': any;
      'movable-view': any;
      'movable-area': any;
      'match-media': any;
      icon: any;
      'rich-text': any;
      'radio': any;
      'radio-group': any;
      'picker-view': any;
      picker: any;
      navigator: any;
      'web-view': any;
      'lifestyle': any;
      'contact-button': any;
      'aria-component': any;
      'functional-page-navigator': any;
      'live-player': any;
      'live-pusher': any;
      ad: any;
      'ad-custom': any;
      'open-data': any;
      'voip-room': any;
      'page-meta': any;
      'picker-view-column': any;
      'official-account': any;
      'navigation-bar': any;
    }
  }
}
