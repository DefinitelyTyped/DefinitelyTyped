declare const Alpine: Alpine.Alpine;

declare namespace Alpine {
    interface Alpine {
        /**
         * Wraps an object in a reactive proxy that can track access
         * Returns the same Proxy object given the same input
         *
         * @param obj an object to be wrapped
         * @returns a reactive proxy
         */
        readonly reactive: <T>(obj: T) => T;
        /**
         * Releases an effect from reactive to dependency changes
         *
         * @param {ReactiveEffect} effect returned from {@link Alpine.effect}
         */
        readonly release: (effect: Alpine.ReactiveEffect) => void;
        /**
         * Creates a reactive effect from the passed in callback
         * Effects tracks access of reactive proxies and re-evaluates when dependencies change
         *
         * @param fn callback to be executed when dependencies change
         * @returns {ReactiveEffect} an effect object
         */
        readonly effect: <T>(fn: () => T) => Alpine.ReactiveEffect<T>;
        /**
         * Returns the raw value of a reactive proxy that will not track access
         * This would be the original object that was wrapped
         *
         * @param obj reactive proxy
         * @returns raw object
         */
        readonly raw: <T>(obj: T) => T;
        version: string;
        /**
         * Handles all deferred mutation entries
         * Resumes immediate handling of mutations
         */
        flushAndStopDeferringMutations(): void;
        /**
         * Prevents `evaluate` from automatically calling functions
         * returned by the expression
         *
         * @param callback
         */
        dontAutoEvaluateFunctions(callback: () => void): void;
        /**
         * Disables the scheduling of triggered Effects
         * @param callback
         */
        disableEffectScheduling(callback: () => void): void;
        /**
         * Starts observing the Alpine component tree for mutations
         * Used internally in {@link Alpine.start}
         */
        startObservingMutations(): void;
        /**
         * Stops observing the Alpine component tree for mutations
         * Used internally to control handling of cloned templates
         */
        stopObservingMutations(): void;
        /**
         * Sets the reactivity engine for Alpine
         * @param engine
         * @default @vue/reactivity
         */
        setReactivityEngine: <E>(engine: {
            reactive: <T>(obj: T) => T;
            release: (effect: E) => void;
            effect: (fn: () => any) => E;
            raw: <T>(obj: T) => T;
        }) => void;
        /**
         * Registers a listener for when a specific attribute is removed from an element
         * @param el
         * @param name
         * @param callback
         */
        onAttributeRemoved(el: Alpine.ElementWithXAttributes, name: string, callback: () => void): void;
        /**
         * Registers a listener for when any attribute is added to any element
         * @param callback
         * @returns
         */
        onAttributesAdded(callback: Alpine.AttrMutationCallback): void;
        /**
         * Retrieves the list of Contexts that build the Alpine Context for the element
         * from most local to least
         * @param node
         */
        closestDataStack: (node: Alpine.ElementWithXAttributes) => Array<Record<string | symbol, unknown>>;
        /**
         * Returns a conditional function that will not execute
         * during the cloning of an element
         * @param callback will run when not cloning
         * @param fallback will run when cloning (optional)
         * @returns wrapped function
         */
        skipDuringClone<T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, fallback?: T): T;
        /**
         * Returns a conditional function that will only execute
         * during the cloning of an element
         * @param callback will run when cloning
         * @returns wrapped function
         */
        onlyDuringClone(callback: Alpine.DirectiveCallback): Alpine.DirectiveCallback;
        /**
         * Adds a root selector from which Alpine builds an Alpine Tree
         * @param selectorCallback
         */
        addRootSelector(selectorCallback: () => string): void;
        /**
         * Adds an init selector where Alpine will evaluate the element without a context
         * @param selectorCallback
         */
        addInitSelector(selectorCallback: () => string): void;
        /**
         * Registers a callback to pre-process elements being cloned
         * @param callback
         */
        interceptClone(
            callback: (from: Alpine.ElementWithXAttributes, to: Alpine.ElementWithXAttributes) => void,
        ): void;
        /**
         * Adds an Record to the Element's data stack
         * It does not make the object reactive if it isn't already
         * @param node
         * @param data
         * @param referenceNode
         * @returns function for removing the scope
         */
        addScopeToNode: (
            node: Element,
            data: Record<string, unknown>,
            referenceNode?: Alpine.ElementWithXAttributes,
        ) => () => void;
        /**
         * Begins deferring mutation handling to allow for a set of changes to be made
         * call `flushAndStopDeferringMutations` to resume handling
         */
        deferMutations(): void;
        /**
         * Registers a callback to preprocess attributes/directives before they are evaluated
         * Allows transforming custom syntaxes into known directives
         *
         * @param callback
         */
        mapAttributes: (
            callback: (attribute: { name: string; value: string | (() => unknown) }) => {
                name: string;
                value: string | (() => unknown);
            },
        ) => void;
        /**
         * Provides a function that can be called to evaluate an expression
         * in the context of the specified element
         */
        evaluateLater: <T_1>(
            el: Element,
            expression?: string | (() => T_1),
        ) => (
            callback?: (value: T_1) => void,
            extras?: {
                scope?: object;
                params?: unknown[];
            },
        ) => void;
        /**
         * Registers a callback to preprocess elements before they are initialized
         * Call the `skip` function to prevent the element from being initialized
         * @param callback
         */
        interceptInit(callback: Alpine.WalkerCallback): void;
        /**
         * Registers an evaluator to be used
         * Used internally by Alpine CSP to use a CSP safe evaluator
         * @param newEvaluator
         */
        setEvaluator: (
            newEvaluator: <T_2>(
                el: Alpine.ElementWithXAttributes,
                expression?: string | (() => T_2),
            ) => (
                callback: (value: T_2) => void,
                extras?: {
                    scope?: object;
                    params?: unknown[];
                },
            ) => void,
        ) => void;
        /**
         * "Flattens" an array of objects into a single Proxy object
         * @param {Array} objects
         * @returns flattened object
         */
        mergeProxies: (objects: Array<Record<string, unknown>>) => Record<string, unknown>;
        /**
         * Gets the value of a property from an element
         * Checks Alpine bindings first, and then falls back to the DOM
         * @param el to check
         * @param name of attribute
         * @param fallback value if not present
         * @param extract whether to indicate that the value is being extracted
         * @returns
         */
        extractProp: <T_3 extends string | boolean>(
            el: Alpine.ElementWithXAttributes,
            name: string,
            fallback: T_3 | (() => T_3),
            extract?: boolean,
        ) => unknown;
        /**
         * Finds closest Node that satisfies the provided test function
         * @param {Node} el
         * @param callback
         * @returns {Node}
         */
        findClosest(el: Element, callback: (el: Alpine.ElementWithXAttributes) => boolean): Element;
        /**
         * Registers a callback to run when any element is removed from the DOM
         * @param callback to run when an element is removed removed
         */
        onElRemoved(callback: (node: Alpine.ElementWithXAttributes) => void): void;
        /**
         * Registers a callback to run when the element is removed from the DOM
         * @param el to watch for
         * @param callback to run when removed
         */
        onElRemoved(el: Alpine.ElementWithXAttributes, callback: () => void): void;

