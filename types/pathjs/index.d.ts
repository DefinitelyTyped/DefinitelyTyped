// Type definitions for Pathjs v0.8.4
// Project: https://github.com/mtrpcic/pathjs
// Definitions by: Lokesh Peta <https://github.com/lokeshpeta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface IDictionary<T> {
    [id: string]: T;
}

interface IPathHistory{
	initial: any;
	pushState(state: any, title: string, path: string):void;
	popState(event: any): void;	
	listen(fallback: any): void;
}

interface IPathRoute{
	to(fn: () => void): IPathRoute;
	enter(fns: Function|Function[]): IPathRoute;
	exit(fn: () => void): IPathRoute;
	partition(): string[];
	run():void;
}

interface IPathRoutes{
	current?: string,
    root?: string,
	rescue?: Function,
	previous?: string,
	defined: IDictionary<IPathRoute>
}

interface IPathCore{
	route: IPathRouteConstructor;
}

interface IPathRouteConstructor {
	new (path: string): IPathRoute;
}

interface IPath {
    map(path: string): IPathRoute;
	
	root(path: string): void;
	
	rescue(fn: Function): void;
	
	history: IPathHistory;
	
	match(path: string, parameterize: boolean): IPathRoute | null;
	
	dispatch(passed_route: string): void;
	
    listen(): void;
	
	core: IPathCore;
	
	routes: IPathRoutes
}

declare var Path: IPath;
