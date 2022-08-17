/*
 * Taken from https://beta.developer.spotify.com/documentation/web-playback-sdk/reference/
 * © 2017 Spotify AB
 */

const player = new window.Spotify.Player({
    name: "Carly Rae Jepsen Player",
    getOAuthToken: (callback: (t: string) => void) => {
        // Run code to get a fresh access token
        callback("access token here");
    },
    volume: 0.5
});
// https://developer.spotify.com/documentation/web-playback-sdk/reference/#playing-a-spotify-uri
const {id: device_id} = player._options;

player.connect().then((success: boolean) => {
    if (success) {
        console.log("The Web Playback SDK successfully connected to Spotify!");
    }
});

player.disconnect();

player.addListener("ready", (data) => {
    console.log("The Web Playback SDK is ready to play music!");
});

player.addListener("not_ready", ({ device_id }) => {
    console.log("The Web Playback SDK is not ready to play music!");
});

player.addListener("autoplay_failed", () => {
    console.log("Autoplay is turned off for your browser");
});

player.getCurrentState().then((playbackState: Spotify.PlaybackState | null) => {
    if (playbackState) {
        const { current_track, next_tracks } = playbackState.track_window;
        const repeatMode: 0 | 1 | 2 = playbackState.repeat_mode;
        const images = current_track.album.images;
        if (images.length) {
            const { 0: { height, width } } = images;
        }

        console.log("Currently Playing", current_track);
        console.log("Playing Next", next_tracks[0]);
    } else {
        console.error("The user is not playing music through the Web Playback SDK");
    }
});

player.getVolume().then((volume: number) => {
    const volume_percentage = (volume * 100);
    console.log(`The volume of the player is ${volume_percentage}%`);
});

player.setName("New player name").then(() => {
    console.log("Player name updated!");
});

player.setVolume(0.5).then(() => {
    console.log("Volume updated!");
});

player.pause().then(() => {
    console.log("Paused!");
});

player.resume().then(() => {
    console.log("Resumed!");
});

player.togglePlay().then(() => {
    console.log("Toggled playback!");
});

player.seek(60 * 1000).then(() => {
    console.log("Changed position!");
});

player.previousTrack().then(() => {
    console.log("Set to previous track!");
});

player.nextTrack().then(() => {
    console.log("Skipped to next track!");
});

player.activateElement().then(() => {
    console.log("Web app played music automatically.");
});

player.on("ready", (data: Spotify.WebPlaybackInstance) => {
    const { device_id } = data;
    console.log("Connected with Device ID", device_id);
});

player.on("not_ready", (data: Spotify.WebPlaybackInstance) => {
    const { device_id } = data;
    console.log("Connected with Device ID", device_id);
});

player.on("autoplay_failed", () => {
    console.log("Autoplay failed");
});

player.on("player_state_changed", (playbackState: Spotify.PlaybackState) => {
    const { context, position, duration, track_window } = playbackState;
    const { current_track } = track_window;

    console.log("Currently Playing", current_track);
    console.log("Position in Song", position);
    console.log("Duration of Song", duration);
    console.log("Playback context", context);

    if (context) {
        const { metadata, uri } = context;

        if (!metadata) return;
        const { current_item, next_items, previous_items, options } = metadata;
        console.log("Playback context's URI", uri);
        console.log("Playback context's current track", current_item);
        console.log("Playback context's previous tracks", previous_items);
        console.log("Playback context's next tracks", next_items);
        console.log("Playback context's shuffle state", options.shuffled);
        console.log("Playback context's repeat mode", options.repeat_mode);
    }
});

player.addListener('initialization_error', (e: Spotify.Error) => {
    console.error("Failed to initialize", e.message);
});

player.addListener('authentication_error', (e: Spotify.Error) => {
    console.error("Failed to authenticate", e.message);
});

player.addListener('account_error', (e: Spotify.Error) => {
    console.error("Failed to validate Spotify account", e.message);
});

const listener = (e: Spotify.Error) => {
    console.error("Failed to perform playback", e.message);
};
player.addListener('playback_error', listener);
player.addListener('playback_error', () => {});
player.removeListener('playback_error', () => {});

player.removeListener('playback_error');
player.removeListener('playback_error', listener);

/*
 * Sample Objects
 *
 * These objects were sampled directly from the API ("player_state_changed" event).
 */

