// Type definitions for jsPlumb 1.3.16 jQuery adapter.
// Project: http://jsplumb.org
// Definitions by: Steve Shearn <https://github.com/shearnie/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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
	ConnectionsDetachable?: boolean;
	ReattachConnections?: boolean;
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
	detachable?: boolean;
	deleteEndpointsOnDetach?: boolean;
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
	isTarget?: boolean;
	maxConnections?: number;
	uniqueEndpoint?: boolean;
	deleteEndpointsOnDetach?: boolean;
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
