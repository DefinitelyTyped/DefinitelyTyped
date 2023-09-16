import * as React from "react";
/**
 * Context which holds the values for the current navigation tree.
 * Intended for use in SSR. This is not safe to use on the client.
 */
declare const CurrentRenderContext: React.Context<
    {
        // tslint:disable-next-line no-redundant-undefined
        options?: object | undefined;
    } | undefined
>;
export default CurrentRenderContext;
