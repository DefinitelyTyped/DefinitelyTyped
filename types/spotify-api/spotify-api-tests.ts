// Tests for the type definitions for The Spotify Web API (including changes March 29th 2016)
// Project: https://developer.spotify.com/web-api/
// Definitions by: Niels Kristian Hansen Skovmand <https://github.com/skovmand>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
 * This test file contains the sample output from The Spotify Web Api obtained from [The Web API Console](https://developer.spotify.com/web-api/console/)
 * 
 * Run the tests (they should always compile without any errors):
 * tsc spotify-api-tests.ts --target es6 --noImplicitAny
 * 
 * The order of tests is the same as on [The Spotify Web Api](https://developer.spotify.com/web-api/endpoint-reference/)
 */



/**
 * Get an Album
 * 
 * GET /v1/albums/{id}
 * https://developer.spotify.com/web-api/get-album/
 */
const getSingleAlbum : SpotifyApi.SingleAlbumResponse = {
  "album_type" : "album",
  "artists" : [ {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
    },
    "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
    "id" : "2BTZIqw0ntH9MvilQ3ewNY",
    "name" : "Cyndi Lauper",
    "type" : "artist",
    "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
  } ],
  "available_markets" : [ ],
  "copyrights" : [ {
    "text" : "(P) 2000 Sony Music Entertainment Inc.",
    "type" : "P"
  } ],
  "external_ids" : {
    "upc" : "5099749994324"
  },
  "external_urls" : {
    "spotify" : "https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj"
  },
  "genres" : [ ],
  "href" : "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj",
  "id" : "0sNOF9WDwhWunNAHPD3Baj",
  "images" : [ {
    "height" : 640,
    "url" : "https://i.scdn.co/image/07c323340e03e25a8e5dd5b9a8ec72b69c50089d",
    "width" : 640
  }, {
    "height" : 300,
    "url" : "https://i.scdn.co/image/8b662d81966a0ec40dc10563807696a8479cd48b",
    "width" : 300
  }, {
    "height" : 64,
    "url" : "https://i.scdn.co/image/54b3222c8aaa77890d1ac37b3aaaa1fc9ba630ae",
    "width" : 64
  } ],
  "name" : "She's So Unusual",
  "popularity" : 0,
  "release_date" : "1983",
  "release_date_precision" : "year",
  "tracks" : {
    "href" : "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj/tracks?offset=0&limit=50",
    "items" : [ {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 305560,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3f9zqUnrnIq0LANhmnaF0V"
      },
      "href" : "https://api.spotify.com/v1/tracks/3f9zqUnrnIq0LANhmnaF0V",
      "id" : "3f9zqUnrnIq0LANhmnaF0V",
      "name" : "Money Changes Everything",
      "preview_url" : null,
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:3f9zqUnrnIq0LANhmnaF0V"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 238266,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2joHDtKFVDDyWDHnOxZMAX"
      },
      "href" : "https://api.spotify.com/v1/tracks/2joHDtKFVDDyWDHnOxZMAX",
      "id" : "2joHDtKFVDDyWDHnOxZMAX",
      "name" : "Girls Just Want to Have Fun",
      "preview_url" : null,
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:2joHDtKFVDDyWDHnOxZMAX"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 306706,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6ClztHzretmPHCeiNqR5wD"
      },
      "href" : "https://api.spotify.com/v1/tracks/6ClztHzretmPHCeiNqR5wD",
      "id" : "6ClztHzretmPHCeiNqR5wD",
      "name" : "When You Were Mine",
      "preview_url" : null,
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:6ClztHzretmPHCeiNqR5wD"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 241333,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2tVHvZK4YYzTloSCBPm2tg"
      },
      "href" : "https://api.spotify.com/v1/tracks/2tVHvZK4YYzTloSCBPm2tg",
      "id" : "2tVHvZK4YYzTloSCBPm2tg",
      "name" : "Time After Time",
      "preview_url" : null,
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:2tVHvZK4YYzTloSCBPm2tg"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 229266,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6iLhMDtOr52OVXaZdha5M6"
      },
      "href" : "https://api.spotify.com/v1/tracks/6iLhMDtOr52OVXaZdha5M6",
      "id" : "6iLhMDtOr52OVXaZdha5M6",
      "name" : "She Bop",
      "preview_url" : null,
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:6iLhMDtOr52OVXaZdha5M6"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 272840,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3csiLr2B2wRj4lsExn6jLf"
      },
      "href" : "https://api.spotify.com/v1/tracks/3csiLr2B2wRj4lsExn6jLf",
      "id" : "3csiLr2B2wRj4lsExn6jLf",
      "name" : "All Through the Night",
      "preview_url" : null,
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:3csiLr2B2wRj4lsExn6jLf"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 220333,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4mRAnuBGYsW4WGbpW0QUkp"
      },
      "href" : "https://api.spotify.com/v1/tracks/4mRAnuBGYsW4WGbpW0QUkp",
      "id" : "4mRAnuBGYsW4WGbpW0QUkp",
      "name" : "Witness",
      "preview_url" : null,
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:4mRAnuBGYsW4WGbpW0QUkp"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 252626,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3AIeUnffkLQaUaX1pkHyeD"
      },
      "href" : "https://api.spotify.com/v1/tracks/3AIeUnffkLQaUaX1pkHyeD",
      "id" : "3AIeUnffkLQaUaX1pkHyeD",
      "name" : "I'll Kiss You",
      "preview_url" : null,
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:3AIeUnffkLQaUaX1pkHyeD"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 45933,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/53eCpAFNbA9MQNfLilN3CH"
      },
      "href" : "https://api.spotify.com/v1/tracks/53eCpAFNbA9MQNfLilN3CH",
      "id" : "53eCpAFNbA9MQNfLilN3CH",
      "name" : "He's so Unusual",
      "preview_url" : null,
      "track_number" : 9,
      "type" : "track",
      "uri" : "spotify:track:53eCpAFNbA9MQNfLilN3CH"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 196373,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/51JS0KXziu9U1T8EBdRTUF"
      },
      "href" : "https://api.spotify.com/v1/tracks/51JS0KXziu9U1T8EBdRTUF",
      "id" : "51JS0KXziu9U1T8EBdRTUF",
      "name" : "Yeah Yeah",
      "preview_url" : null,
      "track_number" : 10,
      "type" : "track",
      "uri" : "spotify:track:51JS0KXziu9U1T8EBdRTUF"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 275560,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2BGJvRarwOa2kiIGpLjIXT"
      },
      "href" : "https://api.spotify.com/v1/tracks/2BGJvRarwOa2kiIGpLjIXT",
      "id" : "2BGJvRarwOa2kiIGpLjIXT",
      "name" : "Money Changes Everything",
      "preview_url" : null,
      "track_number" : 11,
      "type" : "track",
      "uri" : "spotify:track:2BGJvRarwOa2kiIGpLjIXT"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY"
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 320400,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5ggatiDTbCIJsUAa7IUP65"
      },
      "href" : "https://api.spotify.com/v1/tracks/5ggatiDTbCIJsUAa7IUP65",
      "id" : "5ggatiDTbCIJsUAa7IUP65",
      "name" : "She Bop - Live",
      "preview_url" : null,
      "track_number" : 12,
      "type" : "track",
      "uri" : "spotify:track:5ggatiDTbCIJsUAa7IUP65"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2BTZIqw0ntH9MvilQ3ewNY"
        },
        "href" : "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
        "id" : "2BTZIqw0ntH9MvilQ3ewNY",
        "name" : "Cyndi Lauper",
        "type" : "artist",
        "uri" : "spotify:artist:2BTZIqw0ntH9MvilQ3ewNY",
      } ],
      "available_markets" : [ ],
      "disc_number" : 1,
      "duration_ms" : 288240,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5ZBxoa2kBrBah3qNIV4rm7"
      },
      "href" : "https://api.spotify.com/v1/tracks/5ZBxoa2kBrBah3qNIV4rm7",
      "id" : "5ZBxoa2kBrBah3qNIV4rm7",
      "name" : "All Through The Night - Live",
      "preview_url" : null,
      "track_number" : 13,
      "type" : "track",
      "uri" : "spotify:track:5ZBxoa2kBrBah3qNIV4rm7"
    } ],
    "limit" : 50,
    "next" : null,
    "offset" : 0,
    "previous" : null,
    "total" : 13
  },
  "type" : "album",
  "uri" : "spotify:album:0sNOF9WDwhWunNAHPD3Baj"
};



/**
 * Get Several Albums
 * 
 * GET /v1/albums?ids={ids}
 * https://developer.spotify.com/web-api/get-several-albums/ 
 */
