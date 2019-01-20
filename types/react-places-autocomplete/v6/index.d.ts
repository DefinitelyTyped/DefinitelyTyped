// Type definitions for react-places-autocomplete 6.1
// Project: https://github.com/hibiken/react-places-autocomplete/
// Definitions by: Guilherme Hübner <https://github.com/guilhermehubner>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Nokky Goren <https://github.com/ApeNox>
//                 Aziz Khambati <https://github.com/azizhk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
//
/// <reference types="googlemaps" />

import * as React from "react";
import * as ReactDOM from "react-dom";

export interface formattedSuggestionType {
    mainText: string;
    secondaryText: string;
}

export interface InputProps extends Pick<
  ReactDOM.InputHTMLAttributes<HTMLInputElement>,
  Exclude<
    keyof ReactDOM.InputHTMLAttributes<HTMLInputElement>,
    "onChange"
  >
> {
  value: string;
  onChange: (value: string) => void;
}

export interface PropTypes {
    inputProps: InputProps;
    onError?: (status: string, clearSuggestion: () => void) => void;
    onSelect?: (address: string, placeID: string) => void;
    renderSuggestion?: (obj: {
      suggestion: string;
      formattedSuggestion: formattedSuggestionType;
    }) => React.ReactNode;
    classNames?: {
        root?: string;
        input?: string;
        autocompleteContainer?: string;
        autocompleteItem?: string;
        autocompleteItemActive?: string;
    };
    styles?: {
        root?: ReactDOM.CSSProperties;
        input?: ReactDOM.CSSProperties;
        autocompleteContainer?: ReactDOM.CSSProperties;
        autocompleteItem?: ReactDOM.CSSProperties;
        autocompleteItemActive?: ReactDOM.CSSProperties;
    };
    options?: {
        bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral;
        componentRestrictions?: google.maps.GeocoderComponentRestrictions;
        location?: google.maps.LatLng | google.maps.LatLngLiteral;
        offset?: number | string;
        radius?: number | string;
        types?: string[];
    };

    debounce?: number;
    highlightFirstSuggestion?: boolean;
    renderFooter?: () => React.ReactNode;
    shouldFetchSuggestions?: (value: string) => boolean;
}

export function geocodeByAddress(address: string, callback: (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => void): void;
export function geocodeByPlaceId(placeId: string, callback: (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => void): void;
export function getLatLng(results: google.maps.GeocoderResult): Promise<google.maps.LatLngLiteral>;

export default class PlacesAutocomplete extends React.Component<PropTypes> {}
