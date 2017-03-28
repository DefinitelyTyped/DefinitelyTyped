// Type definitions for google-map-react 0.22
// Project: https://github.com/istarkov/google-map-react
// Definitions by: Honza Brecka <https://github.com/honzabrecka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';

export interface BootstrapURLKeys {
  key: string;
  language?: string;
}

export interface Options {
  styles?: any[];
  scrollwheel?: boolean;
  panControl?: boolean;
  mapTypeControl?: boolean,
  minZoomOverride?: boolean;
  minZoom?: number;
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

export interface Props {
  bootstrapURLKeys?: BootstrapURLKeys;
  defaultCenter?: [number, number] | { lat: number, lng: number };
  center?: [number, number] | { lat: number, lng: number };
  defaultZoom?: number;
  zoom?: number;
  hoverDistance?: number;
  options?: Options | ((maps: Maps) => Options);
  margin?: any[];
  debounced?: boolean;
  layerTypes?: string[];
  onClick?: ({x, y, lat, lng, event}: { x: number, y: number, lat: number, lng: number, event: any }) => any;
  onChange?: ({ center, zoom, bounds, marginBounds }: { center: [number, number], zoom: number, bounds: [number, number, number, number], marginBounds: [number, number, number, number] }) => any;
  resetBoundsOnResize?: boolean;
  onChildClick?: (hoverKey: any, childProps: any) => void;
  onChildMouseEnter?: (hoverKey: any, childProps: any) => void;
  onChildMouseLeave?: (hoverKey: any, childProps: any) => void;
  onZoomAnimationStart?: (args: any) => void;
  onZoomAnimationEnd?: (args: any) => void;
  onMapTypeIdChange?: (args: any) => void;
  distanceToMouse?: (pt: {x: number, y: number}, mousePos: {x: number, y: number}) => void;
  googleMapLoader?: (bootstrapURLKeys: any) => void;
  onGoogleApiLoaded?: ({map, maps}: { map: any, maps: any }) => void;
  yesIWantToUseGoogleMapApiInternals?: boolean;
}

export default class GoogleMapReact extends React.Component<Props, void> {}

export interface ChildComponentProps {
  lat: number;
  lng: number;
  $hover?: boolean;
}
