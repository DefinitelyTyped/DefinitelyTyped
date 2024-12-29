// NOTE: Users of the `experimental` builds of React should add a reference
// to 'react/experimental' in their project. See experimental.d.ts's top comment
// for reference and documentation on how exactly to do it.

/// <reference path="global.d.ts" />

import * as CSS from "csstype";

type NativeAnimationEvent = AnimationEvent;
type NativeClipboardEvent = ClipboardEvent;
type NativeCompositionEvent = CompositionEvent;
type NativeDragEvent = DragEvent;
type NativeFocusEvent = FocusEvent;
type NativeKeyboardEvent = KeyboardEvent;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent;
type NativePointerEvent = PointerEvent;
type NativeToggleEvent = ToggleEvent;
type NativeTransitionEvent = TransitionEvent;
type NativeUIEvent = UIEvent;
type NativeWheelEvent = WheelEvent;

/**
 * Used to represent DOM API's where users can either pass
 * true or false as a boolean or as its equivalent strings.
 */
type Booleanish = boolean | "true" | "false";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin MDN}
 */
type CrossOrigin = "anonymous" | "use-credentials" | "" | undefined;

declare const UNDEFINED_VOID_ONLY: unique symbol;

/**
 * @internal Use `Awaited<ReactNode>` instead
 */
// Helper type to enable `Awaited<ReactNode>`.
// Must be a copy of the non-thenables of `ReactNode`.
type AwaitedReactNode =
    | React.ReactElement
    | string
    | number
    | bigint
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | boolean
    | null
    | undefined
    | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES[
        keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES
    ];

/**
 * The function returned from an effect passed to {@link React.useEffect useEffect},
 * which can be used to clean up the effect when the component unmounts.
 *
 * @see {@link https://react.dev/reference/react/useEffect React Docs}
 */
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never };
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = React;
export as namespace React;

declare namespace React {
    //
    // React Elements
    // ----------------------------------------------------------------------

    /**
     * Used to retrieve the possible components which accept a given set of props.
     *
     * Can be passed no type parameters to get a union of all possible components
     * and tags.
     *
     * Is a superset of {@link ComponentType}.
     *
     * @template P The props to match against. If not passed, defaults to any.
     * @template Tag An optional tag to match against. If not passed, attempts to match against all possible tags.
     *
     * @example
     *
     * ```tsx
     * // All components and tags (img, embed etc.)
     * // which accept `src`
     * type SrcComponents = ElementType<{ src: any }>;
     * ```
     *
     * @example
     *
     * ```tsx
     * // All components
     * type AllComponents = ElementType;
     * ```
     *
     * @example
     *
     * ```tsx
     * // All custom components which match `src`, and tags which
     * // match `src`, narrowed down to just `audio` and `embed`
     * type SrcComponents = ElementType<{ src: any }, 'audio' | 'embed'>;
     * ```
     */
    type ElementType<P = any, Tag extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> =
        | { [K in Tag]: P extends JSX.IntrinsicElements[K] ? K : never }[Tag]
        | ComponentType<P>;

    /**
     * Represents any user-defined component, either as a function or a class.
     *
     * Similar to {@link JSXElementConstructor}, but with extra properties like
     * {@link FunctionComponent.defaultProps defaultProps }.
     *
     * @template P The props the component accepts.
     *
     * @see {@link ComponentClass}
     * @see {@link FunctionComponent}
     */
    type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

    /**
     * Represents any user-defined component, either as a function or a class.
     *
     * Similar to {@link ComponentType}, but without extra properties like
     * {@link FunctionComponent.defaultProps defaultProps }.
     *
     * @template P The props the component accepts.
     */
    type JSXElementConstructor<P> =
        | ((
            props: P,
        ) => ReactNode | Promise<ReactNode>)
        // constructor signature must match React.Component
        | (new(props: P) => Component<any, any>);

