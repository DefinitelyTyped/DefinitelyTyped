// Type definitions for BaiduMap v3.0
// Project: http://lbsyun.baidu.com/index.php?title=jspopular3.0
// Definitions by: Codemonk <http://www.youxianxueche.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
Copyright [Codemonk] [Codemonk@live.cn]

This project is licensed under the MIT license.
Copyrights are respective of each contributor listed at the beginning of each definition file.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************** */

/// <reference path="./baidumap.base.d.ts" />
/// <reference path="./baidumap.core.d.ts" />
declare namespace BMap {
	interface LocalSearchSearchOptions {
		forceLocal: boolean;
		customData: any;
	}
	class LocalSearch {
		constructor(location: Map | Point | string, opts?: LocalSearchOptions);
		search(keyword: string | string[], option?: LocalSearchSearchOptions): void;
		searchInBounds(keyword: string | string[], bounds: Bounds, option?: {
			customData: any;
		}): void;
		searchNearby(keyword: string | string[], center: LocalResultPoi | string | Point, radius: number, option?: {
			customData: any;
		}): void;
		getResults(): LocalResult | LocalResult[];
		clearResults(): void;
		gotoPage(page: number): void;
		enableAutoViewport(): void;
		disableAutoViewport(): void;
		enableFirstResultSelection(): void;
		disableFirstResultSelection(): void;
		setLocation(location: Map | Point | string): void;
		setPageCapacity(capacity: number): void;
		getPageCapacity(): number;
		setSearchCompleteCallback(callback: (results: LocalResult | LocalResult[]) => void): void;
		setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
		setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
		setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
		getStatus(): ServiceStatusCode;
	}
	type LineType = number;
	interface WalkingRouteResult {
		city: string;
		getStart(): LocalResultPoi;
		getEnd(): LocalResultPoi;
		getNumPlans(): number;
		getPlan(i: number): RoutePlan;
	}
	class BusLineSearch {
		constructor(location: Map | Point | string, opts?: BusLineSearchOptions);
		getBusList(keyword: string): void;
		getBusLine(busLstItem: BusListItem): void;
		clearResults(): void;
		enableAutoViewport(): void;
		disableAutoViewport(): void;
		setLocation(location: Map | Point | string): void;
		getStatus(): ServiceStatusCode;
		toString(): string;
		setGetBusListCompleteCallback(callback: (rs: BusListResult) => void): void;
		setGetBusLineCompleteCallback(callback: (rs: BusLine) => void): void;
		setBusListHtmlSetCallback(callback: (container: HTMLElement) => void): void;
		setBusLineHtmlSetCallback(callback: (container: HTMLElement) => void): void;
		setPolylinesSetCallback(callback: (ply: Polyline) => void): void;
		setMarkersSetCallback(callback: (markers: Marker[]) => void): void;
	}
	interface LocalSearchOptions {
		renderOptions?: RenderOptions;
		onMarkersSet?: (pois: LocalResultPoi[]) => void;
		onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
		onResultsHtmlSet?: (container: HTMLElement) => void;
		pageCapacity?: number;
		onSearchComplete?: (results: LocalResult[]) => void;
	}
	class DrivingRoute {
		constructor(location: Map | Point | string, opts?: DrivingRouteOptions);
		search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void;
		getResults(): DrivingRouteResult;
		clearResults(): void;
		enableAutoViewport(): void;
		disableAutoViewport(): void;
		setLocation(location: Map | Point | string): void;
		setPolicy(policy: DrivingPolicy): void;
		setSearchCompleteCallback(callback: (results: DrivingRouteResult) => void): void;
		setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
		setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
		setPolylinesSetCallback(callback: (routes: Route[]) => void): void;
		setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
		getStatus(): ServiceStatusCode;
		toString(): string;
	}
	class Geocoder {
		constructor();
		getPoint(address: string, callback: (point: Point) => void, city: string): void;
		getLocation(point: Point, callback: (result: GeocoderResult) => void, opts?: LocationOptions): void;
	}
	interface BusLineSearchOptions {
		renderOptions?: RenderOptions;
		onGetBusListComplete?: (rs: BusListResult) => void;
		onGetBusLineComplete?: (rs: BusLine) => void;
		onBusListHtmlSet?: (container: HTMLElement) => void;
		onBusLineHtmlSet?: (container: HTMLElement) => void;
		onPolylinesSet?: (ply: Polyline) => void;
		onMarkersSet?: (sts: Marker[]) => void;
	}
	interface CustomData {
		geotableId: number;
		tags: string;
		filter: string;
	}
	interface DrivingRouteOptions {
		renderOptions?: RenderOptions;
		policy?: DrivingPolicy;
		onSearchComplete?: (results: DrivingRouteResult) => void;
		onMarkersSet?: (pois: LocalResultPoi[]) => void;
		onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
		onPolylinesSet?: (routes: Route[]) => void;
		onResultsHtmlSet?: (container: HTMLElement) => void;
	}
	interface GeocoderResult {
		point: Point;
		address: string;
		addressComponents: AddressComponent;
		surroundingPoi: LocalResultPoi[];
		business: string;
	}
	interface BusListResult {
		keyword: string;
		city: string;
		moreResultsUrl: string;
		getNumBusList(): number;
		getBusListItem(i: number): BusListItem;
	}
	interface RenderOptions {
		map: Map;
		panel?: string | HTMLElement;
		selectFirstResult?: boolean;
		autoViewport?: boolean;
		highlightMode?: HighlightModes;
	}
	type DrivingPolicy = number;
	interface AddressComponent {
		streetNumber: string;
		street: string;
		district: string;
		city: string;
		province: string;
	}
	interface BusLine {
		name: string;
		startTime: string;
		endTime: string;
		company: string;
		getNumBusStations(): string;
		getBusStation(i: number): BusStation;
		getPath(): Point[];
		getPolyline(): Polyline;
	}
	interface LocalResult {
		keyword: string;
		center: LocalResultPoi;
		radius: number;
		bounds: Bounds;
		city: string;
		moreResultsUrl: string;
		province: string;
		suggestions: string[];
		getPoi(i: number): LocalResultPoi;
		getCurrentNumPois(): number;
		getNumPois(): number;
		getNumPages(): number;
		getPageIndex(): number;
		getCityList(): any[];
	}
	interface DrivingRouteResult {
		policy: DrivingPolicy;
		city: string;
		moreResultsUrl: string;
		taxiFare: TaxiFare;
		getStart(): LocalResultPoi;
		getEnd(): LocalResultPoi;
		getNumPlans(): number;
		getPlan(i: number): RoutePlan;
	}
	interface LocationOptions {
		poiRadius?: number;
		numPois?: number;
	}
	interface BusListItem {
		name: string;
	}
	interface LocalResultPoi {
		title: string;
		point: Point;
		url: string;
		address: string;
		city: string;
		phoneNumber: string;
		postcode: string;
		type: PoiType;
		isAccurate: boolean;
		province: string;
		tags: string[];
		detailUrl: string;
	}
	interface TaxiFare {
		day: TaxiFareDetail;
		night: TaxiFareDetail;
		distance: number;
		remark: string;
	}
	class LocalCity {
		constructor(opts?: LocalCityOptions);
		get(callback: (result: LocalCityResult) => void): void;
	}
	interface BusStation {
		name: string;
		position: Point;
	}
	type PoiType = number;
	interface TaxiFareDetail {
		initialFare: number;
		unitFare: number;
		totalFare: number;
	}
	interface LocalCityOptions {
		renderOptions?: RenderOptions;
	}
	class Autocomplete {
		constructor(opts?: AutocompleteOptions);
		show(): void;
		hide(): void;
		setTypes(types: string[]): void;
		setLocation(location: string | Map | Point): void;
		search(keywords: string): void;
		getResults(): AutocompleteResult;
		setInputValue(keyword: string): void;
		dispose(): void;
		onconfirm: (event: { type: string, target: any, item: any }) => void;
		onhighlight: (event: { type: string, target: any, fromitem: any, toitem: any }) => void;
	}
	class TransitRoute {
		constructor(location: Map | Point | string, opts?: TransitRouteOptions);
		search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void;
		getResults(): TransitRouteResult;
		clearResults(): void;
		enableAutoViewport(): void;
		disableAutoViewport(): void;
		setPageCapacity(capacity: number): void;
		setLocation(location: Map | Point | string): void;
		setPolicy(policy: TransitPolicy): void;
		setSearchCompleteCallback(callback: (results: TransitRouteResult) => void): void;
		setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
		setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
		setPolylinesSetCallback(callback: (lines: Line[], routes: Route[]) => void): void;
		setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
		getStatus(): ServiceStatusCode;
		toString(): string;
	}
	interface RoutePlan {
		getNumRoutes(): number;
		getRoute(i: number): Route;
		getDistance(format?: boolean): string | number;
		getDuration(format?: boolean): string | number;
		getDragPois(): LocalResultPoi[];
	}
	interface LocalCityResult {
		center: Point;
		level: number;
		name: string;
	}
	interface AutocompleteOptions {
		location?: string | Map | Point;
		types?: string[];
		onSearchComplete?: (result: AutocompleteResult) => void;
		input?: string | HTMLElement;
	}
	interface TransitRouteOptions {
		renderOptions?: RenderOptions;
		policy?: TransitPolicy;
		pageCapacity?: number;
		onSearchComplete?: (result: TransitRouteResult) => void;
		onMarkersSet?: (pois: LocalResultPoi[], transfers: LocalResultPoi[]) => void;
		onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
		onPolylinesSet?: (lines: Line[]) => void;
		onResultsHtmlSet?: (container: HTMLElement) => void;
	}
	interface Route {
		getNumRoutes(): number;
		getStep(i: number): Step;
		getDistance(format?: boolean): string | number;
		getIndex(): number;
		getPolyline(): Polyline;
		getPoints(): Point[];
		getPath(): Point[];
		getRouteType(): RouteType;
	}
	class TrafficControl {
		constructor();
		setPanelOffset(offset: Size): void;
		show(): void;
		hide(): void;
	}
	interface AutocompleteResultPoi {
		province: string;
		City: string;			// wtf
		district: string;
		street: string;
		streetNumber: string;
		business: string;
	}
	type TransitPolicy = number;
	type RouteType = number;
	class Geolocation {
		constructor();
		getCurrentPosition(callback: (result: GeolocationResult) => void, opts?: PositionOptions): void;
		getStatus(): ServiceStatusCode;
	}
	interface AutocompleteResult {
		keyword: string;
		getPoi(i: number): AutocompleteResultPoi;
		getNumPois(): number;
	}
	interface TransitRouteResult {
		policy: TransitPolicy;
		city: string;
		moreResultsUrl: string;
		getStart(): LocalResultPoi;
		getEnd(): LocalResultPoi;
		getNumPlans(): number;
		getPlan(i: number): TransitRoutePlan;
	}
	interface Step {
		getPoint(): Point;
		getPosition(): Point;
		getIndex(): number;
		getDescription(includeHtml: boolean): string;
		getDistance(format?: boolean): string | number;
	}
	interface GeolocationResult {
		point: Point;
		accuracy: number;
	}
	class Boundary {
		constructor();
		get(name: string, callback: (result: string[]) => void): void;
	}
	class Convertor {
		translate(points: Point[], from: number, to: number, callback: (result: {
			points: Point[];
			status: number;
		}) => void): void;
	}
	interface TransitRoutePlan {
		getNumLines(): number;
		getLine(i: number): Line;
		getNumRoutes(): number;
		getRoute(i: number): Route;
		getDistance(format?: boolean): string | number;
		getDuration(format?: boolean): string | number;
		getDescription(includeHtml: boolean): string;
	}
	class WalkingRoute {
		constructor(location: Map | Point | string, opts?: WalkingRouteOptions);
		search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void;
		getResults(): WalkingRouteResult;
		clearResults(): void;
		enableAutoViewport(): void;
		disableAutoViewport(): void;
		setLocation(location: Map | Point | string): void;
		setSearchCompleteCallback(callback: (result: WalkingRouteResult) => void): void;
		setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
		setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
		setPolylinesSetCallback(callback: (routes: Route[]) => void): void;
		setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
		getStatus(): ServiceStatusCode;
		toString(): string;
	}
	interface PositionOptions {
		enableHighAccuracy?: boolean;
		timeout?: number;
		maximumAge?: number;
	}
	interface Line {
		title: string;
		type: LineType;
		getNumViaStops(): number;
		getGetOnStop(): LocalResultPoi;
		getGetOffStop(): LocalResultPoi;
		getPoints(): Point[];
		getPath(): Point[];
		getPolyline(): Polyline;
		getDistance(format?: boolean): string | number;
	}
	interface WalkingRouteOptions {
		renderOptions?: RenderOptions;
		onSearchComplete?: (result: WalkingRouteResult) => void;
		onMarkersSet?: (pois: LocalResultPoi[]) => void;
		onPolylinesSet?: (routes: Route[]) => void;
		onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
		onResultsHtmlSet?: (container: HTMLElement) => void;
	}
	type HighlightModes = number;
	type ServiceStatusCode = number;
}

