// Type definitions for musicmatch 0.3.2
// Project: https://github.com/c0b41/musixmatch, https://www.npmjs.com/package/musicmatch
// Definitions by: Aleksei Klimenko <https://github.com/DadUndead>
// Definitions: https://github.com/DefinitelyTyped/

import Musicmatch, { ITrackSearchParams, ITrackSearchResult } from 'musicmatch';

const musicmatch = new Musicmatch({ apikey: 'api_key', format: '' });

const trackSearchParams: ITrackSearchParams = {
    f_music_genre_id: 18,
    page_size: 100,
    page: 1,
    s_track_rating: 'desc',
    f_lyrics_language: 'en',
};

musicmatch.trackSearch(trackSearchParams);

/**
 * Search for a track
 *
 * GET ws/1.1/track.search
 *
 */
const trackSearchResult: ITrackSearchResult = {
    'message': {
        'header': { 'status_code': 200, 'execute_time': 0.27148103713989, 'available': 10000 }, 'body': {
            'track_list': [{
                'track': {
                    'track_id': 164289228,
                    'track_name': '7 rings',
                    'track_name_translation_list': [],
                    'track_rating': 100,
                    'commontrack_id': 91473047,
                    'instrumental': 0,
                    'explicit': 1,
                    'has_lyrics': 1,
                    'has_subtitles': 1,
                    'has_richsync': 1,
                    'num_favourite': 2130,
                    'album_id': 31234760,
                    'album_name': 'thank u, next',
                    'artist_id': 13958599,
                    'artist_name': 'Ariana Grande',
                    'track_share_url': 'https:\/\/www.musixmatch.com\/lyrics\/Ariana-Grande\/7-rings?utm_source=application&utm_campaign=api&utm_medium=FruitSarcop%3A1409618278546',
                    'track_edit_url': 'https:\/\/www.musixmatch.com\/lyrics\/Ariana-Grande\/7-rings\/edit?utm_source=application&utm_campaign=api&utm_medium=FruitSarcop%3A1409618278546',
                    'restricted': 0,
                    'updated_time': '2019-03-22T15:28:01Z',
                    'primary_genres': {
                        'music_genre_list': [{
                            'music_genre': {
                                'music_genre_id': 14,
                                'music_genre_parent_id': 34,
                                'music_genre_name': 'Pop',
                                'music_genre_name_extended': 'Pop',
                                'music_genre_vanity': 'Pop'
                            }
                        }]
                    }
                }
            }]
        }
    }
};
