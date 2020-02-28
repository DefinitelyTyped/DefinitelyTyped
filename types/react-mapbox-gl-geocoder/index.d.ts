// Type definitions for react-mapbox-gl-geocoder1.1
// Project: https://github.com/groinder/react-mapbox-gl-geocoder/
// Definitions by: Addis Rengel Sempertegui <https://github.com/LuaXD>
// Definitions:    Definitely Typed <https://github.com/DefinitelyTyped>
// TypeScript Version: 3.0

import * as React from 'react';

export default class Geocoder extends React.Component<GeocoderProps> {
  debounceTimeout: any;
  state: any;
  getDerivedStateFromProps(nextProps: any, state: any) : any;
  onChange(event: any) : void;
  onSelected(item: any) : void;
  showResults() : void;
  hideResults() : void;
}
export interface GeocoderProps  {
    timeout: number,
    queryParams: object,
    viewport: object,
    onSelected: Function,
    transitionDuration: number,
    hideOnSelect: boolean,
    pointZoom: number,
    mapboxApiAccessToken: string,
    formatItem: Function,
    className: string,
    inputComponent: Function,
    itemComponent: Function,
    limit: number,
    localGeocoder: Function,
    localOnly: boolean,
    updateInputOnSelect: boolean,
    initialInputValue: string
};

