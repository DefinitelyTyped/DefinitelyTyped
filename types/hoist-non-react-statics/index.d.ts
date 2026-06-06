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
        Source,
        C extends {
            [key: string]: true;
        } = {},
    > = {
        [
            key in Exclude<
                keyof Source,
                Source extends React.MemoExoticComponent<any> ? keyof MEMO_STATICS | keyof C
                    : Source extends React.ForwardRefExoticComponent<any> ? keyof FORWARD_REF_STATICS | keyof C
                    : keyof REACT_STATICS | keyof KNOWN_STATICS | keyof C
            >
        ]: Source[key];
    };
}

declare function hoistNonReactStatics<
    Target,
    Source,
    CustomStatic extends {
        [key: string]: true;
    } = {},
>(
    TargetComponent: Target,
    SourceComponent: Source,
    customStatic?: CustomStatic,
): Target & hoistNonReactStatics.NonReactStatics<Source, CustomStatic>;

export = hoistNonReactStatics;
