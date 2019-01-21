// Type definitions for single-spa-react 2.8
// Project: https://github.com/CanopyTax/single-spa-react
// Definitions by: Garrett Smith <https://github.com/Garrett-Smith-iq>
//                 Chris Dopuch <https://github.com/chrisdopuch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import * as ReactDOM from "react-dom";

export = SingleSpaReact;
declare function SingleSpaReact<T = React.ComponentClass>(
    opts: SingleSpaReact.Options<T>
): SingleSpaReact.Lifecycles;

declare namespace SingleSpaReact {
    interface Options<T> {
        React: typeof React;
        ReactDOM: typeof ReactDOM;
        rootComponent?: T;
        loadRootComponent?: () => Promise<React.ComponentClass>;
        domElementGetter?: () => Element;
        suppressComponentDidCatchWarning?: boolean;
        parcelCanUpdate?: boolean;
    }

    interface Lifecycles {
        bootstrap: (props: any) => Promise<void>;
        mount: (props: any) => Promise<void>;
        unmount: (props: any) => Promise<void>;
    }
}
