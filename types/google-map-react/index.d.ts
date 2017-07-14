// Type definitions for google-map-react 0.23
// Project: https://github.com/istarkov/google-map-react
// Definitions by: Honza Brecka <https://github.com/honzabrecka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export type BootstrapURLKeys = ({ key: string; } | { client: string; v: string; }) & { language?: string };

export interface Options {
  styles?: any[];
  scrollwheel?: boolean;
  panControl?: boolean;
  mapTypeControl?: boolean;
  minZoomOverride?: boolean;
  minZoom?: number;
  maxZoom?: number;
  gestureHandling?: string;
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
  nw: number;
  ne: number;
  sw: number;
  se: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface Coords {
  lat: number;
  lng: number;
}

export interface ClickEventValue extends Point, Coords {
  event: any;
}

export interface ChangeEventValue {
  center: Coords;
  zoom: number;
  bounds: Bounds;
  marginBounds: Bounds;
}

export interface Props {
  bootstrapURLKeys?: BootstrapURLKeys;
  defaultCenter?: Coords;
  center?: Coords;
  defaultZoom?: number;
  zoom?: number;
  hoverDistance?: number;
  options?: Options | ((maps: Maps) => Options);
  margin?: any[];
  debounced?: boolean;
  layerTypes?: string[];
  onClick?(value: ClickEventValue): any;
  onChange?(value: ChangeEventValue): any;
  resetBoundsOnResize?: boolean;
  onChildClick?(hoverKey: any, childProps: any): void;
  onChildMouseEnter?(hoverKey: any, childProps: any): void;
  onChildMouseLeave?(hoverKey: any, childProps: any): void;
  onZoomAnimationStart?(args: any): void;
  onZoomAnimationEnd?(args: any): void;
  onMapTypeIdChange?(args: any): void;
  distanceToMouse?(pt: Point, mousePos: Point): void;
  googleMapLoader?(bootstrapURLKeys: any): void;
  onGoogleApiLoaded?(maps: { map: any, maps: any }): void;
  yesIWantToUseGoogleMapApiInternals?: boolean;
}

export default class GoogleMapReact extends React.Component<Props> {}

export interface ChildComponentProps extends Coords {
  $hover?: boolean;
}
