import * as React from "react";
import { NextContext } from ".";
import { RouterProps, DefaultQuery } from "./router";

export interface AppComponentProps<Q = DefaultQuery> {
    Component: React.ComponentType<any>;
    router: RouterProps<Q>;
    pageProps: any;
}

export interface AppComponentContext<Q = DefaultQuery> {
    Component: React.ComponentType<any>;
    router: RouterProps<Q>;
    ctx: NextContext<Q>;
}

export class Container extends React.Component { }

export default class App<TProps = {}, Q = DefaultQuery> extends React.Component<TProps & AppComponentProps<Q>> { }
