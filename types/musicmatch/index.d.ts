// Type definitions for musicmatch 0.3.2
// Project: https://www.npmjs.com/package/musicmatch
// Definitions by: Aleksei Klimenko <https://github.com/DadUndead>
// Definitions: https://github.com/DefinitelyTyped/

declare module 'musicmatch';

type TFormat = 'json' | 'xml';
type TSort = 'asc' | 'desc';
type TBoolean = 0 | 1;

export interface IPageable {
    page?: number;
    page_size?: number;
}

export interface IAlbumParams {
    album_id: number;
}

export interface IAlbumTracksParams {
    album_id?: number;
    album_mbid?: number;
    format?: TFormat;
}

export interface IArtistParams {
    artist_id?: number;
    artist_mbid?: number;
}

export interface IArtistRelatedParams extends IArtistParams, IPageable {
}

export interface IArtistAlbumsParams extends IArtistParams, IPageable {
    g_album_name?: TBoolean;
    s_release_date?: TSort;
}

export interface IArtistSearchParams extends IPageable {
    q_artist?: string;
    f_artist_id?: number;
    f_artist_mbid?: number;
}

export interface IMatcherLyricsParams {
    q_track?: string;
    q_artist?: string;
}

export interface IMatcherSubtitleParams extends IMatcherLyricsParams {
    f_subtitle_length?: number;
    f_subtitle_length_max_deviation?: number;
}

export interface IMatcherTrackParams extends IMatcherLyricsParams {
    f_has_lyrics?: TBoolean;
    f_has_subtitle?: TBoolean;
}

export interface ITrackLyricsFeedbackParams {
    lyrics_id?: number;
    track_id?: number;
    feedback?: 'wrong_lyrics' | 'wrong_attribution' | 'bad_characters' | 'lines_too_long' | 'wrong_verses' | 'wrong_formatting';
}

export interface ITrackLyricsAddParams {
    lyrics_id?: number;
    lyrics_body?: string;
}

export interface ITrackSnippetParams {
    track_id: number;
}

export interface ITrackLyricsParams {
    track_id?: number;
    track_mbid?: number;
}

export interface ITrackSubtitleParams {
    track_id?: number;
    track_mbid?: number;
    subtitle_format?: 'lrc' | 'dfxp' | 'stledu';
    f_subtitle_length?: number;
    f_subtitle_length_max_deviation?: number;
}

export interface ITrackParams {
    track_id?: number;
    track_mbid?: number;
}

export interface ITrackSearchParams extends IPageable {
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

export interface ITrackSearchResult {
    message: {
        body: {
            track_list: ITrackResult[];
        },
        header: {
            available: number;
            execute_time: number;
            status_code: number;
        }
    };
}

export interface IMusicGenre {
    music_genre_id: number;
    music_genre_parent_id: number;
    music_genre_name: string;
    music_genre_name_extended: string;
    music_genre_vanity: string;
}

export interface PrimaryGenres {
    music_genre_list: Array<{ music_genre: IMusicGenre }>;
}

export interface ITrackResult {
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

export interface IChartTracksParams extends IPageable {
    country?: string;
    f_has_lyrics?: TBoolean;
}

export interface IChartArtistsParams extends IPageable {
    country?: string;
}

export default class Musicmatch {
    constructor(obj?: { apikey?: string, format?: string });

    album(params: IAlbumParams): Promise<any>;

    albumTracks(params: IAlbumTracksParams): Promise<any>;

    artist(params: IArtistParams): Promise<any>;

    artistAlbums(params: IArtistAlbumsParams): Promise<any>;

    artistRelated(params: IArtistRelatedParams): Promise<any>;

    artistSearch(params: IArtistSearchParams): Promise<any>;

    chartArtists(params: IChartArtistsParams): Promise<any>;

    chartTracks(params: IChartTracksParams): Promise<any>;

    matcherLyrics(params: IMatcherLyricsParams): Promise<any>;

    matcherSubtitle(params: IMatcherSubtitleParams): Promise<any>;

    matcherTrack(params: IMatcherTrackParams): Promise<any>;

    track(params: ITrackParams): Promise<any>;

    trackLyrics(params: ITrackLyricsParams): Promise<any>;

    trackLyricsAdd(params: ITrackLyricsAddParams): Promise<any>;

    trackLyricsFeedback(params: ITrackLyricsFeedbackParams): Promise<any>;

    trackSearch(params: ITrackSearchParams): Promise<ITrackSearchResult>;

    trackSnippet(params: ITrackSnippetParams): Promise<any>;

    trackSubtitle(params: ITrackSubtitleParams): Promise<any>;
}