const getMultipleAlbumsResponse : SpotifyApi.MultipleAlbumsResponse = {
  "albums" : [ {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
      },
      "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
      "id" : "53A0W3U0s8diEn9RhXQhVz",
      "name" : "Keane",
      "type" : "artist",
      "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
    "copyrights" : [ {
      "text" : "(C) 2013 Universal Island Records, a division of Universal Music Operations Limited",
      "type" : "C"
    }, {
      "text" : "(P) 2013 Universal Island Records, a division of Universal Music Operations Limited",
      "type" : "P"
    } ],
    "external_ids" : {
      "upc" : "00602537518357"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/41MnTivkwTO3UUJ8DrqEJJ"
    },
    "genres" : [ ],
    "href" : "https://api.spotify.com/v1/albums/41MnTivkwTO3UUJ8DrqEJJ",
    "id" : "41MnTivkwTO3UUJ8DrqEJJ",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/89b92c6b59131776c0cd8e5df46301ffcf36ed69",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/eb6f0b2594d81f8d9dced193f3e9a3bc4318aedc",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/21e1ebcd7ebd3b679d9d5084bba1e163638b103a",
      "width" : 64
    } ],
    "name" : "The Best Of Keane (Deluxe Edition)",
    "popularity" : 56,
    "release_date" : "2013-01-01",
    "release_date_precision" : "day",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/albums/41MnTivkwTO3UUJ8DrqEJJ/tracks?offset=0&limit=50",
      "items" : [ {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 215986,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4r9PmSmbAOOWqaGWLf6M9Q"
        },
        "href" : "https://api.spotify.com/v1/tracks/4r9PmSmbAOOWqaGWLf6M9Q",
        "id" : "4r9PmSmbAOOWqaGWLf6M9Q",
        "name" : "Everybody's Changing",
        "preview_url" : "https://p.scdn.co/mp3-preview/fe9d90cd8a51ea672789c13856d886901125bc05",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:4r9PmSmbAOOWqaGWLf6M9Q"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 235880,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/0HJQD8uqX2Bq5HVdLnd3ep"
        },
        "href" : "https://api.spotify.com/v1/tracks/0HJQD8uqX2Bq5HVdLnd3ep",
        "id" : "0HJQD8uqX2Bq5HVdLnd3ep",
        "name" : "Somewhere Only We Know",
        "preview_url" : "https://p.scdn.co/mp3-preview/af246a57475c5491157fa21c069b130baaaacccd",
        "track_number" : 2,
        "type" : "track",
        "uri" : "spotify:track:0HJQD8uqX2Bq5HVdLnd3ep"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 218426,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/087AcwkqBIuIebZWpwbOI4"
        },
        "href" : "https://api.spotify.com/v1/tracks/087AcwkqBIuIebZWpwbOI4",
        "id" : "087AcwkqBIuIebZWpwbOI4",
        "name" : "Bend & Break",
        "preview_url" : "https://p.scdn.co/mp3-preview/e3bdc5a44b62df8135f893730ce1124526b9c5c1",
        "track_number" : 3,
        "type" : "track",
        "uri" : "spotify:track:087AcwkqBIuIebZWpwbOI4"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 275093,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5s2TY4v3WTECwelIqqqtuS"
        },
        "href" : "https://api.spotify.com/v1/tracks/5s2TY4v3WTECwelIqqqtuS",
        "id" : "5s2TY4v3WTECwelIqqqtuS",
        "name" : "Bedshaped",
        "preview_url" : "https://p.scdn.co/mp3-preview/11bcd8e1e5817414e09da5ffdca88ea97925767c",
        "track_number" : 4,
        "type" : "track",
        "uri" : "spotify:track:5s2TY4v3WTECwelIqqqtuS"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 207653,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5Q9h1xA3xqUJyx1dDlq6MI"
        },
        "href" : "https://api.spotify.com/v1/tracks/5Q9h1xA3xqUJyx1dDlq6MI",
        "id" : "5Q9h1xA3xqUJyx1dDlq6MI",
        "name" : "This Is The Last Time",
        "preview_url" : "https://p.scdn.co/mp3-preview/4fcf428b407ca80ca4d40ebcde15642ecfda17c8",
        "track_number" : 5,
        "type" : "track",
        "uri" : "spotify:track:5Q9h1xA3xqUJyx1dDlq6MI"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 250786,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/0BIpP7vmh35JEpT1zkv7Sl"
        },
        "href" : "https://api.spotify.com/v1/tracks/0BIpP7vmh35JEpT1zkv7Sl",
        "id" : "0BIpP7vmh35JEpT1zkv7Sl",
        "name" : "Atlantic",
        "preview_url" : "https://p.scdn.co/mp3-preview/7c1ba58788479e16da1ed98b73523bfd731683b4",
        "track_number" : 6,
        "type" : "track",
        "uri" : "spotify:track:0BIpP7vmh35JEpT1zkv7Sl"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 185813,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/64rOSkztPrTECtWTB0F2OD"
        },
        "href" : "https://api.spotify.com/v1/tracks/64rOSkztPrTECtWTB0F2OD",
        "id" : "64rOSkztPrTECtWTB0F2OD",
        "name" : "Is It Any Wonder?",
        "preview_url" : "https://p.scdn.co/mp3-preview/aeb8fcb164cf337f5233edc62bd74d78441ea096",
        "track_number" : 7,
        "type" : "track",
        "uri" : "spotify:track:64rOSkztPrTECtWTB0F2OD"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 239986,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5XulFHMk0X9foui8If85qV"
        },
        "href" : "https://api.spotify.com/v1/tracks/5XulFHMk0X9foui8If85qV",
        "id" : "5XulFHMk0X9foui8If85qV",
        "name" : "Nothing In My Way",
        "preview_url" : "https://p.scdn.co/mp3-preview/f10421f201ba60bcf470da0347ae0fa1eccd2195",
        "track_number" : 8,
        "type" : "track",
        "uri" : "spotify:track:5XulFHMk0X9foui8If85qV"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 277360,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/7EbeyS7knwgd3TtJepU1On"
        },
        "href" : "https://api.spotify.com/v1/tracks/7EbeyS7knwgd3TtJepU1On",
        "id" : "7EbeyS7knwgd3TtJepU1On",
        "name" : "Hamburg Song",
        "preview_url" : "https://p.scdn.co/mp3-preview/39f70e54618d6cca3f240edcb552ed39d4fc5202",
        "track_number" : 9,
        "type" : "track",
        "uri" : "spotify:track:7EbeyS7knwgd3TtJepU1On"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 233520,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5faIME3g9Lxo4Myf8ArY9l"
        },
        "href" : "https://api.spotify.com/v1/tracks/5faIME3g9Lxo4Myf8ArY9l",
        "id" : "5faIME3g9Lxo4Myf8ArY9l",
        "name" : "Crystal Ball",
        "preview_url" : "https://p.scdn.co/mp3-preview/8eb1a3df454cb9137771b60f26df71034fc80f47",
        "track_number" : 10,
        "type" : "track",
        "uri" : "spotify:track:5faIME3g9Lxo4Myf8ArY9l"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 302813,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3dkTbaMEfF8mqCNSSZKB5S"
        },
        "href" : "https://api.spotify.com/v1/tracks/3dkTbaMEfF8mqCNSSZKB5S",
        "id" : "3dkTbaMEfF8mqCNSSZKB5S",
        "name" : "A Bad Dream",
        "preview_url" : "https://p.scdn.co/mp3-preview/264f4474ff324def0e3d454d769be615ab105f94",
        "track_number" : 11,
        "type" : "track",
        "uri" : "spotify:track:3dkTbaMEfF8mqCNSSZKB5S"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 267320,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/38zl5v3L94wzbl3iQHAxNM"
        },
        "href" : "https://api.spotify.com/v1/tracks/38zl5v3L94wzbl3iQHAxNM",
        "id" : "38zl5v3L94wzbl3iQHAxNM",
        "name" : "Try Again",
        "preview_url" : "https://p.scdn.co/mp3-preview/5620e5b33fe3f2d2dcbb559029a1370aac341411",
        "track_number" : 12,
        "type" : "track",
        "uri" : "spotify:track:38zl5v3L94wzbl3iQHAxNM"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 204013,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1K4SP6flGBk73cgshPqDCp"
        },
        "href" : "https://api.spotify.com/v1/tracks/1K4SP6flGBk73cgshPqDCp",
        "id" : "1K4SP6flGBk73cgshPqDCp",
        "name" : "Spiralling",
        "preview_url" : "https://p.scdn.co/mp3-preview/3dc0aaa8015d0fbb2377b970d9048381831953fd",
        "track_number" : 13,
        "type" : "track",
        "uri" : "spotify:track:1K4SP6flGBk73cgshPqDCp"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 311533,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/7DNKgwHgPgbGhqdXJGkxf6"
        },
        "href" : "https://api.spotify.com/v1/tracks/7DNKgwHgPgbGhqdXJGkxf6",
        "id" : "7DNKgwHgPgbGhqdXJGkxf6",
        "name" : "Perfect Symmetry",
        "preview_url" : "https://p.scdn.co/mp3-preview/3475936f1b54849a64ea70eb6467a8a3a3800bad",
        "track_number" : 14,
        "type" : "track",
        "uri" : "spotify:track:7DNKgwHgPgbGhqdXJGkxf6"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 289386,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3CFNKsHlpAleVotCDI78ca"
        },
        "href" : "https://api.spotify.com/v1/tracks/3CFNKsHlpAleVotCDI78ca",
        "id" : "3CFNKsHlpAleVotCDI78ca",
        "name" : "My Shadow",
        "preview_url" : "https://p.scdn.co/mp3-preview/bf11da166dc76f5f4392a57146467e36e7173cc9",
        "track_number" : 15,
        "type" : "track",
        "uri" : "spotify:track:3CFNKsHlpAleVotCDI78ca"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 196333,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5OVyLOs64kq6zL12QrQD6o"
        },
        "href" : "https://api.spotify.com/v1/tracks/5OVyLOs64kq6zL12QrQD6o",
        "id" : "5OVyLOs64kq6zL12QrQD6o",
        "name" : "Silenced By The Night",
        "preview_url" : "https://p.scdn.co/mp3-preview/ab222c63169f5b847c24ebfe21875d9313ec8bc8",
        "track_number" : 16,
        "type" : "track",
        "uri" : "spotify:track:5OVyLOs64kq6zL12QrQD6o"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 236973,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5AHNNMMn7dApuo4OuqZcPb"
        },
        "href" : "https://api.spotify.com/v1/tracks/5AHNNMMn7dApuo4OuqZcPb",
        "id" : "5AHNNMMn7dApuo4OuqZcPb",
        "name" : "Disconnected",
        "preview_url" : "https://p.scdn.co/mp3-preview/8a5201b1a061c5bfca5db879d22c580d7a9eb99a",
        "track_number" : 17,
        "type" : "track",
        "uri" : "spotify:track:5AHNNMMn7dApuo4OuqZcPb"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 208133,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5wPQMzWTFxKI0Aw3I3OJG6"
        },
        "href" : "https://api.spotify.com/v1/tracks/5wPQMzWTFxKI0Aw3I3OJG6",
        "id" : "5wPQMzWTFxKI0Aw3I3OJG6",
        "name" : "Sovereign Light Café",
        "preview_url" : "https://p.scdn.co/mp3-preview/5df8fdaa9938b599b9bbc7fbd2cfea2c2bd3a734",
        "track_number" : 18,
        "type" : "track",
        "uri" : "spotify:track:5wPQMzWTFxKI0Aw3I3OJG6"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 201653,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1Vz9mv3ITvzSxm9sH2pAdn"
        },
        "href" : "https://api.spotify.com/v1/tracks/1Vz9mv3ITvzSxm9sH2pAdn",
        "id" : "1Vz9mv3ITvzSxm9sH2pAdn",
        "name" : "Higher Than The Sun",
        "preview_url" : "https://p.scdn.co/mp3-preview/75ea8651daefb9da6cbca3e6d4e970e7b8b84693",
        "track_number" : 19,
        "type" : "track",
        "uri" : "spotify:track:1Vz9mv3ITvzSxm9sH2pAdn"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 222426,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3FYyMnHLaImyLctEoXZolK"
        },
        "href" : "https://api.spotify.com/v1/tracks/3FYyMnHLaImyLctEoXZolK",
        "id" : "3FYyMnHLaImyLctEoXZolK",
        "name" : "Won't Be Broken",
        "preview_url" : "https://p.scdn.co/mp3-preview/2c8dfeb19ead5b96dcf34858b43b96a9e6d70117",
        "track_number" : 20,
        "type" : "track",
        "uri" : "spotify:track:3FYyMnHLaImyLctEoXZolK"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 229533,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/0wnewiCeFaZQKejFECOzS2"
        },
        "href" : "https://api.spotify.com/v1/tracks/0wnewiCeFaZQKejFECOzS2",
        "id" : "0wnewiCeFaZQKejFECOzS2",
        "name" : "Snowed Under",
        "preview_url" : "https://p.scdn.co/mp3-preview/5a04228466a49f12e839bf3001d6c15eef015953",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:0wnewiCeFaZQKejFECOzS2"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 217440,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5sqAs4udmaaTWn6xXTpmGL"
        },
        "href" : "https://api.spotify.com/v1/tracks/5sqAs4udmaaTWn6xXTpmGL",
        "id" : "5sqAs4udmaaTWn6xXTpmGL",
        "name" : "Walnut Tree",
        "preview_url" : "https://p.scdn.co/mp3-preview/834c91889c0d86d4e3f724150976919844c5baa7",
        "track_number" : 2,
        "type" : "track",
        "uri" : "spotify:track:5sqAs4udmaaTWn6xXTpmGL"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 332973,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1WvLaBfQpk3dv3ciU0we8f"
        },
        "href" : "https://api.spotify.com/v1/tracks/1WvLaBfQpk3dv3ciU0we8f",
        "id" : "1WvLaBfQpk3dv3ciU0we8f",
        "name" : "Fly To Me",
        "preview_url" : "https://p.scdn.co/mp3-preview/06bc6f513cb7406660182e0a9a24b19238be019c",
        "track_number" : 3,
        "type" : "track",
        "uri" : "spotify:track:1WvLaBfQpk3dv3ciU0we8f"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 182733,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1UBiGrtXAKjc0C7GG937pD"
        },
        "href" : "https://api.spotify.com/v1/tracks/1UBiGrtXAKjc0C7GG937pD",
        "id" : "1UBiGrtXAKjc0C7GG937pD",
        "name" : "To The End Of The Earth",
        "preview_url" : "https://p.scdn.co/mp3-preview/b347bf5ce7c9fc4fc823ab1bc98f119194d06a66",
        "track_number" : 4,
        "type" : "track",
        "uri" : "spotify:track:1UBiGrtXAKjc0C7GG937pD"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ ],
        "disc_number" : 2,
        "duration_ms" : 196826,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/7eNyrwrLzbO8URXaaSU9g1"
        },
        "href" : "https://api.spotify.com/v1/tracks/7eNyrwrLzbO8URXaaSU9g1",
        "id" : "7eNyrwrLzbO8URXaaSU9g1",
        "name" : "The Way You Want It",
        "preview_url" : null,
        "track_number" : 5,
        "type" : "track",
        "uri" : "spotify:track:7eNyrwrLzbO8URXaaSU9g1"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 286200,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5JLkkHYBZHUpQKnrIIVhpV"
        },
        "href" : "https://api.spotify.com/v1/tracks/5JLkkHYBZHUpQKnrIIVhpV",
        "id" : "5JLkkHYBZHUpQKnrIIVhpV",
        "name" : "Something In Me Was Dying",
        "preview_url" : "https://p.scdn.co/mp3-preview/79aa74fde8a0da6bb6ebdbbac6fd3b081ececace",
        "track_number" : 6,
        "type" : "track",
        "uri" : "spotify:track:5JLkkHYBZHUpQKnrIIVhpV"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ ],
        "disc_number" : 2,
        "duration_ms" : 263200,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/6aTi9DrnoLLvVdFSfzUuKP"
        },
        "href" : "https://api.spotify.com/v1/tracks/6aTi9DrnoLLvVdFSfzUuKP",
        "id" : "6aTi9DrnoLLvVdFSfzUuKP",
        "name" : "Allemande",
        "preview_url" : null,
        "track_number" : 7,
        "type" : "track",
        "uri" : "spotify:track:6aTi9DrnoLLvVdFSfzUuKP"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 249426,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1igaBkvf5KZFTsu1fMfDfb"
        },
        "href" : "https://api.spotify.com/v1/tracks/1igaBkvf5KZFTsu1fMfDfb",
        "id" : "1igaBkvf5KZFTsu1fMfDfb",
        "name" : "Let It Slide",
        "preview_url" : "https://p.scdn.co/mp3-preview/a4905211b213f0443c6302585e241071a25055df",
        "track_number" : 8,
        "type" : "track",
        "uri" : "spotify:track:1igaBkvf5KZFTsu1fMfDfb"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 216200,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4rCgYClAhCLuf9xD2Y8sI6"
        },
        "href" : "https://api.spotify.com/v1/tracks/4rCgYClAhCLuf9xD2Y8sI6",
        "id" : "4rCgYClAhCLuf9xD2Y8sI6",
        "name" : "He Used To Be A Lovely Boy",
        "preview_url" : "https://p.scdn.co/mp3-preview/d238b8f92367915eb08c389a55b35c4353aa4cc5",
        "track_number" : 9,
        "type" : "track",
        "uri" : "spotify:track:4rCgYClAhCLuf9xD2Y8sI6"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 236986,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/2RsfSyrYHjUtGeCVBf6ib2"
        },
        "href" : "https://api.spotify.com/v1/tracks/2RsfSyrYHjUtGeCVBf6ib2",
        "id" : "2RsfSyrYHjUtGeCVBf6ib2",
        "name" : "Thin Air",
        "preview_url" : "https://p.scdn.co/mp3-preview/95f2501973e2571c16c85efa1fc8ab92bf187739",
        "track_number" : 10,
        "type" : "track",
        "uri" : "spotify:track:2RsfSyrYHjUtGeCVBf6ib2"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 269880,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/2UwM9vm7I4wx3RxGx8DR17"
        },
        "href" : "https://api.spotify.com/v1/tracks/2UwM9vm7I4wx3RxGx8DR17",
        "id" : "2UwM9vm7I4wx3RxGx8DR17",
        "name" : "The Iron Sea",
        "preview_url" : "https://p.scdn.co/mp3-preview/e75172d8becfd594645de8e070e4473edebbedf0",
        "track_number" : 11,
        "type" : "track",
        "uri" : "spotify:track:2UwM9vm7I4wx3RxGx8DR17"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 235440,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/2WMpag1ouW7zIySG8PcrIW"
        },
        "href" : "https://api.spotify.com/v1/tracks/2WMpag1ouW7zIySG8PcrIW",
        "id" : "2WMpag1ouW7zIySG8PcrIW",
        "name" : "Maybe I Can Change",
        "preview_url" : "https://p.scdn.co/mp3-preview/e84716f556f8d770605f78c2ddacb5a879bb49a2",
        "track_number" : 12,
        "type" : "track",
        "uri" : "spotify:track:2WMpag1ouW7zIySG8PcrIW"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 229586,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/7ngI6zHe2AA4YncwFytNR1"
        },
        "href" : "https://api.spotify.com/v1/tracks/7ngI6zHe2AA4YncwFytNR1",
        "id" : "7ngI6zHe2AA4YncwFytNR1",
        "name" : "Time To Go",
        "preview_url" : "https://p.scdn.co/mp3-preview/5413cb1452a1c5a0a6aaa49d5ec289d8e9f28dc1",
        "track_number" : 13,
        "type" : "track",
        "uri" : "spotify:track:7ngI6zHe2AA4YncwFytNR1"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 230880,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/2BUKGneA8BFCelJhoCIZ7u"
        },
        "href" : "https://api.spotify.com/v1/tracks/2BUKGneA8BFCelJhoCIZ7u",
        "id" : "2BUKGneA8BFCelJhoCIZ7u",
        "name" : "Staring At The Ceiling",
        "preview_url" : "https://p.scdn.co/mp3-preview/744949b7bf0d516eac9a7a231ead9b623d073574",
        "track_number" : 14,
        "type" : "track",
        "uri" : "spotify:track:2BUKGneA8BFCelJhoCIZ7u"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 294693,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/7rY5n8rnQnNwAtnNfCUQ0O"
        },
        "href" : "https://api.spotify.com/v1/tracks/7rY5n8rnQnNwAtnNfCUQ0O",
        "id" : "7rY5n8rnQnNwAtnNfCUQ0O",
        "name" : "Myth",
        "preview_url" : "https://p.scdn.co/mp3-preview/a69a1fc94953c480bde888dcb82eab9a1cac91fc",
        "track_number" : 15,
        "type" : "track",
        "uri" : "spotify:track:7rY5n8rnQnNwAtnNfCUQ0O"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 224986,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/0SY7oTzyTMpiXgP4ufO7VW"
        },
        "href" : "https://api.spotify.com/v1/tracks/0SY7oTzyTMpiXgP4ufO7VW",
        "id" : "0SY7oTzyTMpiXgP4ufO7VW",
        "name" : "Difficult Child",
        "preview_url" : "https://p.scdn.co/mp3-preview/e48a7b0b0fa708312b4850c97d28337c215a2c95",
        "track_number" : 16,
        "type" : "track",
        "uri" : "spotify:track:0SY7oTzyTMpiXgP4ufO7VW"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 221200,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/7dDuGGxttttGh0h9CJ4cUu"
        },
        "href" : "https://api.spotify.com/v1/tracks/7dDuGGxttttGh0h9CJ4cUu",
        "id" : "7dDuGGxttttGh0h9CJ4cUu",
        "name" : "Sea Fog - Live At Arena Ciudad De Mexico, Mexico City / 2012",
        "preview_url" : "https://p.scdn.co/mp3-preview/a940bc357a2cd29cae8e5dfe337c874baf334b82",
        "track_number" : 17,
        "type" : "track",
        "uri" : "spotify:track:7dDuGGxttttGh0h9CJ4cUu"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 2,
        "duration_ms" : 394786,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/0bxCO9Bbm1SkK9BU2DbsYg"
        },
        "href" : "https://api.spotify.com/v1/tracks/0bxCO9Bbm1SkK9BU2DbsYg",
        "id" : "0bxCO9Bbm1SkK9BU2DbsYg",
        "name" : "Russian Farmer's Song",
        "preview_url" : "https://p.scdn.co/mp3-preview/59264a05ed0ce01ba5b78f3b9507fe80b3aea94e",
        "track_number" : 18,
        "type" : "track",
        "uri" : "spotify:track:0bxCO9Bbm1SkK9BU2DbsYg"
      } ],
      "limit" : 50,
      "next" : null,
      "offset" : 0,
      "previous" : null,
      "total" : 38
    },
    "type" : "album",
    "uri" : "spotify:album:41MnTivkwTO3UUJ8DrqEJJ"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
      },
      "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
      "id" : "53A0W3U0s8diEn9RhXQhVz",
      "name" : "Keane",
      "type" : "artist",
      "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
    "copyrights" : [ {
      "text" : "(C) 2012 Universal Island Records, a division of Universal Music Operations Limited",
      "type" : "C"
    }, {
      "text" : "(P) 2012 Universal Island Records, a division of Universal Music Operations Limited",
      "type" : "P"
    } ],
    "external_ids" : {
      "upc" : "00602537055425"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/6JWc4iAiJ9FjyK0B59ABb4"
    },
    "genres" : [ ],
    "href" : "https://api.spotify.com/v1/albums/6JWc4iAiJ9FjyK0B59ABb4",
    "id" : "6JWc4iAiJ9FjyK0B59ABb4",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/be368b4f8b3dbcb7bcb39c0707fd33447c1ec398",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/24f4e188d0bedc8e1d2a8e3f242aa9c3ec4b6729",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/b31365a528a6a8e1e8b4c8a2d5d1d4b48b672122",
      "width" : 64
    } ],
    "name" : "Strangeland",
    "popularity" : 53,
    "release_date" : "2012-01-01",
    "release_date_precision" : "day",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/albums/6JWc4iAiJ9FjyK0B59ABb4/tracks?offset=0&limit=50",
      "items" : [ {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 214666,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/07h75cQlaZBLwwyeWTeIZX"
        },
        "href" : "https://api.spotify.com/v1/tracks/07h75cQlaZBLwwyeWTeIZX",
        "id" : "07h75cQlaZBLwwyeWTeIZX",
        "name" : "You Are Young",
        "preview_url" : "https://p.scdn.co/mp3-preview/77459b8644db7f0b14d1a04f9732619bca75d3c9",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:07h75cQlaZBLwwyeWTeIZX"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 196466,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/0BhGZmaQ1SET53qGkGvwxD"
        },
        "href" : "https://api.spotify.com/v1/tracks/0BhGZmaQ1SET53qGkGvwxD",
        "id" : "0BhGZmaQ1SET53qGkGvwxD",
        "name" : "Silenced By The Night",
        "preview_url" : "https://p.scdn.co/mp3-preview/801c7eecca00b1880c75a15cff92043dbc0d6878",
        "track_number" : 2,
        "type" : "track",
        "uri" : "spotify:track:0BhGZmaQ1SET53qGkGvwxD"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 237893,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1wL2u2BP9T3cpskdffyfn5"
        },
        "href" : "https://api.spotify.com/v1/tracks/1wL2u2BP9T3cpskdffyfn5",
        "id" : "1wL2u2BP9T3cpskdffyfn5",
        "name" : "Disconnected",
        "preview_url" : "https://p.scdn.co/mp3-preview/210fed3f055f5c275bfac85894acd076f84c8d65",
        "track_number" : 3,
        "type" : "track",
        "uri" : "spotify:track:1wL2u2BP9T3cpskdffyfn5"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 220386,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3Wxu8QRCZdTvwFvwtWOMst"
        },
        "href" : "https://api.spotify.com/v1/tracks/3Wxu8QRCZdTvwFvwtWOMst",
        "id" : "3Wxu8QRCZdTvwFvwtWOMst",
        "name" : "Watch How You Go",
        "preview_url" : "https://p.scdn.co/mp3-preview/155dd49cb3c54702b139d6de388ace09041d3a16",
        "track_number" : 4,
        "type" : "track",
        "uri" : "spotify:track:3Wxu8QRCZdTvwFvwtWOMst"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 218840,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4QRkCwqwHFaZ7xeoR9CHL6"
        },
        "href" : "https://api.spotify.com/v1/tracks/4QRkCwqwHFaZ7xeoR9CHL6",
        "id" : "4QRkCwqwHFaZ7xeoR9CHL6",
        "name" : "Sovereign Light Café",
        "preview_url" : "https://p.scdn.co/mp3-preview/3f44115c51b854605f707a9d24903cad7b27e6b8",
        "track_number" : 5,
        "type" : "track",
        "uri" : "spotify:track:4QRkCwqwHFaZ7xeoR9CHL6"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 236733,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4IGKv5K4HbAfufzf2OUEg0"
        },
        "href" : "https://api.spotify.com/v1/tracks/4IGKv5K4HbAfufzf2OUEg0",
        "id" : "4IGKv5K4HbAfufzf2OUEg0",
        "name" : "On The Road",
        "preview_url" : "https://p.scdn.co/mp3-preview/0fd8c40ab8fb97a4a9e69b3b5c4669cbcfcef330",
        "track_number" : 6,
        "type" : "track",
        "uri" : "spotify:track:4IGKv5K4HbAfufzf2OUEg0"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 252333,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3jQg3xqVv1H6Y3jp6FzR3M"
        },
        "href" : "https://api.spotify.com/v1/tracks/3jQg3xqVv1H6Y3jp6FzR3M",
        "id" : "3jQg3xqVv1H6Y3jp6FzR3M",
        "name" : "The Starting Line",
        "preview_url" : "https://p.scdn.co/mp3-preview/693b6baa37c37ee1a90e12b24e92c3145663c007",
        "track_number" : 7,
        "type" : "track",
        "uri" : "spotify:track:3jQg3xqVv1H6Y3jp6FzR3M"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 226560,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3NT6rwZk7igASQR4HJFP0x"
        },
        "href" : "https://api.spotify.com/v1/tracks/3NT6rwZk7igASQR4HJFP0x",
        "id" : "3NT6rwZk7igASQR4HJFP0x",
        "name" : "Black Rain",
        "preview_url" : "https://p.scdn.co/mp3-preview/68932717dfc96a006b3d2f30f0899bc7b5b6e83c",
        "track_number" : 8,
        "type" : "track",
        "uri" : "spotify:track:3NT6rwZk7igASQR4HJFP0x"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 292946,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1QKQ8eP3aEsW4LEd42umP6"
        },
        "href" : "https://api.spotify.com/v1/tracks/1QKQ8eP3aEsW4LEd42umP6",
        "id" : "1QKQ8eP3aEsW4LEd42umP6",
        "name" : "Neon River",
        "preview_url" : "https://p.scdn.co/mp3-preview/da1d919d5b2b59392577e3a55335fcd93e4d40bd",
        "track_number" : 9,
        "type" : "track",
        "uri" : "spotify:track:1QKQ8eP3aEsW4LEd42umP6"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 191906,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/7uuSUJdpPRoXeR37IAV1a0"
        },
        "href" : "https://api.spotify.com/v1/tracks/7uuSUJdpPRoXeR37IAV1a0",
        "id" : "7uuSUJdpPRoXeR37IAV1a0",
        "name" : "Day Will Come",
        "preview_url" : "https://p.scdn.co/mp3-preview/b2ba652d57410f72e1d4d34f96f72277701aa6d6",
        "track_number" : 10,
        "type" : "track",
        "uri" : "spotify:track:7uuSUJdpPRoXeR37IAV1a0"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 223800,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/6dksuIyuNHcFVcx9ixCMbq"
        },
        "href" : "https://api.spotify.com/v1/tracks/6dksuIyuNHcFVcx9ixCMbq",
        "id" : "6dksuIyuNHcFVcx9ixCMbq",
        "name" : "In Your Own Time",
        "preview_url" : "https://p.scdn.co/mp3-preview/a9950ccfb4db1596840e9696a3b7db6cebab200d",
        "track_number" : 11,
        "type" : "track",
        "uri" : "spotify:track:6dksuIyuNHcFVcx9ixCMbq"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 203386,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/7F4jALhmdEQv49Dy6tNYLq"
        },
        "href" : "https://api.spotify.com/v1/tracks/7F4jALhmdEQv49Dy6tNYLq",
        "id" : "7F4jALhmdEQv49Dy6tNYLq",
        "name" : "Sea Fog",
        "preview_url" : "https://p.scdn.co/mp3-preview/7e31e76de98d697f17610af2a0e0d7a823b48e71",
        "track_number" : 12,
        "type" : "track",
        "uri" : "spotify:track:7F4jALhmdEQv49Dy6tNYLq"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 276440,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1VI5LFMf7SFbcT3dz8XYHJ"
        },
        "href" : "https://api.spotify.com/v1/tracks/1VI5LFMf7SFbcT3dz8XYHJ",
        "id" : "1VI5LFMf7SFbcT3dz8XYHJ",
        "name" : "Strangeland - Bonus Track",
        "preview_url" : "https://p.scdn.co/mp3-preview/873eeb6117633d8d66540ffcfc106fb57564acd2",
        "track_number" : 13,
        "type" : "track",
        "uri" : "spotify:track:1VI5LFMf7SFbcT3dz8XYHJ"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 210986,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/75Zc9ZHq8PY7NMtkIpbwM0"
        },
        "href" : "https://api.spotify.com/v1/tracks/75Zc9ZHq8PY7NMtkIpbwM0",
        "id" : "75Zc9ZHq8PY7NMtkIpbwM0",
        "name" : "Run With Me - Bonus Track",
        "preview_url" : "https://p.scdn.co/mp3-preview/068afaf6676c7edd937222f5f916e638481ddaba",
        "track_number" : 14,
        "type" : "track",
        "uri" : "spotify:track:75Zc9ZHq8PY7NMtkIpbwM0"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 212560,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4dsiRFi3mmpI0pklauyoQx"
        },
        "href" : "https://api.spotify.com/v1/tracks/4dsiRFi3mmpI0pklauyoQx",
        "id" : "4dsiRFi3mmpI0pklauyoQx",
        "name" : "The Boys - Bonus Track",
        "preview_url" : "https://p.scdn.co/mp3-preview/f6dc960a09c8e10b7a5525914170101140f8e333",
        "track_number" : 15,
        "type" : "track",
        "uri" : "spotify:track:4dsiRFi3mmpI0pklauyoQx"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 229200,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3GmNkKokMo8RgUxMdgRbiR"
        },
        "href" : "https://api.spotify.com/v1/tracks/3GmNkKokMo8RgUxMdgRbiR",
        "id" : "3GmNkKokMo8RgUxMdgRbiR",
        "name" : "It's Not True - Bonus Track",
        "preview_url" : "https://p.scdn.co/mp3-preview/806f8f7110acdf970db90840f0d3d3f95353379f",
        "track_number" : 16,
        "type" : "track",
        "uri" : "spotify:track:3GmNkKokMo8RgUxMdgRbiR"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 210120,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/2BLnrhqfHx6G3ZAnHzIYxI"
        },
        "href" : "https://api.spotify.com/v1/tracks/2BLnrhqfHx6G3ZAnHzIYxI",
        "id" : "2BLnrhqfHx6G3ZAnHzIYxI",
        "name" : "Silenced By The Night - Bonus Track",
        "preview_url" : "https://p.scdn.co/mp3-preview/0fb339bdcd390f43c8fd00114fb7b1dac11617a9",
        "track_number" : 17,
        "type" : "track",
        "uri" : "spotify:track:2BLnrhqfHx6G3ZAnHzIYxI"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 272671,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5uwUXAth3No4DVv6x4lXQ9"
        },
        "href" : "https://api.spotify.com/v1/tracks/5uwUXAth3No4DVv6x4lXQ9",
        "id" : "5uwUXAth3No4DVv6x4lXQ9",
        "name" : "The Starting Line - Bonus Track",
        "preview_url" : "https://p.scdn.co/mp3-preview/5350d96164b2bb17d5711334b30eefd5dac0043c",
        "track_number" : 18,
        "type" : "track",
        "uri" : "spotify:track:5uwUXAth3No4DVv6x4lXQ9"
      } ],
      "limit" : 50,
      "next" : null,
      "offset" : 0,
      "previous" : null,
      "total" : 18
    },
    "type" : "album",
    "uri" : "spotify:album:6JWc4iAiJ9FjyK0B59ABb4"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
      },
      "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
      "id" : "53A0W3U0s8diEn9RhXQhVz",
      "name" : "Keane",
      "type" : "artist",
      "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
    "copyrights" : [ {
      "text" : "(C) 2010 Universal Island Records Ltd. A Universal Music Company.",
      "type" : "C"
    }, {
      "text" : "(P) 2010 Universal Island Records Ltd. A Universal Music Company.",
      "type" : "P"
    } ],
    "external_ids" : {
      "upc" : "00602527420608"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/6UXCm6bOO4gFlDQZV5yL37"
    },
    "genres" : [ ],
    "href" : "https://api.spotify.com/v1/albums/6UXCm6bOO4gFlDQZV5yL37",
    "id" : "6UXCm6bOO4gFlDQZV5yL37",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/a969ab6750172e5284b1f3a3dd985e3a3839f5c5",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/5a0e940ee6e5d8dc4d7a77df70277709050d10be",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/1e21ac3f484c184c0b168bfed2b4fbff1d03c4ab",
      "width" : 64
    } ],
    "name" : "Night Train",
    "popularity" : 39,
    "release_date" : "2010-01-01",
    "release_date_precision" : "day",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/albums/6UXCm6bOO4gFlDQZV5yL37/tracks?offset=0&limit=50",
      "items" : [ {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 83546,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3ugblcbYKHrhIvRL4IVY20"
        },
        "href" : "https://api.spotify.com/v1/tracks/3ugblcbYKHrhIvRL4IVY20",
        "id" : "3ugblcbYKHrhIvRL4IVY20",
        "name" : "House Lights",
        "preview_url" : "https://p.scdn.co/mp3-preview/36b8ecff155ad6e9d7682f753c642fe48900d19a",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:3ugblcbYKHrhIvRL4IVY20"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 232320,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/06qEl8bMI8qCJiB68M0Ab6"
        },
        "href" : "https://api.spotify.com/v1/tracks/06qEl8bMI8qCJiB68M0Ab6",
        "id" : "06qEl8bMI8qCJiB68M0Ab6",
        "name" : "Back In Time",
        "preview_url" : "https://p.scdn.co/mp3-preview/bac9cec3411411bdceed91cf18061b3e0bf1646d",
        "track_number" : 2,
        "type" : "track",
        "uri" : "spotify:track:06qEl8bMI8qCJiB68M0Ab6"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7pGyQZx9thVa8GxMBeXscB"
          },
          "href" : "https://api.spotify.com/v1/artists/7pGyQZx9thVa8GxMBeXscB",
          "id" : "7pGyQZx9thVa8GxMBeXscB",
          "name" : "K'NAAN",
          "type" : "artist",
          "uri" : "spotify:artist:7pGyQZx9thVa8GxMBeXscB"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 246800,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3R1MKirozQBVYaBErWy8LB"
        },
        "href" : "https://api.spotify.com/v1/tracks/3R1MKirozQBVYaBErWy8LB",
        "id" : "3R1MKirozQBVYaBErWy8LB",
        "name" : "Stop For A Minute",
        "preview_url" : "https://p.scdn.co/mp3-preview/e2d22f632e556a8d68d41290f4d64cb11c0fa3ec",
        "track_number" : 3,
        "type" : "track",
        "uri" : "spotify:track:3R1MKirozQBVYaBErWy8LB"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 293106,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5TWT6yV2KdJAMH9lblIRi6"
        },
        "href" : "https://api.spotify.com/v1/tracks/5TWT6yV2KdJAMH9lblIRi6",
        "id" : "5TWT6yV2KdJAMH9lblIRi6",
        "name" : "Clear Skies",
        "preview_url" : "https://p.scdn.co/mp3-preview/ec4f00fba6b0ec2ba4ec2b8cc7faac79cbe9bd0a",
        "track_number" : 4,
        "type" : "track",
        "uri" : "spotify:track:5TWT6yV2KdJAMH9lblIRi6"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0I8EcYNKMh0Pj6CGJovHOT"
          },
          "href" : "https://api.spotify.com/v1/artists/0I8EcYNKMh0Pj6CGJovHOT",
          "id" : "0I8EcYNKMh0Pj6CGJovHOT",
          "name" : "Tigarah",
          "type" : "artist",
          "uri" : "spotify:artist:0I8EcYNKMh0Pj6CGJovHOT"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 236706,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1IEVCAISZpS9GiAdZkHTR6"
        },
        "href" : "https://api.spotify.com/v1/tracks/1IEVCAISZpS9GiAdZkHTR6",
        "id" : "1IEVCAISZpS9GiAdZkHTR6",
        "name" : "Ishin Denshin (You've Got To Help Yourself)",
        "preview_url" : "https://p.scdn.co/mp3-preview/b1217e00e762770534aed53e4109f514f049766f",
        "track_number" : 5,
        "type" : "track",
        "uri" : "spotify:track:1IEVCAISZpS9GiAdZkHTR6"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 276720,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1EAoq7c9LRsJIo2bAt4Lxr"
        },
        "href" : "https://api.spotify.com/v1/tracks/1EAoq7c9LRsJIo2bAt4Lxr",
        "id" : "1EAoq7c9LRsJIo2bAt4Lxr",
        "name" : "Your Love",
        "preview_url" : "https://p.scdn.co/mp3-preview/8db14d0124403200fd14c33d7d2b234fa627ff74",
        "track_number" : 6,
        "type" : "track",
        "uri" : "spotify:track:1EAoq7c9LRsJIo2bAt4Lxr"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7pGyQZx9thVa8GxMBeXscB"
          },
          "href" : "https://api.spotify.com/v1/artists/7pGyQZx9thVa8GxMBeXscB",
          "id" : "7pGyQZx9thVa8GxMBeXscB",
          "name" : "K'NAAN",
          "type" : "artist",
          "uri" : "spotify:artist:7pGyQZx9thVa8GxMBeXscB"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 226480,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/2ctReR81XVD8JPlJqJqF1C"
        },
        "href" : "https://api.spotify.com/v1/tracks/2ctReR81XVD8JPlJqJqF1C",
        "id" : "2ctReR81XVD8JPlJqJqF1C",
        "name" : "Looking Back",
        "preview_url" : "https://p.scdn.co/mp3-preview/a379bcd0dfb21162d2337f51b5d89e67a94ae755",
        "track_number" : 7,
        "type" : "track",
        "uri" : "spotify:track:2ctReR81XVD8JPlJqJqF1C"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 289360,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1lqTqfWG6dOUR1DHav23JH"
        },
        "href" : "https://api.spotify.com/v1/tracks/1lqTqfWG6dOUR1DHav23JH",
        "id" : "1lqTqfWG6dOUR1DHav23JH",
        "name" : "My Shadow",
        "preview_url" : "https://p.scdn.co/mp3-preview/63f4dbf7c5e792d19eb773f1dfc351e20fd0f139",
        "track_number" : 8,
        "type" : "track",
        "uri" : "spotify:track:1lqTqfWG6dOUR1DHav23JH"
      }, {
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53A0W3U0s8diEn9RhXQhVz"
          },
          "href" : "https://api.spotify.com/v1/artists/53A0W3U0s8diEn9RhXQhVz",
          "id" : "53A0W3U0s8diEn9RhXQhVz",
          "name" : "Keane",
          "type" : "artist",
          "uri" : "spotify:artist:53A0W3U0s8diEn9RhXQhVz"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 619079,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1OiJZvD8pQmgLwA0HU3YLs"
        },
        "href" : "https://api.spotify.com/v1/tracks/1OiJZvD8pQmgLwA0HU3YLs",
        "id" : "1OiJZvD8pQmgLwA0HU3YLs",
        "name" : "Night Train Track By Track Commentary",
        "preview_url" : "https://p.scdn.co/mp3-preview/387cd4efd9b9c16425cf8e0e77aa7cf174878572",
        "track_number" : 9,
        "type" : "track",
        "uri" : "spotify:track:1OiJZvD8pQmgLwA0HU3YLs"
      } ],
      "limit" : 50,
      "next" : null,
      "offset" : 0,
      "previous" : null,
      "total" : 9
    },
    "type" : "album",
    "uri" : "spotify:album:6UXCm6bOO4gFlDQZV5yL37"
  } ]
};




/**
 * Get an Album’s Tracks
 * 
 * GET /v1/albums/{id}/tracks
 * https://developer.spotify.com/web-api/get-albums-tracks/
 */
const getAlbumTracks : SpotifyApi.AlbumTracksResponse = {
  "href" : "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks?offset=0&limit=2",
  "items" : [ {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
      },
      "href" : "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
      "id" : "08td7MxkoHQkXnWAYD8d6Q",
      "name" : "Tania Bowra",
      "type" : "artist",
      "uri" : "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 276773,
    "explicit" : false,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/2TpxZ7JUBn3uw46aR7qd6V"
    },
    "href" : "https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V",
    "id" : "2TpxZ7JUBn3uw46aR7qd6V",
    "name" : "All I Want",
    "preview_url" : "https://p.scdn.co/mp3-preview/12b8cee72118f995f5494e1b34251e4ac997445e",
    "track_number" : 1,
    "type" : "track",
    "uri" : "spotify:track:2TpxZ7JUBn3uw46aR7qd6V"
  }, {
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
      },
      "href" : "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
      "id" : "08td7MxkoHQkXnWAYD8d6Q",
      "name" : "Tania Bowra",
      "type" : "artist",
      "uri" : "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 247680,
    "explicit" : false,
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/4PjcfyZZVE10TFd9EKA72r"
    },
    "href" : "https://api.spotify.com/v1/tracks/4PjcfyZZVE10TFd9EKA72r",
    "id" : "4PjcfyZZVE10TFd9EKA72r",
    "name" : "Someday",
    "preview_url" : "https://p.scdn.co/mp3-preview/4a54d83c195d0bc17b1b23fc931d37fb363224d8",
    "track_number" : 2,
    "type" : "track",
    "uri" : "spotify:track:4PjcfyZZVE10TFd9EKA72r"
  } ],
  "limit" : 2,
  "next" : "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks?offset=2&limit=2",
  "offset" : 0,
  "previous" : null,
  "total" : 11
};




