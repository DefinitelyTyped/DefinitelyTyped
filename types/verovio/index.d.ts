import { AvailableOptions } from "./AvailableOptions";
import { EditorAction } from "./EditorAction";
import { VerovioOptions } from "./VerovioOptions";
export * from "./AvailableOptions";
export { EditorAction } from "./EditorAction";
export { VerovioOptions } from "./VerovioOptions";

export interface MIDIValues {
    time: number;
    pitch: number;
    duration: number;
}
export interface GetMeiOptions {
    /**
     * Page number, 1-based. All pages if none (or 0) specified.
     */
    pageNo?: number;
    /**
     * Score Based, default true
     */
    scoreBased?: boolean;
    /**
     * Basic, default false
     */
    basic?: boolean;
    /**
     * remove all @xml:id not used in the data; default false
     */
    removeIds?: boolean;
}
export interface TimeMapEntry {
    tstamp: number;
    qstamp: number;
    on?: string[];
    off?: string[];
    tempo?: number;
}
export interface RedoLayoutOptions {
    /**
     * true by default
     */
    resetCache?: boolean;
}
export interface TimeMapOptions {
    /**
     * Include measures in the timemap (false by default)
     */
    includeMeasures?: boolean;
    /**
     * Include rests in the timemap (false by default)
     */
    includeRests?: boolean;
}
export interface Selection {
    measureRange?: string;
    start?: string;
    end?: string;
}
export interface PAEValidationMessage {
    column: number;
    row: number;
    code: number;
    text: string;
    type: "error" | "warning";
}
export interface PAEValidation {
    clef?: PAEValidationMessage;
    data?: PAEValidationMessage[];
}
interface ExpansionMap {
    [key: string]: any;
}
export interface DescriptiveFeatures {
    intervalsChromatic: string[];
    intervalsDiatonic: string[];
    intervalsIds: string[];
    pitchesChromatic: string[];
    pitchesDiatonic: string[];
    pitchesIds: string[];
}
type DescriptiveFeaturesOptions = unknown;

export const module: VerovioModule;
export interface VerovioModule {
    onRuntimeInitialized: () => void;
    FS_unlink: (path: string) => void;
    FS_createDataFile: (
        parent: string,
        name: string,
        data: string,
        canRead: boolean,
        canWrite: boolean,
        canOwn: boolean,
    ) => void;
}

export class toolkit {
    constructor(module?: VerovioModule);
    destroy: () => void;

    /**
     * Filter Humdrum data.
     * @returns The Humdrum data as a string
     */
    convertHumdrumToHumdrum: (humdrumData: string) => string;

    /**
     * Convert Humdrum data to MIDI.
     * @returns The MIDI file as a base64-encoded string
     */
    convertHumdrumToMIDI: (humdrumData: string) => string;

    /**
     * Convert MEI data into Humdrum data.
     * @returns The Humdrum data as a string
     */
    convertMEIToHumdrum: (mei: string) => string;

    /**
     * Edit the MEI data - experimental code not to rely on.
     * @param editorAction The editor actions as a stringified JSON object
     * @returns True if the edit action was successfully applied
     */
    edit: (editorAction: EditorAction) => boolean;

    /**
     * Return the editor status - experimental code not to rely on.
     * @returns The editor status as a string
     */
    editInfo: () => EditorAction;

    /**
     * Return all available options grouped by category.
     *
     * For each option, returns the type, the default value, and the minimum and maximum value (when available)
     */
    getAvailableOptions: () => AvailableOptions;

    /**
     * Return a dictionary of all the options with their default value.
     */
    getDefaultOptions: () => VerovioOptions;

    /**
     * Return descriptive features as a JSON string.
     *
     * The features are tailored for implementing incipit search.
     * @param jsonOptions A JSON object with the feature extraction options
     * @returns A JSON object with the requested features
     */
    getDescriptiveFeatures: (jsonOptions: DescriptiveFeaturesOptions) => DescriptiveFeatures;

