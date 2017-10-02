// Type definitions for Mithril 1.1
// Project: https://mithril.js.org/
// Definitions by: Mike Linkovich <https://github.com/spacejack>, Isiah Meadows <https://github.com/isiahmeadows>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// Global Mithril types

/// <reference types="mithril" />

import * as mithril from 'mithril';
import * as stream from 'mithril/stream';

declare namespace MithrilGlobal {
	export type Lifecycle<A,S> = mithril.Lifecycle<A,S>;
	export type Hyperscript = mithril.Hyperscript;
	export type RouteResolver<S,P> = mithril.RouteResolver<S,P>;
	export type RouteDefs = mithril.RouteDefs;
	export type RouteOptions = mithril.RouteOptions;
	export type Route = mithril.Route;
	export type RequestOptions<T> = mithril.RequestOptions<T>;
	export type JsonpOptions = mithril.JsonpOptions;
	export type Child = mithril.Child;
	export type ChildArray = mithril.ChildArray;
	export type Children = mithril.Children;
	export type ChildArrayOrPrimitive = mithril.ChildArrayOrPrimitive;
	export type Vnode<A,S> = mithril.Vnode<A,S>;
	export type VnodeDOM<A,S> = mithril.VnodeDOM<A,S>;
	export type CVnode<A> = mithril.CVnode<A>;
	export type CVnodeDOM<A> = mithril.CVnodeDOM<A>;
	export type Component<A,S> = mithril.Component<A,S>;
	export type Comp<A,S> = mithril.Comp<A,S>
	export type ClassComponent<A> = mithril.ClassComponent<A>;
	export type FactoryComponent<A> = mithril.FactoryComponent<A>;
	export type ComponentTypes<A,S> = mithril.ComponentTypes<A,S>;
	export type Attributes = mithril.Attributes;
	export type Stream<T> = stream.Stream<T>;
	export type Static = mithril.Static & {stream: stream.Static};
}

declare const MithrilGlobal: MithrilGlobal.Static;
export = MithrilGlobal;
export as namespace m;
