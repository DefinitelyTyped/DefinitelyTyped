// Tests for the type definitions for The Spotify Web API (including changes March 29th 2016)
// Project: https://developer.spotify.com/web-api/
// Definitions by: Niels Kristian Hansen Skovmand <https://github.com/skovmand>
//                 Nils Måsén <https://github.com/piksel>
//                 Basti Ortiz <https://github.com/Some-Dood>
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
  "label": "Epic/Legacy",
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
    "label": "Universal Music Group",
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
    "label": "Universal-Island Records Ltd.",
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
    "label": "Universal Music Group",
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
  "href": "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?offset=0&limit=2&include_groups=appears_on&market=ES",
  "items": [
    {
      "album_group": "appears_on",
      "album_type": "album",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
          },
          "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
          "id": "0LyfQWJT6nXafLPZqxe9Of",
          "name": "Various Artists",
          "type": "artist",
          "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
        }
      ],
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "UY", "VN", "ZA"],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/43977e0YlJeMXG77uCCSMX"
      },
      "href": "https://api.spotify.com/v1/albums/43977e0YlJeMXG77uCCSMX",
      "id": "43977e0YlJeMXG77uCCSMX",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/0da79956d0440a55b20ea4e8e38877bce43275cd",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/29368267cc6b1eab2600e6e42485d3774621e7d4",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/779dd6d6a0e124e03a5143d2be729ee4bab3f15f",
          "width": 64
        }
      ],
      "name": "Shut Up Lets Dance (Vol. II)",
      "release_date": "2018-02-09",
      "release_date_precision": "day",
      "type": "album",
      "uri": "spotify:album:43977e0YlJeMXG77uCCSMX"
    },
    {
      "album_group": "appears_on",
      "album_type": "compilation",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
          },
          "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
          "id": "0LyfQWJT6nXafLPZqxe9Of",
          "name": "Various Artists",
          "type": "artist",
          "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
        }
      ],
      "available_markets": ["AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN", "ZA"],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/189ngoT3WxR5mZSYkAGOLF"
      },
      "href": "https://api.spotify.com/v1/albums/189ngoT3WxR5mZSYkAGOLF",
      "id": "189ngoT3WxR5mZSYkAGOLF",
      "images": [
        {
          "height": 600,
          "url": "https://i.scdn.co/image/42f4dbe7e54d52efa14f058fab74d8a0505ef26d",
          "width": 600
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/b221fb6d689f84f8e09b493776520194a6f4ef88",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/0fc4a3cb2ee5b14fdefeb8f20afd84b7fbae7707",
          "width": 64
        }
      ],
      "name": "Classic Club Monsters (25 Floor Killers)",
      "release_date": "2018-02-02",
      "release_date_precision": "day",
      "type": "album",
      "uri": "spotify:album:189ngoT3WxR5mZSYkAGOLF"
    }
  ],
  "limit": 2,
  "next": "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?offset=2&limit=2&include_groups=appears_on&market=ES",
  "offset": 0,
  "previous": null,
  "total": 308
};



/**
 * Get an Artist’s Top Tracks
 * 
 * GET /v1/artists/{id}/top-tracks
 * https://developer.spotify.com/web-api/get-artists-top-tracks/
 */
