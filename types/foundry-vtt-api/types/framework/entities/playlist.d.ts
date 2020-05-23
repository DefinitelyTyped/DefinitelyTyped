declare class Playlists extends Collection<Playlist> {
    entities: Playlist[];

    /** @override */
    get object(): Playlist;

    values(): IterableIterator<Playlist>;

    /**
     * Return the subset of Playlist entities which are currently playing
     */
    get playing(): Playlist[];

    /**
     * Handle changes to a Scene to determine whether to trigger changes to Playlist entities.
     * @param scene		The Scene entity being updated
     * @param data		Incremental update data
     * @param options	Update options
     */
    protected _onUpdateScene(scene: Scene, data: object, options: object): void;
}

declare class Playlist extends Entity {
    /**
     * Each sound which is played within the Playlist has a created Howl instance.
     * The keys of this object are the sound IDs and the values are the Howl instances.
     */
    audio: any;

    /**
     * Playlists may have a playback order which defines the sequence of Playlist Sounds
     */
    playbackOrder: any[];

    /** @override */
    static get config(): {
        baseEntity: Playlist;
        collection: Playlists;
        embeddedEntities: { PlaylistSound: string };
    };

    /**
     * Set up the Howl object by calling the core AudioHelper utility
     * @param sound	The PlaylistSound for which to create an audio object
     * @return		The created audio object
     */
    protected _createAudio(sound: object): any;

    /**
     * This callback triggers whenever a sound concludes playback
     * Mark the concluded sound as no longer playing and possibly trigger playback for a subsequent sound depending on
     * the playlist mode.
     *
     * @param soundId	The sound ID of the track which is ending playback
     */
    protected _onEnd(soundId: string): Promise<void>;

    /**
     * Generate a new playback order for the playlist.
     * Use a seed for randomization to (hopefully) guarantee that all clients generate the same random order.
     * The seed is based on the first 9 characters of the UTC datetime multiplied by the index order of the playlist.
     */
    protected _getPlaybackOrder(): any[];

    /**
     * Get the next sound which should be played in the Playlist after the current sound completes
     * @param soundId	The ID of the currently playing sound
     * @return			The sound data for the next sound to play
     */
    protected _getNextSound(soundId: string): any;

    /* -------------------------------------------- */
    /*  Properties                                  */
    /* -------------------------------------------- */

    /**
     * An Array of the sound data contained within this Playlist entity
     */
    get sounds(): any[];

    /**
     * The playback mode for the Playlist instance
     */
    get mode(): number;

    /**
     * An indicator for whether any Sound within the Playlist is currently playing
     */
    get playing(): boolean;

    /* -------------------------------------------- */
    /*  Methods                                     */
    /* -------------------------------------------- */

    /**
     * Play (or stop) a single sound from the Playlist
     * @param sound	The sound object to begin playback
     */
    playSound(sound: object): void;

    /**
     * Begin simultaneous playback for all sounds in the Playlist
     * @return	A Promise which resolves once the Playlist update is complete
     */
    playAll(): Promise<Playlist>;

    /**
     * End playback for any/all currently playing sounds within the Playlist
     * @return	A Promise which resolves once the Playlist update is complete
     */
    stopAll(): Promise<Playlist>;

    /**
     * Cycle the playlist mode
     * @return	A promise which resolves to the updated Playlist instance
     */
    cycleMode(): Promise<Playlist>;
}
