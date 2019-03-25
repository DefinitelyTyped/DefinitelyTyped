// Type definitions for lyricist 2.2
// Project: https://github.com/scf4/lyricist, https://www.npmjs.com/package/lyricist
// Definitions by: Aleksei Klimenko <https://github.com/DadUndead>
// Definitions: https://github.com/DefinitelyTyped/
// TypeScript Version: 2.7

declare class Lyricist {
    constructor(accessToken: string);

    album(id: number, opts?: { fetchTracklist?: boolean, textFormat?: Lyricist.LyricistTextFormat }): Promise<Lyricist.Album>;

    artist(id: number, opts: { textFormat?: Lyricist.LyricistTextFormat }): Promise<Lyricist.Artist>;

    artistByName(name: string, opts: { textFormat?: Lyricist.LyricistTextFormat }): Promise<Lyricist.Artist>;

    search(query: string): Promise<Lyricist.SearchResult[]>;

    song(id: number, opts?: { fetchLyrics?: boolean, textFormat?: Lyricist.LyricistTextFormat }): Promise<Lyricist.Song>;

    songsByArtist(id: number, opts?: { page?: number, perPage?: number, sort?: 'asc' | 'desc' }): Promise<Lyricist.SongByArtist[]>;
}

declare namespace Lyricist {
    enum LyricistTextFormat {
        DOM = 'dom',
        PLAIN = 'plain',
        HTML = 'html',
    }

    interface Description {
        [LyricistTextFormat.DOM]?: object;
        [LyricistTextFormat.PLAIN]?: string;
        [LyricistTextFormat.HTML]?: string;
    }

    // Song ============================================================================================
    interface Song {
        annotation_count: number;
        api_path: string;
        apple_music_id?: any;
        apple_music_player_url: string;
        description: Description;
        embed_content: string;
        featured_video: boolean;
        full_title: string;
        header_image_thumbnail_url: string;
        header_image_url: string;
        id: number;
        lyrics: string;
        lyrics_owner_id: number;
        lyrics_state: string;
        path: string;
        pyongs_count?: any;
        recording_location?: any;
        release_date: string;
        song_art_image_thumbnail_url: string;
        song_art_image_url: string;
        stats: {
            accepted_annotations: number;
            contributors: number;
            hot: boolean;
            iq_earners: number;
            transcribers: number;
            unreviewed_annotations: number;
            verified_annotations: number;
            pageviews: number;
        };
        title: string;
        title_with_featured: string;
        url: string;
        current_user_metadata: {
            permissions: string[];
            excluded_permissions: string[];
            interactions: {
                pyong: boolean;
                following: boolean;
            };
            relationships: any;
            iq_by_action: any;
        };
        album?: any;
        custom_performances: any[];
        description_annotation: DescriptionAnnotation;
        featured_artists: any[];
        lyrics_marked_complete_by?: any;
        media: Media[];
        primary_artist: ArtistBrief;
        producer_artists: ArtistBrief[];
        song_relationships: Array<{
            type: string;
            songs: any[];
        }>;
        verified_annotations_by: any[];
        verified_contributors: any[];
        verified_lyrics_by: any[];
        writer_artists: ArtistBrief[];
    }

    interface ClientTimestamps {
        updated_by_human_at: number;
        lyrics_updated_at: number;
    }

    interface AvatarConfig {
        url: string;
        bounding_box: {
            width: number;
            height: number;
        };
    }

    interface Avatar {
        tiny: AvatarConfig;
        thumb: AvatarConfig;
        small: AvatarConfig;
        medium: AvatarConfig;
    }

    interface User {
        api_path: string;
        avatar: Avatar;
        header_image_url: string;
        human_readable_role_for_display: string;
        id: number;
        iq: number;
        login: string;
        name: string;
        role_for_display: string;
        url: string;
        current_user_metadata: {
            permissions: any[];
            excluded_permissions: string[];
            interactions: {
                following: boolean;
            };
            features: any[];
        };
    }

