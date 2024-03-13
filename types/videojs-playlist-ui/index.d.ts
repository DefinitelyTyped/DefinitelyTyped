// eslint-disable-next-line @definitelytyped/no-import-default-of-export-equals
import videojs from "video.js";

export as namespace videojsPlaylistUi;

declare module "video.js" {
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
    VERSION: "4.0.0";
    (this: videojs.Player, options?: videojsPlaylistUi.Options): void;
};
export = videojsPlaylistUi;
