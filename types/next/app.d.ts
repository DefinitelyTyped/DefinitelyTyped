import * as React from "react";
import { NextContext } from ".";
import { RouterProps } from "./router";

export interface AppComponentProps {
    Component: React.ComponentType<any>;
    router: RouterProps;
    pageProps: any;
}

export interface AppComponentContext {
    Component: React.ComponentType<any>;
    router: RouterProps;
    ctx: NextContext;
}

export class Container extends React.Component {}

export default class App<TProps = {}> extends React.Component<TProps & AppComponentProps> {}
