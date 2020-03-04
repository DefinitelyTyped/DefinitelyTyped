// Type definitions for react-d3-graph 2.3
// Project: https://github.com/danielcaldas/react-d3-graph#readme
// Definitions by: Harry Goode <https://github.com/hrngoode>
//                 Adina Todoran <https://github.com/adina-todoran>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component } from "react";

export class Graph extends Component<any, any> {
    constructor(props: any, ...args: any[]);

    UNSAFE_componentWillReceiveProps(nextProps: any): any;

    componentDidMount(): void;

    componentDidUpdate(): void;

    componentWillUnmount(): void;

    render(): any;
}

export class Link extends Component<any, any> {
    constructor(...args: any[]);

    render(): any;
}

export class Node extends Component<any, any> {
    constructor(...args: any[]);

    render(): any;
}
