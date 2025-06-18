export interface ReactFundamentalComponentInstance<C, H> {
    currentFiber: {
        [key: string]: any;
    };
    instance: unknown;
    prevProps: null | {
        [key: string]: any;
    };
    props: {
        [key: string]: any;
    };
    impl: ReactFundamentalImpl<C, H>;
    state: {
        [key: string]: any;
    };
}

export interface ReactFundamentalImpl<C, H> {
    displayName: string;
    reconcileChildren: boolean;
    getInitialState?: (props: { [key: string]: any }) => {
        [key: string]: any;
    };
    getInstance: (
        context: C,
        props: {
            [key: string]: any;
        },
        state: {
            [key: string]: any;
        },
    ) => H;
    getServerSideString?: (
        context: C,
        props: {
            [key: string]: any;
        },
    ) => string;
    getServerSideStringClose?: (
        context: C,
        props: {
            [key: string]: any;
        },
    ) => string;
    onMount: (
        context: C,
        instance: unknown,
        props: {
            [key: string]: any;
        },
        state: {
            [key: string]: any;
        },
    ) => void;
    shouldUpdate?: (
        context: C,
        prevProps: null | {
            [key: string]: any;
        },
        nextProps: {
            [key: string]: any;
        },
        state: {
            [key: string]: any;
        },
    ) => boolean;
    onUpdate?: (
        context: C,
        instance: unknown,
        prevProps: null | {
            [key: string]: any;
        },
        nextProps: {
            [key: string]: any;
        },
        state: {
            [key: string]: any;
        },
    ) => void;
    onUnmount?: (
        context: C,
        instance: unknown,
        props: {
            [key: string]: any;
        },
        state: {
            [key: string]: any;
        },
    ) => void;
    onHydrate?: (
        context: C,
        props: {
            [key: string]: any;
        },
        state: {
            [key: string]: any;
        },
    ) => boolean;
    onFocus?: (
        context: C,
        props: {
            [key: string]: any;
        },
        state: {
            [key: string]: any;
        },
    ) => boolean;
}

export interface ReactFundamentalComponent<C, H> {
    $$typeof: symbol | number;
    impl: ReactFundamentalImpl<C, H>;
}

export interface ReactScope {
    $$typeof: symbol | number;
}
