//
/// <reference types="google.maps" />

import * as React from "react";

export interface formattedSuggestionType {
    mainText: string;
    secondaryText: string;
}

export interface InputProps extends
    Pick<
        React.InputHTMLAttributes<HTMLInputElement>,
        Exclude<
            keyof React.InputHTMLAttributes<HTMLInputElement>,
            "onChange"
        >
    >
{
    value: string;
    onChange: (value: string) => void;
}

export interface PropTypes {
    inputProps: InputProps;
    onError?: ((status: string, clearSuggestion: () => void) => void) | undefined;
    onSelect?: ((address: string, placeID: string) => void) | undefined;
    renderSuggestion?:
        | ((obj: {
            suggestion: string;
            formattedSuggestion: formattedSuggestionType;
        }) => React.ReactNode)
        | undefined;
    classNames?: {
        root?: string | undefined;
        input?: string | undefined;
        autocompleteContainer?: string | undefined;
        autocompleteItem?: string | undefined;
        autocompleteItemActive?: string | undefined;
    } | undefined;
    styles?: {
        root?: React.CSSProperties | undefined;
        input?: React.CSSProperties | undefined;
        autocompleteContainer?: React.CSSProperties | undefined;
        autocompleteItem?: React.CSSProperties | undefined;
        autocompleteItemActive?: React.CSSProperties | undefined;
    } | undefined;
    options?: {
        bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral | undefined;
        componentRestrictions?: google.maps.GeocoderComponentRestrictions | undefined;
        location?: google.maps.LatLng | google.maps.LatLngLiteral | undefined;
        offset?: number | string | undefined;
        radius?: number | string | undefined;
        types?: string[] | undefined;
    } | undefined;

    debounce?: number | undefined;
    highlightFirstSuggestion?: boolean | undefined;
    renderFooter?: (() => React.ReactNode) | undefined;
    shouldFetchSuggestions?: ((value: string) => boolean) | undefined;
}

export function geocodeByAddress(
    address: string,
    callback: (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => void,
): void;
export function geocodeByPlaceId(
    placeId: string,
    callback: (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => void,
): void;
export function getLatLng(results: google.maps.GeocoderResult): Promise<google.maps.LatLngLiteral>;

export default class PlacesAutocomplete extends React.Component<PropTypes> {}
