// IMPORTANT:
//  <script src="https://www.noteflight.com/clientapi/2.0.0/nfclient.js"></script>
// IS REQUIRED IN THE DOCUMENT HEAD

/**
 * The global Noteflight API object.
 * After the page has loaded, you must call the NFClient.init() function to initialize the Client API before using any other functions.
 * @see https://www.noteflight.com/info/api/client_doc_v2
 */
declare var NFClient: {
    /**
     * The init() function performs additional API initialization and then invokes an optional callback function that is passed to it.
     * The callback function, when called, is in turn passed an object that describes the API's properties and capabilities.
     */
    init: (callback: (info: { version: string }) => void) => void;
    /**
     * To replace an element with a Noteflight embedded document, use the API to create a new NFClient.ScoreView object,
     * passing the element ID of the score and a special options object that describes the score to be created.
     * @param elementID - The ID of the HTML element that will be replaced by the embedded score.
     * @param noteflightID - the ID of the noteflight score. This ID is displayed at the end of a noteflight score URL.
     * @param options - An object specificing the options of the embedded score.
     */
    ScoreView: new(elementID: string, noteflightID: string, options: Options) => ScoreView;
};

interface Options {
    /**
     * The hostname of the Noteflight site containing the embedded score.
     * The default hostname is "www.noteflight.com".
     */
    host?: string;
    /**
     * The width of the embedded score in pixels.
     * Default value: 800.
     */
    width?: number;
    /**
     * The height of the embedded score in pixels. Default value: 600.
     */
    height?: number;
    viewParams?: {
        /**
         * This parameter optionally provides the visual magnification factor to be applied to the score in the embedded view.
         * A value of 1 indicates no magnification (equivalent to a Zoom value of 100%).
         * A value of 1.5 would make the score view larger (equivalent to 150%) while a value of 0.5 would make it smaller (50%).
         * This magnification overrides any Zoom slider settings in the regular Noteflight view of the score.
         * If omitted, the default factor is 1 (again, not necessarily the factor chosen in the Noteflight full page view).
         */
        scale?: number;
        /**
         * This optional parameter may be used to control how playback is handled in the embed, and also whether instrument sounds are downloaded or not.
         * There are three settings for this parameter. If this option is not provided, then the playback mode is determined by the default setting in the score.
         */
        playback?: "normal" | "audioTrack" | "echo" | "silent";
        /**
         * This optional parameter specifies the user's role with respect to the document.
         * Only two settings are permitted. The default setting is reader.
         */
        role?: "reader" | "template";
        /**
         * This optional parameter specifies the mode in which the document is displayed.
         */
        displayMode?: "strip" | "paginated" | "flow";
        /**
         * This parameter specifies the technology used to display the document.
         * If omitted, the document is displayed with Flash if present, otherwise with HTML5.
         */
        app?: "flash" | "html5";
        /**
         * This parameter shows a watermark in the embed score.
         * The URL of the watermark has to be passed in this parameter.
         */
        watermark?: string;
        /**
         * This parameter scales the watermark image.
         */
        watermarkScale?: number;
        /**
         * This parameter hides the playback controls.
         * Default is false.
         */
        hidePlaybackControls?: boolean;
        /**
         * This parameter hides the full window button in the header of an embed.
         * It also suppresses the display of links to the full score in the Sharing panel. Default is false.
         */
        hideFullWindow?: boolean;
        /**
         * This parameter, if set to false, hides the score's title, supertitle, subtitle, composer, and lyricist.
         * Default is true.
         */
        showScoreInfo?: boolean;
        /**
         * Determines whether the window for synced media, if present, displays.
         * Default is true.
         */
        showMediaTab?: boolean;
    };
}

type EventType =
    | "any"
    | "editorReady"
    | "scoreDataLoaded"
    | "selectionChange"
    | "playbackRequest"
    | "playbackStop"
    | "noteSizeChange"
    | "pageSizeChange"
    | "partsTransposed";

type NoteflightEvent<T> =
    & NoteflightEventProps
    & EventFilter<T, "scoreDataLoaded", ScoreDataLoadedProps>
    & EventFilter<T, "selectionChange", SelectionChangeProps>
    & EventFilter<T, "playbackRequest" | "playbackStop", PlaybackProps>;