/**
 * Get an Artist
 * 
 * GET /v1/artists/{id}
 * https://developer.spotify.com/web-api/get-artist/
 */
const getAnArtist : SpotifyApi.SingleArtistResponse = {
  "external_urls" : {
    "spotify" : "https://open.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF"
  },
  "followers" : {
    "href" : null,
    "total" : 416433
  },
  "genres" : [ "indie folk", "indie pop" ],
  "href" : "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF",
  "id" : "0OdUWJ0sBjDrqHygGUXeCF",
  "images" : [ {
    "height" : 816,
    "url" : "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
    "width" : 1000
  }, {
    "height" : 522,
    "url" : "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
    "width" : 640
  }, {
    "height" : 163,
    "url" : "https://i.scdn.co/image/2efc93d7ee88435116093274980f04ebceb7b527",
    "width" : 200
  }, {
    "height" : 52,
    "url" : "https://i.scdn.co/image/4f25297750dfa4051195c36809a9049f6b841a23",
    "width" : 64
  } ],
  "name" : "Band of Horses",
  "popularity" : 66,
  "type" : "artist",
  "uri" : "spotify:artist:0OdUWJ0sBjDrqHygGUXeCF"
};



/**
 * Get Several Artists
 * 
 * GET /v1/artists
 * https://developer.spotify.com/web-api/get-several-artists/
 */
const getSeveralArtists : SpotifyApi.MultipleArtistsResponse = {
  "artists" : [ {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/0oSGxfWSnnOXhD2fKuz2Gy"
    },
    "followers" : {
      "href" : null,
      "total" : 910485
    },
    "genres" : [ "art rock", "glam rock", "permanent wave" ],
    "href" : "https://api.spotify.com/v1/artists/0oSGxfWSnnOXhD2fKuz2Gy",
    "id" : "0oSGxfWSnnOXhD2fKuz2Gy",
    "images" : [ {
      "height" : 1000,
      "url" : "https://i.scdn.co/image/32bd9707b42a2c081482ec9cd3ffa8879f659f95",
      "width" : 1000
    }, {
      "height" : 640,
      "url" : "https://i.scdn.co/image/865f24753e5e4f40a383bf24a9cdda598a4559a8",
      "width" : 640
    }, {
      "height" : 200,
      "url" : "https://i.scdn.co/image/7ddd6fa5cf78aee2f2e8b347616151393022b7d9",
      "width" : 200
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/c8dc28c191432862afce298216458a6f00bbfbd8",
      "width" : 64
    } ],
    "name" : "David Bowie",
    "popularity" : 72,
    "type" : "artist",
    "uri" : "spotify:artist:0oSGxfWSnnOXhD2fKuz2Gy"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/3dBVyJ7JuOMt4GE9607Qin"
    },
    "followers" : {
      "href" : null,
      "total" : 83707
    },
    "genres" : [ "glam rock", "protopunk" ],
    "href" : "https://api.spotify.com/v1/artists/3dBVyJ7JuOMt4GE9607Qin",
    "id" : "3dBVyJ7JuOMt4GE9607Qin",
    "images" : [ {
      "height" : 1300,
      "url" : "https://i.scdn.co/image/5515a710c94ccd4edd8b9a0587778ed5e3f997da",
      "width" : 1000
    }, {
      "height" : 832,
      "url" : "https://i.scdn.co/image/c990e667b4ca8240c73b0db06e6d76a3b27ce929",
      "width" : 640
    }, {
      "height" : 260,
      "url" : "https://i.scdn.co/image/de2fa1d11c59e63143117d44ec9990b9e40451a2",
      "width" : 200
    }, {
      "height" : 83,
      "url" : "https://i.scdn.co/image/b39638735adb4a4a54621293b99ab65c546f605e",
      "width" : 64
    } ],
    "name" : "T. Rex",
    "popularity" : 55,
    "type" : "artist",
    "uri" : "spotify:artist:3dBVyJ7JuOMt4GE9607Qin"
  } ]
};




/**
 * Get an Artist’s Albums
 * 
 * GET /v1/artists/{id}/albums
 * https://developer.spotify.com/web-api/get-artists-albums/
 */
const getArtistsAlbums : SpotifyApi.ArtistsAlbumsResponse = {
  "href" : "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?offset=0&limit=2&album_type=single",
  "items" : [ {
    "album_type" : "single",
    "available_markets" : [ "CA", "MX", "US" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/3qmjJVxvSp5k7seea8z0PU"
    },
    "href" : "https://api.spotify.com/v1/albums/3qmjJVxvSp5k7seea8z0PU",
    "id" : "3qmjJVxvSp5k7seea8z0PU",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/47827fbf1492983ba2eae4d109ca44467126d4c4",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/eec169cb9c70bde4998c437d37cb849b47572f7a",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/df36cadc3eeb0fb6b8da7c6490e53a2f1229775b",
      "width" : 64
    } ],
    "name" : "Broken Arrows (Remixes)",
    "type" : "album",
    "uri" : "spotify:album:3qmjJVxvSp5k7seea8z0PU"
  }, {
    "album_type" : "single",
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/4nCNj68SZym6hNxXDkRtjN"
    },
    "href" : "https://api.spotify.com/v1/albums/4nCNj68SZym6hNxXDkRtjN",
    "id" : "4nCNj68SZym6hNxXDkRtjN",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/c735be011394f4e7cdf1ebbf95d112cb69fd3414",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/7f4221fda86e4daa539fd29233fadad039cc46d9",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/e1930bf1293d89799a0e382b40ebad5455b11857",
      "width" : 64
    } ],
    "name" : "Broken Arrows (Remixes)",
    "type" : "album",
    "uri" : "spotify:album:4nCNj68SZym6hNxXDkRtjN"
  } ],
  "limit" : 2,
  "next" : "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?offset=2&limit=2&album_type=single",
  "offset" : 0,
  "previous" : null,
  "total" : 168
};



/**
 * Get an Artist’s Top Tracks
 * 
 * GET /v1/artists/{id}/top-tracks
 * https://developer.spotify.com/web-api/get-artists-top-tracks/
 */
const getArtistsTopTracks : SpotifyApi.ArtistsTopTracksResponse = {
  "tracks" : [ {
    "album" : {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/6zk4RKl6JFlgLCV4Z7DQ7N"
      },
      "href" : "https://api.spotify.com/v1/albums/6zk4RKl6JFlgLCV4Z7DQ7N",
      "id" : "6zk4RKl6JFlgLCV4Z7DQ7N",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/1b4845d0abd116eab69a3059ec0a0374030e0261",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/2a12ad8c66ce0ed90bd127fcc5701251e169688c",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/73cf829fee9a9ac481e60b1bf919bc9fb20753e6",
        "width" : 64
      } ],
      "name" : "Elvis' Christmas Album",
      "type" : "album",
      "uri" : "spotify:album:6zk4RKl6JFlgLCV4Z7DQ7N"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
      },
      "href" : "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
      "id" : "43ZHCT0cAZBISjO8DG9PnE",
      "name" : "Elvis Presley",
      "type" : "artist",
      "uri" : "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 129173,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USRC15701155"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/3QiAAp20rPC3dcAtKtMaqQ"
    },
    "href" : "https://api.spotify.com/v1/tracks/3QiAAp20rPC3dcAtKtMaqQ",
    "id" : "3QiAAp20rPC3dcAtKtMaqQ",
    "name" : "Blue Christmas",
    "popularity" : 80,
    "preview_url" : "https://p.scdn.co/mp3-preview/ddcfe1df4783b2e41f494dec4b13917fb8e1465d",
    "track_number" : 5,
    "type" : "track",
    "uri" : "spotify:track:3QiAAp20rPC3dcAtKtMaqQ"
  }, {
    "album" : {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/6zk4RKl6JFlgLCV4Z7DQ7N"
      },
      "href" : "https://api.spotify.com/v1/albums/6zk4RKl6JFlgLCV4Z7DQ7N",
      "id" : "6zk4RKl6JFlgLCV4Z7DQ7N",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/1b4845d0abd116eab69a3059ec0a0374030e0261",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/2a12ad8c66ce0ed90bd127fcc5701251e169688c",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/73cf829fee9a9ac481e60b1bf919bc9fb20753e6",
        "width" : 64
      } ],
      "name" : "Elvis' Christmas Album",
      "type" : "album",
      "uri" : "spotify:album:6zk4RKl6JFlgLCV4Z7DQ7N"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
      },
      "href" : "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
      "id" : "43ZHCT0cAZBISjO8DG9PnE",
      "name" : "Elvis Presley",
      "type" : "artist",
      "uri" : "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 115826,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USRC15701156"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/7n7VsX3sv66znBwA8b5uhp"
    },
    "href" : "https://api.spotify.com/v1/tracks/7n7VsX3sv66znBwA8b5uhp",
    "id" : "7n7VsX3sv66znBwA8b5uhp",
    "name" : "Here Comes Santa Claus (Right Down Santa Claus Lane)",
    "popularity" : 72,
    "preview_url" : "https://p.scdn.co/mp3-preview/6a21a6141687ff9b2f0bede600ff1f6c85bcd8d1",
    "track_number" : 3,
    "type" : "track",
    "uri" : "spotify:track:7n7VsX3sv66znBwA8b5uhp"
  }, {
    "album" : {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/7xe8VI48TxUpU1IIo0RfGi"
      },
      "href" : "https://api.spotify.com/v1/albums/7xe8VI48TxUpU1IIo0RfGi",
      "id" : "7xe8VI48TxUpU1IIo0RfGi",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/479ec1fcd836348926b576260b5be92503f8b0a4",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/255a1b0e1cb4edda647854db0f438e3af78e3018",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/49e1648ce6f47aa0ccb6cc50929c898528557cf3",
        "width" : 64
      } ],
      "name" : "Blue Hawaii",
      "type" : "album",
      "uri" : "spotify:album:7xe8VI48TxUpU1IIo0RfGi"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
      },
      "href" : "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
      "id" : "43ZHCT0cAZBISjO8DG9PnE",
      "name" : "Elvis Presley",
      "type" : "artist",
      "uri" : "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 179773,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USRC16101350"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC"
    },
    "href" : "https://api.spotify.com/v1/tracks/44AyOl4qVkzS48vBsbNXaC",
    "id" : "44AyOl4qVkzS48vBsbNXaC",
    "name" : "Can't Help Falling in Love",
    "popularity" : 70,
    "preview_url" : "https://p.scdn.co/mp3-preview/26e409b39a2da6dc18fab61020c90be2938dc0e9",
    "track_number" : 5,
    "type" : "track",
    "uri" : "spotify:track:44AyOl4qVkzS48vBsbNXaC"
  }, {
    "album" : {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/270qabVGN0kCo2SJQn5a72"
      },
      "href" : "https://api.spotify.com/v1/albums/270qabVGN0kCo2SJQn5a72",
      "id" : "270qabVGN0kCo2SJQn5a72",
      "images" : [ {
        "height" : 636,
        "url" : "https://i.scdn.co/image/258782c56c531d9dff4b7e5f2192764d98e6b99b",
        "width" : 640
      }, {
        "height" : 298,
        "url" : "https://i.scdn.co/image/3a59000a810f7e4ac234b1c4a6acb84f19a43d4e",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/cce7105a3e441834b892a6d5e57893e55ec3ec09",
        "width" : 64
      } ],
      "name" : "The Classic Christmas Album",
      "type" : "album",
      "uri" : "spotify:album:270qabVGN0kCo2SJQn5a72"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
      },
      "href" : "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
      "id" : "43ZHCT0cAZBISjO8DG9PnE",
      "name" : "Elvis Presley",
      "type" : "artist",
      "uri" : "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3P33qFNGBVXl86yQYWspFj"
      },
      "href" : "https://api.spotify.com/v1/artists/3P33qFNGBVXl86yQYWspFj",
      "id" : "3P33qFNGBVXl86yQYWspFj",
      "name" : "Martina McBride",
      "type" : "artist",
      "uri" : "spotify:artist:3P33qFNGBVXl86yQYWspFj"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 148546,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USRN10800437"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/7upOqYZUQvA0nyVroaHeSg"
    },
    "href" : "https://api.spotify.com/v1/tracks/7upOqYZUQvA0nyVroaHeSg",
    "id" : "7upOqYZUQvA0nyVroaHeSg",
    "name" : "Blue Christmas",
    "popularity" : 48,
    "preview_url" : "https://p.scdn.co/mp3-preview/64edbec4b760d1c2bc0606f6d7c11c9a244c0155",
    "track_number" : 9,
    "type" : "track",
    "uri" : "spotify:track:7upOqYZUQvA0nyVroaHeSg"
  }, {
    "album" : {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
      },
      "href" : "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
      "id" : "0C3t1htEDTFKcg7F2rNbek",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/97f150dc58d9900133e895f8e61e2087621dccdc",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/0b45ca0a9e6c03137e7f733a9bd8856f63143702",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/185d20742c42d78ff0f58f3c970565ddc9217c94",
        "width" : 64
      } ],
      "name" : "Elvis' Golden Records",
      "type" : "album",
      "uri" : "spotify:album:0C3t1htEDTFKcg7F2rNbek"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
      },
      "href" : "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
      "id" : "43ZHCT0cAZBISjO8DG9PnE",
      "name" : "Elvis Presley",
      "type" : "artist",
      "uri" : "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 146480,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USRC15705223"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/4gphxUgq0JSFv2BCLhNDiE"
    },
    "href" : "https://api.spotify.com/v1/tracks/4gphxUgq0JSFv2BCLhNDiE",
    "id" : "4gphxUgq0JSFv2BCLhNDiE",
    "name" : "Jailhouse Rock",
    "popularity" : 66,
    "preview_url" : "https://p.scdn.co/mp3-preview/29990f669b5328b6c40320596a2b14d8660cdb54",
    "track_number" : 5,
    "type" : "track",
    "uri" : "spotify:track:4gphxUgq0JSFv2BCLhNDiE"
  }, {
    "album" : {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/6zk4RKl6JFlgLCV4Z7DQ7N"
      },
      "href" : "https://api.spotify.com/v1/albums/6zk4RKl6JFlgLCV4Z7DQ7N",
      "id" : "6zk4RKl6JFlgLCV4Z7DQ7N",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/1b4845d0abd116eab69a3059ec0a0374030e0261",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/2a12ad8c66ce0ed90bd127fcc5701251e169688c",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/73cf829fee9a9ac481e60b1bf919bc9fb20753e6",
        "width" : 64
      } ],
      "name" : "Elvis' Christmas Album",
      "type" : "album",
      "uri" : "spotify:album:6zk4RKl6JFlgLCV4Z7DQ7N"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
      },
      "href" : "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
      "id" : "43ZHCT0cAZBISjO8DG9PnE",
      "name" : "Elvis Presley",
      "type" : "artist",
      "uri" : "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 113333,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USRC15701158"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/2hON3z0PTxwx9u4zzEyFRo"
    },
    "href" : "https://api.spotify.com/v1/tracks/2hON3z0PTxwx9u4zzEyFRo",
    "id" : "2hON3z0PTxwx9u4zzEyFRo",
    "name" : "Santa Bring My Baby Back (To Me)",
    "popularity" : 66,
    "preview_url" : "https://p.scdn.co/mp3-preview/2c83cc06efce130b5dfb855657b308b946689ce2",
    "track_number" : 6,
    "type" : "track",
    "uri" : "spotify:track:2hON3z0PTxwx9u4zzEyFRo"
  }, {
    "album" : {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/38lhaWsw8PImY1pIIlKyDJ"
      },
      "href" : "https://api.spotify.com/v1/albums/38lhaWsw8PImY1pIIlKyDJ",
      "id" : "38lhaWsw8PImY1pIIlKyDJ",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/5f52605ad70e4ee4d79fce461d94b6f6142e24ef",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/781849a6b88350d11ffb9c5b095eb1b4fae23b25",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/53dcb2071ce2b77d633eee3a7ae6768dcdc6d60a",
        "width" : 64
      } ],
      "name" : "Back In Memphis",
      "type" : "album",
      "uri" : "spotify:album:38lhaWsw8PImY1pIIlKyDJ"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
      },
      "href" : "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
      "id" : "43ZHCT0cAZBISjO8DG9PnE",
      "name" : "Elvis Presley",
      "type" : "artist",
      "uri" : "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 263973,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USRC16901355"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/1OtWwtGFPXVhdAVKZHwrNF"
    },
    "href" : "https://api.spotify.com/v1/tracks/1OtWwtGFPXVhdAVKZHwrNF",
    "id" : "1OtWwtGFPXVhdAVKZHwrNF",
    "name" : "Suspicious Minds",
    "popularity" : 66,
    "preview_url" : "https://p.scdn.co/mp3-preview/1577e9e4e6f90ef513ff274024db9c7cb56703d7",
    "track_number" : 14,
    "type" : "track",
    "uri" : "spotify:track:1OtWwtGFPXVhdAVKZHwrNF"
  }, {
    "album" : {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/6zk4RKl6JFlgLCV4Z7DQ7N"
      },
      "href" : "https://api.spotify.com/v1/albums/6zk4RKl6JFlgLCV4Z7DQ7N",
      "id" : "6zk4RKl6JFlgLCV4Z7DQ7N",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/1b4845d0abd116eab69a3059ec0a0374030e0261",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/2a12ad8c66ce0ed90bd127fcc5701251e169688c",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/73cf829fee9a9ac481e60b1bf919bc9fb20753e6",
        "width" : 64
      } ],
      "name" : "Elvis' Christmas Album",
      "type" : "album",
      "uri" : "spotify:album:6zk4RKl6JFlgLCV4Z7DQ7N"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
      },
      "href" : "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
      "id" : "43ZHCT0cAZBISjO8DG9PnE",
      "name" : "Elvis Presley",
      "type" : "artist",
      "uri" : "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 145000,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USRC15706998"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/6cw1OgKsuEWQbmQb5Z4a3T"
    },
    "href" : "https://api.spotify.com/v1/tracks/6cw1OgKsuEWQbmQb5Z4a3T",
    "id" : "6cw1OgKsuEWQbmQb5Z4a3T",
    "name" : "Silent Night",
    "popularity" : 66,
    "preview_url" : "https://p.scdn.co/mp3-preview/b4d48860e3e19f0449920f5b1e08cd36739e107d",
    "track_number" : 8,
    "type" : "track",
    "uri" : "spotify:track:6cw1OgKsuEWQbmQb5Z4a3T"
  }, {
    "album" : {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/6zk4RKl6JFlgLCV4Z7DQ7N"
      },
      "href" : "https://api.spotify.com/v1/albums/6zk4RKl6JFlgLCV4Z7DQ7N",
      "id" : "6zk4RKl6JFlgLCV4Z7DQ7N",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/1b4845d0abd116eab69a3059ec0a0374030e0261",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/2a12ad8c66ce0ed90bd127fcc5701251e169688c",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/73cf829fee9a9ac481e60b1bf919bc9fb20753e6",
        "width" : 64
      } ],
      "name" : "Elvis' Christmas Album",
      "type" : "album",
      "uri" : "spotify:album:6zk4RKl6JFlgLCV4Z7DQ7N"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
      },
      "href" : "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
      "id" : "43ZHCT0cAZBISjO8DG9PnE",
      "name" : "Elvis Presley",
      "type" : "artist",
      "uri" : "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 142600,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USRC15701161"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/5b1jXYUOgAX5QAHXPVHdld"
    },
    "href" : "https://api.spotify.com/v1/tracks/5b1jXYUOgAX5QAHXPVHdld",
    "id" : "5b1jXYUOgAX5QAHXPVHdld",
    "name" : "Santa Claus Is Back In Town",
    "popularity" : 65,
    "preview_url" : "https://p.scdn.co/mp3-preview/88e57383420e295ea5ca4c626d2a042d6ac64c1e",
    "track_number" : 1,
    "type" : "track",
    "uri" : "spotify:track:5b1jXYUOgAX5QAHXPVHdld"
  }, {
    "album" : {
      "album_type" : "compilation",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/34EYk8vvJHCUlNrpGxepea"
      },
      "href" : "https://api.spotify.com/v1/albums/34EYk8vvJHCUlNrpGxepea",
      "id" : "34EYk8vvJHCUlNrpGxepea",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/6324fe377dcedf110025527873dafc9b7ee0bb34",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/d2e2148023e8a87b7a2f8d2abdfa936154e470b8",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/af45f7b48d8a4c7252e1b1ad9240ed8b08c06b31",
        "width" : 64
      } ],
      "name" : "Elvis 75 - Good Rockin' Tonight",
      "type" : "album",
      "uri" : "spotify:album:34EYk8vvJHCUlNrpGxepea"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
      },
      "href" : "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
      "id" : "43ZHCT0cAZBISjO8DG9PnE",
      "name" : "Elvis Presley",
      "type" : "artist",
      "uri" : "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/6EkPaTMpQmLwR7CgYiKHha"
      },
      "href" : "https://api.spotify.com/v1/artists/6EkPaTMpQmLwR7CgYiKHha",
      "id" : "6EkPaTMpQmLwR7CgYiKHha",
      "name" : "JXL",
      "type" : "artist",
      "uri" : "spotify:artist:6EkPaTMpQmLwR7CgYiKHha"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
    "disc_number" : 4,
    "duration_ms" : 211173,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USRC10200288"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/4l2hnfUx0esSbITQa7iJt0"
    },
    "href" : "https://api.spotify.com/v1/tracks/4l2hnfUx0esSbITQa7iJt0",
    "id" : "4l2hnfUx0esSbITQa7iJt0",
    "name" : "A Little Less Conversation - JXL Radio Edit Remix",
    "popularity" : 63,
    "preview_url" : "https://p.scdn.co/mp3-preview/d257e518f4a17cf3f46475e6759b76b4c934f2ad",
    "track_number" : 19,
    "type" : "track",
    "uri" : "spotify:track:4l2hnfUx0esSbITQa7iJt0"
  } ]
};




/**
 * Get an Artist’s Related Artists
 * 
 * GET /v1/artists/{id}/related-artists
 * https://developer.spotify.com/web-api/get-related-artists/
 */
