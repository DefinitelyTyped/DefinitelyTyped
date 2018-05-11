import * as React from "react";

export interface AppComponentProps {
    Component: React.ComponentType<any>;
    pageProps: any
}

export class Container extends React.Component {}

export default class App<P = {}> extends React.Component<P & AppComponentProps> {}