type EventFilter<T, Event, Props> = T extends Event ? Props : T extends "any" ? Partial<Props> : {};

interface NoteflightEventProps {
    /**
     * 	A string value that identifies the kind of event that was dispatched.
     */
    type: EventType;
    /**
     * The NFClient.ScoreView object that generated this event.
     */
    target: ScoreView;
    /**
     * If present, this corresponds to the DOM element ID of the frame that was created to hold the embedded document.
     */
    embedld?: string;
}

interface ScoreDataLoadedProps {
    /**
     * This event is dispatched whenever an embed instance finishes loading a score from the Noteflight server and is ready to accept user interaction.
     * Document methods should not be called until this event has been received.
     */
    scoreId: string;
}

interface SelectionChangeProps {
    /**
     * If this property is absent, indicates that there is no active selection.
     * Otherwise, has one of the following values:
     * object: one or more individual objects are selected,
     * measure: one or more measures are selected,
     * range: a time range is selected in some set of staves.
     */
    kind: "object" | "measure" | "range" | undefined;
    /**
     * The zero-based index of the measure at the start of the selected range.
     */
    startIndex: number;
    /**
     * The offset in quarter notes from the beginning of the start measure at which the range begins. This value may range from zero to the number of quarter notes in the measure.
     */
    startOffset: number;
    /**
     * The zero-based index of the measure which includes the end of the selected range.
     * When kind has the value "measure" this will be a exclusive end index analogous to the argument to selectMeasures().
     */
    endIndex: number;
    /**
     * The offset in quarter notes from the beginning of the end measure at which the range ends. This offset may range from zero to the number of quarter notes in the measure.
     */
    endOffset: number;
    /**
     * Optional property only present when kind has the value "object" or "range", providing an array of zero-based staff indices, counting down from the topmost staff in the score.
     * If given, only the given staves are included in the selection.
     */
    staffIndices: number[];
    /**
     * A deep-linking fragment representing the selection which can be passed to the selectFragment() function if desired.
     */
    fragment: string;
}

interface PlaybackProps {
    /**
     * The zero-based index of the measure at which playback should start.
     */
    index: number;
    /**
     * The offset in quarter notes from the beginning of the start measure at which playback is to start.
     * This value may range from zero to the number of quarter notes in the measure.
     */
    offset: number;
}

/**
 * Every document method returns an object called a Promise, which can accept one or more callback functions via its done() method.
 */
interface DocumentMethodPromise<Result> {
    /**
     * To wait for a method to complete or to obtain its return value if it has one,
     * call done() on the Promise object returned by the method and pass a callback that will receive the return value of the method (if any).
     */
    done: (callback: (result: Result) => void | Array<(result: Result) => void>) => DocumentMethodPromise<Result>;
    /**
     * Internal function that stores the callback functions as passed through the done() method.
     */
    doneCallbacks: Array<Array<(result: Result) => void>>;
    /**
     * Internal function that runs the callback functions as passed through the done() method.
     */
    success: (result: Result) => void;
}

/**
 * A JSON-like structure describing the entire score in the embed.
 */
interface ScoreData {
    /**
     * an array of Objects representing each staff in the score.
     */
    staves: Staff[];
}

interface Staff {
    /**
     * an array of Objects representing the measures in each staff.
     */
    measures: Measure[];
}

interface Measure {
    /**
     * an array of Objects representing the note sets in each measure. Each note set represents a rest, a note or a chord in the measure.
     */
    noteSets: NoteSet[];
}

interface NoteSet {
    /**
     * an array of Objects representing the notes in a note set.
     * If empty, this indicates that the note set is a rest. If one element is present, indicates a regular note.
     * If multiple elements, indicates a chord.
     */
    notes: Note[];
    /**
     * The fractional offset of this note set from measure start in quarter notes.
     */
    position: number;
    /**
     * The fractional duration of this note set expressed in quarter notes
     */
    duration: number;
    /**
     * The index of the voice to which this note set belongs, where zero indicates the top voice in a polyphonic score.
     */
    voice: number;
    /**
     * Flag indicating whether this note has a beam extending to the following note.
     */
    beam: boolean;
}

