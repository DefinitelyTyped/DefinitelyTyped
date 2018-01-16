// Type definitions for react-geosuggest 2.7.0
// Project: https://github.com/ubilabs/react-geosuggest
// Definitions by: Brad Menchl <https://github.com/brmenchl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="googlemaps" />

import { Component, InputHTMLAttributes } from "react";

export default class Geosuggest extends Component<GeosuggestProps> {
    focus(): void;
    blur(): void;
    update(value: string): void;
    clear(): void;
}

export interface GeosuggestProps extends InputHTMLAttributes<HTMLInputElement> {
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
    ignoreTab?: boolean;
    queryDelay?: number;
    minLength?: number;
    highlightMatch?: boolean;
    onFocus?(): void;
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
    suggestsItemClassName?: string;
    suggestsItemActiveClassName?: string;
    autoComplete?: string;
}

export interface Styles {
    input?: Record<string, any>;
    suggestItem?: Record<string, any>;
    suggests?: Record<string, any>;
}

export type QueryType
    = 'establishment'
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
    location: {lat: string, lng: string};
    placeId: string;
}
