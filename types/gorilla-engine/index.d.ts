/// <reference path = "interfaces/Background.d.ts" />
/// <reference path = "interfaces/Bounds.d.ts" />
/// <reference path = "interfaces/Clickable.d.ts" />
/// <reference path = "interfaces/Common.d.ts" />
/// <reference path = "interfaces/Component.d.ts" />
/// <reference path = "interfaces/Font.d.ts" />
/// <reference path = "interfaces/KeyboardFocus.d.ts" />
/// <reference path = "interfaces/Scrollable.d.ts" />
/// <reference path = "interfaces/Skinnable.d.ts" />
/// <reference path = "interfaces/MIDILearn.d.ts" />
/// <reference path = "interfaces/Highlight.d.ts" />
/// <reference path = "interfaces/Keyable.d.ts" />
/// <reference path = "interfaces/Margin.d.ts" />
/// <reference path = "interfaces/Tag.d.ts" />

/// <reference path = "components/AmpEnv.d.ts" />
/// <reference path = "components/BarStepEditor.d.ts" />
/// <reference path = "components/ComboBox.d.ts" />
/// <reference path = "components/Curve.d.ts" />
/// <reference path = "components/DragContainer.d.ts" />
/// <reference path = "components/DragTarget.d.ts" />
/// <reference path = "components/DropZone.d.ts" />
/// <reference path = "components/Knob.d.ts" />
/// <reference path = "components/Label.d.ts" />
/// <reference path = "components/LevelMeter.d.ts" />
/// <reference path = "components/ListBox.d.ts" />
/// <reference path = "components/LottieAnimation.d.ts" />
/// <reference path = "components/MidiKeyboard.d.ts" />
/// <reference path = "components/Pad.d.ts" />
/// <reference path = "components/ScrollView.d.ts" />
/// <reference path = "components/SliceEditor.d.ts" />
/// <reference path = "components/Slider.d.ts" />
/// <reference path = "components/StepEditor.d.ts" />
/// <reference path = "components/TextBox.d.ts" />
/// <reference path = "components/Toggle.d.ts" />
/// <reference path = "components/Trigger.d.ts" />
/// <reference path = "components/Waveform.d.ts" />
/// <reference path = "components/Window.d.ts" />
/// <reference path = "components/TagBrowser.d.ts" />
/// <reference path = "components/TagEditor.d.ts" />
/// <reference path = "components/XYPad.d.ts" />
/// <reference path = "components/Rubberband.d.ts" />

declare namespace GorillaEngine {
    /**
     * Instrument parameter session persistence
     */
    interface InstrumentPropertyPersistence {
        /**
         * Indicates that the parameter is not exposed to the host DAW, should not saved in a preset and should not be saved in the session.
         */
        private: boolean;
        /**
         * Indicates the the parameter is exposed to the host DAW.
         */
        showInHost: boolean;
        /**
         * Indicates that the parameter should be saved in the session.
         */
        saveInSession: boolean;
        /**
         * Indicates that the parameter should be saved into a preset.
         */
        saveInPreset: boolean;
    }
    /**
     * Instrument property
     */
    interface InstrumentProperty {
        /**
         * A normalised representation of its value.
         */
        normValue: number;
        /**
         * Its actual value.
         */
        value: number;
        normValueAsync: number;
        valueAsync: number;
        readonly defaultValue: number;
        readonly minValue: number;
        readonly maxValue: number;
        readonly resolution: number;
        /**
         *  The number of its steps if it's a stepped parameter
         */
        readonly numSteps: number;
        readonly key: string;
        readonly name: string;
        readonly category: string;
        readonly label: string;
        readonly text: string;
        readonly unit: string;
        /**
         * Its steps if it's a stepped paramter
         */
        readonly steps: string[];
        /**
         * Hint for the best type of UI control for this parameter:
         * "default": usually a knob, could also be a slider or drag/spin control
         * "volume": audio volume control down to silence, often a vertical slider but could be horizontal or a knob
         * "drag": more suited to a drag/spin control because usually only a small part of the range is used
         * "keySelect": select a MIDI note
         * "outSelect": select an audio output (zero for default, negative values for internal busses)
         * "modSource": select from a list of mod sources (where mod source names should be inserted instead of numbers)
         * "voiceGroup": select from a list of voice groups (where voice group names should be inserted instead of numbers)
         * (the above types can fall back to e.g. ControlTypeDrag if no special behaviour is implemented for them in the UI)
         * "onOffSwitch": toggle between Off/On (could be a power switch or \"Bypass\" or \"Solo\" etc. - see parameter name)
         * "switch": toggle between two values that are not Off/On, could also be displayed as a menu
         * "menu": dropdown menu, could also be a multi-way switch or a stepped knob if there are not many steps
         * "levelMeter": audio level meter: display should apply log scaling (may have multiple channels)
         * "meter": meter that may be showing something other than audio level (may have multiple channels)
         * "display": numeric or text display: value is not user editable
         * "text": editable text
         * "textBox": multi-line text with at least copy/paste of the whole text, if not full editing
         * "array": edit multiple values e.g. as a bargraph
         * "waveform": display a waveform overview
         * "notVisible": not intended for display to the user
         */
        readonly controlType: string[];
        readonly persistence: InstrumentPropertyPersistence;
    }

