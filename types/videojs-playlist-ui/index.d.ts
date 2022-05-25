// Type definitions for videojs-playlist-ui 4.0
// Project: https://github.com/brightcove/videojs-playlist-ui
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import videojs from 'video.js';

export as namespace videojsPlaylistUi;

declare module 'video.js' {
    interface VideoJsPlayer {
        playlistUi: typeof videojsPlaylistUi;
    }
}

declare namespace videojsPlaylistUi {
    interface Options extends videojs.ComponentOptions {
        /**
         * @default 'vjs-playlist'
         */
        className?: string | undefined;
        /**
         * @default false
         */
        playOnSelect?: boolean | undefined;
    }
}

declare const videojsPlaylistUi: {
    VERSION: '4.0.0';
    (this: videojs.Player, options?: videojsPlaylistUi.Options): void;
};
export = videojsPlaylistUi;