const getArtistRelatedArtists : SpotifyApi.ArtistsRelatedArtistsResponse = {
  "artists" : [ {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/0JDkhL4rjiPNEp92jAgJnS"
    },
    "followers" : {
      "href" : null,
      "total" : 127811
    },
    "genres" : [ "brill building pop", "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/0JDkhL4rjiPNEp92jAgJnS",
    "id" : "0JDkhL4rjiPNEp92jAgJnS",
    "images" : [ {
      "height" : 1373,
      "url" : "https://i.scdn.co/image/7f1b3c37612225eb475418cce5fad6c4b899028d",
      "width" : 1000
    }, {
      "height" : 879,
      "url" : "https://i.scdn.co/image/b5137cd3489bd841acc464f0f381ae2c9adc0a40",
      "width" : 640
    }, {
      "height" : 275,
      "url" : "https://i.scdn.co/image/664df3c8d77780e9871a1e80ee0389e84fa82ddc",
      "width" : 200
    }, {
      "height" : 88,
      "url" : "https://i.scdn.co/image/6479926a4a97dd7ddddc70b7fb87c6b7de0d705d",
      "width" : 64
    } ],
    "name" : "Roy Orbison",
    "popularity" : 60,
    "type" : "artist",
    "uri" : "spotify:artist:0JDkhL4rjiPNEp92jAgJnS"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/2zyz0VJqrDXeFDIyrfVXSo"
    },
    "followers" : {
      "href" : null,
      "total" : 65322
    },
    "genres" : [ "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/2zyz0VJqrDXeFDIyrfVXSo",
    "id" : "2zyz0VJqrDXeFDIyrfVXSo",
    "images" : [ {
      "height" : 1278,
      "url" : "https://i.scdn.co/image/9ff799b50db2f8f5fe8eaec5daac36e1792f3cb3",
      "width" : 1000
    }, {
      "height" : 818,
      "url" : "https://i.scdn.co/image/198a68c93e80bd7384678d62100bddca884ffff7",
      "width" : 640
    }, {
      "height" : 256,
      "url" : "https://i.scdn.co/image/ce87f34433255b9cd3889ee7e6af10f168cee9b4",
      "width" : 200
    }, {
      "height" : 82,
      "url" : "https://i.scdn.co/image/d050407ffb44438e02830d6125b1bd2b955d5731",
      "width" : 64
    } ],
    "name" : "Jerry Lee Lewis",
    "popularity" : 53,
    "type" : "artist",
    "uri" : "spotify:artist:2zyz0VJqrDXeFDIyrfVXSo"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/3wYyutjgII8LJVVOLrGI0D"
    },
    "followers" : {
      "href" : null,
      "total" : 95371
    },
    "genres" : [ "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/3wYyutjgII8LJVVOLrGI0D",
    "id" : "3wYyutjgII8LJVVOLrGI0D",
    "images" : [ {
      "height" : 1266,
      "url" : "https://i.scdn.co/image/e8246f90d11c6d4985069cc4b29c0a1e41e75241",
      "width" : 1000
    }, {
      "height" : 810,
      "url" : "https://i.scdn.co/image/9a6b7bce7b052c7c12412bbdfd50cf85eb05b81e",
      "width" : 640
    }, {
      "height" : 253,
      "url" : "https://i.scdn.co/image/2c2b311b63e4e91739b419b1e8382d6421e680b3",
      "width" : 200
    }, {
      "height" : 81,
      "url" : "https://i.scdn.co/image/5cef984df6a60c96520c952ef85923de0907a512",
      "width" : 64
    } ],
    "name" : "Buddy Holly",
    "popularity" : 55,
    "type" : "artist",
    "uri" : "spotify:artist:3wYyutjgII8LJVVOLrGI0D"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/73sSFVlM6pkweLXE8qw1OS"
    },
    "followers" : {
      "href" : null,
      "total" : 26194
    },
    "genres" : [ "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/73sSFVlM6pkweLXE8qw1OS",
    "id" : "73sSFVlM6pkweLXE8qw1OS",
    "images" : [ {
      "height" : 1129,
      "url" : "https://i.scdn.co/image/53b1e360f7e4978410529ee7a971c3f8a4118622",
      "width" : 1000
    }, {
      "height" : 723,
      "url" : "https://i.scdn.co/image/e4eb935b9af1f78735e9e25e8e75e3685b81fdd8",
      "width" : 640
    }, {
      "height" : 226,
      "url" : "https://i.scdn.co/image/d6f709471d825cb9cf991acb77b7fb87667c0de1",
      "width" : 200
    }, {
      "height" : 72,
      "url" : "https://i.scdn.co/image/6ced7f8bcb6a04e22dd357c4110fa0e4349933cd",
      "width" : 64
    } ],
    "name" : "Ricky Nelson",
    "popularity" : 46,
    "type" : "artist",
    "uri" : "spotify:artist:73sSFVlM6pkweLXE8qw1OS"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/5hIClg6noTaCzMu2s5wp4f"
    },
    "followers" : {
      "href" : null,
      "total" : 15528
    },
    "genres" : [ "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/5hIClg6noTaCzMu2s5wp4f",
    "id" : "5hIClg6noTaCzMu2s5wp4f",
    "images" : [ {
      "height" : 737,
      "url" : "https://i.scdn.co/image/02b340629ddcc41fe48932fba641312f27de49a7",
      "width" : 999
    }, {
      "height" : 472,
      "url" : "https://i.scdn.co/image/c99b5bc0bd9bfd566c6f64eccf9ae6426aaeff20",
      "width" : 640
    }, {
      "height" : 147,
      "url" : "https://i.scdn.co/image/a2240effbf0c00539348d81e90380a14a51651cc",
      "width" : 199
    }, {
      "height" : 47,
      "url" : "https://i.scdn.co/image/9af48c6576925720e3d43aacdd7797c52e1a639b",
      "width" : 64
    } ],
    "name" : "Carl Perkins",
    "popularity" : 44,
    "type" : "artist",
    "uri" : "spotify:artist:5hIClg6noTaCzMu2s5wp4f"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/4ACplpEqD6JIVgKrafauzs"
    },
    "followers" : {
      "href" : null,
      "total" : 44959
    },
    "genres" : [ "brill building pop", "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/4ACplpEqD6JIVgKrafauzs",
    "id" : "4ACplpEqD6JIVgKrafauzs",
    "images" : [ {
      "height" : 1035,
      "url" : "https://i.scdn.co/image/bf582c9e540c2f12771cfd032f592d31697cfae9",
      "width" : 1000
    }, {
      "height" : 662,
      "url" : "https://i.scdn.co/image/da7c23421146985b7e1583d3bc09ecba9f7ac5c6",
      "width" : 640
    }, {
      "height" : 207,
      "url" : "https://i.scdn.co/image/b430dbc0ed1d6926b9088440683d15270e5154cc",
      "width" : 200
    }, {
      "height" : 66,
      "url" : "https://i.scdn.co/image/985afca7544c6933b7e7ada2018c4ed0b4bba7a0",
      "width" : 64
    } ],
    "name" : "The Everly Brothers",
    "popularity" : 53,
    "type" : "artist",
    "uri" : "spotify:artist:4ACplpEqD6JIVgKrafauzs"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/4xls23Ye9WR9yy3yYMpAMm"
    },
    "followers" : {
      "href" : null,
      "total" : 62897
    },
    "genres" : [ "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/4xls23Ye9WR9yy3yYMpAMm",
    "id" : "4xls23Ye9WR9yy3yYMpAMm",
    "images" : [ {
      "height" : 1181,
      "url" : "https://i.scdn.co/image/b4db13fb1d2e2872d7b7eac4b17d67870482f16f",
      "width" : 1000
    }, {
      "height" : 756,
      "url" : "https://i.scdn.co/image/217387b531599ffb81751ab8629c4baf78d85c4e",
      "width" : 640
    }, {
      "height" : 236,
      "url" : "https://i.scdn.co/image/82fe8f7a2d139b7c746b5ff6985f6b186113dd75",
      "width" : 200
    }, {
      "height" : 76,
      "url" : "https://i.scdn.co/image/de0d8715aa69bdbbd1236c6c88528ff93804e86d",
      "width" : 64
    } ],
    "name" : "Little Richard",
    "popularity" : 55,
    "type" : "artist",
    "uri" : "spotify:artist:4xls23Ye9WR9yy3yYMpAMm"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/1p0t3JtUTayV2wb1RGN9mO"
    },
    "followers" : {
      "href" : null,
      "total" : 26019
    },
    "genres" : [ "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/1p0t3JtUTayV2wb1RGN9mO",
    "id" : "1p0t3JtUTayV2wb1RGN9mO",
    "images" : [ {
      "height" : 752,
      "url" : "https://i.scdn.co/image/6c3d2f6c26991828bf2d776fc468b929ca31304a",
      "width" : 648
    }, {
      "height" : 743,
      "url" : "https://i.scdn.co/image/21c81243f2df0b3ce5cdcd7af629beef7e8af76e",
      "width" : 640
    }, {
      "height" : 232,
      "url" : "https://i.scdn.co/image/9a800b3323b9edcdb0267aad068aedd594cc1fd1",
      "width" : 200
    }, {
      "height" : 74,
      "url" : "https://i.scdn.co/image/5b01110b8def5978979b9bd946612e353028828d",
      "width" : 64
    } ],
    "name" : "Eddie Cochran",
    "popularity" : 48,
    "type" : "artist",
    "uri" : "spotify:artist:1p0t3JtUTayV2wb1RGN9mO"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/293zczrfYafIItmnmM3coR"
    },
    "followers" : {
      "href" : null,
      "total" : 155572
    },
    "genres" : [ "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/293zczrfYafIItmnmM3coR",
    "id" : "293zczrfYafIItmnmM3coR",
    "images" : [ {
      "height" : 1198,
      "url" : "https://i.scdn.co/image/806ae8389df74bb2f8df1adf64c67c0e6dc76048",
      "width" : 1000
    }, {
      "height" : 766,
      "url" : "https://i.scdn.co/image/f07a0dc93bde1aa294355c26b2a75edaa274c8f8",
      "width" : 640
    }, {
      "height" : 240,
      "url" : "https://i.scdn.co/image/c5d23d159328aa908baaeeff6fa4855cf8519999",
      "width" : 200
    }, {
      "height" : 77,
      "url" : "https://i.scdn.co/image/98006c221cbcc29bc9746757e69fa896fd0a5640",
      "width" : 64
    } ],
    "name" : "Chuck Berry",
    "popularity" : 65,
    "type" : "artist",
    "uri" : "spotify:artist:293zczrfYafIItmnmM3coR"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/5Y9xEAGW4GwGJgbiI6W85P"
    },
    "followers" : {
      "href" : null,
      "total" : 29285
    },
    "genres" : [ "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/5Y9xEAGW4GwGJgbiI6W85P",
    "id" : "5Y9xEAGW4GwGJgbiI6W85P",
    "images" : [ {
      "height" : 719,
      "url" : "https://i.scdn.co/image/02da1b78ba9cad76b662cff4d0fdf41f20bbc67d",
      "width" : 1000
    }, {
      "height" : 460,
      "url" : "https://i.scdn.co/image/be6d7f39b75ff62aadc113d4c2142291821bdc0d",
      "width" : 640
    }, {
      "height" : 144,
      "url" : "https://i.scdn.co/image/1f234198e2d01e415acdc058956993c89f842b32",
      "width" : 200
    }, {
      "height" : 46,
      "url" : "https://i.scdn.co/image/f1a5f9fc9ad095d419313308b38f805e42c05dcf",
      "width" : 64
    } ],
    "name" : "Ritchie Valens",
    "popularity" : 50,
    "type" : "artist",
    "uri" : "spotify:artist:5Y9xEAGW4GwGJgbiI6W85P"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/4cPHsZM98sKzmV26wlwD2W"
    },
    "followers" : {
      "href" : null,
      "total" : 25168
    },
    "genres" : [ ],
    "href" : "https://api.spotify.com/v1/artists/4cPHsZM98sKzmV26wlwD2W",
    "id" : "4cPHsZM98sKzmV26wlwD2W",
    "images" : [ {
      "height" : 1469,
      "url" : "https://i.scdn.co/image/b2d04f712c91bcf98a28ce1a8c2f674ddb724ec6",
      "width" : 1000
    }, {
      "height" : 940,
      "url" : "https://i.scdn.co/image/4ca270764861f2e13851b8e5110bb96ba7f39359",
      "width" : 640
    }, {
      "height" : 294,
      "url" : "https://i.scdn.co/image/89ecdb230bcc12e980ce58fd88d20cc6dbc5b388",
      "width" : 200
    }, {
      "height" : 94,
      "url" : "https://i.scdn.co/image/2e615b79eb4c945b7a57e241448e681d7f2da8bd",
      "width" : 64
    } ],
    "name" : "Brenda Lee",
    "popularity" : 68,
    "type" : "artist",
    "uri" : "spotify:artist:4cPHsZM98sKzmV26wlwD2W"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/2XBzvyw3fwtZu4iUz12x0G"
    },
    "followers" : {
      "href" : null,
      "total" : 12228
    },
    "genres" : [ "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/2XBzvyw3fwtZu4iUz12x0G",
    "id" : "2XBzvyw3fwtZu4iUz12x0G",
    "images" : [ {
      "height" : 809,
      "url" : "https://i.scdn.co/image/8e9c925577ff4d563f9f12324453be1b5d026494",
      "width" : 1000
    }, {
      "height" : 518,
      "url" : "https://i.scdn.co/image/37b77aa15c67c4d8763a73301360d405715a7145",
      "width" : 640
    }, {
      "height" : 162,
      "url" : "https://i.scdn.co/image/3b2ae8fdc389ee165b7f5787fd91ae6604ff4fca",
      "width" : 200
    }, {
      "height" : 52,
      "url" : "https://i.scdn.co/image/fb39aac889247b6528b3bbc85c1e2ef773ad2b47",
      "width" : 64
    } ],
    "name" : "Bill Haley",
    "popularity" : 37,
    "type" : "artist",
    "uri" : "spotify:artist:2XBzvyw3fwtZu4iUz12x0G"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/6KWcxMWVNVIYbdOQyJtsSy"
    },
    "followers" : {
      "href" : null,
      "total" : 46850
    },
    "genres" : [ "brill building pop" ],
    "href" : "https://api.spotify.com/v1/artists/6KWcxMWVNVIYbdOQyJtsSy",
    "id" : "6KWcxMWVNVIYbdOQyJtsSy",
    "images" : [ {
      "height" : 857,
      "url" : "https://i.scdn.co/image/10557069b43b1059e6490d062a5d21154a78d69d",
      "width" : 689
    }, {
      "height" : 796,
      "url" : "https://i.scdn.co/image/f6fa63eb8267c9381557adbb37119900c49c3734",
      "width" : 640
    }, {
      "height" : 249,
      "url" : "https://i.scdn.co/image/634e2cd425103bfd8766a7f31adcaa0bdfedb3ac",
      "width" : 200
    }, {
      "height" : 80,
      "url" : "https://i.scdn.co/image/864692e8803ffa885e34cbcde41acb218019c17e",
      "width" : 64
    } ],
    "name" : "The Platters",
    "popularity" : 56,
    "type" : "artist",
    "uri" : "spotify:artist:6KWcxMWVNVIYbdOQyJtsSy"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/5ZKMPRDHc7qElVJFh3uRqB"
    },
    "followers" : {
      "href" : null,
      "total" : 24305
    },
    "genres" : [ "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/5ZKMPRDHc7qElVJFh3uRqB",
    "id" : "5ZKMPRDHc7qElVJFh3uRqB",
    "images" : [ {
      "height" : 997,
      "url" : "https://i.scdn.co/image/beff5827580bcc4d129cbc0872768095eeba8c14",
      "width" : 1000
    }, {
      "height" : 638,
      "url" : "https://i.scdn.co/image/dbabf703779789917c4dd1c0e54da62c7a45ce92",
      "width" : 640
    }, {
      "height" : 199,
      "url" : "https://i.scdn.co/image/74761c343bec27c814b8e44e4bc095cbf1b674bb",
      "width" : 200
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/0c30af5647c74fee14fb97981c23b336abbc9f21",
      "width" : 64
    } ],
    "name" : "Wanda Jackson",
    "popularity" : 46,
    "type" : "artist",
    "uri" : "spotify:artist:5ZKMPRDHc7qElVJFh3uRqB"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/5VAHm7V5mnsxvQrWw3KHmx"
    },
    "followers" : {
      "href" : null,
      "total" : 11286
    },
    "genres" : [ "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/5VAHm7V5mnsxvQrWw3KHmx",
    "id" : "5VAHm7V5mnsxvQrWw3KHmx",
    "images" : [ {
      "height" : 1224,
      "url" : "https://i.scdn.co/image/f3f3a6df9ee1854a32a8a4e635820002c6ef32be",
      "width" : 1000
    }, {
      "height" : 784,
      "url" : "https://i.scdn.co/image/4ebffb55a443fb401fe0233fd6c8bb42f381f235",
      "width" : 640
    }, {
      "height" : 245,
      "url" : "https://i.scdn.co/image/12876b206cc3e3d1133a674c8e02caee88ca5285",
      "width" : 200
    }, {
      "height" : 78,
      "url" : "https://i.scdn.co/image/4d3bf8fc93e3e0c7314c38142d38c74959c9f52d",
      "width" : 64
    } ],
    "name" : "Gene Vincent",
    "popularity" : 40,
    "type" : "artist",
    "uri" : "spotify:artist:5VAHm7V5mnsxvQrWw3KHmx"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/09C0xjtosNAIXP36wTnWxd"
    },
    "followers" : {
      "href" : null,
      "total" : 40209
    },
    "genres" : [ "new orleans blues", "rock-and-roll", "swamp pop" ],
    "href" : "https://api.spotify.com/v1/artists/09C0xjtosNAIXP36wTnWxd",
    "id" : "09C0xjtosNAIXP36wTnWxd",
    "images" : [ {
      "height" : 1170,
      "url" : "https://i.scdn.co/image/1e7e3ddbe8c3862d32d35aef5e4a763718f1e370",
      "width" : 1000
    }, {
      "height" : 749,
      "url" : "https://i.scdn.co/image/172221e04fef2e038871248b3abdecbcf8f5c131",
      "width" : 640
    }, {
      "height" : 234,
      "url" : "https://i.scdn.co/image/5ee1c7e5f1a45125ee8315d90ca62e6afb04cc25",
      "width" : 200
    }, {
      "height" : 75,
      "url" : "https://i.scdn.co/image/afe5d30d0286526a60aa0d37c02d5864eb24f67b",
      "width" : 64
    } ],
    "name" : "Fats Domino",
    "popularity" : 52,
    "type" : "artist",
    "uri" : "spotify:artist:09C0xjtosNAIXP36wTnWxd"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/3MFp4cYuYtTZe3d3xkLLbr"
    },
    "followers" : {
      "href" : null,
      "total" : 9304
    },
    "genres" : [ "rock-and-roll", "rockabilly" ],
    "href" : "https://api.spotify.com/v1/artists/3MFp4cYuYtTZe3d3xkLLbr",
    "id" : "3MFp4cYuYtTZe3d3xkLLbr",
    "images" : [ {
      "height" : 587,
      "url" : "https://i.scdn.co/image/5ff43c4d5c1131fd5adcc4c3cab712a7ef044148",
      "width" : 640
    }, {
      "height" : 275,
      "url" : "https://i.scdn.co/image/18b454401b7bf1ae7fe7e713ee0406f9d3246727",
      "width" : 300
    }, {
      "height" : 59,
      "url" : "https://i.scdn.co/image/a7b0b3eeae2cfbf7419c2c3fa704992c39cf1c62",
      "width" : 64
    } ],
    "name" : "Bill Haley & His Comets",
    "popularity" : 44,
    "type" : "artist",
    "uri" : "spotify:artist:3MFp4cYuYtTZe3d3xkLLbr"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/7ceUfdWq2t5nbatS6ollHh"
    },
    "followers" : {
      "href" : null,
      "total" : 34766
    },
    "genres" : [ "adult standards", "brill building pop", "christmas", "lounge" ],
    "href" : "https://api.spotify.com/v1/artists/7ceUfdWq2t5nbatS6ollHh",
    "id" : "7ceUfdWq2t5nbatS6ollHh",
    "images" : [ {
      "height" : 1100,
      "url" : "https://i.scdn.co/image/2cf68a5624e8a646d51760740d83be8a3361cb71",
      "width" : 1000
    }, {
      "height" : 704,
      "url" : "https://i.scdn.co/image/5a571c35e1840766e3f15dabb42d86adda26da90",
      "width" : 640
    }, {
      "height" : 220,
      "url" : "https://i.scdn.co/image/d9f7f5448bfe1492337d78c1791ab442f9b8b56a",
      "width" : 200
    }, {
      "height" : 70,
      "url" : "https://i.scdn.co/image/5b3f6e1161dff6d711d8d1b0c9a802096aa5b87b",
      "width" : 64
    } ],
    "name" : "Paul Anka",
    "popularity" : 55,
    "type" : "artist",
    "uri" : "spotify:artist:7ceUfdWq2t5nbatS6ollHh"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/7qQJQ3YtcGlqaLg5tcypN2"
    },
    "followers" : {
      "href" : null,
      "total" : 19394
    },
    "genres" : [ "rock-and-roll" ],
    "href" : "https://api.spotify.com/v1/artists/7qQJQ3YtcGlqaLg5tcypN2",
    "id" : "7qQJQ3YtcGlqaLg5tcypN2",
    "images" : [ {
      "height" : 1250,
      "url" : "https://i.scdn.co/image/10d80af483070c9a1d4636a36ca2d1f89289c933",
      "width" : 1000
    }, {
      "height" : 800,
      "url" : "https://i.scdn.co/image/0b5b079ad92eac89fad895f309499ff772ce08c1",
      "width" : 640
    }, {
      "height" : 250,
      "url" : "https://i.scdn.co/image/d0a244ebffff84aa94682338ca70b5d0e18790fa",
      "width" : 200
    }, {
      "height" : 80,
      "url" : "https://i.scdn.co/image/0fdfd8a3beef84b7bc9cf9191519f6192a54764e",
      "width" : 64
    } ],
    "name" : "Chubby Checker",
    "popularity" : 47,
    "type" : "artist",
    "uri" : "spotify:artist:7qQJQ3YtcGlqaLg5tcypN2"
  }, {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/1T0wRBO0CK0vK8ouUMqEl5"
    },
    "followers" : {
      "href" : null,
      "total" : 119129
    },
    "genres" : [ ],
    "href" : "https://api.spotify.com/v1/artists/1T0wRBO0CK0vK8ouUMqEl5",
    "id" : "1T0wRBO0CK0vK8ouUMqEl5",
    "images" : [ {
      "height" : 1376,
      "url" : "https://i.scdn.co/image/b50aca00cc09b9f036171ea1c2a47a6db8aac968",
      "width" : 1000
    }, {
      "height" : 880,
      "url" : "https://i.scdn.co/image/da6f2d822801f0af81bde165540f8d6891404a3e",
      "width" : 640
    }, {
      "height" : 275,
      "url" : "https://i.scdn.co/image/37985e105605e760eb7a86866cc8eeb94b513e23",
      "width" : 200
    }, {
      "height" : 88,
      "url" : "https://i.scdn.co/image/7931338574dcf8c2ae09dded11f1668b0110c0b0",
      "width" : 64
    } ],
    "name" : "Tom Jones",
    "popularity" : 59,
    "type" : "artist",
    "uri" : "spotify:artist:1T0wRBO0CK0vK8ouUMqEl5"
  } ]
};





/**
 * Get audio features for a track
 * 
 * GET /v1/audio-features/{id}
 * https://developer.spotify.com/web-api/get-audio-features/
 */
const singleAudioFeaturesResponse : SpotifyApi.AudioFeaturesResponse = { 
  "danceability": 0.281,
  "energy": 0.402,
  "key": 4,
  "loudness": -17.921,
  "mode": 1,
  "speechiness": 0.0291,
  "acousticness": 0.0734,
  "instrumentalness": 0.83,
  "liveness": 0.0593,
  "valence": 0.0748,
  "tempo": 115.7,
  "type": "audio_features",
  "id": "24JygzOLM0EmRQeGtFcIcG",
  "uri": "spotify:track:24JygzOLM0EmRQeGtFcIcG",
  "track_href": "https://api.spotify.com/v1/tracks/24JygzOLM0EmRQeGtFcIcG",
  "analysis_url": "http://echonest-analysis.s3.amazonaws.com/TR/ehbkMg05Ck-FN7p3lV7vd8TUdBCvM6z5mgDiZRv6iSlw8P_b8GYBZ4PRAlOgTl3e5rS34_l3dZGDeYzH4=/3/full.json?AWSAccessKeyId=AKIAJRDFEY23UEVW42BQ&Expires=1458063189&Signature=bnTm0Hcb%2Bxo8ZCmuxm1mY0JY4Hs%3D",
  "duration_ms": 497493,
  "time_signature": 3 
};





/**
 * Get audio features for several tracks
 * 
 * GET /v1/audio-features?ids={ids}
 * https://developer.spotify.com/get-several-audio-features/
 */
const severalAudioFeaturesResponse : SpotifyApi.MultipleAudioFeaturesResponse = { audio_features: 
   [ { "danceability": 0.808,
       "energy": 0.626,
       "key": 7,
       "loudness": -12.733,
       "mode": 1,
       "speechiness": 0.168,
       "acousticness": 0.00187,
       "instrumentalness": 0.159,
       "liveness": 0.376,
       "valence": 0.369,
       "tempo": 123.99,
       "type": "audio_features",
       "id": "4JpKVNYnVcJ8tuMKjAj50A",
       "uri": "spotify:track:4JpKVNYnVcJ8tuMKjAj50A",
       "track_href": "https://api.spotify.com/v1/tracks/4JpKVNYnVcJ8tuMKjAj50A",
       "analysis_url": "http://echonest-analysis.s3.amazonaws.com/TR/WhpYUARk1kNJ_qP0AdKGcDDFKOQTTgsOoINrqyPQjkUnbteuuBiyj_u94iFCSGzdxGiwqQ6d77f4QLL_8=/3/full.json?AWSAccessKeyId=AKIAJRDFEY23UEVW42BQ&Expires=1458063189&Signature=JRE8SDZStpNOdUsPN/PoS49FMtQ%3D",
       "duration_ms": 535223,
       "time_signature": 4 
     },
     { "danceability": 0.457,
       "energy": 0.815,
       "key": 1,
       "loudness": -7.199,
       "mode": 1,
       "speechiness": 0.034,
       "acousticness": 0.102,
       "instrumentalness": 0.0319,
       "liveness": 0.103,
       "valence": 0.382,
       "tempo": 96.083,
       "type": "audio_features",
       "id": "2NRANZE9UCmPAS5XVbXL40",
       "uri": "spotify:track:2NRANZE9UCmPAS5XVbXL40",
       "track_href": "https://api.spotify.com/v1/tracks/2NRANZE9UCmPAS5XVbXL40",
       "analysis_url": "http://echonest-analysis.s3.amazonaws.com/TR/WhuQhwPDhmEg5TO4JjbJu0my-awIhk3eaXkRd1ofoJ7tXogPnMtbxkTyLOeHXu5Jke0FCIt52saKJyfPM=/3/full.json?AWSAccessKeyId=AKIAJRDFEY23UEVW42BQ&Expires=1458063189&Signature=qfclum7FwTaR/7aQbnBNO0daCsM%3D",
       "duration_ms": 187800,
       "time_signature": 4 
     },
     { "danceability": 0.281,
       "energy": 0.402,
       "key": 4,
       "loudness": -17.921,
       "mode": 1,
       "speechiness": 0.0291,
       "acousticness": 0.0734,
       "instrumentalness": 0.83,
       "liveness": 0.0593,
       "valence": 0.0748,
       "tempo": 115.7,
       "type": "audio_features",
       "id": "24JygzOLM0EmRQeGtFcIcG",
       "uri": "spotify:track:24JygzOLM0EmRQeGtFcIcG",
       "track_href": "https://api.spotify.com/v1/tracks/24JygzOLM0EmRQeGtFcIcG",
       "analysis_url": "http://echonest-analysis.s3.amazonaws.com/TR/ehbkMg05Ck-FN7p3lV7vd8TUdBCvM6z5mgDiZRv6iSlw8P_b8GYBZ4PRAlOgTl3e5rS34_l3dZGDeYzH4=/3/full.json?AWSAccessKeyId=AKIAJRDFEY23UEVW42BQ&Expires=1458063189&Signature=bnTm0Hcb%2Bxo8ZCmuxm1mY0JY4Hs%3D",
       "duration_ms": 497493,
       "time_signature": 3 
     } ] 
};





/**
 * Get a list of featured playlists
 * 
 * GET /v1/browse/featured-playlists
 * https://developer.spotify.com/web-api/get-list-featured-playlists/
 */
const featuredPlaylists : SpotifyApi.ListOfFeaturedPlaylistsResponse = {
  "message" : "Enjoy a mellow afternoon.",
  "playlists" : {
    "href" : "https://api.spotify.com/v1/browse/featured-playlists?country=SE&timestamp=2015-12-25T15:10:15&offset=0&limit=2",
    "items" : [ {
      "collaborative" : false,
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify/playlist/16BpjqQV1Ey0HeDueNDSYz"
      },
      "href" : "https://api.spotify.com/v1/users/spotify/playlists/16BpjqQV1Ey0HeDueNDSYz",
      "id" : "16BpjqQV1Ey0HeDueNDSYz",
      "images" : [ {
        "height" : 300,
        "url" : "https://i.scdn.co/image/6b282f0ad7f5de8c8f04a20268376be638e8241a",
        "width" : 300
      } ],
      "name" : "Afternoon Acoustic",
      "owner" : {
        "external_urls" : {
          "spotify" : "http://open.spotify.com/user/spotify"
        },
        "href" : "https://api.spotify.com/v1/users/spotify",
        "id" : "spotify",
        "type" : "user",
        "uri" : "spotify:user:spotify"
      },
      "public" : null,
      "snapshot_id" : "ymcdjXlXzZPZClmP0Pm4iuHaWk4r5OejEOoCOIstJdfxgYNljKWePUZm2v2PzHJT",
      "tracks" : {
        "href" : "https://api.spotify.com/v1/users/spotify/playlists/16BpjqQV1Ey0HeDueNDSYz/tracks",
        "total" : 111
      },
      "type" : "playlist",
      "uri" : "spotify:user:spotify:playlist:16BpjqQV1Ey0HeDueNDSYz"
    }, {
      "collaborative" : false,
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify/playlist/7nUikuZL4MgIXS43cMpQZE"
      },
      "href" : "https://api.spotify.com/v1/users/spotify/playlists/7nUikuZL4MgIXS43cMpQZE",
      "id" : "7nUikuZL4MgIXS43cMpQZE",
      "images" : [ {
        "height" : 300,
        "url" : "https://i.scdn.co/image/7fbae403e487e03098c1050902e3fb83f9e4a606",
        "width" : 300
      } ],
      "name" : "Jazzy Christmas",
      "owner" : {
        "external_urls" : {
          "spotify" : "http://open.spotify.com/user/spotify"
        },
        "href" : "https://api.spotify.com/v1/users/spotify",
        "id" : "spotify",
        "type" : "user",
        "uri" : "spotify:user:spotify"
      },
      "public" : null,
      "snapshot_id" : "v2Y0q77RziNFIIFIdUrHIw6om2Wqx/kBny4u5REQYj3mcf8EFVVigOdzg8kRTJxU",
      "tracks" : {
        "href" : "https://api.spotify.com/v1/users/spotify/playlists/7nUikuZL4MgIXS43cMpQZE/tracks",
        "total" : 22
      },
      "type" : "playlist",
      "uri" : "spotify:user:spotify:playlist:7nUikuZL4MgIXS43cMpQZE"
    } ],
    "limit" : 2,
    "next" : "https://api.spotify.com/v1/browse/featured-playlists?country=SE&timestamp=2015-12-25T15:10:15&offset=2&limit=2",
    "offset" : 0,
    "previous" : null,
    "total" : 13
  }
};




