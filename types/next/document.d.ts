import * as React from "react";
import { NextContext, NextComponentType } from ".";
import { DefaultQuery } from "./router";

/**
 * Result from renderPage().
 * https://github.com/zeit/next.js/blob/v8.0.0/packages/next/pages/_document.js#L18
 * https://github.com/zeit/next.js/blob/v8.0.0/packages/next-server/server/render.tsx#L159
 * https://github.com/zeit/next.js/blob/v8.0.0/packages/next-server/server/render.tsx#L44
 */
export interface RenderPageResponse {
    html?: string;
    head?: React.ReactNode;
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
export interface NextDocumentContext<
    Q extends DefaultQuery = DefaultQuery,
    CustomReq = {}
> extends NextContext<Q, CustomReq> {
    /** A callback that executes the actual React rendering logic (synchronously) */
    renderPage<
        E extends PageProps = AnyPageProps,
        P = E,
        EA extends PageProps = AnyPageProps,
        PA = EA
    >(
        enhancer?:
            | Enhancer<E, P> // tslint:disable-line no-unnecessary-generics
            | { enhanceApp?: Enhancer<EA, PA>; enhanceComponent?: Enhancer<E, P> } // tslint:disable-line no-unnecessary-generics
    ): RenderPageResponse;
}

/**
 * Initial Props returned from base Document class.
 * https://github.com/zeit/next.js/blob/7.0.0/server/document.js#L16
 */
export interface DefaultDocumentIProps extends RenderPageResponse {
    styles?: React.ReactNode;
}

/**
 * Props passed to the Document component.
 * https://github.com/zeit/next.js/blob/7.0.0/server/render.js#L165
 */
export interface DocumentProps<Q extends DefaultQuery = DefaultQuery> {
    __NEXT_DATA__: {
        props: any;
        page: string;
        pathname: string;
        query: Q;
        buildId: string;
        assetPrefix?: string;
        runtimeConfig?: any;
        nextExport?: boolean;
        err?: any;
        [key: string]: any;
    };
    dev: boolean;
    dir?: string;
    staticMarkup: boolean;
    buildManifest: Record<string, any>;
    devFiles: string[];
    files: string[];
    dynamicImports: string[];
    assetPrefix: string;
}

/**
 * Props supported by the Head component.
 * https://github.com/zeit/next.js/blob/7.0.0/server/document.js#L42
 */
export interface HeadProps {
    nonce?: string;
    [key: string]: any;
}

/**
 * Props supported by the NextScript component.
 * https://github.com/zeit/next.js/blob/7.0.0/server/document.js#L141
 */
export interface NextScriptProps {
    nonce?: string;
    [key: string]: any;
}

/**
 * Document component type. Differs from the default type because the context it passes
 * to getInitialProps and the props is passes to the component are different.
 *
 * @template P Component props.
 * @template IP Initial props returned from getInitialProps.
 * @template C Context passed to getInitialProps.
 */
export type DocumentComponentType<P = {}, IP = P, C = NextDocumentContext> = NextComponentType<
    P & DocumentProps,
    IP,
    C
>;

export class Html extends React.Component<React.HTMLProps<HTMLHtmlElement>> {}
export class Head extends React.Component<HeadProps> {}
export class Main extends React.Component {}
export class NextScript extends React.Component<NextScriptProps> {}
export default class Document<P = {}> extends React.Component<
    P & DefaultDocumentIProps & DocumentProps
> {
    static getInitialProps(
        context: NextDocumentContext
    ): DefaultDocumentIProps | Promise<DefaultDocumentIProps>;
}
