// Type definitions for react-geosuggest 2.7
// Project: https://github.com/ubilabs/react-geosuggest
// Definitions by: Brad Menchl <https://github.com/brmenchl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="googlemaps" />

import { Component, InputHTMLAttributes } from "react";

export default class Geosuggest extends Component<GeosuggestProps> {
    focus(): void;
    blur(): void;
    update(value: string): void;
    clear(): void;
    selectSuggest(value?: Suggest): void;
}

// Replace with Exclude once on 2.8+
export type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never, [x: number]: never })[keyof T]>;

export interface GeosuggestProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'style'> {
    placeholder?: string;
    initialValue?: string;
    className?: string;
    style?: Styles;
    inputClassName?: string;
    disabled?: boolean;
    location?: google.maps.LatLng;
    radius?: number;
    bounds?: google.maps.LatLngBounds;
    country?: string | string[];
    types?: QueryType[];
    fixtures?: Fixture[];
    maxFixtures?: number;
    googleMaps?: typeof google.maps;
    ignoreEnter?: boolean;
    ignoreTab?: boolean;
    queryDelay?: number;
    minLength?: number;
    highlightMatch?: boolean;
    onFocus?(value: any): void;
    onBlur?(value: any): void;
    onChange?(value: any): void;
    onKeyDown?(event: any): void;
    onKeyPress?(event: any): void;
    onSuggestSelect?(suggest: Suggest): void;
    onUpdateSuggests?(suggests: any, activeSuggest: any): void;
    onActivateSuggest?(suggest: Suggest): void;
    onSuggestNoResults?(userInput: string): void;
    getSuggestLabel?(googleSuggest: google.maps.places.AutocompletePrediction): string;
    renderSuggestItem?(googleSuggest: google.maps.places.AutocompletePrediction): any;
    skipSuggest?(googleSuggest: google.maps.places.AutocompletePrediction): boolean;
    autoActivateFirstSuggest?: boolean;
    label?: string;
    suggestsClassName?: string;
    suggestsHiddenClassName?: string;
    suggestItemClassName?: string;
    suggestItemActiveClassName?: string;
    autoComplete?: string;
}

export interface Styles {
    input?: Record<string, any>;
    suggestItem?: Record<string, any>;
    suggests?: Record<string, any>;
}

export type QueryType
    = 'address'
    | 'establishment'
    | 'geocode'
    | '(cities)'
    | '(regions)';

export interface Fixture {
    className?: string;
    label: string;
    location?: google.maps.LatLng;
}

export interface Suggest {
    gmaps?: google.maps.GeocoderResult;
    label: string;
    location: {lat: number, lng: number};
    placeId: string;
}