    /**
     * Created by {@link createRef}, or {@link useRef} when passed `null`.
     *
     * @template T The type of the ref's value.
     *
     * @example
     *
     * ```tsx
     * const ref = createRef<HTMLDivElement>();
     *
     * ref.current = document.createElement('div'); // Error
     * ```
     */
    interface RefObject<T> {
        /**
         * The current value of the ref.
         */
        current: T;
    }

    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES {
    }
    /**
     * A callback fired whenever the ref's value changes.
     *
     * @template T The type of the ref's value.
     *
     * @see {@link https://react.dev/reference/react-dom/components/common#ref-callback React Docs}
     *
     * @example
     *
     * ```tsx
     * <div ref={(node) => console.log(node)} />
     * ```
     */
    type RefCallback<T> = {
        bivarianceHack(
            instance: T | null,
        ):
            | void
            | (() => VoidOrUndefinedOnly)
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES
            ];
    }["bivarianceHack"];

    /**
     * A union type of all possible shapes for React refs.
     *
     * @see {@link RefCallback}
     * @see {@link RefObject}
     */

    type Ref<T> = RefCallback<T> | RefObject<T | null> | null;
    /**
     * @deprecated Use `Ref` instead. String refs are no longer supported.
     * If you're typing a library with support for React versions with string refs, use `RefAttributes<T>['ref']` instead.
     */
    type LegacyRef<T> = Ref<T>;
    /**
     * @deprecated Use `ComponentRef<T>` instead
     *
     * Retrieves the type of the 'ref' prop for a given component type or tag name.
     *
     * @template C The component type.
     *
     * @example
     *
     * ```tsx
     * type MyComponentRef = React.ElementRef<typeof MyComponent>;
     * ```
     *
     * @example
     *
     * ```tsx
     * type DivRef = React.ElementRef<'div'>;
     * ```
     */
    type ElementRef<
        C extends
            | ForwardRefExoticComponent<any>
            | { new(props: any): Component<any> }
            | ((props: any) => ReactNode)
            | keyof JSX.IntrinsicElements,
    > = ComponentRef<C>;

    type ComponentState = any;

    /**
     * A value which uniquely identifies a node among items in an array.
     *
     * @see {@link https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key React Docs}
     */
    type Key = string | number | bigint;

    /**
     * @internal The props any component can receive.
     * You don't have to add this type. All components automatically accept these props.
     * ```tsx
     * const Component = () => <div />;
     * <Component key="one" />
     * ```
     *
     * WARNING: The implementation of a component will never have access to these attributes.
     * The following example would be incorrect usage because {@link Component} would never have access to `key`:
     * ```tsx
     * const Component = (props: React.Attributes) => props.key;
     * ```
     */
    interface Attributes {
        key?: Key | null | undefined;
    }
    /**
     * The props any component accepting refs can receive.
     * Class components, built-in browser components (e.g. `div`) and forwardRef components can receive refs and automatically accept these props.
     * ```tsx
     * const Component = forwardRef(() => <div />);
     * <Component ref={(current) => console.log(current)} />
     * ```
     *
     * You only need this type if you manually author the types of props that need to be compatible with legacy refs.
     * ```tsx
     * interface Props extends React.RefAttributes<HTMLDivElement> {}
     * declare const Component: React.FunctionComponent<Props>;
     * ```
     *
     * Otherwise it's simpler to directly use {@link Ref} since you can safely use the
     * props type to describe to props that a consumer can pass to the component
     * as well as describing the props the implementation of a component "sees".
     * {@link RefAttributes} is generally not safe to describe both consumer and seen props.
     *
     * ```tsx
     * interface Props extends {
     *   ref?: React.Ref<HTMLDivElement> | undefined;
     * }
     * declare const Component: React.FunctionComponent<Props>;
     * ```
     *
     * WARNING: The implementation of a component will not have access to the same type in versions of React supporting string refs.
     * The following example would be incorrect usage because {@link Component} would never have access to a `ref` with type `string`
     * ```tsx
     * const Component = (props: React.RefAttributes) => props.ref;
     * ```
     */
    interface RefAttributes<T> extends Attributes {
        /**
         * Allows getting a ref to the component instance.
         * Once the component unmounts, React will set `ref.current` to `null`
         * (or call the ref with `null` if you passed a callback ref).
         *
         * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
         */
        ref?: Ref<T> | undefined;
    }

    /**
     * Represents the built-in attributes available to class components.
     */
    interface ClassAttributes<T> extends RefAttributes<T> {
    }

    /**
     * Represents a JSX element.
     *
     * Where {@link ReactNode} represents everything that can be rendered, `ReactElement`
     * only represents JSX.
     *
     * @template P The type of the props object
     * @template T The type of the component or tag
     *
     * @example
     *
     * ```tsx
     * const element: ReactElement = <div />;
     * ```
     */
    interface ReactElement<
        P = unknown,
        T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
    > {
        type: T;
        props: P;
        key: string | null;
    }

    /**
     * @deprecated
     */
    interface ReactComponentElement<
        T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
        P = Pick<ComponentProps<T>, Exclude<keyof ComponentProps<T>, "key" | "ref">>,
    > extends ReactElement<P, Exclude<T, number>> {}

    /**
     * @deprecated Use `ReactElement<P, React.FunctionComponent<P>>`
     */
    interface FunctionComponentElement<P> extends ReactElement<P, FunctionComponent<P>> {
        /**
         * @deprecated Use `element.props.ref` instead.
         */
        ref?: ("ref" extends keyof P ? P extends { ref?: infer R | undefined } ? R : never : never) | undefined;
    }

    /**
     * @deprecated Use `ReactElement<P, React.ComponentClass<P>>`
     */
    type CElement<P, T extends Component<P, ComponentState>> = ComponentElement<P, T>;
    /**
     * @deprecated Use `ReactElement<P, React.ComponentClass<P>>`
     */
    interface ComponentElement<P, T extends Component<P, ComponentState>> extends ReactElement<P, ComponentClass<P>> {
        /**
         * @deprecated Use `element.props.ref` instead.
         */
        ref?: Ref<T> | undefined;
    }

    /**
     * @deprecated Use {@link ComponentElement} instead.
     */
    type ClassicElement<P> = CElement<P, ClassicComponent<P, ComponentState>>;

    // string fallback for custom web-components
    /**
     * @deprecated Use `ReactElement<P, string>`
     */
    interface DOMElement<P extends HTMLAttributes<T> | SVGAttributes<T>, T extends Element>
        extends ReactElement<P, string>
    {
        /**
         * @deprecated Use `element.props.ref` instead.
         */
        ref: Ref<T>;
    }

    // ReactHTML for ReactHTMLElement
    interface ReactHTMLElement<T extends HTMLElement> extends DetailedReactHTMLElement<AllHTMLAttributes<T>, T> {}

    interface DetailedReactHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMElement<P, T> {
        type: HTMLElementType;
    }

    // ReactSVG for ReactSVGElement
    interface ReactSVGElement extends DOMElement<SVGAttributes<SVGElement>, SVGElement> {
        type: SVGElementType;
    }

    interface ReactPortal extends ReactElement {
        children: ReactNode;
    }

    /**
     * Different release channels declare additional types of ReactNode this particular release channel accepts.
     * App or library types should never augment this interface.
     */
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES {}

    /**
     * Represents all of the things React can render.
     *
     * Where {@link ReactElement} only represents JSX, `ReactNode` represents everything that can be rendered.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/react-types/reactnode/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * // Typing children
     * type Props = { children: ReactNode }
     *
     * const Component = ({ children }: Props) => <div>{children}</div>
     *
     * <Component>hello</Component>
     * ```
     *
     * @example
     *
     * ```tsx
     * // Typing a custom element
     * type Props = { customElement: ReactNode }
     *
     * const Component = ({ customElement }: Props) => <div>{customElement}</div>
     *
     * <Component customElement={<div>hello</div>} />
     * ```
     */
    // non-thenables need to be kept in sync with AwaitedReactNode
    type ReactNode =
        | ReactElement
        | string
        | number
        | bigint
        | Iterable<ReactNode>
        | ReactPortal
        | boolean
        | null
        | undefined
        | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES[
            keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES
        ]
        | Promise<AwaitedReactNode>;

    //
    // Top Level API
    // ----------------------------------------------------------------------

    // DOM Elements
    // TODO: generalize this to everything in `keyof ReactHTML`, not just "input"
    function createElement(
        type: "input",
        props?: InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> | null,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    function createElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        type: HTMLElementType,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<P, T>;
    function createElement<P extends SVGAttributes<T>, T extends SVGElement>(
        type: SVGElementType,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): ReactSVGElement;
    function createElement<P extends DOMAttributes<T>, T extends Element>(
        type: string,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): DOMElement<P, T>;

    // Custom components

    function createElement<P extends {}>(
        type: FunctionComponent<P>,
        props?: Attributes & P | null,
        ...children: ReactNode[]
    ): FunctionComponentElement<P>;
    function createElement<P extends {}, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
        type: ClassType<P, T, C>,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): CElement<P, T>;
    function createElement<P extends {}>(
        type: FunctionComponent<P> | ComponentClass<P> | string,
        props?: Attributes & P | null,
        ...children: ReactNode[]
    ): ReactElement<P>;

    // DOM Elements
    // ReactHTMLElement
    function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        element: DetailedReactHTMLElement<P, T>,
        props?: P,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<P, T>;
    // ReactHTMLElement, less specific
    function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        element: ReactHTMLElement<T>,
        props?: P,
        ...children: ReactNode[]
    ): ReactHTMLElement<T>;
    // SVGElement
    function cloneElement<P extends SVGAttributes<T>, T extends SVGElement>(
        element: ReactSVGElement,
        props?: P,
        ...children: ReactNode[]
    ): ReactSVGElement;
    // DOM Element (has to be the last, because type checking stops at first overload that fits)
    function cloneElement<P extends DOMAttributes<T>, T extends Element>(
        element: DOMElement<P, T>,
        props?: DOMAttributes<T> & P,
        ...children: ReactNode[]
    ): DOMElement<P, T>;

    // Custom components
    function cloneElement<P>(
        element: FunctionComponentElement<P>,
        props?: Partial<P> & Attributes,
        ...children: ReactNode[]
    ): FunctionComponentElement<P>;
    function cloneElement<P, T extends Component<P, ComponentState>>(
        element: CElement<P, T>,
        props?: Partial<P> & ClassAttributes<T>,
        ...children: ReactNode[]
    ): CElement<P, T>;
    function cloneElement<P>(
        element: ReactElement<P>,
        props?: Partial<P> & Attributes,
        ...children: ReactNode[]
    ): ReactElement<P>;

    /**
     * Describes the props accepted by a Context {@link Provider}.
     *
     * @template T The type of the value the context provides.
     */
    interface ProviderProps<T> {
        value: T;
        children?: ReactNode | undefined;
    }

    /**
     * Describes the props accepted by a Context {@link Consumer}.
     *
     * @template T The type of the value the context provides.
     */
    interface ConsumerProps<T> {
        children: (value: T) => ReactNode;
    }

    /**
     * An object masquerading as a component. These are created by functions
     * like {@link forwardRef}, {@link memo}, and {@link createContext}.
     *
     * In order to make TypeScript work, we pretend that they are normal
     * components.
     *
     * But they are, in fact, not callable - instead, they are objects which
     * are treated specially by the renderer.
     *
     * @template P The props the component accepts.
     */
    interface ExoticComponent<P = {}> {
        (props: P): ReactNode;
        readonly $$typeof: symbol;
    }

    /**
     * An {@link ExoticComponent} with a `displayName` property applied to it.
     *
     * @template P The props the component accepts.
     */
    interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         */
        displayName?: string | undefined;
    }

    /**
     * An {@link ExoticComponent} with a `propTypes` property applied to it.
     *
     * @template P The props the component accepts.
     */
    interface ProviderExoticComponent<P> extends ExoticComponent<P> {
    }

    /**
     * Used to retrieve the type of a context object from a {@link Context}.
     *
     * @template C The context object.
     *
     * @example
     *
     * ```tsx
     * import { createContext } from 'react';
     *
     * const MyContext = createContext({ foo: 'bar' });
     *
     * type ContextType = ContextType<typeof MyContext>;
     * // ContextType = { foo: string }
     * ```
     */
    type ContextType<C extends Context<any>> = C extends Context<infer T> ? T : never;

    /**
     * Wraps your components to specify the value of this context for all components inside.
     *
     * @see {@link https://react.dev/reference/react/createContext#provider React Docs}
     *
     * @example
     *
     * ```tsx
     * import { createContext } from 'react';
     *
     * const ThemeContext = createContext('light');
     *
     * function App() {
     *   return (
     *     <ThemeContext.Provider value="dark">
     *       <Toolbar />
     *     </ThemeContext.Provider>
     *   );
     * }
     * ```
     */
    type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;

    /**
     * The old way to read context, before {@link useContext} existed.
     *
     * @see {@link https://react.dev/reference/react/createContext#consumer React Docs}
     *
     * @example
     *
     * ```tsx
     * import { UserContext } from './user-context';
     *
     * function Avatar() {
     *   return (
     *     <UserContext.Consumer>
     *       {user => <img src={user.profileImage} alt={user.name} />}
     *     </UserContext.Consumer>
     *   );
     * }
     * ```
     */
    type Consumer<T> = ExoticComponent<ConsumerProps<T>>;

    /**
     * Context lets components pass information deep down without explicitly
     * passing props.
     *
     * Created from {@link createContext}
     *
     * @see {@link https://react.dev/learn/passing-data-deeply-with-context React Docs}
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * import { createContext } from 'react';
     *
     * const ThemeContext = createContext('light');
     * ```
     */
    interface Context<T> extends Provider<T> {
        Provider: Provider<T>;
        Consumer: Consumer<T>;
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         */
        displayName?: string | undefined;
    }

    /**
     * Lets you create a {@link Context} that components can provide or read.
     *
     * @param defaultValue The value you want the context to have when there is no matching
     * {@link Provider} in the tree above the component reading the context. This is meant
     * as a "last resort" fallback.
     *
     * @see {@link https://react.dev/reference/react/createContext#reference React Docs}
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * import { createContext } from 'react';
     *
     * const ThemeContext = createContext('light');
     * function App() {
     *   return (
     *     <ThemeContext value="dark">
     *       <Toolbar />
     *     </ThemeContext>
     *   );
     * }
     * ```
     */
    function createContext<T>(
        // If you thought this should be optional, see
        // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
        defaultValue: T,
    ): Context<T>;

    function isValidElement<P>(object: {} | null | undefined): object is ReactElement<P>;

    const Children: {
        map<T, C>(
            children: C | readonly C[],
            fn: (child: C, index: number) => T,
        ): C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
        forEach<C>(children: C | readonly C[], fn: (child: C, index: number) => void): void;
        count(children: any): number;
        only<C>(children: C): C extends any[] ? never : C;
        toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
    };
    /**
     * Lets you group elements without a wrapper node.
     *
     * @see {@link https://react.dev/reference/react/Fragment React Docs}
     *
     * @example
     *
     * ```tsx
     * import { Fragment } from 'react';
     *
     * <Fragment>
     *   <td>Hello</td>
     *   <td>World</td>
     * </Fragment>
     * ```
     *
     * @example
     *
     * ```tsx
     * // Using the <></> shorthand syntax:
     *
     * <>
     *   <td>Hello</td>
     *   <td>World</td>
     * </>
     * ```
     */
    const Fragment: ExoticComponent<{ children?: ReactNode | undefined }>;

    /**
     * Lets you find common bugs in your components early during development.
     *
     * @see {@link https://react.dev/reference/react/StrictMode React Docs}
     *
     * @example
     *
     * ```tsx
     * import { StrictMode } from 'react';
     *
     * <StrictMode>
     *   <App />
     * </StrictMode>
     * ```
     */
    const StrictMode: ExoticComponent<{ children?: ReactNode | undefined }>;

    /**
     * The props accepted by {@link Suspense}.
     *
     * @see {@link https://react.dev/reference/react/Suspense React Docs}
     */
    interface SuspenseProps {
        children?: ReactNode | undefined;

        /** A fallback react tree to show when a Suspense child (like React.lazy) suspends */
        fallback?: ReactNode;

        /**
         * A name for this Suspense boundary for instrumentation purposes.
         * The name will help identify this boundary in React DevTools.
         */
        name?: string | undefined;
    }

    /**
     * Lets you display a fallback until its children have finished loading.
     *
     * @see {@link https://react.dev/reference/react/Suspense React Docs}
     *
     * @example
     *
     * ```tsx
     * import { Suspense } from 'react';
     *
     * <Suspense fallback={<Loading />}>
     *   <ProfileDetails />
     * </Suspense>
     * ```
     */
    const Suspense: ExoticComponent<SuspenseProps>;
    const version: string;

    /**
     * The callback passed to {@link ProfilerProps.onRender}.
     *
     * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
     */
    type ProfilerOnRenderCallback = (
        /**
         * The string id prop of the {@link Profiler} tree that has just committed. This lets
         * you identify which part of the tree was committed if you are using multiple
         * profilers.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        id: string,
        /**
         * This lets you know whether the tree has just been mounted for the first time
         * or re-rendered due to a change in props, state, or hooks.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        phase: "mount" | "update" | "nested-update",
        /**
         * The number of milliseconds spent rendering the {@link Profiler} and its descendants
         * for the current update. This indicates how well the subtree makes use of
         * memoization (e.g. {@link memo} and {@link useMemo}). Ideally this value should decrease
         * significantly after the initial mount as many of the descendants will only need to
         * re-render if their specific props change.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        actualDuration: number,
        /**
         * The number of milliseconds estimating how much time it would take to re-render the entire
         * {@link Profiler} subtree without any optimizations. It is calculated by summing up the most
         * recent render durations of each component in the tree. This value estimates a worst-case
         * cost of rendering (e.g. the initial mount or a tree with no memoization). Compare
         * {@link actualDuration} against it to see if memoization is working.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        baseDuration: number,
        /**
         * A numeric timestamp for when React began rendering the current update.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        startTime: number,
        /**
         * A numeric timestamp for when React committed the current update. This value is shared
         * between all profilers in a commit, enabling them to be grouped if desirable.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        commitTime: number,
    ) => void;

    /**
     * The props accepted by {@link Profiler}.
     *
     * @see {@link https://react.dev/reference/react/Profiler React Docs}
     */
    interface ProfilerProps {
        children?: ReactNode | undefined;
        id: string;
        onRender: ProfilerOnRenderCallback;
    }

    /**
     * Lets you measure rendering performance of a React tree programmatically.
     *
     * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
     *
     * @example
     *
     * ```tsx
     * <Profiler id="App" onRender={onRender}>
     *   <App />
     * </Profiler>
     * ```
     */
    const Profiler: ExoticComponent<ProfilerProps>;

    //
    // Component API
    // ----------------------------------------------------------------------

    type ReactInstance = Component<any> | Element;

    // Base component for plain JS classes
    interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> {}
    class Component<P, S> {
        /**
         * If set, `this.context` will be set at runtime to the current value of the given Context.
         *
         * @example
         *
         * ```ts
         * type MyContext = number
         * const Ctx = React.createContext<MyContext>(0)
         *
         * class Foo extends React.Component {
         *   static contextType = Ctx
         *   context!: React.ContextType<typeof Ctx>
         *   render () {
         *     return <>My context's value: {this.context}</>;
         *   }
         * }
         * ```
         *
         * @see {@link https://react.dev/reference/react/Component#static-contexttype}
         */
        static contextType?: Context<any> | undefined;

        /**
         * Ignored by React.
         * @deprecated Only kept in types for backwards compatibility. Will be removed in a future major release.
         */
        static propTypes?: any;

        /**
         * If using the new style context, re-declare this in your class to be the
         * `React.ContextType` of your `static contextType`.
         * Should be used with type annotation or static contextType.
         *
         * @example
         * ```ts
         * static contextType = MyContext
         * // For TS pre-3.7:
         * context!: React.ContextType<typeof MyContext>
         * // For TS 3.7 and above:
         * declare context: React.ContextType<typeof MyContext>
         * ```
         *
         * @see {@link https://react.dev/reference/react/Component#context React Docs}
         */
        context: unknown;

        // Keep in sync with constructor signature of JSXElementConstructor and ComponentClass.
        constructor(props: P);

        // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
        // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
        // Also, the ` | S` allows intellisense to not be dumbisense
        setState<K extends keyof S>(
            state: ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null) | (Pick<S, K> | S | null),
            callback?: () => void,
        ): void;

        forceUpdate(callback?: () => void): void;
        render(): ReactNode;

        readonly props: Readonly<P>;
        state: Readonly<S>;
    }

    class PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {}

    /**
     * @deprecated Use `ClassicComponent` from `create-react-class`
     *
     * @see {@link https://legacy.reactjs.org/docs/react-without-es6.html Legacy React Docs}
     * @see {@link https://www.npmjs.com/package/create-react-class `create-react-class` on npm}
     */
    interface ClassicComponent<P = {}, S = {}> extends Component<P, S> {
        replaceState(nextState: S, callback?: () => void): void;
        isMounted(): boolean;
        getInitialState?(): S;
    }

    //
    // Class Interfaces
    // ----------------------------------------------------------------------

    /**
     * Represents the type of a function component. Can optionally
     * receive a type argument that represents the props the component
     * receives.
     *
     * @template P The props the component accepts.
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
     * @alias for {@link FunctionComponent}
     *
     * @example
     *
     * ```tsx
     * // With props:
     * type Props = { name: string }
     *
     * const MyComponent: FC<Props> = (props) => {
     *  return <div>{props.name}</div>
     * }
     * ```
     *
     * @example
     *
     * ```tsx
     * // Without props:
     * const MyComponentWithoutProps: FC = () => {
     *   return <div>MyComponentWithoutProps</div>
     * }
     * ```
     */
    type FC<P = {}> = FunctionComponent<P>;

    /**
     * Represents the type of a function component. Can optionally
     * receive a type argument that represents the props the component
     * accepts.
     *
     * @template P The props the component accepts.
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * // With props:
     * type Props = { name: string }
     *
     * const MyComponent: FunctionComponent<Props> = (props) => {
     *  return <div>{props.name}</div>
     * }
     * ```
     *
     * @example
     *
     * ```tsx
     * // Without props:
     * const MyComponentWithoutProps: FunctionComponent = () => {
     *   return <div>MyComponentWithoutProps</div>
     * }
     * ```
     */
    interface FunctionComponent<P = {}> {
        (props: P): ReactNode | Promise<ReactNode>;
        /**
         * Ignored by React.
         * @deprecated Only kept in types for backwards compatibility. Will be removed in a future major release.
         */
        propTypes?: any;
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         *
         * @example
         *
         * ```tsx
         *
         * const MyComponent: FC = () => {
         *   return <div>Hello!</div>
         * }
         *
         * MyComponent.displayName = 'MyAwesomeComponent'
         * ```
         */
        displayName?: string | undefined;
    }

    /**
     * The type of the ref received by a {@link ForwardRefRenderFunction}.
     *
     * @see {@link ForwardRefRenderFunction}
     */
    // Making T nullable is assuming the refs will be managed by React or the component impl will write it somewhere else.
    // But this isn't necessarily true. We haven't heard complains about it yet and hopefully `forwardRef` is removed from React before we do.
    type ForwardedRef<T> = ((instance: T | null) => void) | RefObject<T | null> | null;

    /**
     * The type of the function passed to {@link forwardRef}. This is considered different
     * to a normal {@link FunctionComponent} because it receives an additional argument,
     *
     * @param props Props passed to the component, if any.
     * @param ref A ref forwarded to the component of type {@link ForwardedRef}.
     *
     * @template T The type of the forwarded ref.
     * @template P The type of the props the component accepts.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/ React TypeScript Cheatsheet}
     * @see {@link forwardRef}
     */
    interface ForwardRefRenderFunction<T, P = {}> {
        (props: P, ref: ForwardedRef<T>): ReactNode;
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * Will show `ForwardRef(${Component.displayName || Component.name})`
         * in devtools by default, but can be given its own specific name.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         */
        displayName?: string | undefined;
        /**
         * Ignored by React.
         * @deprecated Only kept in types for backwards compatibility. Will be removed in a future major release.
         */
        propTypes?: any;
    }

    /**
     * Represents a component class in React.
     *
     * @template P The props the component accepts.
     * @template S The internal state of the component.
     */
    interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
        // constructor signature must match React.Component
        new(props: P): Component<P, S>;
        /**
         * Ignored by React.
         * @deprecated Only kept in types for backwards compatibility. Will be removed in a future major release.
         */
        propTypes?: any;
        contextType?: Context<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         */
        displayName?: string | undefined;
    }

    /**
     * @deprecated Use `ClassicComponentClass` from `create-react-class`
     *
     * @see {@link https://legacy.reactjs.org/docs/react-without-es6.html Legacy React Docs}
     * @see {@link https://www.npmjs.com/package/create-react-class `create-react-class` on npm}
     */
    interface ClassicComponentClass<P = {}> extends ComponentClass<P> {
        new(props: P): ClassicComponent<P, ComponentState>;
        getDefaultProps?(): P;
    }

    /**
     * Used in {@link createElement} and {@link createFactory} to represent
     * a class.
     *
     * An intersection type is used to infer multiple type parameters from
     * a single argument, which is useful for many top-level API defs.
     * See {@link https://github.com/Microsoft/TypeScript/issues/7234 this GitHub issue}
     * for more info.
     */
    type ClassType<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>> =
        & C
        & (new(props: P) => T);

    //
    // Component Specs and Lifecycle
    // ----------------------------------------------------------------------

    // This should actually be something like `Lifecycle<P, S> | DeprecatedLifecycle<P, S>`,
    // as React will _not_ call the deprecated lifecycle methods if any of the new lifecycle
    // methods are present.
    interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {
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
         * If false is returned, {@link Component.render}, `componentWillUpdate`
         * and `componentDidUpdate` will not be called.
         */
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>): boolean;
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

    // This should be "infer SS" but can't use it yet
    interface NewLifecycle<P, S, SS> {
        /**
         * Runs before React applies the result of {@link Component.render render} to the document, and
         * returns an object to be given to {@link componentDidUpdate}. Useful for saving
         * things such as scroll position before {@link Component.render render} causes changes to it.
         *
         * Note: the presence of this method prevents any of the deprecated
         * lifecycle events from running.
         */
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
        /**
         * Called immediately after updating occurs. Not called for the initial render.
         *
         * The snapshot is only present if {@link getSnapshotBeforeUpdate} is present and returns non-null.
         */
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
    }

    interface DeprecatedLifecycle<P, S> {
        /**
         * Called immediately before mounting occurs, and before {@link Component.render}.
         * Avoid introducing any side-effects or subscriptions in this method.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use {@link ComponentLifecycle.componentDidMount componentDidMount} or the constructor instead; will stop working in React 17
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        componentWillMount?(): void;
        /**
         * Called immediately before mounting occurs, and before {@link Component.render}.
         * Avoid introducing any side-effects or subscriptions in this method.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use {@link ComponentLifecycle.componentDidMount componentDidMount} or the constructor instead
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        UNSAFE_componentWillMount?(): void;
        /**
         * Called when the component may be receiving new props.
         * React may call this even if props have not changed, so be sure to compare new and existing
         * props if you only want to handle changes.
         *
         * Calling {@link Component.setState} generally does not trigger this method.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use static {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} instead; will stop working in React 17
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        componentWillReceiveProps?(nextProps: Readonly<P>): void;
        /**
         * Called when the component may be receiving new props.
         * React may call this even if props have not changed, so be sure to compare new and existing
         * props if you only want to handle changes.
         *
         * Calling {@link Component.setState} generally does not trigger this method.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use static {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} instead
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>): void;
        /**
         * Called immediately before rendering when new props or state is received. Not called for the initial render.
         *
         * Note: You cannot call {@link Component.setState} here.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>): void;
        /**
         * Called immediately before rendering when new props or state is received. Not called for the initial render.
         *
         * Note: You cannot call {@link Component.setState} here.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use getSnapshotBeforeUpdate instead
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>): void;
    }

    function createRef<T>(): RefObject<T | null>;

    /**
     * The type of the component returned from {@link forwardRef}.
     *
     * @template P The props the component accepts, if any.
     *
     * @see {@link ExoticComponent}
     */
    interface ForwardRefExoticComponent<P> extends NamedExoticComponent<P> {
        /**
         * Ignored by React.
         * @deprecated Only kept in types for backwards compatibility. Will be removed in a future major release.
         */
        propTypes?: any;
    }

    /**
     * Lets your component expose a DOM node to a parent component
     * using a ref.
     *
     * @see {@link https://react.dev/reference/react/forwardRef React Docs}
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/ React TypeScript Cheatsheet}
     *
     * @param render See the {@link ForwardRefRenderFunction}.
     *
     * @template T The type of the DOM node.
     * @template P The props the component accepts, if any.
     *
     * @example
     *
     * ```tsx
     * interface Props {
     *   children?: ReactNode;
     *   type: "submit" | "button";
     * }
     *
     * export const FancyButton = forwardRef<HTMLButtonElement, Props>((props, ref) => (
     *   <button ref={ref} className="MyClassName" type={props.type}>
     *     {props.children}
     *   </button>
     * ));
     * ```
     */
    function forwardRef<T, P = {}>(
        render: ForwardRefRenderFunction<T, PropsWithoutRef<P>>,
    ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

    /**
     * Omits the 'ref' attribute from the given props object.
     *
     * @template Props The props object type.
     */
    type PropsWithoutRef<Props> =
        // Omit would not be sufficient for this. We'd like to avoid unnecessary mapping and need a distributive conditional to support unions.
        // see: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
        // https://github.com/Microsoft/TypeScript/issues/28339
        Props extends any ? ("ref" extends keyof Props ? Omit<Props, "ref"> : Props) : Props;
    /**
     * Ensures that the props do not include string ref, which cannot be forwarded
     * @deprecated Use `Props` directly. `PropsWithRef<Props>` is just an alias for `Props`
     */
    type PropsWithRef<Props> = Props;

    type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };

    /**
     * Used to retrieve the props a component accepts. Can either be passed a string,
     * indicating a DOM element (e.g. 'div', 'span', etc.) or the type of a React
     * component.
     *
     * It's usually better to use {@link ComponentPropsWithRef} or {@link ComponentPropsWithoutRef}
     * instead of this type, as they let you be explicit about whether or not to include
     * the `ref` prop.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * // Retrieves the props an 'input' element accepts
     * type InputProps = React.ComponentProps<'input'>;
     * ```
     *
     * @example
     *
     * ```tsx
     * const MyComponent = (props: { foo: number, bar: string }) => <div />;
     *
     * // Retrieves the props 'MyComponent' accepts
     * type MyComponentProps = React.ComponentProps<typeof MyComponent>;
     * ```
     */
    type ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = T extends
        JSXElementConstructor<infer Props> ? Props
        : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T]
        : {};

    /**
     * Used to retrieve the props a component accepts with its ref. Can either be
     * passed a string, indicating a DOM element (e.g. 'div', 'span', etc.) or the
     * type of a React component.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * // Retrieves the props an 'input' element accepts
     * type InputProps = React.ComponentPropsWithRef<'input'>;
     * ```
     *
     * @example
     *
     * ```tsx
     * const MyComponent = (props: { foo: number, bar: string }) => <div />;
     *
     * // Retrieves the props 'MyComponent' accepts
     * type MyComponentPropsWithRef = React.ComponentPropsWithRef<typeof MyComponent>;
     * ```
     */
    type ComponentPropsWithRef<T extends ElementType> = T extends JSXElementConstructor<infer Props>
        // If it's a class i.e. newable we're dealing with a class component
        ? T extends abstract new(args: any) => any ? PropsWithoutRef<Props> & RefAttributes<InstanceType<T>>
        : Props
        : ComponentProps<T>;
    /**
     * Used to retrieve the props a custom component accepts with its ref.
     *
     * Unlike {@link ComponentPropsWithRef}, this only works with custom
     * components, i.e. components you define yourself. This is to improve
     * type-checking performance.
     *
     * @example
     *
     * ```tsx
     * const MyComponent = (props: { foo: number, bar: string }) => <div />;
     *
     * // Retrieves the props 'MyComponent' accepts
     * type MyComponentPropsWithRef = React.CustomComponentPropsWithRef<typeof MyComponent>;
     * ```
     */
    type CustomComponentPropsWithRef<T extends ComponentType> = T extends JSXElementConstructor<infer Props>
        // If it's a class i.e. newable we're dealing with a class component
        ? T extends abstract new(args: any) => any ? PropsWithoutRef<Props> & RefAttributes<InstanceType<T>>
        : Props
        : never;

    /**
     * Used to retrieve the props a component accepts without its ref. Can either be
     * passed a string, indicating a DOM element (e.g. 'div', 'span', etc.) or the
     * type of a React component.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * // Retrieves the props an 'input' element accepts
     * type InputProps = React.ComponentPropsWithoutRef<'input'>;
     * ```
     *
     * @example
     *
     * ```tsx
     * const MyComponent = (props: { foo: number, bar: string }) => <div />;
     *
     * // Retrieves the props 'MyComponent' accepts
     * type MyComponentPropsWithoutRef = React.ComponentPropsWithoutRef<typeof MyComponent>;
     * ```
     */
    type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<ComponentProps<T>>;

    /**
     * Retrieves the type of the 'ref' prop for a given component type or tag name.
     *
     * @template C The component type.
     *
     * @example
     *
     * ```tsx
     * type MyComponentRef = React.ElementRef<typeof MyComponent>;
     * ```
     *
     * @example
     *
     * ```tsx
     * type DivRef = React.ElementRef<'div'>;
     * ```
     */
    type ComponentRef<T extends ElementType> = ComponentPropsWithRef<T> extends RefAttributes<infer Method> ? Method
        : never;

    // will show `Memo(${Component.displayName || Component.name})` in devtools by default,
    // but can be given its own specific name
    type MemoExoticComponent<T extends ComponentType<any>> = NamedExoticComponent<CustomComponentPropsWithRef<T>> & {
        readonly type: T;
    };

    /**
     * Lets you skip re-rendering a component when its props are unchanged.
     *
     * @see {@link https://react.dev/reference/react/memo React Docs}
     *
     * @param Component The component to memoize.
     * @param propsAreEqual A function that will be used to determine if the props have changed.
     *
     * @example
     *
     * ```tsx
     * import { memo } from 'react';
     *
     * const SomeComponent = memo(function SomeComponent(props: { foo: string }) {
     *   // ...
     * });
     * ```
     */
    function memo<P extends object>(
        Component: FunctionComponent<P>,
        propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean,
    ): NamedExoticComponent<P>;
    function memo<T extends ComponentType<any>>(
        Component: T,
        propsAreEqual?: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) => boolean,
    ): MemoExoticComponent<T>;

    interface LazyExoticComponent<T extends ComponentType<any>>
        extends ExoticComponent<CustomComponentPropsWithRef<T>>
    {
        readonly _result: T;
    }

    /**
     * Lets you defer loading a component’s code until it is rendered for the first time.
     *
     * @see {@link https://react.dev/reference/react/lazy React Docs}
     *
     * @param load A function that returns a `Promise` or another thenable (a `Promise`-like object with a
     * then method). React will not call `load` until the first time you attempt to render the returned
     * component. After React first calls load, it will wait for it to resolve, and then render the
     * resolved value’s `.default` as a React component. Both the returned `Promise` and the `Promise`’s
     * resolved value will be cached, so React will not call load more than once. If the `Promise` rejects,
     * React will throw the rejection reason for the nearest Error Boundary to handle.
     *
     * @example
     *
     * ```tsx
     * import { lazy } from 'react';
     *
     * const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
     * ```
     */
    function lazy<T extends ComponentType<any>>(
        load: () => Promise<{ default: T }>,
    ): LazyExoticComponent<T>;

    //
    // React Hooks
    // ----------------------------------------------------------------------

    /**
     * The instruction passed to a {@link Dispatch} function in {@link useState}
     * to tell React what the next value of the {@link useState} should be.
     *
     * Often found wrapped in {@link Dispatch}.
     *
     * @template S The type of the state.
     *
     * @example
     *
     * ```tsx
     * // This return type correctly represents the type of
     * // `setCount` in the example below.
     * const useCustomState = (): Dispatch<SetStateAction<number>> => {
     *   const [count, setCount] = useState(0);
     *
     *   return setCount;
     * }
     * ```
     */
    type SetStateAction<S> = S | ((prevState: S) => S);

    /**
     * A function that can be used to update the state of a {@link useState}
     * or {@link useReducer} hook.
     */
    type Dispatch<A> = (value: A) => void;
    /**
     * A {@link Dispatch} function can sometimes be called without any arguments.
     */
    type DispatchWithoutAction = () => void;
    // Limit the reducer to accept only 0 or 1 action arguments
    // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
    type AnyActionArg = [] | [any];
    // Get the dispatch type from the reducer arguments (captures optional action argument correctly)
    type ActionDispatch<ActionArg extends AnyActionArg> = (...args: ActionArg) => void;
    // Unlike redux, the actions _can_ be anything
    type Reducer<S, A> = (prevState: S, action: A) => S;
    // If useReducer accepts a reducer without action, dispatch may be called without any parameters.
    type ReducerWithoutAction<S> = (prevState: S) => S;
    // types used to try and prevent the compiler from reducing S
    // to a supertype common with the second argument to useReducer()
    type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
    type DependencyList = readonly unknown[];

    // NOTE: callbacks are _only_ allowed to return either void, or a destructor.
    type EffectCallback = () => void | Destructor;

    /**
     * @deprecated Use `RefObject` instead.
     */
    interface MutableRefObject<T> {
        current: T;
    }

    // This will technically work if you give a Consumer<T> or Provider<T> but it's deprecated and warns
    /**
     * Accepts a context object (the value returned from `React.createContext`) and returns the current
     * context value, as given by the nearest context provider for the given context.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useContext}
     */
    function useContext<T>(context: Context<T> /*, (not public API) observedBits?: number|boolean */): T;
    /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useState}
     */
    function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
    // convenience overload when first argument is omitted
    /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useState}
     */
    function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */
    function useReducer<S, A extends AnyActionArg>(
        reducer: (prevState: S, ...args: A) => S,
        initialState: S,
    ): [S, ActionDispatch<A>];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */
    function useReducer<S, A extends AnyActionArg>(
        reducer: (prevState: S, ...args: A) => S,
        initialState: S,
    ): [S, ActionDispatch<A>];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */
    function useReducer<S, I, A extends AnyActionArg>(
        reducer: (prevState: S, ...args: A) => S,
        initialArg: I,
        init: (i: I) => S,
    ): [S, ActionDispatch<A>];
    /**
     * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
     * (`initialValue`). The returned object will persist for the full lifetime of the component.
     *
     * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useRef}
     */
    function useRef<T>(initialValue: T): RefObject<T>;
    // convenience overload for refs given as a ref prop as they typically start with a null value
    /**
     * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
     * (`initialValue`). The returned object will persist for the full lifetime of the component.
     *
     * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useRef}
     */
    function useRef<T>(initialValue: T | null): RefObject<T | null>;
    // convenience overload for undefined initialValue
    /**
     * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
     * (`initialValue`). The returned object will persist for the full lifetime of the component.
     *
     * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useRef}
     */
    function useRef<T>(initialValue: T | undefined): RefObject<T | undefined>;
    /**
     * The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations.
     * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
     * `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.
     *
     * Prefer the standard `useEffect` when possible to avoid blocking visual updates.
     *
     * If you’re migrating code from a class component, `useLayoutEffect` fires in the same phase as
     * `componentDidMount` and `componentDidUpdate`.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useLayoutEffect}
     */
    function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
    /**
     * Accepts a function that contains imperative, possibly effectful code.
     *
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useEffect}
     */
    function useEffect(effect: EffectCallback, deps?: DependencyList): void;
    // NOTE: this does not accept strings, but this will have to be fixed by removing strings from type Ref<T>
    /**
     * `useImperativeHandle` customizes the instance value that is exposed to parent components when using
     * `ref`. As always, imperative code using refs should be avoided in most cases.
     *
     * `useImperativeHandle` should be used with `React.forwardRef`.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useImperativeHandle}
     */
    function useImperativeHandle<T, R extends T>(ref: Ref<T> | undefined, init: () => R, deps?: DependencyList): void;
    // I made 'inputs' required here and in useMemo as there's no point to memoizing without the memoization key
    // useCallback(X) is identical to just using X, useMemo(() => Y) is identical to just using Y.
    /**
     * `useCallback` will return a memoized version of the callback that only changes if one of the `inputs`
     * has changed.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useCallback}
     */
    // A specific function type would not trigger implicit any.
    // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/52873#issuecomment-845806435 for a comparison between `Function` and more specific types.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    function useCallback<T extends Function>(callback: T, deps: DependencyList): T;
    /**
     * `useMemo` will only recompute the memoized value when one of the `deps` has changed.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useMemo}
     */
    // allow undefined, but don't make it optional as that is very likely a mistake
    function useMemo<T>(factory: () => T, deps: DependencyList): T;
    /**
     * `useDebugValue` can be used to display a label for custom hooks in React DevTools.
     *
     * NOTE: We don’t recommend adding debug values to every custom hook.
     * It’s most valuable for custom hooks that are part of shared libraries.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useDebugValue}
     */
    // the name of the custom hook is itself derived from the function name at runtime:
    // it's just the function name without the "use" prefix.
    function useDebugValue<T>(value: T, format?: (value: T) => any): void;

    export type TransitionFunction = () => VoidOrUndefinedOnly | Promise<VoidOrUndefinedOnly>;
    // strange definition to allow vscode to show documentation on the invocation
    export interface TransitionStartFunction {
        /**
         * State updates caused inside the callback are allowed to be deferred.
         *
         * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
         *
         * @param callback A function which causes state updates that can be deferred.
         */
        (callback: TransitionFunction): void;
    }

    /**
     * Returns a deferred version of the value that may “lag behind” it.
     *
     * This is commonly used to keep the interface responsive when you have something that renders immediately
     * based on user input and something that needs to wait for a data fetch.
     *
     * A good example of this is a text input.
     *
     * @param value The value that is going to be deferred
     * @param initialValue A value to use during the initial render of a component. If this option is omitted, `useDeferredValue` will not defer during the initial render, because there’s no previous version of `value` that it can render instead.
     *
     * @see {@link https://react.dev/reference/react/useDeferredValue}
     */
    export function useDeferredValue<T>(value: T, initialValue?: T): T;

    /**
     * Allows components to avoid undesirable loading states by waiting for content to load
     * before transitioning to the next screen. It also allows components to defer slower,
     * data fetching updates until subsequent renders so that more crucial updates can be
     * rendered immediately.
     *
     * The `useTransition` hook returns two values in an array.
     *
     * The first is a boolean, React’s way of informing us whether we’re waiting for the transition to finish.
     * The second is a function that takes a callback. We can use it to tell React which state we want to defer.
     *
     * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
     *
     * @see {@link https://react.dev/reference/react/useTransition}
     */
    export function useTransition(): [boolean, TransitionStartFunction];

    /**
     * Similar to `useTransition` but allows uses where hooks are not available.
     *
     * @param callback A function which causes state updates that can be deferred.
     */
    export function startTransition(scope: TransitionFunction): void;
    export function startTransition(scope: TransitionFunction): void;

    /**
     * Wrap any code rendering and triggering updates to your components into `act()` calls.
     *
     * Ensures that the behavior in your tests matches what happens in the browser
     * more closely by executing pending `useEffect`s before returning. This also
     * reduces the amount of re-renders done.
     *
     * @param callback A synchronous, void callback that will execute as a single, complete React commit.
     *
     * @see https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
     */
    // NOTES
    // - the order of these signatures matters - typescript will check the signatures in source order.
    //   If the `() => VoidOrUndefinedOnly` signature is first, it'll erroneously match a Promise returning function for users with
    //   `strictNullChecks: false`.
    // - VoidOrUndefinedOnly is there to forbid any non-void return values for users with `strictNullChecks: true`
    // While act does always return Thenable, if a void function is passed, we pretend the return value is also void to not trigger dangling Promise lint rules.
    export function act(callback: () => VoidOrUndefinedOnly): void;
    export function act<T>(callback: () => T | Promise<T>): Promise<T>;

    export function useId(): string;

    /**
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @see {@link https://github.com/facebook/react/pull/21913}
     */
    export function useInsertionEffect(effect: EffectCallback, deps?: DependencyList): void;

    /**
     * @param subscribe
     * @param getSnapshot
     *
     * @see {@link https://github.com/reactwg/react-18/discussions/86}
     */
    // keep in sync with `useSyncExternalStore` from `use-sync-external-store`
    export function useSyncExternalStore<Snapshot>(
        subscribe: (onStoreChange: () => void) => () => void,
        getSnapshot: () => Snapshot,
        getServerSnapshot?: () => Snapshot,
    ): Snapshot;

    export function useOptimistic<State>(
        passthrough: State,
    ): [State, (action: State | ((pendingState: State) => State)) => void];
    export function useOptimistic<State, Action>(
        passthrough: State,
        reducer: (state: State, action: Action) => State,
    ): [State, (action: Action) => void];

    export type Usable<T> = PromiseLike<T> | Context<T>;

    export function use<T>(usable: Usable<T>): T;

    export function useActionState<State>(
        action: (state: Awaited<State>) => State | Promise<State>,
        initialState: Awaited<State>,
        permalink?: string,
    ): [state: Awaited<State>, dispatch: () => void, isPending: boolean];
    export function useActionState<State, Payload>(
        action: (state: Awaited<State>, payload: Payload) => State | Promise<State>,
        initialState: Awaited<State>,
        permalink?: string,
    ): [state: Awaited<State>, dispatch: (payload: Payload) => void, isPending: boolean];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    export function cache<CachedFunction extends Function>(fn: CachedFunction): CachedFunction;

    //
    // Event System
    // ----------------------------------------------------------------------
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
     * If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
     */
    interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}

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
        tangentialPressure: number;
        tiltX: number;
        tiltY: number;
        twist: number;
        width: number;
        height: number;
        pointerType: "mouse" | "pen" | "touch";
        isPrimary: boolean;
    }

    interface FocusEvent<Target = Element, RelatedTarget = Element> extends SyntheticEvent<Target, NativeFocusEvent> {
        relatedTarget: (EventTarget & RelatedTarget) | null;
        target: EventTarget & Target;
    }

    interface FormEvent<T = Element> extends SyntheticEvent<T> {
    }

    interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    export type ModifierKey =
        | "Alt"
        | "AltGraph"
        | "CapsLock"
        | "Control"
        | "Fn"
        | "FnLock"
        | "Hyper"
        | "Meta"
        | "NumLock"
        | "ScrollLock"
        | "Shift"
        | "Super"
        | "Symbol"
        | "SymbolLock";

    interface KeyboardEvent<T = Element> extends UIEvent<T, NativeKeyboardEvent> {
        altKey: boolean;
        /** @deprecated */
        charCode: number;
        ctrlKey: boolean;
        code: string;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
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

    interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {
        altKey: boolean;
        button: number;
        buttons: number;
        clientX: number;
        clientY: number;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        metaKey: boolean;
        movementX: number;
        movementY: number;
        pageX: number;
        pageY: number;
        relatedTarget: EventTarget | null;
        screenX: number;
        screenY: number;
        shiftKey: boolean;
    }

    interface TouchEvent<T = Element> extends UIEvent<T, NativeTouchEvent> {
        altKey: boolean;
        changedTouches: TouchList;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
    }

    interface UIEvent<T = Element, E = NativeUIEvent> extends SyntheticEvent<T, E> {
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

    interface ToggleEvent<T = Element> extends SyntheticEvent<T, NativeToggleEvent> {
        oldState: "closed" | "open";
        newState: "closed" | "open";
    }

    interface TransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
        elapsedTime: number;
        propertyName: string;
        pseudoElement: string;
    }

    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];

    type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;

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
    type ToggleEventHandler<T = Element> = EventHandler<ToggleEvent<T>>;
    type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;

    //
    // Props / DOM Attributes
    // ----------------------------------------------------------------------

    interface HTMLProps<T> extends AllHTMLAttributes<T>, ClassAttributes<T> {
    }

    type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

    interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    }

    interface SVGLineElementAttributes<T> extends SVGProps<T> {}
    interface SVGTextElementAttributes<T> extends SVGProps<T> {}

    interface DOMAttributes<T> {
        children?: ReactNode | undefined;
        dangerouslySetInnerHTML?: {
            // Should be InnerHTML['innerHTML'].
            // But unfortunately we're mixing renderer-specific type declarations.
            __html: string | TrustedHTML;
        } | undefined;

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
        onLoad?: ReactEventHandler<T> | undefined;
        onLoadCapture?: ReactEventHandler<T> | undefined;
        onError?: ReactEventHandler<T> | undefined; // also a Media Event
        onErrorCapture?: ReactEventHandler<T> | undefined; // also a Media Event

        // Keyboard Events
        onKeyDown?: KeyboardEventHandler<T> | undefined;
        onKeyDownCapture?: KeyboardEventHandler<T> | undefined;
        /** @deprecated Use `onKeyUp` or `onKeyDown` instead */
        onKeyPress?: KeyboardEventHandler<T> | undefined;
        /** @deprecated Use `onKeyUpCapture` or `onKeyDownCapture` instead */
        onKeyPressCapture?: KeyboardEventHandler<T> | undefined;
        onKeyUp?: KeyboardEventHandler<T> | undefined;
        onKeyUpCapture?: KeyboardEventHandler<T> | undefined;

        // Media Events
        onAbort?: ReactEventHandler<T> | undefined;
        onAbortCapture?: ReactEventHandler<T> | undefined;
        onCanPlay?: ReactEventHandler<T> | undefined;
        onCanPlayCapture?: ReactEventHandler<T> | undefined;
        onCanPlayThrough?: ReactEventHandler<T> | undefined;
        onCanPlayThroughCapture?: ReactEventHandler<T> | undefined;
        onDurationChange?: ReactEventHandler<T> | undefined;
        onDurationChangeCapture?: ReactEventHandler<T> | undefined;
        onEmptied?: ReactEventHandler<T> | undefined;
        onEmptiedCapture?: ReactEventHandler<T> | undefined;
        onEncrypted?: ReactEventHandler<T> | undefined;
        onEncryptedCapture?: ReactEventHandler<T> | undefined;
        onEnded?: ReactEventHandler<T> | undefined;
        onEndedCapture?: ReactEventHandler<T> | undefined;
        onLoadedData?: ReactEventHandler<T> | undefined;
        onLoadedDataCapture?: ReactEventHandler<T> | undefined;
        onLoadedMetadata?: ReactEventHandler<T> | undefined;
        onLoadedMetadataCapture?: ReactEventHandler<T> | undefined;
        onLoadStart?: ReactEventHandler<T> | undefined;
        onLoadStartCapture?: ReactEventHandler<T> | undefined;
        onPause?: ReactEventHandler<T> | undefined;
        onPauseCapture?: ReactEventHandler<T> | undefined;
        onPlay?: ReactEventHandler<T> | undefined;
        onPlayCapture?: ReactEventHandler<T> | undefined;
        onPlaying?: ReactEventHandler<T> | undefined;
        onPlayingCapture?: ReactEventHandler<T> | undefined;
        onProgress?: ReactEventHandler<T> | undefined;
        onProgressCapture?: ReactEventHandler<T> | undefined;
        onRateChange?: ReactEventHandler<T> | undefined;
        onRateChangeCapture?: ReactEventHandler<T> | undefined;
        onResize?: ReactEventHandler<T> | undefined;
        onResizeCapture?: ReactEventHandler<T> | undefined;
        onSeeked?: ReactEventHandler<T> | undefined;
        onSeekedCapture?: ReactEventHandler<T> | undefined;
        onSeeking?: ReactEventHandler<T> | undefined;
        onSeekingCapture?: ReactEventHandler<T> | undefined;
        onStalled?: ReactEventHandler<T> | undefined;
        onStalledCapture?: ReactEventHandler<T> | undefined;
        onSuspend?: ReactEventHandler<T> | undefined;
        onSuspendCapture?: ReactEventHandler<T> | undefined;
        onTimeUpdate?: ReactEventHandler<T> | undefined;
        onTimeUpdateCapture?: ReactEventHandler<T> | undefined;
        onVolumeChange?: ReactEventHandler<T> | undefined;
        onVolumeChangeCapture?: ReactEventHandler<T> | undefined;
        onWaiting?: ReactEventHandler<T> | undefined;
        onWaitingCapture?: ReactEventHandler<T> | undefined;

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
        onSelect?: ReactEventHandler<T> | undefined;
        onSelectCapture?: ReactEventHandler<T> | undefined;

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
        onPointerLeave?: PointerEventHandler<T> | undefined;
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

        // Toggle Events
        onToggle?: ToggleEventHandler<T> | undefined;
        onBeforeToggle?: ToggleEventHandler<T> | undefined;

        // Transition Events
        onTransitionCancel?: TransitionEventHandler<T> | undefined;
        onTransitionCancelCapture?: TransitionEventHandler<T> | undefined;
        onTransitionEnd?: TransitionEventHandler<T> | undefined;
        onTransitionEndCapture?: TransitionEventHandler<T> | undefined;
        onTransitionRun?: TransitionEventHandler<T> | undefined;
        onTransitionRunCapture?: TransitionEventHandler<T> | undefined;
        onTransitionStart?: TransitionEventHandler<T> | undefined;
        onTransitionStartCapture?: TransitionEventHandler<T> | undefined;
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
    }

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    interface AriaAttributes {
        /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
        "aria-activedescendant"?: string | undefined;
        /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
        "aria-atomic"?: Booleanish | undefined;
        /**
         * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
         * presented if they are made.
         */
        "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
        /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
        /**
         * Defines a string value that labels the current element, which is intended to be converted into Braille.
         * @see aria-label.
         */
        "aria-braillelabel"?: string | undefined;
        /**
         * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
         * @see aria-roledescription.
         */
        "aria-brailleroledescription"?: string | undefined;
        "aria-busy"?: Booleanish | undefined;
        /**
         * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
         * @see aria-pressed @see aria-selected.
         */
        "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
        /**
         * Defines the total number of columns in a table, grid, or treegrid.
         * @see aria-colindex.
         */
        "aria-colcount"?: number | undefined;
        /**
         * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
         * @see aria-colcount @see aria-colspan.
         */
        "aria-colindex"?: number | undefined;
        /**
         * Defines a human readable text alternative of aria-colindex.
         * @see aria-rowindextext.
         */
        "aria-colindextext"?: string | undefined;
        /**
         * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-colindex @see aria-rowspan.
         */
        "aria-colspan"?: number | undefined;
        /**
         * Identifies the element (or elements) whose contents or presence are controlled by the current element.
         * @see aria-owns.
         */
        "aria-controls"?: string | undefined;
        /** Indicates the element that represents the current item within a container or set of related elements. */
        "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
        /**
         * Identifies the element (or elements) that describes the object.
         * @see aria-labelledby
         */
        "aria-describedby"?: string | undefined;
        /**
         * Defines a string value that describes or annotates the current element.
         * @see related aria-describedby.
         */
        "aria-description"?: string | undefined;
        /**
         * Identifies the element that provides a detailed, extended description for the object.
         * @see aria-describedby.
         */
        "aria-details"?: string | undefined;
        /**
         * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
         * @see aria-hidden @see aria-readonly.
         */
        "aria-disabled"?: Booleanish | undefined;
        /**
         * Indicates what functions can be performed when a dragged object is released on the drop target.
         * @deprecated in ARIA 1.1
         */
        "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
        /**
         * Identifies the element that provides an error message for the object.
         * @see aria-invalid @see aria-describedby.
         */
        "aria-errormessage"?: string | undefined;
        /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
        "aria-expanded"?: Booleanish | undefined;
        /**
         * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
         * allows assistive technology to override the general default of reading in document source order.
         */
        "aria-flowto"?: string | undefined;
        /**
         * Indicates an element's "grabbed" state in a drag-and-drop operation.
         * @deprecated in ARIA 1.1
         */
        "aria-grabbed"?: Booleanish | undefined;
        /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
        "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
        /**
         * Indicates whether the element is exposed to an accessibility API.
         * @see aria-disabled.
         */
        "aria-hidden"?: Booleanish | undefined;
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @see aria-errormessage.
         */
        "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
        /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
        "aria-keyshortcuts"?: string | undefined;
        /**
         * Defines a string value that labels the current element.
         * @see aria-labelledby.
         */
        "aria-label"?: string | undefined;
        /**
         * Identifies the element (or elements) that labels the current element.
         * @see aria-describedby.
         */
        "aria-labelledby"?: string | undefined;
        /** Defines the hierarchical level of an element within a structure. */
        "aria-level"?: number | undefined;
        /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
        "aria-live"?: "off" | "assertive" | "polite" | undefined;
        /** Indicates whether an element is modal when displayed. */
        "aria-modal"?: Booleanish | undefined;
        /** Indicates whether a text box accepts multiple lines of input or only a single line. */
        "aria-multiline"?: Booleanish | undefined;
        /** Indicates that the user may select more than one item from the current selectable descendants. */
        "aria-multiselectable"?: Booleanish | undefined;
        /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
        "aria-orientation"?: "horizontal" | "vertical" | undefined;
        /**
         * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
         * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
         * @see aria-controls.
         */
        "aria-owns"?: string | undefined;
        /**
         * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
         * A hint could be a sample value or a brief description of the expected format.
         */
        "aria-placeholder"?: string | undefined;
        /**
         * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-setsize.
         */
        "aria-posinset"?: number | undefined;
        /**
         * Indicates the current "pressed" state of toggle buttons.
         * @see aria-checked @see aria-selected.
         */
        "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
        /**
         * Indicates that the element is not editable, but is otherwise operable.
         * @see aria-disabled.
         */
        "aria-readonly"?: Booleanish | undefined;
        /**
         * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
         * @see aria-atomic.
         */
        "aria-relevant"?:
            | "additions"
            | "additions removals"
            | "additions text"
            | "all"
            | "removals"
            | "removals additions"
            | "removals text"
            | "text"
            | "text additions"
            | "text removals"
            | undefined;
        /** Indicates that user input is required on the element before a form may be submitted. */
        "aria-required"?: Booleanish | undefined;
        /** Defines a human-readable, author-localized description for the role of an element. */
        "aria-roledescription"?: string | undefined;
        /**
         * Defines the total number of rows in a table, grid, or treegrid.
         * @see aria-rowindex.
         */
        "aria-rowcount"?: number | undefined;
        /**
         * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
         * @see aria-rowcount @see aria-rowspan.
         */
        "aria-rowindex"?: number | undefined;
        /**
         * Defines a human readable text alternative of aria-rowindex.
         * @see aria-colindextext.
         */
        "aria-rowindextext"?: string | undefined;
        /**
         * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-rowindex @see aria-colspan.
         */
        "aria-rowspan"?: number | undefined;
        /**
         * Indicates the current "selected" state of various widgets.
         * @see aria-checked @see aria-pressed.
         */
        "aria-selected"?: Booleanish | undefined;
        /**
         * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-posinset.
         */
        "aria-setsize"?: number | undefined;
        /** Indicates if items in a table or grid are sorted in ascending or descending order. */
        "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
        /** Defines the maximum allowed value for a range widget. */
        "aria-valuemax"?: number | undefined;
        /** Defines the minimum allowed value for a range widget. */
        "aria-valuemin"?: number | undefined;
        /**
         * Defines the current value for a range widget.
         * @see aria-valuetext.
         */
        "aria-valuenow"?: number | undefined;
        /** Defines the human readable text alternative of aria-valuenow for a range widget. */
        "aria-valuetext"?: string | undefined;
    }

    // All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
    type AriaRole =
        | "alert"
        | "alertdialog"
        | "application"
        | "article"
        | "banner"
        | "button"
        | "cell"
        | "checkbox"
        | "columnheader"
        | "combobox"
        | "complementary"
        | "contentinfo"
        | "definition"
        | "dialog"
        | "directory"
        | "document"
        | "feed"
        | "figure"
        | "form"
        | "grid"
        | "gridcell"
        | "group"
        | "heading"
        | "img"
        | "link"
        | "list"
        | "listbox"
        | "listitem"
        | "log"
        | "main"
        | "marquee"
        | "math"
        | "menu"
        | "menubar"
        | "menuitem"
        | "menuitemcheckbox"
        | "menuitemradio"
        | "navigation"
        | "none"
        | "note"
        | "option"
        | "presentation"
        | "progressbar"
        | "radio"
        | "radiogroup"
        | "region"
        | "row"
        | "rowgroup"
        | "rowheader"
        | "scrollbar"
        | "search"
        | "searchbox"
        | "separator"
        | "slider"
        | "spinbutton"
        | "status"
        | "switch"
        | "tab"
        | "table"
        | "tablist"
        | "tabpanel"
        | "term"
        | "textbox"
        | "timer"
        | "toolbar"
        | "tooltip"
        | "tree"
        | "treegrid"
        | "treeitem"
        | (string & {});

    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;

        // Standard HTML Attributes
        accessKey?: string | undefined;
        autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {});
        autoFocus?: boolean | undefined;
        className?: string | undefined;
        contentEditable?: Booleanish | "inherit" | "plaintext-only" | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: Booleanish | undefined;
        enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        nonce?: string | undefined;
        slot?: string | undefined;
        spellCheck?: Booleanish | undefined;
        style?: CSSProperties | undefined;
        tabIndex?: number | undefined;
        title?: string | undefined;
        translate?: "yes" | "no" | undefined;

        // Unknown
        radioGroup?: string | undefined; // <command>, <menuitem>

        // WAI-ARIA
        role?: AriaRole | undefined;

        // RDFa Attributes
        about?: string | undefined;
        content?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        rel?: string | undefined;
        resource?: string | undefined;
        rev?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;

        // Non-standard Attributes
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
        unselectable?: "on" | "off" | undefined;

        // Popover API
        popover?: "" | "auto" | "manual" | undefined;
        popoverTargetAction?: "toggle" | "show" | "hide" | undefined;
        popoverTarget?: string | undefined;

        // Living Standard
        /**
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert
         */
        inert?: boolean | undefined;
        /**
         * Hints at the type of data that might be entered by the user while editing the element or its contents
         * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}
         */
        inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
        /**
         * Specify that a standard HTML element should behave like a defined custom built-in element
         * @see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}
         */
        is?: string | undefined;
    }

    /**
     * For internal usage only.
     * Different release channels declare additional types of ReactNode this particular release channel accepts.
     * App or library types should never augment this interface.
     */
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS {}

    interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
        // Standard HTML Attributes
        accept?: string | undefined;
        acceptCharset?: string | undefined;
        action?:
            | string
            | undefined
            | ((formData: FormData) => void | Promise<void>)
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        alt?: string | undefined;
        as?: string | undefined;
        async?: boolean | undefined;
        autoComplete?: string | undefined;
        autoPlay?: boolean | undefined;
        capture?: boolean | "user" | "environment" | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        charSet?: string | undefined;
        challenge?: string | undefined;
        checked?: boolean | undefined;
        cite?: string | undefined;
        classID?: string | undefined;
        cols?: number | undefined;
        colSpan?: number | undefined;
        controls?: boolean | undefined;
        coords?: string | undefined;
        crossOrigin?: CrossOrigin;
        data?: string | undefined;
        dateTime?: string | undefined;
        default?: boolean | undefined;
        defer?: boolean | undefined;
        disabled?: boolean | undefined;
        download?: any;
        encType?: string | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | undefined
            | ((formData: FormData) => void | Promise<void>)
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
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
        noValidate?: boolean | undefined;
        open?: boolean | undefined;
        optimum?: number | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        preload?: string | undefined;
        readOnly?: boolean | undefined;
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
        value?: string | readonly string[] | number | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
        wrap?: string | undefined;
    }

    type HTMLAttributeReferrerPolicy =
        | ""
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";

    type HTMLAttributeAnchorTarget =
        | "_self"
        | "_blank"
        | "_parent"
        | "_top"
        | (string & {});

    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        ping?: string | undefined;
        target?: HTMLAttributeAnchorTarget | undefined;
        type?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    }

    interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

    interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        coords?: string | undefined;
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
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
        disabled?: boolean | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | ((formData: FormData) => void | Promise<void>)
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ]
            | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        name?: string | undefined;
        type?: "submit" | "reset" | "button" | undefined;
        value?: string | readonly string[] | number | undefined;
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

    interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | readonly string[] | number | undefined;
    }

    interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean | undefined;
        name?: string | undefined;
    }

    interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
        onCancel?: ReactEventHandler<T> | undefined;
        onClose?: ReactEventHandler<T> | undefined;
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
        action?:
            | string
            | undefined
            | ((formData: FormData) => void | Promise<void>)
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
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
        /** @deprecated */
        frameBorder?: number | string | undefined;
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        /** @deprecated */
        marginHeight?: number | undefined;
        /** @deprecated */
        marginWidth?: number | undefined;
        name?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sandbox?: string | undefined;
        /** @deprecated */
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        width?: number | string | undefined;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        crossOrigin?: CrossOrigin;
        decoding?: "async" | "auto" | "sync" | undefined;
        fetchPriority?: "high" | "low" | "auto";
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
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

    type HTMLInputTypeAttribute =
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week"
        | (string & {});

    type AutoFillAddressKind = "billing" | "shipping";
    type AutoFillBase = "" | "off" | "on";
    type AutoFillContactField =
        | "email"
        | "tel"
        | "tel-area-code"
        | "tel-country-code"
        | "tel-extension"
        | "tel-local"
        | "tel-local-prefix"
        | "tel-local-suffix"
        | "tel-national";
    type AutoFillContactKind = "home" | "mobile" | "work";
    type AutoFillCredentialField = "webauthn";
    type AutoFillNormalField =
        | "additional-name"
        | "address-level1"
        | "address-level2"
        | "address-level3"
        | "address-level4"
        | "address-line1"
        | "address-line2"
        | "address-line3"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "cc-csc"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-family-name"
        | "cc-given-name"
        | "cc-name"
        | "cc-number"
        | "cc-type"
        | "country"
        | "country-name"
        | "current-password"
        | "family-name"
        | "given-name"
        | "honorific-prefix"
        | "honorific-suffix"
        | "name"
        | "new-password"
        | "one-time-code"
        | "organization"
        | "postal-code"
        | "street-address"
        | "transaction-amount"
        | "transaction-currency"
        | "username";
    type OptionalPrefixToken<T extends string> = `${T} ` | "";
    type OptionalPostfixToken<T extends string> = ` ${T}` | "";
    type AutoFillField = AutoFillNormalField | `${OptionalPrefixToken<AutoFillContactKind>}${AutoFillContactField}`;
    type AutoFillSection = `section-${string}`;
    type AutoFill =
        | AutoFillBase
        | `${OptionalPrefixToken<AutoFillSection>}${OptionalPrefixToken<
            AutoFillAddressKind
        >}${AutoFillField}${OptionalPostfixToken<AutoFillCredentialField>}`;
    type HTMLInputAutoCompleteAttribute = AutoFill | (string & {});

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        accept?: string | undefined;
        alt?: string | undefined;
        autoComplete?: HTMLInputAutoCompleteAttribute | undefined;
        capture?: boolean | "user" | "environment" | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | ((formData: FormData) => void | Promise<void>)
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ]
            | undefined;
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
        type?: HTMLInputTypeAttribute | undefined;
        value?: string | readonly string[] | number | undefined;
        width?: number | string | undefined;

        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
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
        value?: string | readonly string[] | number | undefined;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
        as?: string | undefined;
        crossOrigin?: CrossOrigin;
        fetchPriority?: "high" | "low" | "auto";
        href?: string | undefined;
        hrefLang?: string | undefined;
        integrity?: string | undefined;
        media?: string | undefined;
        imageSrcSet?: string | undefined;
        imageSizes?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sizes?: string | undefined;
        type?: string | undefined;
        charSet?: string | undefined;

        // React props
        precedence?: string | undefined;
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
        crossOrigin?: CrossOrigin;
        loop?: boolean | undefined;
        mediaGroup?: string | undefined;
        muted?: boolean | undefined;
        playsInline?: boolean | undefined;
        preload?: string | undefined;
        src?: string | undefined;
    }

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
        charSet?: string | undefined;
        content?: string | undefined;
        httpEquiv?: string | undefined;
        media?: string | undefined;
        name?: string | undefined;
    }

    interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        high?: number | undefined;
        low?: number | undefined;
        max?: number | string | undefined;
        min?: number | string | undefined;
        optimum?: number | undefined;
        value?: string | readonly string[] | number | undefined;
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
        type?: "1" | "a" | "A" | "i" | "I" | undefined;
    }

    interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
    }

    interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
        selected?: boolean | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
        name?: string | undefined;
    }

    interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
        max?: number | string | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
        async?: boolean | undefined;
        /** @deprecated */
        charSet?: string | undefined;
        crossOrigin?: CrossOrigin;
        defer?: boolean | undefined;
        integrity?: string | undefined;
        noModule?: boolean | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        src?: string | undefined;
        type?: string | undefined;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        required?: boolean | undefined;
        size?: number | undefined;
        value?: string | readonly string[] | number | undefined;
        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        media?: string | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string | undefined;
        scoped?: boolean | undefined;
        type?: string | undefined;

        // React props
        href?: string | undefined;
        precedence?: string | undefined;
    }

    interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | undefined;
        bgcolor?: string | undefined;
        border?: number | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        frame?: boolean | undefined;
        rules?: "none" | "groups" | "rows" | "columns" | "all" | undefined;
        summary?: string | undefined;
        width?: number | string | undefined;
    }

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
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
        value?: string | readonly string[] | number | undefined;
        wrap?: string | undefined;

        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
        height?: number | string | undefined;
        width?: number | string | undefined;
        valign?: "top" | "middle" | "bottom" | "baseline" | undefined;
    }

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
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
        disablePictureInPicture?: boolean | undefined;
        disableRemotePlayback?: boolean | undefined;
    }

    // this list is "complete" in that it contains every SVG attribute
    // that React supports, but the types can be improved.
    // Full list here: https://facebook.github.io/react/docs/dom-elements.html
    //
    // The three broad type categories are (in order of restrictiveness):
    //   - "number | string"
    //   - "string"
    //   - union of string literals
    interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        suppressHydrationWarning?: boolean | undefined;

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
        role?: AriaRole | undefined;
        tabIndex?: number | undefined;
        crossOrigin?: CrossOrigin;

        // SVG Specific attributes
        accentHeight?: number | string | undefined;
        accumulate?: "none" | "sum" | undefined;
        additive?: "replace" | "sum" | undefined;
        alignmentBaseline?:
            | "auto"
            | "baseline"
            | "before-edge"
            | "text-before-edge"
            | "middle"
            | "central"
            | "after-edge"
            | "text-after-edge"
            | "ideographic"
            | "alphabetic"
            | "hanging"
            | "mathematical"
            | "inherit"
            | undefined;
        allowReorder?: "no" | "yes" | undefined;
        alphabetic?: number | string | undefined;
        amplitude?: number | string | undefined;
        arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
        ascent?: number | string | undefined;
        attributeName?: string | undefined;
        attributeType?: string | undefined;
        autoReverse?: Booleanish | undefined;
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
        colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
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
        externalResourcesRequired?: Booleanish | undefined;
        fill?: string | undefined;
        fillOpacity?: number | string | undefined;
        fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
        filter?: string | undefined;
        filterRes?: number | string | undefined;
        filterUnits?: number | string | undefined;
        floodColor?: number | string | undefined;
        floodOpacity?: number | string | undefined;
        focusable?: Booleanish | "auto" | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | string | undefined;
        fontSizeAdjust?: number | string | undefined;
        fontStretch?: number | string | undefined;
        fontStyle?: number | string | undefined;
        fontVariant?: number | string | undefined;
        fontWeight?: number | string | undefined;
        format?: number | string | undefined;
        fr?: number | string | undefined;
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
        path?: string | undefined;
        pathLength?: number | string | undefined;
        patternContentUnits?: string | undefined;
        patternTransform?: number | string | undefined;
        patternUnits?: string | undefined;
        pointerEvents?: number | string | undefined;
        points?: string | undefined;
        pointsAtX?: number | string | undefined;
        pointsAtY?: number | string | undefined;
        pointsAtZ?: number | string | undefined;
        preserveAlpha?: Booleanish | undefined;
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
        strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
        strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
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

    // TODO: Move to react-dom
    type HTMLElementType =
        | "a"
        | "abbr"
        | "address"
        | "area"
        | "article"
        | "aside"
        | "audio"
        | "b"
        | "base"
        | "bdi"
        | "bdo"
        | "big"
        | "blockquote"
        | "body"
        | "br"
        | "button"
        | "canvas"
        | "caption"
        | "center"
        | "cite"
        | "code"
        | "col"
        | "colgroup"
        | "data"
        | "datalist"
        | "dd"
        | "del"
        | "details"
        | "dfn"
        | "dialog"
        | "div"
        | "dl"
        | "dt"
        | "em"
        | "embed"
        | "fieldset"
        | "figcaption"
        | "figure"
        | "footer"
        | "form"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "head"
        | "header"
        | "hgroup"
        | "hr"
        | "html"
        | "i"
        | "iframe"
        | "img"
        | "input"
        | "ins"
        | "kbd"
        | "keygen"
        | "label"
        | "legend"
        | "li"
        | "link"
        | "main"
        | "map"
        | "mark"
        | "menu"
        | "menuitem"
        | "meta"
        | "meter"
        | "nav"
        | "noscript"
        | "object"
        | "ol"
        | "optgroup"
        | "option"
        | "output"
        | "p"
        | "param"
        | "picture"
        | "pre"
        | "progress"
        | "q"
        | "rp"
        | "rt"
        | "ruby"
        | "s"
        | "samp"
        | "search"
        | "slot"
        | "script"
        | "section"
        | "select"
        | "small"
        | "source"
        | "span"
        | "strong"
        | "style"
        | "sub"
        | "summary"
        | "sup"
        | "table"
        | "template"
        | "tbody"
        | "td"
        | "textarea"
        | "tfoot"
        | "th"
        | "thead"
        | "time"
        | "title"
        | "tr"
        | "track"
        | "u"
        | "ul"
        | "var"
        | "video"
        | "wbr"
        | "webview";

    // TODO: Move to react-dom
    type SVGElementType =
        | "animate"
        | "circle"
        | "clipPath"
        | "defs"
        | "desc"
        | "ellipse"
        | "feBlend"
        | "feColorMatrix"
        | "feComponentTransfer"
        | "feComposite"
        | "feConvolveMatrix"
        | "feDiffuseLighting"
        | "feDisplacementMap"
        | "feDistantLight"
        | "feDropShadow"
        | "feFlood"
        | "feFuncA"
        | "feFuncB"
        | "feFuncG"
        | "feFuncR"
        | "feGaussianBlur"
        | "feImage"
        | "feMerge"
        | "feMergeNode"
        | "feMorphology"
        | "feOffset"
        | "fePointLight"
        | "feSpecularLighting"
        | "feSpotLight"
        | "feTile"
        | "feTurbulence"
        | "filter"
        | "foreignObject"
        | "g"
        | "image"
        | "line"
        | "linearGradient"
        | "marker"
        | "mask"
        | "metadata"
        | "path"
        | "pattern"
        | "polygon"
        | "polyline"
        | "radialGradient"
        | "rect"
        | "stop"
        | "svg"
        | "switch"
        | "symbol"
        | "text"
        | "textPath"
        | "tspan"
        | "use"
        | "view";

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
        componentStack?: string | null;
        digest?: string | null;
    }

    // Keep in sync with JSX namespace in ./jsx-runtime.d.ts and ./jsx-dev-runtime.d.ts
    namespace JSX {
        // We don't just alias React.ElementType because React.ElementType
        // historically does more than we need it to.
        // E.g. it also contains .propTypes and so TS also verifies the declared
        // props type does match the declared .propTypes.
        // But if libraries declared their .propTypes but not props type,
        // or they mismatch, you won't be able to use the class component
        // as a JSX.ElementType.
        // We could fix this everywhere but we're ultimately not interested in
        // .propTypes assignability so we might as well drop it entirely here to
        //  reduce the work of the type-checker.
        // TODO: Check impact of making React.ElementType<P = any> = React.JSXElementConstructor<P>
        type ElementType = string | React.JSXElementConstructor<any>;
        interface Element extends React.ReactElement<any, any> {}
        interface ElementClass extends React.Component<any> {
            render(): React.ReactNode;
        }
        interface ElementAttributesProperty {
            props: {};
        }
        interface ElementChildrenAttribute {
            children: {};
        }

        // We can't recurse forever because `type` can't be self-referential;
        // let's assume it's reasonable to do a single React.lazy() around a single React.memo() / vice-versa
        type LibraryManagedAttributes<C, P> = C extends
            React.MemoExoticComponent<infer T> | React.LazyExoticComponent<infer T>
            ? T extends React.MemoExoticComponent<infer U> | React.LazyExoticComponent<infer U>
                ? ReactManagedAttributes<U, P>
            : ReactManagedAttributes<T, P>
            : ReactManagedAttributes<C, P>;

        interface IntrinsicAttributes extends React.Attributes {}
        interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}

        interface IntrinsicElements {
            // HTML
            a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            big: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            colgroup: React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
            datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
            details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
            dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            dialog: React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            fieldset: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            hgroup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            keygen: React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
            label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
            menuitem: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
            nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            noindex: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            optgroup: React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
            p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            progress: React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            search: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            slot: React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
            script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            template: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
            tbody: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            tfoot: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            thead: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
            title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            "var": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            webview: React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;

            // SVG
            svg: React.SVGProps<SVGSVGElement>;

            animate: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
            animateMotion: React.SVGProps<SVGElement>;
            animateTransform: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
            circle: React.SVGProps<SVGCircleElement>;
            clipPath: React.SVGProps<SVGClipPathElement>;
            defs: React.SVGProps<SVGDefsElement>;
            desc: React.SVGProps<SVGDescElement>;
            ellipse: React.SVGProps<SVGEllipseElement>;
            feBlend: React.SVGProps<SVGFEBlendElement>;
            feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
            feComposite: React.SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
            feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
            feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
            feFlood: React.SVGProps<SVGFEFloodElement>;
            feFuncA: React.SVGProps<SVGFEFuncAElement>;
            feFuncB: React.SVGProps<SVGFEFuncBElement>;
            feFuncG: React.SVGProps<SVGFEFuncGElement>;
            feFuncR: React.SVGProps<SVGFEFuncRElement>;
            feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
            feImage: React.SVGProps<SVGFEImageElement>;
            feMerge: React.SVGProps<SVGFEMergeElement>;
            feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
            feMorphology: React.SVGProps<SVGFEMorphologyElement>;
            feOffset: React.SVGProps<SVGFEOffsetElement>;
            fePointLight: React.SVGProps<SVGFEPointLightElement>;
            feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
            feSpotLight: React.SVGProps<SVGFESpotLightElement>;
            feTile: React.SVGProps<SVGFETileElement>;
            feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
            filter: React.SVGProps<SVGFilterElement>;
            foreignObject: React.SVGProps<SVGForeignObjectElement>;
            g: React.SVGProps<SVGGElement>;
            image: React.SVGProps<SVGImageElement>;
            line: React.SVGLineElementAttributes<SVGLineElement>;
            linearGradient: React.SVGProps<SVGLinearGradientElement>;
            marker: React.SVGProps<SVGMarkerElement>;
            mask: React.SVGProps<SVGMaskElement>;
            metadata: React.SVGProps<SVGMetadataElement>;
            mpath: React.SVGProps<SVGElement>;
            path: React.SVGProps<SVGPathElement>;
            pattern: React.SVGProps<SVGPatternElement>;
            polygon: React.SVGProps<SVGPolygonElement>;
            polyline: React.SVGProps<SVGPolylineElement>;
            radialGradient: React.SVGProps<SVGRadialGradientElement>;
            rect: React.SVGProps<SVGRectElement>;
            set: React.SVGProps<SVGSetElement>;
            stop: React.SVGProps<SVGStopElement>;
            switch: React.SVGProps<SVGSwitchElement>;
            symbol: React.SVGProps<SVGSymbolElement>;
            text: React.SVGTextElementAttributes<SVGTextElement>;
            textPath: React.SVGProps<SVGTextPathElement>;
            tspan: React.SVGProps<SVGTSpanElement>;
            use: React.SVGProps<SVGUseElement>;
            view: React.SVGProps<SVGViewElement>;
        }
    }
}

type InexactPartial<T> = { [K in keyof T]?: T[K] | undefined };

// Any prop that has a default prop becomes optional, but its type is unchanged
// Undeclared default props are augmented into the resulting allowable attributes
// If declared props have indexed properties, ignore default props entirely as keyof gets widened
// Wrap in an outer-level conditional type to allow distribution over props that are unions
type Defaultize<P, D> = P extends any ? string extends keyof P ? P
    :
        & Pick<P, Exclude<keyof P, keyof D>>
        & InexactPartial<Pick<P, Extract<keyof P, keyof D>>>
        & InexactPartial<Pick<D, Exclude<keyof D, keyof P>>>
    : never;

type ReactManagedAttributes<C, P> = C extends { defaultProps: infer D } ? Defaultize<P, D>
    : P;
