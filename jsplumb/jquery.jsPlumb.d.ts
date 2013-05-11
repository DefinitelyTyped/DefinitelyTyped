// Type definitions for jsPlumb 1.3.16 jQuery adapter.
// Project: http://jsplumb.org
//          https://github.com/sporritt/jsplumb
//          https://code.google.com/p/jsplumb
//          
// Definitions by: Steve Shearn <https://github.com/shearnie/>

/// <reference path="../jquery/jquery.d.ts"/>

interface jsPlumb {
	setRenderMode(renderMode: string): string;
	bind(event: string, callback: (e) => void ): void;
	unbind(event?: string): void;
	ready(callback: () => void): void;
	importDefaults(defaults: Defaults): void;
	Defaults: Defaults;
	restoreDefaults(): void;
	addClass(el: any, clazz: string): void;
	addEndpoint(ep: string): any;
	removeClass(el: any, clazz: string): void;
	hasClass(el: any, clazz: string): void;
	draggable(el: any, container?: DragContainer): void;
	connect(connection: ConnectParams): void;
	makeSource(el: string, options: SourceOptions): void;
	makeTarget(el: string, options: TargetOptions): void;
	repaintEverything(): void;
	detachEveryConnection(): void;
	detachAllConnections(el: string): void;
	removeAllEndpoints(el: any): void;
	select(params: SelectParams): Connections;
	getConnections(options?: any, flat?: any): any[];
}

interface Defaults {
	Endpoint?: any[];
	PaintStyle?: PaintStyle;
	HoverPaintStyle?: PaintStyle;
	ConnectionsDetachable?: bool;
	ReattachConnections?: bool;
	ConnectionOverlays?: any[][];
}

interface PaintStyle {
	strokeStyle: string;
	lineWidth: number;
}

interface ArrowOverlay {
	location: number;
	id: string;
	length: number;
	foldback: number;
}

interface LabelOverlay {
	label: string;
	id: string;
	location: number;
}

interface Connections {
	detach(): void;
	length: number;
}

interface ConnectParams {
	source: string;
	target: string;
	detachable?: bool;
	deleteEndpointsOnDetach?: bool;
	endPoint?: string;
	anchor?: string;
	anchors?: any[];
	label?: string;
}

interface DragContainer {
	containment: string;
}

interface SourceOptions {
	parent: string;
	endpoint?: string;
	anchor?: string;
	connector?: any[];
	connectorStyle?: PaintStyle;
}

interface TargetOptions {
	isTarget?: bool;
	maxConnections?: number;
	uniqueEndpoint?: bool;
	deleteEndpointsOnDetach?: bool;
	endpoint?: string;
	dropOptions?: DropOptions;
	anchor?: any;
}

interface DropOptions {
	hoverClass: string;
}

interface SelectParams {
	scope?: string;
	source: string;
	target: string;
}