    interface ccState {
        /**
         * MIDI CC number in the range of 1-119
         */
        cc: number;
        /**
         * Path in the instrument, e.g. `Scripts/0/Volume`
         */
        path: string;
    }

    interface midiData {
        status: string;
        data0: string;
        data1: string;
        tickAbsolute: string;
    }

    /**
     * Instrument
     */
    interface Instrument {
        /**
         * Attach an event listener to an instrument parameter. Whenever the instrument parameter
         * changes the callback will be called with the current normalized value of the parameter.
         * Does not trigger for meter parameters.
         * @param paramName the instrument parameter name
         * @param handler the callback
         * @returns `1` when the handler was successfully attached
         */
        on(paramName: string, handler: (normValue: number) => void): number;
        /**
         * Dettach one or multiple event listeners for an instrument parameter. Pass in a reference
         * to the callback to remove a specific listener. If no callback is passed then all listeners
         * for that parameter are removed
         * @param paramName
         * @returns the number of removed listeners
         */
        off(paramName: string, handler?: (normValue: number) => void): number;
        /**
         * Method used to retrieve a serialised module from the Gorilla Engine.
         *
         * @param path The path to the module that should be retrieved.
         * @returns The serialised module found at the given `path` or `false` if nothing was found.
         */
        getModuleAtPath(path: string): string | boolean;
        /**
         * Method used to set a module in an instrument in a given path
         * @param path The path to the module that should be retrieved.
         * @param module The serialised module to set as a string
         */
        setModuleAtPath(path: string, module: string): boolean;
        /**
         * Method used to determine if a value from the Gorilla Engine is a module.
         *
         * @param path The path to the value that should be determined.
         * @returns `true` if the value found at the given `path` is a module or `false` if it's not or nothing was found.
         */
        isModuleAtPath(path: string): boolean;
        /**
         * Method used to retrieve a value from the Gorilla Engine.
         *
         * @param path The path to the value that should be retrieved.
         * @returns The value found at the given `path` or `false` if nothing was found.
         */
        getValueAtPath(path: string): string | object | number | Int32Array | Float64Array | boolean;

        /**
         * Method used to set a string at a certain path in the engine.
         * This method could for example be used to set a user sample to a certain Zone in the Gorilla Engine.
         *
         * @param path The path to the string that should be set.
         * @param value The string that should be set at the given `path`.
         * @returns `true` if the value has been set succcessfully or `false` otherwise.
         */
        setStringAtPath(path: string, value: string): boolean;

        /**
         * Method used to render a section of a sample to a waveform. Commonly used to source the `value` property of the `waveform` control.
         *
         * @param numPoints The number of points that the waveform should be rendered into.
         * @param zoneId The id of the zone whichs sample should be rendered to a waveform.
         * @param start A normalised value indicating from where in the sample waveform rendering should start.
         * @param end A normalised value indicating  where in the sample waveform rendering should end.
         * @returns The waveform of the sample found at `zoneId`.
         */
        getWaveformData(numPoints: number, zoneId: number, start: number, end: number): Uint8Array;

        /**
         * Method used to retrieve an array of integers from the Gorilla Engine.
         *
         * @param path The path to the array that should be retrieved.
         * @returns The array of integers found at the given `path` or `false` if nothing was found.
         */
        getIntArrayAtPath(path: string): Int32Array | boolean;