/**
 * Get a list of new releases
 * 
 * GET /v1/browse/new-releases
 * https://developer.spotify.com/web-api/get-list-new-releases/
 */
const newReleases : SpotifyApi.ListOfNewReleasesResponse = {
  "albums" : {
    "href" : "https://api.spotify.com/v1/browse/new-releases?country=SE&offset=0&limit=20",
    "items" : [ {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/1PULmKbHeOqlkIwcDMNwD4"
      },
      "href" : "https://api.spotify.com/v1/albums/1PULmKbHeOqlkIwcDMNwD4",
      "id" : "1PULmKbHeOqlkIwcDMNwD4",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/377d0c66cae914111f5ee721853dc68d2cc53556",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/54ec202ec205ea6430aefce2b644d934ff0a7036",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/5897d86139c6aa6d579e85c7a49b876c70a59334",
        "width" : 64
      } ],
      "name" : "Sgt. Pepper's Lonely Hearts Club Band (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:1PULmKbHeOqlkIwcDMNwD4"
    }, {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/03Qh833fEdVT30Pfs93ea6"
      },
      "href" : "https://api.spotify.com/v1/albums/03Qh833fEdVT30Pfs93ea6",
      "id" : "03Qh833fEdVT30Pfs93ea6",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/d6028aea974c75961cb9cdc2263f5d8a8a6582bd",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/adebae7bf6a4a441bc6a5a17ca840f77df6ed3b9",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/3b0ddfadf13b9f3e74da93fcb21e4183a4d9fcc8",
        "width" : 64
      } ],
      "name" : "The Beatles (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:03Qh833fEdVT30Pfs93ea6"
    }, {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/2Pqkn9Dq2DFtdfkKAeqgMd"
      },
      "href" : "https://api.spotify.com/v1/albums/2Pqkn9Dq2DFtdfkKAeqgMd",
      "id" : "2Pqkn9Dq2DFtdfkKAeqgMd",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/9cab76ad73ce2adbacbd118ebc632255ce7c1841",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/a650b9dadd2b2d66ab9d7788abdcbfab45b2997d",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/b00a9daeee0a66bd3723d723cce6134cf3c38303",
        "width" : 64
      } ],
      "name" : "Abbey Road (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:2Pqkn9Dq2DFtdfkKAeqgMd"
    }, {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/3OdI6e43crvyAHhaqpxSyz"
      },
      "href" : "https://api.spotify.com/v1/albums/3OdI6e43crvyAHhaqpxSyz",
      "id" : "3OdI6e43crvyAHhaqpxSyz",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/a7f271263055adb87353c76b2e5ebbdec07e92a9",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/8bc940347ba801f90614d9cda11f995b096cca52",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/f945ab4ae2c9e9d85dcd6c81cfe012860db9c2bc",
        "width" : 64
      } ],
      "name" : "Rubber Soul (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:3OdI6e43crvyAHhaqpxSyz"
    }, {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0PYyrqs9NXtxPhf0CZkq2L"
      },
      "href" : "https://api.spotify.com/v1/albums/0PYyrqs9NXtxPhf0CZkq2L",
      "id" : "0PYyrqs9NXtxPhf0CZkq2L",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/6ed84deed3993bbdfb644f91cb9db2a85b25da38",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/b868b08257b96def9260e1a7e547be11bd8c26b0",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/1760ab1210d0ebbda3094e6945db559b7483a1dd",
        "width" : 64
      } ],
      "name" : "Revolver (Remastered)",
      "type" : "album",
      "uri" : "spotify:album:0PYyrqs9NXtxPhf0CZkq2L"
    }, {
      "album_type" : "single",
      "available_markets" : [ "AU", "HK", "MY", "NZ", "PH", "SG", "TW", "BG", "CY", "EE", "FI", "GR", "LT", "LV", "RO", "TR", "AD", "AT", "BE", "CH", "CZ", "DE", "DK", "ES", "FR", "HU", "IT", "LI", "LU", "MC", "MT", "NL", "NO", "PL", "SE", "SI", "SK", "GB", "IE", "IS", "PT", "BR", "UY", "AR", "CL", "PY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/3qm3S8gkGPCdeCwaGUj4WE"
      },
      "href" : "https://api.spotify.com/v1/albums/3qm3S8gkGPCdeCwaGUj4WE",
      "id" : "3qm3S8gkGPCdeCwaGUj4WE",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/bf891e3702739cb350352dcac45e4243d809ca92",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/4930f0ace2e239840f173487b74a16eb2d266eb5",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/d3ece8847b11a0f45a307f60c74006aa01018728",
        "width" : 64
      } ],
      "name" : "Stevie Knows (7th Heaven Remix)",
      "type" : "album",
      "uri" : "spotify:album:3qm3S8gkGPCdeCwaGUj4WE"
    }, {
      "album_type" : "single",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0HkanXbi3f3Riv9ISsO11s"
      },
      "href" : "https://api.spotify.com/v1/albums/0HkanXbi3f3Riv9ISsO11s",
      "id" : "0HkanXbi3f3Riv9ISsO11s",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/4f408ce56d89e4ed6cb350e3f93b76d1e4a55cc3",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/29823623b87bff215519b9d744f55f47984cab18",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/1e987283293d4a50e52e668649f9e79c4b236790",
        "width" : 64
      } ],
      "name" : "I'm From Long Beach - Single",
      "type" : "album",
      "uri" : "spotify:album:0HkanXbi3f3Riv9ISsO11s"
    }, {
      "album_type" : "single",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/3bgOyqPJTjGJyyhcPZTwjQ"
      },
      "href" : "https://api.spotify.com/v1/albums/3bgOyqPJTjGJyyhcPZTwjQ",
      "id" : "3bgOyqPJTjGJyyhcPZTwjQ",
      "images" : [ {
        "height" : 600,
        "url" : "https://i.scdn.co/image/2dacef968af7cd9bc10ad43c10a5866fdaa431fe",
        "width" : 600
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/860edb16f98ad8c422d65714c999c23c56bdb18a",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/1302a1823a425d24f3f6effa9c149a445cf4e20d",
        "width" : 64
      } ],
      "name" : "Två vägar",
      "type" : "album",
      "uri" : "spotify:album:3bgOyqPJTjGJyyhcPZTwjQ"
    }, {
      "album_type" : "single",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/1qqwJHUhez843oBaz5et2S"
      },
      "href" : "https://api.spotify.com/v1/albums/1qqwJHUhez843oBaz5et2S",
      "id" : "1qqwJHUhez843oBaz5et2S",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/8c02adb97fe766ed2c7cc0e13e445bf987d1edf1",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/c66a7ab5c04e88a6c7ad5ce9ec21dab15bbcd5e6",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/e9274182ce9999095da6118d83aec90834803ac3",
        "width" : 64
      } ],
      "name" : "Might Not",
      "type" : "album",
      "uri" : "spotify:album:1qqwJHUhez843oBaz5et2S"
    }, {
      "album_type" : "single",
      "available_markets" : [ "AT", "AU", "CH", "DE", "DK", "FI", "GB", "IE", "IS", "NO", "NZ", "SE" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0Ux8McYvQSzNFbub73OFqk"
      },
      "href" : "https://api.spotify.com/v1/albums/0Ux8McYvQSzNFbub73OFqk",
      "id" : "0Ux8McYvQSzNFbub73OFqk",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/892bef68ecad8b6a07181c19ed565b1a7be12009",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/0c3e2c96a9973a82e6ff78ba270421e2db65b4b0",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/7fb9c038d2628fd2b7bef39610aced6f91d49cff",
        "width" : 64
      } ],
      "name" : "Merry Xmas (feat. Monty)",
      "type" : "album",
      "uri" : "spotify:album:0Ux8McYvQSzNFbub73OFqk"
    }, {
      "album_type" : "album",
      "available_markets" : [ "BG", "CY", "EE", "FI", "GR", "LT", "LV", "RO", "AD", "AT", "BE", "CH", "CZ", "DE", "DK", "ES", "FR", "HU", "IT", "LI", "LU", "MC", "MT", "NL", "NO", "PL", "SE", "SI", "SK", "GB", "IE", "IS", "PT", "BR", "UY", "AR", "CL", "PY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV", "NZ", "AU" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/6uG9BscYmPnAbtl6Cy9u91"
      },
      "href" : "https://api.spotify.com/v1/albums/6uG9BscYmPnAbtl6Cy9u91",
      "id" : "6uG9BscYmPnAbtl6Cy9u91",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/4d26ef97cbfe370350770332fdd45e1152425b4e",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/e43b111ee4ed30b17ae40b1c73326a54df53ffc9",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/96c8941a9ead45c01e65fc615ed5a95f13af869f",
        "width" : 64
      } ],
      "name" : "Summer In The Winter",
      "type" : "album",
      "uri" : "spotify:album:6uG9BscYmPnAbtl6Cy9u91"
    }, {
      "album_type" : "single",
      "available_markets" : [ "AU", "HK", "MY", "NZ", "PH", "SG", "TW", "BG", "CY", "EE", "FI", "GR", "LT", "LV", "RO", "TR", "AD", "AT", "BE", "CH", "CZ", "DE", "DK", "ES", "FR", "HU", "IT", "LI", "LU", "MC", "MT", "NL", "NO", "PL", "SE", "SI", "SK", "GB", "IE", "IS", "PT", "BR", "UY", "AR", "CL", "PY", "BO", "DO", "CO", "EC", "PA", "PE", "CR", "GT", "HN", "MX", "NI", "SV" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/6U4UXePoZz8jI0WAgOY0QK"
      },
      "href" : "https://api.spotify.com/v1/albums/6U4UXePoZz8jI0WAgOY0QK",
      "id" : "6U4UXePoZz8jI0WAgOY0QK",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/aedf44f75f661d3b15ccef4afe42d4460e9c1df3",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/b541b9adf17d67f0e5dc88b7b4a91c8f05271c79",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/7e4bdb5457d31d12a0fe191500e1b75b370166f7",
        "width" : 64
      } ],
      "name" : "Lay It All On Me (feat. Big Sean, Vic Mensa & Ed Sheeran) [Rudi VIP Mix]",
      "type" : "album",
      "uri" : "spotify:album:6U4UXePoZz8jI0WAgOY0QK"
    }, {
      "album_type" : "single",
      "available_markets" : [ "BG", "CY", "EE", "FI", "GR", "LT", "LV", "RO", "TR", "AD", "AT", "BE", "CH", "CZ", "DE", "DK", "ES", "FR", "HU", "IT", "LI", "LU", "MC", "MT", "NL", "NO", "PL", "SE", "SI", "SK", "GB", "IE", "IS", "PT", "BR", "UY", "AR", "CL", "PY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV", "NZ", "AU" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/3skXXEPIZHApEfglcwIlvR"
      },
      "href" : "https://api.spotify.com/v1/albums/3skXXEPIZHApEfglcwIlvR",
      "id" : "3skXXEPIZHApEfglcwIlvR",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/96a4ed623f6c79b305e06080a976244baefa36eb",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/14f3afa15d40d00db46baa6429fd79bed40a5cdd",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/16875c5e3377ae90ea2f6ea9932977961b2ed1d5",
        "width" : 64
      } ],
      "name" : "Christmas Will Break Your Heart",
      "type" : "album",
      "uri" : "spotify:album:3skXXEPIZHApEfglcwIlvR"
    }, {
      "album_type" : "single",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0rd1TF9fOXVHoSuHJ9Sckm"
      },
      "href" : "https://api.spotify.com/v1/albums/0rd1TF9fOXVHoSuHJ9Sckm",
      "id" : "0rd1TF9fOXVHoSuHJ9Sckm",
      "images" : [ {
        "height" : 600,
        "url" : "https://i.scdn.co/image/03e10634c4c654cedf1129ddce00f90f35367bb4",
        "width" : 600
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/aed4e0d36ed4f1b9622c7842b6208008a29f5c85",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/af2ad8bd173eac67935201982d357fc865f1ff7a",
        "width" : 64
      } ],
      "name" : "Snökristaller - EP",
      "type" : "album",
      "uri" : "spotify:album:0rd1TF9fOXVHoSuHJ9Sckm"
    }, {
      "album_type" : "single",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/7FideSlOCa2PVAjvK1Ytw4"
      },
      "href" : "https://api.spotify.com/v1/albums/7FideSlOCa2PVAjvK1Ytw4",
      "id" : "7FideSlOCa2PVAjvK1Ytw4",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/c08c07f4cee62d88f02c8e3cc9c2f3e3b05451c8",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/9e1757f3f64c632bcab34d7ca586bd46a16999b5",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/105fba4aa1f327324cf0fbdebe52ca6a394188d9",
        "width" : 64
      } ],
      "name" : "Kalla Mig (Black Knight Remix)",
      "type" : "album",
      "uri" : "spotify:album:7FideSlOCa2PVAjvK1Ytw4"
    }, {
      "album_type" : "single",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/4Ek2i3GBY8sQGIooFX3mTL"
      },
      "href" : "https://api.spotify.com/v1/albums/4Ek2i3GBY8sQGIooFX3mTL",
      "id" : "4Ek2i3GBY8sQGIooFX3mTL",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/220fe52d445a678b92cacb418fecf9580ab41761",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ea4823e62f173366037eacd6cd5ee1406c5f05db",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ef351095477677c88ee784939dffff5cf87cce7f",
        "width" : 64
      } ],
      "name" : "Born To Be Loved (Faråker Remix)",
      "type" : "album",
      "uri" : "spotify:album:4Ek2i3GBY8sQGIooFX3mTL"
    }, {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/6YBCE5NFQQTVuZVhBCMnSe"
      },
      "href" : "https://api.spotify.com/v1/albums/6YBCE5NFQQTVuZVhBCMnSe",
      "id" : "6YBCE5NFQQTVuZVhBCMnSe",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/bc0d0ff74393abbb232eb04f0a4bb91439b1cbe1",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/e071dc624ca44264a8ace9a7bfb8bd1407428862",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/efd6dadf26d8a9a692478cdd19152e5cc833546e",
        "width" : 64
      } ],
      "name" : "Quentin Tarantino's The Hateful Eight (Original Motion Picture Soundtrack)",
      "type" : "album",
      "uri" : "spotify:album:6YBCE5NFQQTVuZVhBCMnSe"
    }, {
      "album_type" : "album",
      "available_markets" : [ "AD", "AT", "AU", "BE", "BG", "CH", "CY", "DE", "DK", "DO", "EE", "FI", "GB", "HK", "IE", "IS", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NL", "NO", "NZ", "PH", "RO", "SE", "SG", "SI", "SK", "TW" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/4RndEmppoOEWuTGSFQOqJs"
      },
      "href" : "https://api.spotify.com/v1/albums/4RndEmppoOEWuTGSFQOqJs",
      "id" : "4RndEmppoOEWuTGSFQOqJs",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/8f20aeb3ce6c9d7714bd76fc474220857ad9cfc3",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/1fba47df83950df286cf9cb607b6cf7ada2b0003",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/e7d622fd9257e62c267d0343db34840a7835b521",
        "width" : 64
      } ],
      "name" : "Star Wars: The Force Awakens (Original Motion Picture Soundtrack)",
      "type" : "album",
      "uri" : "spotify:album:4RndEmppoOEWuTGSFQOqJs"
    }, {
      "album_type" : "single",
      "available_markets" : [ "AD", "AR", "AU", "BE", "BG", "BO", "BR", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/4qgWyE8Pp9AZ94src2XEi7"
      },
      "href" : "https://api.spotify.com/v1/albums/4qgWyE8Pp9AZ94src2XEi7",
      "id" : "4qgWyE8Pp9AZ94src2XEi7",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/7bbb0eb112150c76c27d6ed1fead3c53a02ca303",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/690157ca7a732698f46c815e295d2bafe6492d83",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/1297f1ffa9875ed7e18f9a44d86768f75589bea2",
        "width" : 64
      } ],
      "name" : "One Call Away (feat. Tyga) [Remix]",
      "type" : "album",
      "uri" : "spotify:album:4qgWyE8Pp9AZ94src2XEi7"
    }, {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/5BFg8l4NYyZ90DWqcBjbt6"
      },
      "href" : "https://api.spotify.com/v1/albums/5BFg8l4NYyZ90DWqcBjbt6",
      "id" : "5BFg8l4NYyZ90DWqcBjbt6",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/c82b30ae6e4a240bd705e5c1111778d5425df98a",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/5f746a9db4250f544e24d0094a46422d521c6c90",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/19cd283556d61505b8066c0735916395c252c57a",
        "width" : 64
      } ],
      "name" : "Christmas & Chill",
      "type" : "album",
      "uri" : "spotify:album:5BFg8l4NYyZ90DWqcBjbt6"
    } ],
    "limit" : 20,
    "next" : "https://api.spotify.com/v1/browse/new-releases?country=SE&offset=20&limit=20",
    "offset" : 0,
    "previous" : null,
    "total" : 500
  }
};




/**
 * Get a list of categories
 * 
 * GET /v1/browse/categories
 * https://developer.spotify.com/web-api/get-list-categories/
 */
const listOfCategories : SpotifyApi.MultipleCategoriesResponse = {
  "categories" : {
    "href" : "https://api.spotify.com/v1/browse/categories?offset=0&limit=20",
    "items" : [ {
      "href" : "https://api.spotify.com/v1/browse/categories/toplists",
      "icons" : [ {
        "height" : 275,
        "url" : "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
        "width" : 275
      } ],
      "id" : "toplists",
      "name" : "Top Lists"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/holidays",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/links/holidays2015_274x274.jpg",
        "width" : 274
      } ],
      "id" : "holidays",
      "name" : "Happy Holidays"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/yearinmusic",
      "icons" : [ {
        "height" : null,
        "url" : "https://t.scdn.co/media/categories/yearinmusic2015_274x274.png",
        "width" : null
      } ],
      "id" : "yearinmusic",
      "name" : "Year in Music"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/mood",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
        "width" : 274
      } ],
      "id" : "mood",
      "name" : "Mood"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/party",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/links/partyicon_274x274.jpg",
        "width" : 274
      } ],
      "id" : "party",
      "name" : "Party"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/pop",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "pop",
      "name" : "Pop"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/popculture",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/derived/trending-274x274_7b238f7217985e79d3664f2734347b98_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "popculture",
      "name" : "Trending"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/focus",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/original/genre-images-square-274x274_5e50d72b846a198fcd2ca9b3aef5f0c8_274x274.jpg",
        "width" : 274
      } ],
      "id" : "focus",
      "name" : "Focus"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/rock",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "rock",
      "name" : "Rock"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/indie_alt",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/derived/indie-274x274_add35b2b767ff7f3897262ad86809bdb_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "indie_alt",
      "name" : "Indie/Alternative"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/edm_dance",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "edm_dance",
      "name" : "EDM/Dance"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/chill",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "chill",
      "name" : "Chill"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/dinner",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/original/dinner_1b6506abba0ba52c54e6d695c8571078_274x274.jpg",
        "width" : 274
      } ],
      "id" : "dinner",
      "name" : "Dinner"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/sleep",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/derived/sleep-274x274_0d4f836af8fab7bf31526968073e671c_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "sleep",
      "name" : "Sleep"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/hiphop",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg",
        "width" : 274
      } ],
      "id" : "hiphop",
      "name" : "Hip Hop"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/latin",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/derived/latin-274x274_befbbd1fbb8e045491576e317cb16cdf_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "latin",
      "name" : "Latino"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/workout",
      "icons" : [ {
        "height" : null,
        "url" : "https://t.scdn.co/media/links/workout-274x274.jpg",
        "width" : null
      } ],
      "id" : "workout",
      "name" : "Workout"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/rnb",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/derived/r-b-274x274_fd56efa72f4f63764b011b68121581d8_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "rnb",
      "name" : "RnB"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/country",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/derived/icon-274x274_6a35972b380f65dc348e0c798fe626a4_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "country",
      "name" : "Country"
    }, {
      "href" : "https://api.spotify.com/v1/browse/categories/folk_americana",
      "icons" : [ {
        "height" : 274,
        "url" : "https://t.scdn.co/media/derived/folk-274x274_ced3f75528ac61faf505863f7d7fae64_0_0_274_274.jpg",
        "width" : 274
      } ],
      "id" : "folk_americana",
      "name" : "Folk & Americana"
    } ],
    "limit" : 20,
    "next" : "https://api.spotify.com/v1/browse/categories?offset=20&limit=20",
    "offset" : 0,
    "previous" : null,
    "total" : 33
  }
};




/**
 * Get a category
 * 
 * GET /v1/browse/categories/{category_id}
 * https://developer.spotify.com/web-api/get-category/
 */
const category : SpotifyApi.SingleCategoryResponse = {
  "href" : "https://api.spotify.com/v1/browse/categories/rock",
  "icons" : [ {
    "height" : 274,
    "url" : "https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg",
    "width" : 274
  } ],
  "id" : "rock",
  "name" : "Rock"
};




/**
 * Get a categorys playlists
 * 
 * GET /v1/browse/categories/{id}/playlists
 * https://developer.spotify.com/web-api/get-categorys-playlists/
 */
const categoryPlaylists : SpotifyApi.CategoryPlaylistsReponse = {
  "playlists" : {
    "href" : "https://api.spotify.com/v1/browse/categories/party/playlists?country=BR&offset=0&limit=2",
    "items" : [ {
      "collaborative" : false,
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotifybrazilian/playlist/6U9RHRz1G477YpMNeLy9uI"
      },
      "href" : "https://api.spotify.com/v1/users/spotifybrazilian/playlists/6U9RHRz1G477YpMNeLy9uI",
      "id" : "6U9RHRz1G477YpMNeLy9uI",
      "images" : [ {
        "height" : 300,
        "url" : "https://i.scdn.co/image/510c519ae934ea4bb26219277f8c1a859e8cb01a",
        "width" : 300
      } ],
      "name" : "Esquenta Sertanejo",
      "owner" : {
        "external_urls" : {
          "spotify" : "http://open.spotify.com/user/spotifybrazilian"
        },
        "href" : "https://api.spotify.com/v1/users/spotifybrazilian",
        "id" : "spotifybrazilian",
        "type" : "user",
        "uri" : "spotify:user:spotifybrazilian"
      },
      "public" : null,
      "snapshot_id" : "+jMowNjnBWpQqnkgYk47IRKrEsXLxUXR348Mtg/+kZWjLkpS4HTADpzyV6X/iIJm",
      "tracks" : {
        "href" : "https://api.spotify.com/v1/users/spotifybrazilian/playlists/6U9RHRz1G477YpMNeLy9uI/tracks",
        "total" : 100
      },
      "type" : "playlist",
      "uri" : "spotify:user:spotifybrazilian:playlist:6U9RHRz1G477YpMNeLy9uI"
    }, {
      "collaborative" : false,
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotifybrazilian/playlist/4k7EZPI3uKMz4aRRrLVfen"
      },
      "href" : "https://api.spotify.com/v1/users/spotifybrazilian/playlists/4k7EZPI3uKMz4aRRrLVfen",
      "id" : "4k7EZPI3uKMz4aRRrLVfen",
      "images" : [ {
        "height" : 300,
        "url" : "https://i.scdn.co/image/1ec2655266c18dc62a39a270cd89a875705733a2",
        "width" : 300
      } ],
      "name" : "Noite Eletrônica",
      "owner" : {
        "external_urls" : {
          "spotify" : "http://open.spotify.com/user/spotifybrazilian"
        },
        "href" : "https://api.spotify.com/v1/users/spotifybrazilian",
        "id" : "spotifybrazilian",
        "type" : "user",
        "uri" : "spotify:user:spotifybrazilian"
      },
      "public" : null,
      "snapshot_id" : "JWtQF9AcG8yXA/xIihTpZNxJuVdcJ0UwPZQrkRi8kP2om0nZJNg/WvwAz1TMBdlX",
      "tracks" : {
        "href" : "https://api.spotify.com/v1/users/spotifybrazilian/playlists/4k7EZPI3uKMz4aRRrLVfen/tracks",
        "total" : 100
      },
      "type" : "playlist",
      "uri" : "spotify:user:spotifybrazilian:playlist:4k7EZPI3uKMz4aRRrLVfen"
    } ],
    "limit" : 2,
    "next" : "https://api.spotify.com/v1/browse/categories/party/playlists?country=BR&offset=2&limit=2",
    "offset" : 0,
    "previous" : null,
    "total" : 79
  }
};





/**
 * Get Current User’s Profile
 * 
 * GET /v1/me
 * https://developer.spotify.com/web-api/get-current-users-profile/
 */
const userProfilePrivate : SpotifyApi.CurrentUsersProfileResponse = {
  "birthdate" : "1982-06-29",
  "country" : "DK",
  "display_name" : null,
  "email" : "niels@physicalcode.com",
  "external_urls" : {
    "spotify" : "https://open.spotify.com/user/physicaltunes"
  },
  "followers" : {
    "href" : null,
    "total" : 2
  },
  "href" : "https://api.spotify.com/v1/users/physicaltunes",
  "id" : "physicaltunes",
  "images" : [ ],
  "product" : "premium",
  "type" : "user",
  "uri" : "spotify:user:physicaltunes"
}




/**
 * Get User’s Followed Artists
 * 
 * GET /v1/me/following?type=artist
 * https://developer.spotify.com/web-api/get-followed-artists/
 */
