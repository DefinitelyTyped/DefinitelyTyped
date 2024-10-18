import * as React from "react";

interface REACT_STATICS {
    childContextTypes: true;
    contextType: true;
    contextTypes: true;
    defaultProps: true;
    displayName: true;
    getDefaultProps: true;
    getDerivedStateFromError: true;
    getDerivedStateFromProps: true;
    mixins: true;
    propTypes: true;
    type: true;
}

interface KNOWN_STATICS {
    name: true;
    length: true;
    prototype: true;
    caller: true;
    callee: true;
    arguments: true;
    arity: true;
}

interface MEMO_STATICS {
    "$$typeof": true;
    compare: true;
    defaultProps: true;
    displayName: true;
    propTypes: true;
    type: true;
}

interface FORWARD_REF_STATICS {
    "$$typeof": true;
    render: true;
    defaultProps: true;
    displayName: true;
    propTypes: true;
}

declare namespace hoistNonReactStatics {
    type NonReactStatics<
        S extends React.ComponentType<any>,
        C extends {
            [key: string]: true;
        } = {},
    > = {
        [
            key in Exclude<
                keyof S,
                S extends React.MemoExoticComponent<any> ? keyof MEMO_STATICS | keyof C
                    : S extends React.ForwardRefExoticComponent<any> ? keyof FORWARD_REF_STATICS | keyof C
                    : keyof REACT_STATICS | keyof KNOWN_STATICS | keyof C
            >
        ]: S[key];
    };
}

declare function hoistNonReactStatics<
    T extends React.ComponentType<any>,
    S extends React.ComponentType<any>,
    C extends {
        [key: string]: true;
    } = {},
>(
    TargetComponent: T,
    SourceComponent: S,
    customStatic?: C,
): T & hoistNonReactStatics.NonReactStatics<S, C>;

export = hoistNonReactStatics;
