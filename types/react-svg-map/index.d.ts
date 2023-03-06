// Type definitions for react-svg-map 2.1
// Project: https://github.com/VictorCazanave/react-svg-map
// Definitions by: Nick Glazer <https://github.com/nickglazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export interface Location {
    path: string;
    id: string;
    name?: string | undefined;
}

export interface Map {
    viewBox: string;
    locations: Location[];
    label?: string | undefined;
}

export interface BaseMapProps {
    map: Map;
    className?: string | undefined;
    locationClassName?: string | ((...args: any[]) => any) | undefined;
    onLocationMouseOver?: ((...args: any[]) => any) | undefined;
    onLocationMouseOut?: ((...args: any[]) => any) | undefined;
    onLocationMouseMove?: ((...args: any[]) => any) | undefined;
    onLocationFocus?: ((...args: any[]) => any) | undefined;
    onLocationBlur?: ((...args: any[]) => any) | undefined;
    childrenBefore?: React.ReactElement | undefined;
    childrenAfter?: React.ReactElement | undefined;
}

export interface SVGMapProps extends BaseMapProps {
    role?: string | undefined;
    locationTabIndex?: string | ((...args: any[]) => any) | undefined;
    locationRole?: string | undefined;
    onLocationClick?: ((...args: any[]) => any) | undefined;
    onLocationKeyDown?: ((...args: any[]) => any) | undefined;
    isLocationSelected?: ((...args: any[]) => any) | undefined;
}

export interface OnChangeMapProps extends BaseMapProps {
    onChange?: ((...args: any[]) => any) | undefined;
}

export class CheckboxSVGMap extends React.Component<OnChangeMapProps> {}
export class RadioSVGMap extends React.Component<OnChangeMapProps> {}
export const SVGMap: React.FC<SVGMapProps>;
