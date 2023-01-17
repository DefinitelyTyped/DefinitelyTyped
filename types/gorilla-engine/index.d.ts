// Type definitions for Gorilla Engine 1.0
// Project: https://gorilla-engine.com
// Definitions by: Julian Woodward <https://github.com/jhwoodward>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path = "interfaces/Background.d.ts" />
/// <reference path = "interfaces/Bounds.d.ts" />
/// <reference path = "interfaces/Clickable.d.ts" />
/// <reference path = "interfaces/Common.d.ts" />
/// <reference path = "interfaces/Component.d.ts" />
/// <reference path = "interfaces/Font.d.ts" />
/// <reference path = "interfaces/KeyboardFocus.d.ts" />
/// <reference path = "interfaces/Scrollable.d.ts" />
/// <reference path = "interfaces/Skinnable.d.ts" />

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

declare namespace GorillaEngine {
    /**
     * Instrument parameter session persistence
     */
    interface InstrumentPropertyPersistence {
        private: boolean;
        showInHost: boolean;
        saveInSession: boolean;
        saveInPreset: boolean;
    }
    /**
     * Instrument property
     */
    interface InstrumentProperty {
        normValue: number;
        value: number;
        normValueAsync: number;
        valueAsync: number;
        defaultValue: number;
        minValue: number;
        maxValue: number;
        resolution: number;
        numSteps: number;
        key: string;
        name: string;
        category: string;
        label: string;
        text: string;
        unit: string;
        steps: string[];
        persistence: InstrumentPropertyPersistence;
    }

    /**
     * Instrument
     */
    interface Instrument {
        on(propName: string, handler: (normValue: number) => void): void;
    }

    /**
     * Blob
     */
    interface Blob {
        loadInstrument(name: string): Instrument;
        getInstrumentNames(): string[];
    }

    function registerUncaughtUIExceptionCallback(handler: (err: Error) => void): void;
    function getResourcePath(): string;
    function getPluginName(): string;
    function getManufacturerName(): string;
    function loadBlob(blobPath: string): Blob;
    function disposeInstrument(instrument: Instrument): void;
    function setActiveInstrument(instrument: Instrument): void;
    function setSessionSaveCallback(callback: any, instance: any): void;
    function setSessionLoadCallback(callback: any, instance: any): void;
    function getBuildInformation(): any;

    namespace UI {
        function loadUIfromYAML(ymlPath: string): void;
        function getControlById(id: string): Component;
    }
}