        /**
         * Finds the closest root element for the provided element
         * A root element is an element that matches root selectors
         * @param el
         * @param includeInitSelectors
         * @returns {HTMLElement | undefined} the root if found
         */
        closestRoot: (
            el: Alpine.ElementWithXAttributes,
            includeInitSelectors?: boolean,
        ) => Alpine.ElementWithXAttributes | undefined;
        /**
         * Recursively destroys all bindings on a tree of elements
         * Used to cleanup removed elements or disable Alpine
         * @param root
         */
        destroyTree(root: Alpine.ElementWithXAttributes): void;
        /**
         * Helper function for building data interceptor objects
         * @internal
         * @param callback to run on Interception
         * @param mutator to further mutate the Interceptor
         * @returns Interceptor Function
         */
        interceptor: Alpine.interceptor;
        /**
         * Runs a series of transitions on an element
         * @internal
         * @param el to apply transitions to
         * @param setFunction that applies the state
         * @param states Object with keys for start, during, and end
         * @param before callback to run before transitions
         * @param after callback to run after transitions
         */
        transition(
            el: Alpine.ElementWithXAttributes,
            setFunction:
                | ((
                    el: Alpine.ElementWithXAttributes,
                    value:
                        | string
                        | boolean
                        | Record<string, boolean>
                        | (() => string | boolean | Record<string, boolean>),
                ) => () => void)
                | ((el: Alpine.ElementWithXAttributes, value: string | Partial<CSSStyleDeclaration>) => () => void),
            states: Partial<{
                start: string | Partial<CSSStyleDeclaration>;
                during: string | Partial<CSSStyleDeclaration>;
                end: string | Partial<CSSStyleDeclaration>;
            }>,
            before?: () => void,
            after?: () => void,
        ): void;
        /**
         * Sets styles to an element, from a string or object
         * Provides a function to undo the changes
         * @param el
         * @param {string | CSSStyleDeclaration} styles
         * @returns undo function
         */
        setStyles(el: Alpine.ElementWithXAttributes, styles: string | Partial<CSSStyleDeclaration>): () => void;
        /**
         * Runs an operation without having Alpine react to changes in the DOM caused by the function
         * Useful for making a set of changes to the DOM and manually handling initialization
         * @param callback that mutates the DOM
         */
        mutateDom<T_5>(callback: () => T_5): T_5;
        /**
         * Registers a new directive that can be used in markup (ex. `x-directive`)
         * @param name of directive (without the `x-` prefix)
         * @param callback to handle the directive
         */
        directive(
            name: string,
            callback: Alpine.DirectiveCallback,
        ): {
            before(directive: string): void;
        };
        /**
         * Entangles two values, through getter/setter pairs.
         * When one value changes, the other is updated.
         * On entanglement, the outer is pushed onto the inner
         *
         * @param outer getter and setter pair
         * @param inner getter and setter pair
         */
        entangle<T_6>(outer: Alpine.GetterSetter<T_6>, inner: Alpine.GetterSetter<T_6>): () => void;
        /**
         * Provides a throttled version of the passed in function.
         * Throttled Function can be called multiple times
         * and only executes once per specified limit.
         *
         * @param func to apply throttle to
         * @param limit time in ms
         * @returns throttled function
         */
        throttle<T_7 extends (...args: Parameters<T_7>) => void>(
            func: T_7,
            limit?: number,
        ): (...args: Parameters<T_7>) => void;
        /**
         * Provides a debounced version of the passed in function.
         * Can be called multiple times and only executes
         * only after specified delay since last call
         *
         * @param func to apply debounce to
         * @param wait time in ms
         * @returns debounced function
         */
        debounce<T_8 extends (...args: Parameters<T_8>) => void>(func: T_8, wait?: number): T_8;
        /**
         * Evaluates a string expression within the Alpine context of a particular Node
         *
         * @param el element in Alpine Context
         * @param expression function or string expression
         * @param extras additional values to expose to the expression
         * @returns whatever the expression returns
         */
        evaluate<T_9>(el: Node, expression: string | (() => T_9), extras?: {}): T_9;
        /**
         * Initializes the Alpine tree rooted at a particular element
         * Used internally in {@link Alpine.start} and to initialize cloned templates
         * @param el to initialize as the root
         * @param walker callback to assist in walking the tree
         * @param intercept initialization of elements
         */
        initTree(
            el: Alpine.ElementWithXAttributes,
            walker?: (el: Alpine.ElementWithXAttributes, callback: Alpine.WalkerCallback) => any,
            intercept?: Alpine.WalkerCallback,
        ): void;
        /**
         * Waits until after a frame is painted to continue execution
         * @param callback to run at the start of the next frame
         * @returns Promise that resolves on the next frame
         */
        nextTick(callback?: () => void): Promise<unknown>;
        /**
         * Applies the current Alpine Prefix to a string
         * Default prefix is `x-`
         *
         * @param subject to prefix
         * @returns prefixed subject
         */
        prefixed(subject?: string): string;
        /**
         * Changes the prefix Alpine uses to identify directives
         * Commonly, `data-x` is used to make the directives in spec
         * @param newPrefix to use
         */
        prefix(newPrefix: string): void;
        /**
         * Registers Plugins onto Alpine
         */
        plugin(callbacks: Alpine.PluginCallback | Alpine.PluginCallback[]): void;
        /**
         * Registers a magic accessible at $name in Alpine contexts
         * @param name name of Magic
         * @param callback Method that builds the magic's value
         */
        magic(
            name: string,
            callback: (el: Alpine.ElementWithXAttributes, options: Alpine.MagicUtilities) => unknown,
        ): void;
        /**
         * Registers a global reactive store to a name
         * Store is made Reactive if not already
         *
         * @param name of store
         * @param value to store
         */
        store<T extends keyof Alpine.Stores>(name: T, value: Alpine.Stores[T]): void;
        /**
         * Accesses a global reactive store by name
         * Used to access and modify stores from outside of Alpine components
         */
        store<T extends keyof Alpine.Stores>(name: T): Alpine.Stores[T];
        /**
         * Starts Alpine on the current document
         */
        start(): void;
        /**
         * Clones the Alpine context of an element to another element
         * @internal
         * @deprecated use {@link Alpine.cloneNode} instead
         * @param oldEl element to clone from
         * @param newEl element to clone to
         * @returns
         */
        clone(oldEl: Alpine.ElementWithXAttributes, newEl: Alpine.ElementWithXAttributes): void;
        /**
         * Clones the Alpine context of an element to another element
         * @internal
         * @param from element to clone from
         * @param to element to clone to
         */
        cloneNode(from: Alpine.ElementWithXAttributes, to: Alpine.ElementWithXAttributes): void;
        /**
         * Gets current binding or value of a prop from an element
         * Similar to `extractProp` but does not access inline bindings
         * @param el to check
         * @param name of attribute
         * @param fallback value if not present
         * @returns value of attribute
         */
        bound(el: Alpine.ElementWithXAttributes, name: string, fallback?: unknown): unknown;
        /**
         * Gets the data context of a particular Node
         * This is a "flattened" object of all the scopes that element is within
         * @param node Element inside an Alpine Component
         * @returns Object
         */
        $data(node: Alpine.ElementWithXAttributes): {};
        /**
         * Walks the DOM tree from the provided root element
         * Runs the callback on each element
         * @param el to start walking from
         * @param callback to run on found elements
         */
        walk(el: Alpine.ElementWithXAttributes, callback: Alpine.WalkerCallback): any;
        /**
         * Registers a component constructor a name referenceable inside `x-data` expressions
         *
         * @param name Component name
         * @param callback Data context constructor function
         */
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        data<T extends { [key in keyof T]: T[key] }, A extends unknown[]>(
            name: string,
            callback: (...args: A) => Alpine.AlpineComponent<T>, // Needed generic to properly autotype objects
        ): void;

