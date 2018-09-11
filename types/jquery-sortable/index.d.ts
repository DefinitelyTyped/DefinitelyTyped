// Type definitions for jQuery Sortable v0.9.12
// Project: http://johnny.github.io/jquery-sortable/
// Definitions by: Nathan Pitman <https://github.com/Seltzer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace JQuerySortable {

	interface Position {
		top: number;
		left: number;
	}

	type Dimensions = number[];

	interface ContainerGroup {
		$document: JQuery;
		containerDimensions: Dimensions[]
		containers: Container[];
		delayMet: boolean;
		dragInitDone: boolean;
		dragProxy: any;
		dragging: boolean;
		dropProxy: any;
		item: JQuery;
		itemContainer: Container;
		lastAppendedItem: JQuery;
		lastPointer: Position;
		lastRelativePointer: Position;
		offsetParent: JQuery;
		options: Options;
		placeholder: JQuery;
		pointer: Position;
		relativePointer: Position;
		sameResultBox: { bottom: number; left: number; right: number; top: number; };
		scrollProxy: any;
	}

	interface Container {
		el: JQuery;
		options: Options;
		group: ContainerGroup;
		rootGroup: ContainerGroup;
		handle: string;
		target: JQuery;
		itemDimensions: Dimensions[];
		items: HTMLElement[];
	}


	type GenericEventHandler = ($item?: JQuery, container?: Container, _super?: GenericEventHandler, event?: Event) => void;
	type OnDragEventHandler = ($item?: JQuery, position?: Position, _super?: OnDragEventHandler, event?: Event) => void;
	type OnMousedownHandler = ($item?: JQuery, _super?: OnMousedownHandler, event?: Event) => void;
	type OnCancelHandler = ($item?: JQuery, container?: Container, _super?: OnCancelHandler, event?: Event) => void;

	// Deliberately typing $children as an any here as it makes it much easier to use. Actual type is JQuery | any[]
	type SerializeFunc = ($parent: JQuery, $children: any, parentIsContainer: boolean) => void;

	interface GroupOptions {
		afterMove?: ($placeholder: JQuery, container: Container, $closestItemOrContainer: JQuery) => void;
		containerPath?: string;
		containerSelector?: string;
		distance?: number;
		delay?: number;
		handle?: string;
		itemPath?: string;
		itemSelector?: string;
		isValidTarget?: ($item: JQuery, container: Container) => boolean;
		onCancel?: OnCancelHandler;
		onDrag?: OnDragEventHandler;
		onDragStart?: GenericEventHandler;
		onDrop?: GenericEventHandler;
		onMousedown?: OnMousedownHandler;
		placeholder?: JQuery | any[] | Element | string;
		pullPlaceholder?: boolean;
		serialize?: SerializeFunc;
		tolerance?: number;
	}


	interface ContainerOptions {
		drag?: boolean;
		drop?: boolean;
		exclude?: string;
		nested?: boolean;
		vertical?: boolean;
	}

	interface Options extends GroupOptions, ContainerOptions {
		group?: string;
	}
}

interface JQuery {
	sortable(methodName: 'enable'): JQuery;
	sortable(methodName: 'disable'): JQuery;
	sortable(methodName: 'refresh'): JQuery;
	sortable(methodName: 'destroy'): JQuery;
	sortable(methodName: 'serialize'): JQuery;
	sortable(methodName: string): JQuery;
	sortable(options?: JQuerySortable.Options): JQuery;
}
