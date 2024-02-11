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
        readonly persistence: InstrumentPropertyPersistence;
    }

    interface ccState {
        cc: number;
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
        on(propName: string, handler: (normValue: number) => void): void;
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
         * Method used to set a normalised double at a ceterain path in the Gorilla Engine.
         *
         * @param path The path to the normalised double that should be set.
         * @param value The normalised double that should be set at the given `path`.
         * @returns `true` if the value has been set succcessfully or `false` otherwise.
         */
        setNormalisedDoubleAtPath(path: string, value: number): boolean;

        /**
         * Method used to retrieve a normalised double from the Gorilla Engine.
         *
         * @param path The path to the normalised double should be retrieved.
         * @returns The normalised double found at the given `path` or `false` if nothing was found.
         */
        getNormalisedDoubleAtPath(): number | boolean;

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

        getMIDICCstate(): ccState[];

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

        setNormalizedDoubleAtPath(path: string, value: number): void;

        getNormalizedDoubleAtPath(path: string): number;

        getLoadingStatus(): boolean;

        getLoadingProgressPercent(): number;

        startRecallingParameterState(): void;

        endRecallingParameterState(): boolean;

        addParameter(persistence: number): InstrumentProperty;

        getWaveformOverview(
            numPoints: number,
            zoneID: number,
            start: number,
            end: number,
            vertZoom: number,
        ): Uint8Array;

        getStringAtPath(path: string): string;

        getSampleMetadata(filePath: string, overviewSize: number): { metadata: string; overview: Uint8Array };
    }

    interface Blob {
        loadInstrument(name: string): Instrument;
        getInstrumentNames(): string[];
    }

    interface PreviewPlayer {
        on(eventName: string, callback: any): void;
    }

    function registerUncaughtUIExceptionCallback(handler: (err: Error) => void): void;
    function getResourcePath(): string;
    function getPluginName(): string;
    function getPluginType(): string;
    function getPluginPath(): string;
    function quitApplication(): void;
    function getManufacturerName(): string;
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
    function checkLicense(): boolean;
    function checkBeatportRTO(): string;
    function isTrial(): boolean;
    function trialExpirationTimestamp(): number;
    function initialiseSpliceRTO(pluginName?: string): any;
    function disposeInstrument(instrument: Instrument): void;
    function setActiveInstrument(instrument: Instrument): void;
    function createEmptyInstrument(): Instrument;
    function setSessionSaveCallback(callback: (state: string) => string, instance: any): void;
    function setSessionLoadCallback(callback: (state: string) => string, instance: any): void;
    function setParametersDirty(dirty: boolean): void;
    function areParametersDirty(): boolean;
    function shouldWaitForReadySignal(): void;
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
        function loadUIfromYAML(ymlPath: string): void;
        function getControlById(id: string): Component;
        function createWindow(window: Window): void;
    }
}