    /**
     * Return element attributes as a JSON string.
     *
     * The attributes returned include the ones not supported by Verovio
     * @param xmlId the ID (@xml:id) of the element being looked for
     * @returns A JSON object with all attributes
     */
    getElementAttr: (xmlId: string) => { [attribute: string]: string };

    /**
     * Returns array of IDs of elements being currently played.
     * @param millisec The time in milliseconds
     * @returns A JSON object with the page and notes being played
     */
    getElementsAtTime: (millisec: number) => { notes: string[]; page: number };

    /**
     * Returns a vector of ID strings of all elements (the notated and the expanded) for a given element.
     * @param xmlId the ID (@xml:id) of the element being looked for
     * @returns A JSON object with all IDs
     */
    getExpansionIdsForElement: (xmlId: string) => { [notated: string]: string };

    /**
     * Get the humdrum buffer.
     * @returns The humdrum buffer as a string
     */
    getHumdrum: () => string;

    /**
     * Get the log content for the latest operation.
     * @returns The log content as a string
     */
    getLog: () => string;

    /**
     * Get the MEI as a string.
     * @param options A JSON object with the output options; pageNo: integer; (1-based), all pages if none (or 0) specified; scoreBased: true or false; true by default; basic: true or false; false by default; removeIds: true or false; false by default - remove all @xml:id not used in the data;
     */
    getMEI: (options?: GetMeiOptions) => string;

    /**
     * Return MIDI values of the element with the ID (xml:id)
     *
     * RenderToMIDI() must be called prior to using this method
     * @param xmlId the ID (@xml:id) of the element being looked for
     * @returns a JSON object with the MIDI values
     */
    getMIDIValuesForElement: (xmlId: string) => MIDIValues;

    /**
     * Returns the ID string of the notated (the original) element.
     * @param xmlId the ID (@xml:id) of the element being looked for
     * @returns An ID string
     */
    getNotatedIdForElement: (xmlId: string) => string;

    /**
     * Return a dictionary of all the options with their current value.
     * @returns A JSON object
     */
    getOptions: (defaultValues?: boolean) => VerovioOptions;

    /**
     * Return the number of pages in the loaded document.
     *
     * The number of pages depends one the page size and if encoded layout was taken into account or not.
     * @returns The number of pages
     */
    getPageCount: () => number;

    /**
     * Return the page on which the element is the ID (xml:id) is rendered.
     *
     * This takes into account the current layout options.
     * @param xmlId the ID (@xml:id) of the element being looked for
     * @returns the page number (1-based) where the element is (0 if not found)
     */
    getPageWithElement: (xmlId: string) => number;

    /**
     * Return the time at which the element is the ID (xml:id) is played.
     *
     * RenderToMIDI() must be called prior to using this method.
     * @param xmlId the ID (@xml:id) of the element being looked for
     * @returns The time in milliseconds
     */
    getTimeForElement: (xmlId: string) => number;

    /**
     * Return a JSON object string with the following key values for a given note.
     *
     * Return scoreTimeOnset, scoreTimeOffset, scoreTimeTiedDuration, realTimeOnsetMilliseconds, realTimeOffsetMilliseconds, realTimeTiedDurationMilliseconds.
     * @param xmlId the ID (@xml:id) of the element being looked for
     * @returns A JSON object with the values
     */
    getTimesForElement: (xmlId: string) => {
        scoreTimeOnset: number;
        scoreTimeOffset: number;
        scoreTimeDuration: number;
        scoreTimeTiedDuration: number;
        realTimeOnsetMilliseconds: number;
        realTimeOffsetMilliseconds: number;
    };

    /**
     * Return the version number.
     * @returns the version number as a string
     */
    getVersion: () => string;

    /**
     * Load a string data with the type previously specified in the options.
     *
     * By default, the methods try to auto-detect the type.
     * @param data A string with the data (e.g., MEI data) to be loaded
     * @returns True if the data was successfully loaded
     */
    loadData: (data: string) => boolean;

