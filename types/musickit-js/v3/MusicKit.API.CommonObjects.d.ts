declare namespace MusicKit {
    /**
     * An object that represents artwork for a music item.
     * https://developer.apple.com/documentation/musickit/artwork
     */
    interface Artwork {
        bgColor?: string;
        height: number;
        width: number;
        textColor1?: string;
        textColor2?: string;
        textColor3?: string;
        textColor4?: string;
        url: string;
    }

    /**
     * An object that represents a description attribute.
     * https://developer.apple.com/documentation/applemusicapi/descriptionattribute/
     */
    interface DescriptionAttribute {
        short: string;
        standard: string;
    }

    /**
     * An object that represents editorial notes.
     * https://developer.apple.com/documentation/musickit/editorialnotes
     */
    interface EditorialNotes {
        hashValue: number;
        name?: string;
        short?: string;
        standard?: string;
        tagline?: string;
    }

    /**
     * Information about an error that occurred while processing a request.
     * https://developer.apple.com/documentation/applemusicapi/error
     */
    interface Error {
        code: string;
        detail: string;
        id: string;
        source: {
            parameter: string;
            pointer: string;
        };
        status: string;
        title: string;
    }

    /**
     * An object that represents play parameters for resources.
     * https://developer.apple.com/documentation/applemusicapi/playparameters
     */
    interface PlayParameters {
        id: string;
        kind: CATALOG_RESOURCE_TYPE["type"];
        catalogId?: string;
        isLibrary: boolean;
    }

    /**
     * An object that represents a preview for resources.
     * https://developer.apple.com/documentation/applemusicapi/preview
     */
    interface Preview {
        artwork: Artwork;
        url: string;
        hlsUrl: string;
    }

    /**
     * A to-one or to-many relationship from one resource object to others.
     * https://developer.apple.com/documentation/applemusicapi/relationship
     */
    interface Relationship<T> {
        href?: string;
        next?: string;
        data: T[];
        meta?: Record<string, any>;
    }

    /**
     * A to-one or to-many relationship view from one resource object to others representing interesting associations.
     * https://developer.apple.com/documentation/applemusicapi/view
     */
    interface View<T> {
        href?: string;
        next?: string;
        attributes?: {
            title: string;
        };
        data: T[];
        meta?: Record<string, any>;
    }
}
