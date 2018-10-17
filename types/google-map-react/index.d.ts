// Type definitions for google-map-react 0.23
// Project: https://github.com/istarkov/google-map-react
// Definitions by: Honza Brecka <https://github.com/honzabrecka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type BootstrapURLKeys = ({ key: string; } | { client: string; v: string; }) & { language?: string };

export interface MapTypeStyle {
  elementType?: string;
  featureType?: string;
  stylers: any[];
}

export interface MapOptions {
  // Any options from https://developers.google.com/maps/documentation/javascript/reference/3/#MapOptions
  // excluding 'zoom' and 'center' which get set via props.
  backgroundColor?: string;
  clickableIcons?: boolean;
  disableDefaultUI?: boolean;
  disableDoubleClickZoom?: boolean;
  draggable?: boolean;
  draggableCursor?: string;
  draggingCursor?: string;
  fullscreenControl?: boolean;
  fullscreenControlOptions?: {position: number};
  gestureHandling?: string;
  heading?: number;
  keyboardShortcuts?: boolean;
  mapTypeControl?: boolean;
  mapTypeControlOptions?: any;
  mapTypeId?: string;
  minZoom?: number;
  maxZoom?: number;
  noClear?: boolean;
  panControl?: boolean;
  panControlOptions?: {position: number};
  rotateControl?: boolean;
  rotateControlOptions?: {position: number};
  scaleControl?: boolean;
  scaleControlOptions?: any;
  scrollwheel?: boolean;
  streetView?: any;
  streetViewControl?: boolean;
  streetViewControlOptions?: {position: number};
  styles?: MapTypeStyle[];
  tilt?: number;
  zoomControl?: boolean;
  zoomControlOptions?: {position: number};
  minZoomOverride?: boolean; // Not a standard option; specific to google-map-react: https://github.com/google-map-react/google-map-react/pull/154
}

export interface Maps {
  Animation: any;
  ControlPosition: any;
  MapTypeControlStyle: any;
  MapTypeId: any;
  NavigationControlStyle: any;
  ScaleControlStyle: any;
  StrokePosition: any;
  SymbolPath: any;
  ZoomControlStyle: any;
  DirectionsStatus: any;
  DirectionsTravelMode: any;
  DirectionsUnitSystem: any;
  DistanceMatrixStatus: any;
  DistanceMatrixElementStatus: any;
  ElevationStatus: any;
  GeocoderLocationType: any;
  GeocoderStatus: any;
  KmlLayerStats: any;
  MaxZoomStatus: any;
  StreetViewStatus: any;
  TransitMode: any;
  TransitRoutePreference: any;
  TravelMode: any;
  UnitSystem: any;
}

export interface Bounds {
  nw: Coords;
  ne: Coords;
  sw: Coords;
  se: Coords;
}

export interface Point {
  x: number;
  y: number;
}

export interface Coords {
  lat: number;
  lng: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface ClickEventValue extends Point, Coords {
  event: any;
}

export interface ChangeEventValue {
  center: Coords;
  zoom: number;
  bounds: Bounds;
  marginBounds: Bounds;
  size: Size;
}

export interface Props {
  bootstrapURLKeys?: BootstrapURLKeys;
  defaultCenter?: Coords;
  center?: Coords;
  defaultZoom?: number;
  zoom?: number;
  hoverDistance?: number;
  options?: MapOptions | ((maps: Maps) => MapOptions);
  margin?: any[];
  debounced?: boolean;
  draggable?: boolean;
  layerTypes?: string[];
  onClick?(value: ClickEventValue): any;
  onChange?(value: ChangeEventValue): any;
  resetBoundsOnResize?: boolean;
  onChildClick?(hoverKey: any, childProps: any): void;
  onChildMouseEnter?(hoverKey: any, childProps: any): void;
  onChildMouseLeave?(hoverKey: any, childProps: any): void;
  onDrag?(args: any): void;
  onZoomAnimationStart?(args: any): void;
  onZoomAnimationEnd?(args: any): void;
  onMapTypeIdChange?(args: any): void;
  distanceToMouse?(pt: Point, mousePos: Point, markerProps?: object): number;
  googleMapLoader?(bootstrapURLKeys: any): void;
  onGoogleApiLoaded?(maps: { map: any, maps: any }): void;
  onTilesLoaded?(): void;
  yesIWantToUseGoogleMapApiInternals?: boolean;
}

export default class GoogleMapReact extends React.Component<Props> {}

export interface ChildComponentProps extends Coords {
  $hover?: boolean;
}