        /**
         * Method used to set an array of integers at a ceterain path in the Gorilla Engine.
         *
         * @param path The path to the integer array that should be set.
         * @param value The integer array that should be set at the given `path`.
         * @returns `true` if the value has been set succcessfully or `false` otherwise.
         */
        setIntArrayAtPath(
            path: string,
            value: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array,
        ): boolean;

        /**
         * Method used to retrieve an array of doubles from the Gorilla Engine.
         *
         * @param path The path to the array that should be retrieved.
         * @returns The array of doubles found at the given `path` or `false` if nothing was found.
         */
        getDoubleArrayAtPath(path: string): Float64Array | boolean;

        /**
         * Method used to set an array of floats or doubles at a ceterain path in the Gorilla Engine.
         *
         * @param path The path to the double array that should be set.
         * @param value The float or double array that should be set at the given `path`.
         * @returns `true` if the value has been set succcessfully or `false` otherwise.
         */
        setDoubleArrayAtPath(path: string, value: Float32Array | Float64Array): boolean;

        /**
         * Method used to retrieve a double from the Gorilla Engine.
         *
         * @param path The path to the double should be retrieved.
         * @returns The double found at the given `path` or `false` if nothing was found.
         */
        getDoubleAtPath(path: string): number | boolean;

        /**
         * Method used to set a double at a ceterain path in the Gorilla Engine.
         *
         * @param path The path to the double that should be set.
         * @param value The double that should be set at the given `path`.
         * @returns `true` if the value has been set succcessfully or `false` otherwise.
         */
        setDoubleAtPath(path: string, value: number): boolean;

        /**
         * Method used to set an integer at a ceterain path in the Gorilla Engine.
         *
         * @param path The path to the integer that should be set.
         * @param value The integer that should be set at the given `path`.
         * @returns `true` if the value has been set succcessfully or `false` otherwise.
         */
        setIntAtPath(path: string, value: number): boolean;

        /**
         * Method used to retrieve an integer from the Gorilla Engine.
         *
         * @param path The path to the integer should be retrieved.
         * @returns The integer found at the given `path` or `false` if nothing was found.
         */
        getIntAtPath(path: string): number | boolean;

        /**
         * Method used to insert a Gorilla Engine module at a given path.
         * Attempting to set a variable-length module array entry greater than the current length of the array
         * will fail (for example, to set `Groups/2` the groups `0` and `1` must exist). Setting a module always inserts
         * the module at the speficied index while other value types overwrite the value at the index.
         * To replace a module at a `path` use {@link Instrument#removeModuleAtPath} prior to inserting the new module.
         *
         * @param path The path at which the module should be inserted.
         * @param value A Gorilla Enginge module serialised to JSON that should be set at the given `path`.
         * @returns `true` if the module has been inserted succcessfully or `false` otherwise.
         */
        insertModuleAtPath(path: string, value: string): boolean;

        /**
         * Method used to remove a module at a given `path`.
         *
         * @param path The path to the module that should be removed.
         * @returns `true` if the module has been removed succcessfully or `false` otherwise.
         */
        removeModuleAtPath(path: string): boolean;

        /**
         * Method used to set a normalized double at a ceterain path in the Gorilla Engine.
         *
         * @param path The path to the normalised double that should be set.
         * @param value The normalised double that should be set at the given `path`.
         * @returns `true` if the value has been set succcessfully or `false` otherwise.
         */
        setNormalizedDoubleAtPath(path: string, value: number): boolean;

        /**
         * Method used to retrieve a normalized double from the Gorilla Engine.
         *
         * @param path The path to the normalised double that should be retrieved.
         * @returns The normalised double found at the given `path` or `false` if nothing was found.
         */
        getNormalizedDoubleAtPath(): number | boolean;

        /**
         * Method used to retrieve MIDI data from the first instrument script that implements `on midi_drag`
         *
         * @returns Array of Midi Events
         */
        getMidiDragData(): midiData[];

        /**
         * Method used to send a `note on` MIDI event to the Gorilla Engine.
         *
         * @param key The musical key that should be triggered. The key is expected to be between `0` and `127`.
         * @param velocity The velocity that the key should be triggerd with. The velocity is expected to be between `0` and `127`.
         */
        noteOn(key: number, velocity: number): void;

        /**
         * Method used to send a `note off` MIDI event to the Gorilla Engine.
         *
         * @param key The musical key that should be untriggered. The key is expected to be between `0` and `127`.
         */
        noteOff(ke: number): void;