const getArtistsTopTracks : SpotifyApi.ArtistsTopTracksResponse = {
  "tracks": [ {
    "album" : {
      "album_type" : "album",
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
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/7xe8VI48TxUpU1IIo0RfGi"
      },
      "href" : "https://api.spotify.com/v1/albums/7xe8VI48TxUpU1IIo0RfGi",
      "id" : "7xe8VI48TxUpU1IIo0RfGi",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/4295b5ff74d4f944367144acbe616b6f62d20b17",
        "width" : 640
      }, { 
        "height" : 300,
        "url" : "https://i.scdn.co/image/203104e5843248c700b078f391d4bc759c5d7f47",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/0c0a172373b0211c590b241270d05b70889075a1",
        "width" : 64
      } ],
      "name" : "Blue Hawaii",
      "release_date" : "1961-11-22",
      "release_date_precision" : "day",
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
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
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
      "description": "",
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
      "description": "",
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
  "albums": {
    "href": "https://api.spotify.com/v1/browse/new-releases?country=SE&offset=0&limit=3",
    "items": [
      {
        "album_type": "single",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4IWBUUAFIplrNtaOHcJPRM"
            },
            "href": "https://api.spotify.com/v1/artists/4IWBUUAFIplrNtaOHcJPRM",
            "id": "4IWBUUAFIplrNtaOHcJPRM",
            "name": "James Arthur",
            "type": "artist",
            "uri": "spotify:artist:4IWBUUAFIplrNtaOHcJPRM"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/0EW257HwkJ1CblYgM9GIAY"
        },
        "href": "https://api.spotify.com/v1/albums/0EW257HwkJ1CblYgM9GIAY",
        "id": "0EW257HwkJ1CblYgM9GIAY",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/e9c6b8d204db33481509a7c7328c595a3626a7d0",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/9b4294513409d4b392738aadb35dfbd7e6347010",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/69af014e2ef6be5801b1cb5ee3efcccb40a18169",
            "width": 64
          }
        ],
        "name": "You (feat. Travis Barker)",
        "release_date": "2019-10-11",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:0EW257HwkJ1CblYgM9GIAY"
      },
      {
        "album_type": "single",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3"
            },
            "href": "https://api.spotify.com/v1/artists/6KImCVD70vtIoJWnq6nGn3",
            "id": "6KImCVD70vtIoJWnq6nGn3",
            "name": "Harry Styles",
            "type": "artist",
            "uri": "spotify:artist:6KImCVD70vtIoJWnq6nGn3"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/4Aag1alBrdk2TFnATVmn8D"
        },
        "href": "https://api.spotify.com/v1/albums/4Aag1alBrdk2TFnATVmn8D",
        "id": "4Aag1alBrdk2TFnATVmn8D",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/6cbebf96c1bfe1e0893dc8c8c04085b134f87ce4",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/f5923dae17a9e75481caa2744f06ec1fd5c0a9d2",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/3b36a0c22d348a4b6d719805b9102d7f0b5ba228",
            "width": 64
          }
        ],
        "name": "Lights Up",
        "release_date": "2019-10-11",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:4Aag1alBrdk2TFnATVmn8D"
      },
      {
        "album_type": "single",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0x3PXj1WnuW7YsBxQK57xM"
            },
            "href": "https://api.spotify.com/v1/artists/0x3PXj1WnuW7YsBxQK57xM",
            "id": "0x3PXj1WnuW7YsBxQK57xM",
            "name": "Ruben",
            "type": "artist",
            "uri": "spotify:artist:0x3PXj1WnuW7YsBxQK57xM"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/4uEX8XMeZ0sNk5hHKaVS0X"
        },
        "href": "https://api.spotify.com/v1/albums/4uEX8XMeZ0sNk5hHKaVS0X",
        "id": "4uEX8XMeZ0sNk5hHKaVS0X",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/0d033dba68944e0c63e05854b32e949ff8a0c211",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/2fa5e250369c817a1d15c2cf7dce478fdcb055f0",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/3f26c2e53d7a4efdc233be967a6923c60099c7a9",
            "width": 64
          }
        ],
        "name": "So High",
        "release_date": "2019-10-11",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:4uEX8XMeZ0sNk5hHKaVS0X"
      }
    ],
    "limit": 3,
    "next": "https://api.spotify.com/v1/browse/new-releases?country=SE&offset=3&limit=3",
    "offset": 0,
    "previous": null,
    "total": 100
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
      "description": "",
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
      "description": "",
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
  "href": "https://api.spotify.com/v1/me/tracks?offset=0&limit=5",
  "items": [
    {
      "added_at": "2019-09-24T11:43:39Z",
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5FKchcZpQOkqFvXBj1aCvb"
              },
              "href": "https://api.spotify.com/v1/artists/5FKchcZpQOkqFvXBj1aCvb",
              "id": "5FKchcZpQOkqFvXBj1aCvb",
              "name": "Excision",
              "type": "artist",
              "uri": "spotify:artist:5FKchcZpQOkqFvXBj1aCvb"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/45eNHdiiabvmbp4erw26rg"
              },
              "href": "https://api.spotify.com/v1/artists/45eNHdiiabvmbp4erw26rg",
              "id": "45eNHdiiabvmbp4erw26rg",
              "name": "ILLENIUM",
              "type": "artist",
              "uri": "spotify:artist:45eNHdiiabvmbp4erw26rg"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1DCg2NhX15z5fOKfMwXMnw"
          },
          "href": "https://api.spotify.com/v1/albums/1DCg2NhX15z5fOKfMwXMnw",
          "id": "1DCg2NhX15z5fOKfMwXMnw",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737f1485281a210cedaeab23b6",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027f1485281a210cedaeab23b6",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517f1485281a210cedaeab23b6",
              "width": 64
            }
          ],
          "name": "Gold (Stupid Love)",
          "release_date": "2018-07-17",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:1DCg2NhX15z5fOKfMwXMnw"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5FKchcZpQOkqFvXBj1aCvb"
            },
            "href": "https://api.spotify.com/v1/artists/5FKchcZpQOkqFvXBj1aCvb",
            "id": "5FKchcZpQOkqFvXBj1aCvb",
            "name": "Excision",
            "type": "artist",
            "uri": "spotify:artist:5FKchcZpQOkqFvXBj1aCvb"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/45eNHdiiabvmbp4erw26rg"
            },
            "href": "https://api.spotify.com/v1/artists/45eNHdiiabvmbp4erw26rg",
            "id": "45eNHdiiabvmbp4erw26rg",
            "name": "ILLENIUM",
            "type": "artist",
            "uri": "spotify:artist:45eNHdiiabvmbp4erw26rg"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2D03NzGIqn32zlCG1DViBu"
            },
            "href": "https://api.spotify.com/v1/artists/2D03NzGIqn32zlCG1DViBu",
            "id": "2D03NzGIqn32zlCG1DViBu",
            "name": "Shallows",
            "type": "artist",
            "uri": "spotify:artist:2D03NzGIqn32zlCG1DViBu"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 295890,
        "explicit": false,
        "external_ids": {
          "isrc": "NLRD51831603"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5ZzjNL4J31lqU853Un7T3f"
        },
        "href": "https://api.spotify.com/v1/tracks/5ZzjNL4J31lqU853Un7T3f",
        "id": "5ZzjNL4J31lqU853Un7T3f",
        "name": "Gold (Stupid Love)",
        "popularity": 60,
        "preview_url": "https://p.scdn.co/mp3-preview/499f1ca21fd7213c319d7958323259aff014b7d3?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5ZzjNL4J31lqU853Un7T3f"
      }
    },
    {
      "added_at": "2018-10-11T17:00:36Z",
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
              },
              "href": "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU",
              "id": "4gzpq5DPGxSnKTe4SA8HAU",
              "name": "Coldplay",
              "type": "artist",
              "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/573eP6oKtAJDqnpco7Fn9c"
          },
          "href": "https://api.spotify.com/v1/albums/573eP6oKtAJDqnpco7Fn9c",
          "id": "573eP6oKtAJDqnpco7Fn9c",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273df92aae8613a060788c222e6",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02df92aae8613a060788c222e6",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851df92aae8613a060788c222e6",
              "width": 64
            }
          ],
          "name": "Live from Spotify London",
          "release_date": "2016-12-16",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:573eP6oKtAJDqnpco7Fn9c"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
            },
            "href": "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU",
            "id": "4gzpq5DPGxSnKTe4SA8HAU",
            "name": "Coldplay",
            "type": "artist",
            "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 258613,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAYE1601838"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2XiSB3m4WSkxD3xIUrYHfV"
        },
        "href": "https://api.spotify.com/v1/tracks/2XiSB3m4WSkxD3xIUrYHfV",
        "id": "2XiSB3m4WSkxD3xIUrYHfV",
        "name": "Adventure of a Lifetime - Live from Spotify London",
        "popularity": 62,
        "preview_url": "https://p.scdn.co/mp3-preview/d17e6e8b0df9ad968620b2346993169ca8aca074?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:2XiSB3m4WSkxD3xIUrYHfV"
      }
    },
    {
      "added_at": "2018-10-11T17:00:10Z",
      "track": {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
              },
              "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
              "id": "53XhwfbYqKCa1cC15pYq2q",
              "name": "Imagine Dragons",
              "type": "artist",
              "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
            }
          ],
          "available_markets": [],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5GlPAy2PRJW06GVFhKwGTl"
          },
          "href": "https://api.spotify.com/v1/albums/5GlPAy2PRJW06GVFhKwGTl",
          "id": "5GlPAy2PRJW06GVFhKwGTl",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737956bd9a3d7a15e4c2e37cc6",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027956bd9a3d7a15e4c2e37cc6",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517956bd9a3d7a15e4c2e37cc6",
              "width": 64
            }
          ],
          "name": "Evolve",
          "release_date": "2017-06-23",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:5GlPAy2PRJW06GVFhKwGTl"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
            },
            "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
            "id": "53XhwfbYqKCa1cC15pYq2q",
            "name": "Imagine Dragons",
            "type": "artist",
            "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
          }
        ],
        "available_markets": [],
        "disc_number": 1,
        "duration_ms": 187146,
        "explicit": false,
        "external_ids": {
          "isrc": "USUM71704167"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0tKcYR2II1VCQWT79i5NrW"
        },
        "href": "https://api.spotify.com/v1/tracks/0tKcYR2II1VCQWT79i5NrW",
        "id": "0tKcYR2II1VCQWT79i5NrW",
        "name": "Thunder",
        "popularity": 25,
        "preview_url": null,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:0tKcYR2II1VCQWT79i5NrW"
      }
    },
    {
      "added_at": "2018-10-11T16:59:45Z",
      "track": {
        "album": {
          "album_type": "compilation",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
              },
              "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              "id": "0LyfQWJT6nXafLPZqxe9Of",
              "name": "Various Artists",
              "type": "artist",
              "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
            }
          ],
          "available_markets": [],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1sZqT6BpNJ2Lh69dYfZwka"
          },
          "href": "https://api.spotify.com/v1/albums/1sZqT6BpNJ2Lh69dYfZwka",
          "id": "1sZqT6BpNJ2Lh69dYfZwka",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2732b0e4154ac55acc4b2f77b5a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e022b0e4154ac55acc4b2f77b5a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048512b0e4154ac55acc4b2f77b5a",
              "width": 64
            }
          ],
          "name": "Pietà L'E' Morta - Canti della resistenza italiana 1",
          "release_date": "1996-01-01",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:1sZqT6BpNJ2Lh69dYfZwka"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1F1U8ssjF8uD2OjRoSssWO"
            },
            "href": "https://api.spotify.com/v1/artists/1F1U8ssjF8uD2OjRoSssWO",
            "id": "1F1U8ssjF8uD2OjRoSssWO",
            "name": "Interpreti dello spettacolo \"Bella Ciao\"",
            "type": "artist",
            "uri": "spotify:artist:1F1U8ssjF8uD2OjRoSssWO"
          }
        ],
        "available_markets": [],
        "disc_number": 1,
        "duration_ms": 96400,
        "explicit": false,
        "external_ids": {
          "isrc": "ITOOJ1300228"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0EayXisPHaulRoFgazbi0A"
        },
        "href": "https://api.spotify.com/v1/tracks/0EayXisPHaulRoFgazbi0A",
        "id": "0EayXisPHaulRoFgazbi0A",
        "name": "Bella Ciao",
        "popularity": 12,
        "preview_url": null,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:0EayXisPHaulRoFgazbi0A"
      }
    },
    {
      "added_at": "2018-10-11T16:59:09Z",
      "track": {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
              },
              "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
              "id": "53XhwfbYqKCa1cC15pYq2q",
              "name": "Imagine Dragons",
              "type": "artist",
              "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/33pt9HBdGlAbRGBHQgsZsU"
          },
          "href": "https://api.spotify.com/v1/albums/33pt9HBdGlAbRGBHQgsZsU",
          "id": "33pt9HBdGlAbRGBHQgsZsU",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/fe34c3cd4189357cb95f7e027ee3eb0f6057a8ce",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/b7dd9a6acef8183c090e705e4572f5bdbef3e31c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/277e5a475257290567369ed7276dbf027d90c458",
              "width": 64
            }
          ],
          "name": "Evolve",
          "release_date": "2017-06-23",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:33pt9HBdGlAbRGBHQgsZsU"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
            },
            "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
            "id": "53XhwfbYqKCa1cC15pYq2q",
            "name": "Imagine Dragons",
            "type": "artist",
            "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 204346,
        "explicit": false,
        "external_ids": {
          "isrc": "USUM71700626"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP"
        },
        "href": "https://api.spotify.com/v1/tracks/0pqnGHJpmpxLKifKRmU6WP",
        "id": "0pqnGHJpmpxLKifKRmU6WP",
        "name": "Believer",
        "popularity": 89,
        "preview_url": "https://p.scdn.co/mp3-preview/a14b2a107bcd428e168944adae846bbc05fabd09?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:0pqnGHJpmpxLKifKRmU6WP"
      }
    }
  ],
  "limit": 5,
  "next": null,
  "offset": 0,
  "previous": null,
  "total": 5
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
      "label": "Soblue Music Group AB",
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
  "items": [
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5FKchcZpQOkqFvXBj1aCvb"
            },
            "href": "https://api.spotify.com/v1/artists/5FKchcZpQOkqFvXBj1aCvb",
            "id": "5FKchcZpQOkqFvXBj1aCvb",
            "name": "Excision",
            "type": "artist",
            "uri": "spotify:artist:5FKchcZpQOkqFvXBj1aCvb"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/0CKyKbUSlqEeNPmRrrENEH"
        },
        "href": "https://api.spotify.com/v1/albums/0CKyKbUSlqEeNPmRrrENEH",
        "id": "0CKyKbUSlqEeNPmRrrENEH",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27325e900d32bfa6921d9160777",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0225e900d32bfa6921d9160777",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485125e900d32bfa6921d9160777",
            "width": 64
          }
        ],
        "name": "Apex",
        "release_date": "2018-08-14",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:0CKyKbUSlqEeNPmRrrENEH"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5FKchcZpQOkqFvXBj1aCvb"
          },
          "href": "https://api.spotify.com/v1/artists/5FKchcZpQOkqFvXBj1aCvb",
          "id": "5FKchcZpQOkqFvXBj1aCvb",
          "name": "Excision",
          "type": "artist",
          "uri": "spotify:artist:5FKchcZpQOkqFvXBj1aCvb"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/45eNHdiiabvmbp4erw26rg"
          },
          "href": "https://api.spotify.com/v1/artists/45eNHdiiabvmbp4erw26rg",
          "id": "45eNHdiiabvmbp4erw26rg",
          "name": "ILLENIUM",
          "type": "artist",
          "uri": "spotify:artist:45eNHdiiabvmbp4erw26rg"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2D03NzGIqn32zlCG1DViBu"
          },
          "href": "https://api.spotify.com/v1/artists/2D03NzGIqn32zlCG1DViBu",
          "id": "2D03NzGIqn32zlCG1DViBu",
          "name": "Shallows",
          "type": "artist",
          "uri": "spotify:artist:2D03NzGIqn32zlCG1DViBu"
        }
      ],
      "available_markets": [
        "AD",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IS",
        "IT",
        "JO",
        "JP",
        "KW",
        "LB",
        "LI",
        "LT",
        "LU",
        "LV",
        "MA",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PH",
        "PL",
        "PS",
        "PT",
        "PY",
        "QA",
        "RO",
        "SA",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TN",
        "TR",
        "TW",
        "UY",
        "VN",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 295890,
      "explicit": false,
      "external_ids": {
        "isrc": "NLRD51831603"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/7nEE5RihPZU6L5LZqDeEZD"
      },
      "href": "https://api.spotify.com/v1/tracks/7nEE5RihPZU6L5LZqDeEZD",
      "id": "7nEE5RihPZU6L5LZqDeEZD",
      "name": "Gold (Stupid Love)",
      "popularity": 48,
      "preview_url": "https://p.scdn.co/mp3-preview/499f1ca21fd7213c319d7958323259aff014b7d3?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 5,
      "type": "track",
      "uri": "spotify:track:7nEE5RihPZU6L5LZqDeEZD"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/58lV9VcRSjABbAbfWS6skp"
            },
            "href": "https://api.spotify.com/v1/artists/58lV9VcRSjABbAbfWS6skp",
            "id": "58lV9VcRSjABbAbfWS6skp",
            "name": "Bon Jovi",
            "type": "artist",
            "uri": "spotify:artist:58lV9VcRSjABbAbfWS6skp"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/3AkIHz2xtJzBOGopjuVWxR"
        },
        "href": "https://api.spotify.com/v1/albums/3AkIHz2xtJzBOGopjuVWxR",
        "id": "3AkIHz2xtJzBOGopjuVWxR",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/929908a9272a6b30a903c2c9e0266b7ee8850552",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/445e8fff91c2273ca8a71bdd69528691bbdf4c81",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/d267edf351ad10138c0dbfc262c402f4ea6dc3a3",
            "width": 64
          }
        ],
        "name": "Burning Bridges",
        "release_date": "2015-08-21",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:3AkIHz2xtJzBOGopjuVWxR"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/58lV9VcRSjABbAbfWS6skp"
          },
          "href": "https://api.spotify.com/v1/artists/58lV9VcRSjABbAbfWS6skp",
          "id": "58lV9VcRSjABbAbfWS6skp",
          "name": "Bon Jovi",
          "type": "artist",
          "uri": "spotify:artist:58lV9VcRSjABbAbfWS6skp"
        }
      ],
      "available_markets": [
        "AD",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IS",
        "IT",
        "JO",
        "KW",
        "LB",
        "LI",
        "LT",
        "LU",
        "LV",
        "MA",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PH",
        "PL",
        "PS",
        "PT",
        "PY",
        "QA",
        "RO",
        "SA",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TN",
        "TR",
        "TW",
        "US",
        "UY",
        "VN",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 197493,
      "explicit": false,
      "external_ids": {
        "isrc": "USUM71509824"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/0UseVSSLnJx2VvsSv5WIhX"
      },
      "href": "https://api.spotify.com/v1/tracks/0UseVSSLnJx2VvsSv5WIhX",
      "id": "0UseVSSLnJx2VvsSv5WIhX",
      "name": "We Don't Run",
      "popularity": 52,
      "preview_url": "https://p.scdn.co/mp3-preview/6bd560e5cc933c5e11d30d0045ed844f05d92372?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 2,
      "type": "track",
      "uri": "spotify:track:0UseVSSLnJx2VvsSv5WIhX"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/58lV9VcRSjABbAbfWS6skp"
            },
            "href": "https://api.spotify.com/v1/artists/58lV9VcRSjABbAbfWS6skp",
            "id": "58lV9VcRSjABbAbfWS6skp",
            "name": "Bon Jovi",
            "type": "artist",
            "uri": "spotify:artist:58lV9VcRSjABbAbfWS6skp"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/1UUOBzIHw0noiRGRpbt3sz"
        },
        "href": "https://api.spotify.com/v1/albums/1UUOBzIHw0noiRGRpbt3sz",
        "id": "1UUOBzIHw0noiRGRpbt3sz",
        "images": [
          {
            "height": 636,
            "url": "https://i.scdn.co/image/486839d5145916fb0b575e54ab2498fa89f086ba",
            "width": 640
          },
          {
            "height": 298,
            "url": "https://i.scdn.co/image/d6d60704d20c8296d956bb41456ab57650acc69d",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/b9150a06a3364eca48ef902ff678150aa8759ede",
            "width": 64
          }
        ],
        "name": "Bon Jovi",
        "release_date": "1984-01-01",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:1UUOBzIHw0noiRGRpbt3sz"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/58lV9VcRSjABbAbfWS6skp"
          },
          "href": "https://api.spotify.com/v1/artists/58lV9VcRSjABbAbfWS6skp",
          "id": "58lV9VcRSjABbAbfWS6skp",
          "name": "Bon Jovi",
          "type": "artist",
          "uri": "spotify:artist:58lV9VcRSjABbAbfWS6skp"
        }
      ],
      "available_markets": [
        "AD",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IS",
        "IT",
        "JO",
        "JP",
        "KW",
        "LB",
        "LI",
        "LT",
        "LU",
        "LV",
        "MA",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PH",
        "PL",
        "PS",
        "PT",
        "PY",
        "QA",
        "RO",
        "SA",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TN",
        "TR",
        "TW",
        "US",
        "UY",
        "VN",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 230666,
      "explicit": false,
      "external_ids": {
        "isrc": "USPR39402231"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/0X1sqQ652p1sceKM2nJlIJ"
      },
      "href": "https://api.spotify.com/v1/tracks/0X1sqQ652p1sceKM2nJlIJ",
      "id": "0X1sqQ652p1sceKM2nJlIJ",
      "name": "Runaway",
      "popularity": 71,
      "preview_url": "https://p.scdn.co/mp3-preview/138b37a3aba044a201d8009eb185fd3062f763f0?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:0X1sqQ652p1sceKM2nJlIJ"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
            },
            "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
            "id": "0LyfQWJT6nXafLPZqxe9Of",
            "name": "Various Artists",
            "type": "artist",
            "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
          }
        ],
        "available_markets": [
          "RO"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/4fNKXos9UDVdjf9bCwlize"
        },
        "href": "https://api.spotify.com/v1/albums/4fNKXos9UDVdjf9bCwlize",
        "id": "4fNKXos9UDVdjf9bCwlize",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273efdc7932ec30fd6fb470cbec",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02efdc7932ec30fd6fb470cbec",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851efdc7932ec30fd6fb470cbec",
            "width": 64
          }
        ],
        "name": "Nation 5 (Powered by Virgin Radio and Roton)",
        "release_date": "2017-10-16",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:4fNKXos9UDVdjf9bCwlize"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7f5Zgnp2spUuuzKplmRkt7"
          },
          "href": "https://api.spotify.com/v1/artists/7f5Zgnp2spUuuzKplmRkt7",
          "id": "7f5Zgnp2spUuuzKplmRkt7",
          "name": "Lost Frequencies",
          "type": "artist",
          "uri": "spotify:artist:7f5Zgnp2spUuuzKplmRkt7"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5TgQ66WuWkoQ2xYxaSTnVP"
          },
          "href": "https://api.spotify.com/v1/artists/5TgQ66WuWkoQ2xYxaSTnVP",
          "id": "5TgQ66WuWkoQ2xYxaSTnVP",
          "name": "Netsky",
          "type": "artist",
          "uri": "spotify:artist:5TgQ66WuWkoQ2xYxaSTnVP"
        }
      ],
      "available_markets": [
        "RO"
      ],
      "disc_number": 2,
      "duration_ms": 159273,
      "explicit": false,
      "external_ids": {
        "isrc": "NLF711705510"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1xEUpWv6oWv18Nel5zVXsr"
      },
      "href": "https://api.spotify.com/v1/tracks/1xEUpWv6oWv18Nel5zVXsr",
      "id": "1xEUpWv6oWv18Nel5zVXsr",
      "name": "Here with You",
      "popularity": 5,
      "preview_url": "https://p.scdn.co/mp3-preview/788070e9db4f2b4ab4d7cdd44562da56b9076195?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 3,
      "type": "track",
      "uri": "spotify:track:1xEUpWv6oWv18Nel5zVXsr"
    },
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH"
            },
            "href": "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
            "id": "7Ln80lUS6He07XvHI8qqHH",
            "name": "Arctic Monkeys",
            "type": "artist",
            "uri": "spotify:artist:7Ln80lUS6He07XvHI8qqHH"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu"
        },
        "href": "https://api.spotify.com/v1/albums/78bpIziExqiI9qztvNFlQu",
        "id": "78bpIziExqiI9qztvNFlQu",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514ae1c4c5c45aabe565499163",
            "width": 64
          }
        ],
        "name": "AM",
        "release_date": "2013-09-09",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:78bpIziExqiI9qztvNFlQu"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH"
          },
          "href": "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
          "id": "7Ln80lUS6He07XvHI8qqHH",
          "name": "Arctic Monkeys",
          "type": "artist",
          "uri": "spotify:artist:7Ln80lUS6He07XvHI8qqHH"
        }
      ],
      "available_markets": [
        "AD",
        "AE",
        "AR",
        "AT",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IS",
        "IT",
        "JO",
        "JP",
        "KW",
        "LB",
        "LI",
        "LT",
        "LU",
        "LV",
        "MA",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "OM",
        "PA",
        "PE",
        "PH",
        "PL",
        "PS",
        "PT",
        "PY",
        "QA",
        "RO",
        "SA",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TN",
        "TR",
        "TW",
        "US",
        "UY",
        "VN",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 272394,
      "explicit": false,
      "external_ids": {
        "isrc": "GBCEL1300362"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst"
      },
      "href": "https://api.spotify.com/v1/tracks/5FVd6KXrgO9B3JPmC8OPst",
      "id": "5FVd6KXrgO9B3JPmC8OPst",
      "name": "Do I Wanna Know?",
      "popularity": 83,
      "preview_url": "https://p.scdn.co/mp3-preview/73e00a0a59c897b16d0fe30df43f7aeb2997079d?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 1,
      "type": "track",
      "uri": "spotify:track:5FVd6KXrgO9B3JPmC8OPst"
    }
  ],
  "total": 50,
  "limit": 5,
  "offset": 0,
  "previous": null,
  "href": "https://api.spotify.com/v1/me/top/tracks?limit=5&offset=0",
  "next": "https://api.spotify.com/v1/me/top/tracks?limit=5&offset=5"
};




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
  "albums": {
    "href": "https://api.spotify.com/v1/search?query=album%3Aarrival+artist%3Aabba&type=album&market=RO&offset=0&limit=2",
    "items": [
      {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0LcJLqbBmaGUft1e9Mm8HV"
            },
            "href": "https://api.spotify.com/v1/artists/0LcJLqbBmaGUft1e9Mm8HV",
            "id": "0LcJLqbBmaGUft1e9Mm8HV",
            "name": "ABBA",
            "type": "artist",
            "uri": "spotify:artist:0LcJLqbBmaGUft1e9Mm8HV"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/1V6a99EbTTIegOhWoPxYI9"
        },
        "href": "https://api.spotify.com/v1/albums/1V6a99EbTTIegOhWoPxYI9",
        "id": "1V6a99EbTTIegOhWoPxYI9",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/3e032359f386909a3b6b62a4edda606bcd897b4f",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/454ca5b9ccb2b0b17dfb94d3d2d859f0d59a4e3c",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/61aef0c8335faeaf754f0912314387aec412f05f",
            "width": 64
          }
        ],
        "name": "Arrival",
        "release_date": "1976",
        "release_date_precision": "year",
        "type": "album",
        "uri": "spotify:album:1V6a99EbTTIegOhWoPxYI9"
      }
    ],
    "limit": 2,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 1
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
      "description": "",
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
      "description": "",
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
  "tracks": {
    "href": "https://api.spotify.com/v1/search?query=abba&type=track&market=US&offset=0&limit=2",
    "items": [
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0LcJLqbBmaGUft1e9Mm8HV"
              },
              "href": "https://api.spotify.com/v1/artists/0LcJLqbBmaGUft1e9Mm8HV",
              "id": "0LcJLqbBmaGUft1e9Mm8HV",
              "name": "ABBA",
              "type": "artist",
              "uri": "spotify:artist:0LcJLqbBmaGUft1e9Mm8HV"
            }
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1M4anG49aEs4YimBdj96Oy"
          },
          "href": "https://api.spotify.com/v1/albums/1M4anG49aEs4YimBdj96Oy",
          "id": "1M4anG49aEs4YimBdj96Oy",
          "images": [
            {
              "height": 575,
              "url": "https://i.scdn.co/image/7606898c34d84927cb3763459b30de1896e7ecd0",
              "width": 640
            },
            {
              "height": 270,
              "url": "https://i.scdn.co/image/e1713bac498e456de997482fa2df8f62a5f5a25d",
              "width": 300
            },
            {
              "height": 57,
              "url": "https://i.scdn.co/image/3e4fcd3bdc942c779cc18bf39b8666ce487bf475",
              "width": 63
            }
          ],
          "name": "Arrival",
          "release_date": "1976",
          "release_date_precision": "year",
          "type": "album",
          "uri": "spotify:album:1M4anG49aEs4YimBdj96Oy"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0LcJLqbBmaGUft1e9Mm8HV"
            },
            "href": "https://api.spotify.com/v1/artists/0LcJLqbBmaGUft1e9Mm8HV",
            "id": "0LcJLqbBmaGUft1e9Mm8HV",
            "name": "ABBA",
            "type": "artist",
            "uri": "spotify:artist:0LcJLqbBmaGUft1e9Mm8HV"
          }
        ],
        "disc_number": 1,
        "duration_ms": 230693,
        "explicit": false,
        "external_ids": {
          "isrc": "SEAYD7601020"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4NtUY5IGzHCaqfZemmAu56"
        },
        "href": "https://api.spotify.com/v1/tracks/4NtUY5IGzHCaqfZemmAu56",
        "id": "4NtUY5IGzHCaqfZemmAu56",
        "is_playable": true,
        "name": "Dancing Queen",
        "popularity": 74,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:4NtUY5IGzHCaqfZemmAu56"
      },
      {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0LcJLqbBmaGUft1e9Mm8HV"
              },
              "href": "https://api.spotify.com/v1/artists/0LcJLqbBmaGUft1e9Mm8HV",
              "id": "0LcJLqbBmaGUft1e9Mm8HV",
              "name": "ABBA",
              "type": "artist",
              "uri": "spotify:artist:0LcJLqbBmaGUft1e9Mm8HV"
            }
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5GwbPSgiTECzQiE6u7s0ZN"
          },
          "href": "https://api.spotify.com/v1/albums/5GwbPSgiTECzQiE6u7s0ZN",
          "id": "5GwbPSgiTECzQiE6u7s0ZN",
          "images": [
            {
              "height": 575,
              "url": "https://i.scdn.co/image/bcf257ae27c548c1668660ef362889ce8eb07010",
              "width": 640
            },
            {
              "height": 270,
              "url": "https://i.scdn.co/image/4ecb8320cf3eee6343ad758ace5c5521dd4cb32d",
              "width": 300
            },
            {
              "height": 58,
              "url": "https://i.scdn.co/image/79657d4b2437a1db6675925f4cd503cfa0660591",
              "width": 64
            }
          ],
          "name": "The Album",
          "release_date": "1977",
          "release_date_precision": "year",
          "type": "album",
          "uri": "spotify:album:5GwbPSgiTECzQiE6u7s0ZN"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0LcJLqbBmaGUft1e9Mm8HV"
            },
            "href": "https://api.spotify.com/v1/artists/0LcJLqbBmaGUft1e9Mm8HV",
            "id": "0LcJLqbBmaGUft1e9Mm8HV",
            "name": "ABBA",
            "type": "artist",
            "uri": "spotify:artist:0LcJLqbBmaGUft1e9Mm8HV"
          }
        ],
        "disc_number": 1,
        "duration_ms": 243933,
        "explicit": false,
        "external_ids": {
          "isrc": "SEAYD7702020"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6vQN2a9QSgWcm74KEZYfDL"
        },
        "href": "https://api.spotify.com/v1/tracks/6vQN2a9QSgWcm74KEZYfDL",
        "id": "6vQN2a9QSgWcm74KEZYfDL",
        "is_playable": true,
        "name": "Take A Chance On Me",
        "popularity": 64,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:6vQN2a9QSgWcm74KEZYfDL"
      }
    ],
    "limit": 2,
    "next": "https://api.spotify.com/v1/search?query=abba&type=track&market=US&offset=2&limit=2",
    "offset": 0,
    "previous": null,
    "total": 9544
  }
};



