// Type definitions for single-spa-react 3.0.1
// Project: https://github.com/CanopyTax/single-spa-react, https://github.com/joeldenning/single-spa-react
// Definitions by: Garrett Smith <https://github.com/Garrett-Smith-iq>
//                 Chris Dopuch <https://github.com/chrisdopuch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import * as ReactDOM from "react-dom";

export = SingleSpaReact;
declare function SingleSpaReact(
    opts: SingleSpaReact.Options
): SingleSpaReact.Lifecycles;

declare namespace SingleSpaReact {
    interface Options {
        React: typeof React;
        ReactDOM: typeof ReactDOM;
        rootComponent?: React.ComponentClass<any, any>;
        loadRootComponent?: () => Promise<React.ComponentClass<any, any>>;
        errorBoundary?: (err: any, info: any, props: any) => React.ReactElement;
        domElementGetter?: () => Element;
        suppressComponentDidCatchWarning?: boolean;
        parcelCanUpdate?: boolean;
        renderType?: 'render' | 'hydrate' | 'createRoot' | 'createBlockingRoot';
    }

    interface Lifecycles {
        bootstrap: (props: any) => Promise<void>;
        mount: (props: any) => Promise<void>;
        unmount: (props: any) => Promise<void>;
    }
}
