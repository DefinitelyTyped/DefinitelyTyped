/**
 * An enumerator to indicate the audio output mode.
 *
 * - `PCM` - PCM(Pulse-code modulation) audio output mode
 * - `DOLBY` - Dolby audio output mode
 * - `DTS` - DTS(Digital Theater System) audio output mode
 * - `AAC` - AAC(Advanced Audio Coding) audio output mode
 * - `DOLBY_DIGITAL_PLUS` - Dolby Digital Plus audio output mode
 *
 * @remark DOLBY_DIGITAL_PLUS is supported since Tizen 5.5
 *
 */
export enum AudioOutputMode {
    PCM = 'PCM',
    DOLBY = 'DOLBY',
    DTS = 'DTS',
    AAC = 'AAC',
    DOLBY_DIGITAL_PLUS = 'DOLBY_DIGITAL_PLUS',
}

/**
 * An enumerator to indicate the beep type.
 *
 * - `UP` - The UP sound
 * - `DOWN` - The DOWN sound
 * - `LEFT` - The LEFT sound
 * - `RIGHT` - The RIGHT sound
 * - `PAGE_LEFT` - The PAGE LEFT sound
 * - `PAGE_RIGHT` - The PAGE RIGHT sound
 * - `BACK` - The BACK sound
 * - `SELECT` - The SELECT sound
 * - `CANCEL` - The CANCEL sound
 * - `WARNING` - The WARNING sound
 * - `KEYPAD` - The KEYPAD sound
 * - `KEYPAD_ENTER` - The KEYPAD ENTER sound
 * - `KEYPAD_DEL` - The KEYPAD DEL sound
 * - `MOVE` - The MOVE sound
 * - `PREPARING` - The PREPARING sound
 *
 */
export enum AudioBeepType {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    PAGE_LEFT = 'PAGE_LEFT',
    PAGE_RIGHT = 'PAGE_RIGHT',
    BACK = 'BACK',
    SELECT = 'SELECT',
    CANCEL = 'CANCEL',
    WARNING = 'WARNING',
    KEYPAD = 'KEYPAD',
    KEYPAD_ENTER = 'KEYPAD_ENTER',
    KEYPAD_DEL = 'KEYPAD_DEL',
    MOVE = 'MOVE',
    PREPARING = 'PREPARING',
}

/**
 * This API provides the audio control features (such as volume and mute) on the TV associated device.
 * There will be a `tizen.tvaudiocontrol` object that allows access to the functionality of the TV Audio Control API.
 *
 * @since 2.3
 *
 * @defAPIFeature http://tizen.org/feature/tv.audio
 * To guarantee the running of this application on a device with a TV audio control support, define the following requirements in the config file:
 */
export interface TVAudioControlManager {
    /**
     * Turns on or off the silent mode
     *
     * Note that turning on mute mode does not change volume level but
     * it simply disables any sound. Turning off the mute will enable sound
     * with the volume level. If setVolumeUp or setVolumeDown functions
     * are used, then mute is disabled.
     *
     * @param mute The mute state (true = turn on the silent mode, false = turn off the silent mode)
     * @throw WebAPIException SecurityError, UnknownError
     *
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     *
     */
    setMute: (mute: boolean) => void;

    /**
     * Gets the mute state.
     *
     * @returns boolean The current mute state
     *
     * @throw WebAPIException SecurityError, UnknownError
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     *
     */
    isMute: () => boolean;

    /**
     * Changes the volume level.
     *
     * The value of `volume` is allowed from 0 to 100. If an invalid value is passed, `InvalidValuesError` will occur.
     *
     * @param volume The volume (the available volume range is 0 ~100)
     *
     * @throw WebAPIException InvalidValuesError, SecurityError, UnknownError
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     *
     */
    setVolume: (volume: number) => void;

    /**
     * Increases the volume by 1 level.
     * If it is called when the volume level is 100, it will be ignored
     * because the maximum volume level is 100. If mute is enabled,
     * then execution of this functions will disable it.
     *
     * @throw WebAPIException SecurityError, UnknownError
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     *
     */
    setVolumeUp: () => void;

    /**
     * Decreases the volume by 1 level.
     *
     * If it is called when the volume level is 0, it will be
     * ignored because the minimum volume level is 0. If mute is enabled,
     * then execution of this functions will disable it.
     *
     * @throw WebAPIException SecurityError, UnknownError
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     *
     */
    setVolumeDown: () => void;

    /**
     * Gets the current volume level.
     *
     * @returns unsigned short The current volume (the volume range is 0 ~ 100)
     *
     * @throw WebAPIException SecurityError, UnknownError
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     *
     */
    getVolume: () => number;

    /**
     * Registers a volume change callback for getting notified when TV volume has been changed.
     * Note that this method overwrites the previously registered listener.
     * @param callback The method to invoke when the volume has been changed. It will not be triggered when the silent mode is changed.
     *
     * @throw WebAPIException TypeMismatchError, SecurityError, UnknownError
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     *
     */
    setVolumeChangeListener: (callback: VolumeChangeCallback) => void;

    /**
     * Unregisters the volume change callback for detecting the volume changes.
     * Calling this function has no effect if listener is not set.
     *
     * @throw WebAPIException SecurityError, UnknownError
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     *
     */
    unsetVolumeChangeListener: () => void;

    /**
     * Gets the current audio output mode.
     *
     * @returns AudioOutputMode The current audio output mode
     *
     * @throw WebAPIException SecurityError, UnknownError
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     *
     */
    getOutputMode: () => AudioOutputMode | 'PCM' | 'DOLBY' | 'DTS' | 'AAC' | 'DOLBY_DIGITAL_PLUS';

    /**
     * Plays the sound of a specific beep.
     *
     * @param type The beep type to play
     *
     * @throw WebAPIException TypeMismatchError, SecurityError, UnknownError
     *
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.audio
     * @warning 5.0 http://tizen.org/privilege/tv.audio (public level) has been deprecated since 5.0.
     *
     */
    playSound: (
        type:
            | AudioBeepType
            | 'UP'
            | 'DOWN'
            | 'LEFT'
            | 'RIGHT'
            | 'PAGE_LEFT'
            | 'PAGE_RIGHT'
            | 'BACK'
            | 'SELECT'
            | 'CANCEL'
            | 'WARNING'
            | 'KEYPAD'
            | 'KEYPAD_ENTER'
            | 'KEYPAD_DEL'
            | 'MOVE'
            | 'PREPARING',
    ) => void;
}

/**
 * This interface defines a volume change callback for getting notified information about the volume changes.
 */
export interface VolumeChangeCallback {
    /**
     * The method invoked when the volume has been changed.
     *
     * @param volume The changed volume
     */
    (volume: number): void;
}