        /**
         * Method used to stringify a given `value` at a certain `path` in the Gorilla Engine.
         * This is useful to get a label string for parameters in the Gorilla Engine.
         * The value is denormalised according to the scale of the parameter found at `path` and
         * the parameter’s unit is appended to the string accordingly.
         *
         * @param path The path at which the value should be stringified.
         * @param value A value that should be stringified at the given `path`.
         * @returns `false` if the value could not be stringified or the given `value` as a `string`.
         */
        valueToStringAtPath(path: string, value: number): boolean | string;

        /**
         * Method used to retrieve a string from the Gorilla Engine.
         * @param path The path to the string that should be retrieved.
         * @returns the string found at the given `path` or `false` if nothing was found.
         */
        getStringAtPath(path: string): string;

        /**
         * Get the current MIDI CC state
         * @returns an array of MIDI CC to instrument path mappings
         */
        getMIDICCstate(): ccState[];

        /**
         * Set the MIDI CC state
         * @param ccMidiSatate an array of MIDI CC to instrument path mappings
         */
        setMIDICCstate(ccMidiSatate: ccState[]): void;

        renderAudioFile(
            renderFilePath: string,
            key: number,
            velocity: number,
            renderUntilSilence: boolean,
            minFileLength: number,
        ): void;

        renderAudioFileFromMidi(
            renderFilePath: string,
            midiData: midiData[],
            renderUntilSilence: boolean,
            minFileLength: number,
        ): void;

        getLoadingStatus(): boolean;

        getLoadingProgressPercent(): number;

        startRecallingParameterState(): void;

        endRecallingParameterState(): boolean;

        /**
         * Add an unconnected dynamic parameter.
         * Persistence flags:
         * Private       = 0x000
         * ShowInHost    = 0x001
         * SaveInSession = 0x002
         * SaveInPreset  = 0x004
         * @param persistence the or'd persistence flags of the parameter
         */
        addParameter(persistence: number): InstrumentProperty;

        getWaveformOverview(
            numPoints: number,
            zoneID: number,
            start: number,
            end: number,
            vertZoom: number,
        ): Uint8Array;

        getSampleMetadata(filePath: string, overviewSize: number): { metadata: string; overview: Uint8Array };
    }

    interface Blob {
        /**
         * Load the specified instrument
         * @param name the name of the instrument to load
         */
        loadInstrument(name: string): Instrument;
        /**
         * List all instrument names contained in this blob
         */
        getInstrumentNames(): string[];
        /**
         * Read an item from the blob table of contents
         */
        getValueFromTOC(key: string): string;
        /**
         * Get the unique ID of the blob
         */
        readonly uuid: string;
        /**
         * Get the version/timestamp string of the first blob part, if any
         */
        readonly part1version: string;
        /**
         * Get the version/timestamp string of the second blob part, if any
         */
        readonly part2version: string;
    }

    interface PreviewPlayer {
        on(eventName: string, callback: any): void;
    }

