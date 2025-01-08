import { Component, ComponentClass, ComponentLifecycle, ReactNode } from "react";

declare namespace createReactClass {
    interface Mixin<P, S> extends ComponentLifecycle<P, S> {
        mixins?: Array<Mixin<P, S>> | undefined;
        statics?: {
            [key: string]: any;
        } | undefined;

        displayName?: string | undefined;
        /**
         * Ignored by React.
         * @deprecated Only kept in types for backwards compatibility. Will be removed in a futre major release.
         */
        propTypes?: any;

        getDefaultProps?(): P;
        getInitialState?(): S;
    }

    interface ComponentSpec<P, S> extends Mixin<P, S> {
        render(): ReactNode;

        [propertyName: string]: any;
    }
    interface ClassicComponent<P = {}, S = {}> extends Component<P, S> {
        replaceState(nextState: S, callback?: () => void): void;
        isMounted(): boolean;
        getInitialState?(): S;
    }

    interface ClassicComponentClass<P = {}> extends Omit<ComponentClass<P>, "new"> {
        new(props: P, context?: any): ClassicComponent<P, any>;
        getDefaultProps?(): P;
    }
}
declare function createReactClass<P, S = {}>(
    spec: createReactClass.ComponentSpec<P, S>,
): createReactClass.ClassicComponentClass<P>;

export as namespace createReactClass;
export = createReactClass;
