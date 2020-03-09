// Type definitions for google-maps-react 2.0
// Project: https://github.com/fullstackreact/google-maps-react#readme
// Definitions by: Gordon Burgett <https://github.com/gburgett>
//                 Justin Powell <https://github.com/jpowell>
//                 Paito Anderson <https://github.com/PaitoAnderson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import 'googlemaps';
import * as React from 'react';

export interface GoogleApiOptions {
  apiKey: string;
  libraries?: string[];
  client?: string;
  url?: string;
  version?: string;
  language?: string;
  region?: string;
  LoadingContainer?: any;
}
export type GoogleApiOptionsFunc = (props: any) => GoogleApiOptions;

type Omit<T1, T2> = Pick<T1, Exclude<keyof T1, keyof T2>>;

export type GoogleAPI = typeof google;
export function GoogleApiWrapper(opts: GoogleApiOptions | GoogleApiOptionsFunc):
  <TProps extends ProvidedProps>(ctor: React.ComponentType<TProps>) => React.ComponentType<Omit<TProps, ProvidedProps>>;

export interface ProvidedProps {
  google: GoogleAPI;
  loaded?: boolean;
}

type mapEventHandler = (mapProps?: MapProps, map?: google.maps.Map, event?: any) => any;

export interface MapProps extends google.maps.MapOptions {
  google: GoogleAPI;
  loaded?: boolean;

  bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral;
  centerAroundCurrentLocation?: boolean;
  initialCenter?: google.maps.LatLngLiteral;

  visible?: boolean;

  onReady?: mapEventHandler;
  onClick?: mapEventHandler;
  onDragend?: mapEventHandler;
  onRecenter?: mapEventHandler;
  onBoundsChanged?: mapEventHandler;
  onCenterChanged?: mapEventHandler;
  onDblclick?: mapEventHandler;
  onDragstart?: mapEventHandler;
  onHeadingChange?: mapEventHandler;
  onIdle?: mapEventHandler;
  onMaptypeidChanged?: mapEventHandler;
  onMousemove?: mapEventHandler;
  onMouseover?: mapEventHandler;
  onMouseout?: mapEventHandler;
  onProjectionChanged?: mapEventHandler;
  onResize?: mapEventHandler;
  onRightclick?: mapEventHandler;
  onTilesloaded?: mapEventHandler;
  onTiltChanged?: mapEventHandler;
  onZoomChanged?: mapEventHandler;
}

type markerEventHandler = (props?: MarkerProps, marker?: google.maps.Marker, event?: any) => any;

export interface MarkerProps extends Partial<google.maps.MarkerOptions> {
  mapCenter?: google.maps.LatLng | google.maps.LatLngLiteral;

  onClick?: markerEventHandler;
  onDblclick?: markerEventHandler;
  onDragend?: markerEventHandler;
  onMousedown?: markerEventHandler;
  onMouseout?: markerEventHandler;
  onMouseover?: markerEventHandler;
  onMouseup?: markerEventHandler;
  onRecenter?: markerEventHandler;
}

export class Map extends React.Component<MapProps, any> {
}

export class Marker<P extends MarkerProps = MarkerProps, S = any> extends React.Component<P, S> {
  marker?: google.maps.Marker;

  renderMarker(): void;
  getMarker(): Promise<google.maps.Marker>;
}

export class Polygon extends React.Component<any, any> {
}

export class Polyline extends React.Component<any, any> {
}

export class Circle extends React.Component<any, any> {
}

export class HeatMap extends React.Component<any, any> {
}

export interface InfoWindowProps extends Partial<google.maps.InfoWindowOptions> {
  google?: typeof google;
  map?: google.maps.Map;
  marker?: google.maps.Marker;

  mapCenter?: google.maps.LatLng | google.maps.LatLngLiteral;
  visible?: boolean;

  onOpen?: () => void;
  onClose?: () => void;
}

export class InfoWindow<P extends InfoWindowProps = InfoWindowProps, S = any> extends React.Component<P, S> {
  renderInfoWindow(): void;
  openWindow(): void;
  updatePosition(): void;
  updateContent(): void;
  closeWindow(): void;
  renderChildren(): void;
}

export {};