    /**
     * Load a MusicXML compressed file passed as base64 encoded string.
     * @param zipDataBase64 A ZIP file as a base64 encoded string
     * @returns True if the data was successfully loaded
     */
    loadZipDataBase64: (zipDataBase64: string) => boolean;

    /**
     * Load a MusicXML compressed file passed as a buffer of bytes.
     * @param zipDataBuffer A ZIP file as a buffer of bytes
     * @returns True if the data was successfully loaded
     */
    loadZipDataBuffer: (zipDataBuffer: ArrayBuffer) => boolean;

    /**
     * Redo the layout of the loaded data.
     *
     * This can be called once the rendering option were changed, for example with a new page (sceen) height or a new zoom level.
     * @param options A JSON object with the action options resetCache: true or false; true by default;
     */
    redoLayout: (options?: RedoLayoutOptions) => void;

    /**
     * Redo the layout of the pitch postitions of the current drawing page.
     *
     * Only the note vertical positions are recalculated with this method. RedoLayout() needs to be called for a full recalculation.
     */
    redoPagePitchPosLayout: () => void;

    /**
     * Render the first page of the data to SVG.
     *
     * This method is a wrapper for setting options, loading data and rendering the first page. It will return an empty string if the options cannot be set or the data cannot be loaded.
     * @param data A string with the data (e.g., MEI data) to be loaded
     * @param options A JSON object with the output options
     * @returns The SVG first page as a string
     */
    renderData: (data: string, options: VerovioOptions) => string;

    /**
     * Render a document’s expansionMap, if existing.
     * @returns The expansion map as a JSON object
     */
    renderToExpansionMap: () => ExpansionMap;

    /**
     * Render the document to MIDI.
     * @returns A MIDI file as a base64 encoded string
     */
    renderToMIDI: () => string;

    /**
     * Render a document to Plaine and Easie code.
     *
     * Only the top staff / layer is exported.
     * @returns The PAE as a string
     */
    renderToPAE: () => string;

    /**
     * Render a page to SVG.
     * @param pageNumber The page to render (1-based), default 1
     * @param xmlDeclaration True for including the xml declaration in the SVG output, default false
     * @returns The SVG page as a string
     */
    renderToSVG: (pageNumber?: number, xmlDeclaration?: boolean) => string;

    /**
     * Render a document to a timemap.
     * @param options A stringified JSON objects with the timemap options
     * @returns The timemap as a JSON object
     */
    renderToTimemap: (options?: TimeMapOptions) => TimeMapEntry[];

    /**
     * Reset all options to default values.
     */
    resetOptions: () => void;

    /**
     * Reset the seed used to generate MEI @xml:id attribute values.
     *
     * Passing 0 will seed the @xml:id generator with a random (time-based) seed value. This method will have no effect if the xml-id-checksum option is set.
     * @param seed The seed value for generating the @xml:id values (0 for a time-based random seed)
     */
    resetXmlIdSeed: (seed: number) => void;

    /**
     * Set the value for a selection.
     *
     * The selection will be applied only when some data is loaded or the layout is redone. The selection can be reset (cancelled) by passing an empty string or an empty JSON object. A selection across multiple mdivs is not possible.
     * @param selection The selection as a stringified object
     * @returns True if the selection was successfully parsed or reset
     */
    select: (selection: Selection) => boolean;

    /**
     * Set option values.
     *
     * The name of each option to be set is to be given as JSON key.
     * @param options A JSON object with the output options
     * @returns True if the options were successfully set
     */
    setOptions: (options: VerovioOptions) => boolean;

    /**
     * Validate the Plaine & Easie code passed in the string data.
     *
     * A single JSON object is returned when there is a global input error. When reading the input succeeds, validation is grouped by input keys. The methods always returns errors in PAE pedantic mode. No data remains loaded after the validation.
     * @param data A string with the data in JSON or with PAE @ keys
     * @returns A JSON object with the validation warnings or errors
     */
    validatePAE: (data: string | { [key: string]: string }) => PAEValidation;
}
