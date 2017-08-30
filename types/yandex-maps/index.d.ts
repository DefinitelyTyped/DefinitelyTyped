// Type definitions for yandex-maps 2.1
// Project: https://github.com/Delagen/typings-yandex-maps
// Definitions by: Delagen <https://github.com/Delagen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare namespace ymaps {
	interface IClassConstructor<T> {
		new (): T;
	}

	type ControlSingleKey = "fullscreenControl" | "geolocationControl" | "routeEditor" | "rulerControl" | "searchControl" | "trafficControl" | "typeSelector" | "zoomControl";
	type ControlSetKey = "smallMapDefaultSet" | "mediumMapDefaultSet" | "largeMapDefaultSet" | "default";
	type ControlKey = ControlSingleKey | ControlSetKey;

	type OverlayKey =
		"default#placemark" | "default#pin" | "default#circle" | "default#rectangle" | "default#polyline" | "default#polygon" |
		"hotspot#placemark" | "hotspot#circle" | "hotspot#rectangle" | "hotspot#polyline" | "hotspot#polygon" | "html#balloon" | "html#hint" |
		"html#placemark" | "html#rectangle" |
		string | IClassConstructor<IOverlay> | ((geometry: IPixelLineStringGeometry,
												 data: IDataManager | object,
												 options: object) => Promise<string | IClassConstructor<IOverlay>>);
	type InteractivityModelKey = "default#opaque" | "default#geoObject" | "default#layer" | "default#transparent" | "default#silent" | string;

	type PresetKey = string; //option.presetStorage
	//[number, number]
	//[[number, number], [number, number]]

	export namespace behavior {
		export class DblClickZoom implements IBehavior {
			constructor(options?: IDblClickZoomOptions | undefined);

			events: IEventManager;
			options: IOptionManager;

			disable(): void;

			enable(): void;

			isEnabled(): boolean;

			getParent(): IControlParent | null;

			setParent(parent: IControlParent): this;
		}

		interface IDblClickZoomOptions extends IMapMarginOptions {
			centering?: boolean;
			duration?: number;
		}

		export class Drag implements IBehavior {
			constructor(options?: IDragOptions)

			events: IEventManager;
			options: IOptionManager;

			disable(): void;

			enable(): void;

			isEnabled(): boolean;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;
		}

		interface IDragOptions {
			actionCursor?: string;
			cursor?: string;
			inertia?: boolean;
			inertiaDuration?: number;
			tremor?: number;
		}

		export class LeftMouseButtonMagnifier implements IBehavior {
			constructor(options?: ILeftMouseButtonMagnifierOptions)

			events: IEventManager;
			options: IOptionManager;

			disable(): void;

			enable(): void;

			isEnabled(): boolean;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;
		}

		interface ILeftMouseButtonMagnifierOptions {
			actionCursor?: string;
			cursor?: string;
			duration?: number;
		}

		export class MultiTouch implements IBehavior {
			constructor(options?: IMultiTouchOptions)

			events: IEventManager;
			options: IOptionManager;

			disable(): void;

			enable(): void;

			isEnabled(): boolean;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;
		}

		interface IMultiTouchOptions {
			tremor?: number;
		}

		export class RightMouseButtonMagnifier implements IBehavior {
			constructor(options?: IRightMouseButtonMagnifierOptions)

			events: IEventManager;
			options: IOptionManager;

			disable(): void;

			enable(): void;

			isEnabled(): boolean;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;
		}

		interface IRightMouseButtonMagnifierOptions {
			actionCursor?: string;
			duration?: number;
		}

		export class RouteEditor implements IBehavior {
			events: IEventManager;
			options: IOptionManager;

			disable(): void;

			enable(): void;

			isEnabled(): boolean;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;

			getRoute(): router.Route;

			getState(): string;

			setState(state: string | null): void;
		}

		export class Ruler implements IBehavior {
			constructor(options?: IRulerOptions)

			events: IEventManager;
			options: IOptionManager;

			disable(): void;

			enable(): void;

			isEnabled(): boolean;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;

			close(): boolean;

			getState(): string;

			setState(state: string | null): void;
		}

		interface IRulerOptions {
			balloonAutoPan?: boolean;
		}

		export class ScrollZoom implements IBehavior {
			constructor(options?: IScrollZoomOptions)

			events: IEventManager;
			options: IOptionManager;

			disable(): void;

			enable(): void;

			isEnabled(): boolean;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;
		}

		interface IScrollZoomOptions {
			maximumDelta?: number;
			speed?: number;
		}

		export const storage: util.Storage;
	}

	export namespace clusterer {
		export class Balloon implements IBalloonManager<Clusterer> { //tslint:disable-line no-shadowed-variable
			constructor(clusterer: Clusterer);

			events: IEventManager;

			autoPan(): Promise<Clusterer>;

			close(force?: boolean): Promise<Clusterer>;

			destroy(): void;

			getData(): object | null;

			getOptions(): IOptionManager | null;

			getOverlay(): Promise<IOverlay | null>;

			getOverlaySync(): IOverlay | null;

			getPosition(): number[] | null;

			isOpen(): boolean;

			open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<Clusterer>;

			setData(data: object | string | HTMLElement): Promise<Clusterer>;

			setOptions(options: object): Promise<Clusterer>;

			setPosition(position: number[]): Promise<Clusterer>;
		}

		export class Hint implements IHintManager<Clusterer> {
			constructor(clusterer: Clusterer);

			events: IEventManager;

			close(force?: boolean): Promise<Clusterer>;

			destroy(): void;

			getData(): object | null;

			getOptions(): IOptionManager | null;

			getOverlay(): Promise<IOverlay | null>;

			getOverlaySync(): IOverlay | null;

			getPosition(): number[] | null;

			isOpen(): boolean;

			open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<Clusterer>;

			setData(data: object | string | HTMLElement): Promise<Clusterer>;

			setOptions(options: object): Promise<Clusterer>;

			setPosition(position: number[]): Promise<Clusterer>;
		}
	}

	export namespace collection {
		export class Item implements IChildOnMap, ICustomizable, IEventEmitter, IParentOnMap {
			constructor(options?: object);

			events: IEventManager;
			options: IOptionManager;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;

			getMap(): Map;

			onAddToMap(map: Map): void;

			onRemoveFromMap(oldMap: Map): void;
		}
	}

	export namespace control {
		export class Button implements ICustomizable, ISelectableControl {
			constructor(parameters?: IButtonParameters | string);

			options: IOptionManager;
			events: IEventManager;
			data: data.Manager;
			state: data.Manager;

			deselect(): void;

			disable(): void;

			enable(): void;

			isEnabled(): boolean;

			isSelected(): boolean;

			select(): void;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;
		}

		interface IBaseButtonParametersOptions {
			adjustMapMargin?: boolean;
			float?: "none" | "left" | "right";
			floatIndex?: number;
			layout?: IClassConstructor<ISelectableControlLayout> | string;
			maxWidth?: number[][] | number[] | number;
			position?: {
				bottom?: number | string;
				left?: number | string;
				right?: number | string;
				top?: number | string;
			};
			visible?: boolean;
		}

		interface IButtonParameters {
			data?: {
				content?: string;
				image?: string;
				title?: string;
			};
			options?: IBaseButtonParametersOptions & {
				selectOnClick?: boolean;
				size?: "auto" | "small" | "medium" | "large";
			};
			state?: {
				enabled?: boolean;
				selected?: boolean;
			};
		}

		export class FullscreenControl extends Button {
			constructor(parameters?: IFullscreenControlParameters);

			enterFullscreen(): void;

			exitFullscreen(): void;
		}

		interface IFullscreenControlParameters {
			data?: {
				title?: string;
			};
			options?: IBaseButtonParametersOptions & {
				collapseOnBlur?: boolean;
				expandOnClick?: boolean;
				popupFloat?: "left" | "right";
			};
			state?: {
				expanded?: boolean;
			};
		}

		export class GeolocationControl extends Button {
			constructor(parameters?: IGeolocationControlParameters);
		}

		interface IGeolocationControlParameters extends IButtonParameters {
			data?: {
				image?: string;
				title?: string;
			};
			options?: IBaseButtonParametersOptions;
		}

		export class ListBox implements ICollection, IControl, ICustomizable {
			constructor(parameters?: IListBoxParameters);

			events: IEventManager;
			options: IOptionManager;
			data: data.Manager;
			state: data.Manager;

			add(object: object): this;

			getIterator(): IIterator;

			remove(object: object): this;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;
		}

		interface IListBoxParameters extends IButtonParameters {
			options?: IBaseButtonParametersOptions & {
				noPlacemark?: boolean;
			};
		}

		export class ListBoxItem implements ICustomizable, ISelectableControl {
			constructor(parameters?: IListBoxItemParameters);

			options: IOptionManager;
			events: IEventManager;
			data: data.Manager;
			state: data.Manager;

			deselect(): void;

			disable(): void;

			enable(): void;

			isEnabled(): boolean;

			isSelected(): boolean;

			select(): void;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;

			getMap(): Map;
		}

		interface IListBoxItemParameters {
			data?: {
				content?: string;
			};
			options?: {
				layout?: string | IClassConstructor<ISelectableControlLayout>;
				selectableLayout?: string | IClassConstructor<ISelectableControlLayout>;
				selectOnClick?: boolean;
				separatorLayout?: string | IClassConstructor<ISelectableControlLayout>;
				type?: "selectable" | "separator";
				visible?: boolean;
			};
			state?: {
				selected?: boolean;
			};
		}

		export class Manager {
			constructor(map: Map, controls?: (string | IControl)[], options?: IManagerOptions);

			events: event.Manager;
			options: option.Manager;
			state: data.Manager;

			add(control: IControl | ControlKey, options?: IManagerControlOptions): this;

			each(callback: (control: IControl) => void, context: object): this;

			get(index: number | string): IControl | null;

			getChildElement(control: IControl): Promise<HTMLElement>;

			getContainer(): HTMLElement;

			getMap(): Map;

			indexOf(childToFind: IControl | string): number;

			remove(control: IControl | string): this;
		}

		interface IManagerOptions {
			margin?: number;
			pane?: IPane;
			states?: string[];
		}

		interface IManagerControlOptions {
			float?: "none" | "left" | "right";
			floatIndex?: number;
			position?: {
				bottom?: number | string;
				left?: number | string;
				right?: number | string;
				top?: number | string;
			};
		}

		export class RouteButton implements IControl, ICustomizable {
			constructor(parameters?: IRouteButtonParameters);

			events: IEventManager;
			options: IOptionManager;
			routePanel: IRoutePanel;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;
		}

		interface IRouteButtonParameters {
			options?: {
				adjustMapMargin?: boolean;
				collapseOnBlur?: boolean;
				float?: "none" | "left" | "right";
				floatIndex?: number;
				popupAnimate?: boolean;
				popupFloat?: "auto" | "left" | "right";
				popupWidth?: string;
				position?: {
					bottom?: number | string;
					left?: number | string;
					right?: number | string;
					top?: number | string;
				};
				size?: "auto" | "small" | "medium" | "large";
				visible?: boolean;
			};
			state?: {
				expanded?: boolean;
			};
		}

		export class RouteEditor extends Button {
			constructor(parameters?: IRouteEditorParameters);

			getRoute(): router.Route;
		}

		interface IRouteEditorParameters {
			data?: {
				image?: string;
				title?: string;
			};
			options?: IBaseButtonParametersOptions;
			state?: {};
		}

		export class RulerControl extends Button {
			constructor(parameters?: IRulerControlParameters);
		}

		interface IRulerControlParameters {
			data?: {};
			options?: {
				adjustMapMargin?: boolean;
				position?: {
					bottom?: number | string;
					left?: number | string;
					right?: number | string;
					top?: number | string;
				};
				scaleLine?: boolean;
				visible?: boolean;
			};
			state?: {};
		}

		export class SearchControl implements IControl, ICustomizable {
			constructor(parameters?: ISearchControlParameters);

			events: IEventManager;
			options: IOptionManager;
			state: data.Manager;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;

			clear(): void;

			getMap(): Map;

			getRequestString(): string;

			getResponseMetaData(): object;

			getResult(index: number): Promise<object>;

			getResultsArray(): object[];

			getResultsCount(): number;

			getSelectedIndex(): number;

			hideResult(): void;

			search(request: string): Promise<void>;

			showResult(index: number): this;
		}

		interface ISearchControlParameters {
			data?: {};
			options?: {
				adjustMapMargin?: boolean;
				boundedBy?: number[][];
				fitMaxWidth?: boolean;
				float?: "none" | "left" | "right";
				floatIndex?: number;
				formLayout?: string | IClassConstructor<ILayout>;
				kind?: "house" | "street" | "metro" | "district" | "locality";
				layout?: string | IClassConstructor<ISearchControlLayout>;
				maxWidth?: number[][] | number[] | number;
				noCentering?: boolean;
				noPlacemark?: boolean;
				noPopup?: boolean;
				noSelect?: boolean;
				noSuggestPanel?: boolean;
				placeholderContent?: string;
				popupItemLayout?: string | IClassConstructor<ILayout>;
				popupLayout?: string | IClassConstructor<ILayout>;
				position?: {
					bottom?: number | string;
					left?: number | string;
					right?: number | string;
					top?: number | string;
				};
				provider?: IGeocodeProvider | "yandex#map" | "yandex#search";
				searchCoordOrder?: "latlong" | "longlat";
				size?: "auto" | "small" | "medium" | "large";
				strictBounds?: boolean;
				suppressYandexSearch?: boolean;
				useMapBounds?: boolean;
				zoomMargin?: number;
				visible?: boolean;
			};
			state?: {};
		}
	}

	export namespace data {
		export class Manager implements IDataManager, IFreezable {
			constructor(data?: object);

			events: IEventManager;

			get(path: string, defaultValue: object): object;

			getAll(): object;

			set(path: object | string, value: object): this;

			setAll(): this;

			unset(path: object | string): this;

			unsetAll(): this;

			freeze(): IFreezable;

			isFrozen(): boolean;

			unfreeze(): IFreezable;

			add(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

			getParent(): IEventManager | null;

			group(): IEventGroup;

			remove(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

			setParent(parent: IEventManager | null): this;

			fire(type: string, eventobject: object | IEvent): this;
		}
	}

	export namespace event {
		export class Manager implements IEventManager {
			constructor(params?: { context?: object; controllers?: IEventWorkflowController[]; parent?: IEventManager });

			add(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

			getParent(): IEventManager | null;

			group(): IEventGroup;

			remove(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

			setParent(parent: IEventManager | null): this;

			fire(type: string, eventobject: object | IEvent): this;

			createEventobject(type: string, event: object, target: object): Event;

			once(types: string[][] | string[] | string, callback: (event: IEvent) => any, context?: object, priority?: number): this;
		}
	}

	export namespace geometry {
		export namespace base {
			export class LineString implements IBaseLineStringGeometry { //tslint:disable-line no-shadowed-variable
				static fromEncodedCoordinates(encodedCoordinates: string): geometry.LineString; //tslint:disable-line function-name

				static toEncodedCoordinates(geometry: geometry.LineString): string; //tslint:disable-line function-name

				events: IEventManager;

				getBounds(): number[][] | null;

				getType(): string;

				get(index: number): number[];

				getChildGeometry(index: number): IPointGeometryAccess;

				getClosest(anchorPosition: number[]): object;

				getCoordinates(): number[][];

				getLength(): number;

				insert(index: number, coordinates: number[][]): ILineStringGeometryAccess;

				remove(index: number): number[];

				remove(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

				set(index: number, coordinates: number[]): ILineStringGeometryAccess;

				setCoordinates(coordinates: number[]): ILineStringGeometryAccess;

				splice(index: number, length: number): number[][];

				freeze(): IFreezable;

				isFrozen(): boolean;

				unfreeze(): IFreezable;

				add(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

				getParent(): object | null;

				group(): IEventGroup;

				setParent(parent: IEventManager | null): this;

				fire(type: string, eventobject: object | IEvent): this;
			}

			export class Point implements IBasePointGeometry { //tslint:disable-line no-shadowed-variable
				events: IEventManager;

				getBounds(): number[][] | null;

				getType(): string;

				getCoordinates(): number[] | null;

				setCoordinates(coordinates: number[] | null): this;
			}
		}

		export class LineString implements ILineStringGeometry {
			constructor(coordinates?: number[][], options?: {
				coordRendering?: "shortestPath" | "straightPath";
				geodesic?: boolean;
				pixelRendering?: "jumpy" | "static";
				projection?: IProjection;
				simplification?: boolean;
			});

			static fromEncodedCoordinates(encodedCoordinates: string): LineString; //tslint:disable-line function-name

			static toEncodedCoordinates(geometry: LineString): string; //tslint:disable-line function-name

			events: IEventManager;
			options: IOptionManager;

			getMap(): Map | null;

			getPixelGeometry(options?: object): IPixelGeometry;

			setMap(map: Map): void;

			getBounds(): number[][] | null;

			getType(): string;

			get(index: number): number[];

			getChildGeometry(index: number): IPointGeometryAccess;

			getClosest(anchorPosition: number[]): object;

			getCoordinates(): number[][];

			getLength(): number;

			insert(index: number, coordinates: number[][]): ILineStringGeometryAccess;

			remove(index: number): number[];

			remove(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

			set(index: number, coordinates: number[]): ILineStringGeometryAccess;

			setCoordinates(coordinates: number[]): ILineStringGeometryAccess;

			splice(index: number, length: number): number[][];

			freeze(): IFreezable;

			isFrozen(): boolean;

			unfreeze(): IFreezable;

			add(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

			getParent(): object | null;

			group(): IEventGroup;

			setParent(parent: IEventManager | null): this;

			fire(type: string, eventobject: object | IEvent): this;
		}

		export class Point implements IPointGeometry {
			constructor(coordinates?: number[] | null);

			options: IOptionManager;
			events: IEventManager;

			getMap(): Map | null;

			getPixelGeometry(options?: object): IPixelGeometry;

			setMap(map: Map): void;

			getBounds(): number[][] | null;

			getType(): string;

			getCoordinates(): number[] | null;

			setCoordinates(coordinates: number[] | null): this;
		}
	}

	export namespace geoObject {
		export class Balloon implements IBalloonManager<GeoObject> { //tslint:disable-line no-shadowed-variable
			constructor(geoObject: GeoObject);

			events: IEventManager;

			autoPan(): Promise<GeoObject>;

			close(force?: boolean): Promise<GeoObject>;

			destroy(): void;

			getData(): object | null;

			getOptions(): IOptionManager | null;

			getOverlay(): Promise<IOverlay | null>;

			getOverlaySync(): IOverlay | null;

			getPosition(): number[] | null;

			isOpen(): boolean;

			open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<GeoObject>;

			setData(data: object | string | HTMLElement): Promise<GeoObject>;

			setOptions(options: object): Promise<GeoObject>;

			setPosition(position: number[]): Promise<GeoObject>;
		}

		export class Hint implements IHintManager<GeoObject> {
			constructor(geoObject: GeoObject);

			events: IEventManager;

			close(force?: boolean): Promise<GeoObject>;

			destroy(): void;

			getData(): object | null;

			getOptions(): IOptionManager | null;

			getOverlay(): Promise<IOverlay | null>;

			getOverlaySync(): IOverlay | null;

			getPosition(): number[] | null;

			isOpen(): boolean;

			open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<GeoObject>;

			setData(data: object | string | HTMLElement): Promise<GeoObject>;

			setOptions(options: object): Promise<GeoObject>;

			setPosition(position: number[]): Promise<GeoObject>;
		}

		export class Sequence implements IGeoObject, IGeoObjectSequence {
			constructor(geoObject: GeoObject);

			geometry: IGeometry | null;
			properties: IDataManager;
			state: IDataManager;
			events: IEventManager;
			options: IOptionManager;

			getOverlay(): Promise<IOverlay | null>;

			getOverlaySync(): IOverlay | null;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;

			getMap(): Map;

			each(callback: (geoObject: IGeoObject) => void, context?: object): void;

			get(index: number): IGeoObject;

			getBounds(): number[][] | null;

			getIterator(): IIterator;

			getLength(): number;

			getPixelBounds(): number[][] | null;

			indexOf(geoObject: IGeoObject): number;
		}
	}

	export namespace layout {
		export namespace templateBased {
			export class Base implements ILayout {
				constructor(data: object);

				events: IEventManager;

				destroy(): void;

				getData(): object;

				getParentElement(): HTMLElement;

				getShape(): IShape | null;

				isEmpty(): boolean;

				setData(data: object): void;

				setParentElement(parent: HTMLElement | null): this;

				build(): void;

				clear(): void;

				onSublayoutSizeChange(sublayoutInfo: object, nodeSizeByContent: object): void;

				rebuild(): void;
			}
		}
	}

	export namespace map {
		export namespace action {
			export class Manager implements IEventEmitter {
				constructor(map: Map);

				events: IEventManager;

				breakTick(): void;

				execute(action: IMapAction): void;

				getCurrentState(): object;

				getMap(): Map;

				setCorrection(userFunction: () => void): void;

				stop(): void;
			}
		}

		export namespace behavior { // tslint:disable-line no-shadowed-variable
			export class Manager implements ICustomizable, IEventEmitter, IParentOnMap {
				constructor(map: Map, behaviors?: string[][] | string[], options?: object);

				options: IOptionManager;
				events: IEventManager;

				getMap(): Map;

				disable(behaviors: string[][] | string[] | string): this;

				enable(behaviors: string[][] | string[] | string): this;

				get(behaviorName: string): IBehavior;

				isEnabled(behaviorName: string): boolean;
			}
		}

		export namespace layer {
			export class Manager implements ILayer, IMapObjectCollection {
				constructor(map: Map, options?: {
					trafficImageZIndex?: number;
					trafficInfoZIndex?: number;
					trafficJamZIndex?: number;
				});

				events: IEventManager;
				options: IOptionManager;

				getParent(): null | IControlParent;

				setParent(parent: IControlParent): this;

				add(object: object): this;

				getIterator(): IIterator;

				remove(object: object): this;

				getMap(): Map;
			}
		}

		export namespace margin {
			export class Accessor {
				constructor(screenArea: object);

				getArea(): object;

				remove(): this;

				setArea(screenArea: object): this;
			}

			export class Manager {
				constructor(map: Map);

				addArea(screenArea: object): Accessor;

				destroy(): this;

				getMargin(): number[];

				getOffset(): number[];

				setDefaultMargin(margin: number[][] | number[] | number): void;
			}
		}

		export namespace pane {
			export class Manager {
				constructor(map: Map);

				append(key: string, pane: IPane): void;

				destroy(): void;

				get(key: string): IPane | null;

				getLower(): string;

				getUpper(): string;

				insertBefore(key: string, pane: IPane, referenceKey: string): void;

				remove(pane: IPane): void;
			}
		}

		export class Balloon implements IBalloonManager<Balloon>/*, IBalloonSharingManager*/ { //tslint:disable-line no-shadowed-variable
			constructor(map: Map);

			events: IEventManager;

			autoPan(): Promise<Balloon>;

			close(force?: boolean): Promise<Balloon>;

			destroy(): void;

			getData(): object | null;

			getOptions(): IOptionManager | null;

			getOverlay(): Promise<IOverlay | null>;

			getOverlaySync(): IOverlay | null;

			getPosition(): number[] | null;

			isOpen(): boolean;

			open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<Balloon>;

			setData(data: object | string | HTMLElement): Promise<Balloon>;

			setOptions(options: object): Promise<Balloon>;

			setPosition(position: number[]): Promise<Balloon>;
		}

		export class Container implements IDomEventEmitter {
			constructor(parentElement: string | HTMLElement);

			events: IEventManager;

			enterFullscreen(): void;

			exitFullscreen(): void;

			fitToViewport(preservePixelPosition?: boolean): void;

			getElement(): HTMLElement;

			getOffset(): number[];

			getParentElement(): HTMLElement;

			getSize(): number[];

			isFullscreen(): boolean;
		}

		export class Converter {
			constructor(map: Map);

			globalToPage(globalPixelPoint: number[]): number[];

			pageToGlobal(pagePixelPoint: number[]): number[];
		}

		export class Copyrights {
			constructor(map: Map);

			add(customCopyrights: string | HTMLElement | (string | HTMLElement)[]): ICopyrightsAccessor;

			addProvider(provider: ICopyrightsProvider): this;

			get(point?: number[], zoom?: number): Promise<(string | HTMLElement)[]>;

			getPromoLink(): string;

			removeProvider(provider: ICopyrightsProvider): this;
		}

		export class GeoObjects implements IGeoObjectCollection {
			constructor(map: Map, options?: object);

			options: IOptionManager;
			events: IEventManager;

			add(child: IGeoObject, index?: number): this;

			each(callback: (object: IGeoObject) => void, context: object): void;

			get(index: number): IGeoObject;

			getBounds(): number[][] | null;

			getIterator(): IIterator;

			getLength(): number;

			getPixelBounds(): number[][] | null;

			indexOf(object: IGeoObject): number;

			remove(child: IGeoObject): this;

			removeAll(): this;

			set(index: number, child: IGeoObject): this;

			splice(index: number, length: number): this;

			getMap(): Map;
		}

		export class Hint implements IHintManager<Hint>/*, IHintSharingManager*/ {
			constructor(map: Map);

			events: IEventManager;

			close(force?: boolean): Promise<Hint>;

			destroy(): void;

			getData(): object | null;

			getOptions(): IOptionManager | null;

			getOverlay(): Promise<IOverlay | null>;

			getOverlaySync(): IOverlay | null;

			getPosition(): number[] | null;

			isOpen(): boolean;

			open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<Hint>;

			setData(data: object | string | HTMLElement): Promise<Hint>;

			setOptions(options: object): Promise<Hint>;

			setPosition(position: number[]): Promise<Hint>;
		}

		export class ZoomRange implements IEventEmitter {
			constructor(map: Map, constraints: number[]);

			events: IEventManager;

			get(coords?: number[]): Promise<number[]>;

			getCurrent(): number[];
		}
	}

	export namespace multiRouter {
		export namespace driving {
			export class Path implements IGeoObject {
				geometry: IGeometry | null;
				properties: data.Manager;
				state: IDataManager;
				model: PathModel;
				events: IEventManager;
				options: IOptionManager;

				getOverlay(): Promise<IOverlay | null>;

				getOverlaySync(): IOverlay | null;

				getParent(): object | null;

				setParent(parent: object): this;

				getMap(): Map;

				getSegments(): GeoObjectCollection;
			}

			export class PathModel implements IEventEmitter {
				events: IEventManager;
				properties: data.Manager;
				route: RouteModel;

				destroy(): void;

				getSegments(): SegmentModel[];

				getType(): string;

				update(pathJson: object): void;
			}

			export class Route implements IGeoObject {
				geometry: IGeometry | null;
				properties: IDataManager;
				state: IDataManager;
				events: IEventManager;
				options: IOptionManager;

				getOverlay(): Promise<IOverlay | null>;

				getOverlaySync(): IOverlay | null;

				getParent(): object | null;

				setParent(parent: object): this;

				getMap(): Map;

				getPaths(): GeoObjectCollection;
			}

			export class RouteModel implements IEventEmitter {
				events: IEventManager;
				multiRoute: MultiRouteModel;
				properties: data.Manager;

				destroy(): void;

				getPaths(): PathModel[];

				update(routeJson: object): void;

				getType(): string;
			}

			export class Segment implements IGeoObject {
				geometry: IGeometry | null;
				properties: data.Manager;
				state: IDataManager;
				events: IEventManager;
				options: IOptionManager;

				getOverlay(): Promise<IOverlay | null>;

				getOverlaySync(): IOverlay | null;

				getParent(): object | null;

				setParent(parent: object): this;

				getMap(): Map;
			}

			export class SegmentModel implements IEventEmitter {
				events: IEventManager;
				geometry: geometry.base.LineString;
				path: PathModel;

				destroy(): void;

				getType(): string;

				getViaPoints(): ViaPointModel[];

				update(segmentJson: object): void;
			}
		}

		export namespace masstransit {
			export class Path implements IGeoObject {
				geometry: IGeometry | null;
				properties: data.Manager;
				state: IDataManager;
				events: IEventManager;
				options: IOptionManager;
				model: PathModel;

				getOverlay(): Promise<IOverlay | null>;

				getOverlaySync(): IOverlay | null;

				getParent(): object | null;

				setParent(parent: object): this;

				getMap(): Map;

				getSegmentMarkers(): GeoObjectCollection;

				getSegments(): GeoObjectCollection;
			}

			export class PathModel implements IEventEmitter {
				events: IEventManager;
				properties: data.Manager;
				route: RouteModel;

				destroy(): void;

				getSegments(): (TransferSegmentModel | TransportSegmentModel | WalkSegmentModel)[];

				getType(): string;

				update(pathJson: object): void;
			}

			export class Route implements IGeoObject {
				geometry: IGeometry | null;
				properties: data.Manager;
				model: RouteModel;
				state: IDataManager;
				events: IEventManager;
				options: IOptionManager;

				getOverlay(): Promise<IOverlay | null>;

				getOverlaySync(): IOverlay | null;

				getParent(): object | null;

				setParent(parent: object): this;

				getMap(): Map;

				getPaths(): GeoObjectCollection;
			}

			export class RouteModel implements IEventEmitter {
				events: IEventManager;
				multiRoute: MultiRouteModel;
				properties: data.Manager;

				destroy(): void;

				getPaths(): PathModel[];

				getType(): string;

				update(routeJson: object): void;
			}

			export class StopModel implements IEventEmitter {
				events: IEventManager;
				geometry: geometry.base.Point;
				properties: data.Manager;
				segment: TransportSegmentModel;

				update(stopJson: object): void;
			}

			export class TransferSegment implements IGeoObject {
				geometry: IGeometry | null;
				properties: data.Manager;
				state: IDataManager;
				events: IEventManager;
				options: IOptionManager;
				model: TransferSegmentModel;

				getOverlay(): Promise<IOverlay | null>;

				getOverlaySync(): IOverlay | null;

				getParent(): object | null;

				setParent(parent: object): this;

				getMap(): Map;
			}

			export class TransferSegmentModel implements IEventEmitter {
				events: IEventManager;
				geometry: geometry.base.LineString;
				path: PathModel;
				properties: data.Manager;

				destroy(segmentJson: object): void;

				getType(): string;
			}

			export class TransportSegment implements IGeoObject {
				geometry: IGeometry | null;
				properties: data.Manager;
				state: IDataManager;
				events: IEventManager;
				options: IOptionManager;
				model: TransportSegmentModel;

				getOverlay(): Promise<IOverlay | null>;

				getOverlaySync(): IOverlay | null;

				getParent(): object | null;

				setParent(parent: object): this;

				getMap(): Map;
			}

			export class TransportSegmentModel implements IEventEmitter {
				events: IEventManager;
				geometry: geometry.base.LineString;
				path: PathModel;
				properties: data.Manager;

				destroy(): void;

				getStops(): StopModel[];

				getType(): string;

				update(segmentJson: object): void;
			}

			export class WalkSegment implements IGeoObject {
				geometry: IGeometry | null;
				properties: data.Manager;
				state: IDataManager;
				events: IEventManager;
				options: IOptionManager;
				model: WalkSegmentModel;

				getOverlay(): Promise<IOverlay | null>;

				getOverlaySync(): IOverlay | null;

				getParent(): object | null;

				setParent(parent: object): this;

				getMap(): Map;
			}

			export class WalkSegmentModel implements IEventEmitter {
				events: IEventManager;
				geometry: geometry.base.LineString;
				path: PathModel;
				properties: data.Manager;

				destroy(): void;

				getType(): string;
			}
		}

		export class EditorAddon implements ICustomizable, IEventEmitter {
			options: IOptionManager;
			events: IEventManager;
			state: data.Manager;

			isActive(): boolean;

			start(state: object): void;

			stop(): void;
		}

		export class MultiRoute implements IGeoObject {
			constructor(model: MultiRouteModel | IMultiRouteModelJson, options?: {
				activeRouteAutoSelection?: boolean;
				boundsAutoApply?: boolean;
				dragUpdateInterval?: string | number;
				preventDragUpdate?: boolean;
				useMapMargin?: boolean;
				zoomMargin?: number[][] | number[] | number;
				[index: string]: any;
			});

			editor: EditorAddon;
			model: MultiRouteModel;
			geometry: IGeometry | null;
			properties: IDataManager;
			state: IDataManager;
			events: IEventManager;
			options: IOptionManager;

			getOverlay(): Promise<IOverlay | null>;

			getOverlaySync(): IOverlay | null;

			getParent(): object | null;

			setParent(parent: object): this;

			getMap(): Map;

			getActiveRoute(): driving.Route | masstransit.Route | null;

			getBounds(): number[][] | null;

			getPixelBounds(): number[][] | null;

			getRoutes(): GeoObjectCollection;

			getViaPoints(): GeoObjectCollection;

			getWayPoints(): GeoObjectCollection;

			setActiveRoute(route: driving.Route | masstransit.Route | null): void;
		}

		export class MultiRouteModel implements IEventEmitter {
			constructor(referencePoints: IMultiRouteReferencePoint[], params?: IMultiRouteParams);

			events: IEventManager;
			properties: data.Manager;

			destroy(): void;

			getAllPoints(): (WayPointModel | ViaPointModel)[];

			getJson(): object;

			getParams(): IMultiRouteParams;

			getPoints(): (WayPointModel | ViaPointModel)[];

			getReferencePointIndexes(): object;

			getReferencePoints(): IMultiRouteReferencePoint[];

			getRoutes(): driving.RouteModel[] | masstransit.RouteModel[];

			getViaPoints(): ViaPointModel[];

			getWayPoints(): WayPointModel[];

			setParams(params: IMultiRouteParams, extend?: boolean, clearRequests?: boolean): void;

			setReferencePoints(referencePoints: IMultiRouteReferencePoint[], viaIndexes?: number[], clearRequests?: boolean): void;
		}

		export class ViaPoint implements IGeoObject {
			geometry: IGeometry | null;
			properties: data.Manager;
			state: IDataManager;
			events: IEventManager;
			options: IOptionManager;

			getOverlay(): Promise<IOverlay | null>;

			getOverlaySync(): IOverlay | null;

			getParent(): object | null;

			setParent(parent: object): this;

			getMap(): Map;
		}

		export class ViaPointModel implements IEventEmitter {
			events: IEventManager;
			geometry: geometry.base.Point;
			multiRoute: MultiRouteModel;
			properties: data.Manager;

			destroy(): void;

			getReferencePoint(): object;

			getReferencePointIndex(): number;

			setReferencePoint(referencePoint: object): void;

			update(viaPointJson: object): void;
		}

		export class WayPoint implements IGeoObject {
			geometry: IGeometry | null;
			properties: data.Manager;
			state: IDataManager;
			events: IEventManager;
			options: IOptionManager;
			model: WayPointModel;

			getOverlay(): Promise<IOverlay | null>;

			getOverlaySync(): IOverlay | null;

			getParent(): object | null;

			setParent(parent: object): this;

			getMap(): Map;
		}

		export class WayPointModel implements IEventEmitter {
			events: IEventManager;
			geometry: geometry.base.Point;
			multiRoute: MultiRouteModel;
			properties: data.Manager;

			destroy(): void;

			getReferencePoint(): object;

			getReferencePointIndex(): number;

			setReferencePoint(referencePoint: object): void;

			update(wayPointJson: object): void;
		}
	}

	export namespace option {
		export class Manager implements IOptionManager {
			constructor(options?: object, parent?: IOptionManager, name?: string);

			events: IEventManager;

			get(key: string, defaultValue: object): object;

			getAll(): object;

			getName(): string;

			getNative(key: string): object;

			resolve(key: string, name?: string): object;

			set(key: object | string, value?: object): this;

			unset(keys: string[][] | string[] | string): this;

			unsetAll(): this;

			setName(name: string): void;

			getParent(): null | IOptionManager;

			setParent(parent: IOptionManager): this;

			freeze(): IFreezable;

			isFrozen(): boolean;

			unfreeze(): IFreezable;

			add(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

			group(): IEventGroup;

			remove(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

			fire(type: string, eventobject: object | IEvent): this;
		}
	}

	export namespace panorama {
		export class Manager implements IEventEmitter {
			events: IEventManager;

			closePlayer(): void;

			disableLookup(): void;

			enableLookup(): void;

			getPlayer(): Player;

			isLookupEnabled(): boolean;

			openPlayer(panorama: IPanorama[] | number): Promise<void>;
		}

		export class Player implements IEventEmitter {
			constructor(element: HTMLElement | string, panorama: IPanorama, options?: {
				autoFitToViewport?: "none" | "ifNull" | "always";
				controls?: string[];
				direction?: number[] | string;
				hotkeysEnabled?: boolean;
				scrollZoomBehavior?: boolean;
				span?: number[] | string;
				suppressMapOpenBlock?: boolean;
			})

			events: IEventManager;

			destroy(): void;

			fitToViewport(): void;

			getDirection(): number[];

			getPanorama(): IPanorama;

			getSpan(): number[];

			lookAt(point: number[]): this;

			moveTo(point: number[], options?: {
				direction?: number[] | string;
				layer?: "yandex#panorama" | "yandex#airPanorama";
				span?: number[] | string;
			}): Promise<void>;

			setDirection(direction: number[] | string): this;

			setPanorama(panorama: IPanorama): this;

			setSpan(span: number[] | string): this;
		}
	}

	export namespace router {
		export class Editor implements ICustomizable, IEventEmitter {
			options: IOptionManager;
			events: IEventManager;

			start(options?: {
				addViaPoints?: boolean;
				addWayPoints?: boolean;
				editViaPoints?: boolean;
				editWayPoints?: boolean;
				removeViaPoints?: boolean;
				removeWayPoints?: boolean;
			}): void;

			stop(): void;
		}

		export abstract class Route implements IGeoObject {
			geometry: IGeometry | null;
			properties: IDataManager;
			state: IDataManager;
			events: IEventManager;
			options: IOptionManager;
			editor: Editor;

			getOverlay(): Promise<IOverlay | null>;

			getOverlaySync(): IOverlay | null;

			getParent(): null | IControlParent;

			setParent(parent: IControlParent): this;

			getMap(): Map;

			getHumanJamsTime(): string;

			getHumanLength(): string;

			getHumanTime(): string;

			getJamsTime(): number;

			getLength(): number;

			getPaths(): GeoObjectCollection;

			getTime(): number;

			getViaPoints(): GeoObjectCollection;

			getWayPoints(): GeoObjectCollection;
		}
	}

	export class Balloon extends Popup<Balloon> implements IBaloon<Balloon> {
		constructor(map: Map, options?: IBalloonOptions);

		getData(): object;

		close(force?: boolean): Promise<Balloon>;

		getParent(): Balloon | null;

		setParent(parent: Balloon): this;

		autoPan(): Promise<Balloon>;

		freeze(): IFreezable;

		isFrozen(): boolean;

		unfreeze(): IFreezable;

		add(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

		group(): IEventGroup;

		remove(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

		fire(type: string, eventobject: object | IEvent): this;
	}

	interface IBalloonOptions {
		autoPan?: boolean;
		autoPanCheckZoomRange?: boolean;
		autoPanDuration?: number;
		autoPanMargin?: number[][] | number[] | number;
		autoPanUseMapMargin?: boolean;
		closeButton?: boolean;
		contentLayout?: IClassConstructor<ILayout> | string;
		layout?: IClassConstructor<ILayout> | string;
		maxHeight?: number;
		maxWidth?: number;
		minHeight?: number;
		minWidth?: number;
		offset?: number[];
		pane?: string;
		panelContentLayout?: IClassConstructor<ILayout> | string;
		panelMaxHeightRatio?: number;
		panelMaxMapArea?: number;
		shadow?: boolean;
		shadowLayout?: IClassConstructor<ILayout> | string;
		shadowOffset?: number[];
	}

	export class Circle implements GeoObject {
		constructor(geometry: ICircleGeometry[][][][] | number[][] | object, properties?: object | IDataManager, options?: ICircleOptions)

		balloon: geoObject.Balloon;
		editor: IGeometryEditor;
		hint: geoObject.Hint;
		events: event.Manager;
		options: option.Manager;
		properties: data.Manager;
		state: data.Manager;

		geometry: IGeometry | null;
		indices: ArrayBuffer;
		vertices: ArrayBuffer;

		getOverlay(): Promise<IOverlay | null>;

		getOverlaySync(): IOverlay | null;

		getParent(): null | IControlParent;

		setParent(parent: IControlParent): this;

		getMap(): Map;
	}

	interface ICircleOptions {
		circleOverlay?: string | ((geometry: IPixelCircleGeometry, data: object, options: object) => Promise<IOverlay>);
		cursor?: string;
		draggable?: boolean;
		fill?: boolean;
		fillColor?: string;
		fillImageHref?: string;
		fillMethod?: "stretch" | "tile";
		fillOpacity?: number;
		hasBalloon?: boolean;
		hasHint?: boolean;
		hideIconOnBalloonOpen?: boolean;
		interactiveZIndex?: boolean;
		interactivityModel?: InteractivityModelKey;
		opacity?: number;
		openBalloonOnClick?: boolean;
		openEmptyBalloon?: boolean;
		openEmptyHint?: boolean;
		openHintOnHover?: boolean;
		outline?: boolean;
		pane?: string;
		strokeColor?: string[][] | string[] | string;
		strokeOpacity?: number[][] | number[] | number;
		strokeStyle?: string[][][] | object[][] | string[] | object[] | string | object;
		strokeWidth?: number[][] | number[] | number;
		syncOverlayInit?: boolean;
		useMapMarginInDragging?: boolean;
		visible?: boolean;
		zIndex?: number;
		zIndexActive?: number;
		zIndexDrag?: number;
		zIndexHover?: number;
	}

	export class Clusterer implements IChildOnMap, ICustomizable, IEventEmitter, IParentOnMap {
		constructor(options?: IClustererOptions);

		events: IEventManager;
		options: IOptionManager;
		balloon: clusterer.Balloon;
		// 	balloonopen:
		hint: clusterer.Hint;

		getParent(): null | IControlParent;

		setParent(parent: IControlParent): this;

		// balloonclose:

		getMap(): Map;
	}

	interface IClustererOptions {
		gridSize?: number;
		groupByCoordinates?: boolean;
		hasBalloon?: boolean;
		hasHint?: boolean;
		margin?: number[][] | number[] | number;
		maxZoom?: number[] | number;
		minClusterSize?: number;
		preset?: PresetKey;
		showInAlphabeticalOrder?: boolean;
		useMapMargin?: boolean;
		viewportMargin?: number[][] | number[] | number;
		zoomMargin?: number[][] | number[] | number;
	}

	export class ClusterPlacemark implements IGeoObject, collection.Item {
		constructor(geometry: number[] | object | IPointGeometry, properties: IClusterPlacemarkProperties, options?: IClusterPlacemarkOptions);

		geometry: IGeometry | null;
		properties: IDataManager;
		events: IEventManager;
		options: IOptionManager;
		state: data.Manager;

		getOverlay(): Promise<IOverlay | null>;

		getOverlaySync(): IOverlay | null;

		getParent(): null | IControlParent;

		setParent(parent: IControlParent): this;

		getMap(): Map;

		onAddToMap(map: Map): void;

		onRemoveFromMap(oldMap: Map): void;

		getBounds(): number[][] | null;

		getGeoObjects(): IGeoObject[];
	}

	interface IClusterPlacemarkProperties extends IDataManager {
		geoObjects: IGeoObject[];
	}

	interface IClusterPlacemarkOptions {
		balloonContentLayout?: "cluster#balloonTwoColumns" | "cluster#balloonCarousel" | "cluster#balloonAccordion" | string | IClassConstructor<ILayout>;
		balloonContentLayoutHeight?: number;
		balloonContentLayoutWidth?: number;
		balloonItemContentLayout?: ILayout | string;
		balloonPanelContentLayout?: string | IClassConstructor<ILayout>;
		cursor?: string;
		disableClickZoom?: boolean;
		hideIconOnBalloonOpen?: boolean;
		iconColor?: string;
		iconContentLayout?: string | IClassConstructor<ILayout>;
		iconLayout?: string | IClassConstructor<ILayout>;
		icons?: {
			href: string;
			size: number[];
			ooffset: number[];
			shape?: IShape | IGeometryJson;
		}[];
		iconShape?: IGeometryJson;
		interactivityModel?: InteractivityModelKey;
		numbers?: number[];
		openBalloonOnClick?: boolean;
		openEmptyHint?: boolean;
		openHintOnHover?: boolean;
		zIndexHover?: number;
	}

	export class Collection implements ICollection, collection.Item {
		constructor(options?: object);

		events: IEventManager;
		options: IOptionManager;

		add(object: object): this;

		getIterator(): IIterator;

		remove(object: object): this;

		getParent(): null | IControlParent;

		setParent(parent: IControlParent): this;

		getMap(): Map;

		onAddToMap(map: Map): void;

		onRemoveFromMap(oldMap: Map): void;

		filter(filterFunction: (object: object) => boolean): object[];

		get(index: number): object;

		getAll(): object[];

		getLength(): number;

		indexOf(childToFind: object): number;

		removeAll(): this;
	}

	export class Event implements IEvent {
		constructor(originalEvent: object, sourceEvent: IEvent);

		allowMapEvent(): void;

		callMethod(name: string): void;

		get(name: string): object;

		getSourceEvent(): IEvent | null;

		isDefaultPrevented(): boolean;

		isImmediatePropagationStopped(): boolean;

		isMapEventAllowed(): boolean;

		isPropagationStopped(): boolean;

		preventDefault(): boolean;

		stopImmediatePropagation(): boolean;

		stopPropagation(): boolean;
	}

	export class GeoObject implements IGeoObject {
		constructor(feature?: IGeoObjectFeature, options?: IGeoObjectOptions);

		geometry: IGeometry | null;
		balloon: geoObject.Balloon;
		editor: IGeometryEditor;
		hint: geoObject.Hint;
		events: event.Manager;
		options: option.Manager;
		properties: data.Manager;
		state: data.Manager;

		getOverlay(): Promise<IOverlay | null>;

		getOverlaySync(): IOverlay | null;

		getParent(): null | IControlParent;

		setParent(parent: IControlParent): this;

		getMap(): Map;
	}

	interface IGeoObjectFeature {
		geometry?: IGeometry | IGeometryJson;
		properties?: IDataManager | object;
	}

	interface IGeoObjectOptions extends ICircleOptions {
		iconCaptionMaxWidth?: number;
		iconColor?: string;
		iconContentLayout?: string | IClassConstructor<ILayout>;
		iconContentOffset?: number[];
		iconContentPadding?: number[];
		iconContentSize?: number[];
		iconImageClipRect?: number[][];
		iconImageHref?: string;
		iconImageOffset?: number[];
		iconImageShape?: IShape | null;
		iconImageSize?: number[];
		iconLayout?: string | IClassConstructor<ILayout>;
		iconMaxHeight?: number;
		iconMaxWidth?: number;
		iconOffset?: number[];
		iconShadow?: boolean;
		iconShadowImageClipRect?: number[][];
		iconShadowImageHref?: string;
		iconShadowImageOffset?: number[];
		iconShadowImageSize?: number[];
		iconShadowLayout?: string | IClassConstructor<ILayout>;
		iconShadowOffset?: number[];
		lineStringOverlay?: OverlayKey;
		pointOverlay?: OverlayKey;
		polygonOverlay?: OverlayKey;
		preset?: string;
		rectangleOverlay?: OverlayKey;
		setMapCursorInDragging?: boolean;
	}

	export class GeoObjectCollection implements IGeoObject, IGeoObjectCollection {
		constructor(feature?: {
			children?: IGeoObject[];
			geometry?: IGeometry | object;
			properties?: IDataManager | object;
		}, options?: object);

		geometry: IGeometry | null;
		properties: IDataManager;
		state: IDataManager;
		events: IEventManager;
		options: IOptionManager;

		getOverlay(): Promise<IOverlay | null>;

		getOverlaySync(): IOverlay | null;

		getParent(): null | IControlParent;

		setParent(parent: IControlParent): this;

		getMap(): Map;

		add(child: IGeoObject, index?: number): this;

		each(callback: (object: IGeoObject) => void, context: object): void;

		get(index: number): IGeoObject;

		getBounds(): number[][] | null;

		getIterator(): IIterator;

		getLength(): number;

		getPixelBounds(): number[][] | null;

		indexOf(object: IGeoObject): number;

		remove(child: IGeoObject): this;

		removeAll(): this;

		set(index: number, child: IGeoObject): this;

		splice(index: number, length: number): this;

		toArray(): IGeoObject[];
	}

	export class Layer implements ILayer, IParentOnMap, IPositioningContext {
		constructor(tileUrlTemplate: string | ((tileNumber: number[], tileZoom: number) => string));

		events: IEventManager;
		options: IOptionManager;

		fromClientPixels(clientPixelPoint: number[]): number[];

		getZoom(): number;

		toClientPixels(globalPixelPoint: number[]): number[];

		getParent(): null | IControlParent;

		setParent(parent: IControlParent): this;

		getMap(): Map;
	}

	export class Map implements IDomEventEmitter {
		constructor(parentElement: HTMLElement | string, state: IMapState, options?: IMapOptions)

		action: map.action.Manager;
		balloon: map.Balloon;
		behaviors: map.behavior.Manager;
		container: map.Container;
		controls: control.Manager;
		converter: map.Converter;
		copyrights: map.Copyrights;
		cursors: util.cursor.Manager;
		events: event.Manager;
		geoObjects: map.GeoObjects;
		hint: map.Hint;
		layers: map.layer.Manager;
		margin: map.margin.Manager;
		options: option.Manager;
		panes: map.pane.Manager;
		zoomRange: map.ZoomRange;

		destroy(): void;

		getBounds(options?: IMapMarginOptions): number[][];

		getCenter(options?: IMapMarginOptions): number[];

		getGlobalPixelCenter(options?: IMapMarginOptions): number[];

		getPanoramaManager(): Promise<panorama.Manager>;

		getType(): string | MapType;

		getZoom(): number;

		panTo(center: number[] | object[], options?: IMapPanOptions): Promise<void>;

		setBounds(bounds: number[][], options?: IMapBoundsOptions): Promise<void>;

		setCenter(center: number[], zoom?: number, options?: IMapPositionOptions): Promise<void>;

		setGlobalPixelCenter(globalPixelCenter: number[], zoom?: number, options?: IMapPositionOptions): Promise<void>;

		setType(type: string | MapType, options?: IMapCheckZoomRangeOptions): Promise<void>;

		setZoom(zoom: number, options?: IMapZoomOptions): Promise<void>;
	}

	interface IMapMarginOptions {
		useMapMargin?: boolean;
	}

	interface IMapCheckZoomRangeOptions {
		checkZoomRange?: boolean;
	}

	interface IMapZoomOptions extends IMapMarginOptions, IMapCheckZoomRangeOptions {
		duration?: number;
	}

	interface IMapPositionOptions extends IMapZoomOptions {
		timingFunction?: string;
	}

	interface IMapBoundsOptions extends IMapPositionOptions {
		preciseZoom?: boolean;
		zoomMargin?: number[][] | number[];
	}

	interface IMapPanOptions extends IMapPositionOptions {
		delay?: number;
		flying?: boolean;
		safe?: boolean;
	}

	export class MapType {
		constructor(name: string, layers: (IClassConstructor<Layer> | string)[])
	}

	interface IMapState {
		behaviors?: string[];
		bounds?: number[][];
		center?: number[];
		controls?: string[];
		margin?: number[][] | number[];
		type?: "yandex#map" | "yandex#satellite" | "yandex#hybrid";
		zoom?: number;
	}

	interface IMapOptions {
		autoFitToViewport?: "none" | "ifNull" | "always";
		avoidFractionalZoom?: boolean;
		exitFullscreenByEsc?: boolean;
		fullscreenZIndex?: number;
		mapAutoFocus?: boolean;
		maxAnimationZoomDifference?: number;
		maxZoom?: number;
		minZoom?: number;
		nativeFullscreen?: boolean;
		projection?: IProjection;
		restrictMapArea?: boolean;
		suppressMapOpenBlock?: boolean;
		suppressObsoleteBrowserNotifier?: boolean;
		yandexMapAutoSwitch?: boolean;
		yandexMapDisablePoiInteractivity?: boolean;
	}

	export class Placemark extends GeoObject {
		constructor(geometry: number[] | object | IPointGeometry, properties: object | IDataManager, options?: IPlacemarkOptions)
	}

	interface IPlacemarkOptions {
		cursor?: string;
		draggable?: boolean;

		[index: string]: any;
	}

	export class Popup<T> implements IPopup<T> {
		constructor(map: Map, options?: IPopupOptions);

		options: IOptionManager;
		events: IEventManager;

		close(force?: boolean): Promise<T>;

		getData(): object;

		getOverlay(): Promise<IOverlay>;

		getOverlaySync(): IOverlay;

		getPosition(): number[];

		isOpen(): boolean;

		open(position: number[], data: object | string | HTMLElement): Promise<T>;

		setData(data: object | string | HTMLElement): Promise<T>;

		setPosition(position: number[]): Promise<T>;
	}

	interface IPopupOptions {
		closeTimeout?: number;
		interactivityModel?: InteractivityModelKey;
		openTimeout?: number;
		pane?: IPane | string;
		projection?: IProjection;
		zIndex?: number;
	}

	export function ready(successCallback?: () => any | IReadyobject, errorCallback?: () => any, context?: object): Promise<void>;

	interface IReadyobject {
		require?: string[];
		context?: object;

		successCallback?(): void;

		errorCallback?(): void;
	}

	export namespace templateLayoutFactory {
		export function createClass(template: string, overrides?: object, staticMethods?: object): IClassConstructor<layout.templateBased.Base>;
	}

	export namespace util {
		export namespace cursor {
			export class Accessor {
				constructor(key: string);

				getKey(): string;

				remove(): void;

				setKey(): void;
			}

			export class Manager {
				constructor(element: HTMLElement);

				push(key: string): Accessor;
			}
		}

		export class Storage {
			add(key: string, object: object): this;

			get(key: string | object): object | string;

			remove(key: string): object;
		}
	}

	/*Interfaces*/

	export interface IBaloon<T> extends IPopup<T>, ICustomizable, IChild<T>, IFreezable {
		autoPan(): Promise<T>;
	}

	export interface IBalloonManager<T> extends IPopupManager<T> {
		autoPan(): Promise<T>;
	}

	export interface IBaseGeometry extends IEventEmitter {
		getBounds(): number[][] | null;

		getType(): string;
	}

	export interface IBaseLineStringGeometry extends IBaseGeometry, ILineStringGeometryAccess {//tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface IBasePointGeometry extends IBaseGeometry, IPointGeometryAccess {//tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface IBehavior extends IChildOnMap, ICustomizable {
		disable(): void;

		enable(): void;

		isEnabled(): boolean;
	}

	export interface IChild<T> extends IEventEmitter {
		getParent(): object | null;

		setParent(parent: object | null): this;
	}

	export interface IChildOnMap extends IChild<IControlParent> { //tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface ICircleGeometry extends ICircleGeometryAccess, IGeometry { //tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface ICircleGeometryAccess extends IFreezable {
		contains(position: number[]): boolean;

		getClosest(anchorPosition: number[]): object;

		getCoordinates(): number[] | null;

		getRadius(): number;

		setCoordinates(coordinates: number[] | null): this;

		setRadius(radius: number): this;
	}

	export interface ICollection extends IEventEmitter {
		add(object: object): this;

		getIterator(): IIterator;

		remove(object: object): this;
	}

	export interface IControl extends IChildOnMap { //tslint:disable-line no-empty-interface no-empty-interfaces
		// new (options?: object);
	}

	export interface IControlParent extends IParentOnMap {
		getChildElement(child: IControl): Promise<HTMLElement>;
	}

	export interface ICoordSystem {
		getDistance(point1: number[], point2: number[]): number;

		solveDirectProblem(startPoint: number[], direction: number[], distance: number): object;

		solveInverseProblem(startPoint: number[], endPoint: number[], reverseDirection?: boolean): object;
	}

	export interface ICopyrightsAccessor extends ICopyrightsProvider { //tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface ICopyrightsProvider extends IEventEmitter {
		getCopyrights(coords: number[], zoom: number): Promise<(string | HTMLElement)[]>;

		remove(): void;

		setCopyrights(copyrights: string | HTMLElement | (string | HTMLElement)[]): void;
	}

	export interface ICustomizable extends IEventEmitter {
		options: IOptionManager;
	}

	export interface IDataManager extends IEventEmitter {
		get(path: string, defaultValue: object): object;
	}

	export interface IDomEventEmitter extends IEventEmitter { //tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface IEvent {
		allowMapEvent(): void;

		callMethod(name: string): void;

		get(name: string): object;

		getSourceEvent(): IEvent | null;

		isDefaultPrevented(): boolean;

		isImmediatePropagationStopped(): boolean;

		isMapEventAllowed(): boolean;

		isPropagationStopped(): boolean;

		preventDefault(): boolean;

		stopImmediatePropagation(): boolean;

		stopPropagation(): boolean;
	}

	export interface IEventController {
		onStartListening?(events: IEventManager, type: string): void;

		onStopListening?(events: IEventManager, type: string): void;
	}

	export interface IEventEmitter {
		events: IEventManager;
	}

	export interface IEventGroup {
		add(types: string[][] | string[] | string, callback: (event: object | IEvent) => void, context?: object, priority?: number): this;

		remove(types: string[][] | string[] | string, callback: (event: object | IEvent) => void, context?: object, priority?: number): this;

		removeAll(): this;
	}

	export interface IEventManager extends IEventTrigger {
		add(types: string[][] | string[] | string, callback: (event: object | IEvent) => void, context?: object, priority?: number): this;

		getParent(): object | null;

		group(): IEventGroup;

		//remove(types: string[][] | string[] | string, callback: (event: object | IEvent) => void, context?: object, priority?: number): this;

		setParent(parent: object | null): this;
	}

	export interface IEventTrigger {
		fire(type: string, eventobject: object | IEvent): this;
	}

	export interface IEventWorkflowController extends IEventController {
		onAfterEventFiring?(events: IEventManager, type: string, event?: IEvent): void;

		onBeforeEventFiring?(events: IEventManager, type: string, event?: IEvent): void;
	}

	export interface IExpandableControlLayout extends ILayout { //tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface IFreezable extends IEventManager {
		freeze(): IFreezable;

		isFrozen(): boolean;

		unfreeze(): IFreezable;
	}

	export interface IGeocodeProvider {
		geocode(request: string, options?: { boundedBy?: number[][], results?: number, skip?: number, strictBounds?: boolean }): Promise<object>;

		suggest(request: string, options?: { boundedBy?: number[][], results?: number, strictBounds?: boolean }): Promise<object>;
	}

	export interface IGeometry extends IBaseGeometry, ICustomizable {
		getMap(): Map | null;

		getPixelGeometry(options?: object): IPixelGeometry;

		setMap(map: Map): void;
	}

	export interface IGeometryEditor extends ICustomizable, IEventEmitter {
		startEditing(): void;

		stopEditing(): void;
	}

	export interface IGeometryJson {
		type: string;
	}

	export interface IGeoObject extends IChildOnMap, ICustomizable, IDomEventEmitter, IParentOnMap {
		geometry: IGeometry | null;
		properties: IDataManager;
		state: IDataManager;

		getOverlay(): Promise<IOverlay | null>;

		getOverlaySync(): IOverlay | null;
	}

	export interface IGeoObjectCollection extends ICustomizable, IEventEmitter, IParentOnMap {
		add(child: IGeoObject, index?: number): this;

		each(callback: (object: IGeoObject) => void, context: object): void;

		get(index: number): IGeoObject;

		getBounds(): number[][] | null;

		getIterator(): IIterator;

		getLength(): number;

		getPixelBounds(): number[][] | null;

		indexOf(object: IGeoObject): number;

		remove(child: IGeoObject): this;

		removeAll(): this;

		set(index: number, child: IGeoObject): this;

		splice(index: number, length: number): this;
	}

	export interface IGeoObjectSequence extends ICustomizable, IEventEmitter, IParentOnMap {
		each(callback: (geoObject: IGeoObject) => void, context?: object): void;

		get(index: number): IGeoObject;

		getBounds(): number[][] | null;

		getIterator(): IIterator;

		getLength(): number;

		getPixelBounds(): number[][] | null;

		indexOf(geoObject: IGeoObject): number;
	}

	export interface IHintManager<T> extends IPopupManager<T> { //tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface IIterator {
		getNext(): object | null;
	}

	export interface ILayer extends IChildOnMap, ICustomizable, IEventEmitter {
		getBrightness?(): number;

		getCopyrights?(coords: number[], zoom: number): Promise<(string | HTMLElement)[]>;

		getZoomRange?(point: number[]): Promise<number[]>;
	}

	export interface ILayout extends IDomEventEmitter {
		// new (data: object);
		destroy(): void;

		getData(): object;

		getParentElement(): HTMLElement;

		getShape(): IShape | null;

		isEmpty(): boolean;

		setData(data: object): void;

		setParentElement(parent: HTMLElement | null): void;
	}

	export interface ILineStringGeometry extends IGeometry, ILineStringGeometryAccess {  //tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface ILineStringGeometryAccess extends IFreezable {
		get(index: number): number[];

		getChildGeometry(index: number): IPointGeometryAccess;

		getClosest(anchorPosition: number[]): object;

		getCoordinates(): number[][];

		getLength(): number;

		insert(index: number, coordinates: number[][]): ILineStringGeometryAccess;

		remove(index: number): number[];

		set(index: number, coordinates: number[]): ILineStringGeometryAccess;

		setCoordinates(coordinates: number[]): ILineStringGeometryAccess;

		splice(index: number, length: number): number[][];
	}

	export interface IMapAction extends IEventEmitter {
		begin(mapActionManager: map.action.Manager): void;

		end(): void;
	}

	export interface IMapObjectCollection extends ICollection, ICustomizable, IParentOnMap {  //tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface IMultiRouteModelJson {
		params: IMultiRouteParams;
		referencePoints: IMultiRouteReferencePoint[];
	}

	export interface IMultiRouteParams {
		avoidTrafficJams?: boolean;
		boundedBy?: number[][] | null;
		requestSendInterval?: string | number;
		results?: number;
		reverseGeocoding?: boolean;
		routingMode?: "auto" | "masstransit" | "pedestrian";
		searchCoordOrder?: string;
		strictBounds?: boolean;
		viaIndexes?: number[];
	}

	export type IMultiRouteReferencePoint = string | number[] | geometry.Point;

	export interface IOptionManager extends IChild<IOptionManager>, IEventEmitter, IFreezable {
		get(key: string, defaultValue: object): object;

		getAll(): object;

		getName(): string;

		getNative(key: string): object;

		resolve(key: string, name?: string): object;

		setName(name: string): void;
	}

	export interface IOverlay extends ICustomizable, IDomEventEmitter {
		getData(): object;

		getGeometry(): IPixelGeometry;

		getMap(): Map | null;

		getShape(): IShape | null;

		isEmpty(): boolean;

		setData(data: object): void;

		setGeometry(geometry: IPixelGeometry): void;

		setMap(map: Map | null): void;
	}

	export interface IPane extends IEventEmitter {
		destroy(): void;

		getElement(): HTMLElement;

		getMap(): Map;

		getOverflow(): "visible" | "hidden";

		getZIndex(): number;
	}

	export interface IPanorama {
		getAngularBBox(): number[];

		getConnectionArrows(): IPanoramaConnectionArrow[];

		getConnectionMarkers(): IPanoramaConnectionMarker[];

		getCoordSystem(): ICoordSystem;

		getDefaultDirection(): number[];

		getDefaultSpan(): number[];

		getGraph(): IPanoramaGraph | null;

		getMarkers(): IPanoramaMarker[];

		getName(): string;

		getPosition(): number[];

		getTileLevels(): IPanoramaTileLevel[];

		getTileSize(): number[];
	}

	export interface IPanoramaConnection {
		getConnectedPanorama(): Promise<IPanorama>;
	}

	export interface IPanoramaConnectionArrow extends IPanoramaConnection {
		properties: data.Manager;

		getDirection(): number[];

		getPanorama(): IPanorama;
	}

	export interface IPanoramaConnectionMarker extends IPanoramaConnection, IPanoramaMarker {  //tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface IPanoramaGraph {
		getEdges(): IPanoramaGraphEdge[];

		getNodes(): IPanoramaGraphEdge[];

		getPanorama(): IPanorama;
	}

	export interface IPanoramaGraphEdge {
		getEndNodes(): IPanoramaGraphNode[];
	}

	export interface IPanoramaGraphNode {
		getConnectedPanorama(): Promise<IPanorama>;
	}

	export interface IPanoramaMarker {
		properties: data.Manager;

		getIconSet(): Promise<IPanoramaMarkerIconSet>;

		getPanorama(): IPanorama;

		getPosition(): number[];
	}

	export interface IPanoramaMarkerIcon {
		image: HTMLCanvasElement | HTMLImageElement;
		offset: number[];
	}

	export interface IPanoramaMarkerIconSet {
		default: IPanoramaMarkerIcon | null;
		expanded: IPanoramaMarkerIcon | null;
		expandedHovered: IPanoramaMarkerIcon | null;
		hovered: IPanoramaMarkerIcon | null;
	}

	export interface IPanoramaTileLevel {
		getImageSize(): number[];

		getTileUrl(x: number, y: number): string;
	}

	export interface IParentOnMap {
		getMap(): Map;
	}

	export interface IPixelCircleGeometry extends IPixelGeometry {
		getCoordinates(): number[];

		getRadius(): number;
	}

	export interface IPixelLineStringGeometry extends IPixelGeometry {
		getClosest(anchorPosition: number[]): object;

		getCoordinates(): number[][];

		getLength(): number;
	}

	export interface IPixelGeometry extends IBaseGeometry {
		equals(geometry: IPixelGeometry): boolean;

		getMetaData(): object;

		scale(factor: number): IPixelGeometry;

		shift(offset: number[]): IPixelGeometry;
	}

	export interface IPointGeometry extends IGeometry, IPointGeometryAccess { //tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface IPointGeometryAccess {
		getCoordinates(): number[] | null;

		setCoordinates(coordinates: number[] | null): this;
	}

	export interface IPopup<T> extends ICustomizable, IEventEmitter {
		close(force?: boolean): Promise<T>;

		getData(): object;

		getOverlay(): Promise<IOverlay>;

		getOverlaySync(): IOverlay;

		getPosition(): number[];

		isOpen(): boolean;

		open(position: number[], data: object | string | HTMLElement): Promise<T>;

		setData(data: object | string | HTMLElement): Promise<T>;

		setPosition(position: number[]): Promise<T>;
	}

	export interface IPopupManager<T> extends IEventEmitter {
		close(force?: boolean): Promise<T>;

		destroy(): void;

		getData(): object | null;

		getOptions(): IOptionManager | null;

		getOverlay(): Promise<IOverlay | null>;

		getOverlaySync(): IOverlay | null;

		getPosition(): number[] | null;

		isOpen(): boolean;

		open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<T>;

		setData(data: object | string | HTMLElement): Promise<T>;

		setOptions(options: object): Promise<T>;

		setPosition(position: number[]): Promise<T>;
	}

	export interface IPositioningContext {
		fromClientPixels(clientPixelPoint: number[]): number[];

		getZoom(): number;

		toClientPixels(globalPixelPoint: number[]): number[];
	}

	export interface IProjection {
		fromGlobalPixels(globalPixelPoint: number[], zoom: number): number[];

		getCoordSystem(): ICoordSystem;

		isCycled(): boolean[];

		toGlobalPixels(coordPoint: number[], zoom: number): number[];
	}

	export interface IRoutePanel {
		options: IOptionManager;
		state: IDataManager;

		getRoute(): multiRouter.MultiRoute;

		switchPoints(): void;
	}

	export interface ISearchControlLayout extends IExpandableControlLayout { //tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface ISelectableControl extends IControl {
		deselect(): void;

		disable(): void;

		enable(): void;

		isEnabled(): boolean;

		isSelected(): boolean;

		select(): void;
	}

	export interface ISelectableControlLayout extends ILayout { //tslint:disable-line no-empty-interface no-empty-interfaces
	}

	export interface IShape {
		contains(position: number[]): boolean;

		equals(shape: IShape): boolean;

		getBounds(): number[][] | null;

		getGeometry(): IPixelGeometry;

		getType(): string;

		scale(factor: number): IShape;

		shift(offset: number[]): IShape;
	}
}
