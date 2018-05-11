import * as React from "react";
import { NextContext } from ".";

export interface AppComponentProps {
    Component: React.ComponentType<any>;
    pageProps: any;
}

export interface AppComponentContext {
    Component: any;
    router: any; // TODO: could be SingletonRouter?
    ctx: NextContext;
}

export class Container extends React.Component {}

export default class App<P = {}> extends React.Component<P & AppComponentProps> {}
