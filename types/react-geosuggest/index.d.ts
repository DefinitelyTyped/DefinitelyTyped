/// <reference types="google.maps" />

import { Component, InputHTMLAttributes } from "react";

export default class Geosuggest extends Component<GeosuggestProps> {
    focus(): void;
    blur(): void;
    update(value: string): void;
    clear(): void;
    selectSuggest(value?: Suggest): void;
}

// Replace with Exclude once on 2.8+
export type Omit<T, K extends keyof T> = Pick<
    T,
    ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never; [x: number]: never })[keyof T]
>;

export interface GeosuggestProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "style"> {
    placeholder?: string | undefined;
    initialValue?: string | undefined;
    className?: string | undefined;
    style?: Styles | undefined;
    inputClassName?: string | undefined;
    disabled?: boolean | undefined;
    location?: google.maps.LatLng | undefined;
    radius?: number | undefined;
    bounds?: google.maps.LatLngBounds | undefined;
    country?: string | string[] | undefined;
    types?: QueryType[] | undefined;
    fixtures?: Fixture[] | undefined;
    maxFixtures?: number | undefined;
    placeDetailFields?: string[] | undefined;
    googleMaps?: typeof google.maps | undefined;
    ignoreEnter?: boolean | undefined;
    ignoreTab?: boolean | undefined;
    queryDelay?: number | undefined;
    minLength?: number | undefined;
    highlightMatch?: boolean | undefined;
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
    autoActivateFirstSuggest?: boolean | undefined;
    label?: string | undefined;
    suggestsClassName?: string | undefined;
    suggestsHiddenClassName?: string | undefined;
    suggestItemClassName?: string | undefined;
    suggestItemActiveClassName?: string | undefined;
    autoComplete?: string | undefined;
}

export interface Styles {
    input?: Record<string, any> | undefined;
    suggestItem?: Record<string, any> | undefined;
    suggests?: Record<string, any> | undefined;
}

export type QueryType =
    | "address"
    | "establishment"
    | "geocode"
    | "(cities)"
    | "(regions)";

export interface Fixture {
    className?: string | undefined;
    label: string;
    location?: google.maps.LatLng | undefined;
}

export interface Suggest {
    gmaps?: google.maps.GeocoderResult | undefined;
    label: string;
    location: { lat: number; lng: number };
    placeId: string;
}