const followedArtists : SpotifyApi.UsersFollowedArtistsResponse = {
  "artists" : {
    "items" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/1F102kNzMqsmOpF7AfFmm5"
      },
      "followers" : {
        "href" : null,
        "total" : 21835
      },
      "genres" : [ "psychill" ],
      "href" : "https://api.spotify.com/v1/artists/1F102kNzMqsmOpF7AfFmm5",
      "id" : "1F102kNzMqsmOpF7AfFmm5",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/81716e1e7397e8213f943f6bc34df32025abbbf2",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/4415b0213e0b4fa4c2ee54cb5fb8d547558c7c05",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/47d4847098235891b983de21ea2629015632cc89",
        "width" : 64
      } ],
      "name" : "Ott",
      "popularity" : 44,
      "type" : "artist",
      "uri" : "spotify:artist:1F102kNzMqsmOpF7AfFmm5"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/1oM1vgebNTCZmVYwC3YYl8"
      },
      "followers" : {
        "href" : null,
        "total" : 12777
      },
      "genres" : [ "funk metal" ],
      "href" : "https://api.spotify.com/v1/artists/1oM1vgebNTCZmVYwC3YYl8",
      "id" : "1oM1vgebNTCZmVYwC3YYl8",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ce6f6717f07c969ec41f0c45bf29b9c1f312f9d4",
        "width" : 960
      }, {
        "height" : 427,
        "url" : "https://i.scdn.co/image/bf35aa3fd5bbfdcefac0b1120bc950cc1903dab7",
        "width" : 640
      }, {
        "height" : 133,
        "url" : "https://i.scdn.co/image/2ad4e34ef6341ac8c57c5d4a48507b70234d5bda",
        "width" : 200
      }, {
        "height" : 43,
        "url" : "https://i.scdn.co/image/b0a8ffe5baa974df1cf4f4abbf0ad4037eb14472",
        "width" : 64
      } ],
      "name" : "Les Claypool",
      "popularity" : 32,
      "type" : "artist",
      "uri" : "spotify:artist:1oM1vgebNTCZmVYwC3YYl8"
    } ],
    "next" : "https://api.spotify.com/v1/me/following?type=artist&after=1oM1vgebNTCZmVYwC3YYl8&limit=2",
    "total" : 10,
    "cursors" : {
      "after" : "1oM1vgebNTCZmVYwC3YYl8"
    },
    "limit" : 2,
    "href" : "https://api.spotify.com/v1/me/following?type=artist&limit=2"
  }
};




/**
 * Follow artists or users
 * 
 * PUT /v1/me/following
 * https://developer.spotify.com/web-api/follow-artists-users/
 */
const followArtistsOrUsers : SpotifyApi.FollowArtistsOrUsersResponse = {}




/**
 * Unfollow artists or users
 * 
 * DELETE /v1/me/following
 * https://developer.spotify.com/web-api/unfollow-artists-users/
 */
const unfollowArtistsOrUsers : SpotifyApi.UnfollowArtistsOrUsersResponse = {}




/**
 * Check if User Follows Users or Artists
 * 
 * GET /v1/me/following/contains
 * https://developer.spotify.com/web-api/check-current-user-follows/
 */
const checkCurrentUserFollows : SpotifyApi.UserFollowsUsersOrArtistsResponse = [ true, true, false ];




/**
 * Follow a Playlist
 * 
 * PUT /v1/users/{owner_id}/playlists/{playlist_id}/followers
 * https://developer.spotify.com/web-api/follow-playlist/
 */
const followPlaylist : SpotifyApi.FollowPlaylistReponse = {};




/**
 * Unfollow a Playlist
 * 
 * DELETE /v1/users/{owner_id}/playlists/{playlist_id}/followers
 * https://developer.spotify.com/web-api/unfollow-playlist/
 */
const unfollowPlaylist : SpotifyApi.UnfollowPlaylistReponse = {};




/**
 * Save tracks for user
 * 
 * PUT /v1/me/tracks?ids={ids}
 * https://developer.spotify.com/web-api/save-tracks-user/
 */
const saveTracksForUser : SpotifyApi.SaveTracksForUserResponse = {};




/**
 * Get user's saved tracks
 * 
 * GET /v1/me/tracks
 * https://developer.spotify.com/web-api/get-users-saved-tracks/
 */
const getSavedTracks : SpotifyApi.UsersSavedTracksResponse = {
  "href" : "https://api.spotify.com/v1/me/tracks?offset=0&limit=5&market=DK",
  "items" : [ {
    "added_at" : "2015-12-24T08:02:23Z",
    "track" : {
      "album" : {
        "album_type" : "compilation",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5UtlwR5GMEM3XrF8GdzMmB"
        },
        "href" : "https://api.spotify.com/v1/albums/5UtlwR5GMEM3XrF8GdzMmB",
        "id" : "5UtlwR5GMEM3XrF8GdzMmB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/c0fb10c0253dbd63dc063afb2dedc17922da72bb",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3bb609bb7cb6b63d90ac8cc9f30164cd1dba421e",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/c18d91c939997d3a33251fc7a85cbf552795ecb1",
          "width" : 64
        } ],
        "name" : "The Beatles 1967 - 1970 (Remastered)",
        "type" : "album",
        "uri" : "spotify:album:5UtlwR5GMEM3XrF8GdzMmB"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "disc_number" : 1,
      "duration_ms" : 248933,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0601640"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0m0lCaz6HZyNx1oOrrzxWE"
      },
      "href" : "https://api.spotify.com/v1/tracks/0m0lCaz6HZyNx1oOrrzxWE",
      "id" : "0m0lCaz6HZyNx1oOrrzxWE",
      "is_playable" : true,
      "name" : "Strawberry Fields Forever - Remastered 2009",
      "popularity" : 21,
      "preview_url" : "https://p.scdn.co/mp3-preview/c6b38e29e03b8308c0f2f6e623fe298d24ff274e",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:0m0lCaz6HZyNx1oOrrzxWE"
    }
  }, {
    "added_at" : "2015-12-24T08:02:23Z",
    "track" : {
      "album" : {
        "album_type" : "compilation",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5UtlwR5GMEM3XrF8GdzMmB"
        },
        "href" : "https://api.spotify.com/v1/albums/5UtlwR5GMEM3XrF8GdzMmB",
        "id" : "5UtlwR5GMEM3XrF8GdzMmB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/c0fb10c0253dbd63dc063afb2dedc17922da72bb",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3bb609bb7cb6b63d90ac8cc9f30164cd1dba421e",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/c18d91c939997d3a33251fc7a85cbf552795ecb1",
          "width" : 64
        } ],
        "name" : "The Beatles 1967 - 1970 (Remastered)",
        "type" : "album",
        "uri" : "spotify:album:5UtlwR5GMEM3XrF8GdzMmB"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "disc_number" : 1,
      "duration_ms" : 181600,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0601641"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/72IGjRtsOv6kde11MBDALW"
      },
      "href" : "https://api.spotify.com/v1/tracks/72IGjRtsOv6kde11MBDALW",
      "id" : "72IGjRtsOv6kde11MBDALW",
      "is_playable" : true,
      "name" : "Penny Lane - Remastered 2009",
      "popularity" : 18,
      "preview_url" : "https://p.scdn.co/mp3-preview/aa92e277779518b8bd12d7332a11c212f45d1da5",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:72IGjRtsOv6kde11MBDALW"
    }
  }, {
    "added_at" : "2015-12-24T08:02:23Z",
    "track" : {
      "album" : {
        "album_type" : "compilation",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5UtlwR5GMEM3XrF8GdzMmB"
        },
        "href" : "https://api.spotify.com/v1/albums/5UtlwR5GMEM3XrF8GdzMmB",
        "id" : "5UtlwR5GMEM3XrF8GdzMmB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/c0fb10c0253dbd63dc063afb2dedc17922da72bb",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3bb609bb7cb6b63d90ac8cc9f30164cd1dba421e",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/c18d91c939997d3a33251fc7a85cbf552795ecb1",
          "width" : 64
        } ],
        "name" : "The Beatles 1967 - 1970 (Remastered)",
        "type" : "album",
        "uri" : "spotify:album:5UtlwR5GMEM3XrF8GdzMmB"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "disc_number" : 1,
      "duration_ms" : 122133,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0601507"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/51UQJuxkNLgtX8UsfoDqRR"
      },
      "href" : "https://api.spotify.com/v1/tracks/51UQJuxkNLgtX8UsfoDqRR",
      "id" : "51UQJuxkNLgtX8UsfoDqRR",
      "is_playable" : true,
      "name" : "Sgt. Pepper's Lonely Hearts Club Band - Remastered 2009",
      "popularity" : 17,
      "preview_url" : "https://p.scdn.co/mp3-preview/b6a5c9b4b23918c11f8e9e93b9d522ab5cb1e881",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:51UQJuxkNLgtX8UsfoDqRR"
    }
  }, {
    "added_at" : "2015-12-24T08:02:23Z",
    "track" : {
      "album" : {
        "album_type" : "compilation",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5UtlwR5GMEM3XrF8GdzMmB"
        },
        "href" : "https://api.spotify.com/v1/albums/5UtlwR5GMEM3XrF8GdzMmB",
        "id" : "5UtlwR5GMEM3XrF8GdzMmB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/c0fb10c0253dbd63dc063afb2dedc17922da72bb",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3bb609bb7cb6b63d90ac8cc9f30164cd1dba421e",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/c18d91c939997d3a33251fc7a85cbf552795ecb1",
          "width" : 64
        } ],
        "name" : "The Beatles 1967 - 1970 (Remastered)",
        "type" : "album",
        "uri" : "spotify:album:5UtlwR5GMEM3XrF8GdzMmB"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "disc_number" : 1,
      "duration_ms" : 164186,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0601508"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2G5HiV1RpXDTb17jV4WUgU"
      },
      "href" : "https://api.spotify.com/v1/tracks/2G5HiV1RpXDTb17jV4WUgU",
      "id" : "2G5HiV1RpXDTb17jV4WUgU",
      "is_playable" : true,
      "name" : "With A Little Help From My Friends - Remastered 2009",
      "popularity" : 17,
      "preview_url" : "https://p.scdn.co/mp3-preview/e9eda0a7e66d6ee0ccd3b124774e81b1f80bde08",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:2G5HiV1RpXDTb17jV4WUgU"
    }
  }, {
    "added_at" : "2015-12-24T08:02:23Z",
    "track" : {
      "album" : {
        "album_type" : "compilation",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5UtlwR5GMEM3XrF8GdzMmB"
        },
        "href" : "https://api.spotify.com/v1/albums/5UtlwR5GMEM3XrF8GdzMmB",
        "id" : "5UtlwR5GMEM3XrF8GdzMmB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/c0fb10c0253dbd63dc063afb2dedc17922da72bb",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3bb609bb7cb6b63d90ac8cc9f30164cd1dba421e",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/c18d91c939997d3a33251fc7a85cbf552795ecb1",
          "width" : 64
        } ],
        "name" : "The Beatles 1967 - 1970 (Remastered)",
        "type" : "album",
        "uri" : "spotify:album:5UtlwR5GMEM3XrF8GdzMmB"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"
        },
        "href" : "https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",
        "id" : "3WrFJ7ztbogyGnTHbHJFl2",
        "name" : "The Beatles",
        "type" : "artist",
        "uri" : "spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"
      } ],
      "disc_number" : 1,
      "duration_ms" : 209666,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAYE0601509"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5VDZsW2ka4oKuiOkj8xC9a"
      },
      "href" : "https://api.spotify.com/v1/tracks/5VDZsW2ka4oKuiOkj8xC9a",
      "id" : "5VDZsW2ka4oKuiOkj8xC9a",
      "is_playable" : true,
      "name" : "Lucy In The Sky With Diamonds - Remastered 2009",
      "popularity" : 17,
      "preview_url" : "https://p.scdn.co/mp3-preview/0609bc1b13ea40ddfa6a23c09aef08e23848f73f",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:5VDZsW2ka4oKuiOkj8xC9a"
    }
  } ],
  "limit" : 5,
  "next" : "https://api.spotify.com/v1/me/tracks?offset=5&limit=5&market=DK",
  "offset" : 0,
  "previous" : null,
  "total" : 2884
};




/**
 * Remove User’s Saved Tracks
 * 
 * DELETE /v1/me/tracks?ids={ids}
 * https://developer.spotify.com/web-api/remove-tracks-user/
 */
const removeUsersTracks : SpotifyApi.RemoveUsersSavedTracksResponse = {};




/**
 * Check User’s Saved Tracks
 * 
 * GET /v1/me/tracks/contains?ids={ids}
 * https://developer.spotify.com/web-api/check-users-saved-tracks/
 */
const checkUsersTracks : SpotifyApi.CheckUserSavedAlbumsResponse = [ false, false, true ];




/**
 * Save albums for user
 * 
 * PUT /v1/me/albums?ids={ids}
 * https://developer.spotify.com/web-api/save-albums-user/
 */
const saveAlbumForUser : SpotifyApi.SaveAlbumsForUserResponse = {};



/**
 * Get user's saved albums
 * 
 * GET /v1/me/albums
 * https://developer.spotify.com/web-api/get-users-saved-albums/
 */
const usersSavedAlbums : SpotifyApi.UsersSavedAlbumsResponse = {
  "href" : "https://api.spotify.com/v1/me/albums?offset=0&limit=1",
  "items" : [ {
    "added_at" : "2015-11-26T19:13:31Z",
    "album" : {
      "album_type" : "album",
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/58RMTlPJKbmpmVk1AmRK3h"
        },
        "href" : "https://api.spotify.com/v1/artists/58RMTlPJKbmpmVk1AmRK3h",
        "id" : "58RMTlPJKbmpmVk1AmRK3h",
        "name" : "Abidaz",
        "type" : "artist",
        "uri" : "spotify:artist:58RMTlPJKbmpmVk1AmRK3h"
      } ],
      "available_markets" : [ "AR", "AT", "AU", "BE", "BR", "CL", "CO", "CY", "CZ", "DE" ],
      "copyrights" : [ {
        "text" : "(C) 2013 Soblue Music Group AB, Under exclusive license to Universal Music AB",
        "type" : "C"
      }, {
        "text" : "(P) 2013 Soblue Music Group AB, Under exclusive license to Universal Music AB",
        "type" : "P"
      } ],
      "external_ids" : {
        "upc" : "00602537623730"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/5m4VYOPoIpkV0XgOiRKkWC"
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/albums/5m4VYOPoIpkV0XgOiRKkWC",
      "id" : "5m4VYOPoIpkV0XgOiRKkWC",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ccbb1e3bea2461e69783895e880965b171e29f4c",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/2210b7d23f320a2cab2736bd3b3b948415dd21d8",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/609153aca7f4760136d97fbaccdb4ec0757e4c9e",
        "width" : 64
      } ],
      "name" : "In & ut",
      "popularity" : 49,
      "release_date" : "2013-01-01",
      "release_date_precision" : "day",
      "tracks" : {
        "href" : "https://api.spotify.com/v1/albums/5m4VYOPoIpkV0XgOiRKkWC/tracks?offset=0&limit=50",
        "items" : [ {
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/58RMTlPJKbmpmVk1AmRK3h"
            },
            "href" : "https://api.spotify.com/v1/artists/58RMTlPJKbmpmVk1AmRK3h",
            "id" : "58RMTlPJKbmpmVk1AmRK3h",
            "name" : "Abidaz",
            "type" : "artist",
            "uri" : "spotify:artist:58RMTlPJKbmpmVk1AmRK3h"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1l63szZeUpN1m87MOD1u7K"
            },
            "href" : "https://api.spotify.com/v1/artists/1l63szZeUpN1m87MOD1u7K",
            "id" : "1l63szZeUpN1m87MOD1u7K",
            "name" : "Chapee",
            "type" : "artist",
            "uri" : "spotify:artist:1l63szZeUpN1m87MOD1u7K"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1VLf7Ncxb5Jga6eyd3jh6K"
            },
            "href" : "https://api.spotify.com/v1/artists/1VLf7Ncxb5Jga6eyd3jh6K",
            "id" : "1VLf7Ncxb5Jga6eyd3jh6K",
            "name" : "C.U.P",
            "type" : "artist",
            "uri" : "spotify:artist:1VLf7Ncxb5Jga6eyd3jh6K"
          } ],
          "available_markets" : [ "AR", "AT", "AU", "BE", "BR", "CL", "CO", "CY", "CZ", "DE" ],
          "disc_number" : 1,
          "duration_ms" : 170920,
          "explicit" : false,
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/3VNWq8rTnQG6fM1eldSpZ0"
          },
          "href" : "https://api.spotify.com/v1/tracks/3VNWq8rTnQG6fM1eldSpZ0",
          "id" : "3VNWq8rTnQG6fM1eldSpZ0",
          "name" : "E.C.",
          "preview_url" : "https://p.scdn.co/mp3-preview/f95e0dba1a76b44fa2b52da2bc273d4f1c4126a5",
          "track_number" : 1,
          "type" : "track",
          "uri" : "spotify:track:3VNWq8rTnQG6fM1eldSpZ0"
        }, 
        {
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/58RMTlPJKbmpmVk1AmRK3h"
            },
            "href" : "https://api.spotify.com/v1/artists/58RMTlPJKbmpmVk1AmRK3h",
            "id" : "58RMTlPJKbmpmVk1AmRK3h",
            "name" : "Abidaz",
            "type" : "artist",
            "uri" : "spotify:artist:58RMTlPJKbmpmVk1AmRK3h"
          } ],
          "available_markets" : [ "AR", "AT", "AU", "BE", "BR", "CL", "CO", "CY", "CZ", "DE", "DK", "EE" ],
          "disc_number" : 1,
          "duration_ms" : 165946,
          "explicit" : false,
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/6ZrVKylVlxkaXHj42O0q2r"
          },
          "href" : "https://api.spotify.com/v1/tracks/6ZrVKylVlxkaXHj42O0q2r",
          "id" : "6ZrVKylVlxkaXHj42O0q2r",
          "name" : "Råknas - Radio Edit",
          "preview_url" : "https://p.scdn.co/mp3-preview/a7c9a4bfa9e346e3733e9d88076ad1ae409136fb",
          "track_number" : 13,
          "type" : "track",
          "uri" : "spotify:track:6ZrVKylVlxkaXHj42O0q2r"
        } ],
        "limit" : 50,
        "next" : null,
        "offset" : 0,
        "previous" : null,
        "total" : 13
      },
      "type" : "album",
      "uri" : "spotify:album:5m4VYOPoIpkV0XgOiRKkWC"
    }
  } ],
  "limit" : 1,
  "next" : "https://api.spotify.com/v1/me/albums?offset=1&limit=1",
  "offset" : 0,
  "previous" : null,
  "total" : 19
}



/**
 * Remove Albums for Current User
 * 
 * DELETE /v1/me/albums?ids={ids}
 * https://developer.spotify.com/web-api/remove-albums-user/
 */
const removeAlbumForUser : SpotifyApi.RemoveAlbumsForUserResponse = {};





/**
 * Check user's saved albums
 * 
 * DELETE /v1/me/albums/contains?ids={ids}
 * https://developer.spotify.com/web-api/check-users-saved-albums/
 */
const checkUsersSavedAlbums : SpotifyApi.CheckUserSavedAlbumsResponse = [ true, false, false, true ];



/**
 * Get a User’s Top Artists and Tracks (Note: This is only Artists)
 * 
 * GET /v1/me/top/{type}
 * https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/
 */
const usersTopArtists : SpotifyApi.UsersTopArtistsResponse = {
    "items" : [ 
      {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3qqhR4mOQZP2t2I6QmU8lE"
      },
      "followers" : {
        "href" : null,
        "total" : 3670
      },
      "genres" : [ "danish pop rock" ],
      "href" : "https://api.spotify.com/v1/artists/3qqhR4mOQZP2t2I6QmU8lE",
      "id" : "3qqhR4mOQZP2t2I6QmU8lE",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/8ec6329ea80912effd2a7788a932bd59ff5842ff",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/cfc97d0e49529141efc22fb9aa766c2887d79ba2",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/efb71bf852c51426bee57c42d1cfb9f46749df4e",
        "width" : 160
      } ],
      "name" : "Folkeklubben",
      "popularity" : 43,
      "type" : "artist",
      "uri" : "spotify:artist:3qqhR4mOQZP2t2I6QmU8lE"
    }, 
    {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/5CuU6SRJjbbZL926nSGGxX"
      },
      "followers" : {
        "href" : null,
        "total" : 18429
      },
      "genres" : [ "abstract hip hop", "alternative hip hop", "escape room", "underground hip hop" ],
      "href" : "https://api.spotify.com/v1/artists/5CuU6SRJjbbZL926nSGGxX",
      "id" : "5CuU6SRJjbbZL926nSGGxX",
      "images" : [ {
        "height" : 714,
        "url" : "https://i.scdn.co/image/7a79a4f7ef164f418034d6fe5e53be24123610bf",
        "width" : 999
      }, {
        "height" : 457,
        "url" : "https://i.scdn.co/image/9f1519e9e53a61d88655d9203f9524d363157b31",
        "width" : 640
      }, {
        "height" : 143,
        "url" : "https://i.scdn.co/image/3c1436cf75d5c7f2ba027a914e4970a100e9150a",
        "width" : 200
      }, {
        "height" : 46,
        "url" : "https://i.scdn.co/image/d1711c38b18f473e805a296755931c99b9c85671",
        "width" : 64
      } ],
      "name" : "Open Mike Eagle",
      "popularity" : 49,
      "type" : "artist",
      "uri" : "spotify:artist:5CuU6SRJjbbZL926nSGGxX"
    }
  ],
  "total" : 50,
  "limit" : 20,
  "offset" : 0,
  "href" : "https://api.spotify.com/v1/me/top/artists",
  "previous" : null,
  "next" : "https://api.spotify.com/v1/me/top/artists?limit=20&offset=20"
}





/**
 * Get a User’s Top Artists and Tracks (Note: This is only Tracks)
 * 
 * GET /v1/me/top/{type}
 * https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/
 */
const usersTopTracks : SpotifyApi.UsersTopTracksResponse = {
    "items" : [ 
      {
        "album" : {
          "album_type" : "SINGLE",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/40LbnfieVTWtHrK24WQeEB"
          },
          "href" : "https://api.spotify.com/v1/albums/40LbnfieVTWtHrK24WQeEB",
          "id" : "40LbnfieVTWtHrK24WQeEB",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/d013904153a1c3771a7f851132b090254c39a51b",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/84b9940cb99bf1072d553158c6e23426cb13b789",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/65234ee4a5155e1e9848d73c9a5d4167640c5442",
            "width" : 64
          } ],
          "name" : "CAN'T STOP THE FEELING! (Original Song from DreamWorks Animation's \"TROLLS\")",
          "type" : "album",
          "uri" : "spotify:album:40LbnfieVTWtHrK24WQeEB"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7"
          },
          "href" : "https://api.spotify.com/v1/artists/31TPClRtHm23RisEBtV3X7",
          "id" : "31TPClRtHm23RisEBtV3X7",
          "name" : "Justin Timberlake",
          "type" : "artist",
          "uri" : "spotify:artist:31TPClRtHm23RisEBtV3X7"
        } ],
        "disc_number" : 1,
        "duration_ms" : 236001,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USRC11600876"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/6JV2JOEocMgcZxYSZelKcc"
        },
        "href" : "https://api.spotify.com/v1/tracks/6JV2JOEocMgcZxYSZelKcc",
        "id" : "6JV2JOEocMgcZxYSZelKcc",
        "is_playable" : true,
        "name" : "CAN'T STOP THE FEELING! (Original Song from DreamWorks Animation's \"TROLLS\")",
        "popularity" : 89,
        "preview_url" : "https://p.scdn.co/mp3-preview/9127f47e7e5265f51ab9e1a8d5d8edb9b7cb91a5",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:6JV2JOEocMgcZxYSZelKcc"
      }, {
        "album" : {
          "album_type" : "ALBUM",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/7LWTCCUFJ0USkRscNJJrI5"
          },
          "href" : "https://api.spotify.com/v1/albums/7LWTCCUFJ0USkRscNJJrI5",
          "id" : "7LWTCCUFJ0USkRscNJJrI5",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/5ba38a31cba7dad300b8e0faa9855831e56d5aa8",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/f2ff9436752a06bdbb37f932526d30d0d48faa62",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/bf9b129dcae3ff55d28c6cb637a31fda11bf19c4",
            "width" : 64
          } ],
          "name" : "Hella Personal Film Festival",
          "type" : "album",
          "uri" : "spotify:album:7LWTCCUFJ0USkRscNJJrI5"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5CuU6SRJjbbZL926nSGGxX"
          },
          "href" : "https://api.spotify.com/v1/artists/5CuU6SRJjbbZL926nSGGxX",
          "id" : "5CuU6SRJjbbZL926nSGGxX",
          "name" : "Open Mike Eagle",
          "type" : "artist",
          "uri" : "spotify:artist:5CuU6SRJjbbZL926nSGGxX"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5agXR9PXcQ3whCRLu8LeeN"
          },
          "href" : "https://api.spotify.com/v1/artists/5agXR9PXcQ3whCRLu8LeeN",
          "id" : "5agXR9PXcQ3whCRLu8LeeN",
          "name" : "Paul White",
          "type" : "artist",
          "uri" : "spotify:artist:5agXR9PXcQ3whCRLu8LeeN"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2fSaE6BXtQy0x7R7v9IOmZ"
          },
          "href" : "https://api.spotify.com/v1/artists/2fSaE6BXtQy0x7R7v9IOmZ",
          "id" : "2fSaE6BXtQy0x7R7v9IOmZ",
          "name" : "Aesop Rock",
          "type" : "artist",
          "uri" : "spotify:artist:2fSaE6BXtQy0x7R7v9IOmZ"
        } ],
        "disc_number" : 1,
        "duration_ms" : 163607,
        "explicit" : true,
        "external_ids" : {
          "isrc" : "QMDA61502901"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/27q05upTUtvQKCReZDy4PH"
        },
        "href" : "https://api.spotify.com/v1/tracks/27q05upTUtvQKCReZDy4PH",
        "id" : "27q05upTUtvQKCReZDy4PH",
        "is_playable" : true,
        "name" : "I Went Outside Today (feat. Aesop Rock)",
        "popularity" : 30,
        "preview_url" : "https://p.scdn.co/mp3-preview/715ab2ac2089a6fb99afe37cb7ea73c0a4788171",
        "track_number" : 2,
        "type" : "track",
        "uri" : "spotify:track:27q05upTUtvQKCReZDy4PH"
      }
  ],
  "total" : 50,
  "limit" : 20,
  "offset" : 0,
  "href" : "https://api.spotify.com/v1/me/top/tracks",
  "previous" : null,
  "next" : "https://api.spotify.com/v1/me/top/tracks?limit=20&offset=20"
}




