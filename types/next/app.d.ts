import * as React from "react";
import { NextContext, NextComponentType } from ".";
import { RouterProps, DefaultQuery } from "./router";

// Deprecated
export type AppComponentProps = AppProps;
export type AppComponentContext = NextAppContext;
// End Deprecated

/**
 * Context passed to App.getInitialProps.
 * Component is dynamic - cannot infer type.
 *
 * @template Q Query object schema.
 */
export interface NextAppContext<
    Q extends DefaultQuery = DefaultQuery,
    CustomReq = {}
> {
    Component: NextComponentType<any, any, NextContext<Q, CustomReq>>;
    router: RouterProps<Q>;
    ctx: NextContext<Q, CustomReq>;
}

/**
 * Initial Props returned from base App class.
 * https://github.com/zeit/next.js/blob/7.0.0/lib/app.js#L16
 */
export interface DefaultAppIProps {
    pageProps: any;
}

/**
 * Props passed to the App component.
 * Component and pageProps are dynamic - cannot infer type.
 *
 * @template Q Query object schema.
 */
export interface AppProps<
    Q extends DefaultQuery = DefaultQuery,
    CustomReq = {}
> {
    Component: NextComponentType<any, any, NextContext<Q, CustomReq>>;
    router: RouterProps<Q>;
}

/**
 * App component type. Differs from the default type because the context it passes
 * to getInitialProps and the props is passes to the component are different.
 *
 * @template P Component props.
 * @template IP Initial props returned from getInitialProps.
 * @template C Context passed to getInitialProps.
 */
export type AppComponentType<P = {}, IP = P, C = NextAppContext> = NextComponentType<
    P & AppProps,
    IP,
    C
>;

export class Container extends React.Component {}
export default class App<P = {}, S = {}> extends React.Component<P & DefaultAppIProps & AppProps, S> {
    static getInitialProps(context: NextAppContext): Promise<DefaultAppIProps>;
}