interface Note {
    /**
     * The ordinal of this pitch in the standard MIDI chromatic scale numbering, at concert pitch. The number may be negative.
     */
    pitch: number;
    /**
     * A number between 0 and 6 corresponding to the note spellings C, D, E, F, G, A, B respectively.
     */
    step: number;
    /**
     * The number of half steps distance this note lies from the unaltered step.
     */
    alteration: number;
    /**
     * 	A string indicating the type of accidental shown visually for this note, or null if none is specified. Values include "flat", "sharp", "natural", "doubleFlat" and "doubleSharp".
     */
    accidental: string;
    /**
     * Flag indicating whether this note is tied to the following note.
     */
    tied: boolean;
    /**
     * Type of note head: normal, stemless, slash, hit, cross, square, diamond, triangle, or harmonic.
     */
    noteHead: "normal" | "stemless" | "slash" | "hit" | "cross" | "square" | "diamond" | "triangle" | "harmonic";
}

interface Part {
    /**
     * Per-part volume adjustment, with 0 corresponding to no adjustment.
     */
    gain: number;
    /**
     * Whether the part is muted and will be left out during playback.
     */
    muted: boolean;
    /**
     * The full name of the instrument.
     */
    name: string;
    /**
     * Number of octaves above concert pitch by which the part's notation is transposed.
     */
    octaveShift: number;
    /**
     * Instrument's left or right pan when playing.
     */
    pan: number;
    /**
     * Transposition of the part's score relative to concert pitch, measured in semitones upward.
     */
    transposition: number;
    /**
     * Forces selection of an alternate enharmonic key signature in a transposed part, if one is available.
     */
    alternateKey: boolean;
    /**
     * Whether the part is shown in the score.
     */
    visible: boolean;
}

interface KeySignature {
    /**
     * 	the mode of the key signature: one of "major", "minor", "ionian", "dorian", "phrygian", "lydian", "mixolydian", "aeolian", or "locrian". Left undefined if the score's mode is unknown.
     */
    mode:
        | "major"
        | "minor"
        | "ionian"
        | "dorian"
        | "phrygian"
        | "lydian"
        | "mixolydian"
        | "aeolian"
        | "locrian"
        | undefined;
    /**
     * the first note of the key signature's scale. Left undefined if the score's mode is unknown.
     */
    tonic: string;
    /**
     * The key signature's distance from C major / A minor by fifths, expressed as a number between -7 and 7.
     * If positive, equal to the number of sharps in the key signature; if negative, equal to the number of flats.
     */
    fifths: number;
}

interface TransposeOptions {
    /**
     * An integral number of semitones to transpose the whole score.
     */
    semitones: number;
    /**
     * 	An array each of whose elements corresponds to a part in the score and supplies the number of semitones by which to transpose that part.
     */
    partSemitones: number[];
    /**
     * if true, automatically resumes playback of the currently playing measure following transposition.
     */
    resumePlayback?: boolean;
    /**
     * if true, suppresses any forced stem directions in the score.
     */
    ignoreStemDirection?: boolean;
    /**
     * if true, suppresses any forced slur directions in the score.
     */
    ignoreSlurDirection?: boolean;
    /**
     * if true, uses alternate enharmonic key spellings reported by getTranspositions() for this pitch change.
     */
    alternateKey?: boolean;
    /**
     * if true, hide chord symbols after transposing.
     */
    hideChordSymbols?: boolean;
    /**
     * if true, hide fretbroards after transposing.
     */
    hideFretboards?: boolean;
}

/**
 * Object representing the embedded Noteflight Client API.
 */
