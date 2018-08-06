// Type definitions for single-spa-react 2.8
// Project: https://github.com/CanopyTax/single-spa-react
// Definitions by: Garrett Smith <https://github.com/Garrett-Smith-iq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as ReactDOM from 'react-dom';

export = SingleSpaReact;
declare function SingleSpaReact(opts: SingleSpaReact.Options): SingleSpaReact.Lifecycles;

declare namespace SingleSpaReact {
	interface Options {
		React: typeof React;
		ReactDOM: typeof ReactDOM;
		rootComponent?: React.ComponentClass;
		loadRootComponent?: () => Promise<React.ComponentClass>;
		domElementGetter?: () => Element;
		suppressComponentDidCatchWarning?: boolean;
		parcelCanUpdate?: boolean;
	}

	interface Lifecycles {
		bootstrap: (opts: Options, props: any) => Promise<void>;
		mount: (opts: Options, props: any) => Promise<void>;
		unmount: (opts: Options, props: any) => Promise<void>;
	}
}
