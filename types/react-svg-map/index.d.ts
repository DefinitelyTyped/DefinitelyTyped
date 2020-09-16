// Type definitions for react-svg-map 2.1
// Project: https://github.com/VictorCazanave/react-svg-map
// Definitions by: Nick Glazer <https://github.com/nickglazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export interface Location {
    path: string;
    id: string;
    name?: string;
}

export interface Map {
    viewBox: string;
    locations: Location[];
    label?: string;
}

export interface BaseMapProps {
    map: Map;
    className?: string;
    locationClassName?: string | ((...args: any[]) => any);
    onLocationMouseOver?: (...args: any[]) => any;
    onLocationMouseOut?: (...args: any[]) => any;
    onLocationMouseMove?: (...args: any[]) => any;
    onLocationFocus?: (...args: any[]) => any;
    onLocationBlur?: (...args: any[]) => any;
    childrenBefore?: React.ReactElement;
    childrenAfter?: React.ReactElement;
}

export interface SVGMapProps extends BaseMapProps {
    role?: string;
    locationTabIndex?: string | ((...args: any[]) => any);
    locationRole?: string;
    onLocationClick?: (...args: any[]) => any;
    onLocationKeyDown?: (...args: any[]) => any;
    isLocationSelected?: (...args: any[]) => any;
}

export interface OnChangeMapProps extends BaseMapProps {
    onChange?: (...args: any[]) => any;
}

export class CheckboxSVGMap extends React.Component<OnChangeMapProps> {}
export class RadioSVGMap extends React.Component<OnChangeMapProps> {}
export const SVGMap: React.SFC<SVGMapProps>;