/**
 * Get recommendations based on seeds
 * 
 * GET /v1/recommendations
 * https://developer.spotify.com/get-recommendations/
 */
const recommendationsBasedOnSeeds: SpotifyApi.RecommendationsFromSeedsResponse = {
  "tracks": [
    {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/134GdR5tUtxJrf8cpsfpyY"
        },
          "href" : "https://api.spotify.com/v1/artists/134GdR5tUtxJrf8cpsfpyY",
          "id" : "134GdR5tUtxJrf8cpsfpyY",
          "name" : "Elliphant",
          "type" : "artist",
          "uri" : "spotify:artist:134GdR5tUtxJrf8cpsfpyY"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1D2oK3cJRq97OXDzu77BFR"
        },
          "href" : "https://api.spotify.com/v1/artists/1D2oK3cJRq97OXDzu77BFR",
          "id" : "1D2oK3cJRq97OXDzu77BFR",
          "name" : "Ras Fraser Jr.",
          "type" : "artist",
          "uri" : "spotify:artist:1D2oK3cJRq97OXDzu77BFR"
      } ],
      "disc_number" : 1,
      "duration_ms" : 199133,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1TKYPzH66GwsqyJFKFkBHQ"
      },
      "href" : "https://api.spotify.com/v1/tracks/1TKYPzH66GwsqyJFKFkBHQ",
      "id" : "1TKYPzH66GwsqyJFKFkBHQ",
      "is_playable" : true,
      "name" : "Music Is Life",
      "preview_url" : "https://p.scdn.co/mp3-preview/546099103387186dfe16743a33edd77e52cec738",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:1TKYPzH66GwsqyJFKFkBHQ"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1VBflYyxBhnDc9uVib98rw"
        },
          "href" : "https://api.spotify.com/v1/artists/1VBflYyxBhnDc9uVib98rw",
          "id" : "1VBflYyxBhnDc9uVib98rw",
          "name" : "Icona Pop",
          "type" : "artist",
          "uri" : "spotify:artist:1VBflYyxBhnDc9uVib98rw"
      } ],
        "disc_number" : 1,
        "duration_ms" : 187026,
        "explicit" : false,
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/15iosIuxC3C53BgsM5Uggs"
        },
        "href" : "https://api.spotify.com/v1/tracks/15iosIuxC3C53BgsM5Uggs",
        "id" : "15iosIuxC3C53BgsM5Uggs",
        "is_playable" : true,
        "name" : "All Night",
        "preview_url" : "https://p.scdn.co/mp3-preview/9ee589fa7fe4e96bad3483c20b3405fb59776424",
        "track_number" : 2,
        "type" : "track",
        "uri" : "spotify:track:15iosIuxC3C53BgsM5Uggs"
    }
  ],
  "seeds": [
    {
      "initialPoolSize": 500,
      "afterFilteringSize": 380,
      "afterRelinkingSize": 365,
      "href": "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK",
      "id": "4NHQUGzhtTLFvgF5SZesLK",
      "type": "artist"
    }, {
      "initialPoolSize": 250,
      "afterFilteringSize": 172,
      "afterRelinkingSize": 144,
      "href": "https://api.spotify.com/v1/tracks/0c6xIDDpzE81m2q797ordA",
      "id": "0c6xIDDpzE81m2q797ordA",
      "type": "track"
    }
  ]
};



/**
 * Get available genre seeds
 * 
 * GET /v1/recommendations/available-genre-seeds
 * https://developer.spotify.com/web-api/get-recommendations/#available-genre-seeds
 */
const availableGenreSeeds : SpotifyApi.AvailableGenreSeedsResponse = {
  "genres" : [ "acoustic", "afrobeat", "alt-rock", "alternative", "ambient", "anime", "black-metal", "bluegrass", "blues", "bossanova", "brazil", "breakbeat", "british", "cantopop", "chicago-house", "children", "chill", "classical", "club", "comedy", "country", "dance", "dancehall", "death-metal", "deep-house", "detroit-techno", "disco", "disney", "drum-and-bass", "dub", "dubstep", "edm", "electro", "electronic", "emo", "folk", "forro", "french", "funk", "garage", "german", "gospel", "goth", "grindcore", "groove", "grunge", "guitar", "happy", "hard-rock", "hardcore", "hardstyle", "heavy-metal", "hip-hop", "holidays", "honky-tonk", "house", "idm", "indian", "indie", "indie-pop", "industrial", "iranian", "j-dance", "j-idol", "j-pop", "j-rock", "jazz", "k-pop", "kids", "latin", "latino", "malay", "mandopop", "metal", "metal-misc", "metalcore", "minimal-techno", "movies", "mpb", "new-age", "new-release", "opera", "pagode", "party", "philippines-opm", "piano", "pop", "pop-film", "post-dubstep", "power-pop", "progressive-house", "psych-rock", "punk", "punk-rock", "r-n-b", "rainy-day", "reggae", "reggaeton", "road-trip", "rock", "rock-n-roll", "rockabilly", "romance", "sad", "salsa", "samba", "sertanejo", "show-tunes", "singer-songwriter", "ska", "sleep", "songwriter", "soul", "soundtracks", "spanish", "study", "summer", "swedish", "synth-pop", "tango", "techno", "trance", "trip-hop", "turkish", "work-out", "world-music" ]
}


/**
 * Search for an album
 * 
 * GET /v1/search?type=album
 * https://developer.spotify.com/web-api/search-item/
 */
const searchAlbums : SpotifyApi.AlbumSearchResponse = {
  "albums" : {
    "href" : "https://api.spotify.com/v1/search?query=Californication&offset=20&limit=2&type=album",
    "items" : [ {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/0ceQvLxLMxAo2VLtphFXnq"
      },
      "href" : "https://api.spotify.com/v1/albums/0ceQvLxLMxAo2VLtphFXnq",
      "id" : "0ceQvLxLMxAo2VLtphFXnq",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/7a048f1f93f967d3458361970a079648b231767f",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/8cab5da41d6446e5878d92a25a04c4283a512647",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/4f4c4de0b215d8ae5d3d239fe4b4fc26e8fd9d8e",
        "width" : 64
      } ],
      "name" : "Californication (Karaoke Version) (Karaoke Hits of The Red Hot Chili Peppers)",
      "type" : "album",
      "uri" : "spotify:album:0ceQvLxLMxAo2VLtphFXnq"
    }, {
      "album_type" : "single",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/65b1E2nNuRD2o0PVr8fFv1"
      },
      "href" : "https://api.spotify.com/v1/albums/65b1E2nNuRD2o0PVr8fFv1",
      "id" : "65b1E2nNuRD2o0PVr8fFv1",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/6d5dd24845ed51b795cb6d10898076989a0bdb87",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/e81dff6c380773f6fc1b5997ca5c2b5506b145e9",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/b5e832623b8fa8d4e4c91b4aa1cdc82a35e4c471",
        "width" : 64
      } ],
      "name" : "Californication (Karaoke Version) (In the Style of Red Hot Chili Peppers)",
      "type" : "album",
      "uri" : "spotify:album:65b1E2nNuRD2o0PVr8fFv1"
    } ],
    "limit" : 2,
    "next" : "https://api.spotify.com/v1/search?query=Californication&offset=22&limit=2&type=album",
    "offset" : 20,
    "previous" : "https://api.spotify.com/v1/search?query=Californication&offset=18&limit=2&type=album",
    "total" : 27
  }
};




/**
 * Search for an artist
 * 
 * GET /v1/search?type=artist
 * https://developer.spotify.com/web-api/search-item/
 */
const searchArtists : SpotifyApi.ArtistSearchResponse = {
  "artists" : {
    "href" : "https://api.spotify.com/v1/search?query=tania+bowra&offset=0&limit=20&type=artist",
    "items" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
      },
      "followers" : {
        "href" : null,
        "total" : 26
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
      "id" : "08td7MxkoHQkXnWAYD8d6Q",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/f2798ddab0c7b76dc2d270b65c4f67ddef7f6718",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/b414091165ea0f4172089c2fc67bb35aa37cfc55",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/8522fc78be4bf4e83fea8e67bb742e7d3dfe21b4",
        "width" : 64
      } ],
      "name" : "Tania Bowra",
      "popularity" : 2,
      "type" : "artist",
      "uri" : "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
    } ],
    "limit" : 20,
    "next" : null,
    "offset" : 0,
    "previous" : null,
    "total" : 1
  }
};




/**
 * Search for a playlist
 * 
 * GET /v1/search?type=playlist
 * https://developer.spotify.com/web-api/search-item/
 */
const searchPlaylists : SpotifyApi.PlaylistSearchResponse = {
  "playlists" : {
    "href" : "https://api.spotify.com/v1/search?query=Summer&offset=20&limit=2&type=playlist",
    "items" : [ {
      "collaborative" : false,
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/twistoffame/playlist/4atqr0nDMUxQFLd09yhk9w"
      },
      "href" : "https://api.spotify.com/v1/users/twistoffame/playlists/4atqr0nDMUxQFLd09yhk9w",
      "id" : "4atqr0nDMUxQFLd09yhk9w",
      "images" : [ {
        "height" : 640,
        "url" : "https://mosaic.scdn.co/640/4e1d108995a6947bfc6b1d728f0fcd5b4c5ec64444e09ba9156ae93324850b27f17fe7523178d05dfd3cac76a8f1f3cab516f06873eeec16977efdf0c3c226ca1b710078b9f2d9b01c9fdd0c7823c80d",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://mosaic.scdn.co/300/4e1d108995a6947bfc6b1d728f0fcd5b4c5ec64444e09ba9156ae93324850b27f17fe7523178d05dfd3cac76a8f1f3cab516f06873eeec16977efdf0c3c226ca1b710078b9f2d9b01c9fdd0c7823c80d",
        "width" : 300
      }, {
        "height" : 60,
        "url" : "https://mosaic.scdn.co/60/4e1d108995a6947bfc6b1d728f0fcd5b4c5ec64444e09ba9156ae93324850b27f17fe7523178d05dfd3cac76a8f1f3cab516f06873eeec16977efdf0c3c226ca1b710078b9f2d9b01c9fdd0c7823c80d",
        "width" : 60
      } ],
      "name" : "Summer",
      "owner" : {
        "external_urls" : {
          "spotify" : "http://open.spotify.com/user/twistoffame"
        },
        "href" : "https://api.spotify.com/v1/users/twistoffame",
        "id" : "twistoffame",
        "type" : "user",
        "uri" : "spotify:user:twistoffame"
      },
      "public" : null,
      "snapshot_id" : "4Hfz5J478TU3Iljnxc5qXAJt/mCS8Q92XNvbRJjd1CPDjiDAP4Aj+3PZKYT5VxZ6",
      "tracks" : {
        "href" : "https://api.spotify.com/v1/users/twistoffame/playlists/4atqr0nDMUxQFLd09yhk9w/tracks",
        "total" : 116
      },
      "type" : "playlist",
      "uri" : "spotify:user:twistoffame:playlist:4atqr0nDMUxQFLd09yhk9w"
    }, {
      "collaborative" : false,
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/1174077483/playlist/3fAKyVYIkAiinuipRUGJHj"
      },
      "href" : "https://api.spotify.com/v1/users/1174077483/playlists/3fAKyVYIkAiinuipRUGJHj",
      "id" : "3fAKyVYIkAiinuipRUGJHj",
      "images" : [ {
        "height" : 640,
        "url" : "https://mosaic.scdn.co/640/5112bb05919320d47d5011d2479515392e995a208a46ad36789d2eba454e16caffca4fb994f5f64cf3cf87bfde0748d389702a69e0ba01f6091e2403f844302197c69972032ba43f3cc73e25f2f562e0",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://mosaic.scdn.co/300/5112bb05919320d47d5011d2479515392e995a208a46ad36789d2eba454e16caffca4fb994f5f64cf3cf87bfde0748d389702a69e0ba01f6091e2403f844302197c69972032ba43f3cc73e25f2f562e0",
        "width" : 300
      }, {
        "height" : 60,
        "url" : "https://mosaic.scdn.co/60/5112bb05919320d47d5011d2479515392e995a208a46ad36789d2eba454e16caffca4fb994f5f64cf3cf87bfde0748d389702a69e0ba01f6091e2403f844302197c69972032ba43f3cc73e25f2f562e0",
        "width" : 60
      } ],
      "name" : "Summer Bash 2015",
      "owner" : {
        "external_urls" : {
          "spotify" : "http://open.spotify.com/user/1174077483"
        },
        "href" : "https://api.spotify.com/v1/users/1174077483",
        "id" : "1174077483",
        "type" : "user",
        "uri" : "spotify:user:1174077483"
      },
      "public" : null,
      "snapshot_id" : "4hO+Np6z7Pvla+BDmNGTP8cOuBjPcnY0YhpQdH9Kj2AvuvhyokjcIXLhw59Ufsof",
      "tracks" : {
        "href" : "https://api.spotify.com/v1/users/1174077483/playlists/3fAKyVYIkAiinuipRUGJHj/tracks",
        "total" : 162
      },
      "type" : "playlist",
      "uri" : "spotify:user:1174077483:playlist:3fAKyVYIkAiinuipRUGJHj"
    } ],
    "limit" : 2,
    "next" : "https://api.spotify.com/v1/search?query=Summer&offset=22&limit=2&type=playlist",
    "offset" : 20,
    "previous" : "https://api.spotify.com/v1/search?query=Summer&offset=18&limit=2&type=playlist",
    "total" : 9721
  }
};




/**
 * Search for a track
 * 
 * GET /v1/search?type=track
 * https://developer.spotify.com/web-api/search-item/
 */
const searchTracks : SpotifyApi.TrackSearchResponse = {
  "tracks" : {
    "href" : "https://api.spotify.com/v1/search?query=Summer&offset=20&limit=2&type=track",
    "items" : [ {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "BG", "CY", "EE", "FI", "GR", "LT", "LV", "RO", "AD", "BE", "CZ", "DK", "ES", "FR", "HU", "IT", "LU", "MC", "MT", "NL", "NO", "PL", "SE", "SI", "SK", "GB", "IE", "IS", "PT", "UY", "AR", "CL", "PY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV", "NZ", "AU", "HK", "MY", "PH", "SG", "TW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/049UASMZj7hfeDWWY8BzoE"
        },
        "href" : "https://api.spotify.com/v1/albums/049UASMZj7hfeDWWY8BzoE",
        "id" : "049UASMZj7hfeDWWY8BzoE",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/4d26ef97cbfe370350770332fdd45e1152425b4e",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/e43b111ee4ed30b17ae40b1c73326a54df53ffc9",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/96c8941a9ead45c01e65fc615ed5a95f13af869f",
          "width" : 64
        } ],
        "name" : "Summer In The Winter",
        "type" : "album",
        "uri" : "spotify:album:049UASMZj7hfeDWWY8BzoE"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6KZDXtSj0SzGOV705nNeh3"
        },
        "href" : "https://api.spotify.com/v1/artists/6KZDXtSj0SzGOV705nNeh3",
        "id" : "6KZDXtSj0SzGOV705nNeh3",
        "name" : "Kid Ink",
        "type" : "artist",
        "uri" : "spotify:artist:6KZDXtSj0SzGOV705nNeh3"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0z4gvV4rjIZ9wHck67ucSV"
        },
        "href" : "https://api.spotify.com/v1/artists/0z4gvV4rjIZ9wHck67ucSV",
        "id" : "0z4gvV4rjIZ9wHck67ucSV",
        "name" : "Akon",
        "type" : "artist",
        "uri" : "spotify:artist:0z4gvV4rjIZ9wHck67ucSV"
      } ],
      "available_markets" : [ "BG", "CY", "EE", "FI", "GR", "LT", "LV", "RO", "AD", "BE", "CZ", "DK", "ES", "FR", "HU", "IT", "LU", "MC", "MT", "NL", "NO", "PL", "SE", "SI", "SK", "GB", "IE", "IS", "PT", "UY", "AR", "CL", "PY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV", "NZ", "AU", "HK", "MY", "PH", "SG", "TW" ],
      "disc_number" : 1,
      "duration_ms" : 240013,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USRC11503201"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/42BptFJWPANaOHUxDBo7Gf"
      },
      "href" : "https://api.spotify.com/v1/tracks/42BptFJWPANaOHUxDBo7Gf",
      "id" : "42BptFJWPANaOHUxDBo7Gf",
      "name" : "Rewind",
      "popularity" : 0,
      "preview_url" : "https://p.scdn.co/mp3-preview/257b7e9cf68642f3d96b57a4bcf5824d9ccaab21",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:42BptFJWPANaOHUxDBo7Gf"
    }, {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "BG", "CY", "EE", "FI", "GR", "LT", "LV", "RO", "AD", "AT", "BE", "CH", "CZ", "DE", "DK", "ES", "FR", "HU", "IT", "LI", "LU", "MC", "MT", "NL", "NO", "PL", "SE", "SI", "SK", "GB", "IE", "IS", "PT", "BR", "UY", "AR", "CL", "PY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV", "NZ", "AU", "HK", "MY", "PH", "SG", "TW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6uG9BscYmPnAbtl6Cy9u91"
        },
        "href" : "https://api.spotify.com/v1/albums/6uG9BscYmPnAbtl6Cy9u91",
        "id" : "6uG9BscYmPnAbtl6Cy9u91",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/4d26ef97cbfe370350770332fdd45e1152425b4e",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/e43b111ee4ed30b17ae40b1c73326a54df53ffc9",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/96c8941a9ead45c01e65fc615ed5a95f13af869f",
          "width" : 64
        } ],
        "name" : "Summer In The Winter",
        "type" : "album",
        "uri" : "spotify:album:6uG9BscYmPnAbtl6Cy9u91"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6KZDXtSj0SzGOV705nNeh3"
        },
        "href" : "https://api.spotify.com/v1/artists/6KZDXtSj0SzGOV705nNeh3",
        "id" : "6KZDXtSj0SzGOV705nNeh3",
        "name" : "Kid Ink",
        "type" : "artist",
        "uri" : "spotify:artist:6KZDXtSj0SzGOV705nNeh3"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5wd2VuNxYv2rZ3z6qY0Wvx"
        },
        "href" : "https://api.spotify.com/v1/artists/5wd2VuNxYv2rZ3z6qY0Wvx",
        "id" : "5wd2VuNxYv2rZ3z6qY0Wvx",
        "name" : "Bïa",
        "type" : "artist",
        "uri" : "spotify:artist:5wd2VuNxYv2rZ3z6qY0Wvx"
      } ],
      "available_markets" : [ "BG", "CY", "EE", "FI", "GR", "LT", "LV", "RO", "AD", "AT", "BE", "CH", "CZ", "DE", "DK", "ES", "FR", "HU", "IT", "LI", "LU", "MC", "MT", "NL", "NO", "PL", "SE", "SI", "SK", "GB", "IE", "IS", "PT", "BR", "UY", "AR", "CL", "PY", "BO", "DO", "CA", "CO", "EC", "PA", "PE", "US", "CR", "GT", "HN", "MX", "NI", "SV", "NZ", "AU", "HK", "MY", "PH", "SG", "TW" ],
      "disc_number" : 1,
      "duration_ms" : 196146,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USRC11503196"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3sXcUMhBQLCyr6Cl6z7RP4"
      },
      "href" : "https://api.spotify.com/v1/tracks/3sXcUMhBQLCyr6Cl6z7RP4",
      "id" : "3sXcUMhBQLCyr6Cl6z7RP4",
      "name" : "Good Idea",
      "popularity" : 0,
      "preview_url" : "https://p.scdn.co/mp3-preview/0f2dae3a28d6cb952576adbf6c613d62ce25af49",
      "track_number" : 9,
      "type" : "track",
      "uri" : "spotify:track:3sXcUMhBQLCyr6Cl6z7RP4"
    } ],
    "limit" : 2,
    "next" : "https://api.spotify.com/v1/search?query=Summer&offset=22&limit=2&type=track",
    "offset" : 20,
    "previous" : "https://api.spotify.com/v1/search?query=Summer&offset=18&limit=2&type=track",
    "total" : 334363
  }
};




/**
 * Get a track
 * 
 * GET /v1/tracks/{id}
 * https://developer.spotify.com/web-api/get-track/
 */
const track : SpotifyApi.SingleTrackResponse = {
  "album" : {
    "album_type" : "album",
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/6TJmQnO44YE5BtTxH8pop1"
    },
    "href" : "https://api.spotify.com/v1/albums/6TJmQnO44YE5BtTxH8pop1",
    "id" : "6TJmQnO44YE5BtTxH8pop1",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/8e13218039f81b000553e25522a7f0d7a0600f2e",
      "width" : 629
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/8c1e066b5d1045038437d92815d49987f519e44f",
      "width" : 295
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/d49268a8fc0768084f4750cf1647709e89a27172",
      "width" : 63
    } ],
    "name" : "Hot Fuss",
    "type" : "album",
    "uri" : "spotify:album:6TJmQnO44YE5BtTxH8pop1"
  },
  "artists" : [ {
    "external_urls" : {
      "spotify" : "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
    },
    "href" : "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
    "id" : "0C0XlULifJtAgn6ZNCW2eu",
    "name" : "The Killers",
    "type" : "artist",
    "uri" : "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
  } ],
  "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
  "disc_number" : 1,
  "duration_ms" : 222075,
  "explicit" : false,
  "external_ids" : {
    "isrc" : "USIR20400274"
  },
  "external_urls" : {
    "spotify" : "https://open.spotify.com/track/0eGsygTp906u18L0Oimnem"
  },
  "href" : "https://api.spotify.com/v1/tracks/0eGsygTp906u18L0Oimnem",
  "id" : "0eGsygTp906u18L0Oimnem",
  "name" : "Mr. Brightside",
  "popularity" : 74,
  "preview_url" : "https://p.scdn.co/mp3-preview/934da7155ec15deb326635d69d050543ecbee2b4",
  "track_number" : 2,
  "type" : "track",
  "uri" : "spotify:track:0eGsygTp906u18L0Oimnem"
};




/**
 * Get multiple tracks
 * 
 * GET /v1/tracks?ids={ids}
 * https://developer.spotify.com/web-api/get-several-tracks/
 */
const tracks : SpotifyApi.MultipleTracksResponse = {
  "tracks" : [ {
    "album" : {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/6TJmQnO44YE5BtTxH8pop1"
      },
      "href" : "https://api.spotify.com/v1/albums/6TJmQnO44YE5BtTxH8pop1",
      "id" : "6TJmQnO44YE5BtTxH8pop1",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/8e13218039f81b000553e25522a7f0d7a0600f2e",
        "width" : 629
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/8c1e066b5d1045038437d92815d49987f519e44f",
        "width" : 295
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/d49268a8fc0768084f4750cf1647709e89a27172",
        "width" : 63
      } ],
      "name" : "Hot Fuss",
      "type" : "album",
      "uri" : "spotify:album:6TJmQnO44YE5BtTxH8pop1"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
      },
      "href" : "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
      "id" : "0C0XlULifJtAgn6ZNCW2eu",
      "name" : "The Killers",
      "type" : "artist",
      "uri" : "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 222075,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USIR20400274"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/0eGsygTp906u18L0Oimnem"
    },
    "href" : "https://api.spotify.com/v1/tracks/0eGsygTp906u18L0Oimnem",
    "id" : "0eGsygTp906u18L0Oimnem",
    "name" : "Mr. Brightside",
    "popularity" : 74,
    "preview_url" : "https://p.scdn.co/mp3-preview/934da7155ec15deb326635d69d050543ecbee2b4",
    "track_number" : 2,
    "type" : "track",
    "uri" : "spotify:track:0eGsygTp906u18L0Oimnem"
  }, {
    "album" : {
      "album_type" : "album",
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/6TJmQnO44YE5BtTxH8pop1"
      },
      "href" : "https://api.spotify.com/v1/albums/6TJmQnO44YE5BtTxH8pop1",
      "id" : "6TJmQnO44YE5BtTxH8pop1",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/8e13218039f81b000553e25522a7f0d7a0600f2e",
        "width" : 629
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/8c1e066b5d1045038437d92815d49987f519e44f",
        "width" : 295
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/d49268a8fc0768084f4750cf1647709e89a27172",
        "width" : 63
      } ],
      "name" : "Hot Fuss",
      "type" : "album",
      "uri" : "spotify:album:6TJmQnO44YE5BtTxH8pop1"
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
      },
      "href" : "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
      "id" : "0C0XlULifJtAgn6ZNCW2eu",
      "name" : "The Killers",
      "type" : "artist",
      "uri" : "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
    "disc_number" : 1,
    "duration_ms" : 197160,
    "explicit" : false,
    "external_ids" : {
      "isrc" : "USIR20400195"
    },
    "external_urls" : {
      "spotify" : "https://open.spotify.com/track/1lDWb6b6ieDQ2xT7ewTC3G"
    },
    "href" : "https://api.spotify.com/v1/tracks/1lDWb6b6ieDQ2xT7ewTC3G",
    "id" : "1lDWb6b6ieDQ2xT7ewTC3G",
    "name" : "Somebody Told Me",
    "popularity" : 68,
    "preview_url" : "https://p.scdn.co/mp3-preview/0d07673cfb46218a49c96eed639933f19b45cf9c",
    "track_number" : 4,
    "type" : "track",
    "uri" : "spotify:track:1lDWb6b6ieDQ2xT7ewTC3G"
  } ]
};



/**
 * Get user profile
 * 
 * GET /v1/users/{user_id}
 * https://developer.spotify.com/web-api/get-users-profile/
 */
const userProfile : SpotifyApi.UserProfileResponse = {
  "display_name" : "Ronald Pompa",
  "external_urls" : {
    "spotify" : "https://open.spotify.com/user/wizzler"
  },
  "followers" : {
    "href" : null,
    "total" : 4259
  },
  "href" : "https://api.spotify.com/v1/users/wizzler",
  "id" : "wizzler",
  "images" : [ {
    "height" : null,
    "url" : "http://profile-images.scdn.co/images/userprofile/default/3d8a0ed1317df75d99d152a60494a78bfd30c37f",
    "width" : null
  } ],
  "type" : "user",
  "uri" : "spotify:user:wizzler"
};




/**
 * Get a list of a user's playlists
 * 
 * GET /v1/users/{user_id}/playlists
 * https://developer.spotify.com/web-api/get-list-users-playlists/
 */
