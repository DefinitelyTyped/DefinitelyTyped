// Type definitions for musicmatch 0.3
// Project: https://github.com/c0b41/musixmatch, https://www.npmjs.com/package/musicmatch
// Definitions by: Aleksei Klimenko <https://github.com/DadUndead>
// Definitions: https://github.com/DefinitelyTyped/

export type TFormat = 'json' | 'xml';
export type TSort = 'asc' | 'desc';
export type TBoolean = 0 | 1;

export interface Pageable {
    page?: number;
    page_size?: number;
}

export interface AlbumParams {
    album_id: number;
}

export interface AlbumTracksParams {
    album_id?: number;
    album_mbid?: number;
    format?: TFormat;
}

export interface ArtistParams {
    artist_id?: number;
    artist_mbid?: number;
}

export interface ArtistRelatedParams extends  ArtistParams, Pageable {
}

export interface ArtistAlbumsParams extends  ArtistParams, Pageable {
    g_album_name?: TBoolean;
    s_release_date?: TSort;
}

export interface ArtistSearchParams extends  Pageable {
    q_artist?: string;
    f_artist_id?: number;
    f_artist_mbid?: number;
}

export interface MatcherLyricsParams {
    q_track?: string;
    q_artist?: string;
}

export interface MatcherSubtitleParams extends  MatcherLyricsParams {
    f_subtitle_length?: number;
    f_subtitle_length_max_deviation?: number;
}

export interface MatcherTrackParams extends  MatcherLyricsParams {
    f_has_lyrics?: TBoolean;
    f_has_subtitle?: TBoolean;
}

export interface TrackLyricsFeedbackParams {
    lyrics_id?: number;
    track_id?: number;
    feedback?: 'wrong_lyrics' | 'wrong_attribution' | 'bad_characters' | 'lines_too_long' | 'wrong_verses' | 'wrong_formatting';
}

export interface TrackLyricsAddParams {
    lyrics_id?: number;
    lyrics_body?: string;
}

export interface TrackSnippetParams {
    track_id: number;
}

export interface TrackLyricsParams {
    track_id?: number;
    track_mbid?: number;
}

export interface TrackSubtitleParams {
    track_id?: number;
    track_mbid?: number;
    subtitle_format?: 'lrc' | 'dfxp' | 'stledu';
    f_subtitle_length?: number;
    f_subtitle_length_max_deviation?: number;
}

export interface TrackParams {
    track_id?: number;
    track_mbid?: number;
}

export interface TrackSearchParams extends  Pageable {
    q?: string;
    q_lyrics?: string;
    f_has_lyrics?: TBoolean;
    f_artist_id?: number;
    f_music_genre_id?: number;
    f_artist_mbid?: number;
    f_lyrics_language?: string;
    s_track_rating?: TSort;
    s_artist_rating?: TSort;
    quorum_factor?: number;
}

export interface TrackSearchResult {
    message: {
        body: {
            track_list: TrackResult[];
        },
        header: {
            available: number;
            execute_time: number;
            status_code: number;
        }
    };
}

export interface MusicGenre {
    music_genre_id: number;
    music_genre_parent_id: number;
    music_genre_name: string;
    music_genre_name_extended: string;
    music_genre_vanity: string;
}

export interface PrimaryGenres {
    music_genre_list: Array<{ music_genre: MusicGenre }>;
}

export interface TrackResult {
    track: {
        track_id: number;
        track_name: string;
        track_name_translation_list: any[];
        track_rating: number;
        commontrack_id: number;
        instrumental: TBoolean;
        explicit: TBoolean;
        has_lyrics: TBoolean;
        has_subtitles: TBoolean;
        has_richsync: TBoolean;
        num_favourite: number;
        album_id: number;
        album_name: string;
        artist_id: number;
        artist_name: string;
        track_share_url: string;
        track_edit_url: string;
        restricted: TBoolean;
        updated_time: string;
        primary_genres: PrimaryGenres;
    };
}

export interface ChartTracksParams extends  Pageable {
    country?: string;
    f_has_lyrics?: TBoolean;
}

export interface ChartArtistsParams extends  Pageable {
    country?: string;
}

export default class Musicmatch {
    constructor(obj?: { apikey?: string, format?: string });

    album(params: AlbumParams): Promise<any>;

    albumTracks(params: AlbumTracksParams): Promise<any>;

    artist(params: ArtistParams): Promise<any>;

    artistAlbums(params: ArtistAlbumsParams): Promise<any>;

    artistRelated(params: ArtistRelatedParams): Promise<any>;

    artistSearch(params: ArtistSearchParams): Promise<any>;

    chartArtists(params: ChartArtistsParams): Promise<any>;

    chartTracks(params: ChartTracksParams): Promise<any>;

    matcherLyrics(params: MatcherLyricsParams): Promise<any>;

    matcherSubtitle(params: MatcherSubtitleParams): Promise<any>;

    matcherTrack(params: MatcherTrackParams): Promise<any>;

    track(params: TrackParams): Promise<any>;

    trackLyrics(params: TrackLyricsParams): Promise<any>;

    trackLyricsAdd(params: TrackLyricsAddParams): Promise<any>;

    trackLyricsFeedback(params: TrackLyricsFeedbackParams): Promise<any>;

    trackSearch(params: TrackSearchParams): Promise<TrackSearchResult>;

    trackSnippet(params: TrackSnippetParams): Promise<any>;

    trackSubtitle(params: TrackSubtitleParams): Promise<any>;
}
