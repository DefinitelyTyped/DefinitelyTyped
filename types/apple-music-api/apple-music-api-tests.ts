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

const AlbumResponse: AppleMusicApi.AlbumResponse = {
    data: [
        {
            id: '724267459',
            type: 'albums',
            href: '/v1/catalog/us/albums/724267459',
            attributes: {
                artwork: {
                    width: 1404,
                    height: 1404,
                    url:
                        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/a0/19/49a019b1-f683-cce1-de4d-6c42490fbfa9/00724353822859.rgb.jpg/{w}x{h}bb.jpeg',
                    bgColor: '4f403d',
                    textColor1: 'edd8b7',
                    textColor2: 'e3cbb2',
                    textColor3: 'cdba9f',
                    textColor4: 'c6af9b',
                },
                artistName: 'Bill Evans & Jim Hall',
                isSingle: false,
                url: 'https://music.apple.com/us/album/undercurrent/724267459',
                isComplete: true,
                genreNames: ['Jazz', 'Music', 'Rock'],
                trackCount: 10,
                isMasteredForItunes: false,
                releaseDate: '1962-08-01',
                name: 'Undercurrent',
                recordLabel: 'Blue Note Records',
                copyright: '℗ 2002 Blue Note Records',
                playParams: { id: '724267459', kind: 'album' },
                isCompilation: false,
            },
            relationships: {
                artists: {
                    href: '/v1/catalog/us/albums/724267459/artists',
                    data: [
                        { id: '117975', type: 'artists', href: '/v1/catalog/us/artists/117975' },
                        { id: '125367', type: 'artists', href: '/v1/catalog/us/artists/125367' },
                    ],
                },
                tracks: {
                    href: '/v1/catalog/us/albums/724267459/tracks',
                    data: [
                        {
                            id: '724268145',
                            type: 'songs',
                            href: '/v1/catalog/us/songs/724268145',
                            attributes: {
                                previews: [
                                    {
                                        url:
                                            'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/5d/2b/d6/5d2bd6ea-63ce-33dd-4d3f-ab9943f79cbe/mzaf_19249258648508448.plus.aac.p.m4a',
                                    },
                                ],
                                artwork: {
                                    width: 1404,
                                    height: 1404,
                                    url:
                                        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/a0/19/49a019b1-f683-cce1-de4d-6c42490fbfa9/00724353822859.rgb.jpg/{w}x{h}bb.jpeg',
                                    bgColor: '4f403d',
                                    textColor1: 'edd8b7',
                                    textColor2: 'e3cbb2',
                                    textColor3: 'cdba9f',
                                    textColor4: 'c6af9b',
                                },
                                artistName: 'Bill Evans & Jim Hall',
                                url: 'https://music.apple.com/us/album/my-funny-valentine/724267459?i=724268145',
                                discNumber: 1,
                                genreNames: ['Jazz', 'Music', 'Rock'],
                                durationInMillis: 324133,
                                releaseDate: '1962-08-01',
                                name: 'My Funny Valentine',
                                isrc: 'USBN28800046',
                                hasLyrics: false,
                                albumName: 'Undercurrent',
                                playParams: { id: '724268145', kind: 'song' },
                                trackNumber: 1,
                            },
                        },
                        {
                            id: '724268321',
                            type: 'songs',
                            href: '/v1/catalog/us/songs/724268321',
                            attributes: {
                                previews: [
                                    {
                                        url:
                                            'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/d9/0a/48/d90a484d-0495-72e8-16f4-fe563331bca9/mzaf_4373823737470643563.plus.aac.p.m4a',
                                    },
                                ],
                                artwork: {
                                    width: 1404,
                                    height: 1404,
                                    url:
                                        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/a0/19/49a019b1-f683-cce1-de4d-6c42490fbfa9/00724353822859.rgb.jpg/{w}x{h}bb.jpeg',
                                    bgColor: '4f403d',
                                    textColor1: 'edd8b7',
                                    textColor2: 'e3cbb2',
                                    textColor3: 'cdba9f',
                                    textColor4: 'c6af9b',
                                },
                                artistName: 'Bill Evans & Jim Hall',
                                url: 'https://music.apple.com/us/album/i-hear-a-rhapsody/724267459?i=724268321',
                                discNumber: 1,
                                genreNames: ['Jazz', 'Music', 'Rock'],
                                durationInMillis: 280027,
                                releaseDate: '1962-08-01',
                                name: 'I Hear a Rhapsody',
                                isrc: 'USBN28800050',
                                hasLyrics: false,
                                albumName: 'Undercurrent',
                                playParams: { id: '724268321', kind: 'song' },
                                trackNumber: 2,
                            },
                        },
                        {
                            id: '724268434',
                            type: 'songs',
                            href: '/v1/catalog/us/songs/724268434',
                            attributes: {
                                previews: [
                                    {
                                        url:
                                            'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/6c/ad/38/6cad38b5-efda-9673-aa11-5748cb565a67/mzaf_1289726545427658319.plus.aac.p.m4a',
                                    },
                                ],
                                artwork: {
                                    width: 1404,
                                    height: 1404,
                                    url:
                                        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/a0/19/49a019b1-f683-cce1-de4d-6c42490fbfa9/00724353822859.rgb.jpg/{w}x{h}bb.jpeg',
                                    bgColor: '4f403d',
                                    textColor1: 'edd8b7',
                                    textColor2: 'e3cbb2',
                                    textColor3: 'cdba9f',
                                    textColor4: 'c6af9b',
                                },
                                artistName: 'Bill Evans & Jim Hall',
                                url: 'https://music.apple.com/us/album/dream-gypsy/724267459?i=724268434',
                                discNumber: 1,
                                genreNames: ['Jazz', 'Music', 'Rock'],
                                durationInMillis: 274907,
                                releaseDate: '1962-08-01',
                                name: 'Dream Gypsy',
                                isrc: 'USBN28800057',
                                hasLyrics: false,
                                albumName: 'Undercurrent',
                                playParams: { id: '724268434', kind: 'song' },
                                trackNumber: 3,
                            },
                        },
                        {
                            id: '724268744',
                            type: 'songs',
                            href: '/v1/catalog/us/songs/724268744',
                            attributes: {
                                previews: [
                                    {
                                        url:
                                            'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/b1/71/0a/b1710af0-c872-e701-3643-d35f03138cf7/mzaf_8330540741852324073.plus.aac.p.m4a',
                                    },
                                ],
                                artwork: {
                                    width: 1404,
                                    height: 1404,
                                    url:
                                        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/a0/19/49a019b1-f683-cce1-de4d-6c42490fbfa9/00724353822859.rgb.jpg/{w}x{h}bb.jpeg',
                                    bgColor: '4f403d',
                                    textColor1: 'edd8b7',
                                    textColor2: 'e3cbb2',
                                    textColor3: 'cdba9f',
                                    textColor4: 'c6af9b',
                                },
                                artistName: 'Bill Evans & Jim Hall',
                                url: 'https://music.apple.com/us/album/romain/724267459?i=724268744',
                                discNumber: 1,
                                genreNames: ['Jazz', 'Music', 'Rock'],
                                durationInMillis: 323733,
                                releaseDate: '1962-08-01',
                                name: 'Romain',
                                isrc: 'USBN28800070',
                                hasLyrics: false,
                                albumName: 'Undercurrent',
                                playParams: { id: '724268744', kind: 'song' },
                                trackNumber: 4,
                            },
                        },
                        {
                            id: '724268881',
                            type: 'songs',
                            href: '/v1/catalog/us/songs/724268881',
                            attributes: {
                                previews: [
                                    {
                                        url:
                                            'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/45/62/ab/4562ab19-34f0-ee62-a520-2d61c6df4006/mzaf_6215609023780375342.plus.aac.p.m4a',
                                    },
                                ],
                                artwork: {
                                    width: 1404,
                                    height: 1404,
                                    url:
                                        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/a0/19/49a019b1-f683-cce1-de4d-6c42490fbfa9/00724353822859.rgb.jpg/{w}x{h}bb.jpeg',
                                    bgColor: '4f403d',
                                    textColor1: 'edd8b7',
                                    textColor2: 'e3cbb2',
                                    textColor3: 'cdba9f',
                                    textColor4: 'c6af9b',
                                },
                                artistName: 'Bill Evans & Jim Hall',
                                url: 'https://music.apple.com/us/album/skating-in-central-park/724267459?i=724268881',
                                discNumber: 1,
                                genreNames: ['Jazz', 'Music', 'Rock'],
                                durationInMillis: 324200,
                                releaseDate: '1962-08-01',
                                name: 'Skating in Central Park',
                                isrc: 'USBN28800068',
                                hasLyrics: false,
                                albumName: 'Undercurrent',
                                playParams: { id: '724268881', kind: 'song' },
                                trackNumber: 5,
                            },
                        },
                        {
                            id: '724268981',
                            type: 'songs',
                            href: '/v1/catalog/us/songs/724268981',
                            attributes: {
                                previews: [
                                    {
                                        url:
                                            'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/d0/d6/d6/d0d6d66e-f8b3-987d-8727-64a79fcf98d7/mzaf_6068312354104386724.plus.aac.p.m4a',
                                    },
                                ],
                                artwork: {
                                    width: 1404,
                                    height: 1404,
                                    url:
                                        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/a0/19/49a019b1-f683-cce1-de4d-6c42490fbfa9/00724353822859.rgb.jpg/{w}x{h}bb.jpeg',
                                    bgColor: '4f403d',
                                    textColor1: 'edd8b7',
                                    textColor2: 'e3cbb2',
                                    textColor3: 'cdba9f',
                                    textColor4: 'c6af9b',
                                },
                                artistName: 'Bill Evans & Jim Hall',
                                url: 'https://music.apple.com/us/album/darn-that-dream/724267459?i=724268981',
                                discNumber: 1,
                                genreNames: ['Jazz', 'Music', 'Rock'],
                                durationInMillis: 309667,
                                releaseDate: '1962-08-01',
                                name: 'Darn That Dream',
                                isrc: 'USBN28800072',
                                hasLyrics: false,
                                albumName: 'Undercurrent',
                                playParams: { id: '724268981', kind: 'song' },
                                trackNumber: 6,
                            },
                        },
                        {
                            id: '724269087',
                            type: 'songs',
                            href: '/v1/catalog/us/songs/724269087',
                            attributes: {
                                previews: [
                                    {
                                        url:
                                            'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/31/12/c8/3112c8db-ed34-27eb-1e1a-99f9164c72cf/mzaf_826807019905127489.plus.aac.p.m4a',
                                    },
                                ],
                                artwork: {
                                    width: 1404,
                                    height: 1404,
                                    url:
                                        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/a0/19/49a019b1-f683-cce1-de4d-6c42490fbfa9/00724353822859.rgb.jpg/{w}x{h}bb.jpeg',
                                    bgColor: '4f403d',
                                    textColor1: 'edd8b7',
                                    textColor2: 'e3cbb2',
                                    textColor3: 'cdba9f',
                                    textColor4: 'c6af9b',
                                },
                                artistName: 'Bill Evans & Jim Hall',
                                url: 'https://music.apple.com/us/album/stairway-to-the-stars/724267459?i=724269087',
                                discNumber: 1,
                                genreNames: ['Jazz', 'Music', 'Rock'],
                                durationInMillis: 341360,
                                releaseDate: '1962-08-01',
                                name: 'Stairway to the Stars',
                                isrc: 'USBN28800058',
                                hasLyrics: false,
                                albumName: 'Undercurrent',
                                playParams: { id: '724269087', kind: 'song' },
                                trackNumber: 7,
                            },
                        },
                        {
                            id: '724269287',
                            type: 'songs',
                            href: '/v1/catalog/us/songs/724269287',
                            attributes: {
                                previews: [
                                    {
                                        url:
                                            'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/86/fe/5c/86fe5cb5-c008-cf7e-9d81-f66d93f3f019/mzaf_2000914020597532653.plus.aac.p.m4a',
                                    },
                                ],
                                artwork: {
                                    width: 1404,
                                    height: 1404,
                                    url:
                                        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/a0/19/49a019b1-f683-cce1-de4d-6c42490fbfa9/00724353822859.rgb.jpg/{w}x{h}bb.jpeg',
                                    bgColor: '4f403d',
                                    textColor1: 'edd8b7',
                                    textColor2: 'e3cbb2',
                                    textColor3: 'cdba9f',
                                    textColor4: 'c6af9b',
                                },
                                artistName: 'Bill Evans & Jim Hall',
                                url:
                                    'https://music.apple.com/us/album/im-getting-sentimental-over-you/724267459?i=724269287',
                                discNumber: 1,
                                genreNames: ['Jazz', 'Music', 'Rock'],
                                durationInMillis: 257173,
                                releaseDate: '1962-08-01',
                                name: "I'm Getting Sentimental Over You",
                                isrc: 'USBN28800061',
                                hasLyrics: false,
                                albumName: 'Undercurrent',
                                playParams: { id: '724269287', kind: 'song' },
                                trackNumber: 8,
                            },
                        },
                        {
                            id: '724269296',
                            type: 'songs',
                            href: '/v1/catalog/us/songs/724269296',
                            attributes: {
                                previews: [
                                    {
                                        url:
                                            'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/e6/3e/35/e63e35d7-248f-c32e-f455-208c4c223403/mzaf_8986437351761727739.plus.aac.p.m4a',
                                    },
                                ],
                                artwork: {
                                    width: 1404,
                                    height: 1404,
                                    url:
                                        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/a0/19/49a019b1-f683-cce1-de4d-6c42490fbfa9/00724353822859.rgb.jpg/{w}x{h}bb.jpeg',
                                    bgColor: '4f403d',
                                    textColor1: 'edd8b7',
                                    textColor2: 'e3cbb2',
                                    textColor3: 'cdba9f',
                                    textColor4: 'c6af9b',
                                },
                                artistName: 'Bill Evans & Jim Hall',
                                url:
                                    'https://music.apple.com/us/album/my-funny-valentine-alternate-take/724267459?i=724269296',
                                discNumber: 1,
                                genreNames: ['Jazz', 'Music', 'Rock'],
                                durationInMillis: 417333,
                                releaseDate: '1962-08-01',
                                name: 'My Funny Valentine (Alternate Take)',
                                isrc: 'USBN28800048',
                                hasLyrics: false,
                                albumName: 'Undercurrent',
                                playParams: { id: '724269296', kind: 'song' },
                                trackNumber: 9,
                            },
                        },
                        {
                            id: '724269303',
                            type: 'songs',
                            href: '/v1/catalog/us/songs/724269303',
                            attributes: {
                                previews: [
                                    {
                                        url:
                                            'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/55/a0/15/55a01597-8b5b-f005-c50b-fea403d891c6/mzaf_7813452762302698698.plus.aac.p.m4a',
                                    },
                                ],
                                artwork: {
                                    width: 1404,
                                    height: 1404,
                                    url:
                                        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/a0/19/49a019b1-f683-cce1-de4d-6c42490fbfa9/00724353822859.rgb.jpg/{w}x{h}bb.jpeg',
                                    bgColor: '4f403d',
                                    textColor1: 'edd8b7',
                                    textColor2: 'e3cbb2',
                                    textColor3: 'cdba9f',
                                    textColor4: 'c6af9b',
                                },
                                artistName: 'Bill Evans & Jim Hall',
                                url: 'https://music.apple.com/us/album/romain-alternate-take/724267459?i=724269303',
                                discNumber: 1,
                                genreNames: ['Jazz', 'Music', 'Rock'],
                                durationInMillis: 324733,
                                releaseDate: '1962-08-01',
                                name: 'Romain (Alternate Take)',
                                isrc: 'USBN28800065',
                                hasLyrics: false,
                                albumName: 'Undercurrent',
                                playParams: { id: '724269303', kind: 'song' },
                                trackNumber: 10,
                            },
                        },
                    ],
                },
            },
        },
    ],
};

