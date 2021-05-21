// Type definitions for MusicKit JS 1.2.3
// Project: https://developer.apple.com/documentation/musickitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace MusicKit {
  /**
   * The options to use when setting a music player's playback queue.
   */
  interface SetQueueOptions {
    /**
     * The catalog album used to set a music player's playback queue.
     */
    album?: string;
    /**
     * The media items used to set a music player's playback queue.
     */
    items: descriptor[];
    /**
     * The parameters used to set a music player's playback queue.
     */
    parameters?: QueryParameters;
    /**
     * The playlist used to set a music player's playback queue.
     */
    playlist?: string;
    /**
     * The song used to set a music player's playback queue.
     */
    song?: string;
    /**
     * The songs used to set a music player's playback queue.
     */
    songs?: string[];
    /**
     * The start position for a set playback queue.
     */
    startPosition?: number;
    /**
     * A content URL used to set a music player's playback queue.
     */
    url?: string;
  }
}
