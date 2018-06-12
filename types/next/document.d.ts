import * as React from "react";
import * as http from "http";

export interface Context {
    err?: Error;
    req: http.IncomingMessage;
    res: http.ServerResponse;
    pathname: string;
    query?: {
        [key: string]:
            | boolean
            | boolean[]
            | number
            | number[]
            | string
            | string[];
    };
    asPath: string;

    renderPage(
        enhancer?: (page: React.Component) => React.ComponentType<any>
    ): {
        html?: string;
        head: Array<React.ReactElement<any>>;
        errorHtml: string;
    };
}

export interface DocumentProps {
    __NEXT_DATA__?: any;
    dev?: boolean;
    chunks?: string[];
    html?: string;
    head?: Array<React.ReactElement<any>>;
    errorHtml?: string;
    styles?: Array<React.ReactElement<any>>;

    [key: string]: any;
}

export class Head extends React.Component<any> {}
export class Main extends React.Component {}
export class NextScript extends React.Component {}
export default class extends React.Component<DocumentProps> {
    static getInitialProps(ctx: Context): DocumentProps;
}
