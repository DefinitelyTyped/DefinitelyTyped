// Project: https://github.com/c0b41/musixmatch, https://www.npmjs.com/package/musicmatch
// Definitions by: Aleksei Klimenko <https://github.com/DadUndead>
// Definitions: https://github.com/DefinitelyTyped/

import Musicmatch, {
    AlbumParams,
    AlbumTracksParams,
    ArtistAlbumsParams,
    ArtistParams,
    ArtistRelatedParams,
    ArtistSearchParams,
    ChartArtistsParams,
    MatcherLyricsParams,
    MatcherSubtitleParams,
    MatcherTrackParams,
    TrackLyricsAddParams,
    TrackLyricsFeedbackParams,
    TrackLyricsParams,
    TrackParams,
    TrackSearchParams,
    TrackSearchResult,
    TrackSnippetParams,
    TrackSubtitleParams
} from 'musicmatch';

const musicmatch = new Musicmatch({ apikey: 'api_key', format: '' });

const COUNTRY = 'USA';
const Q_ARTIST = 'artist name';
const Q_TRACK = 'track title';

const trackSearchParams: TrackSearchParams = {
    f_music_genre_id: 18,
    page_size: 100,
    page: 1,
    s_track_rating: 'desc',
    f_lyrics_language: 'en',
};

const albumParams: AlbumParams = {
    album_id: 1,
};

const albumTrackParams: AlbumTracksParams = {
    album_id: 1,
    album_mbid: 1,
    format: 'json',
};

const artisParams: ArtistParams = {
    artist_id: 1,
    artist_mbid: 1,
};

const artistAlbumsParams: ArtistAlbumsParams = {
    artist_mbid: 1,
    artist_id: 1,
    g_album_name: 1,
    page: 1,
    page_size: 10,
    s_release_date: 'desc',
};

const artistRelatedParams: ArtistRelatedParams = {
    page_size: 10,
    page: 1,
    artist_id: 1,
    artist_mbid: 1,
};

const artistSearchParams: ArtistSearchParams = {
    page: 1,
    page_size: 10,
    f_artist_id: 1,
    f_artist_mbid: 1,
    q_artist: Q_ARTIST
};

const chartArtistsParams: ChartArtistsParams = {
    page: 1,
    page_size: 10,
    country: COUNTRY
};

const chartTracksParams: ChartArtistsParams = {
    page: 1,
    page_size: 10,
    country: COUNTRY,
};

const matcherLyricsParams: MatcherLyricsParams = {
    q_artist: Q_ARTIST,
    q_track: Q_TRACK,
};

const matcherSubtitleParams: MatcherSubtitleParams = {
    q_artist: Q_ARTIST,
    q_track: Q_TRACK,
    f_subtitle_length: 100,
    f_subtitle_length_max_deviation: 10,
};

const matcherTrackParams: MatcherTrackParams = {
    q_artist: Q_ARTIST,
    q_track: Q_TRACK,
    f_has_lyrics: 1,
    f_has_subtitle: 1,
};

const trackParams: TrackParams = {
    track_id: 1,
    track_mbid: 1,
};

const trackLyricsParams: TrackLyricsParams = {
    track_id: 1,
    track_mbid: 1,
};

const trackLyricsAddParams: TrackLyricsAddParams = {
    lyrics_body: 'Lyrics',
    lyrics_id: 1,
};

const trackLyricsFeedbackParams: TrackLyricsFeedbackParams = {
    feedback: 'bad_characters',
    lyrics_id: 1,
    track_id: 1,
};

const trackSnippetParams: TrackSnippetParams = {
    track_id: 1,
};

const trackSubtitleParams: TrackSubtitleParams = {
    f_subtitle_length: 100,
    f_subtitle_length_max_deviation: 10,
    subtitle_format: 'dfxp',
    track_id: 1,
    track_mbid: 1,
};

/**
 * Example of track search result
 */
const trackSearchResult: TrackSearchResult = {
    message: {
        header: { status_code: 200, execute_time: 0.27148103713989, available: 10000 }, body: {
            track_list: [{
                track: {
                    track_id: 164289228,
                    track_name: '7 rings',
                    track_name_translation_list: [],
                    track_rating: 100,
                    commontrack_id: 91473047,
                    instrumental: 0,
                    explicit: 1,
                    has_lyrics: 1,
                    has_subtitles: 1,
                    has_richsync: 1,
                    num_favourite: 2130,
                    album_id: 31234760,
                    album_name: 'thank u, next',
                    artist_id: 13958599,
                    artist_name: 'Ariana Grande',
                    track_share_url: 'https:\/\/www.musixmatch.com\/lyrics\/Ariana-Grande\/7-rings?utm_source=application&utm_campaign=api&utm_medium=FruitSarcop%3A1409618278546',
                    track_edit_url: 'https:\/\/www.musixmatch.com\/lyrics\/Ariana-Grande\/7-rings\/edit?utm_source=application&utm_campaign=api&utm_medium=FruitSarcop%3A1409618278546',
                    restricted: 0,
                    updated_time: '2019-03-22T15:28:01Z',
                    primary_genres: {
                        music_genre_list: [{
                            music_genre: {
                                music_genre_id: 14,
                                music_genre_parent_id: 34,
                                music_genre_name: 'Pop',
                                music_genre_name_extended: 'Pop',
                                music_genre_vanity: 'Pop'
                            }
                        }]
                    }
                }
            }]
        }
    }
};

Promise
    .all([
        musicmatch.album(albumParams),                                  //  0
        musicmatch.albumTracks(albumTrackParams),                       //  1
        musicmatch.artist(artisParams),                                 //  2
        musicmatch.artistAlbums(artistAlbumsParams),                    //  3
        musicmatch.artistRelated(artistRelatedParams),                  //  4
        musicmatch.artistSearch(artistSearchParams),                    //  5
        musicmatch.chartArtists(chartArtistsParams),                    //  6
        musicmatch.chartTracks(chartTracksParams),                      //  7
        musicmatch.matcherLyrics(matcherLyricsParams),                  //  8
        musicmatch.matcherSubtitle(matcherSubtitleParams),              //  9
        musicmatch.matcherTrack(matcherTrackParams),                    //  10
        musicmatch.track(trackParams),                                  //  11
        musicmatch.trackLyrics(trackLyricsParams),                      //  12
        musicmatch.trackLyricsAdd(trackLyricsAddParams),                //  13
        musicmatch.trackLyricsFeedback(trackLyricsFeedbackParams),      //  14
        musicmatch.trackSearch(trackSearchParams),                      //  15
        musicmatch.trackSnippet(trackSnippetParams),                    //  16
        musicmatch.trackSubtitle(trackSubtitleParams),                  //  17
    ])
    .then((results) => {
        const trackSearchResult: TrackSearchResult = results[15];

        console.log('No. of tracks found by search:', trackSearchResult.message.body.track_list.length);
    });