/**
 * Get a track
 * 
 * GET /v1/tracks/{id}
 * https://developer.spotify.com/web-api/get-track/
 */
const track : SpotifyApi.SingleTrackResponse = {
  "album": {
    "album_type": "album",
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
        },
        "href": "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
        "id": "0C0XlULifJtAgn6ZNCW2eu",
        "name": "The Killers",
        "type": "artist",
        "uri": "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
      }
    ],
    "available_markets": [
      "AD",
      "AE",
      "AR",
      "AT",
      "AU",
      "BE",
      "BG",
      "BH",
      "BO",
      "BR",
      "CH",
      "CL",
      "CO",
      "CR",
      "CY",
      "CZ",
      "DE",
      "DK",
      "DO",
      "DZ",
      "EC",
      "EE",
      "EG",
      "ES",
      "FI",
      "FR",
      "GB",
      "GR",
      "GT",
      "HK",
      "HN",
      "HU",
      "ID",
      "IE",
      "IL",
      "IN",
      "IS",
      "IT",
      "JO",
      "JP",
      "KW",
      "LB",
      "LI",
      "LT",
      "LU",
      "LV",
      "MA",
      "MC",
      "MT",
      "MX",
      "MY",
      "NI",
      "NL",
      "NO",
      "NZ",
      "OM",
      "PA",
      "PE",
      "PH",
      "PL",
      "PS",
      "PT",
      "PY",
      "QA",
      "RO",
      "SA",
      "SE",
      "SG",
      "SK",
      "SV",
      "TH",
      "TN",
      "TR",
      "TW",
      "UY",
      "VN",
      "ZA"
    ],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/4OHNH3sDzIxnmUADXzv2kT"
    },
    "href": "https://api.spotify.com/v1/albums/4OHNH3sDzIxnmUADXzv2kT",
    "id": "4OHNH3sDzIxnmUADXzv2kT",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/1ceb8b5a3db90cca4eec22ffe44a4a555698c165",
        "width": 629
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/6d2b4923fe2d0fe72567ae26d408c3a7f90e8dd3",
        "width": 295
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/9d06139b7deb37e980f8c51bc2a03570728693dd",
        "width": 63
      }
    ],
    "name": "Hot Fuss",
    "release_date": "2004-06-15",
    "release_date_precision": "day",
    "type": "album",
    "uri": "spotify:album:4OHNH3sDzIxnmUADXzv2kT"
  },
  "artists": [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
      },
      "href": "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
      "id": "0C0XlULifJtAgn6ZNCW2eu",
      "name": "The Killers",
      "type": "artist",
      "uri": "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
    }
  ],
  "available_markets": [
    "AD",
    "AE",
    "AR",
    "AT",
    "AU",
    "BE",
    "BG",
    "BH",
    "BO",
    "BR",
    "CH",
    "CL",
    "CO",
    "CR",
    "CY",
    "CZ",
    "DE",
    "DK",
    "DO",
    "DZ",
    "EC",
    "EE",
    "EG",
    "ES",
    "FI",
    "FR",
    "GB",
    "GR",
    "GT",
    "HK",
    "HN",
    "HU",
    "ID",
    "IE",
    "IL",
    "IN",
    "IS",
    "IT",
    "JO",
    "JP",
    "KW",
    "LB",
    "LI",
    "LT",
    "LU",
    "LV",
    "MA",
    "MC",
    "MT",
    "MX",
    "MY",
    "NI",
    "NL",
    "NO",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PH",
    "PL",
    "PS",
    "PT",
    "PY",
    "QA",
    "RO",
    "SA",
    "SE",
    "SG",
    "SK",
    "SV",
    "TH",
    "TN",
    "TR",
    "TW",
    "UY",
    "VN",
    "ZA"
  ],
  "disc_number": 1,
  "duration_ms": 222200,
  "explicit": false,
  "external_ids": {
    "isrc": "GBFFP0300052"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp"
  },
  "href": "https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp",
  "id": "3n3Ppam7vgaVa1iaRUc9Lp",
  "name": "Mr. Brightside",
  "popularity": 76,
  "preview_url": "https://p.scdn.co/mp3-preview/4839b070015ab7d6de9fec1756e1f3096d908fba?cid=774b29d4f13844c495f206cafdad9c86",
  "track_number": 2,
  "type": "track",
  "uri": "spotify:track:3n3Ppam7vgaVa1iaRUc9Lp"
};




