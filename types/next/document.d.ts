import * as React from "react";
import { NextContext, NextComponentType } from ".";
import { DefaultQuery } from "./router";

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

export type Enhancer<E extends PageProps = AnyPageProps, P extends any = E> = (
    page: React.ComponentType<P>
) => React.ComponentType<E>;

/**
 * Context passed to Document.getInitialProps.
 *
 * @template Q Query object schema.
 */
export interface NextDocumentContext<Q = DefaultQuery> extends NextContext<Q> {
    /** A callback that executes the actual React rendering logic (synchronously) */
    renderPage<E extends PageProps = AnyPageProps, P extends any = E>(
        enhancer?: Enhancer<E, P> // tslint:disable-line no-unnecessary-generics
    ): RenderPageResponse;
}

/**
 * Props passed to the Document component.
 */
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

/**
 * Props supported by the Head component.
 */
export interface HeadProps {
    nonce?: string;
    [key: string]: any;
}

/**
 * Props supported by the NextScript component.
 */
export interface NextScriptProps {
    nonce?: string;
    [key: string]: any;
}

/**
 * Document component type. Differs from the default type because the context it passes
 * to getInitialProps and the props is passes to the component are different.
 *
 * @template IP Initial props returned from getInitialProps.
 * @template C Context passed to getInitialProps.
 */
export type DocumentComponentType<IP = {}, C = NextDocumentContext> = NextComponentType<
    IP & DocumentProps,
    IP,
    C
>;

export class Head extends React.Component<HeadProps> {}
export class Main extends React.Component {}
export class NextScript extends React.Component<NextScriptProps> {}
export default class Document<IP = {}, C = NextDocumentContext> extends React.Component<
    IP & DocumentProps
> {
    getInitialProps(context: C): Promise<IP> | IP;
}
