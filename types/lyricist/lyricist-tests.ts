// Type definitions for lyricist 2.2.2
// Project: https://github.com/scf4/lyricist, https://www.npmjs.com/package/lyricist
// Definitions by: Aleksei Klimenko <https://github.com/DadUndead>
// Definitions: https://github.com/DefinitelyTyped/
// TypeScript Version: 2.7

import Lyricist, { IAlbum, IArtist, ISearchResult, ISong, ISongByArtist, LyricistTextFormat } from 'lyricist';

const lyricist = new Lyricist('access_token');

Promise
    .all([
        lyricist.album(1, { fetchTracklist: true, textFormat: LyricistTextFormat.PLAIN }),
        lyricist.artist(1, { textFormat: LyricistTextFormat.PLAIN }),
        lyricist.artistByName('any_artist', { textFormat: LyricistTextFormat.PLAIN }),
        lyricist.search('any_song'),
        lyricist.song(1, { fetchLyrics: true, textFormat: LyricistTextFormat.PLAIN }),
        lyricist.songsByArtist(1, { page: 1, perPage: 10, sort: 'asc' }),
    ])
    .then((results) => {
        const album: IAlbum = results[0];
        const artist: IArtist = results[1];
        const artistByName: IArtist = results[2];
        const searchResult: ISearchResult[] = results[3];
        const song: ISong = results[4];
        const songsByArtist: ISongByArtist[] = results[5];

        console.log('album', album.name);
        console.log('artist', artist.name);
        console.log('artistByName', artistByName.name);
        console.log('searchResult length', searchResult.length);
        console.log('song', song.title);
        console.log('songsByArtist length', songsByArtist.length);
    });