/**
 * Get multiple tracks
 * 
 * GET /v1/tracks?ids={ids}
 * https://developer.spotify.com/web-api/get-several-tracks/
 */
const tracks : SpotifyApi.MultipleTracksResponse = {
  "tracks": [
    {
      "album": {
        "album_type": "album",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
            },
            "href": "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
            "id": "0C0XlULifJtAgn6ZNCW2eu",
            "name": "The Killers",
            "type": "artist",
            "uri": "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "UY",
          "VN",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/4OHNH3sDzIxnmUADXzv2kT"
        },
        "href": "https://api.spotify.com/v1/albums/4OHNH3sDzIxnmUADXzv2kT",
        "id": "4OHNH3sDzIxnmUADXzv2kT",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/1ceb8b5a3db90cca4eec22ffe44a4a555698c165",
            "width": 629
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/6d2b4923fe2d0fe72567ae26d408c3a7f90e8dd3",
            "width": 295
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/9d06139b7deb37e980f8c51bc2a03570728693dd",
            "width": 63
          }
        ],
        "name": "Hot Fuss",
        "release_date": "2004-06-15",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:4OHNH3sDzIxnmUADXzv2kT"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
          },
          "href": "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
          "id": "0C0XlULifJtAgn6ZNCW2eu",
          "name": "The Killers",
          "type": "artist",
          "uri": "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
        }
      ],
      "available_markets": [
        "AD",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IS",
        "IT",
        "JO",
        "JP",
        "KW",
        "LB",
        "LI",
        "LT",
        "LU",
        "LV",
        "MA",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PH",
        "PL",
        "PS",
        "PT",
        "PY",
        "QA",
        "RO",
        "SA",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TN",
        "TR",
        "TW",
        "UY",
        "VN",
        "ZA"
      ],
      "disc_number": 1,
      "duration_ms": 222200,
      "explicit": false,
      "external_ids": {
        "isrc": "GBFFP0300052"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp"
      },
      "href": "https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp",
      "id": "3n3Ppam7vgaVa1iaRUc9Lp",
      "name": "Mr. Brightside",
      "popularity": 76,
      "preview_url": "https://p.scdn.co/mp3-preview/4839b070015ab7d6de9fec1756e1f3096d908fba?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 2,
      "type": "track",
      "uri": "spotify:track:3n3Ppam7vgaVa1iaRUc9Lp"
    }
  ]
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
    "description": "",
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
  "collaborative": false,
  "description": "",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/0r6srTg2RFfBWba9WZ6Dlq"
  },
  "followers": {
    "href": null,
    "total": 0
  },
  "href": "https://api.spotify.com/v1/playlists/0r6srTg2RFfBWba9WZ6Dlq",
  "id": "0r6srTg2RFfBWba9WZ6Dlq",
  "images": [
    {
      "height": 640,
      "url": "https://i.scdn.co/image/ab67616d0000b27369530c204f1fc99c5b9fa7a4",
      "width": 640
    }
  ],
  "name": "Grundtræning 2svxw",
  "owner": {
    "display_name": "physicaltunes",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/physicaltunes"
    },
    "href": "https://api.spotify.com/v1/users/physicaltunes",
    "id": "physicaltunes",
    "type": "user",
    "uri": "spotify:user:physicaltunes"
  },
  "public": false,
  "snapshot_id": "MTEsYzhiYzFjNTU0MjVkNGE3Nzk0ZWYyYTNjZTczMjVjMTZjYTI1NjkyNg==",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/0r6srTg2RFfBWba9WZ6Dlq/tracks?offset=0&limit=100",
    "items": [
      {
        "added_at": "2015-10-05T06:04:05Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/physicaltunes"
          },
          "href": "https://api.spotify.com/v1/users/physicaltunes",
          "id": "physicaltunes",
          "type": "user",
          "uri": "spotify:user:physicaltunes"
        },
        "is_local": false,
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/7MSUfLeTdDEoZiJPDSBXgi"
                },
                "href": "https://api.spotify.com/v1/artists/7MSUfLeTdDEoZiJPDSBXgi",
                "id": "7MSUfLeTdDEoZiJPDSBXgi",
                "name": "Brian Eno",
                "type": "artist",
                "uri": "spotify:artist:7MSUfLeTdDEoZiJPDSBXgi"
              }
            ],
            "available_markets": [
              "AD",
              "AE",
              "AR",
              "AT",
              "AU",
              "BE",
              "BG",
              "BH",
              "BO",
              "BR",
              "CA",
              "CH",
              "CL",
              "CO",
              "CR",
              "CY",
              "CZ",
              "DE",
              "DK",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FR",
              "GB",
              "GR",
              "GT",
              "HK",
              "HN",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JO",
              "JP",
              "KW",
              "LB",
              "LI",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MT",
              "MX",
              "MY",
              "NI",
              "NL",
              "NO",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PH",
              "PL",
              "PS",
              "PT",
              "PY",
              "QA",
              "RO",
              "SA",
              "SE",
              "SG",
              "SK",
              "SV",
              "TH",
              "TN",
              "TR",
              "TW",
              "US",
              "UY",
              "VN",
              "ZA"
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/063f8Ej8rLVTz9KkjQKEMa"
            },
            "href": "https://api.spotify.com/v1/albums/063f8Ej8rLVTz9KkjQKEMa",
            "id": "063f8Ej8rLVTz9KkjQKEMa",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27369530c204f1fc99c5b9fa7a4",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0269530c204f1fc99c5b9fa7a4",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485169530c204f1fc99c5b9fa7a4",
                "width": 64
              }
            ],
            "name": "Ambient 1/Music For Airports",
            "release_date": "1978",
            "release_date_precision": "year",
            "type": "album",
            "uri": "spotify:album:063f8Ej8rLVTz9KkjQKEMa"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7MSUfLeTdDEoZiJPDSBXgi"
              },
              "href": "https://api.spotify.com/v1/artists/7MSUfLeTdDEoZiJPDSBXgi",
              "id": "7MSUfLeTdDEoZiJPDSBXgi",
              "name": "Brian Eno",
              "type": "artist",
              "uri": "spotify:artist:7MSUfLeTdDEoZiJPDSBXgi"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "disc_number": 1,
          "duration_ms": 1041520,
          "explicit": false,
          "external_ids": {
            "isrc": "GBAAA0400426"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3bCmDqflFBHijgJfvtqev5"
          },
          "href": "https://api.spotify.com/v1/tracks/3bCmDqflFBHijgJfvtqev5",
          "id": "3bCmDqflFBHijgJfvtqev5",
          "name": "1/1 - Remastered 2004",
          "popularity": 51,
          "preview_url": "https://p.scdn.co/mp3-preview/b7cd7208aa6c68607b492c5298234cbe8b86c39d?cid=774b29d4f13844c495f206cafdad9c86",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:3bCmDqflFBHijgJfvtqev5"
        }
      },
      {
        "added_at": "2015-10-05T06:05:23Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/physicaltunes"
          },
          "href": "https://api.spotify.com/v1/users/physicaltunes",
          "id": "physicaltunes",
          "type": "user",
          "uri": "spotify:user:physicaltunes"
        },
        "is_local": false,
        "track": {
          "album": {
            "album_type": "compilation",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4xls23Ye9WR9yy3yYMpAMm"
                },
                "href": "https://api.spotify.com/v1/artists/4xls23Ye9WR9yy3yYMpAMm",
                "id": "4xls23Ye9WR9yy3yYMpAMm",
                "name": "Little Richard",
                "type": "artist",
                "uri": "spotify:artist:4xls23Ye9WR9yy3yYMpAMm"
              }
            ],
            "available_markets": [],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/3LXNSUpx48PQxUn2StRqfu"
            },
            "href": "https://api.spotify.com/v1/albums/3LXNSUpx48PQxUn2StRqfu",
            "id": "3LXNSUpx48PQxUn2StRqfu",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2737d92de948b22c8201f4467c5",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e027d92de948b22c8201f4467c5",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048517d92de948b22c8201f4467c5",
                "width": 64
              }
            ],
            "name": "The Very Best Of Little Richard",
            "release_date": "2008-01-01",
            "release_date_precision": "day",
            "type": "album",
            "uri": "spotify:album:3LXNSUpx48PQxUn2StRqfu"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4xls23Ye9WR9yy3yYMpAMm"
              },
              "href": "https://api.spotify.com/v1/artists/4xls23Ye9WR9yy3yYMpAMm",
              "id": "4xls23Ye9WR9yy3yYMpAMm",
              "name": "Little Richard",
              "type": "artist",
              "uri": "spotify:artist:4xls23Ye9WR9yy3yYMpAMm"
            }
          ],
          "available_markets": [],
          "disc_number": 1,
          "duration_ms": 127386,
          "explicit": false,
          "external_ids": {
            "isrc": "USC4R0817279"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1fMMRoalpb7E8m5FsAta2y"
          },
          "href": "https://api.spotify.com/v1/tracks/1fMMRoalpb7E8m5FsAta2y",
          "id": "1fMMRoalpb7E8m5FsAta2y",
          "name": "Good Golly Miss Molly",
          "popularity": 11,
          "preview_url": null,
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:1fMMRoalpb7E8m5FsAta2y"
        }
      },
      {
        "added_at": "2015-10-05T06:03:49Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/physicaltunes"
          },
          "href": "https://api.spotify.com/v1/users/physicaltunes",
          "id": "physicaltunes",
          "type": "user",
          "uri": "spotify:user:physicaltunes"
        },
        "is_local": false,
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2Mu5NfyYm8n5iTomuKAEHl"
                },
                "href": "https://api.spotify.com/v1/artists/2Mu5NfyYm8n5iTomuKAEHl",
                "id": "2Mu5NfyYm8n5iTomuKAEHl",
                "name": "Ms. Lauryn Hill",
                "type": "artist",
                "uri": "spotify:artist:2Mu5NfyYm8n5iTomuKAEHl"
              }
            ],
            "available_markets": [],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/2Uc0HAF0Cj0LAgyzYZX5e3"
            },
            "href": "https://api.spotify.com/v1/albums/2Uc0HAF0Cj0LAgyzYZX5e3",
            "id": "2Uc0HAF0Cj0LAgyzYZX5e3",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2739196fafd1d6160480d3df68a",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e029196fafd1d6160480d3df68a",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048519196fafd1d6160480d3df68a",
                "width": 64
              }
            ],
            "name": "The Miseducation of Lauryn Hill",
            "release_date": "1998-08-25",
            "release_date_precision": "day",
            "type": "album",
            "uri": "spotify:album:2Uc0HAF0Cj0LAgyzYZX5e3"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2Mu5NfyYm8n5iTomuKAEHl"
              },
              "href": "https://api.spotify.com/v1/artists/2Mu5NfyYm8n5iTomuKAEHl",
              "id": "2Mu5NfyYm8n5iTomuKAEHl",
              "name": "Ms. Lauryn Hill",
              "type": "artist",
              "uri": "spotify:artist:2Mu5NfyYm8n5iTomuKAEHl"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/336vr2M3Va0FjyvB55lJEd"
              },
              "href": "https://api.spotify.com/v1/artists/336vr2M3Va0FjyvB55lJEd",
              "id": "336vr2M3Va0FjyvB55lJEd",
              "name": "D'Angelo",
              "type": "artist",
              "uri": "spotify:artist:336vr2M3Va0FjyvB55lJEd"
            }
          ],
          "available_markets": [],
          "disc_number": 1,
          "duration_ms": 350533,
          "explicit": false,
          "external_ids": {
            "isrc": "USSM19803112"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3xhXKRGahWzcXF8rD5gUvd"
          },
          "href": "https://api.spotify.com/v1/tracks/3xhXKRGahWzcXF8rD5gUvd",
          "id": "3xhXKRGahWzcXF8rD5gUvd",
          "name": "Nothing Even Matters",
          "popularity": 8,
          "preview_url": null,
          "track_number": 12,
          "type": "track",
          "uri": "spotify:track:3xhXKRGahWzcXF8rD5gUvd"
        }
      }
    ],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 3
  },
  "type": "playlist",
  "uri": "spotify:playlist:0r6srTg2RFfBWba9WZ6Dlq"
};




