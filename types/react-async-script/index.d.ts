// Type definitions for react-async-script 1.2
// Project: https://github.com/dozoisch/react-async-script
// Definitions by: Michalis Zachariadis <https://github.com/mzachariadis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import hoistNonReactStatics = require('hoist-non-react-statics');

interface Options {
    attributes?: { [key: string]: string };
    callbackName?: string;
    globalName?: string;
    removeOnUnmount?: boolean;
    scriptId?: string;
}

/**
 * The Higher order Component function
 *
 * @param url
 * @param options
 */
declare function makeAsyncScript(
    url: string,
    options?: Options,
): <P>(
    Component: React.ComponentType<P>,
) => React.ComponentType<
    P &
        hoistNonReactStatics.NonReactStatics<React.ComponentType<any>> & {
            asyncScriptOnLoad?: () => void;
        }
>;

export = makeAsyncScript;
