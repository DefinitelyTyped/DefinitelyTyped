import * as React from "react";
import { NextContext } from ".";

export interface DocumentProps {
    __NEXT_DATA__?: any;
    dev?: boolean;
    chunks?: string[];
    head?: Array<React.ReactElement<any>>;
    styles?: Array<React.ReactElement<any>>;
    [key: string]: any;
}

/**
 * Context object used inside `Document`
 */
export interface NextDocumentContext extends NextContext {
    /** A callback that executes the actual React rendering logic (synchronously) */
    renderPage(
        cb?: (enhancer: () => JSX.Element) => React.ComponentType<any>
    ): {
        [key: string]: any
    };
}

export class Head extends React.Component<any> {}
export class Main extends React.Component {}
export class NextScript extends React.Component {}
export default class extends React.Component<DocumentProps> {}