interface ScoreView {
    /**
     * To be notified of events occurring for an embedded document,
     * you must call the addEventListener(type, handler) method on an NFClient.ScoreView object,
     * specifying an event type and a callback function. This function will be called whenever an event of the given type occurs,
     * with a single argument that is a JavaScript object describing the event that occurred.
     * The special event type "any" will trigger the callback for any document event, regardless of its type.
     */
    addEventListener: <T extends EventType>(
        eventType: `${T}`,
        callback: (event: NoteflightEvent<`${T}`>) => void,
    ) => void;
    /**
     * To stop being notified of events occurring for an embedded document,
     * call the removeEventListener(type, handler) method on an NFClient.ScoreView object,
     * specifying an event type and a callback function previously provided to addEventListener().
     */
    removeEventListener: <T extends EventType>(
        eventType: `${T}`,
        callback: (event: NoteflightEvent<`${T}`>) => void,
    ) => void;
    /**
     * Causes a contiguous run of measures in the document to be selected, starting with the measure at startIndex and ending at the measure just before endIndex.
     * If endIndex is -1, it is interpreted as the number of measures in the score.
     * @param startIndex The inclusive zero-based index of the measure that begins the selected range.
     * @param endIndex f positive, the exclusive zero-based index of the measure following the selected range.
     * If -1, this parameter is taken as the number of measures in the score, as a convenience for selecting the entire score.
     */
    selectMeasures: (startIndex: number, endIndex: number) => DocumentMethodPromise<undefined>;
    /**
     * Causes a contiguous time range in the document to be selected, covering some or all of the staves in the document.
     * The starting point of the range is defined by startIndex and startOffset, while the end is defined by endIndex and endOffset.
     * The optional staffIndices argument allows specification of a specific set of staves to be selected.
     * @param startIndex The inclusive zero-based index of the measure that begins the selected range.
     * @param startOffset The offset in quarter notes from the beginning of the start measure at which the range begins.
     * This value may range from zero to the number of quarter notes in the measure.
     * @param endIndex The zero-based index of the measure which includes the end of the selected range.
     * @param endOffset The offset in quarter notes from the beginning of the end measure at which the range ends.
     * This offset may range from zero to the number of quarter notes in the measure.
     * @param staffIndices Optional argument providing an array of zero-based staff indices, counting down from the topmost staff in the score.
     * If given, only the given staves are included in the selection.
     */
    selectRange: (
        startIndex: number,
        startOffset: number,
        endIndex: number,
        endOffset: number,
        staffIndices?: number[],
    ) => DocumentMethodPromise<undefined>;
    /**
     * Causes a set of objects in the document to be selected according to the URI fragment identifier given.
     * The meanings of these fragment IDs are not documented,
     * but they are guaranteed to correspond to the fragment IDs used for deep links that are generated using the "Link URL To Selection" command in the Score Editor.
     * They also correspond to the fragment IDs passed in selection-change event callbacks from an embed.
     * @param fragment A URI fragment identifier encoding a Noteflight selection. Must begin with "#".
     */
    selectFragment: (fragment: string) => DocumentMethodPromise<undefined>;
    /**
     * Deselects all selected objects, ranges or measures in the score.
     */
    clearSelection: () => DocumentMethodPromise<undefined>;
    /**
     * Returns a JSON-like structure describing the entire score in the embed.
     * For modifiable embeds, permits programmatic access to their contents.
     * The returned data is a copy of the score in the embed;
     * it has no live connection to the actual score. Therefore, modifying the returned objects has no effect on the embed instance's score.
     */
    getScore: () => DocumentMethodPromise<ScoreData>;
    /**
     * Returns the score contents in the embed client as a MusicXML string.
     */
    getMusicXML: () => DocumentMethodPromise<string>;
    /**
     * Returns the score contents in the embed client as a NoteflightXML string.
     */
    getNoteflightXML: () => DocumentMethodPromise<string>;
    /**
     * Begins playback from the measure containing the first selected object in the score.
     */
    playFromSelection: () => DocumentMethodPromise<undefined>;
    /**
     * Begins playback from the measure whose zero-based index is index.
     * @param index The zero-based index of the measure at which playback is to begin.
     */
    playFromMeasure: (index: number) => DocumentMethodPromise<undefined>;
    /**
     * Moves synced media playback to time in seconds. Decimals are allowed.
     * @param time Seconds to advance the synced media to.
     */
    seekTo: (time: number) => DocumentMethodPromise<undefined>;
    /**
     *  If called, this will mute the audio for any synced media. It's safe to call even if there is no synced media.
     */
    muteSyncedMedia: () => DocumentMethodPromise<undefined>;
    /**
     * If called, this will unmute the audio for any synced media. It's safe to call even if there is no synced media.
     */
    unmuteSyncedMedia: () => DocumentMethodPromise<undefined>;
    /**
     * Stops any playback currently in progress.
     */
    stopPlayback: () => DocumentMethodPromise<undefined>;
    /**
     * Displays a vertical position cursor at the given quarter-note offset within the given measure.
     * @param index The zero-based index of the measure at which the cursor is displayed.
     * @param offset The offset from measure start at which the cursor is displayed, in quarter notes.
     */
    showPositionCursor: (index: number, offset: number) => DocumentMethodPromise<undefined>;
    /**
     * Hides any currently visible position cursor.
     */
    hidePositionCursor: () => DocumentMethodPromise<undefined>;
    /**
     * Controls the behavior whereby Noteflight automatically advances the note entry location after a note is entered (the default, corresponding to an argument of true).
     * This can be selectively disabled in situations where the focus is on chord entry.
     * @param flag True if the default behavior of auto-advance on note entry is enabled.
     */
    setAdvanceAfterNoteEntry: (flag: boolean) => DocumentMethodPromise<undefined>;
    /**
     * Changes the playback mode setting after an embed has started and loaded its score.
     * @param mode This parameter may be used to control how playback is handled in the embed,
     * and also whether instrument sounds are downloaded or not.
     */
    setPlaybackMode: (mode: "normal" | "audioTrack" | "echo" | "silent") => DocumentMethodPromise<undefined>;
    /**
     *  Determines the set of parts that will be shown in the embed.
     *  @param partIndicies An array containing one or more zero-based indices of parts in the score to be shown.
     * If an empty array is given, all parts in the score are displayed.
     */
    setVisibleParts: (partIndicies: number[]) => DocumentMethodPromise<undefined>;
    /**
     *  Loads an entire MusicXML score into the embed client.
     * Usage Restrictions: This function is only available to communities that are enabled for content injection into Noteflight embeds.
     *  @param xmlString A complete MusicXML document provided as a String.
     */
    loadMusicXML: (xmlString: string) => DocumentMethodPromise<undefined>;
    /**
     * Loads an entire NoteflightXML score into the embed client.
     * Usage Restrictions: This function is only available to communities that are enabled for content injection into Noteflight embeds.
     * @param xmlString A complete NoteflightXML document provided as a String.
     */
    loadNoteflightXML: (xmlString: string) => DocumentMethodPromise<undefined>;
    /**
     * Pastes a sequence of note sets into the document at a given staff, measure and metrical offset.
     * Notes will be automatically split and tied as needed to fit the metrical structure of the score, which will also extend to accommodate the pasted sequence.
     * Accidentals will be adjusted automatically.
     * @param noteSets An array of note set objects,
     * where each note set's position property is taken as relative to the starting musical position at which notes are to be pasted.
     * @param staffIndex A zero-based index of the staff in which the notes are to be pasted.
     * @param measureIndex A zero-based index of the starting measure in which the notes are to be pasted.
     * @param offset An offset within the starting measure expressed in quarter notes.
     */
    pasteNoteSets: (
        noteSets: NoteSet[],
        staffIndex: number,
        measureIndex: number,
        offset: number,
    ) => DocumentMethodPromise<undefined>;
    /**
     * Deletes any selected objects, staves or measures from the score.
     * Note that attempting to delete the entire score will retain a single empty measure at the start of the score.
     */
    deleteSection: () => DocumentMethodPromise<undefined>;
    /**
     *  Supplies information about the parts in the score.
     */
    getParts: () => DocumentMethodPromise<Part[]>;
    /**
     * Sets properites of a part in the score.
     * @param partIndex The index of the part whose properties will be set (same as its index in the array returned by getParts()).
     * @param properites An object all of whose properties will be copied onto the part.
     */
    setPartProperties: (partIndex: number, properties: Part) => DocumentMethodPromise<undefined>;
    /**
     * Sets the zoom factor.
     * @param zoomFactor A number representing the hundreds place of the zoom in percentage (1 => 100%, 2 => 200%, etc).
     */
    setZoom: (zoomFactor: number) => DocumentMethodPromise<undefined>;
    /**
     * Gets the zoom factor.
     * @returns A float representing the current zoom factor.
     */
    getZoom: () => DocumentMethodPromise<number>;
    /**
     * Sets the master gain.
     * @param masterGain The gain in volume applied to all tracks in the score, with 0 indicating no gain.
     */
    setMasterGain: (masterGain: number) => DocumentMethodPromise<undefined>;
    /**
     * Gets the master gain.
     * @returns A float indicating the current master gain.
     */
    getMasterGain: () => DocumentMethodPromise<number>;
    /**
     *  Returns the key signature of the embed's score.
     */
    getKeySignature: () => DocumentMethodPromise<KeySignature>;
    /**
     * Returns an array of key signatures for each half-step transposition from concert pitch.
     * @returns A JavaScript Array of objects with a key signature property structure.
     * Additionally an optional alternateKey property may be present,
     * pointing to an alternate, enharmonic key signature that may be obtained by setting the alternateKey option when calling setTransposeParts().
     */
    getTranspositions: () => DocumentMethodPromise<Array<KeySignature & { alternateKey?: KeySignature }>>;
    /**
     * Gets the initial tempo of the piece.
     * @returns An integer indicating the initial tempo of the piece in beats per minute.
     */
    getInitialTempo: () => DocumentMethodPromise<number>;
    /**
     * Sets whether to show parts' transpositions.
     * @param transposeParts If false, the embed will show parts at concert pitch; if true, with their per-part transposition applied.
     */
    setTransposeParts: (transposeParts: boolean) => DocumentMethodPromise<undefined>;
    /**
     * Gets whether the parts are being shown transposed.
     * @returns A boolean indicating whether parts are being shown transposed.
     */
    getTransposeParts: () => DocumentMethodPromise<boolean>;
    /**
     * Applies a global transposition in semitones to the whole score or to selected parts.
     */
    transpose: (options: TransposeOptions) => DocumentMethodPromise<undefined>;
    /**
     * Sets the note size, in points.
     * @param noteSize The note size, in points.
     */
    setNoteSize: (noteSize: number) => DocumentMethodPromise<undefined>;
    /**
     * Gets the note head size.
     * @returns An integer indicating the current note head size, in points.
     */
    getNoteSize: () => DocumentMethodPromise<number>;
    /**
     * Gets the playback speed.
     * @returns A float indicating the current playback speed adjustment, as log2(k) where k is the speed scaling factor.
     * Thus 0 indicates no speed adjustment, -1 is 50%, and +1 is 200%.
     */
    getPlaybackSpeed: () => DocumentMethodPromise<number>;
    /**
     * Sets the playback speed.
     * @param speedGain The playback speed gain. 0 indicates no gain; each increment of 1 doubles or halves the speed.
     */
    setPlaybackSpeed: (speedGain: number) => DocumentMethodPromise<undefined>;
    /**
     * Gets the playback tempo of the initial measure of the score.
     * @returns A tempo in beats per minute.
     */
    getPlaybackTempo: () => DocumentMethodPromise<number>;
    /**
     * Sets the playback tempo of the initial measure of the score.
     * @param tempo The playback tempo in beats per minute.
     */
    setPlaybackTempo: (tempo: number) => DocumentMethodPromise<undefined>;
    /**
     *  Sets a background image for the score. If smaller than the score, the image will be tiled.
     * Note: in order to load an image from your a domain, the domain must allow cross-domain image data by serving a crossdomain.xml from its root.
     * See Adobe's documentation for more detail.
     *  @param imageUri The URI of the image to load.
     */
    setBackround: (imageUri: string) => DocumentMethodPromise<undefined>;
    /**
     * Returns whether the score is playing from synthesized sound or a synchronized track.
     * @returns A string: "normal" for internal synthesis,
     * "audioTrack" for a synchronized track, "silent" for no playback,
     * or "echo" for playing selection only.
     */
    getPlaybackMode: () => DocumentMethodPromise<"normal" | "audioTrack" | "silent" | "echo">;
    /**
     * Prints the score displayed in the client.
     * @param option Print the score using a real printer or download a PDF. Available only in HTML5.
     */
    printScore: (option?: { usePrinter?: boolean }) => DocumentMethodPromise<undefined>;
}
