declare module Microsoft.Maps {
    /** Options used to customize the autosuggest functionality. */
    export interface IAutosuggestOptions {
        /** Specifies if street address suggestions should be returned. Default: true */
        addressSuggestions?: boolean;

        /**
        * Specifies if the user’s location should be auto detected using their IP address, if no location information is provided
        * in the userLocation property. Default: true
        */
        autoDetectLocation?: boolean;

        /**
        * A bounding box that is used to help influence the results such that locations that are in or near this bounding box
        * are given more weight than they would normally.
        */
        bounds?: LocationRect;

        /**
        * A reference to a map instance. If the useMapView property is set to true, the bounding box of the map view will be used
        * to influence the weight of suggestions.
        */
        map?: Map;

        /** The maximum number of results to return. Can be any value between 1 and 10. Default: 5 */
        maxResults?: number;

        /** Specifies if place suggestions (city, landmark, etc.) should be returned. Default: true */
        placeSuggestions?: boolean;

        /**
        * Indicates if the maps bounding box should be used to influence the suggested results. Ignored if the bounds property is
        * set. Default: true
        */
        useMapView?: boolean;

        /** A coordinate indicating where the user is located. This will influence the results to be more relevant to the user. */
        userLocation?: Location;
    }

    /** Represents the suggestion result from the Autosuggest manager. */
    export interface ISuggestionResult {
        /** A structured address object for the result.  */
        address: IAddress;

        /** A LocationRect that can be used to set the map view over the result. */
        bestView: LocationRect;

        /** Unique entity id to be used for searching the entity. */
        entityId: string;

        /** The type of the result; Address, Place */
        entityType: string;

        /** The sub type of result; Address, RoadBlock, PopulatedPlace, CountryRegion, etc. */
        entitySubType: string;

        /** A nicely formatted suggestion string for the result based on market. */
        formattedSuggestion: string;

        /**
        * The coordinate of the result. This value is only returned for place (city, landmarks) results and not for addresses.
        * Street addresses will need to be geocoded to get their location.
        */
        location: Location;

        /** A secondary title that provides additional context to the title value of the suggestion. **/
        subtitle: string;

        /** The display title for the result (i.e. “Redmond”). */
        title: string;
    }

    /**
     * The AutosuggestManager is the primary class in the Autosuggest module that powers the autosuggest functionality.
     * @requires The Microsoft.Maps.Autosuggest module.
     */
    export class AutosuggestManager {
       /**
       * @constructor
       * @requires The Microsoft.Maps.Autosuggest module.
       * @param options The options to use with the autosuggest manager.
       */
        constructor(options?: IAutosuggestOptions);

        /**
        * Attaches the Autosuggest functionality to an input box.
        * @param suggestionBoxId The HTML element identifier of the input box.
        * @param suggestionContainerId The Id of container where suggestions will be displayed.
        * @param selectedSuggestionCallback A reference to a callback function that will be called when a user selects a suggestion from the Autosuggest UI.
        */
        public attachAutosuggest(suggestionBoxId: string, suggestionContainerId: string, selectedSuggestionCallback: (result: ISuggestionResult) => void) : void;

        /** Detaches the autosuggest functionality from the input box, freeing any resources it has or events it has tied to. */
        public detachAutosuggest(): void;

        /** Disposes the Autosuggest object, freeing any resources it has or events it has tied to. */
        public dispose(): void;

        /**
        * Gets the options currently used by the autosuggest manager.
        * @returns The options currently used by the autosuggest manager.
        */
        public getOptions(): IAutosuggestOptions;

        /**
        * Sets the options currently used by the autosuggest manager.
        * @param options The options to use with the autosuggest manager.
        */
        public setOptions(options?: IAutosuggestOptions): void;
    }
}