declare const BMAP_LINE_TYPE_BUS: BMap.LineType;
declare const BMAP_LINE_TYPE_SUBWAY: BMap.LineType;
declare const BMAP_LINE_TYPE_FERRY: BMap.LineType;

declare const BMAP_DRIVING_POLICY_LEAST_TIME: BMap.DrivingPolicy;
declare const BMAP_DRIVING_POLICY_LEAST_DISTANCE: BMap.DrivingPolicy;
declare const BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: BMap.DrivingPolicy;

declare const BMAP_POI_TYPE_NORMAL: BMap.PoiType;
declare const BMAP_POI_TYPE_BUSSTOP: BMap.PoiType;
declare const BMAP_POI_TYPE_SUBSTOP: BMap.PoiType;

declare const BMAP_TRANSIT_POLICY_LEAST_TIME: BMap.TransitPolicy;
declare const BMAP_TRANSIT_POLICY_LEAST_TRANSFER: BMap.TransitPolicy;
declare const BMAP_TRANSIT_POLICY_LEAST_WALKING: BMap.TransitPolicy;
declare const BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: BMap.TransitPolicy;

declare const BMAP_ROUTE_TYPE_DRIVING: BMap.RouteType;
declare const BMAP_ROUTE_TYPE_WALKING: BMap.RouteType;

declare const BMAP_HIGHLIGHT_STEP: BMap.HighlightModes;
declare const BMAP_HIGHLIGHT_ROUTE: BMap.HighlightModes;

declare const BMAP_STATUS_SUCCESS: BMap.ServiceStatusCode;
declare const BMAP_STATUS_CITY_LIST: BMap.ServiceStatusCode;
declare const BMAP_STATUS_UNKNOWN_LOCATION: BMap.ServiceStatusCode;
declare const BMAP_STATUS_UNKNOWN_ROUTE: BMap.ServiceStatusCode;
declare const BMAP_STATUS_INVALID_KEY: BMap.ServiceStatusCode;
declare const BMAP_STATUS_INVALID_REQUEST: BMap.ServiceStatusCode;
