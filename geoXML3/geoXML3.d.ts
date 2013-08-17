/// <reference path="google.maps.d.ts" />

// Type definitions for the GeoXML3 KML parser library, r106
// Project: https://code.google.com/p/geoxml3/ 
// Definitions by: Richard Hauer <http://au.linkedin.com/in/richardhauer>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// TODO: JSDoc support (http://blogs.msdn.com/b/typescript/archive/2013/01/21/announcing-typescript-0-8-2.aspx)

//#region Delegates
interface IGeoXML3AfterParseDelegate {
	( docset: IGeoXML3Document[] ): void;
}
interface IGeoXML3CreateMarkerDelegate {
	( placemark: IGeoXML3Placemark, doc: IGeoXML3Document ): google.maps.Marker;
}
interface IGeoXML3CreatePolygonDelegate {
	( placemark: IGeoXML3Placemark, doc: IGeoXML3Document ): google.maps.Polygon;
}
interface IGeoXML3CreatePolylineDelegate {
	( placemark: IGeoXML3Placemark, doc: IGeoXML3Document ): google.maps.MVCObject;
}
interface IGeoXML3FailedParseDelegate {
	( doc: IGeoXML3Document ): void;
}
interface IGeoXML3PlacemarkClickDelegate {
	( e: google.maps.MouseEvent, placemark: IGeoXML3Placemark ): void;
}
interface IGeoXML3PlacemarkParseDelegate {
	( node: Node, placemark: IGeoXML3Placemark ): void;
}
//#endregion

//#region Options
interface IGeoXML3MarkerOptions extends google.maps.MarkerOptions {
	onPlacemarkClick?: IGeoXML3PlacemarkClickDelegate;
}
interface IGeoXML3ParserOptions {
	map: google.maps.Map;
	markerOptions?: IGeoXML3MarkerOptions;
	polylineOptions?: google.maps.PolylineOptions;
	polygonOptions?: google.maps.PolygonOptions;
	afterParse?: IGeoXML3AfterParseDelegate;
	failedParse?: IGeoXML3FailedParseDelegate;
	processStyles?: boolean;
	pmParseFn?: IGeoXML3PlacemarkParseDelegate;
	suppressInfoWindows?: boolean;
	infoWindowOptions?: google.maps.InfoWindowOptions;
	infoWindow?: google.maps.InfoWindow;
	// overlayOptions
	singleInfoWindow?: boolean;
	xhrTimeout?: number;
	createMarker?: IGeoXML3CreateMarkerDelegate;
	createPolygon?: IGeoXML3CreatePolygonDelegate;
	createPolyline?: IGeoXML3CreatePolylineDelegate;
	// createOverlay
	zoom: boolean;
}
//#endregion

//#region JS representation of KML elements
interface IGeoXML3Bounds {
	north: number;
	east: number;
	south: number;
	west: number;
}
interface IGeoXML3Coordinate {
	lat: number;
	lng: number;
	alt: number;
}
interface IGeoXML3CoordinateList {
	coordinates: IGeoXML3Coordinate[];
}
interface IGeoXML3Document {
	reload: boolean;		// private
	baseUrl: string;	// private
	url: string;
	internals: any;		// private?
	placemarks: IGeoXML3Placemark[];
	bounds: google.maps.LatLngBounds;
	groundoverlays: IGeoXML3GroundOverlay[];
	//ggroundoverlays	// ProjectedOverlay[]
	gpolygons: google.maps.Polygon[];
	gpolylines: google.maps.Polyline[];
	markers: google.maps.Marker[];
	styles: IGeoXML3Style[];
}
interface IGeoXML3GroundOverlay {
	name: string;
	description: string;
	icon: string;
	latLonBox: IGeoXML3Bounds;
}
interface IGeoXML3Placemark {
	LineString?: IGeoXML3CoordinateList[];
	Polygon?: IGeoXML3Polygon[];
	latlng?: google.maps.LatLng;
	Point?: IGeoXML3CoordinateList;
	description?: string;
	style?: IGeoXML3Style;
	styleUrl?: string;
	id?: string;
	name: string;
	marker: google.maps.Marker;
}
interface IGeoXML3Polygon {
	outerBoundaryIs: IGeoXML3CoordinateList;
	innerBoundaryIs: IGeoXML3CoordinateList;
}
interface IGeoXML3StyleMap {
	// this is an associative array of styles
	normal?: IGeoXML3Style;
	highlight?: IGeoXML3Style;
}
interface IGeoXML3Style {
	color?: string;
	width?: number;
	fill?: boolean;
	outline?: boolean;
	fillcolor?: string;
	scale?: number;
	href?: string;
	map?: IGeoXML3StyleMap;
	icon?: google.maps.MarkerImage;
	shadow?: google.maps.MarkerImage;
}
//#endregion

//#region Main API elements
declare class MultiGeometry extends google.maps.MVCObject {
	constructor( any );
	polylines: google.maps.Polyline[];
}
declare class GeoXML3Parser {
	constructor( options: IGeoXML3ParserOptions );

	defaultStyle: IGeoXML3Style;

	options: IGeoXML3ParserOptions;
	docs: IGeoXML3Document[];

	parse( url: string, docSet?: IGeoXML3Document[] ): void;
	parse( urls: string[], docSet?: IGeoXML3Document[] ): void;
	parseKmlString( kml: string, docSet?: any ): void;

	hideDocument( doc?: IGeoXML3Document ): void;
	showDocument( doc?: IGeoXML3Document ): void;
	processStyles();
	createMarker( placemark: IGeoXML3Placemark, doc: IGeoXML3Document ): google.maps.Marker;
	//createOverlay(); // this is a ProjectedOverlay that requires an additional library
	createPolyline( placemark: IGeoXML3Placemark, doc: IGeoXML3Document ): google.maps.MVCObject;  // actually a Polyline or MultiGeometry; would be better if there was 2 methods here
	createPolygon( placemark: IGeoXML3Placemark, doc: IGeoXML3Document ): google.maps.Polygon;
}
interface IGeoXML3 {
	parser: GeoXML3Parser;
}
//#endregion

declare var geoXML3: IGeoXML3;