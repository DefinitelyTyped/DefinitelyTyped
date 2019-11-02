// Type definitions for non-npm package Apple Music API 0.1
// Project: https://developer.apple.com/documentation/applemusicapi/
// Definitions by: Noah Chase <https://github.com/nchase>
//                 Useff Chase <https://github.com/useffc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace AppleMusicApi {
    interface SongResponse {
        data: Song[];
    }

    interface Song {
        id: string;
        href: string;
        type: 'songs';
        attributes: SongAttributes;
        relationships: SongRelationships;
    }

    // https://developer.apple.com/documentation/applemusicapi/song/attributes
    interface SongAttributes {
        albumName: string;
        artistName: string;
        artwork?: Artwork;
        composerName?: string;
        contentRating?: string;
        discNumber: number;
        durationInMillis: number;
        editorialNotes?: EditorialNotes;
        genreNames: string[];
        hasLyrics: boolean;
        isrc: string;
        movementCount?: number;
        movementName?: string;
        movementNumber?: string;
        name: string;
        playParams?: PlayParameters;
        previews: Preview[];
        releaseDate: string;
        trackNumber: number;
        url: string;
        workName?: string;
    }

    interface SongRelationships {
        albums: {
            data: any[];
            href: string;
        };
        artists: {
            data: any[];
            href: string;
        };
        genres?: {
            data: any[];
            href: string;
        };
        station?: { data: Station };
    }

    interface Station {
        type: 'stations';
        artwork: Artwork;
        durationInMillis?: number;
        editorialNotes?: EditorialNotes;
        episodeNumber?: number;
        isLive: boolean;
        name: string;
        url: string;
    }

    // TODO: someone please flesh this out - https://developer.apple.com/documentation/applemusicapi/artwork
    interface Artwork {
        width: number;
        height: number;
        url: string;
        bgColor?: string;
        textColor1?: string;
        textColor2?: string;
        textColor3?: string;
        textColor4?: string;
    }

    // https://developer.apple.com/documentation/applemusicapi/editorialnotes
    interface EditorialNotes {
        short: string;
        standard: string;
    }

    // https://developer.apple.com/documentation/applemusicapi/playparameters
    interface PlayParameters {
        id: string;
        kind: string;
    }

    // https://developer.apple.com/documentation/applemusicapi/preview
    interface Preview {
        artwork?: Artwork;
        url: string;
    }
}
