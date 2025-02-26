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
export interface TimeMapEntry {
    tstamp: number;
    qstamp: number;
    on?: string[];
    off?: string[];
    tempo?: number;
}

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

    /**
     * Edit the MEI data.
     */
    edit: (editorAction: EditorAction) => boolean;

    /**
     * Return the editor status.
     */
    editInfo: () => EditorAction;

    /**
     * Return all available options grouped by category.
     *
     * For each option, returns the type, the default value, and the minimum and maximum value (when available)
     */
    getAvailableOptions: () => AvailableOptions;

    /**
     * Returns array of IDs of elements being currently played.
     * @returns A JSON object with the page and notes being played
     */
    getElementsAtTime: (millisec: number) => { notes: string[]; page: number };

    /**
     * Return element attributes as a JSON string.
     *
     * The attributes returned include the ones not supported by Verovio
     * @returns A JSON object with all attributes
     */
    getElementAttr: (xmlId: string) => { [attribute: string]: string };

    /**
     * Returns a vector of ID strings of all elements (the notated and the expanded) for a given element.
     */
    getExpansionIdsForElement: (xmlId: string) => { [notated: string]: string };

    /**
     * Get the humdrum buffer.
     */
    getHumdrum: () => string;

    /**
     * Returns the log message of the last performed operation, for example after having called loadData.
     */
    getLog: () => string;

    /**
     * Returns the MEI data loaded in the toolkit. If a page number is provided (i.e. > 0), then
     * only that page is exported. In score-based MEI, then only the section element will be
     * output. Set options.scoreBased to true for standard score-based MEI and false for the
     * internal page-based MEI.
     */
    getMEI: (options?: GetMeiOptions) => string;

    /**
     * Return MIDI values of the element with the ID (xml:id)
     *
     * RenderToMIDI() must be called prior to using this method
     */
    getMIDIValuesForElement: (xmlId: string) => MIDIValues;

    /**
     * Returns the ID string of the notated (the original) element.
     */
    getNotatedIdForElement: (xmlId: string) => string;

    /**
     * Return the number of pages in the loaded document.
     *
     * The number of pages depends one the page size and if encoded layout was taken into account or not.
     */
    getPageCount: () => number;

    /**
     * Return the page on which the element is the ID (xml:id) is rendered.
     *
     * This takes into account the current layout options.
     */
    getPageWithElement: (xmlId: string) => number;

    /**
     * Return the time at which the element is the ID (xml:id) is played.
     *
     * RenderToMIDI() must be called prior to using this method.
     */
    getTimeForElement: (xmlId: string) => number;

    /**
     * Return a JSON object string with the following key values for a given note.
     *
     * Return scoreTimeOnset, scoreTimeOffset, scoreTimeTiedDuration, realTimeOnsetMilliseconds, realTimeOffsetMilliseconds, realTimeTiedDurationMilliseconds.
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
     */
    getVersion: () => string;

    /**
     * Load a string data with the type previously specified in the options.
     *
     * By default, the methods try to auto-detect the type.
     * @returns True if the data was successfully loaded
     */
    loadData: (meiData: string) => boolean;

    /**
     * Load a MusicXML compressed file passed as base64 encoded string.
     * @returns True if the data was successfully loaded
     */
    loadZipDataBase64: (zipDataBase64: string) => boolean;

    /**
     * Load a MusicXML compressed file passed as a buffer of bytes.
     * @returns True if the data was successfully loaded
     */
    loadZipDataBuffer: (zipDataBuffer: ArrayBuffer) => boolean;

    /**
     * Redo the layout of the loaded data.
     *
     * This can be called once the rendering option were changed, for example with a new page (sceen) height or a new zoom level.
     */
    redoLayout: () => void;

    /**
     * Redo the layout of the pitch postitions of the current drawing page.
     *
     * Only the note vertical positions are recalculated with this method. RedoLayout() needs to be called for a full recalculation.
     */
    redoPagePitchPosLayout: () => void;

    /**
     * Loads and the data with the options passed as JSON object and renders the first page. This
     * methods is a shortcut for loadData and then renderPage and is appropriate for rendering small
     * data snippets. The data does stay in memory once loaded. Also, up to version 0.9.12, the JSON
     * object had to be stringified.
     */
    renderData: (meiData: string, options: VerovioOptions) => string;

    /**
     * Render the document to MIDI.
     * @returns A MIDI file as a base64 encoded string
     */
    renderToMIDI: () => string;

    /**
     * Render a document to Plaine and Easie.
     *
     * Only the top staff / layer is exported.
     * @returns The PAE as a string
     */
    renderToPAE: () => string;

    /**
     * Renders a page for the data loaded in the toolkit and returns it in SVG. The page numbering
     * is 1-based.
     * @returns The SVG page as a string
     */
    renderToSVG: (pageNumber: number) => string;

    /**
     * Render a document to a timemap.
     */
    renderToTimemap: () => TimeMapEntry[];
    /**
     * Sets the options as JSON for the toolkit instance. Up to version 0.9.12, the JSON object had to be stringified.
     */
    setOptions: (options: VerovioOptions) => void;

    /**
     * Return a dictionary of all the options.
     *
     * @param defaultValues True for getting the default values and false for the current values
     */
    getOptions: (defaultValues?: boolean) => VerovioOptions;
}
