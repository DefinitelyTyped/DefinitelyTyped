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
     * default true
     */
    scoreBased?: boolean;
    /**
     * remove all @xml:id not used in the data; default false
     */
    removeIds?: boolean;
}

export interface TimeMapOptions {
    includeMeasures?: boolean;
    includeRests?: boolean;
}
export interface TimeMapEntry {
    tstamp: number;
    qstamp: number;
    on?: string[];
    off?: string[];
    tempo?: number;
}

export interface DescriptiveFeatures {
    intervalsChromatic: string[];
    intervalsDiatonic: string[];
    intervalsIds: string[];
    pitchesChromatic: string[];
    pitchesDiatonic: string[];
    pitchesIds: string[];
}

export interface RedoLayoutOptions {
    /**
     * true by default
     */
    resetCache?: boolean;
}

export const module: VerovioModule;
export interface VerovioModule {
    onRuntimeInitialized(): void;
    FS_unlink(path: string): void;
    FS_createDataFile(
        parent: string,
        name: string,
        data: string,
        canRead: boolean,
        canWrite: boolean,
        canOwn: boolean,
    ): void;
}

export class toolkit {
    constructor(verovioModule?: VerovioModule);

    /**
     * Filter Humdrum data.
     *
     * @returns The Humdrum data as a string
     */
    convertHumdrumToHumdrum(humdrumData: string): string;

    /**
     * Convert Humdrum data to MIDI.
     *
     * @returns The MIDI file as a base64-encoded string
     */
    convertHumdrumToMIDI(humdrumData: string): string;

    /**
     * Convert MEI data into Humdrum data.
     *
     * @returns The Humdrum data as a string
     */
    convertMEIToHumdrum(meiData: string): string;

    /**
     * Edit the MEI data.
     *
     * @param editorAction The editor actions as a JSON object
     * @returns True if the edit action was successfully applied
     */
    edit(editorAction: EditorAction): boolean;

    /**
     * Return the editor status.
     *
     * @returns The editor status as an object
     */
    editInfo(): EditorAction;

    /**
     * Return all available options grouped by category.
     *
     * For each option, returns the type, the default value, and the minimum and maximum value (when available)
     */
    getAvailableOptions(): AvailableOptions;

    /**
     * Return descriptive features as a JSON string.
     * The features are tailored for implementing incipit search
     *
     * @param options A JSON object with the feature extraction options
     *
     * @returns A JSON object with the requested features
     */
    getDescriptiveFeatures(options?: unknown): DescriptiveFeatures;

    /**
     * Return element attributes as a JSON object.
     *
     * The attributes returned include the ones not supported by Verovio
     *
     * @param xmlId the ID (xml:id) of the element being looked for
     * @returns A JSON object with all attributes
     */
    getElementAttr(xmlId: string): { [attribute: string]: string };

    /**
     * Returns array of IDs of elements being currently played.
     *
     * @param millisec The time in milliseconds
     * @returns A JSON object with the page and notes being played
     */
    getElementsAtTime(millisec: number): { notes: string[]; page: number };

    /**
     * Returns a vector of ID strings of all elements (the notated and the expanded) for a given element.
     *
     * @param xmlId the ID (xml:id) of the element being looked for
     * @returns A JSON object with all IDs
     */
    getExpansionIdsForElement(xmlId: string): { [notated: string]: string };

    /**
     * Get the humdrum buffer.
     *
     * @returns The humdrum buffer as a string
     */
    getHumdrum(): string;

    /**
     * Returns the log message of the last performed operation, for example after having called loadData.
     *
     * @returns The log content as a string
     */
    getLog(): string;

    /**
     * Returns the MEI data loaded in the toolkit. If a page number is provided (i.e. > 0), then
     * only that page is exported. In score-based MEI, then only the section element will be
     * output. Set options.scoreBased to true for standard score-based MEI and false for the
     * internal page-based MEI.
     *
     * @param options  JSON object with the output options
     * @returns the MEI as a string
     */
    getMEI(options?: GetMeiOptions): string;

    /**
     * Return MIDI values of the element with the ID (xml:id)
     *
     * RenderToMIDI() must be called prior to using this method
     *
     * @param xmlId the ID (xml:id) of the element being looked for
     * @returns A JSON object with the MIDI values
     */
    getMIDIValuesForElement(xmlId: string): MIDIValues;

    /**
     * Returns the ID string of the notated (the original) element.
     *
     * @param xmlId the ID (xml:id) of the element being looked for
     * @returns A stringified JSON object with all IDs
     */
    getNotatedIdForElement(xmlId: string): string;

    /**
     * Return a dictionary of all the options.
     *
     * @param defaultValues True for getting the default values and false for the current values
     * @returns A stringified JSON object
     */
    getOptions(defaultValues?: boolean): VerovioOptions;

    /**
     * Return the number of pages in the loaded document.
     *
     * The number of pages depends on the page size and if encoded layout was taken into account or not.
     *
     * @returns The number of pages
     */
    getPageCount(): number;