    function registerUncaughtUIExceptionCallback(handler: (err: Error) => void): void;
    /**
     * Get the platform specific path where all the resources (assets, blobs, etc.) have
     * been installed to.
     * @returns the resource path
     */
    function getResourcePath(): string;
    function getPluginName(): string;
    function getPluginType(): string;
    function getPluginPath(): string;
    function getManufacturerName(): string;
    function quitApplication(): void;
    /**
     * Load blob at the specified path
     * @param blobPath the load blob
     * @throws if the blob could not be loaded e.g. it is not there or decryption failed
     */
    function loadBlob(blobPath: string): Blob;
    function getPluginNRTB(enable: boolean): void;
    /**
     * Method updates the list of the automatable parameters note it does not work for all DAWS
     */
    function updateHostDisplay(): void;
    /**
     * Method returns the Host name of the plugin is running in
     * @returns The name of the host
     */
    function getHostDescription(): string;
    interface MessageBoxOptions {
        title: string;
        message: string;
        iconType: "info" | "question" | "warning" | "error";
    }
    function showNativeMessageBoxSync(options: MessageBoxOptions): void;
    function showNativeMessageBox(options: MessageBoxOptions): Promise<void>;
    function calculateTextWidth(text: string, font: string, fontSize: number, fontKerning: number): Promise<number>;
    /**
     * If Codemeter is enabled this will check if a valid license is available. If it is
     * then the MIDI and Audio will automatically be enabled if they were disabled.
     * @returns `true` if a valid license has been found *or* codemeter is not enabled, `false` otherwise
     */
    function checkLicense(): boolean;
    /**
     * If Codemeter is enabled this will indicate if the license checked with {@link checkLicense} is
     * a trial license
     * @returns `true` if it is a trial license, `false` if it isn't *or* codemeter is not enabled
     */
    function isTrial(): boolean;
    /**
     * If Codemeter is enabled this can be used to query the expiration timestamp of the running trial
     * @returns the timestamp when the trial expires. If there is no trial or codemeter is not enabled
     * this will return `0`
     */
    function trialExpirationTimestamp(): number;
    function checkBeatportRTO(): string;
    function initialiseSpliceRTO(pluginName?: string): any;
    function disposeInstrument(instrument: Instrument): void;
    /**
     * Activates an instrument, i.e. route MIDI to the instrument and send Audio from the isntrument to
     * the DAW. Currently only one instrument can be active. If there was
     * another instrument active before, it will get deativated.
     * @param instrument the instrument activate
     */
    function setActiveInstrument(instrument: Instrument): void;
    /**
     * Create an empty dummy instrument. It can be modified with e.g. {@link Instrument.setModuleAtPath}
     * @returns the empty instrument.
     */
    function createEmptyInstrument(): Instrument;
    /**
     * Load .inst file (and referenced sample files) at the specified path
     * @param instFilePath the .inst file to load
     * @throws if the instrument could not be loaded e.g. it is not there
     * @returns the instrument
     */
    function LoadInstrumentFromFile(instFilePath: string): Instrument;
    function setSessionSaveCallback(callback: (state: string) => string, instance: any): void;
    function setSessionLoadCallback(callback: (state: string) => string, instance: any): void;
    function setParametersDirty(dirty: boolean): void;
    function areParametersDirty(): boolean;
    /**
     * Set this flag to indicate that {@link signalReady} will be called once the plugin
     * initialization has completed.
     */
    function shouldWaitForReadySignal(): void;
    /**
     * Signal that the initialization is done. If this is not called although {@link shouldWaitForReadySignal}
     * has been called, then this will cause all sorts of problmes like hanging or half working DAWs
     */
    function signalReady(): void;
    function setParametersDirtyCallback(callback: any): void;
    function getBuildInformation(): any;
    function openURLinBrowser(path: string): void;
    function getPluginMM(v: boolean): void;
    function getPluginAE(v: boolean): void;
    function getPreviewPlayer(): PreviewPlayer;
    function openFileChooser(config: {
        allowMultiple?: boolean;
        browseDirectory?: boolean;
        saveDialog?: boolean;
        warnOnOverwrite?: boolean;
        hint?: string;
        allowedExtensions?: string;
        defaultLocation?: string;
    }): Promise<string[]>;
    /**
     * Method to convert mp3 files to wave files
     * @param mp3Filepath The path of the mp3 file to convert
     * @param wavFilePath The path where the converted file should be stored
     * @returns `true` if the convertion was successful
     */
    function convertMp3ToWav(mp3Filepath: string, wavFilePath: string): Promise<boolean>;
    /**
     * Method to register opening and closing of the plugin editor
     * @param openCallback The callback when the plugin editor opens
     * @param closeCallback The callback when the plugin editor closes
     */
    function registerEditorCallbacks(openCallback?: any, closeCallback?: any): void;
    let sessionSaveLoadCallbackTimeoutMs: number;

    namespace UI {
        /**
         * Load a UI laid out in a yaml file
         * @param ymlPath The path to yaml layout file
         */
        function loadUIfromYAML(ymlPath: string): void;
        /**
         * Auto generate a generic UI based on the activate blob. Useful for prototyping
         */
        function autoGenerate(): void;
        /**
         * Get the control with the given id.
         * @param id The id of the control
         * @returns the control
         * @throws when there is no control with the specified id
         */
        function getControlById(id: string): Component;
        /**
         * Creates the window based on the passed in window control {@link GorillaEngine.UI.Window}.
         * @param window the window to show
         */
        function createWindow(window: Window): void;
        /**
         * Sets the postion where the settings button is located
         * @param x  the x position to place the settings button
         * @param y  the y position to place the settings button
         */
        function setSettingsButtonPosition(x: number, y: number): void;
    }
}
