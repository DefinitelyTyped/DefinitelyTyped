import type { ComponentType, JSX, PropsWithChildren } from "react";

export interface ServerSideRenderProps {
    /** The identifier of the block to be serverside rendered. */
    block: string;
    /** The block attributes to be sent to the server for rendering. */
    attributes?: Record<string, unknown> | null;
    /** Additional classes to apply to the wrapper element. */
    className?: string;
    /** The HTTP method to use (‘GET’ or ‘POST’). Default is ‘GET’ */
    httpMethod?: "GET" | "POST";
    /**  Additional query arguments to append to the request URL. */
    urlQueryArgs?: Record<string, string | number | boolean | undefined>;
    /** Whether to remove block support attributes before sending. */
    skipBlockSupportAttributes?: boolean;
    /** Component rendered when the API response is empty. */
    EmptyResponsePlaceholder?: ComponentType<ServerSideRenderProps>;
    /** Component rendered when the API response is an error. */
    ErrorResponsePlaceholder?: ComponentType<ServerSideRenderProps & { message: string }>;
    /** Component rendered while the API request is loading. */
    LoadingResponsePlaceholder?: ComponentType<PropsWithChildren<ServerSideRenderProps>>;
}

/** A component that renders server-side content for blocks. */
export function ServerSideRender(props: ServerSideRenderProps): JSX.Element;

/**
 * @deprecated Use `ServerSideRender` non-default export instead:
 * ```js
 * import { ServerSideRender } from '@wordpress/server-side-render';
 * ```
 */
declare const ServerSideRenderDefault: typeof ServerSideRender;
export default ServerSideRenderDefault;

export type UseServerSideRenderArgs = Pick<
    ServerSideRenderProps,
    "block" | "attributes" | "httpMethod" | "urlQueryArgs" | "skipBlockSupportAttributes"
>;

export type ServerSideRenderStatus = "idle" | "loading" | "success" | "error";

export interface ServerSideRenderResponse {
    /** The current request status: 'idle', 'loading', 'success', or 'error'. */
    status: ServerSideRenderStatus;
    /** The rendered block content (available when status is 'success'). */
    content?: string;
    /** The error message (available when status is 'error'). */
    error?: string;
}

/**
 * A hook for server-side rendering a preview of dynamic blocks to display in the editor.
 *
 * Handles fetching server-rendered previews for blocks, managing loading states,
 * and automatically debouncing requests to prevent excessive API calls. It supports both
 * GET and POST requests, with POST requests used for larger attribute payloads.
 *
 * @example
 * Basic usage:
 *
 * ```jsx
 * import { RawHTML } from '@wordpress/element';
 * import { useServerSideRender } from '@wordpress/server-side-render';
 *
 * function MyServerSideRender( { attributes, block } ) {
 *   const { content, status, error } = useServerSideRender( {
 *     attributes,
 *     block,
 *   } );
 *
 *   if ( status === 'loading' ) {
 *     return <div>Loading...</div>;
 *   }
 *
 *   if ( status === 'error' ) {
 *     return <div>Error: { error }</div>;
 *   }
 *
 *   return <RawHTML>{ content }</RawHTML>;
 * }
 * ```
 */
export function useServerSideRender(args: UseServerSideRenderArgs): ServerSideRenderResponse;
