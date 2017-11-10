// Type definitions for jsPlumb jQuery adapter 1.3
// Project: http://jsplumb.org
// Definitions by: Steve Shearn <https://github.com/shearnie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare var jsPlumb: jsPlumbInstance;

type ElementLocator = string | Element | any[];

interface jsPlumbInstance {
	setRenderMode(renderMode: string): string;
	bind(event: string, callback: (e: any) => void ): void;
	unbind(event?: string): void;
	ready(callback: () => void): void;
	importDefaults(defaults: Defaults): void;
	Defaults: Defaults;
	restoreDefaults(): void;
	addClass(el: ElementLocator, clazz: string): void;
	addEndpoint(el: ElementLocator, params?: EndpointOptions, referenceParams?: EndpointOptions): any;
	removeClass(el: ElementLocator, clazz: string): void;
	hasClass(el: ElementLocator, clazz: string): void;
    	draggable(el: ElementLocator, options?: DragOptions): jsPlumbInstance;
    	draggable(ids: string[], options?: DragOptions): jsPlumbInstance;
    	connect(connection: ConnectParams, referenceParams?: ConnectParams): Connection;
    	makeSource(el: string, options: SourceOptions): void;
    	makeTarget(el: string, options: TargetOptions): void;
    	repaintEverything(): void;
    	detachEveryConnection(): void;
	detachAllConnections(el: string): void;
    	removeAllEndpoints(el: ElementLocator, recurse?: boolean): jsPlumbInstance;
    	select(params: SelectParams): Connections;
    	getConnections(options?: any, flat?: any): any[];
    	deleteEndpoint(uuid: string, doNotRepaintAfterwards?: boolean): jsPlumbInstance;
    	deleteEndpoint(endpoint: Endpoint, doNotRepaintAfterwards?: boolean): jsPlumbInstance;
    	repaint(el: ElementLocator): jsPlumbInstance;
    	getInstance(): jsPlumbInstance;
	getInstance(defaults: Defaults): jsPlumbInstance;
	getInstanceIndex(): number;
	reset(): void;
	clear(): void;
	batch(fn: () => void, doNotRepaintAfterwards?: boolean): void;
	remove(el: ElementLocator): void;
	deleteConnection(connectionObject: Connection): void;
	removeAllEndpoints(): void;

    SVG: string;
    CANVAS: string;
    VML: string;
}

interface Defaults {
	Endpoint?: any[];
	PaintStyle?: PaintStyle;
	HoverPaintStyle?: PaintStyle;
	ConnectionsDetachable?: boolean;
	ReattachConnections?: boolean;
	ConnectionOverlays?: any[][];
    Container?: any; // string(selector or id) or element
    DragOptions?: DragOptions;
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
    source?: any; // string, element or endpoint
    target?: any; // string, element or endpoint
	detachable?: boolean;
	deleteEndpointsOnDetach?: boolean;
	endPoint?: string;
	anchor?: string;
	anchors?: any[];
	label?: string;
	uuids?: [string, string];
}

interface DragOptions {
	containment?: string;
    grid?: [number, number];
	handle?: string;
	filter?: string;
	filterExclude?: boolean;
	rightButtonCanDrag?: boolean;
	start?: (event: any) => void;
	stop?: (event: any) => void;
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

interface Connection {
    setDetachable(detachable: boolean): void;
    setParameter<T>(name: string, value: T): void;
    endpoints: Endpoint[];
}

type SVGPaintStyle = {[key: string]: string | number};

type OverlayOptions = [
	string, {[key: string]: any}
]

interface EndpointOptions {
	endpoint?: string;
	uuid?: string;
	paintStyle?: SVGPaintStyle;
	isSource?: boolean;
	isTarget?: boolean;
	maxConnections?: number;
	connector?: OverlayOptions;
	connectorStyle?: SVGPaintStyle;
	hoverPaintStyle?: SVGPaintStyle;
	connectorHoverStyle?: SVGPaintStyle;
	dragOptions?: DragOptions;
	dropOptions?: DropOptions;
	overlays?: OverlayOptions[];
	anchor?: string;
	enabled?: boolean;
}

interface Endpoint {
}
