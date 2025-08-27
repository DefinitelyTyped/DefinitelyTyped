import * as React from "react";
import hoistNonReactStatics = require("hoist-non-react-statics");

interface Options {
    attributes?: { [key: string]: string } | undefined;
    callbackName?: string | undefined;
    globalName?: string | undefined;
    removeOnUnmount?: boolean | undefined;
    scriptId?: string | undefined;
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
    & P
    & hoistNonReactStatics.NonReactStatics<React.ComponentType<any>>
    & {
        asyncScriptOnLoad?: (() => void) | undefined;
    }
>;

export = makeAsyncScript;