const usersPlaylists : SpotifyApi.ListOfUsersPlaylistsResponse = {
  "href" : "https://api.spotify.com/v1/users/wizzler/playlists?offset=0&limit=2",
  "items" : [ {
    "collaborative" : false,
    "external_urls" : {
      "spotify" : "http://open.spotify.com/user/wizzler/playlist/6yRf9SJ1YiAhNAu7UCwgXQ"
    },
    "href" : "https://api.spotify.com/v1/users/wizzler/playlists/6yRf9SJ1YiAhNAu7UCwgXQ",
    "id" : "6yRf9SJ1YiAhNAu7UCwgXQ",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/5c383056e25a3e3ec858151afb70afe763c00f9b",
      "width" : 640
    } ],
    "name" : "My Shazam Tracks",
    "owner" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/wizzler"
      },
      "href" : "https://api.spotify.com/v1/users/wizzler",
      "id" : "wizzler",
      "type" : "user",
      "uri" : "spotify:user:wizzler"
    },
    "public" : true,
    "snapshot_id" : "WlQppvajE5kH/Xt5cHfHxJ6mSsFckwYixA06q7y1asdUz+m5v7pq6xb1f0FiFa7I",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/users/wizzler/playlists/6yRf9SJ1YiAhNAu7UCwgXQ/tracks",
      "total" : 1
    },
    "type" : "playlist",
    "uri" : "spotify:user:wizzler:playlist:6yRf9SJ1YiAhNAu7UCwgXQ"
  }, {
    "collaborative" : false,
    "external_urls" : {
      "spotify" : "http://open.spotify.com/user/wizzler/playlist/3FJd21jWvCjGCLx7eKrext"
    },
    "href" : "https://api.spotify.com/v1/users/wizzler/playlists/3FJd21jWvCjGCLx7eKrext",
    "id" : "3FJd21jWvCjGCLx7eKrext",
    "images" : [ {
      "height" : 300,
      "url" : "https://i.scdn.co/image/15858d38fdac4af890dcc634f4946c5bf83c0915",
      "width" : 300
    } ],
    "name" : "Video Game Masterpieces",
    "owner" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/wizzler"
      },
      "href" : "https://api.spotify.com/v1/users/wizzler",
      "id" : "wizzler",
      "type" : "user",
      "uri" : "spotify:user:wizzler"
    },
    "public" : true,
    "snapshot_id" : "LO0O/RGsDLEgeDC3xVR4HisMNsDqoPLE8QBRqllyvevTJ09tFWIUbjrYoEJbUhCa",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/users/wizzler/playlists/3FJd21jWvCjGCLx7eKrext/tracks",
      "total" : 33
    },
    "type" : "playlist",
    "uri" : "spotify:user:wizzler:playlist:3FJd21jWvCjGCLx7eKrext"
  } ],
  "limit" : 2,
  "next" : "https://api.spotify.com/v1/users/wizzler/playlists?offset=2&limit=2",
  "offset" : 0,
  "previous" : null,
  "total" : 7
};




/**
 * Get a list of the current user's playlists
 * 
 * GET /v1/users/{user_id}/playlists
 * https://developer.spotify.com/web-api/get-list-users-playlists/
 */
const currentUsersPlaylists : SpotifyApi.ListOfUsersPlaylistsResponse = {
  "href" : "https://api.spotify.com/v1/users/wizzler/playlists?offset=0&limit=2",
  "items" : [ {
    "collaborative" : false,
    "external_urls" : {
      "spotify" : "http://open.spotify.com/user/wizzler/playlist/6yRf9SJ1YiAhNAu7UCwgXQ"
    },
    "href" : "https://api.spotify.com/v1/users/wizzler/playlists/6yRf9SJ1YiAhNAu7UCwgXQ",
    "id" : "6yRf9SJ1YiAhNAu7UCwgXQ",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/5c383056e25a3e3ec858151afb70afe763c00f9b",
      "width" : 640
    } ],
    "name" : "My Shazam Tracks",
    "owner" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/wizzler"
      },
      "href" : "https://api.spotify.com/v1/users/wizzler",
      "id" : "wizzler",
      "type" : "user",
      "uri" : "spotify:user:wizzler"
    },
    "public" : true,
    "snapshot_id" : "WlQppvajE5kH/Xt5cHfHxJ6mSsFckwYixA06q7y1asdUz+m5v7pq6xb1f0FiFa7I",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/users/wizzler/playlists/6yRf9SJ1YiAhNAu7UCwgXQ/tracks",
      "total" : 1
    },
    "type" : "playlist",
    "uri" : "spotify:user:wizzler:playlist:6yRf9SJ1YiAhNAu7UCwgXQ"
  }, {
    "collaborative" : false,
    "external_urls" : {
      "spotify" : "http://open.spotify.com/user/wizzler/playlist/3FJd21jWvCjGCLx7eKrext"
    },
    "href" : "https://api.spotify.com/v1/users/wizzler/playlists/3FJd21jWvCjGCLx7eKrext",
    "id" : "3FJd21jWvCjGCLx7eKrext",
    "images" : [ {
      "height" : 300,
      "url" : "https://i.scdn.co/image/15858d38fdac4af890dcc634f4946c5bf83c0915",
      "width" : 300
    } ],
    "name" : "Video Game Masterpieces",
    "owner" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/wizzler"
      },
      "href" : "https://api.spotify.com/v1/users/wizzler",
      "id" : "wizzler",
      "type" : "user",
      "uri" : "spotify:user:wizzler"
    },
    "public" : true,
    "snapshot_id" : "LO0O/RGsDLEgeDC3xVR4HisMNsDqoPLE8QBRqllyvevTJ09tFWIUbjrYoEJbUhCa",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/users/wizzler/playlists/3FJd21jWvCjGCLx7eKrext/tracks",
      "total" : 33
    },
    "type" : "playlist",
    "uri" : "spotify:user:wizzler:playlist:3FJd21jWvCjGCLx7eKrext"
  } ],
  "limit" : 2,
  "next" : "https://api.spotify.com/v1/users/wizzler/playlists?offset=2&limit=2",
  "offset" : 0,
  "previous" : null,
  "total" : 7
};




/**
 * Get a playlist
 * 
 * GET /v1/users/{user_id}/playlists/{playlist_id}
 * https://developer.spotify.com/web-api/get-playlist/
 */
const playlist : SpotifyApi.SinglePlaylistResponse = {
  "collaborative" : false,
  "description" : null,
  "external_urls" : {
    "spotify" : "http://open.spotify.com/user/physicaltunes/playlist/0r6srTg2RFfBWba9WZ6Dlq"
  },
  "followers" : {
    "href" : null,
    "total" : 0
  },
  "href" : "https://api.spotify.com/v1/users/physicaltunes/playlists/0r6srTg2RFfBWba9WZ6Dlq",
  "id" : "0r6srTg2RFfBWba9WZ6Dlq",
  "images" : [ {
    "height" : 640,
    "url" : "https://i.scdn.co/image/4adbb659aac44f3eb198e0d7adb85dcf3faf2578",
    "width" : 640
  } ],
  "name" : "Grundtræning 2svxw",
  "owner" : {
    "external_urls" : {
      "spotify" : "http://open.spotify.com/user/physicaltunes"
    },
    "href" : "https://api.spotify.com/v1/users/physicaltunes",
    "id" : "physicaltunes",
    "type" : "user",
    "uri" : "spotify:user:physicaltunes"
  },
  "public" : true,
  "snapshot_id" : "Cy9RoIj+cxQzYP1IYy/QX3DT07he1nKjjk/R1LoR0FwVO9NErLfzJofaJzQYb2kq",
  "tracks" : {
    "href" : "https://api.spotify.com/v1/users/physicaltunes/playlists/0r6srTg2RFfBWba9WZ6Dlq/tracks?offset=0&limit=100",
    "items" : [ {
      "added_at" : "2015-10-05T06:04:05Z",
      "added_by" : {
        "external_urls" : {
          "spotify" : "http://open.spotify.com/user/physicaltunes"
        },
        "href" : "https://api.spotify.com/v1/users/physicaltunes",
        "id" : "physicaltunes",
        "type" : "user",
        "uri" : "spotify:user:physicaltunes"
      },
      "is_local" : false,
      "track" : {
        "album" : {
          "album_type" : "album",
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/063f8Ej8rLVTz9KkjQKEMa"
          },
          "href" : "https://api.spotify.com/v1/albums/063f8Ej8rLVTz9KkjQKEMa",
          "id" : "063f8Ej8rLVTz9KkjQKEMa",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/4adbb659aac44f3eb198e0d7adb85dcf3faf2578",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/42cda2065e164df3f923737f3f40b0a26c6b6bd5",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/6fdee9084e91faaa23bbf5880ad3cf5988aea438",
            "width" : 64
          } ],
          "name" : "Ambient 1/Music For Airports",
          "type" : "album",
          "uri" : "spotify:album:063f8Ej8rLVTz9KkjQKEMa"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7MSUfLeTdDEoZiJPDSBXgi"
          },
          "href" : "https://api.spotify.com/v1/artists/7MSUfLeTdDEoZiJPDSBXgi",
          "id" : "7MSUfLeTdDEoZiJPDSBXgi",
          "name" : "Brian Eno",
          "type" : "artist",
          "uri" : "spotify:artist:7MSUfLeTdDEoZiJPDSBXgi"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 1041520,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "GBAAA0400426"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3bCmDqflFBHijgJfvtqev5"
        },
        "href" : "https://api.spotify.com/v1/tracks/3bCmDqflFBHijgJfvtqev5",
        "id" : "3bCmDqflFBHijgJfvtqev5",
        "name" : "1/1 - 2004 Digital Remaster",
        "popularity" : 58,
        "preview_url" : "https://p.scdn.co/mp3-preview/b7cd7208aa6c68607b492c5298234cbe8b86c39d",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:3bCmDqflFBHijgJfvtqev5"
      }
    }, {
      "added_at" : "2015-10-05T06:05:23Z",
      "added_by" : {
        "external_urls" : {
          "spotify" : "http://open.spotify.com/user/physicaltunes"
        },
        "href" : "https://api.spotify.com/v1/users/physicaltunes",
        "id" : "physicaltunes",
        "type" : "user",
        "uri" : "spotify:user:physicaltunes"
      },
      "is_local" : false,
      "track" : {
        "album" : {
          "album_type" : "album",
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LI", "LU", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3LXNSUpx48PQxUn2StRqfu"
          },
          "href" : "https://api.spotify.com/v1/albums/3LXNSUpx48PQxUn2StRqfu",
          "id" : "3LXNSUpx48PQxUn2StRqfu",
          "images" : [ {
            "height" : 575,
            "url" : "https://i.scdn.co/image/b455d0dba3b95e1a2550d293e6e6443dc68c7a76",
            "width" : 640
          }, {
            "height" : 270,
            "url" : "https://i.scdn.co/image/5da3b3f3d5ac24aaaf2e4c9d7042d5091f6fef2e",
            "width" : 300
          }, {
            "height" : 58,
            "url" : "https://i.scdn.co/image/ee18c4134b0979437f042ee7b3b4d4a78719bedc",
            "width" : 64
          } ],
          "name" : "The Very Best Of Little Richard",
          "type" : "album",
          "uri" : "spotify:album:3LXNSUpx48PQxUn2StRqfu"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4xls23Ye9WR9yy3yYMpAMm"
          },
          "href" : "https://api.spotify.com/v1/artists/4xls23Ye9WR9yy3yYMpAMm",
          "id" : "4xls23Ye9WR9yy3yYMpAMm",
          "name" : "Little Richard",
          "type" : "artist",
          "uri" : "spotify:artist:4xls23Ye9WR9yy3yYMpAMm"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LI", "LU", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW" ],
        "disc_number" : 1,
        "duration_ms" : 127386,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USC4R0817279"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1fMMRoalpb7E8m5FsAta2y"
        },
        "href" : "https://api.spotify.com/v1/tracks/1fMMRoalpb7E8m5FsAta2y",
        "id" : "1fMMRoalpb7E8m5FsAta2y",
        "name" : "Good Golly Miss Molly",
        "popularity" : 53,
        "preview_url" : "https://p.scdn.co/mp3-preview/e3dbf57f76595ec38b11a947fa770af3e63d9da9",
        "track_number" : 3,
        "type" : "track",
        "uri" : "spotify:track:1fMMRoalpb7E8m5FsAta2y"
      }
    }, {
      "added_at" : "2015-10-05T06:03:49Z",
      "added_by" : {
        "external_urls" : {
          "spotify" : "http://open.spotify.com/user/physicaltunes"
        },
        "href" : "https://api.spotify.com/v1/users/physicaltunes",
        "id" : "physicaltunes",
        "type" : "user",
        "uri" : "spotify:user:physicaltunes"
      },
      "is_local" : false,
      "track" : {
        "album" : {
          "album_type" : "album",
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/2Uc0HAF0Cj0LAgyzYZX5e3"
          },
          "href" : "https://api.spotify.com/v1/albums/2Uc0HAF0Cj0LAgyzYZX5e3",
          "id" : "2Uc0HAF0Cj0LAgyzYZX5e3",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/43660a1f9fd70e3463a782e5f7948a54f4e4cc99",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/517be4be20d34be9a9b27e1ff72d974a3ad86238",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/427ac24b200fb7c6ae2a9d62ea499309702d8675",
            "width" : 64
          } ],
          "name" : "The Miseducation of Lauryn Hill",
          "type" : "album",
          "uri" : "spotify:album:2Uc0HAF0Cj0LAgyzYZX5e3"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2Mu5NfyYm8n5iTomuKAEHl"
          },
          "href" : "https://api.spotify.com/v1/artists/2Mu5NfyYm8n5iTomuKAEHl",
          "id" : "2Mu5NfyYm8n5iTomuKAEHl",
          "name" : "Ms. Lauryn Hill",
          "type" : "artist",
          "uri" : "spotify:artist:2Mu5NfyYm8n5iTomuKAEHl"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/336vr2M3Va0FjyvB55lJEd"
          },
          "href" : "https://api.spotify.com/v1/artists/336vr2M3Va0FjyvB55lJEd",
          "id" : "336vr2M3Va0FjyvB55lJEd",
          "name" : "D'Angelo",
          "type" : "artist",
          "uri" : "spotify:artist:336vr2M3Va0FjyvB55lJEd"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 350533,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USSM19803112"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3xhXKRGahWzcXF8rD5gUvd"
        },
        "href" : "https://api.spotify.com/v1/tracks/3xhXKRGahWzcXF8rD5gUvd",
        "id" : "3xhXKRGahWzcXF8rD5gUvd",
        "name" : "Nothing Even Matters",
        "popularity" : 62,
        "preview_url" : "https://p.scdn.co/mp3-preview/1911854c887c31b05e3167ca18182da1838ce1ed",
        "track_number" : 12,
        "type" : "track",
        "uri" : "spotify:track:3xhXKRGahWzcXF8rD5gUvd"
      }
    } ],
    "limit" : 100,
    "next" : null,
    "offset" : 0,
    "previous" : null,
    "total" : 3
  },
  "type" : "playlist",
  "uri" : "spotify:user:physicaltunes:playlist:0r6srTg2RFfBWba9WZ6Dlq"
};




/**
 * Get a playlist's tracks
 * 
 * GET /v1/users/{user_id}/playlists/{playlist_id}/tracks
 * https://developer.spotify.com/web-api/get-playlists-tracks/
 */
const playlistTracks : SpotifyApi.PlaylistTrackResponse = {
  "href" : "https://api.spotify.com/v1/users/spotify_espa%C3%B1a/playlists/21THa8j9TaSGuXYNBU5tsC/tracks?offset=0&limit=3",
  "items" : [ {
    "added_at" : "2015-12-09T23:12:56Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify_espa%C3%B1a"
      },
      "href" : "https://api.spotify.com/v1/users/spotify_espa%C3%B1a",
      "id" : "spotify_españa",
      "type" : "user",
      "uri" : "spotify:user:spotify_espa%C3%B1a"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/26vwjM6FkX2nEx9I0FKmih"
        },
        "href" : "https://api.spotify.com/v1/albums/26vwjM6FkX2nEx9I0FKmih",
        "id" : "26vwjM6FkX2nEx9I0FKmih",
        "images" : [ {
          "height" : 543,
          "url" : "https://i.scdn.co/image/e7fda36ee273b819e4aa12dd1d362c04fe1ec087",
          "width" : 640
        }, {
          "height" : 255,
          "url" : "https://i.scdn.co/image/d7347a32de62dcb1bcac5fa4d0ad9d1d5c7e688e",
          "width" : 300
        }, {
          "height" : 54,
          "url" : "https://i.scdn.co/image/bfb8f8395b8983013dea49d1f18563d4f22476ce",
          "width" : 64
        } ],
        "name" : "Beautiful Liar",
        "type" : "album",
        "uri" : "spotify:album:26vwjM6FkX2nEx9I0FKmih"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m"
        },
        "href" : "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m",
        "id" : "6vWDO969PvNqNYHIOW5v0m",
        "name" : "Beyoncé",
        "type" : "artist",
        "uri" : "spotify:artist:6vWDO969PvNqNYHIOW5v0m"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
        },
        "href" : "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
        "id" : "0EmeFodog0BfCgMzAIvKQp",
        "name" : "Shakira",
        "type" : "artist",
        "uri" : "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 201520,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USSM10700448"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2P5cIXejqLpHDQeCHAbbBG"
      },
      "href" : "https://api.spotify.com/v1/tracks/2P5cIXejqLpHDQeCHAbbBG",
      "id" : "2P5cIXejqLpHDQeCHAbbBG",
      "name" : "Beautiful Liar - Main Version / Album Version",
      "popularity" : 58,
      "preview_url" : "https://p.scdn.co/mp3-preview/fe55d5e4879a799186e29d24a3c9ffb0c1f9d9ab",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:2P5cIXejqLpHDQeCHAbbBG"
    }
  }, {
    "added_at" : "2015-12-09T23:12:56Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify_espa%C3%B1a"
      },
      "href" : "https://api.spotify.com/v1/users/spotify_espa%C3%B1a",
      "id" : "spotify_españa",
      "type" : "user",
      "uri" : "spotify:user:spotify_espa%C3%B1a"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/33va5yaUhlioHypFUHhsck"
        },
        "href" : "https://api.spotify.com/v1/albums/33va5yaUhlioHypFUHhsck",
        "id" : "33va5yaUhlioHypFUHhsck",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/f104b4e08885330e5747047635127a965b748d4d",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/738aeecd73221be81a6277b9925b36ee078aa66d",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/f47c9a5a7eb92d86c9f1ad4bf599648cd3b76e8d",
          "width" : 64
        } ],
        "name" : "El Taxi Compilation - 16 Urban Latin Hits",
        "type" : "album",
        "uri" : "spotify:album:33va5yaUhlioHypFUHhsck"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1noWnd8QFQD9VLxWEeo4Zf"
        },
        "href" : "https://api.spotify.com/v1/artists/1noWnd8QFQD9VLxWEeo4Zf",
        "id" : "1noWnd8QFQD9VLxWEeo4Zf",
        "name" : "Don Miguelo",
        "type" : "artist",
        "uri" : "spotify:artist:1noWnd8QFQD9VLxWEeo4Zf"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
        },
        "href" : "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
        "id" : "0TnOYISbd1XYRBk9myaseg",
        "name" : "Pitbull",
        "type" : "artist",
        "uri" : "spotify:artist:0TnOYISbd1XYRBk9myaseg"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 262253,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "ITF251400144"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6toFnL1smMF8zxBpp8GHYE"
      },
      "href" : "https://api.spotify.com/v1/tracks/6toFnL1smMF8zxBpp8GHYE",
      "id" : "6toFnL1smMF8zxBpp8GHYE",
      "name" : "Como Yo Le Doy",
      "popularity" : 53,
      "preview_url" : "https://p.scdn.co/mp3-preview/6482bab5aa82742ad0e374c3660230c15a35e397",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:6toFnL1smMF8zxBpp8GHYE"
    }
  }, {
    "added_at" : "2015-12-09T23:12:56Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify_espa%C3%B1a"
      },
      "href" : "https://api.spotify.com/v1/users/spotify_espa%C3%B1a",
      "id" : "spotify_españa",
      "type" : "user",
      "uri" : "spotify:user:spotify_espa%C3%B1a"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6GY8rrxuEzSJI08F0rfigi"
        },
        "href" : "https://api.spotify.com/v1/albums/6GY8rrxuEzSJI08F0rfigi",
        "id" : "6GY8rrxuEzSJI08F0rfigi",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/6538912b146e0dd3a4d981801cc89216f1480648",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/01d1c656b0af77059ca0450c30380c80f761cc15",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/2774d8f8aab91ea59688c5461e7c6cc8fe38af22",
          "width" : 64
        } ],
        "name" : "Sorry (Latino Remix)",
        "type" : "album",
        "uri" : "spotify:album:6GY8rrxuEzSJI08F0rfigi"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
        },
        "href" : "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
        "id" : "1uNFoZAHBGtllmzznpCI3s",
        "name" : "Justin Bieber",
        "type" : "artist",
        "uri" : "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1vyhD5VmyZ7KMfW5gqLgo5"
        },
        "href" : "https://api.spotify.com/v1/artists/1vyhD5VmyZ7KMfW5gqLgo5",
        "id" : "1vyhD5VmyZ7KMfW5gqLgo5",
        "name" : "J Balvin",
        "type" : "artist",
        "uri" : "spotify:artist:1vyhD5VmyZ7KMfW5gqLgo5"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 219986,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUM71517619"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3grxgV6Ot8KqtysApjYLs1"
      },
      "href" : "https://api.spotify.com/v1/tracks/3grxgV6Ot8KqtysApjYLs1",
      "id" : "3grxgV6Ot8KqtysApjYLs1",
      "name" : "Sorry - Latino Remix",
      "popularity" : 80,
      "preview_url" : "https://p.scdn.co/mp3-preview/7ddedcc0486b4ba86bd8931f73f6cc67dabdf577",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:3grxgV6Ot8KqtysApjYLs1"
    }
  } ],
  "limit" : 3,
  "next" : "https://api.spotify.com/v1/users/spotify_espa%C3%B1a/playlists/21THa8j9TaSGuXYNBU5tsC/tracks?offset=3&limit=3",
  "offset" : 0,
  "previous" : null,
  "total" : 69
};




/**
 * Create a Playlist
 * 
 * POST /v1/users/{user_id}/playlists
 * https://developer.spotify.com/web-api/create-playlist/
 */
const newPlaylist : SpotifyApi.CreatePlaylistResponse = {
  "collaborative" : false,
  "description" : null,
  "external_urls" : {
    "spotify" : "http://open.spotify.com/user/physicaltunes/playlist/7tlEEvpdUKuXsS1EAHYKnD"
  },
  "followers" : {
    "href" : null,
    "total" : 0
  },
  "href" : "https://api.spotify.com/v1/users/physicaltunes/playlists/7tlEEvpdUKuXsS1EAHYKnD",
  "id" : "7tlEEvpdUKuXsS1EAHYKnD",
  "images" : [ ],
  "name" : "New Cool Playlist",
  "owner" : {
    "external_urls" : {
      "spotify" : "http://open.spotify.com/user/physicaltunes"
    },
    "href" : "https://api.spotify.com/v1/users/physicaltunes",
    "id" : "physicaltunes",
    "type" : "user",
    "uri" : "spotify:user:physicaltunes"
  },
  "public" : false,
  "snapshot_id" : "6ZasQLSA1dudU/rJlMKbTESXYRont3Bh8XwhSCGfUI3+bDjCXG8CWycbzWo4mxGu",
  "tracks" : {
    "href" : "https://api.spotify.com/v1/users/physicaltunes/playlists/7tlEEvpdUKuXsS1EAHYKnD/tracks",
    "items" : [ ],
    "limit" : 100,
    "next" : null,
    "offset" : 0,
    "previous" : null,
    "total" : 0
  },
  "type" : "playlist",
  "uri" : "spotify:user:physicaltunes:playlist:7tlEEvpdUKuXsS1EAHYKnD"
};




/**
 * Change a Playlist’s Details
 * 
 * PUT /v1/users/{user_id}/playlists/{playlist_id}
 * https://developer.spotify.com/web-api/change-playlist-details/
 */
const changePlaylistDetails : SpotifyApi.ChangePlaylistDetailsReponse = {};




/**
 * Add Tracks to a Playlist
 * 
 * POST /v1/users/{user_id}/playlists/{playlist_id}/tracks
 * https://developer.spotify.com/web-api/add-tracks-to-playlist/
 */
const addTracksToPlaylist : SpotifyApi.AddTracksToPlaylistResponse = {
  "snapshot_id" : "4qQeMTnHV5LCL9w/lI9Mlu5shi2pk+iiIm6VEpmKdMPCE6adhRNTG9SXflxh8DTt"
};




/**
 * Remove Tracks from a Playlist
 * 
 * DELETE /v1/users/{user_id}/playlists/{playlist_id}/tracks
 * https://developer.spotify.com/web-api/remove-tracks-playlist/
 */
const removeTracksFromPlaylist : SpotifyApi.RemoveTracksFromPlaylistResponse = {
  "snapshot_id" : "t3+4ZWOqedj+bmcHHu1HKNqYfIyYAfXKlSHHykvS4KAm7hoVhDoCpn+KIuFZebZp"
};




/**
 * Reorder a Playlist’s Tracks
 * 
 * PUT /v1/users/{user_id}/playlists/{playlist_id}/tracks
 * https://developer.spotify.com/web-api/reorder-playlists-tracks/
 */
const reorderTracksInPlaylist : SpotifyApi.ReorderPlaylistTracksResponse = {
  "snapshot_id" : "t3+4ZWOqedj+bmcHHu1HKNqYfIyYAfXKlSHHykvS4KAm7hoVhDoCpn+KIuFZebZp"
};




/**
 * Replace a Playlist’s Tracks
 * 
 * PUT /v1/users/{user_id}/playlists/{playlist_id}/tracks
 * https://developer.spotify.com/web-api/replace-playlists-tracks/
 */
const replacePlaylistTracks : SpotifyApi.ReplacePlaylistTracksResponse = {};




/**
 * Check if Users Follow a Playlist
 * 
 * GET /v1/users/{user_id}/playlists/{playlist_id}/followers/contains
 * https://developer.spotify.com/web-api/check-user-following-playlist/
 */
const checkUserFollowsPlaylist : SpotifyApi.UsersFollowPlaylistReponse = [true, false, true];