/**
 * Get a playlist's tracks
 * 
 * GET /v1/users/{user_id}/playlists/{playlist_id}/tracks
 * https://developer.spotify.com/web-api/get-playlists-tracks/
 */
const playlistTracks : SpotifyApi.PlaylistTrackResponse = {
  "href": "https://api.spotify.com/v1/playlists/4Zz17EgrAiVwjwOHQU2LDW/tracks?offset=0&limit=1",
  "items": [
    {
      "added_at": "2019-10-06T11:24:48Z",
      "added_by": {
        "external_urls": {
          "spotify": "https://open.spotify.com/user/31k5kqd5ec6o3k5tyaxgdpcgquju"
        },
        "href": "https://api.spotify.com/v1/users/31k5kqd5ec6o3k5tyaxgdpcgquju",
        "id": "31k5kqd5ec6o3k5tyaxgdpcgquju",
        "type": "user",
        "uri": "spotify:user:31k5kqd5ec6o3k5tyaxgdpcgquju"
      },
      "is_local": false,
      "track": {
        "album": {
          "album_type": "single",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7jVv8c5Fj3E9VhNjxT4snq"
              },
              "href": "https://api.spotify.com/v1/artists/7jVv8c5Fj3E9VhNjxT4snq",
              "id": "7jVv8c5Fj3E9VhNjxT4snq",
              "name": "Lil Nas X",
              "type": "artist",
              "uri": "spotify:artist:7jVv8c5Fj3E9VhNjxT4snq"
            }
          ],
          "available_markets": [],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6sC8l8bVvMckgES0c3VpCZ"
          },
          "href": "https://api.spotify.com/v1/albums/6sC8l8bVvMckgES0c3VpCZ",
          "id": "6sC8l8bVvMckgES0c3VpCZ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d792735868f17bae3b6cda31",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d792735868f17bae3b6cda31",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d792735868f17bae3b6cda31",
              "width": 64
            }
          ],
          "name": "Old Town Road",
          "release_date": "2018-12-17",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:6sC8l8bVvMckgES0c3VpCZ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7jVv8c5Fj3E9VhNjxT4snq"
            },
            "href": "https://api.spotify.com/v1/artists/7jVv8c5Fj3E9VhNjxT4snq",
            "id": "7jVv8c5Fj3E9VhNjxT4snq",
            "name": "Lil Nas X",
            "type": "artist",
            "uri": "spotify:artist:7jVv8c5Fj3E9VhNjxT4snq"
          }
        ],
        "available_markets": [],
        "disc_number": 1,
        "duration_ms": 113005,
        "explicit": true,
        "external_ids": {
          "isrc": "SE6A91836283"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2pMl9Sx4glsuk5ikZtFBtX"
        },
        "href": "https://api.spotify.com/v1/tracks/2pMl9Sx4glsuk5ikZtFBtX",
        "id": "2pMl9Sx4glsuk5ikZtFBtX",
        "name": "Old Town Road",
        "popularity": 20,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2pMl9Sx4glsuk5ikZtFBtX"
      }
    }
  ],
  "limit": 1,
  "next": "https://api.spotify.com/v1/playlists/4Zz17EgrAiVwjwOHQU2LDW/tracks?offset=1&limit=1",
  "offset": 0,
  "previous": null,
  "total": 6
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