const PlaylistResponse: AppleMusicApi.PlaylistResponse = {
    data: [
        {
            id: 'pl.faeb447ec5a341ef83e7e65189bd1c63',
            type: 'playlists',
            href: '/v1/catalog/us/playlists/pl.faeb447ec5a341ef83e7e65189bd1c63',
            attributes: {
                artwork: {
                    width: 4320,
                    height: 1080,
                    url:
                        'https://is1-ssl.mzstatic.com/image/thumb/Features113/v4/7f/44/7f/7f447ffc-f8d8-381c-9d8f-2952522439b9/source/{w}x{h}cc.jpeg',
                    bgColor: '454545',
                    textColor1: 'fbd8db',
                    textColor2: 'f3b5b4',
                    textColor3: 'd7babd',
                    textColor4: 'd09f9e',
                },
                isChart: false,
                url: 'https://music.apple.com/us/playlist/vol-de-nuit/pl.faeb447ec5a341ef83e7e65189bd1c63',
                lastModifiedDate: '2020-05-15T08:56:01Z',
                name: 'Vol de nuit',
                playlistType: 'editorial',
                curatorName: 'Apple Music',
                playParams: { id: 'pl.faeb447ec5a341ef83e7e65189bd1c63', kind: 'playlist' },
                description: {
                    standard:
                        // tslint:disable-next-line:max-line-length
                        'Reflective indie, dreamlike folk, sophisticated jazz funk, muted electronics—take a journey through late-night sounds and understated grooves, current and past, with this distraction-free soundtrack tailor-made for reading relaxing, or just getting your work done. Our editors regularly update this playlist with new music. If you hear something you like, add it to your library.',
                    short: 'A journey through late-night sounds and understated grooves.',
                },
            },
            relationships: {
                curator: {
                    href: '/v1/catalog/us/playlists/pl.faeb447ec5a341ef83e7e65189bd1c63/curator',
                    data: [],
                },
                tracks: {
                    href: '/v1/catalog/us/playlists/pl.faeb447ec5a341ef83e7e65189bd1c63/tracks',
                    next: '/v1/catalog/us/playlists/pl.faeb447ec5a341ef83e7e65189bd1c63/tracks?offset=100',
                    data: [
                        {
                            id: '1508383997',
                            type: 'songs',
                            href: '/v1/catalog/us/songs/1508383997',
                            attributes: {
                                previews: [
                                    {
                                        url:
                                            'https://audio-ssl.itunes.apple.com/itunes-assets/Music6/v4/d0/fb/ac/d0fbac69-1a09-9e09-99d7-0ce20dca9a31/mzaf_3801033891693354111.plus.aac.p.m4a',
                                    },
                                ],

                                artwork: {
                                    width: 1404,
                                    height: 1404,
                                    url:
                                        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/a0/19/49a019b1-f683-cce1-de4d-6c42490fbfa9/00724353822859.rgb.jpg/{w}x{h}bb.jpeg',
                                    bgColor: '4f403d',
                                    textColor1: 'edd8b7',
                                    textColor2: 'e3cbb2',
                                    textColor3: 'cdba9f',
                                    textColor4: 'c6af9b',
                                },

                                artistName: 'James Blake',
                                url: 'https://music.apple.com/us/album/youre-too-precious/1508383774?i=1508383997',
                                discNumber: 1,
                                genreNames: ['Pop'],
                                durationInMillis: 223900,
                                releaseDate: '2020-04-24',
                                name: "You're Too Precious",
                                isrc: 'GBUM72001738',
                                hasLyrics: true,
                                albumName: "You're Too Precious - Single",
                                playParams: { id: '12345', kind: 'song' },
                                trackNumber: 1,
                                composerName: 'James Blake & Dominic Maker',
                            },
                        },
                    ],
                },
            },
        },
    ],
};

const ArtistResponse: AppleMusicApi.ArtistResponse = {
    data: [
        {
            id: '367955316',
            type: 'artists',
            href: '/v1/catalog/us/artists/367955316',
            attributes: {
                editorialNotes: {
                    short: 'short note',
                    standard: 'elaborated, standard-length note',
                },
                genreNames: ['Jazz', 'Rock'],
                name: 'artist name',
                url: 'artist/url',
            },
            relationships: {
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