    /**
     * Return the page on which the element is the ID (xml:id) is rendered.
     *
     * This takes into account the current layout options.
     *
     * @param xmlId the ID (xml:id) of the element being looked for
     * @returns the page number (1-based) where the element is (0 if not found)
     */
    getPageWithElement(xmlId: string): number;

    /**
     * Return the time at which the element is the ID (xml:id) is played.
     *
     * RenderToMIDI() must be called prior to using this method.
     *
     * @param xmlId the ID (xml:id) of the element being looked for
     * @returns The time in milliseconds
     */
    getTimeForElement(xmlId: string): number;

    /**
     * Return a JSON object string with the following key values for a given note.
     *
     * Return scoreTimeOnset, scoreTimeOffset, scoreTimeTiedDuration, realTimeOnsetMilliseconds, realTimeOffsetMilliseconds, realTimeTiedDurationMilliseconds.
     *
     * @param xmlId the ID (xml:id) of the element being looked for
     * @returns A JSON object with the values
     */
    getTimesForElement(xmlId: string): {
        scoreTimeOnset: number;
        scoreTimeOffset: number;
        scoreTimeDuration: number;
        scoreTimeTiedDuration: number;
        realTimeOnsetMilliseconds: number;
        realTimeOffsetMilliseconds: number;
    };

    /**
     * Return the version number.
     *
     * @returns the version number as a string
     */
    getVersion(): string;

    /**
     * Load a string data with the type previously specified in the options.
     *
     * By default, the methods try to auto-detect the type.
     *
     * @param meiData A string with the data (e.g., MEI data) to be loaded
     * @returns True if the data was successfully loaded
     */
    loadData(meiData: string): boolean;

    /**
     * Load a MusicXML compressed file passed as base64 encoded string.
     *
     * @param zipDataBase64 A ZIP file as a base64 encoded string
     * @returns True if the data was successfully loaded
     */
    loadZipDataBase64(zipDataBase64: string): boolean;

    /**
     * Load a MusicXML compressed file passed as a buffer of bytes.
     *
     * @param zipDataBuffer A ZIP file as a buffer of bytes
     * @returns True if the data was successfully loaded
     */
    loadZipDataBuffer(zipDataBuffer: ArrayBuffer): boolean;

    /**
     * Redo the layout of the loaded data.
     *
     * This can be called once the rendering option were changed, for example with a new page (sceen) height or a new zoom level.
     *
     * @param options JSON object with the action options;
     */
    redoLayout(options?: RedoLayoutOptions): void;

    /**
     * Redo the layout of the pitch postitions of the current drawing page.
     *
     * Only the note vertical positions are recalculated with this method. RedoLayout() needs to be called for a full recalculation.
     */
    redoPagePitchPosLayout(): void;

    /**
     * Loads and the data with the options passed as JSON object and renders the first page. This
     * methods is a shortcut for loadData and then renderPage and is appropriate for rendering small
     * data snippets. The data does stay in memory once loaded. Also, up to version 0.9.12, the JSON
     * object had to be stringified.
     *
     * @deprecated
     */
    renderData(meiData: string, options: VerovioOptions): string;

    /**
     * Render the document to MIDI.
     * @returns A MIDI file as a base64 encoded string
     */
    renderToMIDI(): string;

    /**
     * Render a document to Plaine and Easie.
     *
     * Only the top staff / layer is exported.
     * @returns The PAE as a string
     */
    renderToPAE(): string;

    /**
     * Renders a page for the data loaded in the toolkit and returns it in SVG. The page numbering
     * is 1-based.
     *
     * @param pageNumber The page to render (1-based), defaults to 1
     * @param xmlDeclaration True for including the xml declaration in the SVG output, defaults to false
     * @returns The SVG page as a string
     */
    renderToSVG(pageNumber?: number, xmlDeclaration?: boolean): string;

    /**
     * Render a document to a timemap.
     *
     * @param options A JSON object with the timemap options
     * @returns The timemap
     */
    renderToTimemap(options?: TimeMapOptions): TimeMapEntry[];

    /**
     * Reset all options to default values.
     */
    resetOptions(): void;

    /**
     * Reset the @xml:id seed.
     *
     * Passing 0 will seed the xml:id generator with a random (time-based) seed value. This method will have no effect if the xml-id-checksum option is set.
     *
     * @param seed The seed value for generating the xml:id values (0 for a time-based random seed)
     */
    resetXmlIdSeed(seed: number): void;

    /**
     * Set the value for a selection.
     *
     * The selection will be applied only when some data is loaded or the layout is redone.
     * The selection can be reset (cancelled) by passing an empty string or an empty JSON object.
     * A selection across multiple mdivs is not possible.
     *
     * @param selection The selection as a JSON object
     * @returns True if the selection was successfully parsed or reset
     */
    select(selection: object): boolean;

    /**
     * Set option values.
     *
     * The name of each option to be set is to be given as JSON key.
     *
     * @param options A JSON objects with the output options
     * @returns True if the options were successfully set
     */
    setOptions(options: VerovioOptions): boolean;
}