const SAMPLE_PLAYBACK_STATE: Spotify.PlaybackState = {
    timestamp: 1660184620274,
    context: {
        uri: "spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
        metadata: {
            name: "Junipero",
            uri: "spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
            url: "context://spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
            current_item: {
                name: "Waxwing Air",
                uri: "spotify:track:5O5vhPvmMpNiUcqe1qC6AK",
                url: "https://api.spotify.com/v1/tracks/5O5vhPvmMpNiUcqe1qC6AK",
                uid: "dbfb3ba39af8ba8dd2f8",
                content_type: "TRACK",
                artists: [
                    {
                        name: "Huerta",
                        uri: "spotify:artist:5RJa5zWNuVuSfqJB0Jx2ZY",
                        url: "https://api.spotify.com/v1/artists/5RJa5zWNuVuSfqJB0Jx2ZY"
                    }
                ],
                images: [
                    {
                        url: "https://i.scdn.co/image/ab67616d00001e0211bd1066e9c7e3883db5f20e",
                        height: 300,
                        width: 300,
                        size: "UNKNOWN"
                    },
                    {
                        url: "https://i.scdn.co/image/ab67616d0000485111bd1066e9c7e3883db5f20e",
                        height: 64,
                        width: 64,
                        size: "SMALL"
                    },
                    {
                        url: "https://i.scdn.co/image/ab67616d0000b27311bd1066e9c7e3883db5f20e",
                        height: 640,
                        width: 640,
                        size: "LARGE"
                    }
                ],
                estimated_duration: 205984,
                group: {
                    name: "Junipero",
                    uri: "spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
                    url: "https://api.spotify.com/v1/albums/1ZrM8aghuJvo3sF4L7zrjH"
                }
            },
            previous_items: [
                {
                    name: "Aerial Interlude",
                    uri: "spotify:track:2PSFYm7x9XQjAPzGx59Fix",
                    url: "https://api.spotify.com/v1/tracks/2PSFYm7x9XQjAPzGx59Fix",
                    uid: "799384a1206cda1ec354",
                    content_type: "TRACK",
                    artists: [
                        {
                            name: "Huerta",
                            uri: "spotify:artist:5RJa5zWNuVuSfqJB0Jx2ZY",
                            url: "https://api.spotify.com/v1/artists/5RJa5zWNuVuSfqJB0Jx2ZY"
                        }
                    ],
                    images: [
                        {
                            url: "https://i.scdn.co/image/ab67616d00001e0211bd1066e9c7e3883db5f20e",
                            height: 300,
                            width: 300,
                            size: "UNKNOWN"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000485111bd1066e9c7e3883db5f20e",
                            height: 64,
                            width: 64,
                            size: "SMALL"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000b27311bd1066e9c7e3883db5f20e",
                            height: 640,
                            width: 640,
                            size: "LARGE"
                        }
                    ],
                    estimated_duration: 132000,
                    group: {
                        name: "Junipero",
                        uri: "spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
                        url: "https://api.spotify.com/v1/albums/1ZrM8aghuJvo3sF4L7zrjH"
                    }
                },
                {
                    name: "Plant Memory",
                    uri: "spotify:track:2riha2KKZMqEPtnK0HaT1j",
                    url: "https://api.spotify.com/v1/tracks/2riha2KKZMqEPtnK0HaT1j",
                    uid: "955d22b524c2863d60d8",
                    content_type: "TRACK",
                    artists: [
                        {
                            name: "Huerta",
                            uri: "spotify:artist:5RJa5zWNuVuSfqJB0Jx2ZY",
                            url: "https://api.spotify.com/v1/artists/5RJa5zWNuVuSfqJB0Jx2ZY"
                        }
                    ],
                    images: [
                        {
                            url: "https://i.scdn.co/image/ab67616d00001e0211bd1066e9c7e3883db5f20e",
                            height: 300,
                            width: 300,
                            size: "UNKNOWN"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000485111bd1066e9c7e3883db5f20e",
                            height: 64,
                            width: 64,
                            size: "SMALL"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000b27311bd1066e9c7e3883db5f20e",
                            height: 640,
                            width: 640,
                            size: "LARGE"
                        }
                    ],
                    estimated_duration: 480000,
                    group: {
                        name: "Junipero",
                        uri: "spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
                        url: "https://api.spotify.com/v1/albums/1ZrM8aghuJvo3sF4L7zrjH"
                    }
                }
            ],
            next_items: [
                {
                    name: "The Ritual",
                    uri: "spotify:track:00psxjEcTkNXI6aN2AS0eK",
                    url: "https://api.spotify.com/v1/tracks/00psxjEcTkNXI6aN2AS0eK",
                    uid: "f9c364933a81920d3e50",
                    content_type: "TRACK",
                    artists: [
                        {
                            name: "Huerta",
                            uri: "spotify:artist:5RJa5zWNuVuSfqJB0Jx2ZY",
                            url: "https://api.spotify.com/v1/artists/5RJa5zWNuVuSfqJB0Jx2ZY"
                        }
                    ],
                    images: [
                        {
                            url: "https://i.scdn.co/image/ab67616d00001e0211bd1066e9c7e3883db5f20e",
                            height: 300,
                            width: 300,
                            size: "UNKNOWN"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000485111bd1066e9c7e3883db5f20e",
                            height: 64,
                            width: 64,
                            size: "SMALL"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000b27311bd1066e9c7e3883db5f20e",
                            height: 640,
                            width: 640,
                            size: "LARGE"
                        }
                    ],
                    estimated_duration: 294803,
                    group: {
                        name: "Junipero",
                        uri: "spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
                        url: "https://api.spotify.com/v1/albums/1ZrM8aghuJvo3sF4L7zrjH"
                    }
                },
                {
                    name: "Road to Toco",
                    uri: "spotify:track:3ORpfjOzaZhv4pcWfnl9lX",
                    url: "https://api.spotify.com/v1/tracks/3ORpfjOzaZhv4pcWfnl9lX",
                    uid: "14c2b4f9ede5206ad327",
                    content_type: "TRACK",
                    artists: [
                        {
                            name: "Huerta",
                            uri: "spotify:artist:5RJa5zWNuVuSfqJB0Jx2ZY",
                            url: "https://api.spotify.com/v1/artists/5RJa5zWNuVuSfqJB0Jx2ZY"
                        }
                    ],
                    images: [
                        {
                            url: "https://i.scdn.co/image/ab67616d00001e0211bd1066e9c7e3883db5f20e",
                            height: 300,
                            width: 300,
                            size: "UNKNOWN"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000485111bd1066e9c7e3883db5f20e",
                            height: 64,
                            width: 64,
                            size: "SMALL"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000b27311bd1066e9c7e3883db5f20e",
                            height: 640,
                            width: 640,
                            size: "LARGE"
                        }
                    ],
                    estimated_duration: 317480,
                    group: {
                        name: "Junipero",
                        uri: "spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
                        url: "https://api.spotify.com/v1/albums/1ZrM8aghuJvo3sF4L7zrjH"
                    }
                }
            ],
            options: {
                shuffled: false,
                repeat_mode: "CONTEXT"
            },
            restrictions: {
                pause: [],
                resume: [],
                seek: [],
                skip_next: [],
                skip_prev: [],
                toggle_repeat_context: [],
                toggle_repeat_track: [],
                toggle_shuffle: [],
                peek_next: [],
                peek_prev: []
            }
        }
    },
    duration: 206031,
    paused: false,
    shuffle: false,
    position: 0,
    loading: false,
    repeat_mode: 1,
    track_window: {
        current_track: {
            id: "5O5vhPvmMpNiUcqe1qC6AK",
            uri: "spotify:track:5O5vhPvmMpNiUcqe1qC6AK",
            type: "track",
            uid: "dbfb3ba39af8ba8dd2f8",
            linked_from: {
                uri: null,
                id: null
            },
            media_type: "audio",
            track_type: "audio",
            name: "Waxwing Air",
            duration_ms: 206031,
            artists: [
                {
                    name: "Huerta",
                    uri: "spotify:artist:5RJa5zWNuVuSfqJB0Jx2ZY",
                    url: "https://api.spotify.com/v1/artists/5RJa5zWNuVuSfqJB0Jx2ZY"
                }
            ],
            album: {
                name: "Junipero",
                uri: "spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
                images: [
                    {
                        url: "https://i.scdn.co/image/ab67616d00001e0211bd1066e9c7e3883db5f20e",
                        height: 300,
                        width: 300,
                        size: "UNKNOWN"
                    },
                    {
                        url: "https://i.scdn.co/image/ab67616d0000485111bd1066e9c7e3883db5f20e",
                        height: 64,
                        width: 64,
                        size: "SMALL"
                    },
                    {
                        url: "https://i.scdn.co/image/ab67616d0000b27311bd1066e9c7e3883db5f20e",
                        height: 640,
                        width: 640,
                        size: "LARGE"
                    }
                ]
            },
            is_playable: true
        },
        next_tracks: [
            {
                id: "00psxjEcTkNXI6aN2AS0eK",
                uri: "spotify:track:00psxjEcTkNXI6aN2AS0eK",
                type: "track",
                uid: "f9c364933a81920d3e50",
                linked_from: {
                    uri: null,
                    id: null
                },
                media_type: "video",
                track_type: "video",
                name: "The Ritual",
                duration_ms: 294803,
                artists: [
                    {
                        name: "Huerta",
                        uri: "spotify:artist:5RJa5zWNuVuSfqJB0Jx2ZY",
                        url: "https://api.spotify.com/v1/artists/5RJa5zWNuVuSfqJB0Jx2ZY"
                    }
                ],
                album: {
                    name: "Junipero",
                    uri: "spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
                    images: [
                        {
                            url: "https://i.scdn.co/image/ab67616d00001e0211bd1066e9c7e3883db5f20e",
                            height: 300,
                            width: 300,
                            size: "UNKNOWN"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000485111bd1066e9c7e3883db5f20e",
                            height: 64,
                            width: 64,
                            size: "SMALL"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000b27311bd1066e9c7e3883db5f20e",
                            height: 640,
                            width: 640,
                            size: "LARGE"
                        }
                    ]
                },
                is_playable: true
            },
            {
                id: "3ORpfjOzaZhv4pcWfnl9lX",
                uri: "spotify:track:3ORpfjOzaZhv4pcWfnl9lX",
                type: "track",
                uid: "14c2b4f9ede5206ad327",
                linked_from: {
                    uri: null,
                    id: null
                },
                media_type: "video",
                track_type: "video",
                name: "Road to Toco",
                duration_ms: 317480,
                artists: [
                    {
                        name: "Huerta",
                        uri: "spotify:artist:5RJa5zWNuVuSfqJB0Jx2ZY",
                        url: "https://api.spotify.com/v1/artists/5RJa5zWNuVuSfqJB0Jx2ZY"
                    }
                ],
                album: {
                    name: "Junipero",
                    uri: "spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
                    images: [
                        {
                            url: "https://i.scdn.co/image/ab67616d00001e0211bd1066e9c7e3883db5f20e",
                            height: 300,
                            width: 300,
                            size: "UNKNOWN"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000485111bd1066e9c7e3883db5f20e",
                            height: 64,
                            width: 64,
                            size: "SMALL"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000b27311bd1066e9c7e3883db5f20e",
                            height: 640,
                            width: 640,
                            size: "LARGE"
                        }
                    ]
                },
                is_playable: true
            }
        ],
        previous_tracks: [
            {
                id: "2PSFYm7x9XQjAPzGx59Fix",
                uri: "spotify:track:2PSFYm7x9XQjAPzGx59Fix",
                type: "track",
                uid: "799384a1206cda1ec354",
                linked_from: {
                    uri: null,
                    id: null
                },
                media_type: "video",
                track_type: "video",
                name: "Aerial Interlude",
                duration_ms: 132000,
                artists: [
                    {
                        name: "Huerta",
                        uri: "spotify:artist:5RJa5zWNuVuSfqJB0Jx2ZY",
                        url: "https://api.spotify.com/v1/artists/5RJa5zWNuVuSfqJB0Jx2ZY"
                    }
                ],
                album: {
                    name: "Junipero",
                    uri: "spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
                    images: [
                        {
                            url: "https://i.scdn.co/image/ab67616d00001e0211bd1066e9c7e3883db5f20e",
                            height: 300,
                            width: 300,
                            size: "UNKNOWN"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000485111bd1066e9c7e3883db5f20e",
                            height: 64,
                            width: 64,
                            size: "SMALL"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000b27311bd1066e9c7e3883db5f20e",
                            height: 640,
                            width: 640,
                            size: "LARGE"
                        }
                    ]
                },
                is_playable: true
            },
            {
                id: "2riha2KKZMqEPtnK0HaT1j",
                uri: "spotify:track:2riha2KKZMqEPtnK0HaT1j",
                type: "track",
                uid: "955d22b524c2863d60d8",
                linked_from: {
                    uri: null,
                    id: null
                },
                media_type: "video",
                track_type: "video",
                name: "Plant Memory",
                duration_ms: 480000,
                artists: [
                    {
                        name: "Huerta",
                        uri: "spotify:artist:5RJa5zWNuVuSfqJB0Jx2ZY",
                        url: "https://api.spotify.com/v1/artists/5RJa5zWNuVuSfqJB0Jx2ZY"
                    }
                ],
                album: {
                    name: "Junipero",
                    uri: "spotify:album:1ZrM8aghuJvo3sF4L7zrjH",
                    images: [
                        {
                            url: "https://i.scdn.co/image/ab67616d00001e0211bd1066e9c7e3883db5f20e",
                            height: 300,
                            width: 300,
                            size: "UNKNOWN"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000485111bd1066e9c7e3883db5f20e",
                            height: 64,
                            width: 64,
                            size: "SMALL"
                        },
                        {
                            url: "https://i.scdn.co/image/ab67616d0000b27311bd1066e9c7e3883db5f20e",
                            height: 640,
                            width: 640,
                            size: "LARGE"
                        }
                    ]
                },
                is_playable: true
            }
        ]
    },
    restrictions: {
        disallow_seeking_reasons: [],
        disallow_skipping_next_reasons: [],
        disallow_skipping_prev_reasons: [],
        disallow_toggling_repeat_context_reasons: [],
        disallow_toggling_repeat_track_reasons: [],
        disallow_toggling_shuffle_reasons: [],
        disallow_peeking_next_reasons: [],
        disallow_peeking_prev_reasons: [],
        disallow_resuming_reasons: [
            "not_paused"
        ]
    },
    disallows: {
        seeking: false,
        skipping_next: false,
        skipping_prev: false,
        toggling_repeat_context: false,
        toggling_repeat_track: false,
        toggling_shuffle: false,
        peeking_next: false,
        peeking_prev: false,
        resuming: true
    },
    playback_id: "8b7d741b1b1c2696643c87b3a48f4acb",
    playback_quality: "VERY_HIGH",
    playback_features: {
        hifi_status: "NONE"
    }
  };

  const SAMPLE_PLAYBACK_CONTEXT_PLAYLIST: Spotify.PlaybackContext = {
    uri: "spotify:playlist:2mSNUqjbKDmeLyTepjBZCN",
    metadata: {
        current_item: {
            content_type: "TRACK",
            artists: [
                {
                    name: "Andrew Prahlow",
                    uri: "spotify:artist:0z4uBJEzO1dJy57Qk5UYt8",
                    url: "https://api.spotify.com/v1/artists/0z4uBJEzO1dJy57Qk5UYt8"
                }
            ],
            images: [
                {
                    size: "UNKNOWN",
                    url: "https://i.scdn.co/image/ab67616d00001e02db6b8ae97f69fee1d432334d",
                    height: 300,
                    width: 300
                },
                {
                    size: "SMALL",
                    url: "https://i.scdn.co/image/ab67616d00004851db6b8ae97f69fee1d432334d",
                    height: 64,
                    width: 64
                },
                {
                    size: "LARGE",
                    url: "https://i.scdn.co/image/ab67616d0000b273db6b8ae97f69fee1d432334d",
                    height: 640,
                    width: 640
                }
            ],
            group: {
                name: "Outer Wilds (Original Soundtrack)",
                uri: "spotify:album:1U0A6RPNJB05PtuBcaTM7o",
                url: "https://api.spotify.com/v1/albums/1U0A6RPNJB05PtuBcaTM7o"
            },
            name: "The Ancient Glade",
            uri: "spotify:track:7BI5rh6FU3iTFUi6iUaejp",
            url: "https://api.spotify.com/v1/tracks/7BI5rh6FU3iTFUi6iUaejp",
            uid: "3e9a5227b0c46cd5",
            estimated_duration: 138351
        },
        previous_items: [
            {
                content_type: "TRACK",
                artists: [
                    {
                        name: "Andrew Prahlow",
                        uri: "spotify:artist:0z4uBJEzO1dJy57Qk5UYt8",
                        url: "https://api.spotify.com/v1/artists/0z4uBJEzO1dJy57Qk5UYt8"
                    }
                ],
                images: [
                    {
                        size: "UNKNOWN",
                        url: "https://i.scdn.co/image/ab67616d00001e02db6b8ae97f69fee1d432334d",
                        height: 300,
                        width: 300
                    },
                    {
                        size: "SMALL",
                        url: "https://i.scdn.co/image/ab67616d00004851db6b8ae97f69fee1d432334d",
                        height: 64,
                        width: 64
                    },
                    {
                        size: "LARGE",
                        url: "https://i.scdn.co/image/ab67616d0000b273db6b8ae97f69fee1d432334d",
                        height: 640,
                        width: 640
                    }
                ],
                group: {
                    name: "Outer Wilds (Original Soundtrack)",
                    uri: "spotify:album:1U0A6RPNJB05PtuBcaTM7o",
                    url: "https://api.spotify.com/v1/albums/1U0A6RPNJB05PtuBcaTM7o"
                },
                name: "The Sun Station",
                uri: "spotify:track:4HqRMBMPSURznbKLEZ4BpE",
                url: "https://api.spotify.com/v1/tracks/4HqRMBMPSURznbKLEZ4BpE",
                uid: "4deeff6558ec2251",
                estimated_duration: 158571
            },
            {
                content_type: "TRACK",
                artists: [
                    {
                        name: "Andrew Prahlow",
                        uri: "spotify:artist:0z4uBJEzO1dJy57Qk5UYt8",
                        url: "https://api.spotify.com/v1/artists/0z4uBJEzO1dJy57Qk5UYt8"
                    }
                ],
                images: [
                    {
                        size: "UNKNOWN",
                        url: "https://i.scdn.co/image/ab67616d00001e02db6b8ae97f69fee1d432334d",
                        height: 300,
                        width: 300
                    },
                    {
                        size: "SMALL",
                        url: "https://i.scdn.co/image/ab67616d00004851db6b8ae97f69fee1d432334d",
                        height: 64,
                        width: 64
                    },
                    {
                        size: "LARGE",
                        url: "https://i.scdn.co/image/ab67616d0000b273db6b8ae97f69fee1d432334d",
                        height: 640,
                        width: 640
                    }
                ],
                group: {
                    name: "Outer Wilds (Original Soundtrack)",
                    uri: "spotify:album:1U0A6RPNJB05PtuBcaTM7o",
                    url: "https://api.spotify.com/v1/albums/1U0A6RPNJB05PtuBcaTM7o"
                },
                name: "Nomai Ruins",
                uri: "spotify:track:7o3TtpN3zdmMHx4JTO5r0u",
                url: "https://api.spotify.com/v1/tracks/7o3TtpN3zdmMHx4JTO5r0u",
                uid: "c8938bacb48327e5",
                estimated_duration: 384918
            }
        ],
        next_items: [
            {
                content_type: "TRACK",
                artists: [
                    {
                        name: "Andrew Prahlow",
                        uri: "spotify:artist:0z4uBJEzO1dJy57Qk5UYt8",
                        url: "https://api.spotify.com/v1/artists/0z4uBJEzO1dJy57Qk5UYt8"
                    }
                ],
                images: [
                    {
                        size: "UNKNOWN",
                        url: "https://i.scdn.co/image/ab67616d00001e02db6b8ae97f69fee1d432334d",
                        height: 300,
                        width: 300
                    },
                    {
                        size: "SMALL",
                        url: "https://i.scdn.co/image/ab67616d00004851db6b8ae97f69fee1d432334d",
                        height: 64,
                        width: 64
                    },
                    {
                        size: "LARGE",
                        url: "https://i.scdn.co/image/ab67616d0000b273db6b8ae97f69fee1d432334d",
                        height: 640,
                        width: 640
                    }
                ],
                group: {
                    name: "Outer Wilds (Original Soundtrack)",
                    uri: "spotify:album:1U0A6RPNJB05PtuBcaTM7o",
                    url: "https://api.spotify.com/v1/albums/1U0A6RPNJB05PtuBcaTM7o"
                },
                name: "Curiosity",
                uri: "spotify:track:3uJWJQ2TgKQlpN05boVeMU",
                url: "https://api.spotify.com/v1/tracks/3uJWJQ2TgKQlpN05boVeMU",
                uid: "5ecff9064c4da46b",
                estimated_duration: 31207
            },
            {
                content_type: "TRACK",
                artists: [
                    {
                        name: "Gigi Masin",
                        uri: "spotify:artist:0dCVhSVXD9JhJh2bTySJZx",
                        url: "https://api.spotify.com/v1/artists/0dCVhSVXD9JhJh2bTySJZx"
                    }
                ],
                images: [
                    {
                        size: "UNKNOWN",
                        url: "https://i.scdn.co/image/ab67616d00001e025b1780a23be5c4c3d80bad5a",
                        height: 300,
                        width: 300
                    },
                    {
                        size: "SMALL",
                        url: "https://i.scdn.co/image/ab67616d000048515b1780a23be5c4c3d80bad5a",
                        height: 64,
                        width: 64
                    },
                    {
                        size: "LARGE",
                        url: "https://i.scdn.co/image/ab67616d0000b2735b1780a23be5c4c3d80bad5a",
                        height: 640,
                        width: 640
                    }
                ],
                group: {
                    name: "Calypso",
                    uri: "spotify:album:52T8IcB7y8OnLnjhE4mnSl",
                    url: "https://api.spotify.com/v1/albums/52T8IcB7y8OnLnjhE4mnSl"
                },
                name: "Calypso",
                uri: "spotify:track:2WfQ9EaXnxrXVpMT07Z6Ny",
                url: "https://api.spotify.com/v1/tracks/2WfQ9EaXnxrXVpMT07Z6Ny",
                uid: "c4252425c334415a",
                estimated_duration: 354000
            }
        ],
        options: {
            repeat_mode: "OFF",
            shuffled: false
        },
        restrictions: {
            pause: [],
            resume: [],
            seek: [],
            skip_next: [],
            skip_prev: [],
            toggle_repeat_context: [],
            toggle_repeat_track: [],
            toggle_shuffle: [],
            peek_next: [],
            peek_prev: []
        },
        name: "ambient",
        uri: "spotify:playlist:2mSNUqjbKDmeLyTepjBZCN",
        url: "context://spotify:playlist:2mSNUqjbKDmeLyTepjBZCN"
    }
  };

  const SAMPLE_PLAYBACK_CONTEXT_ALBUM: Spotify.PlaybackContext = {
    uri: "spotify:artist:0z4uBJEzO1dJy57Qk5UYt8",
    metadata: {
        name: "",
        uri: "spotify:artist:0z4uBJEzO1dJy57Qk5UYt8",
        url: "",
        current_item: {
            name: "The Sun Station",
            uri: "spotify:track:4HqRMBMPSURznbKLEZ4BpE",
            url: "https://api.spotify.com/v1/tracks/4HqRMBMPSURznbKLEZ4BpE",
            uid: "3ddee1ba29fb8c781b32",
            content_type: "TRACK",
            artists: [
                {
                    name: "Andrew Prahlow",
                    uri: "spotify:artist:0z4uBJEzO1dJy57Qk5UYt8",
                    url: "https://api.spotify.com/v1/artists/0z4uBJEzO1dJy57Qk5UYt8"
                }
            ],
            images: [
                {
                    url: "https://i.scdn.co/image/ab67616d00001e02db6b8ae97f69fee1d432334d",
                    height: 300,
                    width: 300,
                    size: "UNKNOWN"
                },
                {
                    url: "https://i.scdn.co/image/ab67616d00004851db6b8ae97f69fee1d432334d",
                    height: 64,
                    width: 64,
                    size: "SMALL"
                },
                {
                    url: "https://i.scdn.co/image/ab67616d0000b273db6b8ae97f69fee1d432334d",
                    height: 640,
                    width: 640,
                    size: "LARGE"
                }
            ],
            estimated_duration: 158571,
            group: {
                name: "Outer Wilds (Original Soundtrack)",
                uri: "spotify:album:1U0A6RPNJB05PtuBcaTM7o",
                url: "https://api.spotify.com/v1/albums/1U0A6RPNJB05PtuBcaTM7o"
            }
        },
        previous_items: [
            {
                name: "Space",
                uri: "spotify:track:1EdWI2TueryAZkeNi6I1zm",
                url: "https://api.spotify.com/v1/tracks/1EdWI2TueryAZkeNi6I1zm",
                uid: "0160cbf4e500f42c8c2f",
                content_type: "TRACK",
                artists: [
                    {
                        name: "Andrew Prahlow",
                        uri: "spotify:artist:0z4uBJEzO1dJy57Qk5UYt8",
                        url: "https://api.spotify.com/v1/artists/0z4uBJEzO1dJy57Qk5UYt8"
                    }
                ],
                images: [
                    {
                        url: "https://i.scdn.co/image/ab67616d00001e02db6b8ae97f69fee1d432334d",
                        height: 300,
                        width: 300,
                        size: "UNKNOWN"
                    },
                    {
                        url: "https://i.scdn.co/image/ab67616d00004851db6b8ae97f69fee1d432334d",
                        height: 64,
                        width: 64,
                        size: "SMALL"
                    },
                    {
                        url: "https://i.scdn.co/image/ab67616d0000b273db6b8ae97f69fee1d432334d",
                        height: 640,
                        width: 640,
                        size: "LARGE"
                    }
                ],
                estimated_duration: 255121,
                group: {
                    name: "Outer Wilds (Original Soundtrack)",
                    uri: "spotify:album:1U0A6RPNJB05PtuBcaTM7o",
                    url: "https://api.spotify.com/v1/albums/1U0A6RPNJB05PtuBcaTM7o"
                }
            },
            {
                name: "Castaways",
                uri: "spotify:track:2lNp8kRfLuynYzYDRP8XyF",
                url: "https://api.spotify.com/v1/tracks/2lNp8kRfLuynYzYDRP8XyF",
                uid: "07d82b5049a9b9c48260",
                content_type: "TRACK",
                artists: [
                    {
                        name: "Andrew Prahlow",
                        uri: "spotify:artist:0z4uBJEzO1dJy57Qk5UYt8",
                        url: "https://api.spotify.com/v1/artists/0z4uBJEzO1dJy57Qk5UYt8"
                    }
                ],
                images: [
                    {
                        url: "https://i.scdn.co/image/ab67616d00001e02db6b8ae97f69fee1d432334d",
                        height: 300,
                        width: 300,
                        size: "UNKNOWN"
                    },
                    {
                        url: "https://i.scdn.co/image/ab67616d00004851db6b8ae97f69fee1d432334d",
                        height: 64,
                        width: 64,
                        size: "SMALL"
                    },
                    {
                        url: "https://i.scdn.co/image/ab67616d0000b273db6b8ae97f69fee1d432334d",
                        height: 640,
                        width: 640,
                        size: "LARGE"
                    }
                ],
                estimated_duration: 145525,
                group: {
                    name: "Outer Wilds (Original Soundtrack)",
                    uri: "spotify:album:1U0A6RPNJB05PtuBcaTM7o",
                    url: "https://api.spotify.com/v1/albums/1U0A6RPNJB05PtuBcaTM7o"
                }
            }
        ],
        next_items: [
            {
                name: "Main Title",
                uri: "spotify:track:0IxEgnml8yiKo2RQYuE6XW",
                url: "https://api.spotify.com/v1/tracks/0IxEgnml8yiKo2RQYuE6XW",
                uid: "1a9d5fce94b4a6f95bfe",
                content_type: "TRACK",
                artists: [
                    {
                        name: "Andrew Prahlow",
                        uri: "spotify:artist:0z4uBJEzO1dJy57Qk5UYt8",
                        url: "https://api.spotify.com/v1/artists/0z4uBJEzO1dJy57Qk5UYt8"
                    }
                ],
                images: [
                    {
                        url: "https://i.scdn.co/image/ab67616d00001e02db6b8ae97f69fee1d432334d",
                        height: 300,
                        width: 300,
                        size: "UNKNOWN"
                    },
                    {
                        url: "https://i.scdn.co/image/ab67616d00004851db6b8ae97f69fee1d432334d",
                        height: 64,
                        width: 64,
                        size: "SMALL"
                    },
                    {
                        url: "https://i.scdn.co/image/ab67616d0000b273db6b8ae97f69fee1d432334d",
                        height: 640,
                        width: 640,
                        size: "LARGE"
                    }
                ],
                estimated_duration: 78281,
                group: {
                    name: "Outer Wilds (Original Soundtrack)",
                    uri: "spotify:album:1U0A6RPNJB05PtuBcaTM7o",
                    url: "https://api.spotify.com/v1/albums/1U0A6RPNJB05PtuBcaTM7o"
                }
            },
            {
                name: "The Search",
                uri: "spotify:track:7IInOq9XBEr0rsFojHcdP1",
                url: "https://api.spotify.com/v1/tracks/7IInOq9XBEr0rsFojHcdP1",
                uid: "15c2ca6e9eeebfaa67ac",
                content_type: "TRACK",
                artists: [
                    {
                        name: "Andrew Prahlow",
                        uri: "spotify:artist:0z4uBJEzO1dJy57Qk5UYt8",
                        url: "https://api.spotify.com/v1/artists/0z4uBJEzO1dJy57Qk5UYt8"
                    }
                ],
                images: [
                    {
                        url: "https://i.scdn.co/image/ab67616d00001e02db6b8ae97f69fee1d432334d",
                        height: 300,
                        width: 300,
                        size: "UNKNOWN"
                    },
                    {
                        url: "https://i.scdn.co/image/ab67616d00004851db6b8ae97f69fee1d432334d",
                        height: 64,
                        width: 64,
                        size: "SMALL"
                    },
                    {
                        url: "https://i.scdn.co/image/ab67616d0000b273db6b8ae97f69fee1d432334d",
                        height: 640,
                        width: 640,
                        size: "LARGE"
                    }
                ],
                estimated_duration: 162148,
                group: {
                    name: "Outer Wilds (Original Soundtrack)",
                    uri: "spotify:album:1U0A6RPNJB05PtuBcaTM7o",
                    url: "https://api.spotify.com/v1/albums/1U0A6RPNJB05PtuBcaTM7o"
                }
            }
        ],
        options: {
            shuffled: false,
            repeat_mode: "OFF"
        },
        restrictions: {
            pause: [],
            resume: [],
            seek: [],
            skip_next: [],
            skip_prev: [],
            toggle_repeat_context: [],
            toggle_repeat_track: [],
            toggle_shuffle: [],
            peek_next: [],
            peek_prev: []
        }
    }
  };
