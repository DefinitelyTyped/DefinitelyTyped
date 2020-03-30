const songResponse: AppleMusicApi.SongResponse = {
    data: [
        {
            id: '897072750',
            type: 'songs',
            href: '/v1/catalog/us/songs/897072750',
            attributes: {
                previews: [
                    {
                        url:
                            'https://audio-ssl.itunes.apple.com/itunes-assets/Music6/v4/d0/fb/ac/d0fbac69-1a09-9e09-99d7-0ce20dca9a31/mzaf_3801033891693354111.plus.aac.p.m4a',
                    },
                ],
                artwork: {
                    width: 1482,
                    height: 1482,
                    url:
                        'https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/d1/5e/bf/d15ebf24-733b-980d-d582-e27f72001ff8/3149027001014.jpg/{w}x{h}bb.jpeg',
                    bgColor: '08080a',
                    textColor1: 'fafafc',
                    textColor2: 'dfdfdf',
                    textColor3: 'cacacc',
                    textColor4: 'b4b4b5',
                },
                artistName: 'Ahmad Jamal',
                url: 'https://music.apple.com/us/album/invitation-live/897072740?i=897072750',
                discNumber: 1,
                genreNames: ['Jazz', 'Music'],
                durationInMillis: 672280,
                releaseDate: '2014-07-28',
                name: 'Invitation (Live)',
                isrc: 'FR5FH1300035',
                hasLyrics: false,
                albumName: 'Live At the Olympia - June 27, 2012 (Live) [feat. Yusef Lateef]',
                playParams: {
                    id: '897072750',
                    kind: 'song',
                },
                trackNumber: 4,
                composerName: 'Bronisław Kaper',
            },
            relationships: {
                artists: {
                    data: [
                        {
                            id: '76328',
                            type: 'artists',
                            href: '/v1/catalog/us/artists/76328',
                        },
                    ],
                    href: '/v1/catalog/us/songs/897072750/artists',
                },
                albums: {
                    data: [
                        {
                            id: '897072740',
                            type: 'albums',
                            href: '/v1/catalog/us/albums/897072740',
                        },
                    ],
                    href: '/v1/catalog/us/songs/897072750/albums',
                },
            },
        },
    ],
};
