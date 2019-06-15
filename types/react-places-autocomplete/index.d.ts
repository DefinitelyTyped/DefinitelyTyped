// Type definitions for react-places-autocomplete 7.2
// Project: https://github.com/hibiken/react-places-autocomplete/, https://github.com/kenny-hibino/react-places-autocomplete
// Definitions by: Guilherme Hübner <https://github.com/guilhermehubner>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Nokky Goren <https://github.com/ApeNox>
//                 Aziz Khambati <https://github.com/azizhk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
//
/// <reference types="googlemaps" />
import * as React from 'react';

export type AutocompletePrediction = google.maps.places.AutocompletePrediction;

export interface Suggestion {
    id: string;
    active: boolean;
    index: number;
    description: AutocompletePrediction["description"];
    placeId: AutocompletePrediction["place_id"];
    formattedSuggestion: {
        mainText: AutocompletePrediction["structured_formatting"]["main_text"];
        secondaryText: AutocompletePrediction["structured_formatting"]["secondary_text"];
    };
    matchedSubstrings: AutocompletePrediction["matched_substrings"];
    terms: AutocompletePrediction["terms"];
    types: AutocompletePrediction["types"];
}

export interface PropTypes {
    onChange?: (value: string) => void;
    value?: string;
    onError?: (status: string, clearSuggestion: () => void) => void;
    onSelect?: (address: string, placeID: string) => void;
    searchOptions?: {
        bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral;
        componentRestrictions?: google.maps.GeocoderComponentRestrictions;
        location?: google.maps.LatLng | google.maps.LatLngLiteral;
        offset?: number | string;
        radius?: number | string;
        types?: string[];
    };
    debounce?: number;
    highlightFirstSuggestion?: boolean;
    shouldFetchSuggestions?: boolean;
    googleCallbackName?: string;
    children: (opts: Readonly<{
        loading: boolean;
        suggestions: ReadonlyArray<Suggestion>;
        getInputProps: <InputProps extends {}>(options?: InputProps) => {
            type: 'text';
            autoComplete: 'off';
            role: 'combobox';
            'aria-autocomplete': 'list';
            'aria-expanded': boolean;
            'aria-activedescendant': string | undefined;
            disabled: boolean;
            onKeyDown: React.KeyboardEventHandler;
            onBlur: React.FocusEventHandler;
            value: string | undefined;
            onChange: (ev: { target: { value: string }}) => void;
        } & InputProps;
        getSuggestionItemProps: <SuggestionProps extends {}>(suggestion: Suggestion, options?: SuggestionProps) => {
            key: number;
            id: string | undefined;
            role: 'option';
            onMouseEnter: React.MouseEventHandler;
            onMouseLeave: React.MouseEventHandler;
            onMouseDown: React.MouseEventHandler;
            onMouseUp: React.MouseEventHandler;
            onTouchStart: React.TouchEventHandler;
            onTouchEnd: React.TouchEventHandler;
            onClick: React.MouseEventHandler;
        } & SuggestionProps;
    }>) => React.ReactNode;
}

export function geocodeByAddress(address: string): Promise<google.maps.GeocoderResult[]>;

export function geocodeByPlaceId(placeId: string): Promise<google.maps.GeocoderResult[]>;

export function getLatLng(results: google.maps.GeocoderResult): Promise<google.maps.LatLngLiteral>;

export default class PlacesAutocomplete extends React.Component<PropTypes> {}
