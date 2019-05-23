// Type definitions for hookrouter 2.2
// Project: https://github.com/Paratron/hookrouter
// Definitions by: Mete Can Eris <https://github.com/mcaneris>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4
import * as React from 'react';
export namespace HookRouter {
	type InterceptedPath = string | null;
	interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { href: string; }
	interface QueryParams { [key: string]: any; }
	interface RouteObject { [key: string]: (params: QueryParams) => any; }
}
export function setLinkProps(props: HookRouter.AProps): HookRouter.AProps;
export function A(props: HookRouter.AProps): React.ReactHTMLElement<HTMLAnchorElement>;
export function confirmNavigation(): void;
export function resetPath(): void;
export function stopInterception(): void;
export function useControlledInterceptor(): [
	HookRouter.InterceptedPath,
	typeof confirmNavigation,
	typeof resetPath,
	typeof stopInterception
];
export function interceptRoute(previousRoute: string, nextRoute: string): string[];
export function get(componentId: number): HookRouter.RouteObject | null;
export function remove(componentId: number): void;
export function useInterceptor(handlerFn: (...args: any[]) => any): () => typeof remove;
export function setQueryParams(inObj: HookRouter.QueryParams, replace?: boolean): void;
export function getQueryParams(): HookRouter.QueryParams;
export function queryStringToObject(inStr: string): HookRouter.QueryParams;
export function objectToQueryString(inObj: HookRouter.QueryParams): string;
export function useQueryParams(): [HookRouter.QueryParams, typeof setQueryParams];
export function useRedirect(
	fromURL: string,
	toURL: string,
	queryParams?: HookRouter.QueryParams | null,
	replace?: boolean
): void;
export function setBasepath(inBasepath: string): void;
export function getBasepath(): string;
export function resolvePath(inPath: string): string;
export function prepareRoute(inRoute: string): [RegExp, string[]];
export function navigate(
	url: string,
	replace?: boolean,
	queryParams?: HookRouter.QueryParams | null,
	replaceQueryParams?: boolean
): void;
export function setPath(inPath: string): void;
export function getPath(): string;
export function usePath(active?: boolean, withBasePath?: boolean): string;
export function updatePathHooks(): void;
export function getWorkingPath(parentRouterId: string): string;
export function useRoutes(routeObj: HookRouter.RouteObject): any;
export function useTitle(inString: string): void;
export function getTitle(): string;
