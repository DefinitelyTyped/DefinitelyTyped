import type { NavigationState, PartialState } from "../routers";
import type { PathConfigMap } from "./types";
// tslint:disable:interface-over-type-literal
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare type Options = {
    initialRouteName?: string | undefined;
    screens: PathConfigMap;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare type ResultState = PartialState<NavigationState> & {
    state?: ResultState | undefined;
};
/**
 * Utility to parse a path string to initial state object accepted by the container.
 * This is useful for deep linking when we need to handle the incoming URL.
 *
 * @example
 * ```js
 * getStateFromPath(
 *   '/chat/jane/42',
 *   {
 *     screens: {
 *       Chat: {
 *         path: 'chat/:author/:id',
 *         parse: { id: Number }
 *       }
 *     }
 *   }
 * )
 * ```
 * @param path Path string to parse and convert, e.g. /foo/bar?count=42.
 * @param options Extra options to fine-tune how to parse the path.
 */
export default function getStateFromPath(path: string, options?: Options): ResultState | undefined;
export {};