    interface Author {
        attribution: number;
        pinned_role?: any;
        user: User;
    }

    interface Annotation {
        api_path: string;
        body: Description;
        comment_count: number;
        community: boolean;
        custom_preview?: any;
        has_voters: boolean;
        id: number;
        pinned: boolean;
        share_url: string;
        source?: any;
        state: string;
        url: string;
        verified: boolean;
        votes_total: number;
        current_user_metadata: {
            permissions: string[];
            excluded_permissions: string[];
            interactions: {
                cosign: boolean;
                pyong: boolean;
                vote?: any;
            };
            iq_by_action: any;
        };
        authors: Author[];
        cosigned_by: any[];
        rejection_comment?: any;
        verified_by?: any;
    }

    interface DescriptionAnnotation {
        _type: string;
        annotator_id: number;
        annotator_login: string;
        api_path: string;
        classification: string;
        fragment: string;
        id: number;
        is_description: boolean;
        path: string;
        range: {
            content: string;
        };
        song_id: number;
        url: string;
        verified_annotator_ids: any[];
        annotatable: {
            api_path: string;
            client_timestamps: ClientTimestamps;
            context: string;
            id: number;
            image_url: string;
            link_title: string;
            title: string;
            type: string;
            url: string;
        };
        annotations: Annotation[];
    }

    interface Media {
        provider: string;
        start: number;
        type: string;
        url: string;
    }

    interface ArtistBrief {
        api_path: string;
        header_image_url: string;
        id: number;
        image_url: string;
        is_meme_verified: boolean;
        is_verified: boolean;
        name: string;
        url: string;
    }

    // Artist =========================================================================================
    interface Artist {
        alternate_names: any[];
        api_path: string;
        description: Description;
        facebook_name: string;
        followers_count: number;
        header_image_url: string;
        id: number;
        image_url: string;
        instagram_name: string;
        is_meme_verified: boolean;
        is_verified: boolean;
        name: string;
        translation_artist: boolean;
        twitter_name: string;
        url: string;
        current_user_metadata: {
            permissions: string[];
            excluded_permissions: string[];
            interactions: {
                following: boolean;
            };
        };
        description_annotation: DescriptionAnnotation;
        user?: any;
    }

// Search ================================================
    interface SearchResult {
        annotation_count: number;
        api_path: string;
        full_title: string;
        header_image_thumbnail_url: string;
        header_image_url: string;
        id: number;
        lyrics_owner_id: number;
        lyrics_state: string;
        path: string;
        pyongs_count?: any;
        song_art_image_thumbnail_url: string;
        stats: {
            hot: boolean;
            unreviewed_annotations: number;
            pageviews: number;
        };
        title: string;
        title_with_featured: string;
        url: string;
        primary_artist: ArtistBrief;
    }

    // Song by Artist =========================================
    interface SongByArtist {
        annotation_count: number;
        api_path: string;
        full_title: string;
        header_image_thumbnail_url: string;
        header_image_url: string;
        id: number;
        lyrics_owner_id: number;
        lyrics_state: string;
        path: string;
        pyongs_count: number;
        song_art_image_thumbnail_url: string;
        stats: {
            hot: boolean;
            unreviewed_annotations: number;
            pageviews: number;
        };
        title: string;
        title_with_featured: string;
        url: string;
        primary_artist: ArtistBrief;
    }

    // Album =================================================
    interface Album {
        api_path: string;
        comment_count: number;
        cover_art_url: string;
        custom_header_image_url?: any;
        full_title: string;
        header_image_url: string;
        id: number;
        lock_state: string;
        name: string;
        pyongs_count: number;
        release_date?: any;
        release_date_components?: any;
        url: string;
        current_user_metadata: {
            permissions: string[];
            excluded_permissions: string[];
            interactions: {
                pyong: boolean;
            };
        };
        song_pageviews: number;
        artist: ArtistBrief;
        cover_arts: any[];
        description_annotation: DescriptionAnnotation;
        performance_groups: any[];
        song_performances: any[];
    }
}

export = Lyricist;