/**
 * Get current user's recently played tracks
 * 
 * GET /v1/me/player/recently-played
 * https://developer.spotify.com/web-api/web-api-personalization-endpoints/get-recently-played/
 */
const getMyRecentlyPlayedTracks : SpotifyApi.UsersRecentlyPlayedTracksResponse = {
  "items": [
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
            },
            "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
            "id": "5INjqkS1o8h1imAzPqGZBb",
            "name": "Tame Impala",
            "type": "artist",
            "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
          }
        ],
        "available_markets": [
          "CA",
          "MX",
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 108546,
        "explicit": false,
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2gNfxysfBRfl9Lvi9T3v6R"
        },
        "href": "https://api.spotify.com/v1/tracks/2gNfxysfBRfl9Lvi9T3v6R",
        "id": "2gNfxysfBRfl9Lvi9T3v6R",
        "name": "Disciples",
        "preview_url": "https://p.scdn.co/mp3-preview/6023e5aac2123d098ce490488966b28838b14fa2",
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:2gNfxysfBRfl9Lvi9T3v6R"
      },
      "played_at": "2016-12-13T20:44:04.589Z",
      "context": {
        "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb",
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
        },
        "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
        "type": "artist"
      }
    },
    {
      "track": {
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
            },
            "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
            "id": "5INjqkS1o8h1imAzPqGZBb",
            "name": "Tame Impala",
            "type": "artist",
            "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
          }
        ],
        "available_markets": [
          "CA",
          "MX",
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 467586,
        "explicit": false,
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2X485T9Z5Ly0xyaghN73ed"
        },
        "href": "https://api.spotify.com/v1/tracks/2X485T9Z5Ly0xyaghN73ed",
        "id": "2X485T9Z5Ly0xyaghN73ed",
        "name": "Let It Happen",
        "preview_url": "https://p.scdn.co/mp3-preview/05dee1ad0d2a6fa4ad07fbd24ae49d58468e8194",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2X485T9Z5Ly0xyaghN73ed"
      },
      "played_at": "2016-12-13T20:42:17.016Z",
      "context": {
        "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb",
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
        },
        "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
        "type": "artist"
      }
    }
  ],
  "next": "https://api.spotify.com/v1/me/player/recently-played?before=1481661737016&limit=2",
  "cursors": {
    "after": "1481661844589",
    "before": "1481661737016"
  },
  "limit": 2,
  "href": "https://api.spotify.com/v1/me/player/recently-played?limit=2"
};