        /**
         * Binds directives and attributes to an element
         * @param element to bind
         * @param bindings to apply to the element
         * @returns cleanup function
         */
        bind<T extends Alpine.Bindings<T>>(element: HTMLElement, bindings: T | (() => T)): () => void;
        /**
         * Registers a named binding group to be exposed to `x-bind` directive expressions
         * @param name of binding group
         * @param bindings to apply to an element that uses the group
         * @returns cleanup function
         */
        bind<T extends Alpine.Bindings<T>>(name: string, bindings: T | ((...args: any[]) => T)): () => void;
    }
    type ElementWithXAttributes<T extends Element = HTMLElement> = withXAttributes<T>;

    type withXAttributes<T extends Element> = T & Partial<XAttributes>;

    interface XAttributes {
        _x_virtualDirectives: Bindings<{}>;
        _x_ids: Record<string, number>;
        _x_effects: Set<() => void>;
        _x_runEffects: () => void;
        _x_dataStack: Array<Record<string, unknown>>;
        _x_ignore: true;
        _x_ignoreSelf: true;
        _x_isShown: boolean;
        _x_bindings: Record<string, unknown>;
        _x_undoAddedClasses: () => void;
        _x_undoAddedStyles: () => void;
        _x_cleanups: MutationCallback[];
        _x_attributeCleanups: Record<string, Array<() => void>>;
        _x_ignoreMutationObserver: boolean;
        _x_teleportBack: ElementWithXAttributes;
        _x_refs_proxy: Record<string, unknown>;
        _x_refs: unknown;
        _x_keyExpression: string;
        _x_prevKeys: string[];
        _x_forScope: Record<string, unknown>;
        _x_lookup: Record<string, ElementWithXAttributes>;
        _x_currentIfEl: ElementWithXAttributes;
        _x_undoIf: () => void;
        _x_removeModelListeners: Record<string, () => void>;
        _x_model: GetterSetter<unknown>;
        _x_forceModelUpdate: (value: unknown) => void;
        _x_forwardEvents: string[];
        _x_doHide: () => void;
        _x_doShow: () => void;
        _x_toggleAndCascadeWithTransitions: (
            el: ElementWithXAttributes,
            val: boolean,
            show: () => void,
            hide: () => void,
        ) => void;
        _x_teleport: ElementWithXAttributes;
        _x_transition: Transitions;
        _x_hidePromise: Promise<() => void>;
        _x_transitioning: {
            beforeCancel: (fn: () => void) => void;
            beforeCancels: Array<() => void>;
            cancel: () => void;
            finish: () => void;
        };
        _x_hideChildren: ElementWithXAttributes[];
        _x_inlineBindings: Record<string, Binding>;
    }

    type Transitions = {
        enter: TransitionStages;
        leave: TransitionStages;
    } & TransitionFromObject;
    type TransitionStages = Partial<{
        start: string | TransitionFromHelpers;
        during: string | TransitionFromHelpers;
        end: string | TransitionFromHelpers;
    }>;
    type TransitionFromHelpers = Partial<CSSStyleDeclaration>;
    interface TransitionFromObject {
        in: (before: () => void, after?: () => void) => void;
        out: (before: () => void, after?: () => void) => void;
    }

    interface Binding {
        expression: string;
        extract: boolean;
    }

    type Bindings<T> = {
        [key in keyof T]: key extends `${"x-on:" | "@"}${infer K extends keyof HTMLElementEventMap}`
            ? string | ((e: HTMLElementEventMap[K]) => void)
            : string | ((...args: any[]) => void);
    };

    type AttrMutationCallback = (
        el: ElementWithXAttributes,
        attrs: Array<{
            name: string;
            value: string;
        }>,
    ) => void;

    interface DirectiveData {
        type: string;
        value: string;
        modifiers: string[];
        expression: string;
        original: string;
    }

    type InterceptorCallback<T> = (initial: T, get: () => T, set: (val: T) => void, path: string, key: string) => T;

    interface InterceptorObject<T> {
        initialValue: T;
        _x_interceptor: true;
        initialize: (data: Record<string, unknown>, path: string, key: string) => T;
    }

    /**
     * Infers the type of the interceptor object if it is an interceptor
     * Otherwise, it returns the original type
     * Limits the depth to 3 to improve performance and avoid failures on complex types
     */
    type InferInterceptor<T, D extends 3 | 2 | 1 = 1> = T extends InterceptorObject<infer U> ? U
        : keyof T extends never ? T
        : D extends 3 ? T
        : {
            [K in keyof T]: InferInterceptor<T[K], D extends 1 ? 2 : D extends 2 ? 3 : D>;
        };

    type InferInterceptors<T> = {
        [K in keyof T]: InferInterceptor<T[K]>;
    };

    type interceptor = <T>(
        callback: InterceptorCallback<T>,
        mutateObj?: (obj: InterceptorObject<T>) => void,
    ) => (initialValue: T) => InterceptorObject<T>;

    interface DirectiveUtilities {
        Alpine: Alpine;
        effect: <T>(callback: () => T) => ReactiveEffect<T>;
        cleanup: (callback: () => void) => void;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        evaluateLater: <T>(expression: string) => (callback?: (value: T) => void, extras?: {}) => void;
        evaluate: <T>(expression: string | (() => T), extras?: Record<string, unknown>, _?: boolean) => T;
    }
    type MagicUtilities = DirectiveUtilities & {
        interceptor: interceptor;
    };

    interface DirectiveCallback {
        (el: ElementWithXAttributes, directive: DirectiveData, utilities: DirectiveUtilities): void;
        inline?: (el: ElementWithXAttributes, directive: DirectiveData, utilities: DirectiveUtilities) => void;
    }

    type WalkerCallback = (el: ElementWithXAttributes, skip: () => void) => void;

    type AlpineComponent<T> = T & XDataContext & ThisType<InferInterceptors<T> & XDataContext & Magics<T>>;

    interface XDataContext {
        /**
         * Will be executed immediately upon Alpine initializing the component.
         * This will run before `x-init` directives on even the root element.
         * Interceptors ($persist, etc) will be initialized before this.
         */
        init?(): void;
        /**
         * Will be executed upon destruction/unmount of the component tree.
         * This will run intermingled with other cleanup operations.
         */
        destroy?(): void;
    }

    interface Stores {
        [key: string | symbol]: unknown;
    }

    interface Magics<T> {
        /**
         * Provides access to the element's current Alpine scope
         * This is a flattened Proxy object over the datastack
         * Use to avoid errors from accessing undefined properties
         */
        $data: InferInterceptors<T>;
        /**
         * Dispatches a CustomEvent on the current DOM node.
         * Event automatically bubbles up the DOM tree.
         *
         * @param event the event name
         * @param detail an event-dependent value associated with the event
         */
        $dispatch: (event: string, detail?: any) => void;
        /**
         * The current HTMLElement that triggered this expression.
         */
        $el: HTMLElement;
        /**
         * Generate a unique ID within the current `x-id` scope.
         * Name is required to allow reuse in related contexts.
         *
         * @param name the name of the id
         * @param key suffix on the end of the generated ID, usually helpful for the purpose of identifying id in a loop
         */
        $id: (name: string, key?: number | string | null) => string;
        /**
         * Triggers callback at the beginning of the next event loop.
         * Use to evaluate AFTER Alpine has made reactive DOM updates.
         *
         * @param callback a callback that will be fired on next tick
         */
        $nextTick: (callback?: () => void) => Promise<void>;
        /**
         * Record of DOM elements marked with `x-ref` inside the component.
         */
        $refs: Record<string, HTMLElement>;
        /**
         * The root element of the current component context.
         * Roots are typically defined by `x-data` directive.
         */
        $root: ElementWithXAttributes;
        /**
         * Record of global reactive Alpine stores.
         */
        $store: Stores;
        /**
         * Evaluate the given callback when the property is changed.
         * Deeply watches for changes on object and array types.
         * Property can be a dot notated nested property.
         *
         * @param property the component property
         * @param callback a callback that will fire when a given property is changed
         */
        $watch: <K extends keyof T | string, V extends K extends keyof T ? T[K] : any>(
            property: K,
            callback: (newValue: V, oldValue: V) => void,
        ) => void;
    }

    type PluginCallback = (Alpine: Alpine) => void;

    interface ReactiveEffect<T = any> {
        (): T;
        id: number;
        active: boolean;
        raw: () => T;
    }

    interface GetterSetter<T> {
        get(): T;
        set(value: T): void;
    }
}

export = Alpine;
