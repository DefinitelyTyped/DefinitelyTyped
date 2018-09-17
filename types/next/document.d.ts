import * as React from "react";

import { NextContext } from ".";

export interface RenderPageResponse {
    buildManifest: { [key: string]: any };
    chunks: {
        names: string[];
        filenames: string[];
    };
    html?: string;
    head: Array<React.ReactElement<any>>;
    errorHtml: string;
}

export interface PageProps {
    url: string;
}

export interface AnyPageProps extends PageProps {
    [key: string]: any;
}

export type Enhancer<E extends PageProps = AnyPageProps, P extends any = E> = (page: React.ComponentType<P>) => React.ComponentType<E>;

/**
 * Context object used inside `Document`
 */
export interface NextDocumentContext extends NextContext {
    /** A callback that executes the actual React rendering logic (synchronously) */
    renderPage<E extends PageProps = AnyPageProps, P extends any = E>(enhancer?: Enhancer<E, P>): RenderPageResponse; // tslint:disable-line:no-unnecessary-generics
}

export interface DocumentProps {
    __NEXT_DATA__?: any;
    dev?: boolean;
    chunks?: {
        names: string[];
        filenames: string[];
    };
    html?: string;
    head?: Array<React.ReactElement<any>>;
    errorHtml?: string;
    styles?: Array<React.ReactElement<any>>;
    [key: string]: any;
}

export interface HeadProps {
    nonce?: string;
    [key: string]: any;
}

export interface NextScriptProps {
    nonce?: string;
}

export class Head extends React.Component<HeadProps> {}
export class Main extends React.Component {}
export class NextScript extends React.Component<NextScriptProps> {}
export default class Document<TProps = {}> extends React.Component<TProps & DocumentProps> {
    static getInitialProps(ctx: NextDocumentContext): Promise<DocumentProps> | DocumentProps;
}
