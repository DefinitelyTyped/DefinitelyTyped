declare namespace google.maps.places {
    class Autocomplete extends MVCObject {
        constructor(inputField: HTMLInputElement, opts?: AutocompleteOptions);
        getBounds(): LatLngBounds;
        getPlace(): PlaceResult;
        setBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void;
        setComponentRestrictions(restrictions: ComponentRestrictions): void;
        setFields(fields: string[] | undefined): void;
        setOptions(options: AutocompleteOptions): void;
        setTypes(types: string[]): void;
    }

    interface AutocompleteOptions {
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        componentRestrictions?: ComponentRestrictions;
        placeIdOnly?: boolean;
        strictBounds?: boolean;
        types?: string[];
        type?: string;
        fields?: string[];
    }

    class SearchBox extends MVCObject {
        constructor(inputField: HTMLInputElement, opts?: SearchBoxOptions);
        getBounds(): LatLngBounds;
        getPlaces(): PlaceResult[];
        setBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void;
    }

    interface SearchBoxOptions {
        bounds: LatLngBounds | LatLngBoundsLiteral;
    }
}
